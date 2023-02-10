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
const { getAPINote } = require("../../src/utils");
let errInfo = "";

let apiBabelNoteArr = [];
function checkBabelValue(node, babelName) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split("*");
  const apiText = node.getText();
  const apiCoin = apiText.indexOf("{");
  const apiName = apiText.substring(0, apiCoin);
  // 根据api接口的extends内容，去查找是否有@extends标签
  if (apiName.match(new RegExp(`${babelName}`))) {
    if (!apiNote.match(new RegExp(`@${babelName}`)) && apiBabelNoteArr.indexOf(apiNote) == -1 && apiName.indexOf('import') == -1) {
      apiBabelNoteArr.push(apiNote);
      errInfo += `no @${babelName} ; `;
      console.log("errorInfo UP =" + errInfo);
    }
  }
  // 拿到jsdoc的extends标签内容，去对比与api接口的extends内容是否一致
  apiNoteArr.forEach((note) => {
    if (note.match(new RegExp(`@${babelName}`))) {
      const namespaceNote = note.replace(`@${babelName}`, "").trim();
      if (apiName.length > 0 && apiName.indexOf(`${babelName}`) == -1) {
        errInfo += `should delete @${babelName}`;
        console.log("errorInfo DOWN2=" + errInfo);
      } else if (apiName.length > 0 && !apiName.match(new RegExp(`${namespaceNote}`))) {
        errInfo += namespaceNote + ' ; ';
        console.log("errorInfo DOWN1=" + errInfo);
      } else if (apiName.length > 0 && namespaceNote.length == 0) {
        errInfo += `@${babelName} value is null`;
        console.log("errorInfo DOWN3=" + errInfo);
      }
    }
  });
}
exports.checkBabelValue = checkBabelValue;

function checkEnumValue(node, babelName) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split("*");
  const apiText = node.getText();
  const apiCoin = apiText.indexOf("{");
  const apiName = apiText.substring(0, apiCoin);
  const enumValues = ['{string}', '{number}'];
  // 根据api接口的enum容，去查找是否有@enum标签
  if (apiName.match(new RegExp(`${babelName}`))) {
    if (!apiNote.match(new RegExp(`@${babelName}`)) && apiBabelNoteArr.indexOf(apiNote) == -1 && apiName.indexOf('import') == -1) {
      apiBabelNoteArr.push(apiNote);
      errInfo += `no @${babelName} ; `;
      console.log("errorInfo UP =" + errInfo);
    }
  }
  // 拿到jsdoc的enum标签内容，去对比与api接口的enum内容是否一致
  apiNoteArr.forEach((note) => {
    if (note.match(new RegExp(`@${babelName}`)) && apiName.length > 0) {
      const enumNote = note.replace(`@${babelName}`, "").trim();
      if (apiName.indexOf(`${babelName}`) == -1) {
        errInfo += `should delete @${babelName}`;
        console.log("errorInfo DOWN1=" + errInfo);
      } else if (apiName.length != 0 && enumNote.indexOf(enumValues[0]) == -1 && enumNote.indexOf(enumValues[1]) == -1) {
        errInfo += enumNote + ' ; ';
        console.log("errorInfo DOWN1=" + errInfo);
      } else if (enumNote.length == 0) {
        errInfo += `@${babelName} value is null`;
        console.log("errorInfo DOWN3=" + errInfo);
      }
    }
  });
}
exports.checkEnumValue = checkEnumValue;

function checkSinceValue(node) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split("*");
  // 判断jsdoc中是否存在必选标签since
  if (apiNote.indexOf('@since') == -1 && apiNote.indexOf('Copyright') == -1) {
    errInfo += '@since should add';
    console.log("errorInfo DOWN1 =" + errInfo);
  }
  // 判断jsdoc中必选标签since值是否为空
  apiNoteArr.forEach((note) => {
    if (note.match(new RegExp('@since'))) {
      const sinceNote = note.replace('@since', "").trim();
      if (sinceNote.length == 0) {
        errInfo += '@since value is null';
        console.log("errorInfo DOWN2=" + errInfo);
      }
    }
  });
}
exports.checkSinceValue = checkSinceValue;

