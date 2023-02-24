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
import { Instruct, StringId } from "../utils/constant";
import { FileUtils } from "../utils/fileUtils";
import { LogUtil } from "../utils/logUtil";
import { StringUtils } from "../utils/stringUtils";
import { comment, Context, Options, LogReporter, rawInfo, sourceParser } from "./typedef";
import ts, { CommentRange, TransformationContext, TransformationResult } from "typescript";
import { createHash } from 'node:crypto'

export class ContextImpl implements Context {
  options: Options;
  inputFile: string;
  outputFile: string;
  rawSourceCodeInfo?: rawInfo.RawSourceCodeInfo;

  constructor(inputFile: string, outputFile: string, options?: Options) {
    this.inputFile = inputFile;
    this.outputFile = outputFile;
    this.options = options ? options : new Options();
  }

  getOptions(): Options {
    return this.options;
  }

  setRawSourceInfo(rawInfo: rawInfo.RawSourceCodeInfo): void {
    this.rawSourceCodeInfo = rawInfo;
  }

  getRawSourceCodeInfo(): rawInfo.RawSourceCodeInfo {
    return this.rawSourceCodeInfo || new RawSourceCodeInfoImpl('');
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
    const relativePath = path.relative(inputParam.inputFilePath!, sourceFile);
    // 如果设置了 outputPath
    if (inputParam.outputFilePath) {
      return path.join(inputParam.outputFilePath, relativePath);
    }
    // 如果未设置 outputPath, 同级目录创建新目录
    const fileName = path.basename(inputParam.inputFilePath!);
    const dirname = path.dirname(inputParam.inputFilePath!);
    return path.resolve(dirname, `${fileName}_new`, relativePath);
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
  /**
   * 可能存在注释的节点类型。
   */
  commentNodeWhiteList: ts.SyntaxKind[] = [
    ts.SyntaxKind.VariableDeclaration, ts.SyntaxKind.VariableDeclarationList, ts.SyntaxKind.FunctionDeclaration,
    ts.SyntaxKind.ClassDeclaration, ts.SyntaxKind.InterfaceDeclaration, ts.SyntaxKind.TypeAliasDeclaration,
    ts.SyntaxKind.EnumDeclaration, ts.SyntaxKind.ModuleDeclaration, ts.SyntaxKind.NamespaceExportDeclaration,
    ts.SyntaxKind.PropertySignature, ts.SyntaxKind.CallSignature, ts.SyntaxKind.MethodSignature, ts.SyntaxKind.MethodDeclaration,
    ts.SyntaxKind.EnumMember, ts.SyntaxKind.VariableStatement, ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.Constructor,
    ts.SyntaxKind.TypeLiteral
  ];
  visitNodeChildrenWhilteList: ts.SyntaxKind[] = [
    ts.SyntaxKind.ModuleDeclaration, ts.SyntaxKind.ModuleBlock, ts.SyntaxKind.NamespaceExportDeclaration, ts.SyntaxKind.ClassDeclaration,
    ts.SyntaxKind.InterfaceDeclaration, ts.SyntaxKind.EnumDeclaration, ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.Parameter,
    ts.SyntaxKind.TypeLiteral, ts.SyntaxKind.PropertySignature, ts.SyntaxKind.TypeAliasDeclaration
  ]

  constructor(code: string, options: Options) {
    super(code)
    this.options = options;
  }

  private shouldNotify(node: ts.Node): boolean {
    // if kind = ImportDeclaration, comments may be license declarations
    return this.commentNodeWhiteList.includes(node.kind);
  }

  private shouldForEachChildren(node: ts.Node): boolean {
    //this.visitNodeChildrenWhilteList.includes(node.kind);
    return true;
  }

  private getCommentNode(node: ts.Node, parentNode: comment.CommentNode | undefined, sourceFile: ts.SourceFile): comment.CommentNode {
    const leadingComments: comment.CommentInfo[] = CommentHelper.getNodeLeadingComments(node, sourceFile);
    const trailingComments: comment.CommentInfo[] = CommentHelper.getNodeTrailingComments(node, sourceFile);
    const currentCommentNode: comment.CommentNode = {
      astNode: node,
      parentNode: parentNode,
      commentInfos: []
    };
    currentCommentNode.commentInfos?.push(...leadingComments);
    currentCommentNode.commentInfos?.push(...trailingComments);
    return currentCommentNode;
  }

  transform(callback: sourceParser.ITransformCallback): ts.SourceFile {
    const thiz = this;
    let sourceFile = ts.createSourceFile("transform", this.content, this.options.scriptTarget, true);
    function transformCallback(context: TransformationContext) {
      return (rootNode: ts.Node) => {
        function visitor(node: ts.Node): ts.Node {
          const commentNode = thiz.getCommentNode(node, undefined, sourceFile);
          const newNode: ts.Node | undefined = callback.onTransformNode(commentNode);
          return ts.visitEachChild(newNode ? newNode : node, visitor, context);
        }
        return ts.visitEachChild(rootNode, visitor, context);
      };
    };
    const rootNode = callback.onTransformNode({ astNode: sourceFile });
    if (rootNode && ts.isSourceFile(rootNode) && rootNode != sourceFile) {
      sourceFile = rootNode;
    }
    const transformResult: TransformationResult<ts.Node> = ts.transform(sourceFile, [transformCallback]);
    if (transformResult.transformed.length > 0) {
      return transformResult.transformed[0] as ts.SourceFile;
    }
    return sourceFile;
  }

  visitEachNodeComment(callback: sourceParser.INodeVisitorCallback, onlyVisitHasComment?: boolean): ts.SourceFile {
    const thiz = this;
    const handledComments: Set<string> = new Set();
    function nodeVisitor(node: ts.Node, parentNode: comment.CommentNode | undefined, sourceFile: ts.SourceFile) {
      const currentCommentNode = thiz.getCommentNode(node, parentNode, sourceFile);
      thiz.skipHandledComments(handledComments, currentCommentNode);
      const hasComment: boolean = currentCommentNode.commentInfos ? currentCommentNode.commentInfos.length > 0 : false;
      const { line, character } = node.getSourceFile().getLineAndCharacterOfPosition(node.getStart());
      if (thiz.shouldNotifyCallback(node, hasComment, onlyVisitHasComment)) {
        LogUtil.d("SourceCodeParserImpl", `kind: ${node.kind}, line: ${line}, ${JSON.stringify(currentCommentNode.commentInfos)}`);
        callback.onVisitNode(currentCommentNode);
      } else {
        LogUtil.d("SourceCodeParserImpl",
          `skip, kind: ${node.kind}, line: ${line}, character: ${character}, commnet size: ${currentCommentNode.commentInfos?.length}`);
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

  private skipHandledComments(handledComments: Set<string>, commentNode: comment.CommentNode) {
    const unHandledComments: Array<comment.CommentInfo> = [];
    commentNode.commentInfos?.forEach((info) => {
      const key = `${info.pos}:${info.end}`;
      if (!handledComments.has(key)) {
        unHandledComments.push(info);
        handledComments.add(key);
      }
    });
    if (unHandledComments.length != commentNode.commentInfos?.length) {
      commentNode.commentInfos = unHandledComments;
    }
  }

  private shouldNotifyCallback(node: ts.Node, hasComment: boolean, onlyVisitHasComment?: boolean): boolean {
    if (!this.shouldNotify(node)) {
      return false;
    }
    return !(onlyVisitHasComment && onlyVisitHasComment == true && !hasComment);
  }

  printSourceFile(sourceFile: ts.SourceFile): string {
    const printerOptions = { omitTrailingSemicolon: false, removeComments: false, preserveSourceNewlines: true };
    const printer = ts.createPrinter(printerOptions);
    let codeString = printer.printFile(sourceFile);
    // replace empty line instruct
    codeString = codeString.replaceAll(/\s*\/\/Instruct_new_line/g, '\n');
    return codeString;
  }
}


export class CommentHelper {

  /**
   * 给节点追加注释(注意：无法在原始注释中追加，只能将原始注释完全复制一份并修改再做完整替换)
   * 
   * @param node ast 节点对象
   * @param commentInfos 注释列表
   */
  static addComment(node: ts.Node, commentInfos: Array<comment.CommentInfo>): void {
    if (commentInfos.length == 0) {
      return;
    }
    CommentHelper.ignoreOriginalComment(node);
    commentInfos.forEach((info) => {
      // might be a license
      if (info.ignore) {
        return;
      }
      const assembledComment = CommentHelper.assembleComment(info);
      const kind = info.isMultiLine ? ts.SyntaxKind.MultiLineCommentTrivia : ts.SyntaxKind.SingleLineCommentTrivia;
      if (info.isLeading) {
        ts.addSyntheticLeadingComment(node, kind, assembledComment, true);
      } else {
        ts.addSyntheticTrailingComment(node, kind, assembledComment, true);
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
    const writer = new CommentWriter(commentInfo.isMultiLine);
    return writer.publish(commentInfo);
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
    const syntheticLeadingComments: Array<ts.SynthesizedComment> = new Array();
    commentInfos.forEach((info) => {
      // might be a license
      if (info.ignore) {
        return;
      }
      syntheticLeadingComments.push({
        text: CommentHelper.assembleComment(info),
        pos: -1,
        end: -1,
        hasLeadingNewline: true,
        hasTrailingNewLine: true,
        kind: info.isMultiLine ? ts.SyntaxKind.MultiLineCommentTrivia : ts.SyntaxKind.SingleLineCommentTrivia
      });
    });

    if (!commentKind || commentKind == comment.CommentLocationKind.LEADING) {
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
   * @param comment
   * @returns 
   */
  static parseComment(comment: string, commentKind: ts.CommentKind, isLeading: boolean): comment.CommentInfo {
    const { parse } = require('comment-parser');
    const commentInfo: comment.CommentInfo = {
      text: comment,
      isMultiLine: commentKind == ts.SyntaxKind.MultiLineCommentTrivia,
      isLeading: isLeading,
      description: "",
      commentTags: [],
      parsedComment: undefined,
      pos: -1,
      end: -1,
      ignore: false
    };
    const parsedComments = parse(comment);
    if (parsedComments.length == 0) {
      LogUtil.w("CommentHelper", "parseComment: comment might be a license.");
      return commentInfo;
    }
    commentInfo.parsedComment = parsedComments[0];
    commentInfo.description = parsedComments[0].description;
    parsedComments[0].tags.forEach((tagObject: any) => {
      commentInfo.commentTags.push({
        tag: tagObject.tag,
        name: tagObject.name,
        type: tagObject.type,
        optional: tagObject.optional,
        description: tagObject.description,
        source: tagObject.source[0].source,
        lineNumber: tagObject.source[0].number,
        tokenSource: tagObject.source,
        defaultValue: tagObject.default ? tagObject.default : undefined
      });
    });
    return commentInfo;
  }

  /**
   * 获取指定AST节点上的注释，若无注释返回空数组。
   * 
   * @param node 
   * @param sourceFile 
   * @returns 
   */
  static getNodeLeadingComments(node: ts.Node, sourceFile: ts.SourceFile): comment.CommentInfo[] {
    try {
      const leadingCommentRange: CommentRange[] | undefined = ts.getLeadingCommentRanges(sourceFile.getFullText(), node.getFullStart());
      if (leadingCommentRange?.length) {
        const commentInfos = leadingCommentRange.map((range) => {
          const comment = sourceFile.getFullText().slice(range.pos, range.end);
          const commentInfo = CommentHelper.parseComment(comment, range.kind, true);
          commentInfo.pos = range.pos;
          commentInfo.end = range.end;
          return commentInfo;
        });
        this.fixLicenseComment(node, commentInfos);
        return commentInfos;
      }
      return [];
    } catch (error) {
      LogUtil.w('CommentHelper', 'getNodeLeadingComments:' + error);
      return [];
    }
  }

  /**
   * 如果license注释与头注释间没有空白行会导致license丢失.
   *
   * @param commentInfos
   */
  private static fixLicenseComment(node: ts.Node, commentInfos: comment.CommentInfo[]) {
    if (commentInfos.length <= 1) {
      return;
    }
    // license 注释在第一位
    const firstCommentInfo: comment.CommentInfo = commentInfos[0];
    if (!firstCommentInfo.text.search('Copyright')) {
      return
    }
    const firstPosition = node.getSourceFile().getLineAndCharacterOfPosition(firstCommentInfo.end);
    const secondPosition = node.getSourceFile().getLineAndCharacterOfPosition(commentInfos[1].pos);
    // 无空格
    if ((secondPosition.line - firstPosition.line) == 1) {
      firstCommentInfo.ignore = false;
    } else {
      firstCommentInfo.ignore = true;
    }
    // license注释与头注释之间没有import语句会导致两者间的空行丢失, 插入空行指令
    const emptySingleLineComment: comment.CommentInfo = {
      text: Instruct.EMPTY_LINE,
      isMultiLine: false,
      isLeading: true,
      description: "",
      commentTags: [],
      parsedComment: undefined,
      pos: 0,
      end: 0,
      ignore: false
    }
    commentInfos.splice(1, 0, emptySingleLineComment);
  }

  static getNodeTrailingComments(node: ts.Node, sourceFile: ts.SourceFile): comment.CommentInfo[] {
    try {
      const trailingCommentRange: CommentRange[] | undefined = ts.getTrailingCommentRanges(sourceFile.getFullText(), node.getEnd() + 1);
      if (trailingCommentRange?.length) {
        const commentNodes = trailingCommentRange.map((range) => {
          const comment = sourceFile.getFullText().slice(range.pos, range.end);
          return CommentHelper.parseComment(comment.replace(/^\s*\/\//g, ''), range.kind, false);
        });
        return commentNodes;
      }
      return [];
    } catch (error) {
      LogUtil.w('CommentHelper', 'getNodeTrailingComments:' + error);
      return [];
    }
  }
}

/**
 * 注释封装类
 */
class CommentWriter {
  isMultiLine: boolean;

  constructor(isMultiLine: boolean) {
    this.isMultiLine = isMultiLine;
  }
  /**
   * 构建完整的注释文本段
   */
  publish(commentInfo: comment.CommentInfo): string {
    const parsedComment = commentInfo.parsedComment;
    // 如果没有解析过的注释对象(可能是license)，使用原始注释内容
    let plainComment = parsedComment ? this.restoreParsedComment(parsedComment, commentInfo.commentTags) : commentInfo.text;
    if (commentInfo.isMultiLine) {
      // 删除起始 /* 和末尾 */ 符号
      plainComment = plainComment.substring(2, plainComment.length - 2);
    }
    return plainComment;
  }

  private restoreParsedComment(parsedComment: any, commentTags: Array<comment.CommentTag>): string {
    const newSourceArray: Array<comment.CommentSource> = [];
    for (let source of parsedComment.source) {
      // 保留描述信息,去除标签注释
      if (source.tokens.tag != '') {
        break;
      }
      // 除了起始符号为空，其他场景则重置为一个空格
      // ts api 提供的写注释接口缩进是参考当前节点的，因此一个空格可以保证格式正确
      if (source.tokens.start != '') {
        source.tokens.start = ' ';
      }
      newSourceArray.push(source);
    }
    const lastSource = newSourceArray[newSourceArray.length - 1];
    if (!this.isEndLine(lastSource.tokens)) {
      this.addNewEmptyLineIfNeeded(newSourceArray, lastSource);
      this.addTags(newSourceArray, commentTags);
    }
    parsedComment.source = newSourceArray;
    const { stringify } = require('comment-parser');
    return stringify(parsedComment);
  }

  private addNewEmptyLineIfNeeded(newSourceArray: Array<comment.CommentSource>, lastSource: comment.CommentSource) {
    if (this.shouldInsertNewEmptyLine(lastSource.tokens)) {
      // 注释还原成字符串时， number, source 属性不会被用到 
      newSourceArray.push({ number: 0, source: '', tokens: this.getNewLineToken() });
    }
  }

  private addTags(newSourceArray: Array<comment.CommentSource>, commentTags: Array<comment.CommentTag>) {
    commentTags.forEach((commentTag) => {
      // tag的描述为多行,复用原始的描述信息
      const tokenSourceLen = commentTag.tokenSource.length;
      if (tokenSourceLen > 1) {
        // 数组第一个为包含tag的注释
        const tagSameLineDescription = commentTag.tokenSource[0].tokens.description;
        newSourceArray.push({ number: 0, source: '', tokens: this.getCommentToken(commentTag, tagSameLineDescription) });
        // 将tag剩余的描述信息放入
        for (let index = 1; index < tokenSourceLen; index++) {
          const tagDescriptionSource = commentTag.tokenSource[index];
          // 末尾的tag会包含注释结束符
          if (tagDescriptionSource.tokens.end != '*/') {
            tagDescriptionSource.tokens.start = ' ';
            newSourceArray.push(tagDescriptionSource);
          }
        }
      } else {
        // tag注释只有一行
        newSourceArray.push({ number: 0, source: '', tokens: this.getCommentToken(commentTag, commentTag.description) });
      }
    });
    newSourceArray.push({ number: 0, source: '', tokens: this.getEndLineToken() });
  }

  private getCommentToken(commentTag: comment.CommentTag, description: string): comment.CommentToken {
    const tokens: comment.CommentToken = {
      // 起始空格
      start: ' ',
      // * 定界符
      delimiter: '*',
      // 定界符之后空格
      postDelimiter: ' ',
      // 标签
      tag: `@${commentTag.tag}`,
      // 标签后空格
      postTag: ' ',
      // 标签名称
      name: commentTag.optional ?
        (commentTag.defaultValue ? `[${commentTag.name} = ${commentTag.defaultValue}]` : `[${commentTag.name}]`) : commentTag.name,
      // 标签名称后空格
      postName: commentTag.name == '' ? '' : ' ',
      // 类型
      type: commentTag.type == '' ? '' : `{ ${commentTag.type} }`,
      // 类型之后空格
      postType: commentTag.type == '' ? '' : ' ',
      // 描述
      description: description,
      end: '',
      lineEnd: ''
    };
    return tokens;
  }

  private getNewLineToken(): comment.CommentToken {
    return {
      start: ' ',
      delimiter: '*',
      postDelimiter: '',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: '',
      end: '',
      lineEnd: ''
    }
  }

  private getEndLineToken(): comment.CommentToken {
    return {
      start: ' ',
      delimiter: '',
      postDelimiter: '',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: '',
      end: '*/',
      lineEnd: ''
    }
  }

  private shouldInsertNewEmptyLine(token: comment.CommentToken): boolean {
    const lastDescriptionNotEmpty = token.tag == '' && token.delimiter == '*' && token.description != '';
    const commentStartLine = token.tag == '' && token.delimiter == '/**';
    return lastDescriptionNotEmpty && !commentStartLine;
  }

  private isEndLine(token: comment.CommentToken): boolean {
    return token.tag == '' && token.end == '*/';
  }
}

export class AstNodeHelper {
  static noNeedSignatureNodeTypes: Array<number> = [
    ts.SyntaxKind.ModuleBlock, ts.SyntaxKind.Block, ts.SyntaxKind.CaseBlock
  ];
  static skipSignatureNode: Array<number> = [
    ts.SyntaxKind.PropertySignature, ts.SyntaxKind.MethodSignature, ts.SyntaxKind.EnumMember, ts.SyntaxKind.Constructor,
    ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.TypeLiteral
  ]

  /**
   * 获取节点的签名信息。签名信息会追加父节点签名信息，确保全局唯一。
   * 注释改动导致行数变化, AST节点的顺序不会影响签名。
   *
   * @param node Ast节点
   * @returns string 节点签名信息
   */
  static getNodeSignature(node: ts.Node): string {
    if (!node || AstNodeHelper.noNeedSignatureNodeTypes.includes(node.kind)) {
      return '';
    }
    let nodeSignature = `${AstNodeHelper.getType(node)}#`
    node.forEachChild((child) => {
      if (!AstNodeHelper.skipSignatureNode.includes(child.kind) && !AstNodeHelper.noNeedSignatureNodeTypes.includes(child.kind)) {
        nodeSignature += `${AstNodeHelper.getChildPlainText(child)}`;
      }
    })
    const qualifiedSignature = this.getParentNodeSignature(node.parent) + nodeSignature;
    LogUtil.d('AstNodeHelper', `qualifiedSignature = ${qualifiedSignature}`);
    const md5Hash = createHash('md5');
    md5Hash.update(qualifiedSignature);
    return md5Hash.digest('hex');
  }

  private static getChildPlainText(node: ts.Node): string {
    if (node.getChildCount() == 0) {
      return node.getText();
    }
    let content = '';
    node.forEachChild((child) => {
      content += `${this.getChildPlainText(child)}`;
    });
    return content;
  }

  private static getType(node: ts.Node): string {
    return `${ts.SyntaxKind[node.kind]}`;
  }

  private static getParentNodeSignature(node: ts.Node): string {
    if (!node || node.kind == ts.SyntaxKind.SourceFile) {
      return '';
    }
    const parentNodeSignature = this.getNodeSignature(node);
    if (parentNodeSignature == '') {
      return this.getNodeSignature(node.parent);
    }
    return parentNodeSignature;
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
  logLevel: string = 'ERR';

  parse() {
    const program = new Command();
    program
      .name("JSDoc formatter plugin")
      .description("CLI to format d.ts")
      .version("0.1.0")
      .requiredOption(`-i, --input <string>`, `${StringUtils.getString(StringId.COMMAND_INPUT_DESCRIPTION)}`)
      .option("-o, --output <string>", `${StringUtils.getString(StringId.COMMAND_OUT_DESCRIPTION)}`)
      .option("-l, --logLevel <INFO,WARN,DEBUG,ERR>", `${StringUtils.getString(StringId.COMMAND_LOGLEVEL_DESCRIPTION)}`)
    program.parse();
    const options = program.opts();
    this.inputFilePath = options.input;
    this.outputFilePath = options.output
    this.logLevel = options.logLevel ? options.logLevel : 'ERR';
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

  static getOptions(): Options {
    return new Options()
  }
}

export class RawSourceCodeInfoImpl extends rawInfo.RawSourceCodeInfo {
  rawInfoMap: Map<string, rawInfo.RawNodeInfo> = new Map();

  addRawNodeInfo(ndoeSignature: string, node: ts.Node, line: number, character: number) {
    this.rawInfoMap.set(ndoeSignature, {
      line: line,
      character: character,
      astNode: node
    });
  }

  findRawNodeInfo(nodeSignature: string): rawInfo.RawNodeInfo | undefined {
    return this.rawInfoMap.get(nodeSignature);
  }

  toString(): string {
    let value = '';
    this.rawInfoMap.forEach((info, signature) => {
      value += `[${signature}, ${info.line}]\n`;
    });
    return value;
  }
}