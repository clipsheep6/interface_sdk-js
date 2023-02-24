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
import { CommentHelper } from "./coreImpls";
import { comment, Context, ISourceCodeProcessor, ProcessResult } from "./typedef";

export class AsynchronousFunctionProcessor implements ISourceCodeProcessor {
    process(context: Context, content: string): ProcessResult {
        const sourceParser = context.getSourceParser(content);
        const sourceFile: ts.SourceFile = ts.createSourceFile('', content, ts.ScriptTarget.ES2017, true);
        const preNode: PreNode = new PreNode('', []);
        ts.forEachChild(sourceFile, (cNode) => {
            this.nodeVisitor(sourceFile, cNode, preNode);
        })
        const printer = ts.createPrinter({ 
            omitTrailingSemicolon: false, 
            removeComments: false,
            newLine: ts.NewLineKind.LineFeed
        });
        return {
            code: Code.OK,
            content: sourceParser.printSourceFile(sourceFile)
        };
    }

    nodeVisitor(pNode: ts.Node, cNode: ts.Node, preNode: PreNode) {
        if (ts.isModuleDeclaration(cNode) && cNode.body && ts.isModuleBlock(cNode.body)) {
            const preNode: PreNode = new PreNode('', []);
            ts.forEachChild(cNode.body, (child) => {
                this.nodeVisitor(cNode, child, preNode);
            })
            return;
        }
    
        if (ts.isSourceFile(cNode) || ts.isClassDeclaration(cNode) || ts.isInterfaceDeclaration(cNode)) {
            const preNode: PreNode = new PreNode('', []);
            ts.forEachChild(cNode, (child) => {
                this.nodeVisitor(cNode, child, preNode);
            })
            return;
        }
        
        if ((ts.isFunctionDeclaration(cNode) || ts.isMethodDeclaration(cNode) || ts.isMethodSignature(cNode)) && this.isAsynchronousFunction(cNode)) {
            const nodeComments: Array<comment.CommentInfo> = CommentHelper.getNodeLeadingComments(cNode, cNode.getSourceFile());
            let functionName: string = '';
            if (cNode.name && ts.isIdentifier(cNode.name)) {
                functionName = cNode.name.escapedText.toString();
            }
            if (nodeComments.length !== 0) {
                if (functionName !== '') {
                    preNode.name = functionName;
                    preNode.doc = nodeComments;
                } else {
                    preNode.name = '';
                    preNode.doc = [];
                }
            } else {
                if (preNode.name === '') {
                    return;
                }
                if (preNode.name === functionName) {
                    CommentHelper.setComment(cNode, preNode.doc);
                    return;
                }
                preNode.name = '';
                preNode.doc = [];
            }
            
        } else {
            preNode.name = '';
            preNode.doc = [];
        }
    }
    
    isAsynchronousFunction(node: ts.MethodDeclaration | ts.MethodSignature | ts.FunctionDeclaration) {
        if (node.type && (node.type.kind === ts.SyntaxKind.TypeReference) && (node.type as ts.TypeReferenceNode).typeName.getText() === 'Promise') {
            return true;
        }
        if (node.parameters.length !== 0) {
            for (let i = 0; i < node.parameters.length; i++) {
                const param: ts.ParameterDeclaration = node.parameters[i];
                if (param.type && (param.type.kind === ts.SyntaxKind.TypeReference) && (param.type as ts.TypeReferenceNode).typeName.getText() === 'AsyncCallback'){
                    return true;
                }
            }
        } 
        return false;
    }
}

class PreNode {
    name: string;
    doc: Array<comment.CommentInfo>;
    constructor(name: string, doc: Array<comment.CommentInfo>) {
        this.name = name;
        this.doc = doc;
    }
    
}