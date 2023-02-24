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

/**
 * 流程处理结果， code值参考 constant/Code
 */
export interface ProcessResult {
  code: number,
  content: string;
}

export interface ISourceCodeProcessor {

  /**
   * 处理源码的方法，输入原始代码，输出处理后的源码。
   *
   * @param content
   */
  process(context: Context, content: string): ProcessResult;
}

/**
 * 全局的配置选项。
 */
export class Options {
  scriptTarget: ts.ScriptTarget = ts.ScriptTarget.ES2017;
  prettierOption = {
    parser: "typescript",
    singleQuote: true,
    printWidth: 500,
    tabWidth: 4
  };
}


/**
 * 
 * 上下文对象
 * 
 */
export interface Context {
  /**
   * 设置原始文件节点信息对象,仅供预处理时调用
   *
   * @param rawInfo
   */
  setRawSourceInfo(rawInfo: rawInfo.RawSourceCodeInfo): void;

  /**
   * 获取原始文件节点信息，用于查询原始文本位置
   */
  getRawSourceCodeInfo(): rawInfo.RawSourceCodeInfo;

  /**
   * 获取日志管理器
   */
  getLogReporter(): LogReporter;

  /**
   * 获取注释校验器
   */
  getCommentChecker(): comment.CommentChecker;

  /**
   * 获取整改后的d.ts文件路径
   */
  getOutputFile(): string;

  /**
   * 获取待整改的d.ts文件路径
   */
  getInputFile(): string;

  /**
   * 获取d.ts AST 解析器
   *
   * @param code
   */
  getSourceParser(code: string): sourceParser.SourceCodeParser;

  /**
   * 获取全局配置对象
   */
  getOptions(): Options;
}

export namespace rawInfo {
  /**
   *  原始文件信息，包含带注释的所有AST节点信息
   */
  export abstract class RawSourceCodeInfo {
    rawCode: string;

    constructor(code: string) {
      this.rawCode = code
    }

    abstract findRawNodeInfo(nodeSignature: string): RawNodeInfo | undefined
  }


  /**
   * 原始文件AST节点信息
   *
   */
  export interface RawNodeInfo {
    /**
     * 行号
     */
    line: number;
    /**
     * 所在行的第几个字符
     */
    character: number;
    /**
     * Ast节点对象
     */
    astNode: ts.Node;
  }

}


/**
 * 注释相关的命名空间
 */
export namespace comment {

  /**
   * 描述注释及关联的Ast节点
   */
  export interface CommentNode {
    commentInfos?: CommentInfo[];

    astNode?: ts.Node;

    parentNode?: CommentNode;
  }


  /**
   * 注释信息
   */
  export interface CommentInfo {
    /**
     * 原始注释文本
     */
    text: string;
    /**
     * 是否为多行注释
     */
    isMultiLine: boolean;

    /**
     * true为头注释，false为未注释
     */
    isLeading: boolean;

    /**
     * 注释描述
     */
    description: string;

    /**
     * 注释标签列表
     */
    commentTags: Array<CommentTag>;

    /**
     * 结构化的注释对象
     */
    parsedComment: any;

    /**
     * 注释起始位置
     */
    pos: number;

    /**
     * 注释结束位置
     */
    end: number;

    /**
     * 是否忽略此注释
     */
    ignore: boolean;
  }

  /**
   * 注释被拆分为以下部分:
   * |start|delimiter|postDelimiter|tag|postTag|name|postName|type|postType|description|end\
   */
  export interface CommentToken {
    /**
     * 注释每行起始字符
     */
    start: string;
    /**
     * 注释行开始定界符
     */
    delimiter: string;
    /**
     * 定界符之后的字符
     */
    postDelimiter: string;
    /**
     * 标签
     */
    tag: string;
    /**
     * 标签之后的字符
     */
    postTag: string;
    /**
     * 标签名称
     */
    name: string;
    /**
     * 标签后的字符
     */
    postName: string;
    /**
     * 类型
     */
    type: string;
    /**
     * 类型后的字符
     */
    postType: string;
    /**
     * 描述
     */
    description: string;
    /**
     * 结束字符
     */
    end: string;
    /**
     * 行结束字符
     */
    lineEnd: string;
  }

