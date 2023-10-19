/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, softwarecheck{  }
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path';
import fs from 'fs';
import { Workbook } from 'exceljs';
import ts, { LineAndCharacter } from 'typescript';
import { ApiResultSimpleInfo, ApiResultInfo } from '../../../typedef/checker/result_type';

export class AddErrorLogs {
  /**
   * 按照格式生成错误信息
   * @param { number } id -error message id
   * @param { number } level -error level
   * @param { string } filePath -error message file path
   * @param { string } location -error message location
   * @param { string } errorType -error message wrong type
   * @param { string } apiType -error message log type
   * @param { number } version -error message version
   * @param { string } apiName -error message api name
   * @param { string } apiFullText -error message api text
   * @param { string } message -error infomation
   * @param { ApiResultSimpleInfo[] }  checkErrorInfos -array for storing error information
   */
  static addAPICheckErrorLogs(id: number, level: number, filePath: string, location: string, errorType: string,
    apiType: string, version: number, apiName: string, apiFullText: string,
    message: string, checkErrorInfos: ApiResultSimpleInfo[], checkErrorAllInfos: ApiResultInfo[]): void {
    const apiChecktSimpleErrorLog: ApiResultSimpleInfo = new ApiResultSimpleInfo();
    apiChecktSimpleErrorLog
      .setID(id)
      .setLevel(level)
      .setLocation(location)
      .setFilePath(filePath)
      .setMessage(message);

    const apiCheckErrorLog: ApiResultInfo = new ApiResultInfo();
    apiCheckErrorLog
      .setErrorType(errorType)
      .setLocation(location)
      .setApiType(apiType)
      .setMessage(message)
      .setVersion(version)
      .setLevel(level)
      .setApiName(apiName)
      .setApiFullText(apiFullText)
      .setBaseName(filePath.substring(filePath.lastIndexOf('/') + 1, filePath.length));
    checkErrorInfos.push(apiChecktSimpleErrorLog);
    checkErrorAllInfos.push(apiCheckErrorLog);
  }

  static getPosOfNode(node: ts.Node, diagnostic: ts.Diagnostic): string {
    const posOfNode: LineAndCharacter = ts.getLineAndCharacterOfPosition(node.getSourceFile(),
      diagnostic.start as number);
    const location: string = diagnostic.file?.fileName as string +
      `(line: ${posOfNode.line + 1}, col: ${posOfNode.character + 1})`;
    return location;
  }


}

export class CompolerOptions {
  static getCompolerOptions() {
    const compilerOptions = ts.readConfigFile(path.resolve(__dirname, '../../../../tsconfig.json'),
      ts.sys.readFile).config.compilerOptions;
    Object.assign(compilerOptions, {
      target: "es2020",
      jsx: "preserve",
      incremental: undefined,
      lib: undefined,
      declaration: undefined,
      declarationMap: undefined,
      emitDeclarationOnly: undefined,
      outFile: undefined,
      composite: undefined,
      tsBuildInfoFile: undefined,
      noEmit: undefined,
      isolatedModules: true,
      paths: undefined,
      rootDirs: undefined,
      types: undefined,
      out: undefined,
      noLib: true,
      noResolve: true,
      noEmitOnError: undefined,
      declarationDir: undefined,
      suppressOutputPathCheck: true,
      allowNonTsExtensions: true
    });
    return compilerOptions;
  }
}

export class ResultProcessing {
  static writeResultFile(resultData: ApiResultSimpleInfo[], outputPath: string, option: object) {
    const STANDARD_INDENT = 2;
    fs.writeFile(path.resolve(__dirname, outputPath), JSON.stringify(resultData, null, STANDARD_INDENT), option, (err) => {
      if (err) {
        console.error(`ERROR FOR CREATE FILE:${err}`);
      } else {
        console.log('API CHECK FINISH!');
      }
    });
  }

  static async excelApiCheckResult(apiCheckArr: ApiResultInfo[]) {
    const workbook = new Workbook();
    const sheet = workbook.addWorksheet('Js Api', { views: [{ xSplit: 1 }] });
    sheet.getRow(1).values = ['order', 'errorType', 'fileName', 'apiName', 'apiContent', 'type', 'errorInfo', 'version', 'model'];
    for (let i = 1; i <= apiCheckArr.length; i++) {
      const apiData = apiCheckArr[i - 1];
      sheet.getRow(i + 1).values = [i, apiData.errorType, apiData.location, apiData.apiName, apiData.apiFullText,
        apiData.apiType, apiData.message, apiData.version, apiData.baseName];
    }
    const buffer = await workbook.xlsx.writeBuffer();
    fs.writeFile('./src/coreImpl/checker/Js_Api.xlsx', buffer, function (err) {
      if (err) {
        console.error(err);
        return;
      }
    });
    return buffer;
  }
}