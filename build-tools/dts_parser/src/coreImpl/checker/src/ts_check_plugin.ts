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
import path from 'path';
import ts from 'typescript';
import { Check } from './api_check_plugin';
import { AddErrorLogs, CompolerOptions, ResultProcessing } from './compile_info';
import { ApiResultSimpleInfo, ErrorType, ErrorID, LogType, ErrorLevel, ApiResultInfo } from '../../../typedef/checker/result_type';
import { StringConstant } from '../../../utils/Constant';
export class TSCheck {

  static checkAPICodeStyle(url: string): ApiResultSimpleInfo[] {
    if (fs.existsSync(url)) {
      const files: Array<string> = Check.getMdFiles(url);
      const tsResult: ApiResultSimpleInfo[] = [];
      const tsLocalResult: ApiResultInfo[] = [];
      const program: ts.Program = ts.createProgram({
        rootNames: files,
        options: CompolerOptions.getCompolerOptions()
      });
      // ts存在bug，仅为解决无法绑定sourcefile根节点的问题
      program.getTypeChecker();
      const host: ts.CompilerHost = ts.createCompilerHost(CompolerOptions.getCompolerOptions());
      const diagnostics: ts.Diagnostic[] = ts.runArkTSLinter(program, host);
      files.forEach((filePath: string, index: number) => {
        TSCheck.checkAPICodeStyleCallback(filePath, program, diagnostics, tsResult, tsLocalResult);
        console.log(`scaning file in no ${++index}!`);
      })
      ResultProcessing.excelApiCheckResult(tsLocalResult)
      return tsResult;
    }
  }

  static checkAPICodeStyleCallback(fileName: string, program: ts.Program, diagnostics: ts.Diagnostic[],
    tsResult: ApiResultSimpleInfo[], checkErrorAllInfos: ApiResultInfo[]) {
    const fileContent: string = fs.readFileSync(fileName, StringConstant.UTF8);
    const node: ts.Node = ts.createSourceFile(fileName, fileContent, ts.ScriptTarget.ES2017, true);
    const fileSuffix: string = fileName.substring(fileName.lastIndexOf('.'), fileName.length);

    // tsc诊断日志
    if (fileSuffix === '.ts') {
      const programSourceFiles: readonly ts.SourceFile[] = program.getSourceFiles();
      const targetSourceFile: ts.SourceFile = node.getSourceFile();
      programSourceFiles.forEach(programSourceFile => {
        if (programSourceFile.fileName.indexOf(targetSourceFile.fileName) !== -1) {
          const result: readonly ts.Diagnostic[] = program.getSemanticDiagnostics(programSourceFile);
          result.forEach(item => {
            AddErrorLogs.addAPICheckErrorLogs(ErrorID.TS_SYNTAX_ERROR_ID, ErrorLevel.MIDDLE,
              item.file?.fileName as string, AddErrorLogs.getPosOfNode(node, item),
              ErrorType.TS_SYNTAX_ERROR, LogType.LOG_API, -1, 'NA', 'NA', item.messageText as string, tsResult,
              checkErrorAllInfos);
          })
        }
      })
    }
    // ArkTS诊断日志
    if (fileSuffix === '.ets') {
      diagnostics.forEach(item => {
        if (path.normalize(item.file?.fileName) === path.normalize(fileName)) {
          AddErrorLogs.addAPICheckErrorLogs(ErrorID.TS_SYNTAX_ERROR_ID, ErrorLevel.MIDDLE,
            item.file?.fileName as string, AddErrorLogs.getPosOfNode(node, item),
            ErrorType.TS_SYNTAX_ERROR, LogType.LOG_API, -1, 'NA', 'NA', item.messageText as string, tsResult,
            checkErrorAllInfos);
        }
      })
    }
    return node;
  }

}