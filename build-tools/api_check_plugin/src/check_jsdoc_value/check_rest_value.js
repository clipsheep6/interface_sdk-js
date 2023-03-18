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
const fs = require('fs');
const rules = require('../../code_style_rule.json');
const { ErrorLevel, FileType, ErrorType, commentNodeWhiteList, requireTypescriptModule, systemPermissionFile,
  checkOption } = require('../../src/utils');
const { addAPICheckErrorLogs } = require('../compile_info');
const ts = requireTypescriptModule();


function checkExtendsValue(tag, node, sourcefile, fileName, index) {
  let extendsResult = {
    checkResult: true,
    errorInfo: '',
  };
  let tagValue = tag.name;
  let apiValue = '';
  // 获取api中的extends信息，校验标签合法性及值规范
  if (ts.isClassDeclaration(node) || ts.isInterfaceDeclaration(node)) {
    const apiValue = node.heritageClauses ? node.heritageClauses[0].types[0].expression.escapedText : '';
    if (tagValue !== apiValue) {
      extendsResult.checkResult = false,
        extendsResult.errorInfo = 'extends标签值错误, 请检查标签值是否与继承类名保持一致.';
    }
  }
  return extendsResult;
}
exports.checkExtendsValue = checkExtendsValue;

function checkEnumValue(tag, node, sourcefile, fileName, index) {
  let enumResult = {
    checkResult: true,
    errorInfo: '',
  };
  const enumValues = ['string', 'number'];
  const tagValue = tag.type;
  const tagProblems = tag.problems.length;

  // 获取api中的enum信息，校验标签合法性及值规范
  if (tagProblems > 0 || enumValues.indexOf(tagValue) === -1) {
    enumResult.checkResult = false;
    enumResult.errorInfo = 'enum标签类型错误, 请检查标签类型是否为string或number.';
  }
  return enumResult;
}
exports.checkEnumValue = checkEnumValue;

function checkSinceValue(tag, node, sourcefile, fileName, index) {
  let sinceResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name;
  const checkNumber = /^\d+$/.test(tagValue);
  if (!checkNumber && commentNodeWhiteList.includes(node.kind)) {
    sinceResult.checkResult = false;
    sinceResult.errorInfo = 'since标签值错误, 请检查标签值是否为数值.';
  }
  return sinceResult;
}
exports.checkSinceValue = checkSinceValue;

function checkReturnsValue(tag, node, sourcefile, fileName, index) {
  let returnsResult = {
    checkResult: true,
    errorInfo: '',
  };
  const voidArr = ['void'];
  const tagValue = tag.type;
  if (commentNodeWhiteList.includes(node.kind)) {
    const apiReturnsValue = node.type?.getText();
    if (voidArr.indexOf(apiReturnsValue) !== -1 || apiReturnsValue === undefined) {
      returnsResult.checkResult = false;
      returnsResult.errorInfo = 'returns标签使用错误, 返回类型为void时不应该使用returns标签.';
    } else if (tagValue !== apiReturnsValue) {
      returnsResult.checkResult = false;
      returnsResult.errorInfo = 'returns标签类型错误, 请检查标签类型是否与返回类型一致.';
    }
  }
  return returnsResult;
}
exports.checkReturnsValue = checkReturnsValue;

function checkParamValue(tag, node, sourcefile, fileName, index) {
  const tagNameValue = tag.name;
  const tagTypeValue = tag.type;
  let paramResult = {
    checkResult: true,
    errorInfo: '',
  };
  if (node.parameters) {
    const apiParamInfos = node.parameters;
    if (apiParamInfos[index]) {
      const apiName = apiParamInfos[index].name.escapedText;
      const apiType = apiParamInfos[index].type?.getText();
      let errorInfo = '';
      if (apiType !== tagTypeValue) {
        paramResult.checkResult = false;
        errorInfo += `第[${index + 1}]个param标签类型错误, 请检查是否与第[${index + 1}]个参数类型保持一致.`;
      }
      if (apiName !== tagNameValue) {
        paramResult.checkResult = false;
        if (errorInfo !== '') {
          errorInfo += '\n';
        }
        errorInfo += `第[${index + 1}]个param标签值错误, 请检查是否与第[${index + 1}]个参数名保持一致.`;
      }
      if (!paramResult.checkResult) {
        paramResult.errorInfo = errorInfo;
      }
    }
  }
  return paramResult;
}
exports.checkParamValue = checkParamValue;

