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
const fs = require('fs');
const https = require('https')
let isCheckResult


function checkPullRequest(url) {
  // const prUrlArray = url.split(';')
    // for (var item of prUrlArray) {
      // if (item != '') {
        // let prArr = item.split('/')
        let result_url = '';
        const prId = 4665
        https.get(`https://gitee.com/api/v5/repos/openharmony/docs/pulls/${prId}/comments`, (res) => {
          let rawData = '';
          res.on('data', (chunk) => {
            rawData += chunk;
          });
          res.on('end', () => {
            try {
              const parsedData = JSON.parse(rawData);
              console.log(parsedData);
              for (let i = parsedData.length - 1; i >= 0; i--) {
                if (parsedData[i].body === 'start apiCheck') {
                  isCheckResult = true
                  break;
                }
                if (parsedData[i].body === 'start apiCheck' && parsedData[i].body === 'start build') {
                  isCheckResult = false
                  break;
                }
                if (parsedData[i].body === 'stop apiCheck') {
                  isCheckResult = false
                  break;
                }
              }
            } catch (e) {
              console.error(e.message);
            }
          });
        }).on('error', (e) => {
          console.error(`Got error: ${e.message}`);
        });
      // }
      return isCheckResult
    // }

}


function checkEntry(url) {
  // const checkResult = checkPullRequest(url)
  let result = '';
  const sourceDirname = __dirname;
  __dirname = 'interface/sdk-js/build-tools/api_check_plugin';
  const mdFilesPath = path.resolve(sourceDirname, '../../../../', 'all_files.txt');
  try {
    const execSync = require('child_process').execSync;
    execSync('cd interface/sdk-js/build-tools/api_check_plugin && npm install');
    const { scanEntry } = require(path.resolve(__dirname, './src/api_check_plugin'));
    result = scanEntry(mdFilesPath) + `\n API_PR :${url}`;
    const { removeDir } = require(path.resolve(__dirname, './src/utils'));
    removeDir(path.resolve(__dirname, 'node_modules'));
  } catch (error) {
    // catch error
    result = `API_CHECK_ERROR : ${error}\n API_PR :${url}`;
  }
  // if (checkResult) {
  // } else {
  //   result = `API_CHECK_SUCCESS : success`;
  // }

  const { writeResultFile } = require('./src/utils');
  writeResultFile(result, path.resolve(__dirname, './Result.txt'), {});
}
checkEntry(process.argv[2]);