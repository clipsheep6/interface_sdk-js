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
const ts = require("typescript");
const parse = require('comment-parser');
const { getAPINote, ErrorLevel, FileType, ErrorType } = require("../../src/utils");
const { addAPICheckErrorLogs } = require('../compile_info');

let errInfo = "";

function checkExtendsValue(node) {
  const targetName = 'extends';
  let tagName = '';
  let tagValue = '';
  let apiValue = '';
  // 获取jsdoc中的extends信息
  const apiNote = getAPINote(node);
  const parsed = parse.parse(`${apiNote}`);
  if (parsed.length > 0) {
    parsed[0].tags.forEach(item => {
      if (item.tag == targetName) {
        tagName = item.tag;
        tagValue = item.name;
        // console.log('tagName=', tagName, 'tagValue=', tagValue)
      }
    })
  }
  // 获取api中的extends信息，校验标签合法性及值规范
  if (ts.isClassDeclaration(node) || ts.isInterfaceDeclaration(node)) {
    apiValue = node.heritageClauses ? node.heritageClauses[0].types[0].expression.escapedText : '';
    // console.log('apiValue=', apiValue)
    if (tagName != targetName && apiValue.length > 0) {
      errInfo += `should add @${targetName}; `;
      console.log("errorInfo1=" + errInfo);
    } else if (tagName == targetName && apiValue.length == 0) {
      errInfo += `should delete @${targetName}; `;
      console.log("errorInfo2=" + errInfo);
    } else if (tagName == targetName && tagValue != apiValue) {
      errInfo += ` '@${tagValue}' should change to '${apiValue}'; `;
      console.log("errorInfo3=" + errInfo);
    }
  } else if (tagName == targetName && apiValue.length == 0) {
    console.log(node.getText())
    errInfo += `should delete @${targetName}; `;
    console.log("errorInfo down=" + errInfo);
  }
}
exports.checkExtendsValue = checkExtendsValue;

function checkEnumValue(node) {
  const targetName = 'enum';
  const enumValues = ['string', 'number'];
  let tagName = '';
  let tagValue = '';
  let tagProblems = 0;

  // 获取jsdoc中的enum信息
  const apiNote = getAPINote(node);
  const parsed = parse.parse(`${apiNote}`);
  if (parsed.length > 0) {
    parsed[0].tags.forEach(item => {
      if (item.tag == targetName) {
        tagName = item.tag;
        tagValue = item.type;
        tagProblems = item.problems.length
        console.log('tagName=', tagName, 'tagValue=', tagValue, 'tagProblems=', tagProblems)
      }
    })
  }

  // 获取api中的enum信息，校验标签合法性及值规范
  if (ts.isEnumDeclaration(node)) {

    // console.log('tagName=', tagName, 'tagValue=', tagValue,'tagProblems=',tagProblems)
    if (tagName != targetName) {
      errInfo += `should add @${targetName}; `;
      console.log("errorInfo2=" + errInfo);
    } else if (tagProblems > 0 || enumValues.indexOf(tagValue) == -1) {
      errInfo += `@${targetName} value is wrong; `;
      console.log("errorInfo1=" + errInfo);
    }
  } else if (tagName == targetName) {
    errInfo += `should delete @${targetName}; `;
    console.log("errorInfo2=" + errInfo);
  }
}
exports.checkEnumValue = checkEnumValue;

function checkSinceValue(node) {
  const targetName = 'since';
  let tagName = '';
  let tagValue = '';

  // 获取jsdoc中的since信息
  const apiNote = getAPINote(node);
  const parsed = parse.parse(`${apiNote}`);
  if (parsed.length > 0) {
    parsed[0].tags.forEach(item => {
      if (item.tag == targetName) {
        tagName = item.tag;
        tagValue = parseInt(item.name);
        console.log('tagName=', tagName, 'tagValue=', tagValue);
        if(isNaN(tagValue)){
          errInfo += `@${targetName} value '${item.name}' is wrong; `;
      console.log("errorInfo1=" + errInfo);
        }
      }
    })
  }
  if(tagName.length==0){
    errInfo += `should add @${targetName}; `;
      console.log("errorInfo2=" + errInfo);
  }
}
exports.checkSinceValue = checkSinceValue;

function checkReturnsValue(node) {
  const targetName = 'returns';
  const voidArr= ['void','Promise<void>']
  let tagName = '';
  let tagValue = '';

  // 获取jsdoc中的returns信息
  const apiNote = getAPINote(node);
  const parsed = parse.parse(`${apiNote}`);
  if (parsed.length > 0) {
    parsed[0].tags.forEach(item => {
      if (item.tag == targetName) {
        tagName = item.tag;
        tagValue = item.type;
        console.log('tagName=', tagName, 'tagValue=', tagValue)
        const apiInfos = node.getText();
        const apiCoin = apiInfos.indexOf(';');
        const apiInfo = apiInfos.substring(0,apiCoin+1);
        const apiKeyCoin = apiInfo.lastIndexOf(':');
        const apiReturnsValue = apiInfo.substring(apiKeyCoin+1,apiInfo.length-1).replace(/ /g,'');
        if(voidArr.indexOf(apiReturnsValue)!=-1){
          console.log('apiReturnsValue=',apiReturnsValue)
          errInfo += `should delete @${targetName}; `;
          console.log("errorInfo1=" + errInfo);
        }else if(tagValue.length==0){
          errInfo += `@${targetName} type value is null; `;
          console.log("errorInfo2=" + errInfo);
        }else if(tagValue!=apiReturnsValue){
          errInfo += `@${targetName}  value '${tagValue}' is wrong; `;
          console.log("errorInfo3=" + errInfo);
        }
      }
    })
  }
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
    if (note.match(new RegExp('@useinstead')) && apiName.length > 0) {
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
      } else if (typeNote.indexOf(namespaceInfo) == -1) {
        errInfo += `@type value is wrong ; `;
        console.log("errorInfo DOWN2=" + errInfo);
      }
    }
  });
}
exports.checkTypeValue = checkTypeValue;