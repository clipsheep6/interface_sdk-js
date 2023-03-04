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
import {
  comment, Context, ISourceCodeProcessor, JsDocCheckResult, JsDocModificationInterface, ProcessResult,
  LogReporter, IllegalTagsInfo, rawInfo, JSDocModifyType, JSDocCheckErrorType, CheckLogResult, ModifyLogResult,
  ErrorInfo
} from "./typedef";
import { CommentHelper, LogResult } from "./coreImpls";
const apiChecker = require('api-checker');

/**
 *  JSDoc整改入口
 */
export class CommentModificationProcessor implements ISourceCodeProcessor {

  logReporter?: LogReporter;
  context?: Context;
  rawSourceCodeInfo?: rawInfo.RawSourceCodeInfo;

  process(context: Context, content: string): ProcessResult {
    this.context = context;
    const newParser = context.getSourceParser(content);
    this.logReporter = context.getLogReporter();
    this.rawSourceCodeInfo = context.getRawSourceCodeInfo();
    const newSourceFile = newParser.visitEachNodeComment(this, false);
    return {
      code: Code.OK,
      content: newSourceFile ? newParser.printSourceFile(newSourceFile) : content
    };
  }

  onVisitNode(node: comment.CommentNode): void {
    if (node.astNode) {
      const curNode: ts.Node = node.astNode;
      let apiName: string = '';
      if ((ts.isVariableDeclaration(curNode) || ts.isFunctionDeclaration(curNode) || ts.isClassDeclaration(curNode) ||
        ts.isInterfaceDeclaration(curNode) || ts.isEnumDeclaration(curNode) || ts.isModuleDeclaration(curNode) ||
        ts.isNamespaceExportDeclaration(curNode) || ts.isPropertySignature(curNode) || ts.isEnumMember(curNode) ||
        ts.isMethodSignature(curNode) || ts.isMethodDeclaration(curNode) || ts.isPropertyDeclaration(curNode) ||
        ts.isCallSignatureDeclaration(curNode) || ts.isTypeAliasDeclaration(curNode)) && curNode.name) {
        apiName = curNode.name.getText();
      } else if (ts.isConstructorDeclaration(curNode)) {
        apiName = 'constructor';
      } else if (ts.isVariableStatement(curNode)) {
        apiName = curNode.declarationList.declarations[0].name.getText();
      } else if (ts.isVariableDeclarationList(curNode)) {
        apiName = curNode.declarations[0].name.getText();
      }
      const checkResults = apiChecker.checkJSDoc(node.astNode, node.astNode?.getSourceFile());
      const newCommentIndexs: number[] = [];
      const newCommentInfos: comment.CommentInfo[] = node.commentInfos ? [...node.commentInfos] : [];
      newCommentInfos?.forEach((commentInfo: comment.CommentInfo, index: number) => {
        if (!/Instruct_new_line/.test(commentInfo.text) && !/\/\//.test(commentInfo.text) &&
          !/http\:\/\/www.apache.org\/licenses\/LICENSE-2.0/.test(commentInfo.text)) {
          newCommentIndexs.push(index);
          // 添加继承接口
          INHERIT_TAGS_ARRAY.forEach((tagName: string) => {
            if (tagName !== 'deprecated' || (tagName === 'deprecated' && index === newCommentInfos.length - 1)) {
              const modifyResult: boolean = JsDocModificationHelper.addTagFrommParentNode(node, commentInfo, tagName,
                this.context);
              if (modifyResult) {
                const modifyLogResult: ModifyLogResult = LogResult.createModifyResult(curNode, newCommentInfos,
                  JsDocModificationHelper.createErrorInfo(ErrorInfo.COMPLETE_INHERIT_TAG_INFORMATION, [`${tagName}`]),
                  this.context, apiName, JSDocModifyType.MISSING_TAG_COMPLETION);
                this.logReporter?.addModifyResult(modifyLogResult);
              }
            }
          });
        }
      });
      if (newCommentIndexs.length > 0 && node.commentInfos) {
        if (newCommentIndexs.length === checkResults.length) {
          newCommentIndexs.forEach((item: number, index: number) => {
            const checkResult: JsDocCheckResult = checkResults[index];
            const curCommentInfo: comment.CommentInfo = newCommentInfos[item];
            checkResult.missingTags.forEach((tagName: string) => {
              const modifier = jsDocModifier.get(tagName);
              let modifyResult: boolean = false;
              if (modifier) {
                modifyResult = modifier(node, curCommentInfo, tagName, this.context);
                if (modifyResult) {
                  const modifyLogResult: ModifyLogResult = LogResult.createModifyResult(curNode, newCommentInfos,
                    JsDocModificationHelper.createErrorInfo(ErrorInfo.COMPLETE_TAG_INFORMATION, [`${tagName}`]),
                    this.context, apiName, JSDocModifyType.MISSING_TAG_COMPLETION);
                  this.logReporter?.addModifyResult(modifyLogResult);
                }
              }
              if (!modifier || !modifyResult) {
                const checkLogResult: CheckLogResult = LogResult.createCheckResult(curNode, newCommentInfos,
                  JsDocModificationHelper.createErrorInfo(ErrorInfo.COMPLETE_TAG_ERROR, [`${tagName}`]),
                  this.context, apiName, JSDocCheckErrorType.INCOMPLETE_TAG);
                this.logReporter?.addCheckResult(checkLogResult);
              }
            });
            checkResult.illegalTags.forEach((illegalTag: IllegalTagsInfo) => {
              if (!illegalTag.checkResult) {
                const checkLogResult: CheckLogResult = LogResult.createCheckResult(curNode, newCommentInfos,
                  illegalTag.errorInfo, this.context, apiName, JSDocCheckErrorType.TAG_VALUE_ERROR);
                this.logReporter?.addCheckResult(checkLogResult);
              }
            });
            curCommentInfo.commentTags = JsDocModificationHelper.modifyJsDocTagsOrder(curCommentInfo.commentTags);
            if (!checkResult.orderResult.checkResult) {``
              const modifyLogResult: ModifyLogResult = LogResult.createModifyResult(curNode, newCommentInfos,
                JsDocModificationHelper.createErrorInfo(ErrorInfo.MODIFY_TAG_ORDER_INFORMATION, [`${index + 1}`]),
                this.context, apiName, JSDocModifyType.TAG_ORDER_AJUSTMENT);
              this.logReporter?.addModifyResult(modifyLogResult);
            }
          });
        } else {
          const checkLogResult: CheckLogResult = LogResult.createCheckResult(curNode, newCommentInfos,
            JsDocModificationHelper.createErrorInfo(ErrorInfo.JSDOC_FORMAT_ERROR, []), this.context, apiName,
            JSDocCheckErrorType.API_FORMAT_ERROR);
          this.logReporter?.addCheckResult(checkLogResult);
        }
      }
      CommentHelper.setComment(node.astNode, newCommentInfos);
    }
  }
}

