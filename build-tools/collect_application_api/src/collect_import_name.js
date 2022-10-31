/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

const { readFile, etsComponentSet } = require('./util');
const path = require('path');
const fs = require('fs');
const ts = require('typescript');

let apiList = [];
let importFiles = new Map();
let moduleName = [];
let applicationApis = [];
let classNames = [];
let finalClassName = [];
let etsComponentBlockPos = new Set([]);

function collectApi(url) {
    const applicationUrl = path.resolve(__dirname, url);
    const applicationFiles = [];
    readFile(applicationUrl, applicationFiles);
    tsTransform(applicationFiles, getImportFileName);
}

function tsTransform(applicationFiles, callback) {
    applicationFiles.forEach(url => {
        if (/\.ets/.test(path.basename(url)) || /\.ts/.test(path.basename(url))) {
            const content = fs.readFileSync(url, 'utf-8');
            const fileName = path.basename(url).replace(/\.d.ts$/g, 'ts');
            ts.transpileModule(content, {
                compilerOptions: {
                    "target": ts.ScriptTarget.ES2017
                },
                fileName: fileName,
                transformers: { before: [callback(url)] }
            })
        }
    });
}

function getImportFileName(url) {
    return (context) => {
        return (sourcefile) => {
            const statements = sourcefile.statements;
            statements.forEach(item => {
                if (ts.isImportDeclaration(item)) {
                    judgeImportFile(item);
                } else {
                    collectApplicationApi(item, sourcefile);
                }
            })
            return sourcefile;
        }
        function collectApplicationApi(node, sourcefile) {
            const basePath = __dirname.replace('src', '');
            if (ts.isPropertyAccessExpression(node) && node.expression && ts.isIdentifier(node.name)) {
                if (ts.isCallExpression(node.expression) && ts.isPropertyAccessExpression(node.expression.expression)) {
                    const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                    let functionType = ''
                    apiList.push({
                        fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                        moduleName: node.expression.expression.expression.escapedText,
                        apiName: node.name.escapedText,
                        functionType: functionType,
                        packageName:''
                    })
                } else if (ts.isPropertyAccessExpression(node.expression) && ts.isIdentifier(node.expression.expression)) {
                    const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                    let functionType = ''
                    apiList.push({
                        fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                        moduleName: node.expression.expression.escapedText,
                        apiName: node.expression.name.escapedText,
                        value: node.name.escapedText,
                        functionType: functionType,
                        packageName:''
                    })
                } else if (ts.isIdentifier(node.expression) && ts.isCallExpression(node.parent)) {
                    if (node.parent.arguments && node.name.escapedText.toString() == 'on' || node.name.escapedText.toString() == 'off') {
                        node.parent.arguments.forEach(argument => {
                            if (ts.isStringLiteral(argument)) {
                                const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                                let functionType = ''
                                apiList.push({
                                    fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                                    moduleName: node.expression.escapedText,
                                    apiName: node.name.escapedText + '_' + argument.text,
                                    functionType: functionType,
                                    packageName:''
                                })
                            }
                        })
                    } else {
                        const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                        let functionType = ''
                        const typeArguments = node.parent.arguments
                        for (let i = 0; i < typeArguments.length; i++) {
                            if (ts.isArrowFunction(typeArguments[typeArguments.length - 1]) ||
                                ts.isFunctionExpression(typeArguments[typeArguments.length - 1])) {
                                functionType = 'callback'
                            }
                        }
                        // console.log('modulename:::' + node.expression.escapedText);
                        // console.log('apiName::::' + node.name.escapedText);
                        apiList.push({
                            fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                            moduleName: node.expression.escapedText,
                            apiName: node.name.escapedText,
                            functionType: functionType,
                            packageName:''
                        })
                    }
                }
            } else if (ts.isQualifiedName(node) && ts.isTypeReferenceNode(node.parent)) {
                const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                let functionType = ''
                apiList.push({
                    fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                    moduleName: node.left.escapedText,
                    apiName: node.right.escapedText,
                    functionType: functionType,
                    packageName:''
                })
            } else if (isEtsComponentNode(node)) {
                const componentName = node.expression.escapedText.toString();
                if (ts.isEtsComponentExpression(node) && ts.isBlock(node.parent.parent) &&
                    !etsComponentBlockPos.has(node.parent.parent.pos)) {
                    etsComponentBlockPos.add(node.parent.parent);
                    const blockNode = node.parent.parent;
                    const statements = blockNode.statements;
                    statements.forEach((stat, index) => {
                        if (stat.expression && ts.isEtsComponentExpression(stat.expression) &&
                            index + 1 < statements.length && ts.isExpressionStatement(statements[index + 1]) &&
                            statements[index + 1].expression && ts.isCallExpression(statements[index + 1].expression)) {
                            let temp = statements[index + 1].expression.expression;
                            while (temp) {
                                if (ts.isPropertyAccessExpression(temp)) {
                                    const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                                    apiList.push({
                                        fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                                        moduleName: componentName,
                                        apiName: temp.name.escapedText.toString(),
                                        type: 'ArkUI',
                                        pos: node.pos
                                    })
                                } else if (ts.isIdentifier(temp)) {
                                    const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                                    apiList.push({
                                        fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                                        moduleName: componentName,
                                        apiName: temp.escapedText.toString(),
                                        type: 'ArkUI',
                                        pos: node.pos
                                    })
                                }
                                temp = temp.expression;
                            }
                        } else if (statements.length == 1 && stat.expression && ts.isEtsComponentExpression(stat.expression)) {
                            let temp = stat.expression.expression;
                            const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                            apiList.push({
                                fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                                moduleName: temp.escapedText,
                                apiName: 'N/A',
                                type: 'ArkUI',
                                pos: node.pos
                            })
                        }
                    });
                } else if (ts.isCallExpression(node)) {
                    let temp = node.parent;
                    while (!ts.isExpressionStatement(temp)) {
                        if (ts.isPropertyAccessExpression(temp)) {
                            if (ts.isPropertyAccessExpression(temp)) {
                                const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                                apiList.push({
                                    fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                                    moduleName: componentName,
                                    apiName: temp.name.escapedText.toString(),
                                    type: 'ArkUI',
                                    pos: node.pos
                                })
                            } else if (ts.isIdentifier(temp)) {
                                const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                                apiList.push({
                                    fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                                    moduleName: componentName,
                                    apiName: temp.escapedText.toString(),
                                    type: 'ArkUI',
                                    pos: node.pos
                                })
                            }
                        }
                        temp = temp.parent
                    }
                }
            }
            node.getChildren().forEach(item => collectApplicationApi(item, sourcefile));
        }       
    }
}


