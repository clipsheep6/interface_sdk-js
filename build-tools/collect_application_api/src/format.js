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

const { readFile, excel, parse, getExcelBuffer, applicationModules, } = require('./collectApi');
const path = require('path');
const ts = require('typescript')
const { importFiles, applicationApis } = require('./collect_import_name');
const { visitEachChild } = require('typescript')
let methodType = '';
function getApiData(fileData) {
    const SDK_API_FILES = [];
    getAllApiFiles(SDK_API_FILES);
    const APP_API_FILES = [];
    fileData.forEach((value, key) => {
        for (let i = 0; i < SDK_API_FILES.length; i++) {
            const filePath = SDK_API_FILES[i];
            if (path.basename(filePath).replace(/\.d\.ts/, '') === key) {
                APP_API_FILES.push(filePath);
                break;
            }
        }
    });
    const apis = parse(APP_API_FILES);
    const newApis = apis;
    const finalApis = [];
    for (let i = 0; i < applicationModules.length; i++) {
        for (let j = 0; j < newApis.length; j++) {
            if (applicationModules[i].packageName == newApis[j].packageName &&
                applicationModules[i].methodName == newApis[j].className) {
                newApis[j].namespace = applicationModules[i].className;
            }
        }
    }
    addMethodType(newApis);
    for (let i = 0; i < applicationApis.length; i++) {
        for (let j = 0; j < newApis.length; j++) {
            if (applicationApis[i].type === "ArkUI") {
                if (applicationApis[i].moduleName === newApis[j].className.replace(/Attribute/, "")
                    .replace(/Interface/, "") && applicationApis[i].apiName == newApis[j].methodName) {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.className = applicationApis[i].moduleName;
                    applyApi.pos = applicationApis[i].fileName;
                    finalApis.push(applyApi);
                } else if (applicationApis[i].apiName == newApis[j].methodName &&
                    newApis[j].className === "CommonMethod") {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.className = applicationApis[i].moduleName;
                    applyApi.pos = applicationApis[i].fileName;
                    applyApi.notes = "CommonMethod";
                    finalApis.push(applyApi);
                } else if (applicationApis[i].moduleName === newApis[j].className &&
                    applicationApis[i].apiName == 'N/A') {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.methodName = '';
                    applyApi.pos = applicationApis[i].fileName;
                    finalApis.push(applyApi);
                }
            } else if (!applicationApis[i].value) {
                if (applicationApis[i].moduleName.match(new RegExp(newApis[j].className, 'i')) &&
                    applicationApis[i].apiName == newApis[j].methodName &&
                    applicationApis[i].functionType == newApis[j].functionType) {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.pos = applicationApis[i].fileName;
                    finalApis.push(applyApi);
                } else if (applicationApis[i].apiName == newApis[j].className &&
                    newApis[j].packageName == applicationApis[i].packageName &&
                    applicationApis[i].functionType == newApis[j].functionType) {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.pos = applicationApis[i].fileName;
                    finalApis.push(applyApi);
                } else if (applicationApis[i].apiName == newApis[j].methodName &&
                    applicationApis[i].packageName == newApis[j].packageName &&
                    applicationApis[i].functionType == newApis[j].functionType) {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.pos = applicationApis[i].fileName;
                    finalApis.push(applyApi);
                }
            } else {
                if (applicationApis[i].apiName == newApis[j].className &&
                    applicationApis[i].value == newApis[j].methodName &&
                    applicationApis[i].functionType == newApis[j].functionType) {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.pos = applicationApis[i].fileName;
                    finalApis.push(applyApi);
                }
            }
        }
    }
    let noRepeatApis = [...new Set(finalApis)];
    excel(noRepeatApis);
}

function getAllApiFiles(files) {
    readFile(path.resolve(__dirname, '../sdk'), files);
}

function filterData(apis, rulers) {
    const appApis = [];
    rulers.forEach((value, key) => {
        const modules = rulers.get(key);
        modules.forEach(module => {
            apis.forEach(api => {
                if (key.replace(/^\@/, '') === api.packageName && module.match(new RegExp(api.className, 'i'))) {
                    appApis.push(api);
                } else if (key.replace(/^\@/, '') === api.packageName) {
                    appApis.push(api);
                }
            });
        });
    });
    return appApis;
}

function addMethodType(newApis) {
    newApis.forEach(item => {
        if (item.apiType == 'Method') {
            let methodContent = item.methodText;
            getMethodType(methodContent, getName, methodType);
            if (methodType == 'callback' || methodType == 'Promise') {
                item.functionType = methodType;
            }
        }
    })
}
function getMethodType(content, callback) {
    ts.transpileModule(content, {
        compilerOptions: {
            "target": ts.ScriptTarget.ES2017
        },
        fileName: "index.ets",
        transformers: { before: [callback()] }
    })
}

function getName() {
    return (context) => {
        return (node) => {
            methodType = '';
            getType(node);
            return node;
        }
        function getType(node) {
            if (ts.isFunctionDeclaration(node)) {
                if (node.parameters.length > 0) {
                    for (let i = 0; i < node.parameters.length; i++) {
                        const parameter = node.parameters[node.parameters.length - 1];
                        methodType = parameter.name.escapedText;
                    }
                } else {
                    if (ts.isTypeReferenceNode(node.type)) {
                        methodType = node.type.typeName.escapedText;
                    }

                }
            }
            return ts.visitEachChild(node, getType, context);
        }

    }
}



try {
    getApiData(importFiles);
} catch (error) {
    console.error("FORMAT API ERROR: ", error);
}