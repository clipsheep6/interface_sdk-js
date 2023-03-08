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

const urlPrefix = 'https://gitee.com/openharmony/utils_system_resources/raw/';
const urlSuffix = '/systemres/main/config.json';

exports.checkJSDoc = function (node, sourceFile) {
  const checkLegality = require('./src/check_legality');
  return checkLegality.checkJsDocOfCurrentNode(node, sourceFile, undefined);
};

exports.initEnv = function (branch) {
  const https = require('https');
  const { checkOption } = require('./src/utils');
  return new Promise((resolve, reject) => {
    let requestText = undefined;
    const url = `${urlPrefix}${branch ? branch : 'master'}${urlSuffix}`;
    https.get(url, (res) => {
      res.on('data', (chunk) => {
        if (typeof chunk === 'string') {
          requestText = chunk;
        } else {
          const dataStr = new TextDecoder().decode(chunk);
          requestText = requestText ? (requestText + dataStr) : dataStr;
        }
      });
    }).on('error', (err) => {
      console.error(JSON.stringify(err));
    }).on('close', () => {
      if (requestText) {
        console.info(`update permission configuration successfully from the ${branch} branch`);
        checkOption.permissionContent = requestText;
      }
      resolve();
    });
  });
}