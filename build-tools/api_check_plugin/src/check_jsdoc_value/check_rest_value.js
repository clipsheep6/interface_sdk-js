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
const { ErrorLevel, FileType, ErrorType } = require("../../src/utils");
const { addAPICheckErrorLogs } = require('../compile_info');
const { getPermissionBank } = require('../check_permission');


function checkExtendsValue(tag, node, sourcefile, fileName) {
  let extendsResult = {
    checkResult: true,
    errorInfo: "",
  }
  let tagValue = tag.name;
  let apiValue = '';
  // 获取api中的extends信息，校验标签合法性及值规范
  if (ts.isClassDeclaration(node) || ts.isInterfaceDeclaration(node)) {
    apiValue = node.heritageClauses ? node.heritageClauses[0].types[0].expression.escapedText : '';
    if (tagValue != apiValue) {
      extendsResult.checkResult = false,
        extendsResult.errorInfo = ` '@${tagValue}' should change to '${apiValue}'; `;
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, extendsResult.errorInfo, FileType.JSDOC,
        ErrorLevel.LOW);
    }
  }
  return extendsResult;
}
exports.checkExtendsValue = checkExtendsValue;

function checkEnumValue(tag, node, sourcefile, fileName) {
  let enumResult = {
    checkResult: true,
    errorInfo: "",
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
  return enumResult;
}
exports.checkEnumValue = checkEnumValue;

function checkSinceValue(tag, node, sourcefile, fileName) {
  let sinceResult = {
    checkResult: true,
    errorInfo: "",
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
    errorInfo: "",
  }
  const voidArr = ['void', 'Promise<void>'];
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
  return returnsResult;
}
exports.checkReturnsValue = checkReturnsValue;

// 待补充
function checkParamValue(tag, node, sourcefile, fileName) {
  const tagNameValue = tag.name;
  const tagTypeValue = tag.type;
}
exports.checkParamValue = checkParamValue;

function checkThrowsValue(tag, node, sourcefile, fileName) {
  let throwsResult = {
    checkResult: true,
    errorInfo: "",
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
  return throwsResult;
}
exports.checkThrowsValue = checkThrowsValue;

// #校验功能待补全
function checkUseinsteadValue(tag, node, sourcefile, fileName) {
  let useinsteadResult = {
    checkResult: true,
    errorInfo: "",
  }
  const tagNameValue = tag.name;
  if (tagNameValue.indexOf('ohos') == -1 || tagNameValue.indexOf('/') == -1) {
    useinsteadResult.checkResult = false;
    useinsteadResult.errorInfo = `@useinstead value '${tagNameValue}' is wrong; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, useinsteadResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  return useinsteadResult;
}
exports.checkUseinsteadValue = checkUseinsteadValue;

function checkTypeValue(tag, node, sourcefile, fileName) {
  let typeResult = {
    checkResult: true,
    errorInfo: "",
  }
  const tagTypeValue = tag.type;
  const apiInfo = node.getText();
  if (apiInfo.indexOf(tagTypeValue) == -1) {
    typeResult.checkResult = false;
    typeResult.errorInfo = `@type value '${tagTypeValue}' is wrong; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, typeResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  return typeResult;
}
exports.checkTypeValue = checkTypeValue;

function checkDefaultValue(tag, node, sourcefile, fileName) {
  let defaultResult = {
    checkResult: true,
    errorInfo: "",
  }
  if (tag.name.length == 0 && tag.type.length == 0) {
    defaultResult.checkResult = false;
    defaultResult.errorInfo = `should add @default value; `;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, defaultResult.errorInfo, FileType.JSDOC,
      ErrorLevel.LOW);
  }
  return defaultResult;
}
exports.checkDefaultValue = checkDefaultValue;

function checkPermissionTag(tag, node, sourcefile, fileName) {
  const permissionRuleSet = getPermissionBank();
  let hasPermissionError = false;
  let errorInfo = "";
  let permissiobResult = {
    checkResult: true,
    errorInfo: "",
  };
  const tagValue = tag.name + tag.description;
  const permissionArr = tagValue.replace(/( |or|and|\(|\))/g, '$').split('$');
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
  return permissiobResult;
}
exports.checkPermissionTag = checkPermissionTag;

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
  'permission': checkPermissionTag

}
exports.JsDocValueChecker = JsDocValueChecker;
