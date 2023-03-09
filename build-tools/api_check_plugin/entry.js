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
  let getResult = ''
  const prUrlArray = url.split(';')
  try {
    for (var item of prUrlArray) {
      if (item != '') {
        let prArr = item.split('/')
        https.get(`https://gitee.com/api/v5/repos/openharmony/docs/pulls/${prArr[prArr.length - 1]}/comments`, (res) => {
          let { statusCode } = res;
          let contentType = res.headers['content-type'];
          let error;
          if (statusCode !== 200) {
            error = new Error('Request Failed.\n' +
              `Status Code: ${statusCode}`);
          } else if (!/^application\/json/.test(contentType)) {
            error = new Error('Invalid content-type.\n' +
              `Expected application/json but received ${contentType}`);
          }
          if (error) {
            console.error(error.message);
            // consume response data to free up memory
            res.resume();
          }
          res.setEncoding('utf8');
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
      }
       return isCheckResult
    }
  } catch (error) {
    getResult = `API_CHECK_ERROR : ${error}`;
  }
}

function checkEntry(url) {
  const checkResult = checkPullRequest(url)
  let result = '';
  const sourceDirname = __dirname;
  __dirname = 'interface/sdk-js/build-tools/api_check_plugin';
  const mdFilesPath = path.resolve(sourceDirname, '../../../../', 'all_files.txt');
  if (checkResult) {
    try {
      const execSync = require('child_process').execSync;
      execSync('cd interface/sdk-js/build-tools/api_check_plugin && npm install');
      const { scanEntry } = require(path.resolve(__dirname, './src/api_check_plugin'));
      result = scanEntry(mdFilesPath);
      const { removeDir } = require(path.resolve(__dirname, './src/utils'));
      removeDir(path.resolve(__dirname, 'node_modules'));
    } catch (error) {
      // catch error
      result = `API_CHECK_ERROR : ${error}`;
    }
  } else {
    result = `API_CHECK_SUCCESS : success`;
  }

  const { writeResultFile } = require('./src/utils');
  writeResultFile(result, path.resolve(__dirname, './Result.txt'), {});
}
checkEntry(process.argv[2]);
