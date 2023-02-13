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
const { ErrorLevel, FileType, ErrorType } = require('../utils');
const { addAPICheckErrorLogs } = require('../compile_info');

const labelOrderArray = ['description', 'namespace', 'extends', 'typedef', 'interface', 'permission', 'enum', 'constants',
  'type', 'param', 'default', 'returns', 'readonly', 'throws', 'static', 'fires', 'syscap', 'systemapi', 'famodeonly',
  'stagemodeonly', ' crossplatform', 'since', 'deprecated', 'useinsteadexample'];

// output order error info
function checkOrderRusult(node, sourcefile, fileName) {
  if (!checkApiOrder(node).checkResult) {
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, checkApiOrder(node).errorInfo, 
      FileType.JSDOC, ErrorLevel.LOW);
  }
}
exports.checkOrderRusult = checkOrderRusult;

// check jsdoc order
function checkApiOrder(node) {
  let apiNameOrder = [];
  let apiOrderArr = [];
  let result = {
    checkResult: true,
    errorInfo: ""
  }
  // 遍历dts文件，获取各个jsdoc标签的优先级数组，最后生成一个二维数组
  if (Array.isArray(node.jsDoc) == true) {
    for (let i = 0; i < node.jsDoc[0].tags.length; i++) {
      apiNameOrder.push(node.jsDoc[0].tags[i].tagName.escapedText);
    }
  };
  if (apiNameOrder.length > 0) {
    apiOrderArr.push(apiNameOrder);
  };
  // 遍历apiOrderArr数组，讲每一个标签的绝对优先级获取到，放在apiPriority数组中
  apiOrderArr.forEach(apiOrder => {
    let apiPriority = [];
    apiOrder.forEach(item => {
      const docIndex = labelOrderArray.indexOf(item);
      apiPriority.push(docIndex);
    });
    // 遍历apiPriority数组，如果不是升序排列。则证明标签顺序不对
    for (let j = 1; j < apiPriority.length; j++) {
      if (apiPriority[j - 1] > apiPriority[j]) {
        result.errorInfo = 'the jsDoc order is wrong; ';
        result.checkResult = false;
      }
    }
  })
  return result;
}
exports.checkApiOrder = checkApiOrder;
