/*
* Copyright (c) 2021-2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

const path = require('path');
const { addAPICheckErrorLogs } = require("./compile_info");
const { hasAPINote, parseJsDoc, commentNodeWhiteList } = require("./utils");
// const ts = require(path.resolve(__dirname, "../node_modules/typescript"));
const ts = require('typescript');
const { JsDocValueChecker } = require('./check_jsdoc_value/check_rest_value');
const { checkApiOrder } = require('./check_jsdoc_value/chek_order');

// 标签合法性校验
function checkJsDocLegality(node, sourcefile, checkInfoMap) {
  // 必填校验
  legalityCheck(node, sourcefile, commentNodeWhiteList, ['since', 'syscap'], true, checkInfoMap,
    (currentNode) => {
      return true;
    }
  );
  // const定义语句必填
  legalityCheck(node, sourcefile, [ts.SyntaxKind.VariableStatement], ['constant'], true, checkInfoMap,
    (currentNode) => {
      if (currentNode.kind !== ts.SyntaxKind.VariableStatement) {
        return true;
      }
      return /^const /.test(currentNode.getText());
    });
  // 'enum'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.EnumDeclaration], ['enum'], true, checkInfoMap,
    (currentNode) => {
      return true;
    }
  );
  // 'extends'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.ClassDeclaration], ['extends'], true, checkInfoMap,
    (currentNode) => {
      if (!currentNode.heritageClauses) {
        return true;
      }
      const clauses = currentNode.heritageClauses;
      let checkResult = false;
      clauses.forEach(claus => {
        if (/^extends /.test(claus.getText())) {
          checkResult = true;
        }
      });
      return checkResult;
    }
  );
  // 'namespace'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.ModuleDeclaration], ['namespace'], true, checkInfoMap,
    (currentNode) => {
      return true;
    }
  );
  // 'param'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
    ts.SyntaxKind.MethodDeclaration], ['param'], true, checkInfoMap, (currentNode) => {
      if (!new Set([ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
      ts.SyntaxKind.MethodDeclaration]).has(currentNode.kind)) {
        return true;
      }
      return currentNode.parameters && currentNode.parameters.length > 0;
    }
  );
  // 'returns'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
    ts.SyntaxKind.MethodDeclaration], ['returns'], true, checkInfoMap, (currentNode) => {
      if (!new Set([ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
      ts.SyntaxKind.MethodDeclaration]).has(currentNode.kind)) {
        return true;
      }
      return currentNode.type && currentNode.type !== ts.SyntaxKind.VoidKeyword;
    }
  );
  // 'useinstead'
  legalityCheck(node, sourcefile, commentNodeWhiteList, ['useinstead'], true, checkInfoMap,
    (currentNode) => {
      return new Set(commentNodeWhiteList).has(currentNode.kind);
    }
  );
  // typedef/interface
  legalityCheck(node, sourcefile, [ts.SyntaxKind.InterfaceDeclaration], ['interface'], true, checkInfoMap,
    (currentNode) => {
      return true;
    }
  );
  // 'type', 'readonly'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.PropertySignature],
    ['type', 'readonly'], false, checkInfoMap, (currentNode) => {
      return true;
    }
  );
  // 'default'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.PropertySignature,
    ts.SyntaxKind.VariableStatement], ['default'], false, checkInfoMap, (currentNode) => {
      return true;
    }
  );
  return checkInfoMap;
}
exports.checkJsDocLegality = checkJsDocLegality;

function getIllegalKinds(legalKinds) {
  let illegalKinds = [];
  const legalKindSet = new Set(legalKinds);
  commentNodeWhiteList.forEach(kind => {
    if (!legalKindSet.has(kind)) {
      illegalKinds.push(kind);
    }
  });
  return illegalKinds;
}

function legalityCheck(node, sourcefile, legalKinds, tagsName, isRequire, checkInfoMap, extraCheckCallback) {
  const illegalKinds = getIllegalKinds(legalKinds);
  const illegalKindSet = new Set(illegalKinds);
  const legalKindSet = new Set(legalKinds);
  comments = parseJsDoc(node);
  tagsName.forEach(tagName => {
    comments.forEach((comment, index) => {
      if (!checkInfoMap[index]) {
        checkInfoMap[index] = {
          missingTags: [],
          illegalTags: []
        }
      }
      let checkResult = false;
      let useinsteadResultObj = {
        hasUseinstead: false,
        hasDeprecated: false
      }
      comment.tags.forEach(tag => {
        if (tagName === 'useinstead') {
          if (tag.tag === tagName) {
            useinsteadResultObj.hasUseinstead = true;
          } else if (tag.tag === 'deprecated') {
            useinsteadResultObj.hasDeprecated = true;
          }
        } if (tagName === 'interface' && (tag.tag === tagName || tag.tag === 'typedef')) {
          checkResult = true;
        } else if (tag.tag === tagName) {
          checkResult = true;
        }
      });
      // useinstead特殊处理
      if (isRequire && ((tagName !== 'useinstead' && !checkResult && legalKindSet.has(node.kind) && extraCheckCallback(node)) ||
        (tagName === 'useinstead' && useinsteadResultObj.hasDeprecated && !useinsteadResultObj.hasUseinstead) &&
        extraCheckCallback(node))) {
        // 报错
        console.log(`${sourcefile.fileName}, ${node.getText()} has no @${tagName}`);
        checkInfoMap[index].missingTags.push(tagName)
      } else if ((tagName !== 'useinstead' && checkResult && illegalKindSet.has(node.kind) && extraCheckCallback(node)) ||
        (tagName === 'useinstead' && !useinsteadResultObj.hasDeprecated && useinsteadResultObj.hasUseinstead &&
          extraCheckCallback(node))) {
        // 报错
        console.log(`${sourcefile.fileName}, ${node.getText()} should not has @${tagName}`);
        checkInfoMap[index].illegalTags.push(tagName)
      }
    });
  });
  return checkInfoMap;
}

function checkJsDocOfCurrentNode(node, sourcefile) {
  const checkInfoMap = checkJsDocLegality(node, sourcefile, {});
  const checkInfoArray = [];
  const checkOrderResult = checkApiOrder(node, sourcefile, sourcefile.fileName);
  checkOrderResult.forEach((result, index) => {
    checkInfoMap[index.toString()].orderResult = result;
  });
  const comments = parseJsDoc(node);
  let allLogs = [];
  comments.forEach((comment, index) => {
    const errorLogs = [];
    comment.tags.forEach(tag => {
      const checker = JsDocValueChecker[tag.tag];
      if (checker) {
        const valueCheckResult = checker(tag, node, sourcefile, sourcefile.fileName);
        if (!valueCheckResult.checkResult) {
          valueCheckResult.index = index;
          // 输出告警
          errorLogs.push(valueCheckResult);
        }
      }
    });
    allLogs.push(errorLogs);
  });
  for (const key in checkInfoMap) {
    checkInfoArray.push(checkInfoMap[key]);
  }
  return checkInfoArray;
}
exports.checkJsDocOfCurrentNode = checkJsDocOfCurrentNode;
