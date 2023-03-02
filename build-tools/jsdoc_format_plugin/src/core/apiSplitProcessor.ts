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
import { comment, Context, ISourceCodeProcessor, LogReporter, ModifyLogResult, ProcessResult, sourceParser, rawInfo, JSDocModifyType } from "./typedef";
import { CommentHelper, LogResult } from "./coreImpls"

export class ApiSplitProcessor implements ISourceCodeProcessor, sourceParser.ITransformCallback {
  
  logReporter?: LogReporter;
  context?: Context;

  process(context: Context, content: string): ProcessResult {
    if (!context.getOptions().splitUnionTypeApi) {
      return { code: Code.OK, content: content };
    }
    this.context = context;
    const sourceParser = context.getSourceParser(content);
    this.logReporter = context.getLogReporter();
    const sourceFile = sourceParser.transform(this);
    return {
      code: Code.OK,
      content: sourceFile ? sourceParser.printSourceFile(sourceFile) : content
    };
  }

  createNewMembers(members: ts.NodeArray<ts.Statement> | ts.NodeArray<ts.ClassElement> | ts.NodeArray<ts.TypeElement>) {
    const newMembers: Array<ts.Statement | ts.ClassElement | ts.TypeElement> = []
    members.forEach((member) => {
      const newFunctionNodes: Array<ts.FunctionDeclaration | ts.MethodDeclaration | ts.MethodSignature> = this.splitEventSubscriptionFunction(member);
      if (newFunctionNodes.length === 0) {
        newMembers.push(member);
      } else {
        newMembers.push(...newFunctionNodes);
      }
    })
    return newMembers;
  }

  onTransformNode(node: comment.CommentNode): ts.Node | undefined {
    if (node.astNode === undefined) {
      return undefined;
    }
    if (ts.isSourceFile(node.astNode)) {
      const sourceFile: ts.SourceFile = node.astNode;
      const statements: ts.NodeArray<ts.Statement> = sourceFile.statements;
      const newSourceFileStatements: Array<ts.Statement> = this.createNewMembers(statements) as Array<ts.Statement>;
      return ts.factory.updateSourceFile(sourceFile, newSourceFileStatements, sourceFile.isDeclarationFile, sourceFile.referencedFiles, sourceFile.typeReferenceDirectives, sourceFile.hasNoDefaultLib, sourceFile.libReferenceDirectives);
    }
    if (ts.isModuleDeclaration(node.astNode)) {
      const moduleDeclaration: ts.ModuleDeclaration = node.astNode;
      if (moduleDeclaration.body && moduleDeclaration.body.kind === ts.SyntaxKind.ModuleBlock) {
        const moduleBlockStatements: ts.NodeArray<ts.Statement> = moduleDeclaration.body.statements;
        const newModuleBlockMembers: Array<ts.Statement> = this.createNewMembers(moduleBlockStatements) as Array<ts.Statement>;
        const newModuleBlock: ts.ModuleBlock = ts.factory.updateModuleBlock(moduleDeclaration.body, newModuleBlockMembers);
        return ts.factory.updateModuleDeclaration(moduleDeclaration, moduleDeclaration.modifiers, moduleDeclaration.name, newModuleBlock);
      }
      return node.astNode;
    }
    if (ts.isClassDeclaration(node.astNode)) {
      const classDeclaration: ts.ClassDeclaration = node.astNode;
      const classDeclarationMembers: ts.NodeArray<ts.ClassElement> = classDeclaration.members;
      const newClassDeclarationMembers: Array<ts.ClassElement> = this.createNewMembers(classDeclarationMembers) as Array<ts.ClassElement>;
      return ts.factory.updateClassDeclaration(classDeclaration, classDeclaration.modifiers, classDeclaration.name, classDeclaration.typeParameters, classDeclaration.heritageClauses, newClassDeclarationMembers);
    }
    if (ts.isInterfaceDeclaration(node.astNode)) {
      const interfaceDeclaration: ts.InterfaceDeclaration = node.astNode;
      const interfaceDeclarationMembers: ts.NodeArray<ts.TypeElement> = interfaceDeclaration.members;
      const newInterfaceDeclarationMembers: Array<ts.TypeElement> = this.createNewMembers(interfaceDeclarationMembers) as Array<ts.TypeElement>;
      return ts.factory.updateInterfaceDeclaration(interfaceDeclaration, interfaceDeclaration.modifiers, interfaceDeclaration.name, interfaceDeclaration.typeParameters, interfaceDeclaration.heritageClauses, newInterfaceDeclarationMembers);
    }
    return node.astNode;
  }

  splitEventValues(node: ts.Node) {
    const eventValues: Array<string> = []
    if (ts.isFunctionDeclaration(node) || ts.isMethodDeclaration(node) || ts.isMethodSignature(node)) {
      let functionName: string = ''
      if (node.name && ts.isIdentifier(node.name)) {
        functionName = node.name.getText();
      }
      if ((functionName !== 'on') && (functionName !== 'off')) {
        return eventValues;
      }
      if ((node.parameters[0].type) && (node.parameters[0].type.kind === ts.SyntaxKind.UnionType)) {

        const types: ts.NodeArray<ts.TypeNode> = (node.parameters[0].type as ts.UnionTypeNode).types
        for (let i = 0; i < types.length; i++) {
          const eventValueNode: ts.TypeNode = types[i];
          if (eventValueNode.kind === ts.SyntaxKind.LiteralType && (eventValueNode as ts.LiteralTypeNode).literal.kind === ts.SyntaxKind.StringLiteral) {
            const eventValue = (eventValueNode as ts.LiteralTypeNode).literal.getText();
            // 这里获取的eventValue包含了单引号或双引号，因此需要进行截取
            eventValues.push(eventValue.slice(1, eventValue.length - 1));
          } else {
            return [];
          }
        }
        return eventValues;
      }

      return eventValues;
    }
    return eventValues;
  }

