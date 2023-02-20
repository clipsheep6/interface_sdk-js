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

import path from "path";
import { Command } from "commander";
import { StringId } from "../utils/constant";
import { FileUtils } from "../utils/fileUtils";
import { LogUtil } from "../utils/logUtil";
import { StringUtils } from "../utils/stringUtils";
import { comment, Context, Options, LogReporter, rawInfo, sourceParser } from "./typedef";
import ts, { CommentRange, TransformationContext, TransformationResult } from "typescript";

export class ContextImpl implements Context {
    options: Options;
    inputFile: string;
    outputFile: string;

    constructor(inputFile: string, outputFile: string, options?: Options) {
        this.inputFile = inputFile;
        this.outputFile = outputFile;
        this.options = options ? options : new Options();
    }

    getOptions(): Options {
        return this.options;
    }

    setRawSourceInfo(rawInfo: rawInfo.RawSourceCodeInfo): void {
        throw new Error("Method not implemented.");
    }

    getRawSourceCodeInfo(): rawInfo.RawSourceCodeInfo {
        throw new Error("Method not implemented.");
    }

    getLogReporter(): LogReporter {
        throw new Error("Method not implemented.");
    }

    getCommentChecker(): comment.CommentChecker {
        throw new Error("Method not implemented.");
    }

    getOutputFile(): string {
        return this.outputFile;
    }

    getInputFile(): string {
        return this.inputFile;
    }

    getSourceParser(code: string): sourceParser.SourceCodeParser {
        return new SourceCodeParserImpl(code, this.options);
    }
}


export class OutputFileHelper {

    static getOutputFilePath(inputParam: InputParameter, sourceFile: string): string {
        return inputParam.isHandleMultiFiles() ? OutputFileHelper.getMultiOutputFilePath(inputParam, sourceFile)
            : OutputFileHelper.getSingleOutputFilePath(inputParam);
    }

    static getMultiOutputFilePath(inputParam: InputParameter, sourceFile: string): string {
        // 计算原文件与输入目录的相对路径
        const relativePath = path.relative(sourceFile, inputParam.inputFilePath!);
        // 如果设置了 outputPath
        if (inputParam.outputFilePath) {
            return path.join(inputParam.outputFilePath, relativePath);
        }
        // 如果未设置 outputPath, 同级目录创建新目录
        const dirName = path.dirname(inputParam.inputFilePath!);
        return path.join(inputParam.inputFilePath!, '..', `${dirName}_new`, relativePath);
    }

    static getSingleOutputFilePath(inputParam: InputParameter): string {
        if (inputParam.outputFilePath) {
            return inputParam.outputFilePath;
        }
        // 同级目录创建新文件
        const fileName = path.basename(inputParam.inputFilePath!, '.d.ts');
        return path.join(inputParam.inputFilePath!, '..', `${fileName}_new.d.ts`)
    }
}

export class SourceCodeParserImpl extends sourceParser.SourceCodeParser {
    options: Options;
    commentNodeWhiteList: ts.SyntaxKind[] = [
        ts.SyntaxKind.PropertySignature, ts.SyntaxKind.CallSignature, ts.SyntaxKind.MethodSignature, ts.SyntaxKind.MethodDeclaration,
        ts.SyntaxKind.EnumMember, ts.SyntaxKind.VariableStatement, ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.Constructor
    ];
    visitNodeChildrenWhilteList: ts.SyntaxKind[] = [
        ts.SyntaxKind.ModuleDeclaration, ts.SyntaxKind.ModuleBlock, ts.SyntaxKind.NamespaceExportDeclaration, ts.SyntaxKind.ClassDeclaration,
        ts.SyntaxKind.InterfaceDeclaration, ts.SyntaxKind.EnumDeclaration, ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.Parameter,
        ts.SyntaxKind.TypeLiteral, ts.SyntaxKind.PropertySignature
    ]

    constructor(code: string, options: Options) {
        super(code)
        this.options = options;
    }

    private shouldNotify(node: ts.Node): boolean {
        // if kind = ImportDeclaration, comments may be license declarations
        return node.kind >= ts.SyntaxKind.VariableDeclaration && node.kind < ts.SyntaxKind.ImportDeclaration ||
            this.commentNodeWhiteList.includes(node.kind);
    }

    private shouldForEachChildren(node: ts.Node): boolean {
        return this.visitNodeChildrenWhilteList.includes(node.kind);
    }

