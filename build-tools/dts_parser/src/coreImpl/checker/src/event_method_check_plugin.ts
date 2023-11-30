/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ts from "typescript";
import { EVENT_NAME_LIST, EventMethodData, EVENT_METHOD_CHECK_VERSION, CollectParamStatus } from "../../../typedef/checker/event_method_check_interface";
import { ApiResultSimpleInfo, ErrorID, ErrorLevel, ErrorType, LogType } from "../../../typedef/checker/result_type";
import { ApiType, BasicApiInfo, MethodInfo, ParamInfo } from "../../../typedef/parser/ApiInfoDefination";
import { FilesMap, Parser } from "../../parser/parser";
import { AddErrorLogs } from "./compile_info";

export class EventMethodCheckPlugin {
  private apiData: FilesMap;
  constructor(apiData: FilesMap) {
    this.apiData = apiData;
  }

  public getAllEventMethod(): Map<string, EventMethodData> {
    const allBasicApi: BasicApiInfo[] = Parser.getAllBasicApi(this.apiData);
    const eventMethodInfo: BasicApiInfo[] = [];
    allBasicApi.forEach((basicApi: BasicApiInfo) => {
      if (basicApi.apiType === ApiType.METHOD && this.isEventMethod(basicApi.apiName)) {
        eventMethodInfo.push(basicApi);
      }
    });
    const eventMethodDataMap: Map<string, EventMethodData> = this.getEventMethodDataMap(eventMethodInfo);
    return eventMethodDataMap;
  }

