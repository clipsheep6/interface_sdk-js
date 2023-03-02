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

const { readFile, etsComponentSet, collectAllApi } = require('./util');
const { excel } = require('./collectApi');
const { collectBaseApi } = require('./format');
const path = require('path');
const fs = require('fs');
const ts = require('typescript');

let allCallApisInApp = [];

function collectApi(url) {
    const applicationUrl = path.resolve(__dirname, url);
    const applicationFiles = [];
    readFile(applicationUrl, applicationFiles);
    if (applicationFiles.length === 0) {
        console.error('ERROR:application directory is empty!');
    } else {
        tsTransform(applicationFiles, visitEachNode);
        excel(allCallApisInApp);
    }
}

function tsTransform(applicationFiles, callback) {
    applicationFiles.forEach(url => {
        if (/\.ets/.test(path.basename(url)) || /\.ts/.test(path.basename(url)) ||
            /\.js(?!on)/.test(path.basename(url))) {
            const content = fs.readFileSync(url, 'utf-8');
            const fileName = path.basename(url).replace(/\.d.ts$/g, 'ts').replace(/\.js/g, 'ts');
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


function visitEachNode(url) {
    return (context) => {
        return (sourcefile) => {
            const statements = sourcefile.statements;
            // 存放import的d.ts文件和类
            let importFiles = [];
            // 存放符合调用条件的API和组件
            let apiList = [];
            statements.forEach(item => {
                if (ts.isImportDeclaration(item)) {
                    judgeImportFile(item, importFiles);
                } else {
                    collectApplicationApi(item, sourcefile, url, apiList);
                }
            })
            apiList = addPackageName(apiList, importFiles);
            handleInstantiatedCall(apiList)
            allCallApisInApp = allCallApisInApp.concat(collectBaseApi(importFiles, apiList));
            return sourcefile;
        }
    }
}

function handleInstantiatedCall(apiList) {
    apiList.forEach(instantiatedApi => {
        apiList.forEach(api => {
            if (instantiatedApi.instantiateObject === api.moduleName) {
                if (instantiatedApi.notes === '实例化对象方式调用1') {
                    api.packageName = instantiatedApi.packageName;
                    api.notes = '实例化对象方式调用';
                } else if (instantiatedApi.notes === '实例化对象方式调用2') {
                    api.packageName = instantiatedApi.packageName;
                    api.moduleName = instantiatedApi.apiName;
                    api.notes = '实例化对象方式调用';
                } else if (instantiatedApi.notes === '实例化对象方式调用3') {
                    api.packageName = instantiatedApi.packageName;
                    api.moduleName = instantiatedApi.moduleName;
                    api.notes = '实例化对象方式调用';
                }
            }
        })
    })
}

// 收集import的文件名和类
function judgeImportFile(node, importFiles) {
    if (isImportFiles(node)) {
        let importFileName = node.moduleSpecifier.text;
        if (node.importClause && node.importClause.name != undefined) {
            importFiles.push({
                importFile: importFileName,
                importClass: node.importClause.name.escapedText
            })
        } else if (node.importClause.namedBindings !== undefined &&
            ts.isNamedImports(node.importClause.namedBindings)) {
            node.importClause.namedBindings.elements.forEach(element => {
                importFiles.push({
                    importFile: importFileName,
                    importClass: element.name.escapedText
                })
            })
        }
    }
}

function collectApplicationApi(node, sourcefile, url, apiList) {
    if (ts.isPropertyAccessExpression(node) && node.expression && ts.isIdentifier(node.name)) {
        collectUsualCall(node, sourcefile, url, apiList);
    } else if (ts.isQualifiedName(node) && ts.isTypeReferenceNode(node.parent) && node.parent.parent.name &&
        ts.isIdentifier(node.parent.parent.name)) {
        const note = '实例化对象方式调用2';
        const type = 'API';
        const instantiateObject = node.parent.parent.name.escapedText;
        const moduleName = node.left.escapedText;
        const apiName = node.right.escapedText;
        apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, instantiateObject, '', '', type, note, node));
    } else if (ts.isNewExpression(node) && ts.isPropertyDeclaration(node.parent)) {
        if (etsComponentSet.has(node.expression.escapedText)) {
            const type = 'ArkUI';
            collectComponentApis(sourcefile, url, type, node, apiList);
        } else {
            const note = '实例化对象方式调用3';
            const type = 'API';
            const instantiateObject = node.parent.name.escapedText;
            const moduleName = node.expression.escapedText;
            apiList.push(collectAllApi(url, sourcefile, moduleName, '', instantiateObject, '', '', type, note, node));
        }

    } else if (ts.isClassDeclaration(node) && node.heritageClauses && node.members) {
        collectLifeCycleApi(node, url, sourcefile, apiList);
    } else if (isEtsComponentNode(node)) {
        const type = 'ArkUI';
        collectComponentApi(node, apiList, type, url, sourcefile);
        if (node.arguments && ts.isIdentifier(node.expression)) {
            collectComponentApis(sourcefile, url, type, node, apiList);
        }
    }
    node.getChildren().forEach(item => collectApplicationApi(item, sourcefile, url, apiList));
}

function isEtsComponentNode(node) {
    return ts.isEtsComponentExpression(node) || (ts.isCallExpression(node) && node.expression &&
        ts.isIdentifier(node.expression) && etsComponentSet.has(node.expression.escapedText.toString()))
}

// 收集生命周期类型的API
function collectLifeCycleApi(node, url, sourcefile, apiList) {
    const classNode = node.heritageClauses[0].types[0].expression;
    const note = '';
    const type = 'API';
    if (ts.isIdentifier(classNode)) {
        const moduleName = classNode.escapedText;
        node.members.forEach(member => {
            if (ts.isConstructorDeclaration(member)) {
                const apiName = 'constructor';
                apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, note, node));
            } else {
                const apiName = member.name ? member.name.escapedText : '';
                apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, note, node));
            }
        })
    } else if (ts.isPropertyAccessExpression(classNode)) {
        const moduleName = classNode.expression.escapedText;
        const apiName = classNode.name.escapedText;
        node.members.forEach(member => {
            if (ts.isConstructorDeclaration(member)) {
                const value = 'constructor';
                apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', value, type, note, node));
            } else {
                const value = member.name ? member.name.escapedText : '';
                apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', value, type, note, node));
            }
        })
    }
}