    transform(callback: sourceParser.ITransformCallback): ts.SourceFile {
        const thiz = this;
        const sourceFile = ts.createSourceFile("transform", this.content, this.options.scriptTarget, true);
        function transformCallback(context: TransformationContext) {
            return (rootNode: ts.Node) => {
                function visitor(node: ts.Node): ts.Node {
                    const commentNode: comment.CommentNode = {
                        astNode: node,
                        commentInfo: CommentHelper.parseComment(CommentHelper.getNodeComments(node, sourceFile)),
                    };
                    const newNode: ts.Node | undefined = callback.onTransformNode(commentNode);
                    return newNode || ts.visitEachChild(node, visitor, context)
                }
                return ts.visitEachChild(rootNode, visitor, context)
            };
        };
        const transformResult: TransformationResult<ts.Node> = ts.transform(sourceFile, [transformCallback]);
        if (transformResult.transformed.length > 0) {
            return transformResult.transformed[0] as ts.SourceFile;
        }
        return sourceFile;
    }

    visitEachNodeComment(callback: sourceParser.INodeVisitorCallback): ts.SourceFile {
        const thiz = this;
        function nodeVisitor(node: ts.Node, parentNode: comment.CommentNode | undefined, sourceFile: ts.SourceFile) {
            const comments: string[] = CommentHelper.getNodeComments(node, sourceFile);
            const currentCommentNode: comment.CommentNode = {
                astNode: node,
                parentNode: parentNode
            };
            if (comments.length > 0 && thiz.shouldNotify(node)) {
                currentCommentNode.commentInfo = CommentHelper.parseComment(comments);
                callback.onVisitNode(currentCommentNode);
            }
            if (thiz.shouldForEachChildren(node)) {
                node.forEachChild((child) => {
                    nodeVisitor(child, currentCommentNode, sourceFile);
                });
            }
        }
        const sourceFile = ts.createSourceFile('visitSourceFile', this.content, this.options.scriptTarget, true);
        sourceFile.forEachChild((child) => {
            nodeVisitor(child, undefined, sourceFile);
        });
        return sourceFile;
    }

    printSourceFile(sourceFile: ts.SourceFile): string {
        const printerOptions = { omitTrailingSemicolon: false, removeComments: false, preserveSourceNewlines: true};
        const printer = ts.createPrinter(printerOptions);
        return printer.printFile(sourceFile);
    }
}


export class CommentHelper {

    /**
     * 给节点追加注释(注意：无法在原始注释中追加，只能将原始注释完全复制一份并修改再做完整替换)
     * 
     * @param node ast 节点对象
     * @param commentInfos 注释列表
     * @param commentKind  注释类型 comment.CommentKind.LEADING || comment.CommentKind.TRAILING
     */
    static addComment(node: ts.Node, commentInfos: Array<comment.CommentInfo>, commentKind?: number): void {
        if (commentInfos.length == 0) {
            return;
        }
        CommentHelper.ignoreOriginalComment(node);
        commentInfos.forEach((info) => {
            const assembledComment = CommentHelper.assembleComment(info);
            const kind = info.isMultiLine ? ts.SyntaxKind.MultiLineCommentTrivia : ts.SyntaxKind.SingleLineCommentTrivia;
            if (!commentKind || commentKind == comment.CommentKind.LEADING) {
                ts.addSyntheticLeadingComment(node, kind, assembledComment, true);
            } else {
                ts.addSyntheticLeadingComment(node, kind, assembledComment, true);
            }
        });
    }

    /**
     * 封装符合格式的注释
     * 
     * @param commentInfo 
     * @returns 
     */
    static assembleComment(commentInfo: comment.CommentInfo): string {
        const assember = new CommentAssember(commentInfo.isMultiLine);
        // TODO
        // assember.appendLine("@since 1988")
        return assember.build();
    }


    /**
     * 设置节点注释，覆盖已有的注释。(注意：原始文件的注释不会被替换，只在输出时忽略原始注释，打印新的注释)
     * 
     * @param node 
     * @param commentInfos 
     * @param commentKind 
     * @returns 
     */
    static setComment(node: ts.Node, commentInfos: Array<comment.CommentInfo>, commentKind?: number) {
        if (commentInfos.length == 0) {
            return;
        }
        CommentHelper.ignoreOriginalComment(node);
        const syntheticLeadingComments: Array<ts.SynthesizedComment> =
            commentInfos.map((info) => {
                return {
                    text: CommentHelper.assembleComment(info),
                    pos: -1,
                    end: -1,
                    hasLeadingNewline: true,
                    hasTrailingNewLine: true,
                    kind: info.isMultiLine ? ts.SyntaxKind.MultiLineCommentTrivia : ts.SyntaxKind.SingleLineCommentTrivia
                };
            });

        if (!commentKind || commentKind == comment.CommentKind.LEADING) {
            ts.setSyntheticLeadingComments(node, syntheticLeadingComments);
        } else {
            ts.setSyntheticTrailingComments(node, syntheticLeadingComments);
        }
    }

