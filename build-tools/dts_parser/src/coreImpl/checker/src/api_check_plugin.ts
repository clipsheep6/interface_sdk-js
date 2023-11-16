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
import fs from 'fs';
import { Parser, FilesMap, FileInfoMap, ApiInfosMap, BasicApiInfoMap, } from '../../parser/parser';
import { BasicApiInfo, notJsDocApiTypes } from '../../../typedef/parser/ApiInfoDefination';
import { ApiResultSimpleInfo, ErrorType, ErrorID, LogType, ErrorLevel, ErrorTagFormat, ErrorMessage } from
  '../../../typedef/checker/result_type';
import { StringConstant } from '../../../utils/Constant';
import { ClassInfo } from '../../../typedef/parser/ApiInfoDefination';
import { Comment } from '../../../typedef/parser/Comment';
import { hasChildApiType, compositiveResult, compositiveLocalResult } from '../../../utils/checkUtils';
import { OrderCheck } from './tag_order_check';
import { TagNameCheck } from './tag_name_check';
import { LegalityCheck } from './tag_legality_check';
import { TagRepeatCheck } from './tag_repeat_check';
import { AddErrorLogs } from './compile_info';
import { toNumber } from 'lodash';
import { TagValueCheck } from './tag_value_check';

export class Check {

  /**
   * checker tool main entrance
   * @param { string } url -File path for storing file information.
   */
  static scanEntry(url: string): void {
    if (fs.existsSync(url)) {
      const files: Array<string> = Check.getMdFiles(url);
      files.forEach((filePath: string) => {
        Check.parseAPICodeStyle(filePath);
      });
    }
  }

  /**
   * Obtain the path of the file to be checked.
   * @param { string } url -File path for storing file information.
   * @returns { Array<string> } -file path array
   */
  static getMdFiles(url: string): Array<string> {
    const content: string = fs.readFileSync(url, 'utf-8');
    const mdFiles: Array<string> = content.split(/[(\r\n)\r\n]+/);
    return mdFiles;
  }

  /**
   * Based on a single file path,parse it using the Parser method.
   * @param { string } filePath -single file path to be checked
   */
  static parseAPICodeStyle(filePath: string): FilesMap {
    const fileDir: string = filePath.substring(0, filePath.lastIndexOf('\\'));
    const parseResult: FilesMap = Parser.parseFile(fileDir, filePath);
    //words check
    const baseInfos: ClassInfo[] = Check.getJsDocInfo(parseResult) as ClassInfo[];
    Check.checkNodeInfos(baseInfos);
    return parseResult;
  }

  /**
   * Process parsing results and get the API with jsdoc
   * @param { FilesMap } parseResult 
   * @returns { BasicApiInfoMap | BasicApiInfo[] }
   */
  static getJsDocInfo(parseResult: FilesMap): BasicApiInfoMap | BasicApiInfo[] {
    const nodeBaseInfos: BasicApiInfoMap | BasicApiInfo[] = [];
    for (const filePath of parseResult.keys()) {
      const fileMap: FileInfoMap = parseResult.get(filePath) as FileInfoMap;
      for (const nodeName of fileMap.keys()) {
        if (nodeName === StringConstant.SELF) {
          continue;
        }
        const nodeInfos: ApiInfosMap = fileMap.get(nodeName) as ApiInfosMap;
        for (const nodeInfo of nodeInfos.keys()) {
          const nodeBaseInfo: BasicApiInfoMap | BasicApiInfo[] | undefined = nodeInfos.get(nodeInfo);
          if (nodeBaseInfo && Array.isArray(nodeBaseInfo)) {
            nodeBaseInfo.forEach(item => {
              if (!notJsDocApiTypes.has(item.apiType)) {
                nodeBaseInfos.push(item);
              }
            });
          } else if (nodeBaseInfo) {
            const baseInfo: BasicApiInfo[] = nodeBaseInfo.get('_self') as BasicApiInfo[];
            nodeBaseInfos.concat(baseInfo);
          }
        }
      }
    }
    return nodeBaseInfos;
  }

