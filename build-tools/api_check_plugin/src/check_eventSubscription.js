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

const { getApiInfo, ErrorType, ErrorLevel, LogType, eventSubscriptionAPICheckSince, requireTypescriptModule, getAPINote } = require('./utils');
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

// 判断API的版本是否在设定的检查范围内
function checkVersionNeedCheck(node) {
  const apiInfo = getApiInfo(node);
  if (parseInt(apiInfo.version) >= parseInt(eventSubscriptionAPICheckSince)) {
    return true;
  }
  return false;
}

function checkTheFirstParameter(node, sourcefile, fileName) {
  // 判断是否第一个参数是否为字符串类型或者字符串字面量
  if ((node.parameters[0].type.kind === ts.SyntaxKind.LiteralType && node.parameters[0].type.literal.kind === 
    ts.SyntaxKind.StringLiteral)) {
    // 判断第一个参数是否为字符串类型
    const parameterName = node.parameters[0].type.literal.text;
    if (!checkSmallHump(parameterName)) {
    const checkErrorResult = 'The event name [${parameterName}] should be named by small hump.';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.PARAMETER_ERRORS, checkErrorResult, LogType.LOG_API,
      ErrorLevel.MIDDLE);
      return;
    }
  } else if (node.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
    // 事件名为“string”也是合规的，而且一定符合小驼峰命名规则
    return;
  } else {
    const checkErrorResult = 'The event name should be string.';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.PARAMETER_ERRORS, checkErrorResult, LogType.LOG_API,
      ErrorLevel.MIDDLE);
  }
}

// 检查off函数的callback参数是否为可选类型
function checkOffFunctions(nodes, sourcefile, fileName) {
  let hasOffWithoutCallbackParameter = false;
  let hasOffCallbackParameterNotOptional = false;
  for (let node of nodes) {
    if (node.parameters.length > 1) {
      const lastParameter = node.parameters[node.parameters.length - 1];
      if (lastParameter.name.escapedText !== 'callback') {
        hasOffWithoutCallbackParameter = true;
      } else if (lastParameter.questionToken === undefined) {
        hasOffCallbackParameterNotOptional = true;
      }
    } else {
      hasOffWithoutCallbackParameter = true;
    }
  }
  // callback参数不为可选类型的off函数并且没有缺失callback参数的off函数，这种情况会编译错误
  if (hasOffCallbackParameterNotOptional && !hasOffWithoutCallbackParameter) {
    const checkErrorResult = 'The callback parameter of off function should be optional.';
    addAPICheckErrorLogs(nodes[0], sourcefile, fileName, ErrorType.PARAMETER_ERRORS, checkErrorResult, LogType.LOG_API, 
      ErrorLevel.MIDDLE);
  } else if (hasOffCallbackParameterNotOptional && hasOffWithoutCallbackParameter) {
    // 这种特殊情况不算错误，但会输出提示
    const checkErrorResult = 'Should combine these off functions and make the callback parameter of off function optional.';
    addAPICheckErrorLogs(nodes[0], sourcefile, fileName, ErrorType.PARAMETER_ERRORS, checkErrorResult, LogType.LOG_API, 
      ErrorLevel.LOW);
  }
}

function checkEventSubscription(node, sourcefile, fileName) { 
  //判断是否为接口或者命名空间
  if ((ts.isInterfaceDeclaration(node)) || ts.isModuleBlock(node) || ts.isModuleDeclaration(node) ||
   ts.isClassDeclaration(node)) {
    const onEventNames = new Set();
    const offEventNames = new Set();
    const offEventNodes = new Map();
    let childNodes = node.members;
    if (ts.isModuleDeclaration(node)) {
        childNodes = node.body.statements;
    }
    if (childNodes === undefined) {
        return;
    }
    childNodes.forEach((childNode) => {
      // 判断是否是函数或者方法
      if (ts.isFunctionDeclaration(childNode) || ts.isMethodDeclaration(childNode) || ts.isMethodSignature(childNode)) {
        // 判断版本是否需要检查
        if (!checkVersionNeedCheck(childNode)) {
          return;
        }
        let childNodeName = '';
        if (childNode.name && ts.isIdentifier(childNode.name)) {
          childNodeName = childNode.name.getText();
        }
        // 判断是哪一种事件订阅函数
        if (childNodeName === 'on') {
          checkTheFirstParameter(childNode, sourcefile, fileName, childNodeName);
          // 存储on订阅的事件列表
          if (childNode.parameters[0].type.kind === ts.SyntaxKind.LiteralType) {
            onEventNames.add(childNode.parameters[0].type.literal.text);
          } else if (childNode.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
            onEventNames.add("string");
          }
        } else if (childNodeName === 'off') {
          checkTheFirstParameter(childNode, sourcefile, fileName, childNodeName);
          let eventName = '';
          // 存储off取消订阅的事件列表
          if (childNode.parameters[0].type.kind === ts.SyntaxKind.LiteralType) {
            eventName = childNode.parameters[0].type.literal.text;
            offEventNames.add(eventName);
          } else if (childNode.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
            eventName = 'string';
            offEventNames.add("string");
          }
          // 存储不同事件的off函数列表
          if (!offEventNodes.get(eventName)) {
            offEventNodes.set(eventName, [childNode]);
          } else {
            let curNodes = offEventNodes.get(eventName);
            curNodes.push(childNode);
            offEventNodes.set(eventName, curNodes);
          }
        } else if (childNodeName === 'once' || childNodeName === 'emit') {
          checkTheFirstParameter(childNode, sourcefile, fileName, childNodeName);
        }
      }
    });
    // 判断off函数的callback参数是否为可选类型
    for (let event of offEventNames) {
      checkOffFunctions(offEventNodes.get(event), sourcefile, fileName);
    }

    // 判断同一件事件的on和off是否成对出现
    if (!areSetsEqual(onEventNames, offEventNames)) {
      const checkErrorResult = 'The on and off event subscription methods do not appear in pair.';
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.API_PAIR_ERRORS, checkErrorResult, LogType.LOG_API,
        ErrorLevel.MIDDLE);
    }
  }
}
exports.checkEventSubscription = checkEventSubscription;