    /**
     * 打印源码时忽略节点的原始注释
     * 
     * @param node 
     */
    private static ignoreOriginalComment(node: ts.Node) {
        // ignore the original comment
        ts.setEmitFlags(node, ts.EmitFlags.NoLeadingComments);
    }

    /**
     * 将多段注释文本解析成注释对象。
     * 
     * @param comments 
     * @returns 
     */
    static parseComment(comments: string[]): comment.CommentInfo[] | undefined {
        return comments.map((commentString) => {
            // TODO parse comment
            const commentInfo: comment.CommentInfo = {
                text: commentString,
                isMultiLine: true
            };
            return commentInfo;
        })
    }

    /**
     * 获取指定AST节点上的注释，若无注释返回空数组。
     * 
     * @param node 
     * @param sourceFile 
     * @returns 
     */
    static getNodeComments(node: ts.Node, sourceFile: ts.SourceFile): string[] {
        const commentRange: CommentRange[] | undefined = ts.getLeadingCommentRanges(sourceFile.getFullText(), node.getFullStart());
        if (commentRange?.length) {
            const comment = commentRange.map(r => sourceFile.getFullText().slice(r.pos, r.end))
            LogUtil.d('CommentHelper', `getNodeComment [\n ${comment.join()} ]`);
            return comment;
        }
        return [];
    }

}

/**
 * 注释封装类
 */
class CommentAssember {
    multiLineCommentPrefix: string = '*\n';
    multiLineComnentSuffix: string = ' ';
    linePrefix: string = ' * ';
    lineEnd: string = '\n';
    content: string = '';
    isMultiLine: boolean;
    constructor(isMultiLine: boolean) {
        this.isMultiLine = isMultiLine;
        if (isMultiLine) {
            this.content = this.content.concat(this.multiLineCommentPrefix);
        }
    }

    /**
     * 多段注释时追加一行
     * 
     * @param line 
     */
    appendLine(line: string) {
        if (this.isMultiLine) {
            this.content = this.content.concat(this.linePrefix, line, this.lineEnd);
        }
    }

    /**
     * 单行注释，覆盖操作
     * 
     * @param line 
     */
    setLine(line: string) {
        this.content = ''.concat(this.linePrefix, line);
    }

    /**
     * 构建完整的注释文本段。
     */
    build(): string {
        if (this.isMultiLine) {
            this.content = this.content.concat(this.multiLineComnentSuffix);
        }
        return this.content;
    }
}


/**
 * 
 * 命令行入参对象
 * 
 */
export class InputParameter {
    inputFilePath: string = '';
    outputFilePath: string = '';

    parse() {
        const program = new Command();
        program
            .name("JSDoc formatter plugin")
            .description("CLI to format d.ts")
            .version("0.1.0")
            .requiredOption(`-i, --input <string>`, `${StringUtils.getString(StringId.COMMAND_INPUT_DESCRIPTION)}`)
            .option("-o, --output <string>", `${StringUtils.getString(StringId.COMMAND_OUT_DESCRIPTION)}`)
        program.parse();
        const options = program.opts();
        this.inputFilePath = options.input;
        this.outputFilePath = options.output
        this.checkInput();
    }

    private checkInput() {
        this.inputFilePath = path.resolve(this.inputFilePath);
        this.outputFilePath = this.outputFilePath ? path.resolve(this.outputFilePath) : this.outputFilePath;
        if (!FileUtils.isExists(this.inputFilePath)) {
            throw `${StringUtils.getString(StringId.INPUT_FILE_NOT_FOUND)}: ${this.inputFilePath}`;
        }
        if (!FileUtils.isDirectory(this.inputFilePath)) {
            if (!this.inputFilePath.endsWith('.d.ts')) {
                throw StringUtils.getString(StringId.INVALID_FILE)
            }
        }
    }


    isHandleMultiFiles(): boolean {
        return FileUtils.isDirectory(this.inputFilePath);
    }

    getOptions(): Options {
        return new Options()
    }
}