  export interface CommentSource {
    /**
     * 行号
     */
    number: number;
    /**
     * 原始注释行
     */
    source: string;
    /**
     * 注释被拆分后的对象
     */
    tokens: CommentToken;
  }


  export interface CommentTag {
    /**
     * 注释标签，例如 @param
     */
    tag: string;

    /**
     * 标签名称, 例如 @param name
     */
    name: string;

    /**
     *  类型, 例如 @param { type } name
     */
    type: string;

    /**
     * 是否可选
     */
    optional: boolean;

    /**
     * 描述
     */
    description: string;

    /**
     * 默认值
     */
    defaultValue?: string;

    /**
     * 原始注释内容
     */
    source: string;

    /**
     * 行号
     */
    lineNumber: number;

    /**
     * tag 的描述可能有多行, 首行包含tag信息，其余包含tag的描述信息。
     */
    tokenSource: Array<comment.CommentSource>;
  }

  /**
   * 未整改的d.ts文件中的注释信息。
   */
  export interface RawCommentInfo {
    start: number;
    end: number;
    comment: string;
    astNode: ts.Node
  }

  /**
   * 注释校验器
   * TODO 接口参数待补全
   */
  export interface CommentChecker {
    checkComment(comment: RawCommentInfo, sourceFile: ts.SourceFile): CheckResult;
  }

  /**
   * 注释校验结果
   * TODO 待补全
   */
  export abstract class CheckResult {
  }

  export enum CommentLocationKind {
    /**
     * 头注释
     */
    LEADING = 0,

    /**
     * 尾注释
     */
    TRAILING = 1
  }
}


/**
 * 日志处理器
 */
export interface LogReporter {

  /**
   * 上报已经处理的日志信息
   * TODO 参数待补全
   *
   * @param logs
   */
  reportHandledLog(...logs: any[]): void;

  /**
   * 上报未处理的日志信息
   * TODO 参数待补全
   *
   * @param logs
   */
  reportUnhandledLog(...logs: any[]): void;

  /**
   * 日志落盘
   *
   * @param file
   */
  writeLogToFile(file: string): void;
}


export namespace sourceParser {

  /**
   * 源码解析器
   */
  export abstract class SourceCodeParser {
    content: string;
    constructor(sourceCode: string) {
      this.content = sourceCode;
    }

    /**
     * 节点树修改方法，新节点通过 {@code ITransformCallback#onTransformNode} 返回
     * 
     * @param callback
     */
    abstract transform(callback: ITransformCallback): ts.SourceFile;

    /**
     * 遍历所有待注释的节点，解析对应注释并调用 INodeVisitorCallback#onVisitNode
     * 用于校验、注释整改。
     * 
     * @param callback
     */
    abstract visitEachNodeComment(callback: INodeVisitorCallback, onlyVisitHasComment?: boolean): ts.SourceFile;

    /**
     * 打印源代码
     * 
     * @param sourceFile
     */
    abstract printSourceFile(sourceFile: ts.SourceFile): string;

  }

  /**
   * AST 节点修改回调接口
   */
  export interface ITransformCallback {
    /**
     * 入参为原始AST节点，自定义业务功能，并返回新的AST节点。
     *
     * @param node 新的节点对象，若不创建新节点则返回undefined
     */
    onTransformNode(node: comment.CommentNode): ts.Node | undefined;
  }


  /**
   * 节点遍历回调接口
   */
  export interface INodeVisitorCallback {
    onVisitNode(node: comment.CommentNode): void;
  }
}

/**
 * 整改工具的API
 */
export interface IJSDocModifier {
  start(): void;
}

interface OrderResultInfo {
  checkResult: boolean;
  errorInfo: string;
}

interface IllegalTagsInfo {
  checkResult: boolean;
  errorInfo: string;
  index: number;
}

/**
 * 单个节点检查返回格式
 */
export interface JsDocCheckResult {
  orderResult: OrderResultInfo;
  illegalTags: IllegalTagsInfo[];
  missingTags: string[];
}

export interface JsDocModificationInterface {
  (node: comment.CommentNode, commentInfo: comment.CommentInfo, tagName: string): void;
}