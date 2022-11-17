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
const ExcelJS = require('exceljs');
let isInterface = false;

let apiList = [];
// key:import file; value:import class
let importFiles = new Map();
let applicationApis = [];
let classList = [];
let finalClassList = [];
let etsComponentBlockPos = new Set([]);
let importFileList = [];
let exportClass = '';

function collectApi(url) {
    const applicationUrl = path.resolve(__dirname, url);
    const applicationFiles = [];
    readFile(applicationUrl, applicationFiles);
    tsTransform(applicationFiles, getImportFileName);
}

function tsTransform(applicationFiles, callback) {
    applicationFiles.forEach(url => {
        if (/\.ets/.test(path.basename(url)) || /\.ts/.test(path.basename(url)) || /\.js/.test(path.basename(url))) {
            const content = fs.readFileSync(url, 'utf-8');
            const fileName = path.basename(url).replace(/\.d.ts$/g, 'ts').replace(/\.js/g, 'ts').replace(/\.json/g, 'ts');
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
                    judgeImportFile(item, url);
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
                        packageName: ''
                    })
                } else if (ts.isPropertyAccessExpression(node.expression) && node.expression.expression) {
                    const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                    let functionType = ''
                    if (ts.isIdentifier(node.expression.expression)) {
                        apiList.push({
                            fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                            moduleName: node.expression.expression.escapedText,
                            apiName: node.expression.name.escapedText,
                            value: node.name.escapedText,
                            functionType: functionType,
                            packageName: ''
                        })
                    } else {
                        apiList.push({
                            fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                            moduleName: node.expression.name.escapedText,
                            apiName: node.name.escapedText,
                            functionType: functionType,
                            packageName: ''
                        })
                    }
                } else if (ts.isIdentifier(node.expression) && ts.isCallExpression(node.parent)) {
                    if (node.parent.arguments && node.name.escapedText.toString() == 'on' || node.name.escapedText.toString() == 'off') {
                        let functionTypeObj = addFunctionType(node);
                        node.parent.arguments.forEach(argument => {
                            if (ts.isStringLiteral(argument)) {
                                const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                                let functionType = ''
                                apiList.push({
                                    fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                                    moduleName: node.expression.escapedText,
                                    apiName: node.name.escapedText + '_' + argument.text,
                                    functionType: functionTypeObj.type,
                                    number: functionTypeObj.number,
                                    packageName: ''
                                })
                            }
                        })
                    } else {
                        const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                        // judge function type
                        let functionTypeObj = addFunctionType(node);
                        apiList.push({
                            fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                            moduleName: node.expression.escapedText,
                            apiName: node.name.escapedText,
                            functionType: functionTypeObj.type,
                            packageName: '',
                            number: functionTypeObj.number
                        })
                    }
                } else if (ts.isIdentifier(node.expression) && ts.isIdentifier(node.name)) {
                    const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                    let functionType = '';
                    let number = 0;
                    apiList.push({
                        fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                        moduleName: node.expression.escapedText,
                        apiName: node.name.escapedText,
                        functionType: functionType,
                        packageName: '',
                        number: number
                    })

                }
            } else if (ts.isQualifiedName(node) && ts.isTypeReferenceNode(node.parent)) {
                const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
                let functionType = ''
                let instantiateObject = ''
                if (ts.isPropertyDeclaration(node.parent.parent) && ts.isVariableDeclaration(node.parent.parent.name)) {
                    instantiateObject = node.parent.parent.name.escapedText
                }
                classList.push({
                    fileName: `${url.replace(basePath, '')}(line:${posOfNode.line + 1}, col:${posOfNode.character + 1})`,
                    instantiateObject: instantiateObject,
                    moduleName: node.left.escapedText,
                    interfaceName: node.right.escapedText,
                    apiName: '',
                    functionType: functionType,
                    packageName: ''
                })
            } else if (isEtsComponentNode(node)) {
                const componentName = node.expression.escapedText ? node.expression.escapedText.toString() :
                    node.expression.expression.escapedText.toString();
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

function addFunctionType(node) {
    let type = '';
    let number = '';
    let typeArguments;
    if (ts.isCallExpression(node.parent) && node.parent.arguments.length > 0) {
        typeArguments = node.parent.arguments;
        if (ts.isArrowFunction(typeArguments[typeArguments.length - 1]) ||
            ts.isFunctionExpression(typeArguments[typeArguments.length - 1])) {
            type = 'callback';
            number = typeArguments.length;
            return { type, number };
        } else {
            type = 'Promise';
            number = typeArguments.length;
            return { type, number };
        }
    } else if (node.parent.arguments.length == 0) {
        type = 'Promise';
        number = 0;
        return { type, number };
    }
}

function addImportFiles(fileName, importClass, packageName) {
    let file = `${__dirname.replace('src', "")}\sdk\\api\\${packageName}.d.ts`
    let isExit = fs.existsSync(file);
    let fileContent = isExit ? fs.readFileSync(file, 'utf-8') : '';
    const filePath = path.basename(file).replace(/\.d.ts$/g, 'ts');
    ts.transpileModule(fileContent, {
        compilerOptions: {
            "target": ts.ScriptTarget.ES2017
        },
        fileName: filePath,
        transformers: { before: [judgeIsExport()] }
    })
    importFileList.push({
        appFileName: fileName.replace(__dirname.replace('src', ''), ''),
        importClass: importClass,
        exportClass: exportClass,
        packageName: packageName
    })
}

function judgeIsExport() {
    return (context) => {
        exportClass = '';
        return (sourcefile) => {
            if (sourcefile.statements) {
                sourcefile.statements.forEach(statement => {
                    if (ts.isExportAssignment(statement) && statement.expression.escapedText) {
                        exportClass = statement.expression.escapedText;
                    }
                })
            }
            return sourcefile;
        }
    }
}

function judgeImportFile(node, url) {
    if (ts.isStringLiteral(node.moduleSpecifier)) {
        if ((node.moduleSpecifier.text).indexOf('@ohos.') != -1 || (node.moduleSpecifier.text).indexOf('@system.') != -1) {
            let moduleNames = [];
            let importFileName = node.moduleSpecifier.text;
            let importClass = '';
            if (importFiles.get(node.moduleSpecifier.text)) {
                const moduleNameSet = new Set(importFiles.get(node.moduleSpecifier.text));
                importClass = node.importClause ? node.importClause.name.escapedText : '';
                if (node.importClause && node.importClause.name != undefined) {
                    if (!moduleNameSet.has(node.importClause.name.escapedText)) {
                        moduleNameSet.add(node.importClause.name.escapedText);
                        addImportFiles(url, importClass, importFileName);
                    } else {
                        addImportFiles(url, importClass, importFileName);
                    }
                } else if (node.importClause !== undefined && ts.isNamedImports(node.importClause.namedBindings)) {
                    node.importClause.namedBindings.elements.forEach(element => {
                        importClass = element.name.escapedText;
                        if (!moduleNameSet.has(element.name.escapedText)) {
                            moduleNameSet.add(element.name.escapedText);
                            addImportFiles(url, importClass, importFileName);
                        } else {
                            addImportFiles(url, importClass, importFileName);
                        }
                    })
                }
                moduleNames = [...moduleNameSet];
            } else {
                if (node.importClause) {
                    moduleNames.push(node.importClause.name.escapedText);
                    importClass = node.importClause.name.escapedText;
                    addImportFiles(url, importClass, importFileName);
                } else if (node.importClause !== undefined && ts.isNamedImports(node.importClause.namedBindings)) {
                    node.importClause.namedBindings.elements.forEach(element => {
                        moduleNames.push(element.name.escapedText);
                        importClass = element.name.escapedText;
                        addImportFiles(url, importClass, importFileName);
                    })
                }
            }
            importFiles.set(node.moduleSpecifier.text, moduleNames);
        }
    }
}

function isInterfaceDeclaration(interfaceName) {
    return (context) => {
        isInterface = false;
        return (node) => {
            return node;
        }
        function getInterfaceName(node) {
            if (ts.isInterfaceDeclaration(node) && interfaceName === node.name.escapedText) {
                isInterface = true;
            }
            return ts.visitEachChild(node, getInterfaceName, context);
        }
    }
}

function filterApi() {
    classList.forEach(item => {
        importFileList.forEach(importFile => {
            if (item.moduleName === importFile.importClass && item.fileName.indexOf(importFile.appFileName) != -1) {
                item.packageName = importFile.packageName.replace('@', '');
            }
        });
    });

    classList.forEach(item => {
        let file = `${__dirname.replace('src', "")}\sdk\\api\\@${item.packageName}.d.ts`
        let fileContent = fs.readFileSync(file, 'utf-8');
        const filePath = path.basename(file).replace(/\.d.ts$/g, 'ts');
        ts.transpileModule(fileContent, {
            compilerOptions: {
                "target": ts.ScriptTarget.ES2017
            },
            fileName: filePath,
            transformers: { before: [isInterfaceDeclaration(item.interfaceName)] }
        })
        if (!isInterface) {
            item.interfaceName = '';
        }
    });

    classList.forEach(item => {
        apiList.forEach(api => {
            if (item.instantiateObject === api.moduleName) {
                let unsureApi = api;
                unsureApi.namespace = item.moduleName;
                unsureApi.moduleName = item.interfaceName;
                unsureApi.packageName = item.packageName;
                unsureApi.notes = '实例化对象方式调用'
                finalClassList.push(unsureApi);
            }
        });
    });

    importFileList.forEach(importFile => {
        apiList.forEach(api => {
            if (importFile.importClass == api.moduleName && api.fileName.indexOf(importFile.appFileName) != -1) {
                api.packageName = importFile.packageName.replace('@', '');
                applicationApis.push(api);
                // console.log(api);
            }
        });
    });

    // applicationApis.forEach(item => {
    //     if (item.moduleName == 'deviceInfo') {
    //         console.log(item);
    //     }
    // });

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
    // exports.applicationApis = applicationApis;
    let noRepeatApis = [...new Set(finalClassList)];
    const allApiList = applicationApis.concat(noRepeatApis);
    exports.applicationApis = allApiList;

} catch (error) {
    console.error('COLLECT IMPORT NAME ERROR: ', error);
}