function checkReturnsValue(node) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split("*");
  // 拿到jsdoc的returns标签内容，去对比与api接口的returns内容是否一致
  apiNoteArr.forEach((note) => {
    if (note.match(new RegExp('@retuens'))) {
      const retuensNote = note.replace('@retuens', "").trim();
      const apiCoin = retuensNote.indexOf('}');
      const apiDestribute = retuensNote.substring(apiCoin, namespaceNote.length - 1);
      if (retuensNote.indexOf('{') != -1) {
        errInfo += 'should delete @returns';
        console.log("errorInfo DOWN2=" + errInfo);
      } else if (retuensNote.indexOf('{') == -1 || retuensNote.indexOf('}') == -1) {
        errInfo += "should add '{' or '}' ;";
        console.log("errorInfo DOWN2=" + errInfo);
      } else if (apiDestribute.length > 2 && apiDestribute.indexOf('} -') == -1) {
        errInfo += "should add '-' ;";
        console.log("errorInfo DOWN2=" + errInfo);
      }
    }
  });
}
exports.checkReturnsValue = checkReturnsValue;

function checkParamValue(node) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split("*");
  const apiText = node.getText();
  const apiCoin = apiText.indexOf(";");
  const apiName = apiText.substring(0, apiCoin);
  let apiParamName = '';
  let apiParamType = '';
  // 根据api接口的param的名称、类型
  if (apiName.length > 0 && apiName.indexOf('import') == -1 && apiName.indexOf('export') == -1) {
    apiParamName = apiName.substring(apiText.indexOf('(') + 1, apiText.indexOf(':')).replace(/ /g, '');
    apiParamType = apiName.substring(apiText.indexOf(':') + 1, apiText.indexOf(')')).replace(/ /g, '');
  };
  // 拿到jsdoc的param标签内容，去对比与api接口的param内容是否一致
  apiNoteArr.forEach((note) => {
    if (note.match(new RegExp('@param'))) {
      const paramNote = note.replace('@param', "").trim();
      const jsdocCoin = retuensNote.indexOf('}');
      const apiDestribute = paramNote.substring(jsdocCoin + 1, paramNote.length);
      const paramArr = paramNote.replace(/ /g, '').replace(/(\{|\}|\-)/g, '$');
      if (paramNote.length == 0) {
        errInfo += '@param value is null';
        console.log("errorInfo DOWN4=" + errInfo);
      } else if (paramNote.indexOf('{') == -1 || paramNote.indexOf('}') == -1) {
        errInfo += "should add '{' or '}' ;";
        console.log("errorInfo DOWN2=" + errInfo);
      } else if (apiDestribute.length > 2 && apiDestribute.indexOf('-') == -1) {
        errInfo += "should add '-''";
        console.log("errorInfo DOWN4=" + errInfo);
      } else if (paramArr[1] != apiParamType && apiParamType.length > 0 || paramArr[2] != apiParamName && apiParamName.length > 0) {
        errInfo += '@param value is wrong';
        console.log("errorInfo DOWN5=" + errInfo);
      }
    }
  });
}
exports.checkParamValue = checkParamValue;

function checkThrowsValue(node) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split("*");
  // 拿到jsdoc的throws标签内容，去对比与api接口的returns内容是否一致
  apiNoteArr.forEach((note) => {
    if (note.match(new RegExp('@throws'))) {
      const throwsNote = note.replace('@throws', "").trim();
      const throwsArr = throwsNote.replace(/ /g, '').replace(/(\{|\}|\-)/g, '$');
      if (throwsNote.length == 0) {
        errInfo += '@throws value is null';
        console.log("errorInfo DOWN1=" + errInfo);
      } else if (throwsNote.indexOf('{ BusinessError }') == -1) {
        errInfo += "should add '{ BusinessError }' ;";
        console.log("errorInfo DOWN2=" + errInfo);
      } else if (throwsArr[2].match(/^[1-9]\d*$/) == null) {
        errInfo += "should add right @throws value ;";
        console.log("errorInfo DOWN4=" + errInfo);
      }
    }
  });
}
exports.checkThrowsValue = checkThrowsValue;

