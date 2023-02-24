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

import { Code } from "../utils/constant";
import { FileUtils } from "../utils/fileUtils";
import { LogUtil } from "../utils/logUtil";
import { CommentHelper } from "./coreImpls";
import { comment, Context, ISourceCodeProcessor, ProcessResult, sourceParser } from "./typedef";

export class OutputProcessor implements ISourceCodeProcessor {
  process(context: Context, content: string): ProcessResult {
    try {
      const formater = new Formatter(content);
      const formatedString = formater.format(context);

      const prettier = require('prettier');
      const prettierContent = prettier.format(formatedString, context.getOptions().formaterOption);

      FileUtils.writeStringToFile(prettierContent, context.getOutputFile());
      return {
        code: Code.OK,
        content: prettierContent
      };
    } catch(error) {
      LogUtil.e('OutputProcessor', `format error: ${context.getInputFile()}`);
      return {
        code: Code.OK,
        content: content
      };
    }
  }
}

class Formatter implements sourceParser.INodeVisitorCallback {
  source: string;

  constructor(source: string) {
    this.source = source;
  }

  onVisitNode(node: comment.CommentNode): void {
    if (node.astNode && node.commentInfos && node.commentInfos.length > 0) {
      CommentHelper.addComment(node.astNode, node.commentInfos);
    }
  }

  format(context: Context): string {
    const sourceParser = context.getSourceParser(this.source);
    const sourceFile = sourceParser.visitEachNodeComment(this);
    return sourceParser.printSourceFile(sourceFile);
  }

}