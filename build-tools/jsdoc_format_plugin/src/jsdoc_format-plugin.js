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

const path = require('path');
const ts = require('typescript');
const { overwriteApiFile, getApiFiles, tsTransform, hasAPINote, getApiInfo } = require('./utils');

const formatedNodes = new Set([]);

function formatApiFile(url) {
  return (context) => {
    return (node) => {
      sourceFile = node;
      const fileName = url.replace(/\.d\.ts$/, ".new.d.ts");
      const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
      const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
      overwriteApiFile(fileName, result, {});
      tsTransform([fileName], formatJsDoc);
      return node;
    }
  }
}

function checkJsDoc(node) {
  if (hasAPINote(node)) {
    if (!getApiInfo(node).version) {
      return false;
    }
  }
  return true;
}

function createNewJsdoc(docContent) {
  // 根据* @拆分jsDoc
  const docs = docContent.split(/ *\* *\@/);
  const docInfo = {};
  docs.forEach(doc => {
    if (/\/\*\* */.test(doc)) {
      
    }
  });
}

function formatJsDoc(fileName) {
  return (context) => {
    return (node) => {
      sourceFile = node;
      node = ts.visitEachChild(node, processAllNodes, context);
      const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
      const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
      overwriteApiFile(fileName, result, {});
      return node;
    }
    function processAllNodes(node) {
      if (!checkJsDoc(node) && !formatedNodes.has(fileName + node.pos)) {
        formatedNodes.add(fileName + node.pos);
        console.log(node.getFullText());
      }
      return ts.visitEachChild(node, processAllNodes, context);
    }
  }
}

function main(apiDir) {
  const apiFiles = getApiFiles(apiDir);
  tsTransform(apiFiles, formatApiFile);
  console.log(formatedNodes)
}

const testDir = "C:\\Users\\Administrator\\Desktop\\sdk-js\\build-tools\\jsdoc_format_plugin\\test\\enums.d.ts";
main(testDir);
