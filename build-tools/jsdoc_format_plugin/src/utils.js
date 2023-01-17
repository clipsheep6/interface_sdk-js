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

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

/**
 * Recursively query the api directory.
 * @param {String} dir dir api directory
 * @param {Array} apiFiles api files array
 */
function readDir(dir, apiFiles) {
  const files = fs.readFileSync(dir);
  files.forEach(element => {
    const filePath = path.join(dir, element);
    const status = fs.statSync(filePath);
    if (status.isDirectory()) {
      readDir(filePath, apiFiles);
    } else if (status.isFile() && /\.d\.ts$/.test(filePath)) {
      apiFiles.push(filePath);
    }
  });
}

/**
 * Get api file array.
 * @param {String} url api file(.d.ts) | api config file(.txt) | api file directory
 * @returns api file array
 */
function getApiFiles(url) {
  const apiFiles = [];
  const urlStat = fs.statSync(url);
  if (urlStat.isFile() && path.extname(url) === ".txt") {
    const content = fs.readFileSync(url, "utf-8");
    const apiFilesConfig = content.split(/[(\r\n)\r\n]+/);
    apiFilesConfig.forEach(file => {
      if (fs.existsSync(file)) {
        apiFiles.push(file);
      } else {
        console.error(`FORMAT_ERROR: Api file of [${file}] is not found!`);
      }
    });
  } else if (urlStat.isFile() && /\.d\.ts$/.test(url)) {
    apiFiles.push(url);
  } else if (url.isDirectory()) {
    readDir(url, apiFiles);
  }
  return apiFiles;
}
exports.getApiFiles = getApiFiles;

/**
 * Tsc compile engine.
 * @param {Array} apiFiles api file array
 * @param {Function} callback pretreatment function
 */
function tsTransform(apiFiles, callback) {
  apiFiles.forEach(url => {
    const content = fs.readFileSync(url, "utf-8");
    const fileName = path.basename(url).replace(/\.d\.ts$/, "ts");
    ts.transpileModule(content, {
      compilerOptions: {
        "target": ts.ScriptTarget.ES2017
      },
      fileName: fileName,
      transformers: { before: [callback(url)] }
    });
  });
}
exports.tsTransform = tsTransform;

/**
 * Create generated api file.
 * @param {String} url generated api file path
 * @param {String} content content generated api file content
 * @param {Object} option option of writeFile(fs)
 */
function overwriteApiFile(url, content, option) {
  fs.writeFileSync(url, content, option);
}
exports.overwriteApiFile = overwriteApiFile;

/**
 * Get api note.
 * @param {tsNode} node current node
 * @returns api note
 */
function getAPINote(node) {
  const apiLength = node.getText().length;
  const apiFullLength = node.getFullText().length
  return node.getFullText().substring(0, apiFullLength - apiLength);
}
exports.getAPINote = getAPINote;

/**
 * Judge whether the api note exists.
 * @param {tsNode} node current node
 * @returns boolean
 */
function hasAPINote(node) {
  const apiNote = getAPINote(node).replace(/[\s]/g, "");
  if (apiNote && apiNote.length !== 0) {
    return true;
  }
  return false;
}
exports.hasAPINote = hasAPINote;

/**
 * Get api information.
 * @param {tsNode} node current node
 * @returns api information
 */
function getApiInfo(node) {
  const notesStr = getAPINote(node)
  let apiInfo = {};
  if (notesStr !== "") {
    if (/\@[S|s][Y|y][S|s][T|t][E|e][M|m][A|a][P|p][I|i]/g.test(notesStr)) {
      apiInfo.isSystemApi = 'system api'
    }
    if (/\@[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g, (versionInfo) => {
        apiInfo.version = versionInfo.replace(/\@[S|s][I|i][N|n][C|c][E|e]/g, '').trim();
      })
    }
    if (/\@[D|d][E|e][P|p][R|r][E|e][C|c][A|a][T|t][E|e][D|d].*[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g.test(notesStr)) {
      notesStr.replace(/\@[D|d][E|e][P|p][R|r][E|e][C|c][A|a][T|t][E|e][D|d].*[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g,
        versionInfo => {
          apiInfo.deprecated = versionInfo.replace(
            /\@[D|d][E|e][P|p][R|r][E|e][C|c][A|a][T|t][E|e][D|d].*[S|s][I|i][N|n][C|c][E|e]\s*/g, '').trim();
        })
    }
    if (/\@[F|f][A|a][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g.test(notesStr)) {
      notesStr.replace(/\@[F|f][A|a][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g, modelInfo => {
        apiInfo.model = modelInfo;
      })
    } else if (/\@[S|s][T|t][A|a][G|g][E|e][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g.test(notesStr)) {
      notesStr.replace(/\@[S|s][T|t][A|a][G|g][E|e][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g, modelInfo => {
        apiInfo.model = modelInfo;
      })
    }
    if (/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g, sysCapInfo => {
        apiInfo.sysCap = sysCapInfo.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]/g, '').trim();
      })
    }
    if (/\@[P|p][E|e][R|r][M|m][I|i][S|s][S|s][I|i][O|o][N|n]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
      notesStr.replace(/\@[P|p][E|e][R|r][M|m][I|i][S|s][S|s][I|i][O|o][N|n]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g,
        permissionInfo => {
          apiInfo.permission =
            permissionInfo.replace(/\@[P|p][E|e][R|r][M|m][I|i][S|s][S|s][I|i][O|o][N|n]/g, '').trim();
        })
    }
  }
  return apiInfo;
}
exports.getApiInfo = getApiInfo;

function getApiVersion(node) {
  if (getApiInfo(node).version) {
    return getApiInfo(node).version;
  } else if (node.parent) {
    return getApiVersion(node.parent);
  } else {
    return "NA";
  }
}
exports.getApiVersion = getApiVersion;