  /**
   * Obtain all API information and check api jsdoc
   * @param { ClassInfo[] } baseInfos 
   */
  static checkNodeInfos(baseInfos: ClassInfo[]): void {
    let allNodeInfos: ClassInfo[] = [];
    Check.getChildApiInfos(baseInfos, allNodeInfos);
    const allApiInfos: ClassInfo[] = Array.from(new Set(allNodeInfos));

    // for all nodes of the current file
    allApiInfos.forEach(singleApi => {
      const apiJsdoc: Comment.JsDocInfo | undefined = singleApi.getLatestJsDocInfo();
      if (apiJsdoc !== undefined) {
        // legality check
        const tagLegalityCheckResult: ErrorTagFormat[] = LegalityCheck.apiLegalityCheck(singleApi, apiJsdoc);
        // order check
        const orderCheckResult: boolean = OrderCheck.orderCheck(apiJsdoc);
        // tags name check
        const tagNamseCheckResult: ErrorTagFormat = TagNameCheck.tagNameCheck(apiJsdoc);
        // tags inherit check  
        // tags value check
        const tagValueCheckResult: ErrorTagFormat[] = TagValueCheck.tagValueCheck(singleApi, apiJsdoc);
        // tags repeat check
        const tagRepeatCheckResult: ErrorTagFormat[] = TagRepeatCheck.tagRepeatCheck(apiJsdoc);

        if (!orderCheckResult) {
          AddErrorLogs.addAPICheckErrorLogs(ErrorID.WRONG_ORDER_ID, ErrorLevel.MIDDLE, singleApi.getFilePath(),
            singleApi.getPos(), ErrorType.WRONG_ORDER,
            LogType.LOG_JSDOC, toNumber(apiJsdoc.since), singleApi.getApiName(), singleApi.getDefinedText(),
            ErrorMessage.ERROR_ORDER, compositiveResult, compositiveLocalResult);
        }
        if (!tagNamseCheckResult.state) {
          AddErrorLogs.addAPICheckErrorLogs(ErrorID.UNKNOW_DECORATOR_ID, ErrorLevel.MIDDLE, singleApi.getFilePath(),
            singleApi.getPos(), ErrorType.UNKNOW_DECORATOR,
            LogType.LOG_JSDOC, toNumber(apiJsdoc.since), singleApi.getApiName(), singleApi.getDefinedText(),
            tagNamseCheckResult.errorInfo, compositiveResult, compositiveLocalResult);
        }
        tagLegalityCheckResult.forEach(legalityResult => {
          if (legalityResult.state === false) {
            AddErrorLogs.addAPICheckErrorLogs(ErrorID.WRONG_SCENE_ID, ErrorLevel.MIDDLE, singleApi.getFilePath(),
              singleApi.getPos(), ErrorType.WRONG_SCENE,
              LogType.LOG_JSDOC, toNumber(apiJsdoc.since), singleApi.getApiName(), singleApi.getDefinedText(),
              legalityResult.errorInfo, compositiveResult, compositiveLocalResult);
          }
        });
        tagValueCheckResult.forEach(valueResult => {
          if (valueResult.state === false) {
            AddErrorLogs.addAPICheckErrorLogs(ErrorID.WRONG_SCENE_ID, ErrorLevel.MIDDLE, singleApi.getFilePath(),
              singleApi.getPos(), ErrorType.WRONG_SCENE,
              LogType.LOG_JSDOC, toNumber(apiJsdoc.since), singleApi.getApiName(), singleApi.getDefinedText(),
              valueResult.errorInfo, compositiveResult, compositiveLocalResult);
          }
        });
        tagRepeatCheckResult.forEach(repeatResult => {
          if (repeatResult.state === false) {
            AddErrorLogs.addAPICheckErrorLogs(ErrorID.WRONG_SCENE_ID, ErrorLevel.MIDDLE, singleApi.getFilePath(),
              singleApi.getPos(), ErrorType.WRONG_SCENE,
              LogType.LOG_JSDOC, toNumber(apiJsdoc.since), singleApi.getApiName(), singleApi.getDefinedText(),
              repeatResult.errorInfo, compositiveResult, compositiveLocalResult);
          }
        });
      }
    });
  }
  /**
   * Puts all nodes of the current file in a one-dimensional array.
   * @param { ClassInfo[] } childNodeApis -original data.
   * @param { ClassInfo[] } childNodeInfos -processed data.
   */
  static getChildApiInfos(childNodeApis: ClassInfo[], childNodeInfos: ClassInfo[]): void {
    childNodeApis.forEach(childNodeApi => {
      if (childNodeApi.getParentApi()?.getApiType() === 'SourceFile') {
        childNodeInfos.push(childNodeApi);
      }
      if (childNodeApi && hasChildApiType.indexOf(childNodeApi.getApiType()) !== -1) {
        if (childNodeApi.getChildApis().length > 0) {
          childNodeApi.getChildApis().forEach(childApi => {
            childNodeInfos.push(childApi as ClassInfo);
          });
        }
        childNodeApis = childNodeApi.getChildApis() as ClassInfo[];
        Check.getChildApiInfos(childNodeApis, childNodeInfos);
      } else {
        return;
      }
    });
    return;
  }

}