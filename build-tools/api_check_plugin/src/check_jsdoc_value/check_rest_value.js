/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
const ts = require("typescript");
const parse = require('comment-parser');
const path = require('path');
const { getAPINote, ErrorLevel, FileType, ErrorType } = require("../../src/utils");
const { addAPICheckErrorLogs } = require('../compile_info');
const { getPermissionBank } = require('../check_permission');

let formatedNodes = new Set([]);
function checkJsdocResult(node, sourcefile, fileName) {
  let jsdocTag = '';
  if (!formatedNodes.has(fileName + node.pos)) {
    formatedNodes.add(fileName + node.pos);
    const apiNote = getAPINote(node);
    const comments = parse.parse(`${apiNote}`);
    // console.log('comments=',comments)
    comments.forEach(comment => {
      const tags = comment.tags;
      tags.forEach(tag => {
        jsdocTag = tag
        // console.log('jsdocTag=',jsdocTag.tag)
        if (jsdocTag.tag == 'extends') {
          // checkExtendsValue(tag, node, sourcefile, fileName);
        } else if (jsdocTag.tag == 'enum') {
          // checkEnumValue(tag, node, sourcefile, fileName);
        } else if (jsdocTag.tag == 'since') {
          // checkSinceValue(tag,node, sourcefile, fileName);
        } else if (jsdocTag.tag == 'returns') {
          // checkReturnsValue(tag, node, sourcefile, fileName);
        } else if (jsdocTag.tag == 'param') {
          // checkParamValue(tag,node, sourcefile, fileName);
        } else if (jsdocTag.tag == 'throws') {
          // checkThrowsValue(tag, node, sourcefile, fileName);
        } else if (jsdocTag.tag == 'useinstead') {
          // checkUseinsteadValue(tag, node, sourcefile, fileName);
        } else if (jsdocTag.tag == 'type') {
          // checkTypeValue(tag, node, sourcefile, fileName);
        } else if (jsdocTag.tag == 'default') {
          // checkDefaultValue(tag, node, sourcefile, fileName);
        } else if (jsdocTag.tag == 'FAModelOnly' || jsdocTag.tag == 'StageModelOnly' || jsdocTag.tag == 'systemapi') {
          // checkNoValueTag(node, sourcefile, fileName)
        } else if (jsdocTag.tag == 'permission') {
          checkPermissionTag(tag, node, sourcefile, fileName)
        }
      })
    })

    return comments;
  }
}
exports.checkJsdocResult = checkJsdocResult;

function checkExtendsValue(tag, node, sourcefile, fileName) {
  let extendsResult = {
    checkResult: true,
    errorInfo: ""
  }
  let tagValue = tag.name;
  let apiValue = '';
  // 获取api中的extends信息，校验标签合法性及值规范
  if (ts.isClassDeclaration(node) || ts.isInterfaceDeclaration(node)) {
    apiValue = node.heritageClauses ? node.heritageClauses[0].types[0].expression.escapedText : '';
    if (tagValue != apiValue) {
      extendsResult.checkResult = false
      extendsResult.errorInfo = ` '@${tagValue}' should change to '${apiValue}'; `;
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, extendsResult.errorInfo, FileType.JSDOC,
        ErrorLevel.LOW);
    }
  }
  console.log('extendsResult=', extendsResult)
  return extendsResult;
}
exports.checkExtendsValue = checkExtendsValue;

