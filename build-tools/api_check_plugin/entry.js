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
const SECOND_PARAM = 2;

function checkEntry(prId) {
  let result = ['api_check: false'];
  const sourceDirname = __dirname;
  // __dirname = 'interface/sdk-js/build-tools/api_check_plugin';
  const mdFilesPath = path.resolve(sourceDirname, '../../../../', 'all_files.txt');
  result.push(`path:${sourceDirname}`);
  const MAX_TIMES = 6;
  let buffer = new Buffer.from('');
  let bufferTestClang = new Buffer.from('');
  let bufferTestCapi = new Buffer.from('');
  let i = 0;
  let execute = false;
  try {
    const execSync = require('child_process').execSync;
    bufferTestClang = execSync('clang --version', {
      timeout: 5000,
    });
    result.push(`clang --version : ${bufferTestClang.toString()}`);

    bufferTestClang = execSync('pip --version', {
      timeout: 5000,
    });
    result.push(`pip --version : ${bufferTestClang.toString()}`);

    do {
      try {
        result.push(`count : ${i}`);

        bufferTestClang = execSync('pip install clang==15.0.7', {
          timeout: 120000,
        });
        result.push(`pip install clang==16.0.1 : ${bufferTestClang.toString()}`);

        bufferTestClang = execSync('pip install openpyxl==3.1.2', {
          timeout: 120000,
        });
        result.push(`pip install openpyxl==3.1.2 : ${bufferTestClang.toString()}`);
        execute = true;
      } catch (error) {}
    } while (++i < MAX_TIMES && !execute);
    execute = false;

    bufferTestClang = execSync('llvm-config --version', {
      timeout: 5000,
    });
    result.push(`llvm-config --version : ${bufferTestClang.toString()}`);

    bufferTestClang = execSync('pip config list', {
      timeout: 5000,
    });
    result.push(`pip config list : ${bufferTestClang.toString()}`);

    bufferTestClang = execSync('ls /home/tools/llvm/bin ', {
      timeout: 5000,
    });
    result.push(`ls llvmBin : ${bufferTestClang.toString()}`);

    bufferTestClang = execSync('ls -l /home/tools/llvm/lib ', {
      timeout: 5000,
    });
    result.push(`ls llvmLib : ${bufferTestClang.toString()}`);

    bufferTestClang = execSync('cd interface/sdk_c/build-tools/capi_parser &&  pwd', {
      timeout: 5000,
    });
    result.push(`pwd : ${bufferTestClang.toString()}`);

    bufferTestClang = execSync('cd interface/sdk_c/third_party &&  ls -R', {
      timeout: 5000,
    });
    result.push(`third_party lR : ${bufferTestClang.toString()}`);

    // bufferTestClang = execSync('find  interface ', {
    //   timeout: 10000,
    // });
    // result.push(`interface list : ${bufferTestClang.toString()}`);

    // bufferTestClang = execSync('find / -type f -name "libclang.so" ');
    // result.push(`libclang list : ${bufferTestClang.toString()}`);

    do {
      try {
        result.push(`count : ${i}`);

        buffer = execSync('cd interface/sdk_c/build-tools/capi_parser && pip install -r requirements.txt ', {
          timeout: 12000,
        });
        execute = true;
      } catch (error) {}
    } while (++i < MAX_TIMES && !execute);
    if (!execute) {
      throw 'npm install timeout';
    }
    result.push(`buffer : ${buffer.toString()}`);

    bufferTestCapi = execSync(
      `cd interface/sdk_c && python build-tools/capi_parser/src/main.py  -N collect -P ai/neural_network_runtime `,
      {
        timeout: 10000,
      }
    );
    result.push(`bufferTestCapi : ${bufferTestCapi.toString()}`);

    // const { scanEntry, reqGitApi } = require(path.resolve(__dirname, './src/api_check_plugin'));
    // result = scanEntry(mdFilesPath, prId, false);
    // result = reqGitApi(result, prId);
    result.push(`run over`);
    // removeDir(path.resolve(__dirname, '../api_diff/node_modules'));
    // removeDir(path.resolve(__dirname, 'node_modules'));
  } catch (error) {
    // catch error
    result.push(`API_CHECK_ERROR : ${error}`);
    result.push(`buffer error : ${buffer.toString()}`);
    result.push(`bufferTestClang error : ${bufferTestClang.toString()}`);
    result.push(`bufferTestCapi error : ${bufferTestCapi.toString()}`);
  } finally {
    // const { apiCheckInfoArr, removeDuplicateObj } = require('./src/utils');
    // const apiCheckResultArr = removeDuplicateObj(apiCheckInfoArr);
    // apiCheckResultArr.forEach((errorInfo) => {
    //   result.unshift(errorInfo);
    // });
    writeResultFile(result, path.resolve(__dirname, './Result.txt'), {});
  }
}

function removeDir(url) {
  const statObj = fs.statSync(url);
  if (statObj.isDirectory()) {
    let dirs = fs.readdirSync(url);
    dirs = dirs.map((dir) => path.join(url, dir));
    for (let i = 0; i < dirs.length; i++) {
      removeDir(dirs[i]);
    }
    fs.rmdirSync(url);
  } else {
    fs.unlinkSync(url);
  }
}

function writeResultFile(resultData, outputPath, option) {
  const STANDARD_INDENT = 2;
  fs.writeFile(
    path.resolve(__dirname, outputPath),
    JSON.stringify(resultData, null, STANDARD_INDENT),
    option,
    (err) => {
      if (err) {
        console.error(`ERROR FOR CREATE FILE:${err}`);
      } else {
        console.log('API CHECK FINISH!');
      }
    }
  );
}

checkEntry(process.argv[SECOND_PARAM]);
