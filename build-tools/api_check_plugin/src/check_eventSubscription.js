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

const { getApiInfo, ErrorType, ErrorLevel, LogType, FileType, requireTypescriptModule } = require('./utils');
const { addAPICheckErrorLogs } = require('./compile_info');
const { checkSmallHump } = require('./check_hump');
const configJson = require('../package.json');
const ts = requireTypescriptModule();

// 判断两个set是否完全相同
function areSetsEqual(set1, set2) {
  if (set1.size !== set2.size) {
    return false;
  }
  for (const value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }
  return true;
}  

// 判断off函数的callback参数是否为可选类型
function isOffCallbackParameterOptional(node, functionName) {
  if (functionName === 'off' && node.parameters.length > 1) {
    const lastParameter = node.parameters[node.parameters.length - 1];
    if (lastParameter.type.kind !== ts.SyntaxKind.JSDocNullableType) {
      return false;
    }
  }
  return true;
}

// 判断API的版本是否在设定的检查范围内
function checkVersionNeedCheck(node) {
  const apiInfo = getApiInfo(node);
  if (parseInt(apiInfo.version) >= parseInt(configJson.eventSubscriptionAPICheckSince)) {
    return true;
  }
  return false;
}

function checkWhenParameterIsStringLiteral(node, sourcefile, fileName, functionName) {
  // 判断参数命名是否符合小驼峰规则
  const parameterName = node.parameters[0].type.literal.text;
  if (!checkSmallHump(parameterName)) {
    const checkErrorResult = 'The event name [${parameterName}] should be named by small hump.';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.NAMING_ERRORS, checkErrorResult, LogType.LOG_API,
      ErrorLevel.MIDDLE);
    return;
  }
  // 判断off函数的callback参数是否为可选类型np
  if (!isOffCallbackParameterOptional(node, sourcefile, fileName, functionName)) {
    const checkErrorResult = 'The callback parameter of off function should be optional.';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.NAMING_ERRORS, checkErrorResult, LogType.LOG_API,
      ErrorLevel.MIDDLE);
    return;
  }
}

function checkWhenParameterIsStringKeyword(node, sourcefile, fileName, functionName) {
  // 判断off函数的callback参数是否为可选类型np
  if (!isOffCallbackParameterOptional(node, functionName)) {
    const checkErrorResult = 'The callback parameter of off function should be optional.';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.NAMING_ERRORS, checkErrorResult, LogType.LOG_API,
      ErrorLevel.MIDDLE);
    return;
  }
}

// 对已经确认是事件订阅的API进行规范检查
function checkEventSubscriptionForEachMethod(node, sourcefile, fileName, functionName) {
  // 判断版本是否需要检查
  if (!checkVersionNeedCheck(node)) {
    return;
  }
  // 判断是否第一个参数是否为字符串类型或者字符串字面量
  if ((node.parameters[0].type.kind === ts.SyntaxKind.LiteralType && node.parameters[0].type.literal.kind === 
    ts.SyntaxKind.StringLiteral)) {
    checkWhenParameterIsStringLiteral(node, sourcefile, fileName, functionName);
  } else if (node.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
    checkWhenParameterIsStringKeyword(node, sourcefile, fileName, functionName);
  } else {
    const checkErrorResult = 'The event name should be string.';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.NAMING_ERRORS, checkErrorResult, LogType.LOG_API,
      ErrorLevel.MIDDLE);
  }
}

function checkEventSubscription(node, sourcefile, fileName) { 
  //判断是否为接口或者命名空间
  if ((ts.isInterfaceDeclaration(node)) || ts.isModuleBlock(node) || ts.isClassDeclaration(node)) {
    const onEventNames = new Set();
    const offEventNames = new Set();
    const childNodes = node.members;
    childNodes.forEach((childNode) => {
      // 判断是否是函数或者方法
      if (ts.isFunctionDeclaration(childNode) || ts.isMethodDeclaration(childNode) || ts.isMethodSignature(childNode)) {
        let childNodeName = '';
        if (childNode.name && ts.isIdentifier(childNode.name)) {
          childNodeName = childNode.name.getText();
        }
        // 判断是哪一种事件订阅函数
        if (childNodeName === 'on') {
          checkEventSubscriptionForEachMethod(childNode, sourcefile, fileName, childNodeName);
          if (childNode.parameters[0].type.kind === ts.SyntaxKind.LiteralType) {
            onEventNames.add(childNode.parameters[0].type.literal.text);
          } else if (childNode.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
            onEventNames.add("string");
          }
        } else if (childNodeName === 'off') {
          checkEventSubscriptionForEachMethod(childNode, sourcefile, fileName, childNodeName);
          if (childNode.parameters[0].type.kind === ts.SyntaxKind.LiteralType) {
            offEventNames.add(childNode.parameters[0].type.literal.text);
          } else if (childNode.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
            offEventNames.add("string");
          }
        } else if (childNodeName === 'once' || childNodeName === 'emit') {
          checkEventSubscriptionForEachMethod(childNode, sourcefile, fileName, childNodeName);
        }
      }
    });
    // 判断同一件事件的on和off是否成对出现
    if (!areSetsEqual(onEventNames, offEventNames)) {
      const checkErrorResult = 'The on and off event subscription methods do not appear in pair.';
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.NAMING_ERRORS, checkErrorResult, LogType.LOG_API,
        ErrorLevel.MIDDLE);
    }
  }
}
exports.checkEventSubscription = checkEventSubscription;