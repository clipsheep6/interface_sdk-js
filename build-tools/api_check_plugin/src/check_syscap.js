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
const fs = require("fs");
const result = require("../check_result.json");
const rules = require("../code_style_rule.json");
const { getAPINote } = require('./utils');

function checkSyscap(node, sourcefile, fileName) {
    const syscapTags = [...rules.decorators["syscap"]];
    const syscapRuleSet = new Set(syscapTags);
    const apiNote = getAPINote(node);
    const apiNoteArr = apiNote.split('*');
    let hasSyscapError = false;
    let errorInfo = "";
    apiNoteArr.forEach(note => {
        if (note.match(new RegExp('@syscap'))) {
            const syscapNote = note.replace('@syscap', '').trim();
            if (!syscapRuleSet.has(syscapNote)) {
                hasSyscapError = true;
                if (errorInfo !== "") {
                    errorInfo += `,${syscapNote}`;
                } else {
                    errorInfo += syscapNote;
                }
            }
        }
    });

    if (hasSyscapError) {
        const checkFailFileNameSet = new Set(result.apiFiles);
        if (!checkFailFileNameSet.has(fileName)) {
            result.apiFiles.push(fileName);
        }
        const posOfNode = sourcefile.getLineAndCharacterOfPosition(node.pos);
        const errorMessage = `API check error of [unknow syscap] in ${fileName}(line:${posOfNode.line + 1}, col: ` +
            `${posOfNode.character + 1}):${errorInfo}`;
          const scanResultSet = new Set(result.scanResult);
          scanResultSet.add(errorMessage);
          result.scanResult = [...scanResultSet];
    }
}
exports.checkSyscap = checkSyscap;