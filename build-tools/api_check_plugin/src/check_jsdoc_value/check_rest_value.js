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


const { getAPINote } = require('../../src/utils');
let errorInfo = "";

let apiBabelArr = []
function checkLabelValue(node, babelName) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split('*');
  const apiText = node.getText();
  const apiCoin = apiText.indexOf("{");
  const apiName = apiText.substring(1, apiCoin);
  // 根据api接口的extends内容，去查找是否有@extends标签
  if (apiName.match(new RegExp(` ${babelName}`))) {
    if (!apiNote.match(new RegExp(`@${babelName}`)) && apiBabelArr.indexOf(apiNote) == -1 &&
      apiName.indexOf('import') == -1) {
      apiBabelArr.push(apiNote);
      errorInfo += `no @${babelName}`;
      console.log('errorInfo UP==' + errorInfo)
    }
  }
  // 获取jsdoc的extends标签内容，与api接口的extends内容对比，是否一致
  apiNoteArr.forEach(note => {
    if (note.match(new RegExp(`@${babelName}`))) {
      const babelNote = note.replace(`@${babelName}`, '').trim();
      if (apiName.length > 0 && apiName.indexOf(`${babelName}`) == -1) {
        errorInfo += `should delete @${babelName} ; `;
        console.log('errorInfo DOWN1==' + errorInfo)
      } else if (apiName.length > 0 && !apiName.match(new RegExp(`${babelNote}`))) {
        errorInfo += babelNote + ' ; ';
        console.log('errorInfo DOWN2==' + errorInfo)
      } else if (apiName.length > 0 && babelNote.length == 0) {
        errorInfo += `@${babelName} value is null ; `;
        console.log('errorInfo DOWN3==' + errorInfo)
      }
    }
  });
}
exports.checkLabelValue = checkLabelValue;

function checkEnumValue(node, babelName) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split('*');
  const apiText = node.getText();
  const apiCoin = apiText.indexOf("{");
  const apiName = apiText.substring(1, apiCoin);
  const enumValue = ['{ string }', '{ number }']
  // 根据api接口的extends内容，去查找是否有@extends标签
  if (apiName.match(new RegExp(` ${babelName}`))) {
    if (!apiNote.match(new RegExp(`@${babelName}`)) && apiBabelArr.indexOf(apiNote) == -1 &&
      apiName.indexOf('import') == -1) {
      apiBabelArr.push(apiNote);
      errorInfo += `no @${babelName}`;
      console.log('errorInfo UP==' + errorInfo)
    }
  }
  // 获取jsdoc的extends标签内容，与api接口的extends内容对比，是否一致
  apiNoteArr.forEach(note => {
    if (note.match(new RegExp(`@${babelName}`)) && apiName.length > 0) {
      const babelNote = note.replace(`@${babelName}`, '').trim();
      if (apiName.indexOf(`${babelName}`) == -1) {
        errorInfo += `should delete @${babelName}`;
        console.log('errorInfo DOWN1==' + errorInfo)
      } else if (babelNote.length != 0 && babelNote.indexOf(enumValue[0]) == -1 &&
        babelNote.indexOf(enumValue[1]) == -1) {
        errorInfo += babelNote + ' ; ';
        console.log('errorInfo DOWN2==' + errorInfo)
      } else if (babelNote.length == 0) {
        errorInfo += `@${babelName} value is null`;
        console.log('errorInfo DOWN3==' + errorInfo)
      }
    }
  });
}
exports.checkEnumValue = checkEnumValue;
