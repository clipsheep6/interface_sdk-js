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
const { visitEachChild } = require('typescript');
let methodType = '';
// optional argument number
let number = 0;
// every function argument number
let argumentNumber = 0;

// filter api according to the number of parameters and function type
function judgeArgument(applicationApi, newApi) {
    if (applicationApi.functionType == newApi.functionType && applicationApi.number <= newApi.arguments &&
        applicationApi.number >= newApi.arguments - newApi.optionalArg) {
        return true;
    } else if (newApi.functionType == '' && applicationApi.number <= newApi.arguments &&
        applicationApi.number >= newApi.arguments - newApi.optionalArg) {
        return true;
    } else {
        return false;
    }
}
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
    addMethodType(newApis);
    for (let i = 0; i < applicationApis.length; i++) {
        if (applicationApis[i].packageName == 'ohos.geolocation') {
            // console.log(applicationApis[i]);
        }
    }
    for (let j = 0; j < newApis.length; j++) {
        if (newApis[j].packageName == 'ohos.geolocation' && newApis[j].methodName == 'on_locationChange') {
            // console.log(newApis[j]);
        }
    }
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
                    judgeArgument(applicationApis[i], newApis[j]) &&
                    applicationApis[i].packageName == newApis[j].packageName) {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.pos = applicationApis[i].fileName;
                    finalApis.push(applyApi);
                    break;
                } else if (applicationApis[i].apiName == newApis[j].methodName &&
                    applicationApis[i].packageName == newApis[j].packageName &&
                    judgeArgument(applicationApis[i], newApis[j])) {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.pos = applicationApis[i].fileName;
                    finalApis.push(applyApi);
                }
            } else {
                if (applicationApis[i].apiName == newApis[j].className &&
                    applicationApis[i].value == newApis[j].methodName &&
                    applicationApis[i].functionType == newApis[j].functionType &&
                    applicationApis[i].packageName == newApis[j].packageName) {
                    let applyApi = JSON.parse(JSON.stringify(newApis[j]));
                    applyApi.pos = applicationApis[i].fileName;
                    finalApis.push(applyApi);
                }
            }
        }
    }
    // let noRepeatApis = [...new Set(finalApis)];
    excel(finalApis);
}

function getAllApiFiles(files) {
    readFile(path.resolve(__dirname, '../sdk'), files);
}

function addMethodType(newApis) {
    newApis.forEach(item => {
        if (item.apiType == 'Method') {
            let methodContent = `interface test{
                item.methodText
            }`;
            getMethodType(methodContent, filterType, methodType);
            item.optionalArg = number;
            item.arguments = argumentNumber;
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

function filterType() {
    return (context) => {
        return (node) => {
            methodType = '';
            argumentNumber = 0;
            getType(node);
            return node;
        }
        function getType(node) {
            // add function type(callback or Promise)
            if (ts.isFunctionDeclaration(node) || ts.isMethodSignature(node)) {
                if (node.type && ts.isTypeReferenceNode(node.type)) {
                    methodType = node.type.typeName.escapedText;
                } else if (node.parameters.length > 0) {
                        const parameter = node.parameters[node.parameters.length - 1];
                        if (parameter.name.escapedText == 'callback') {
                            methodType = parameter.name.escapedText;
                        }                                          
                }
            }
            // add arguments number and optional arguments number
            if (node.parameters && node.parameters.length>0) {
                number = 0;
                argumentNumber = node.parameters.length;
                let argArray = node.parameters;
                for (let i = 0; i < argArray.length; i++) {
                    if (argArray[i].questionToken && argArray[i].questionToken.kind == 57) {
                        number ++
                    }                   
                }
            }else if (node.arguments && node.arguments.length > 0) {
                number = 0;
                argumentNumber = node.arguments.length;
                let argArray = node.arguments;
                for (let i = 0; i < argArray.length; i++) {
                    if (argArray[i].questionToken && argArray[i].questionToken.kind == 57) {
                        number ++
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