  logReportProcess(node: ts.MethodDeclaration | ts.MethodSignature | ts.FunctionDeclaration) {
    const apiName: string = `${node.name?.getText()}(${node.parameters[0].type?.getFullText()})`;
    const description: string = `对事件订阅函数${apiName}进行了拆分`;
    const comments: Array<comment.CommentInfo> = CommentHelper.getNodeLeadingComments(node, node.getSourceFile());
    const modifyLogResult: ModifyLogResult = LogResult.createModifyResult(node, comments, description, this.context, apiName, JSDocModifyType.EVENT_SUBSCRIPTION_SPLITTION);
    this.logReporter?.addModifyResult(modifyLogResult);
  }

  createNewParams(node: ts.MethodDeclaration | ts.MethodSignature | ts.FunctionDeclaration, eventValue: string, typeParam: ts.ParameterDeclaration) {
    const literalTypeNode = ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(eventValue))
    const newTypeParam: ts.ParameterDeclaration = ts.factory.createParameterDeclaration(typeParam.modifiers, typeParam.dotDotDotToken, typeParam.name, typeParam.questionToken, literalTypeNode, typeParam.initializer);
    const newParams: Array<ts.ParameterDeclaration> = [];
    newParams.push(newTypeParam);
    for (let i = 1; i < node.parameters.length; i++) {
      const param: ts.ParameterDeclaration = node.parameters[i];
      const paramNode: ts.ParameterDeclaration = ts.factory.createParameterDeclaration(param.modifiers, param.dotDotDotToken, param.name, param.questionToken, param.type, param.initializer);
      newParams.push(paramNode);
    }
    return newParams;
  }

  splitEventSubscriptionFunction(node: ts.Node) {
    const newFunctionNodes: Array<ts.FunctionDeclaration | ts.MethodDeclaration | ts.MethodSignature> = [];
    const eventValues: Array<string> = this.splitEventValues(node);
    if (eventValues.length === 0) {
      return newFunctionNodes;
    }

    if (ts.isFunctionDeclaration(node)) {
      const typeParam: ts.ParameterDeclaration = node.parameters[0];
      const modifiers: Array<ts.Modifier> = [];
        node.modifiers?.forEach((modifier) => {
          ts.setEmitFlags(modifier, ts.EmitFlags.NoLeadingComments);
          const newModifier = ts.factory.createModifier(modifier.kind);
          modifiers.push(newModifier);
        })
        const newModifiers: ts.NodeArray<ts.Modifier> = ts.factory.createNodeArray(modifiers);
      eventValues.forEach((eventValue) => {
        const newParams: Array<ts.ParameterDeclaration> = this.createNewParams(node, eventValue, typeParam);
        const newFunctionNode: ts.FunctionDeclaration = ts.factory.createFunctionDeclaration(newModifiers, node.asteriskToken, node.name, node.typeParameters,
          newParams, node.type, node.body);
        const comments: Array<comment.CommentInfo> = CommentHelper.getNodeLeadingComments(node, node.getSourceFile());
        CommentHelper.setComment(newFunctionNode, [CommentHelper.getEmptyLineComment(), ...comments]);
        newFunctionNodes.push(newFunctionNode);
      })
      // 添加报告输出处理逻辑
      this.logReportProcess(node);
      return newFunctionNodes;
    } else if (ts.isMethodDeclaration(node)) {
      const typeParam: ts.ParameterDeclaration = node.parameters[0];
      eventValues.forEach((eventValue) => {
        const newParams: Array<ts.ParameterDeclaration> = this.createNewParams(node, eventValue, typeParam);
        ts.setEmitFlags(node.name, ts.EmitFlags.NoLeadingComments);
        const newFunctionNode: ts.MethodDeclaration = ts.factory.createMethodDeclaration(node.modifiers, node.asteriskToken, node.name, node.questionToken,
          node.typeParameters, newParams, node.type, node.body);
        const comments: Array<comment.CommentInfo> = CommentHelper.getNodeLeadingComments(node, node.getSourceFile());
        CommentHelper.setComment(newFunctionNode, [CommentHelper.getEmptyLineComment(), ...comments]);
        newFunctionNodes.push(newFunctionNode);
      })
      // 添加报告输出处理逻辑
      this.logReportProcess(node);
      return newFunctionNodes;
    } else if (ts.isMethodSignature(node)) {
      const typeParam: ts.ParameterDeclaration = node.parameters[0];
      eventValues.forEach((eventValue) => {
        const newParams: Array<ts.ParameterDeclaration> = this.createNewParams(node, eventValue, typeParam);
        ts.setEmitFlags(node.name, ts.EmitFlags.NoLeadingComments);
        const newFunctionNode: ts.MethodSignature = ts.factory.createMethodSignature(node.modifiers, node.name, node.questionToken, node.typeParameters,
          newParams, node.type);
        const comments: Array<comment.CommentInfo> = CommentHelper.getNodeLeadingComments(node, node.getSourceFile());
        CommentHelper.setComment(newFunctionNode, [CommentHelper.getEmptyLineComment(), ...comments]);
        newFunctionNodes.push(newFunctionNode);
      });
      // 添加报告输出处理逻辑
      this.logReportProcess(node);
      return newFunctionNodes;
    }
    return newFunctionNodes;
  }
}