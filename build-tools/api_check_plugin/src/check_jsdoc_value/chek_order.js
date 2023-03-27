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
const { requireTypescriptModule, tagsArrayOfOrder, commentNodeWhiteList, parseJsDoc, ErrorType, ErrorLevel, FileType,
  inheritArr } = require('../utils');
const { addAPICheckErrorLogs } = require('../compile_info');
const rules = require('../../code_style_rule.json');
const ts = requireTypescriptModule();


/**
 * 判断标签是否为官方标签
 */
function isOfficialTag(tagName) {
  return tagsArrayOfOrder.indexOf(tagName) === -1;
}

/**
 * 判断标签排列是否为升序
 */
function isAscendingOrder(tags) {
  let checkResult = true;
  tags.forEach((tag, index) => {
    if (index + 1 < tags.length) {
      // 获取前后两个tag下标
      const firstIndex = tagsArrayOfOrder.indexOf(tag.tag);
      const secondIndex = tagsArrayOfOrder.indexOf(tags[index + 1].tag);
      // 判断标签是否为官方标签
      const firstTag = isOfficialTag(tag.tag);
      // 非自定义标签在前或数组降序时报错
      if ((firstTag && secondIndex > 1) || firstIndex > secondIndex) {
        checkResult = false;
        return;
      }
    }
  });
  return checkResult;
}

// check jsdoc order
function checkApiOrder(comments) {
  let checkOrderRusult = [];
  comments.forEach(docInfo => {
    if (isAscendingOrder(docInfo.tags)) {
      checkOrderRusult.push({
        checkResult: true,
        errorInfo: "",
      });
    } else {
      let errorInfo = 'jsDoc标签顺序错误,请进行调整';
      checkOrderRusult.push({
        checkResult: false,
        errorInfo: errorInfo,
      });
    }
  });
  return checkOrderRusult;
}
exports.checkApiOrder = checkApiOrder;

function checkAPITagName(tag, node, sourcefile, fileName) {
  let APITagNameResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagName = tag.tag;
  const docTags = [...rules.decorators['customDoc'], ...rules.decorators['jsDoc']];
  const decoratorRuleSet = new Set(docTags);
  if (!decoratorRuleSet.has(tagName) && commentNodeWhiteList.includes(node.kind)) {
    APITagNameResult.checkResult = false;
    APITagNameResult.errorInfo = `@${tagName}标签不存在, 请使用合法的JSDoc标签.`;
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.UNKNOW_DECORATOR, APITagNameResult.errorInfo,
      FileType.JSDOC, ErrorLevel.LOW);
  }
  return APITagNameResult;
}
exports.checkAPITagName = checkAPITagName;

function getParentApiInfo(node, inheritTag, inheritResult) {
  let parentTagArr = [];
  if (ts.isSourceFile(node)) {
    return inheritResult;
  }
  if (!ts.isModuleBlock(node.parent)) {
    const comments = parseJsDoc(node.parent);
    if (comments.length > 0 && Array.isArray(comments[comments.length - 1].tags)) {
      comments[comments.length - 1].tags.forEach(tag => {
        parentTagArr.push(tag.tag);
      })
      if (parentTagArr.includes(inheritTag)) {
        inheritResult.checkResult = false;
        inheritResult.errorInfo +=
          `jsdoc标签合法性校验失败,检测到当前文件中存在可继承标签@${inheritTag}，但存在子节点没有此标签.`;
      } else {
        getParentApiInfo(node.parent, inheritTag, inheritResult);
      }
    }
  } else if (ts.isModuleBlock(node.parent)) {
    getParentApiInfo(node.parent, inheritTag, inheritResult);
  }

  return inheritResult;
}

function checkInheritTag(comment, node, sourcefile, fileName) {
  let inheritResult = {
    checkResult: true,
    errorInfo: '',
  };
  let tagArr = [];
  if (commentNodeWhiteList.includes(node.kind)) {
    comment.tags.forEach(tag => {
      tagArr.push(tag.tag)
    })
    inheritArr.forEach((inheritTag, index) => {
      if (!tagArr.includes(inheritTag)) {
        getParentApiInfo(node, inheritArr[index], inheritResult, sourcefile, fileName);
      }
    })
    if (!inheritResult.checkResult) {
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_SCENE, inheritResult.errorInfo, FileType.API,
        ErrorLevel.LOW);
    }
  }
  return inheritResult;
}
exports.checkInheritTag = checkInheritTag;