function checkEnumValue(tag, node, sourcefile, fileName) {
  let enumResult = {
    checkResult: true,
    errorInfo: ""
  }
  const enumValues = ['string', 'number'];
  const tagValue = tag.type;
  const tagProblems = tag.problems.length;

  // 获取api中的enum信息，校验标签合法性及值规范
  if (tagProblems > 0 || enumValues.indexOf(tagValue) == -1) {
    enumResult.checkResult = false;
    enumResult.errorInfo = '@enum value is wrong; ';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, enumResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  console.log('enumResult=', enumResult)
  return enumResult;
}
exports.checkEnumValue = checkEnumValue;

function checkSinceValue(tag, node, sourcefile, fileName) {
  let sinceResult = {
    checkResult: true,
    errorInfo: ""
  }
  const tagValue = parseInt(tag.name);
  if (isNaN(tagValue)) {
    sinceResult.checkResult = false;
    sinceResult.errorInfo = `@since value '${tag.name}' is wrong; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, sinceResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  return sinceResult;
}
exports.checkSinceValue = checkSinceValue;

function checkReturnsValue(tag, node, sourcefile, fileName) {
  let returnsResult = {
    checkResult: true,
    errorInfo: ""
  }
  const voidArr = ['void', 'Promise<void>']
  const tagValue = tag.type;

  const apiInfos = node.getText();
  const apiCoin = apiInfos.indexOf(';');
  const apiInfo = apiInfos.substring(0, apiCoin + 1);
  const apiKeyCoin = apiInfo.lastIndexOf(':');
  const apiReturnsValue = apiInfo.substring(apiKeyCoin + 1, apiInfo.length - 1).replace(/ /g, '');
  if (voidArr.indexOf(apiReturnsValue) != -1) {
    returnsResult.checkResult = false;
    returnsResult.errorInfo = 'should delete @returns; ';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, returnsResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  } else if (tagValue != apiReturnsValue) {
    returnsResult.checkResult = false;
    returnsResult.errorInfo = `@returns value '${tagValue}' is wrong; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, returnsResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  console.log('returnsResult=', returnsResult)
  return returnsResult;
}
exports.checkReturnsValue = checkReturnsValue;

function checkParamValue(tag, node, sourcefile, fileName) {
  const tagNameValue = tag.name;
  const tagTypeValue = tag.type;
  console.log('tagNameValue=', tagNameValue, 'tagTypeValue=', tagTypeValue)

  // 获取jsdoc中的param信息
  // const apiNote = getAPINote(node);
  // const parsed = parse.parse(`${apiNote}`);
  // if (parsed.length > 0) {
  //   parsed[0].tags.forEach(item => {
  //     if (item.tag == targetName) {
  //       tagName = item.tag;
  //       tagNameValue = item.name;
  //       tagTypeValue = item.type;
  //       const apiInfo = node.getText();
  //       if (apiInfo.indexOf(tagNameValue) == -1) {
  //         errInfo += `@${targetName} name value '${tagNameValue}' is wrong; `;
  //         console.log("errorInfo1=" + errInfo);
  //       } else if (apiInfo.indexOf(tagTypeValue) == -1) {
  //         errInfo += `@${targetName} type value '${tagTypeValue}' is wrong; `;
  //         console.log("errorInfo2=" + errInfo);
  //       }
  //     }
  //   })
  // }
}
exports.checkParamValue = checkParamValue;

function checkThrowsValue(tag, node, sourcefile, fileName) {
  let throwsResult = {
    checkResult: true,
    errorInfo: ""
  }
  const tagNameValue = tag.name;
  const tagTypeValue = tag.type;

  if (tagTypeValue != 'BusinessError') {
    throwsResult.checkResult = false;
    throwsResult.errorInfo = `@throws type value '${tagTypeValue}' is wrong; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, throwsResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  } else if (isNaN(tagNameValue)) {
    throwsResult.checkResult = false;
    throwsResult.errorInfo = `@throws name value '${tag.name}' is wrong; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, throwsResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  console.log('throwsResult=', throwsResult)
  return throwsResult;
}
exports.checkThrowsValue = checkThrowsValue;

// #校验功能待补全
function checkUseinsteadValue(tag, node, sourcefile, fileName) {
  let useinsteadResult = {
    checkResult: true,
    errorInfo: ""
  }
  const tagNameValue = tag.name;
  if (tagNameValue.indexOf('ohos') == -1 || tagNameValue.indexOf('/') == -1) {
    useinsteadResult.checkResult = false;
    useinsteadResult.errorInfo = `@useinstead value '${tagNameValue}' is wrong; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, useinsteadResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  console.log('useinsteadResult=', useinsteadResult)
  return useinsteadResult;
}
exports.checkUseinsteadValue = checkUseinsteadValue;

function checkTypeValue(tag, node, sourcefile, fileName) {
  let typeResult = {
    checkResult: true,
    errorInfo: ""
  }
  const tagTypeValue = tag.type;
  const apiInfo = node.getText();
  if (apiInfo.indexOf(tagTypeValue) == -1) {
    typeResult.checkResult = false;
    typeResult.errorInfo = `@type value '${tagTypeValue}' is wrong; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, typeResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  console.log('typeResult=', typeResult)
  return typeResult;
}
exports.checkTypeValue = checkTypeValue;

function checkDefaultValue(tag, node, sourcefile, fileName) {
  let defaultResult = {
    checkResult: true,
    errorInfo: ""
  }
  if (tag.name.length == 0 && tag.type.length == 0) {
    defaultResult.checkResult = false;
    defaultResult.errorInfo = `should add @default value; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, defaultResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  console.log('defaultResult=', defaultResult)
  return defaultResult;
}
exports.checkDefaultValue = checkDefaultValue;

function getParentApiInfo(node) {
  let parentDocArr = [];
  if (!ts.isInterfaceDeclaration(node) && node.parent) {
    const parentJSDocArr = node.parent.parent?.jsDoc ? node.parent.parent.jsDoc[0].tags : '';
    if (Array.isArray(parentJSDocArr)) {
      parentJSDocArr.forEach(item => {
        parentDocArr.push(item.tagName.escapedText);
      })
    }
  }
  return parentDocArr;
}

function checkNoValueTag(node, sourcefile, fileName) {
  let noValueResult = {
    checkResult: true,
    errorInfo: ""
  }
  const FAModelOnly = 'FAModelOnly';
  const StageModelOnly = 'StageModelOnly';
  const systemapi = 'systemapi';
  const deprecated = 'deprecated';
  const parentDoc = getParentApiInfo(node);
  if (parentDoc.indexOf(FAModelOnly) > -1) {
    noValueResult.checkResult = false;
    noValueResult.errorInfo = `the node need to extends pareent @${FAModelOnly}; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, noValueResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  } else if (parentDoc.indexOf(StageModelOnly) > -1) {
    noValueResult.checkResult = false;
    noValueResult.errorInfo = `the node need to extends pareent @${StageModelOnly}; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, noValueResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  } else if (parentDoc.indexOf(systemapi) > -1) {
    noValueResult.checkResult = false;
    noValueResult.errorInfo = `the node need to extends parent @${systemapi}; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, noValueResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  } else if (parentDoc.indexOf(deprecated) > -1) {
    noValueResult.checkResult = false;
    noValueResult.errorInfo = `the node need to extends parent @${deprecated}; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, noValueResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  return noValueResult;
}
exports.checkNoValueTag = checkNoValueTag;


function checkPermissionTag(tag, node, sourcefile, fileName) {
  const permissionRuleSet = getPermissionBank();
  let hasPermissionError = false;
  let errorInfo = "";
  let permissiobResult = {
    checkResult: true,
    errorInfo: ""
  };
  const tagValue = tag.name + tag.description;
  // console.log('tag=',tag);
  console.log('tagValue=', tagValue);
  const permissionArr = tagValue.replace(/( |or|and|\(|\))/g, '$').split('$');
  console.log('permissionArr=', permissionArr);
  permissionArr.forEach(permissionStr => {
    if (permissionStr !== '') {
      if (!permissionRuleSet.has(permissionStr)) {
        hasPermissionError = true;
        if (errorInfo !== "") {
          errorInfo += `,${permissionStr}`;
        } else {
          errorInfo += permissionStr;
        }
      }
    }
  })
  if (hasPermissionError) {
    permissiobResult.checkResult = false;
    permissiobResult.errorInfo = errorInfo;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.UNKNOW_PERMISSION, errorInfo, FileType.API,
      ErrorLevel.MIDDLE);
  }
  console.log('permissiobResult=',permissiobResult)
  return permissiobResult;
}

const JsDocValueChecker = {
  'extends': checkExtendsValue,
  'enum': checkEnumValue,
  'since': checkSinceValue,
  'returns': checkReturnsValue,
  'param': checkParamValue,
  'throws': checkThrowsValue,
  'useinstead': checkUseinsteadValue,
  'type': checkTypeValue,
  'default': checkDefaultValue,
  'FAModelOnly': checkNoValueTag,
  'StageModelOnly': checkNoValueTag,
  'systemapi': checkNoValueTag,
  'permission':checkPermissionTag

}
exports.JsDocValueChecker = JsDocValueChecker;
