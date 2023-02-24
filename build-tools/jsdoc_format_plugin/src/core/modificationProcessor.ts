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
import { Code } from "../utils/constant";
import { comment, Context, ISourceCodeProcessor, JsDocCheckResult, JsDocModificationInterface, ProcessResult, sourceParser } from "./typedef";
import { CommentHelper } from "./coreImpls";
const { checkJsDocOfCurrentNode } = require('../../../api_check_plugin/src/check_legality.js')

/**
 *  TODO: 注释整改。
 *  
 */
export class CommentModificationProcessor implements ISourceCodeProcessor, sourceParser.INodeVisitorCallback {
  process(context: Context, content: string): ProcessResult {
    return {
      code: Code.OK,
      content: content
    };
  }

  onVisitNode(node: comment.CommentNode): void {
    if (node.astNode) {
      const checkResults = checkJsDocOfCurrentNode(node.astNode, node.astNode?.getSourceFile());
      const newCommentInfos: comment.CommentInfo[] | undefined = node.commentInfos ? [...node.commentInfos] : [];
      if (newCommentInfos) {
        newCommentInfos.forEach((commentInfo: comment.CommentInfo, index) => {
          const checkResult: JsDocCheckResult = checkResults[index];
          checkResult.missingTags.forEach((tagName: string) => {
            const modifier = jsDocModifier.get(tagName);
            modifier ? modifier(node, commentInfo, tagName) : void 0;
          });
        });
      }
      CommentHelper.setComment(node.astNode, newCommentInfos);
    }
  }
}

/**
 * JSDoc整改工具类
 */
class JsDocModificationHelper {
  static getNewCommentInfoObj(commentInfo: comment.CommentInfo): comment.CommentTag {
    return {
      tag: '',
      name: '',
      type: '',
      optional: false,
      description: '',
      source: '',
      lineNumber: commentInfo.commentTags[commentInfo.commentTags.length - 1].lineNumber + 1,
      tokenSource: []
    }
  }

  static addTagWithoutValue(node: comment.CommentNode, commentInfo: comment.CommentInfo, tagName: string): comment.CommentInfo {
    const newCommentTag: comment.CommentTag = JsDocModificationHelper.getNewCommentInfoObj(commentInfo);
    newCommentTag.tag = tagName;
    commentInfo.commentTags.push(newCommentTag);
    return commentInfo;
  }
  static addTagWithValue(node: comment.CommentNode, commentInfo: comment.CommentInfo, tagName: string): comment.CommentInfo {
    const newCommentTag: comment.CommentTag = JsDocModificationHelper.getNewCommentInfoObj(commentInfo);
    newCommentTag.tag = tagName;
    let tagValue = '';
    let tagType = '';
    if (node.astNode) {
      if ((ts.isModuleDeclaration(node.astNode) || ts.isEnumDeclaration(node.astNode)) && node.astNode.name && ts.isIdentifier(node.astNode.name)) {
        tagValue = node.astNode.name.escapedText.toString();
      } else if (ts.isClassDeclaration(node.astNode) && node.astNode.heritageClauses) {
        const clauses = node.astNode.heritageClauses;
        const extendClasses: string[] = [];
        clauses.forEach((clause: ts.HeritageClause) => {
          if (/^extends /.test(clause.getText()) && clause.types) {
            clause.types.forEach((type: ts.ExpressionWithTypeArguments) => {
              extendClasses.push(type.getText());
            });
          }
        });
        tagValue = extendClasses.join(', ')
      }
    }
    newCommentTag.name = tagValue;
    newCommentTag.type = tagType;
    commentInfo.commentTags.push(newCommentTag);
    return commentInfo;
  }
  static addTagFormParentNode(node: comment.CommentNode, commentInfo: comment.CommentInfo, tagName: string): comment.CommentInfo {
    if (node.parentNode) {
      const pTag: comment.CommentTag | undefined = getParentTag(node.parentNode, tagName);
      if (pTag) {
        commentInfo.commentTags.push(pTag);
      }
    }
    return commentInfo;
    function getParentTag(pNode: comment.CommentNode, tagName: string): comment.CommentTag | undefined {
      if (pNode.commentInfos && pNode.commentInfos[0].commentTags) {
        const pTags: comment.CommentTag[] = pNode.commentInfos[0].commentTags;
        for (let i = 0; i < pTags.length; i++) {
          if (pTags[i].tag === tagName) {
            return pTags[i];
          }
        }
      }
      if (pNode.parentNode) {
        return getParentTag(pNode.parentNode, tagName);
      }
      return undefined;
    }
  }
}

const jsDocModifier: Map<string, JsDocModificationInterface> = new Map([
  ['constant', JsDocModificationHelper.addTagWithoutValue],
  ['deprecated', JsDocModificationHelper.addTagFormParentNode],
  ['enum', JsDocModificationHelper.addTagWithValue],
  ['extends', JsDocModificationHelper.addTagWithValue],
  ['famodelonly', JsDocModificationHelper.addTagFormParentNode],
  ['namespace', JsDocModificationHelper.addTagWithValue],
  // ['param', JsDocModificationHelper.],
  // ['returns', JsDocModificationHelper.],
  ['stagemodelonly', JsDocModificationHelper.addTagFormParentNode],
  ['syscap', JsDocModificationHelper.addTagFormParentNode],
  ['systemapi', JsDocModificationHelper.addTagFormParentNode],
  ['test', JsDocModificationHelper.addTagFormParentNode],
]);
