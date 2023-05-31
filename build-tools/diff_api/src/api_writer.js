/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

const excel = require('exceljs');
const path = require("path");
const fs = require('fs');
const { StatusCode } = require('./reporter');

function getSubsystemMap(subsystemMap) {
  const subsystemFilePath = path.join(__dirname, '..', 'subsystem.json');
  const fileContent = JSON.parse(fs.readFileSync(subsystemFilePath, 'utf-8'));
  fileContent.forEach(content => {
    subsystemMap.set(content.fileName, content.subsystem)
  });
}

exports.JSONReporter = {
  write: function (diffs, dest, oldVersion, newVersion) {
    const outputFile = path.resolve(dest, `diff(${oldVersion}_${newVersion}).json`);
    fs.writeFileSync(outputFile, JSON.stringify(diffs));
    console.log(`report is in ${outputFile}`);
  }
}

exports.ChangelogReporter = {
  write: function (diffs, dest) {
    const outputFile = path.resolve(dest, `changelog.json`);
    fs.writeFileSync(outputFile, JSON.stringify(diffs));
    console.log(`report is in ${outputFile}`);
  }
}

exports.ExcelReporter = {
  write: async function (diffs, dest, oldVersion, newVersion) {
    const subsystemMap = new Map();
    getSubsystemMap(subsystemMap);
    const workbook = new excel.Workbook();
    const sheet = workbook.addWorksheet('api差异', { viers: [{ xSplit: 1 }] });
    sheet.getRow(1).values = ['操作标记', '差异项-旧版本', '差异项-新版本', 'd.ts文件', '归属子系统'];
    diffs.forEach((diffInfo, index) => {
     const messageObj = getDiffMessage(diffInfo);
      // console.log(diffInfo.syscap);
      const syscap = diffInfo.syscap ? diffInfo.syscap.toLowerCase() : '';
      const subsystem = diffInfo.packageName === 'ArkUI' ? 'ACE开发框架' : subsystemMap.get(syscap);
      sheet.getRow(index + 2).values = [
        diffInfo.status,
        messageObj.oldMessage,
        messageObj.newMessage,
        diffInfo.dtsName,
        subsystem
      ]
    });
    const buffer = await workbook.xlsx.writeBuffer();
    const outputFile = path.resolve(dest, `diff.xlsx`);
    fs.writeFileSync(outputFile, buffer);
    console.log(`report is in ${outputFile}`);
  }
}

function getDiffMessage(diffInfo) {
  let oldMessage = '';
  let newMessage = '';
  if (diffInfo.statusCode === StatusCode.DELETE) {
    oldMessage = `类名：${diffInfo.className};\n方法or属性：${diffInfo.rawText}`;
  } else if (diffInfo.statusCode === StatusCode.DELETE_CLASS) {
    oldMessage = `类名声明：${diffInfo.rawText}`;
  } else if (diffInfo.statusCode === StatusCode.NEW_API) {
    newMessage = `类名：${diffInfo.className};\n方法or属性：${diffInfo.rawText}`;
  } else if (diffInfo.statusCode === StatusCode.DELETE_DTS) {
    oldMessage = `文件名：${diffInfo.dtsName}`;
  } else if (diffInfo.statusCode === StatusCode.FUNCTION_CHANGES) {
    oldMessage = `类名：${diffInfo.className};\n方法or属性：${diffInfo.oldMessage}`;
    newMessage = `类名：${diffInfo.className};\n方法or属性：${diffInfo.newMessage}`;
  } else if (diffInfo.statusCode === StatusCode.DEPRECATED_CHNAGES) {
    const useinsteadInfo = diffInfo.hint.replace('useinstead:', '')
    oldMessage = `类名：${diffInfo.className};\n方法or属性：${diffInfo.rawText};\n旧版本信息：${diffInfo.oldMessage}`;
    newMessage = `类名：${diffInfo.className};\n方法or属性：${diffInfo.rawText};\n新版本信息：${diffInfo.newMessage};\n代替接口：${useinsteadInfo}`;
  } else {
    oldMessage = `类名：${diffInfo.className};\n方法or属性：${diffInfo.rawText};\n旧版本信息：${diffInfo.oldMessage}`;
    newMessage = `类名：${diffInfo.className};\n方法or属性：${diffInfo.rawText};\n新版本信息：${diffInfo.newMessage}`;
  }
  return { oldMessage, newMessage };
}