/**
 * JSDoc整改工具类
 */
class JsDocModificationHelper {
  /**
   * 获取commentInfo初始值
   */
  static getNewCommentInfoObj(commentInfo: comment.CommentInfo): comment.CommentTag {
    return {
      tag: '',
      name: '',
      type: '',
      optional: false,
      description: '',
      source: '',
      lineNumber: commentInfo.commentTags.length > 0 ?
        commentInfo.commentTags[commentInfo.commentTags.length - 1].lineNumber + 1 : 0,
      tokenSource: []
    }
  }
  /**
   * 添加无值标签
   */
  static addTagWithoutValue(node: comment.CommentNode, commentInfo: comment.CommentInfo, tagName: string,
    context: Context | undefined): boolean {
    const newCommentTag: comment.CommentTag = JsDocModificationHelper.getNewCommentInfoObj(commentInfo);
    newCommentTag.tag = tagName;
    commentInfo.commentTags.push(newCommentTag);
    return true;
  }
  /**
   * 添加有值标签
   */
  static addTagWithValue(node: comment.CommentNode, commentInfo: comment.CommentInfo, tagName: string,
    context: Context | undefined): boolean {
    const newCommentTag: comment.CommentTag = JsDocModificationHelper.getNewCommentInfoObj(commentInfo);
    newCommentTag.tag = tagName;
    let tagValue = '';
    let tagType = '';
    if (node.astNode) {
      if (tagName === 'returns' && (ts.isMethodDeclaration(node.astNode) || ts.isMethodSignature(node.astNode) ||
        ts.isFunctionDeclaration(node.astNode)) &&
        node.astNode.type) {
        tagType = node.astNode.type.getText();
      } else if ((ts.isModuleDeclaration(node.astNode) || ts.isEnumDeclaration(node.astNode)) && node.astNode.name &&
        ts.isIdentifier(node.astNode.name)) {
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
    return true;
  }
  /**
   * 添加继承标签
   */
  static addTagFrommParentNode(node: comment.CommentNode, commentInfo: comment.CommentInfo, tagName: string,
    context: Context | undefined): boolean {
    let checkResult: boolean = false;
    commentInfo.commentTags.forEach((tag: comment.CommentTag) => {
      if (tag.tag === tagName) {
        checkResult = true;
      }
    });
    if (checkResult) {
      return false;
    }
    if (node.parentNode) {
      const pTag: comment.CommentTag | undefined = getParentTag(node.parentNode, tagName);
      if (pTag) {
        commentInfo.commentTags.push(pTag);
        return true;
      }
    }
    return false;
    function getParentTag(pNode: comment.CommentNode, tagName: string): comment.CommentTag | undefined {
      if (pNode.commentInfos && pNode.commentInfos[pNode.commentInfos.length - 1] &&
        pNode.commentInfos[pNode.commentInfos.length - 1].commentTags) {
        const pTags: comment.CommentTag[] = pNode.commentInfos[pNode.commentInfos.length - 1].commentTags;
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
  /**
   * 添加param标签
   */
  static addParamTag(node: comment.CommentNode, commentInfo: comment.CommentInfo, tagName: string,
    context: Context | undefined): boolean {
    if (node.astNode && (ts.isMethodDeclaration(node.astNode) || ts.isMethodSignature(node.astNode) ||
      ts.isFunctionDeclaration(node.astNode) || ts.isCallSignatureDeclaration(node.astNode))) {
      let paramTagNum: number = 0;
      commentInfo.commentTags.forEach((tag: comment.CommentTag) => {
        if (tag.tag === 'param') {
          paramTagNum++;
        }
      });
      const parameters = node.astNode.parameters;
      for (let i = 0; i < parameters.length; i++) {
        const newCommentTag: comment.CommentTag = JsDocModificationHelper.getNewCommentInfoObj(commentInfo);
        const curIndex: number = paramTagNum + i;
        newCommentTag.tag = tagName;
        const curParameter: ts.ParameterDeclaration = parameters[curIndex];
        if (curParameter) {
          if (curParameter.type && (ts.isTypeLiteralNode(curParameter.type) || ts.isFunctionTypeNode(curParameter.type))) {
            const apiName: string = node.astNode.name ? node.astNode.name.getText() : '';
            const commentInfos: comment.CommentInfo[] = node.commentInfos ? node.commentInfos : [];
            const checkLogResult: CheckLogResult = LogResult.createCheckResult(node.astNode, commentInfos,
              JsDocModificationHelper.createErrorInfo(ErrorInfo.PARAM_FORAMT_ERROR, [`${i + 1}`]), context, apiName,
              JSDocCheckErrorType.API_FORMAT_ERROR);
            context?.getLogReporter().addCheckResult(checkLogResult);
            continue;
          } else {
            newCommentTag.type = curParameter.type ? curParameter.type.getText() : '';
            newCommentTag.name = curParameter.name ? curParameter.name.getText() : '';
            commentInfo.commentTags.push(newCommentTag);
          }
        }
      }
    }
    return true;
  }
  /**
   * 调整标签顺序
   */
  static modifyJsDocTagsOrder(commentTags: comment.CommentTag[]): comment.CommentTag[] {
    const orderSet = new Set(JSDOC_ORDER_TAGS_ARRAY);
    const newTags: comment.CommentTag[] = [];
    JSDOC_ORDER_TAGS_ARRAY.forEach((tagName: string) => {
      commentTags.forEach((curTag: comment.CommentTag) => {
        if (tagName === curTag.tag) {
          newTags.push(curTag);
        }
      });
    });
    commentTags.forEach((tag: comment.CommentTag) => {
      if (!orderSet.has(tag.tag)) {
        newTags.push(tag);
      }
    });
    return newTags;
  }
  static createErrorInfo(errorInfo: string, params: string[]): string {
    params.forEach((param: string) => {
      errorInfo = errorInfo.replace('$$', param);
    });
    return errorInfo;
  }
}

const jsDocModifier: Map<string, JsDocModificationInterface> = new Map([
  ['constant', JsDocModificationHelper.addTagWithoutValue],
  ['deprecated', JsDocModificationHelper.addTagFrommParentNode],
  ['enum', JsDocModificationHelper.addTagWithValue],
  ['extends', JsDocModificationHelper.addTagWithValue],
  ['famodelonly', JsDocModificationHelper.addTagFrommParentNode],
  ['namespace', JsDocModificationHelper.addTagWithValue],
  ['param', JsDocModificationHelper.addParamTag],
  ['returns', JsDocModificationHelper.addTagWithValue],
  ['stagemodelonly', JsDocModificationHelper.addTagFrommParentNode],
  ['syscap', JsDocModificationHelper.addTagFrommParentNode],
  ['systemapi', JsDocModificationHelper.addTagFrommParentNode],
  ['test', JsDocModificationHelper.addTagFrommParentNode],
]);

/**
 * 标签顺序白名单
 */
const JSDOC_ORDER_TAGS_ARRAY = [
  'namespace', 'extends', 'typedef', 'interface', 'permission', 'enum', 'constant', 'type', 'param', 'default',
  'returns', 'readonly', 'throws', 'static', 'fires', 'syscap', 'systemapi', 'famodelonly', 'FAModelOnly',
  'stagemodelonly', 'StageModelOnly', 'crossplatform', 'since', 'deprecated', 'useinstead', 'form', 'example'
];

/**
 * 继承标签白名单
 */
const INHERIT_TAGS_ARRAY = ['deprecated', 'famodelonly', 'stagemodelonly', 'systemapi', 'test'];
