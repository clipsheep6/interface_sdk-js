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
    prettierOption = { parser: "typescript", singleQuote: true, printWidth: 500, tabWidth: 4 };
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

        abstract findRawNodeInfo(snippet: string): RawNodeInfo

    }


    /**
     * 原始文件AST节点信息
     *  
     */
    export interface RawNodeInfo {

        start: number;

        end: number;

        astNode: ts.Node;

        match(snippet: string): boolean;
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
        commentInfo?: CommentInfo[];

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
        // TODO 补全其他注释信息
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

    export enum CommentKind {
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
        abstract visitEachNodeComment(callback: INodeVisitorCallback): ts.SourceFile;

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