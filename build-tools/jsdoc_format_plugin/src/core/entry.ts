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

import { Code, StringId } from "../utils/constant";
import { FileUtils } from "../utils/fileUtils";
import { LogLevelUtil, LogUtil } from "../utils/logUtil";
import { StringUtils } from "../utils/stringUtils";
import { ApiSplitProcessor } from "./apiSplitProcessor";
import { AsynchronousFunctionProcessor } from "./asynchronousFunctionProcessor";
import { CommentCheckProcessor } from "./checkProcessor";
import { ContextImpl, InputParameter, OutputFileHelper } from "./coreImpls";
import { CommentModificationProcessor } from "./modificationProcessor";
import { OutputProcessor } from "./outputProcessor";
import { RawSourceCodeProcessor } from "./rawCodeProcessor";
import { Context, IJSDocModifier, ISourceCodeProcessor, ProcessResult } from "./typedef";

/**
 * JSDoc 整改流程入口。
 */
export class JSDocModifierImpl implements IJSDocModifier {
  start(): void {
    const inputParameter = new InputParameter();
    inputParameter.parse();
    LogUtil.logLevel = LogLevelUtil.get(inputParameter.logLevel);
    const sourceProcessor: ISourceCodeProcessor = this.getSourceProcessor(inputParameter);
    const baseContext: Context = this.getBaseContext(inputParameter);
    const result: ProcessResult = sourceProcessor.process(baseContext, '');
    if (result.code != Code.OK) {
      LogUtil.e('JSDocModifier', result.content);
    }
  }

  getSourceProcessor(inputParam: InputParameter): ISourceCodeProcessor {
    return inputParam.isHandleMultiFiles() ? new MultiFileProcessor(inputParam) : new SingleFileProcessor(inputParam);
  }

  getBaseContext(inputParam: InputParameter): Context {
    return new ContextImpl(inputParam.inputFilePath, inputParam.outputFilePath, inputParam.getOptions());
  }
}


abstract class BaseSourceCodeProcessor implements ISourceCodeProcessor {
  inputParam: InputParameter;

  constructor(inputParam: InputParameter) {
    this.inputParam = inputParam
  }

  abstract process(context: Context, code: string): ProcessResult;

  buildProcessorContext(parentContext: Context, sourceFile: string): Context {
    return new ContextImpl(sourceFile,
      OutputFileHelper.getOutputFilePath(this.inputParam, sourceFile), parentContext.getOptions());
  }
}

/**
 * 处理单个 d.ts 文件。
 */
export class SingleFileProcessor extends BaseSourceCodeProcessor {

  process(context: Context, content: string): ProcessResult {
    const inputFilePath = context.getInputFile();
    if (!inputFilePath) {
      return {
        code: Code.ERROR,
        content: StringUtils.getString(StringId.INPUT_FILE_NOT_FOUND)
      };
    }
    const rawCodeStr = FileUtils.readFileContent(inputFilePath);
    if (StringUtils.isEmpty(rawCodeStr)) {
      return {
        code: Code.ERROR,
        content: StringUtils.getString(StringId.INPUT_FILE_CONTENT_EMPTY)
      };
    }

    let preResult = {
      code: Code.OK,
      content: rawCodeStr!
    };
    const newContext = this.buildProcessorContext(context, context.getInputFile());
    for (let processor of processorRegistry) {
      preResult = processor.process(newContext, preResult.content);
      if (preResult.code == Code.ERROR) {
        break;
      }
    }
    return preResult;
  }
}

/**
 * 处理文件夹。
 */
export class MultiFileProcessor extends BaseSourceCodeProcessor {
  process(context: Context, content: string): ProcessResult {
    const intpuDir = context.getInputFile();
    if (!intpuDir) {
      return {
        code: Code.ERROR,
        content: StringUtils.getString(StringId.INPUT_FILE_NOT_FOUND)
      };
    }
    const allSourceFiles = FileUtils.readFilesInDir(intpuDir, (name) => {
      return name.endsWith('.d.ts');
    });
    const errorSet: Array<ProcessResult> = new Array();
    allSourceFiles.forEach((childFile) => {
      const rawCodeStr = FileUtils.readFileContent(childFile);
      if (StringUtils.isEmpty(rawCodeStr)) {
        errorSet.push({
          code: Code.ERROR,
          content: `${childFile}: ${StringUtils.getString(StringId.INPUT_FILE_CONTENT_EMPTY)}`
        })
        return;
      }
      const newContext = this.buildProcessorContext(context, childFile);
      let preValue = {
        code: Code.OK,
        content: rawCodeStr!
      };

      for (let processor of processorRegistry) {
        preValue = processor.process(newContext, preValue.content);
        if (preValue.code != Code.OK) {
          errorSet.push(preValue);
          break
        }
      }
    })
    return {
      code: errorSet.length > 0 ? Code.ERROR : Code.OK,
      content: JSON.stringify(errorSet)
    };
  }
}

/**
 * 整改流程处理器配置，按需添加必要处理流程。
 */
const processorRegistry: Array<ISourceCodeProcessor> = [
  // 原始文件解析
  new RawSourceCodeProcessor(),
  // 原始文件注释校验
  new CommentCheckProcessor(),
  // 注释整改
  new CommentModificationProcessor(),
  // API调整
  new ApiSplitProcessor(),
  // 同名异步函数处理
  new AsynchronousFunctionProcessor(),
  // 新文件输出，日志输出
  new OutputProcessor()
];