function getEveryLifeCycleApi(members, moduleName, apiName, value, type, note, node,apiList){
    members.forEach(member => {
        if (ts.isConstructorDeclaration(member)) {
            value = 'constructor';
            apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', value, type, note, node));
        } else {
            value = member.name ? member.name.escapedText : '';
            apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', value, type, note, node));
        }
    })
}

function collectComponentApis(sourcefile, url, type, componentNode, apiList) {
    let componentName = componentNode.expression.escapedText;
    const notes = '比较API';
    if (componentNode.arguments) {
        componentNode.arguments.forEach(argument => {
            if (ts.isObjectLiteralExpression(argument)) {
                let componentApiArr = collectNestedComponentApi(argument);
                componentApiArr.forEach(componentApi => {
                    apiList.push(collectAllApi(url, sourcefile, componentName, componentApi, '',
                        '', '', type, notes, componentNode));
                })
            }
        })
    }
}

// 收集组件中写在{}里调用的API，可能会有嵌套调用的情况
function collectNestedComponentApi(node) {
    let resultArr = [];
    if (ts.isObjectLiteralExpression(node)) {
        node.properties.forEach(property => {
            if (ts.isPropertyAssignment(property) && property.name && ts.isIdentifier(property.name)) {
                resultArr.push(property.name.escapedText.toString());
                if (property.initializer && ts.isObjectLiteralExpression(property.initializer)) {
                    resultArr = resultArr.concat(collectNestedComponentApi(property.initializer));
                }
            }
        });
    }
    return resultArr;
}

function collectComponentApi(node, apiList, type, url, sourcefile) {
    const notes = '';
    let etsComponentBlockPos = new Set([])
    const componentName = node.expression.escapedText ? node.expression.escapedText.toString() :
        node.expression.expression.escapedText.toString();
    if (ts.isEtsComponentExpression(node) && ts.isBlock(node.parent.parent) &&
        !etsComponentBlockPos.has(node.parent.parent.pos)) {
        etsComponentBlockPos.add(node.parent.parent);
        const blockNode = node.parent.parent;
        const statements = blockNode.statements;
        statements.forEach((stat, index) => {
            if (stat.expression && ts.isEtsComponentExpression(stat.expression)) {
                getUsualCallComponent(statements, url, sourcefile, componentName, type, notes, apiList, index, stat);
            } else if (statements.length == 1 && stat.expression && ts.isEtsComponentExpression(stat.expression)) {
                moduleName = stat.expression.expression.escapedText;
                apiName = 'N/A';
                apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, notes, node));
            }
        });
    } else if (ts.isCallExpression(node)) {
        let temp = node.parent;
        while (!ts.isExpressionStatement(temp)) {
            if (ts.isPropertyAccessExpression(temp)) {
                if (ts.isPropertyAccessExpression(temp)) {
                    apiName = temp.name.escapedText.toString();
                    apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, node));
                } else if (ts.isIdentifier(temp)) {
                    apiName = temp.escapedText.toString();
                    apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, node));
                }
            }
            temp = temp.parent
        }
        if (ts.isExpressionStatement(temp)) {
            apiName = 'N/A'
            apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, node));
        }
    }
}