  public checkEventMethod(eventMethodData: Map<string, EventMethodData>): ApiResultSimpleInfo[] {
    const checkResult: ApiResultSimpleInfo[] = [];
    eventMethodData.forEach((eventMethod: EventMethodData) => {
      // check on&off event pair
      if ((eventMethod.onEvents.length === 0 && eventMethod.offEvents.length !== 0) ||
        (eventMethod.onEvents.length !== 0 && eventMethod.offEvents.length === 0)) {
        const firstEvent: BasicApiInfo = eventMethod.onEvents.concat(eventMethod.offEvents)[0];
        if (this.checkVersionNeedCheck(firstEvent)) {
          // throws error: on和off事件未成对出现
        }
      }

      // check off event
      let offEvnetCallbackNumber: number = 0;
      let offCallbackRequiredNumber: number = 0;
      for (let i = 0; i < eventMethod.offEvents.length; i++) {
        const offEvent: MethodInfo = eventMethod.offEvents[i] as MethodInfo;
        if (offEvent.getParams().length < 2) {
          continue;
        }
        const eventCallbackStatus: CollectParamStatus = this.collectEventCallback(offEvent, offEvnetCallbackNumber,
          offCallbackRequiredNumber);
        offEvnetCallbackNumber += eventCallbackStatus.callbackNumber;
        offCallbackRequiredNumber += eventCallbackStatus.requiredCallbackNumber;
      }
      if (this.checkVersionNeedCheck(eventMethod.offEvents[0])) {
        if (offEvnetCallbackNumber !== 0 && offEvnetCallbackNumber === eventMethod.offEvents.length &&
          offEvnetCallbackNumber === offCallbackRequiredNumber) {
          // throws error: ERROR_EVENT_CALLBACK_OPTIONAL
        } else if (offEvnetCallbackNumber === 0 && eventMethod.offEvents.length !== 0) {
          // throws error: ERROR_EVENT_CALLBACK_OPTIONAL
        }
      }

      // check event first param
      const allEvnets: BasicApiInfo[] = eventMethod.onEvents.concat(eventMethod.offEvents).concat(eventMethod.emitEvents)
        .concat(eventMethod.onceEvents);
      for (let i = 0; i < allEvnets.length; i++) {
        const event: BasicApiInfo = allEvnets[i];
        const eventParams: ParamInfo[] = (event as MethodInfo).getParams();
        if (eventParams.length === 0 && this.checkVersionNeedCheck(event)) {
          // throws error: 事件至少有一个参数
          continue;
        }
        const firstParam: ParamInfo = eventParams[0];
        if (firstParam.getParamType() === ts.SyntaxKind.LiteralType) {
          const paramTypeName: string = firstParam.getType()[0].replace(/\'/g, '');
          if (!this.checkSmallHump(paramTypeName) && this.checkVersionNeedCheck(event)) {
            // throws error: ERROR_EVENT_NAME_SMALL_HUMP
          }
        } else if (firstParam.getParamType() !== ts.SyntaxKind.StringKeyword && this.checkVersionNeedCheck(event)) {
          if (firstParam.getType().length === 0) {
            // throws error: ERROR_EVENT_NAME_NULL
          } else {
            // throws error: ERROR_EVENT_NAME_STRING
          }
        }
      }
    });

    return checkResult;
  }

  private checkVersionNeedCheck(eventInfo: BasicApiInfo): boolean {
    return parseInt(eventInfo.getCurrentVersion()) > EVENT_METHOD_CHECK_VERSION;
  }

  private checkSmallHump(name: string): boolean {
    return /^[a-z]+[0-9]*([A-Z][a-z0-9]*)*$/g.test(name);
  }

  private collectEventCallback(offEvent: MethodInfo, callbackNumber: number, requiredCallbackNumber: number): CollectParamStatus {
    const lastParam: ParamInfo = offEvent.getParams().slice(-1)[0];
    if (lastParam.paramType) {
      const basicTypes = new Set([ts.SyntaxKind.NumberKeyword, ts.SyntaxKind.StringKeyword, ts.SyntaxKind.BooleanKeyword,
        ts.SyntaxKind.UndefinedKeyword, ts.SyntaxKind.LiteralType]);
      if (!basicTypes.has(lastParam.paramType)) {
        callbackNumber++;
        if (lastParam.getIsRequired()) {
          requiredCallbackNumber++;
        }
      }
    }
    return {
      callbackNumber: callbackNumber,
      requiredCallbackNumber: requiredCallbackNumber
    }
  }

  private getEventMethodDataMap(eventInfos: BasicApiInfo[]): Map<string, EventMethodData> {
    let eventMethodDataMap: Map<string, EventMethodData> = new Map();
    eventInfos.forEach((eventInfo: BasicApiInfo) => {
      const directorRelations: string[] = [...eventInfo.hierarchicalRelations];
      directorRelations.pop();
      const apiCompletePath: string = [...directorRelations, this.getEventName(eventInfo.apiName)].join('/');
      let eventMethodData: EventMethodData = {
        onEvents: [],
        offEvents: [],
        emitEvents: [],
        onceEvents: []
      }
      if (eventMethodDataMap.get(apiCompletePath)) {
        eventMethodData = eventMethodDataMap.get(apiCompletePath) as EventMethodData;
      }
      eventMethodDataMap.set(apiCompletePath, this.collectEventMethod(eventMethodData, eventInfo));
    });
    return eventMethodDataMap;
  }

  private collectEventMethod(eventMethodData: EventMethodData, eventInfo: BasicApiInfo): EventMethodData {
    const eventType: string = this.getEventType(eventInfo.apiName);
    switch (eventType) {
      case 'on':
        eventMethodData.onEvents.push(eventInfo);
        break;
      case 'off':
        eventMethodData.offEvents.push(eventInfo);
        break;
      case 'emit':
        eventMethodData.emitEvents.push(eventInfo);
        break;
      case 'once':
        eventMethodData.onceEvents.push(eventInfo);
        break;
    }
    return eventMethodData;
  }

  private getEventName(apiName: string): string {
    return apiName.split(/\_/)[1];
  }

  private getEventType(apiName: string): string {
    return apiName.split(/\_/)[0];
  }

  private isEventMethod(apiName: string): boolean {
    const eventNameReg: RegExp = new RegExp(`^(${EVENT_NAME_LIST.join('|')})\_`);
    return eventNameReg.test(apiName);
  }
}