function isEtsComponentNode(node) {
    return ts.isEtsComponentExpression(node) || (ts.isCallExpression(node) && node.expression &&
        ts.isIdentifier(node.expression) && etsComponentSet.has(node.expression.escapedText.toString()))
}

function judgeImportFile(node) {
    if (ts.isStringLiteral(node.moduleSpecifier)) {
        if ((node.moduleSpecifier.text).indexOf('@ohos.') != -1 || (node.moduleSpecifier.text).indexOf('@system.') != -1) {
            let moduleNames = [];
            if (importFiles.get(node.moduleSpecifier.text)) {
                const moduleNameSet = new Set(importFiles.get(node.moduleSpecifier.text));
                if (node.importClause.name !== undefined) {
                    if (!moduleNameSet.has(node.importClause.name.escapedText)) {
                        moduleNameSet.add(node.importClause.name.escapedText);
                        moduleName.push(node.importClause.name.escapedText)
                    }
                } else if (ts.isNamedImports(node.importClause.namedBindings)) {
                    node.importClause.namedBindings.elements.forEach(element => {
                        if (!moduleNameSet.has(element.name.escapedText)) {
                            moduleNameSet.add(element.name.escapedText);
                            moduleName.push(element.name.escapedText)
                        }
                    })
                }
                moduleNames = [...moduleNameSet];
            } else {
                if (node.importClause.name !== undefined) {
                    moduleNames.push(node.importClause.name.escapedText);
                    moduleName.push(node.importClause.name.escapedText);
                } else if (ts.isNamedImports(node.importClause.namedBindings)) {
                    node.importClause.namedBindings.elements.forEach(element => {
                        moduleNames.push(element.name.escapedText);
                        moduleName.push(element.name.escapedText);

                    })
                }
            }
            importFiles.set(node.moduleSpecifier.text, moduleNames);
        }
    }
}


function filterApi() {
    importFiles.forEach((value, key) =>{
        value.forEach(item=>{
            apiList.forEach(api => {
                if (item == api.moduleName) {
                    api.packageName = key.replace('@', '');
                    applicationApis.push(api);
                }
            })
        })
    })

    apiList.forEach(api => {
        if (api.type == "ArkUI") {
            applicationApis.push(api);
        }
    })
}

try {
    collectApi("../application");
    filterApi();
    exports.importFiles = importFiles;    
    exports.applicationApis = applicationApis;

} catch (error) {
    console.error('COLLECT IMPORT NAME ERROR: ', error);
}