function checkUseinsteadValue(node) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split("*");
  const apiText = node.getText();
  const apiCoin = apiText.indexOf("{");
  const apiName = apiText.substring(0, apiCoin);
  let namespaceInfo = '';
  // 获取namespace值,class值,interface值
  if (apiName.length > 0 && apiName.match(new RegExp('namespace'))) {
    namespaceInfo = apiName.substring(apiName.indexOf('namespace') + 10, apiName.length);
    console.log('namespaceInfo1=' + namespaceInfo);
  } else if (apiName.length > 0 && apiName.match(new RegExp('class'))) {
    namespaceInfo = apiName.substring(apiName.indexOf('class') + 6, apiName.length);
    console.log('namespaceInfo2=' + namespaceInfo);
  } else if (apiName.length > 0 && apiName.match(new RegExp('interface'))) {
    namespaceInfo = apiName.substring(apiName.indexOf('interface') + 10, apiName.length);
    console.log('namespaceInfo3=' + namespaceInfo);
  }
  // 验证useinstead值
  apiNoteArr.forEach((note) => {
    if (note.match(new RegExp('@useinstead'))) {
      const useinsteadNote = note.replace('@useinstead', "").trim();
      const useinsteadArr = useinsteadNote.replace(/(\.|\/|\#)/g, '$').split('$');
      if (useinsteadNote.length == 0) {
        errInfo += '@useinstead value is null';
        console.log("errorInfo DOWN1=" + errInfo);
      } else if (useinsteadArr[0] != 'ohos') {
        errInfo += "should add 'ohos' ;";
        console.log("errorInfo DOWN2=" + errInfo);
      } else if (useinsteadArr.indexOf(namespaceInfo) == -1) {
        errInfo += " @useinstead value is wrong ;";
        console.log("errorInfo DOWN3=" + errInfo);
      }
    }
  });
}
exports.checkUseinsteadValue = checkUseinsteadValue;

function checkFiresValue(node) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split("*");
  const apiText = node.getText();
  const apiCoin = apiText.indexOf("{");
  const apiName = apiText.substring(0, apiCoin);
  let eventInfo = '';
  // 获取namespace值,class值,interface值
  if (apiName.length > 0 && apiName.match(new RegExp('class'))) {
    var classInfo = apiName.substring(apiName.indexOf('class') + 6, apiName.length).replace(/ /g, '');
    console.log('classInfo=' + classInfo);
  }
  if (apiName.length > 0 && apiText.indexOf('export') == -1) {
    eventInfo = apiName.substring(apiText.indexOf('/'), apiName.indexOf(';'));
    console.log('eventInfo=' + eventInfo);
  }
  // 校验fires值
  apiNoteArr.forEach((note) => {
    if (note.match(new RegExp('@fires'))) {
      const firesNote = note.replace('@fires', "").trim();
      const firesArr = firesNote.split('#');
      if (firesNote.length == 0) {
        errInfo += '@fires value is null';
        console.log("errorInfo DOWN1=" + errInfo);
      } else if (firesArr[0] != classInfo) {
        errInfo += `@fires className ${classInfo} value is wrong ; `;
        console.log("errorInfo DOWN2=" + errInfo);
      } else if (eventInfo.indexOf(firesArr[1]) == -1) {
        errInfo += ` @fires eventName value should change to ${eventInfo} ;`;
        console.log("errorInfo DOWN3=" + errInfo);
      }
    }
  });
}
exports.checkFiresValue = checkFiresValue;

function checkTypeValue(node) {
  const apiNote = getAPINote(node);
  const apiNoteArr = apiNote.split("*");
  const apiText = node.getText();
  const apiCoin = apiText.indexOf(";");
  const apiName = apiText.substring(0, apiCoin);
  let namespaceInfo = '';
  if (apiName.length > 0 && apiName.indexOf('export') == -1) {
    namespaceInfo = apiName.substring(apiName.indexOf(':') + 1, apiName.length).replace(/ /g, '');
  }
  // 校验type值
  apiNoteArr.forEach((note) => {
    if (note.match(new RegExp('@type'))) {
      const typeNote = note.replace('@type', "").trim();
      const typeArr = typeNote.split(':');
      if (typeNote.length == 0) {
        errInfo += '@type value is null';
        console.log("errorInfo DOWN1=" + errInfo);
      } else if (typeNote.indexOf(namespaceInfo)==-1) {
        errInfo += `@type value is wrong ; `;
        console.log("errorInfo DOWN2=" + errInfo);
      }
    }
  });
}
exports.checkTypeValue=checkTypeValue;