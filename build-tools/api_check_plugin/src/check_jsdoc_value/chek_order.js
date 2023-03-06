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
const parse = require('comment-parser');
const { getAPINote, ErrorLevel, FileType, ErrorType } = require('../utils');
const { addAPICheckErrorLogs } = require('../compile_info');

const labelOrderArray = ['description', 'namespace', 'extends', 'typedef', 'interface', 'permission', 'enum',
  'constant', 'type', 'param', 'default', 'returns', 'readonly', 'throws', 'static', 'fires', 'syscap', 'systemapi',
  'famodelonly', 'stagemodelonly', 'crossplatform', 'since', 'deprecated', 'useinstead', 'test', 'form', 'example'];

// check jsdoc order
function checkApiOrder(node, sourcefile, fileName) {
  let apiOrderArr = [];
  let checkOrderRusult = [];
  let errorInfo = '';
  const apiNote = getAPINote(node);
  const JsdocInfos = parse.parse(`${apiNote}`);
  // 遍历dts文件，获取各个jsdoc标签的优先级数组，最后生成一个二维数组
  JsdocInfos.forEach(jsdocInfo => {
    let apiNameOrder = [];
    jsdocInfo.tags.forEach(tags => {
      apiNameOrder.push(tags.tag);
    });
    apiOrderArr.push(apiNameOrder);
  });
  // 遍历apiOrderArr数组，讲每一个标签的绝对优先级获取到，放在apiPriority数组中
  apiOrderArr.forEach(apiOrder => {
    let apiPriority = [];
    let isPassed = true;
    apiOrder.forEach(item => {
      const docIndex = labelOrderArray.indexOf(item);
      apiPriority.push(docIndex);
    });
    // 遍历apiPriority数组，如果不是升序排列。则证明标签顺序不对
    for (let j = 0; j < apiPriority.length - 1; j++) {
      const result = {
        checkResult: true,
        errorInfo: '',
      };
      if (apiPriority[j] === -1 && apiPriority[j + 1] !== -1) {
        errorInfo = apiOrder[j];
        result.errorInfo = `the jsDoc order @${errorInfo} is wrong; `;
        result.checkResult = false;
        addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, result.errorInfo, FileType.JSDOC,
          ErrorLevel.LOW);
        checkOrderRusult.push(result);
        isPassed = false;
        break;
      } else if (apiPriority[j] > -1 && (apiPriority[j] > apiPriority[j + 1])) {
        if (apiOrder[j] === 'example' && apiPriority[j + 1] !== -1) {
          errorInfo = apiOrder[j - 1];
          result.errorInfo = `the jsDoc order @${errorInfo} is wrong; `;
          result.checkResult = false;
          addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, result.errorInfo, FileType.JSDOC,
            ErrorLevel.LOW);
          checkOrderRusult.push(result);
          isPassed = false;
          break;
        } else if (apiOrder[j] !== 'example') {
          errorInfo = apiOrder[j];
          result.errorInfo = `the jsDoc order @${errorInfo} is wrong; `;
          result.checkResult = false;
          addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, result.errorInfo, FileType.JSDOC,
            ErrorLevel.LOW);
          checkOrderRusult.push(result);
          isPassed = false;
          break;
        }
      }
    }
    if (isPassed) {
      checkOrderRusult.push({
        checkResult: true,
        errorInfo: '',
      });
    }
  });
  return checkOrderRusult;
}
exports.checkApiOrder = checkApiOrder;