function checkThrowsValue(tag, node, sourcefile, fileName, index) {
  let throwsResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagNameValue = tag.name;
  const tagTypeValue = tag.type;
  let errorInfo = '';
  if (tagTypeValue !== 'BusinessError') {
    throwsResult.checkResult = false;
    errorInfo += `第[${index + 1}]个throws标签类型错误, 请填写BusinessError.`;
  }
  if (isNaN(tagNameValue)) {
    if (errorInfo !== '') {
      errorInfo += '\n';
    }
    throwsResult.checkResult = false;
    errorInfo += `第[${index + 1}]个throws标签类型错误, 请检查标签值是否为数值.`;
  }
  if (!throwsResult.checkResult) {
    throwsResult.errorInfo = errorInfo;
  }
  return throwsResult;
}
exports.checkThrowsValue = checkThrowsValue;

/**
 * 判断是否为arkui的api文件
 */
function isArkUIApiFile(fileName) {
  if (fileName.indexOf("component\\ets\\") >= 0 || fileName.indexOf("component/ets/") >= 0) {
    return true;
  }
  return false;
}

/**
 * 
 * 1.引用不同文件的api接口
 * xxx.xxx#xxx
 * 
 * 2.引用不同文件的模块接口
 * xxx.xxx
 * 
 * 3.引用不同文件的api事件接口
 * xxx.xxx#event:xxx
 */
function checkModule(moduleValue) {
  return /^[A-Za-z]+\b(\.[A-Za-z]+\b)*$/.test(moduleValue) ||
    /^[A-Za-z]+\b(\.[A-Za-z]+\b)*\#[A-Za-z]+\b$/.test(moduleValue) ||
    /^[A-Za-z]+\b(\.[A-Za-z]+\b)*\#event:[A-Za-z]+\b$/.test(moduleValue);
}