function getUsualCallComponent(statements, url, sourcefile, componentName, type, notes, apiList, index, stat) {
    if (index + 1 < statements.length && ts.isExpressionStatement(statements[index + 1]) &&
        statements[index + 1].expression && ts.isCallExpression(statements[index + 1].expression)) {
        let temp = statements[index + 1].expression.expression;
        while (temp) {
            if (ts.isPropertyAccessExpression(temp)) {
                apiName = temp.name.escapedText.toString();
                apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, temp));
            } else if (ts.isIdentifier(temp)) {
                apiName = temp.escapedText.toString();
                apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, temp));
            }
            temp = temp.expression;
        }
    } else if (index + 1 === statements.length) {
        moduleName = stat.expression.expression.escapedText;
        apiName = 'N/A';
        apiList.push(collectAllApi(url, sourcefile, componentName, apiName, '', '', '', type, notes, stat));
    }
}

// 收集常见调用方式的API
function collectUsualCall(node, sourcefile, url, apiList) {
    let type = 'API';
    let moduleName = '';
    let apiName = ''
    if (ts.isCallExpression(node.expression) && ts.isPropertyAccessExpression(node.expression.expression) &&
        node.expression.expression.expression.escapedText) {
        moduleName = node.expression.expression.expression.escapedText;
        apiName = node.name.escapedText.toString;
        apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, '', node));
    } else if (ts.isPropertyAccessExpression(node.expression) && node.expression.expression) {
        if (ts.isIdentifier(node.expression.expression)) {
            moduleName = node.expression.expression.escapedText;
            apiName = node.expression.name.escapedText;
            const value = node.name.escapedText;
            apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', value, type, '', node));
        } else {
            moduleName = node.expression.name.escapedText;
            apiName = node.name.escapedText;
            apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, '', node));
        }
    } else if (ts.isIdentifier(node.expression) && ts.isCallExpression(node.parent)) {
        apiList.push(collectOnOffApi(node, url, type, sourcefile));
    } else if (ts.isIdentifier(node.expression) && ts.isIdentifier(node.name)) {
        moduleName = node.expression.escapedText;
        apiName = node.name.escapedText;
        apiList.push(collectAllApi(url, sourcefile, moduleName, apiName, '', '', '', type, '', node));
    }
}

// 收集到的API是没有文件名的，通过这个函数添加上
function addPackageName(apiList, importFiles) {
    importFiles.forEach(importData => {
        apiList.forEach(api => {
            if (importData.importClass.match(new RegExp(api.moduleName, 'i'))) {
                api.packageName = importData.importFile;
            }
        })
    })
    return apiList;
}

// API名字为on/off的单独处理，拼接上type类型。
function collectOnOffApi(node, url, type, sourcefile) {
    const moduleName = node.expression.escapedText;
    let instantiateObject = '';
    let apiName = '';
    let note = '';
    if (node.parent.arguments && node.name.escapedText.toString() === 'on' ||
        node.name.escapedText.toString() === 'off') {
        node.parent.arguments.forEach(argument => {
            if (ts.isStringLiteral(argument) || ts.isIdentifier(argument)) {
                apiName = node.name.escapedText + '_' + argument.text;
            }
        })
    } else if (ts.isVariableDeclaration(node.parent.parent)) {
        instantiateObject = node.parent.parent.name.escapedText;
        apiName = node.name.escapedText;
        note = '实例化对象方式调用1'
    } else {
        apiName = node.name.escapedText;
    }
    if (apiName !== '') {
        return collectAllApi(url, sourcefile, moduleName, apiName, instantiateObject, '', '', type, note, node)
    }
}

function isImportFiles(node) {
    if (ts.isStringLiteral(node.moduleSpecifier) && ((node.moduleSpecifier.text).indexOf('@ohos.') != -1 ||
        (node.moduleSpecifier.text).indexOf('@system.') != -1) && node.importClause !== undefined) {
        return true;
    }
}

try {
    const appDir = path.resolve(__dirname, '../application');
    collectApi("../application");
} catch (error) {
    console.error('COLLECT IMPORT NAME ERROR: ', error);
}