function splitUseinsteadValue(useinsteadValue) {
  if (!useinsteadValue || useinsteadValue === '') {
    return undefined;
  }
  const splitResult = {
    checkResult: true,
    errorInfo: ''
  }
  // 拆分字符串
  const splitArray = useinsteadValue.split(/\//g);
  if (splitArray.length === 1) {
    // 同一文件
    if (!checkModule(splitArray[0])) {
      splitResult.checkResult = false;
    }
  } else if (splitArray.length === 2) {
    // 不同文件
    const fileNameArray = splitArray[0].split('.');
    if (fileNameArray.length === 1) {
      // arkui
      if (!/^[A-Za-z]+\b$/.test(fileNameArray[0]) || !checkModule(splitArray[1])) {
        splitResult.checkResult = false;
      }
    } else {
      // 非arkui
      let checkFileName = true;
      for (let i = 0; i < fileNameArray.length; i++) {
        if (fileNameArray[0] !== 'ohos' || !/^[A-Za-z]+\b$/.test(fileNameArray[i])) {
          checkFileName = false;
        }
      }
      if (!checkFileName || !checkModule(splitArray[1])) {
        splitResult.checkResult = false;
      }
    }
  } else {
    // 格式错误
    splitResult.checkResult = false;
  }
  if (!splitResult.checkResult) {
    splitResult.errorInfo = 'useinstead标签值错误, 请检查使用方法.';
  }
  return splitResult;
}

// 精确校验功能待补全
function checkUseinsteadValue(tag, node, sourcefile, fileName, index) {
  const tagNameValue = tag.name;
  let useinsteadResult = {
    checkResult: true,
    errorInfo: '',
  };
  const result = splitUseinsteadValue(tagNameValue, fileName);
  if (result && !result.checkResult) {
    useinsteadResult = result;
  }
  return useinsteadResult;
}
exports.checkUseinsteadValue = checkUseinsteadValue;

function checkTypeValue(tag, node, sourcefile, fileName, index) {
  let typeResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagTypeValue = tag.type;
  if (commentNodeWhiteList.includes(node.kind)) {
    const apiTypeValue = node.type?.getText();
    if (apiTypeValue !== tagTypeValue) {
      typeResult.checkResult = false;
      typeResult.errorInfo = 'type标签类型错误, 请检查类型是否与属性类型一致.';
    }
  }
  return typeResult;
}
exports.checkTypeValue = checkTypeValue;

function checkDefaultValue(tag, node, sourcefile, fileName, index) {
  let defaultResult = {
    checkResult: true,
    errorInfo: '',
  };
  if (commentNodeWhiteList.includes(node.kind) && tag.name.length === 0 && tag.type.length === 0) {
    defaultResult.checkResult = false;
    defaultResult.errorInfo = 'default标签值错误, 请补充默认值.';
  }
  return defaultResult;
}
exports.checkDefaultValue = checkDefaultValue;

const permissionCheckWhitelist = new Set(['@ohos.wifi.d.ts', '@ohos.wifiManager.d.ts']);

/**
 * 门禁环境优先使用systemPermissionFile
 * 本地环境从指定分支上下载
 * 下载失败则使用默认配置
 *
 * @returns Set<string>
 */
function getPermissionBank() {
  const permissionTags = ['ohos.permission.HEALTH_DATA', 'ohos.permission.HEART_RATE', 'ohos.permission.ACCELERATION'];
  let permissionFileContent;
  if (fs.existsSync(systemPermissionFile)) {
    permissionFileContent = require(systemPermissionFile);
  } else if (checkOption.permissionContent) {
    permissionFileContent = JSON.parse(checkOption.permissionContent);
  } else {
    permissionFileContent = require('../config/config.json');
  }
  const permissionTagsObj = permissionFileContent.module.definePermissions;
  permissionTagsObj.forEach((item) => {
    permissionTags.push(item.name);
  });
  const permissionRuleSets = new Set(permissionTags);
  return permissionRuleSets;
}

function checkPermissionTag(tag, node, sourcefile, fileName, index) {
  const permissionRuleSet = getPermissionBank();
  let hasPermissionError = false;
  let errorInfo = '';
  let permissionResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name + tag.description;
  const permissionArr = tagValue.replace(/ /g, '').replace(/(or|and|\(|\))/g, '$').split('$');
  permissionArr.forEach(permissionStr => {
    if ((permissionStr !== '' && !permissionRuleSet.has(permissionStr) && permissionStr !== 'N/A') || permissionStr === '') {
      hasPermissionError = true;
      errorInfo = 'permission标签值书写错误, 请检查权限字段是否已配置或者更新配置文件.';
    }
  });
  if (hasPermissionError) {
    permissionResult.checkResult = false;
    permissionResult.errorInfo = errorInfo;
  }
  return permissionResult;
}
exports.checkPermissionTag = checkPermissionTag;

function checkDeprecatedTag(tag, node, sourcefile, fileName, index) {
  let deprecatedResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue1 = tag.name;
  const tagValue2 = tag.description;
  const checkNumber = /^\d+$/.test(tagValue2);
  if ((tagValue1 !== 'since' || !checkNumber) && commentNodeWhiteList.includes(node.kind)) {
    deprecatedResult.checkResult = false;
    deprecatedResult.errorInfo = 'deprecated标签值错误, 请检查使用方法.';
  }
  return deprecatedResult;
}
exports.checkDeprecatedTag = checkDeprecatedTag;

function checkSyscapTag(tag, node, sourcefile, fileName, index) {
  let syscapResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name;
  const syscapTags = rules.syscap.SystemCapability;
  const syscapRuleSet = new Set();
  for (const i in syscapTags) {
    syscapTags[i].forEach(syscap => {
      const syscapTag = 'SystemCapability.' + i + '.' + syscap;
      syscapRuleSet.add(syscapTag);
    });
  }
  if (!syscapRuleSet.has(tagValue)) {
    syscapResult.checkResult = false;
    syscapResult.errorInfo = 'syscap标签值错误, 请检查syscap字段是否已配置.';
  }
  return syscapResult;
}
exports.checkSyscapTag = checkSyscapTag;

function checkNamespaceTag(tag, node, sourcefile, fileName, index) {
  let namespaceResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name;
  if (commentNodeWhiteList.includes(node.kind)) {
    let apiValue = node.name?.escapedText;
    if (apiValue !== undefined && tagValue !== apiValue) {
      namespaceResult.checkResult = false;
      namespaceResult.errorInfo = 'namespace标签值错误, 请检查是否与namespace名称保持一致.';
    }
  }
  return namespaceResult;
}
exports.checkNamespaceTag = checkNamespaceTag;

function checkInterfaceTypedefTag(tag, node, sourcefile, fileName, index) {
  let interfaceResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name;
  if (commentNodeWhiteList.includes(node.kind)) {
    let apiValue = node.name?.escapedText;
    if (apiValue !== undefined && tagValue !== apiValue) {
      interfaceResult.checkResult = false;
      if (tag.tag === 'interface') {
        interfaceResult.errorInfo = 'interface标签值错误, 请检查是否与interface名称保持一致.';
      } else if (tag.tag === 'typedef') {
        interfaceResult.errorInfo = 'typedef标签值错误, 请检查是否与interface名称保持一致.';
      }
    }
  }
  return interfaceResult;
}
exports.checkInterfaceTypedefTag = checkInterfaceTypedefTag;

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
  'permission': checkPermissionTag,
  'deprecated': checkDeprecatedTag,
  'syscap': checkSyscapTag,
  'namespace': checkNamespaceTag,
  'interface': checkInterfaceTypedefTag,
  'typedef': checkInterfaceTypedefTag,
};
exports.JsDocValueChecker = JsDocValueChecker;
