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

const { expect } = require('chai');
const { ApiDiffPlugin } = require('../../src/index');
const path = require('path');
const fs = require('fs');

describe('diffSingleFile', function () {
  const newFileDir = path.join(__dirname, '..', '/ut/new');
  const oldFileDir = path.join(__dirname, '..', '/ut/old');
  const expectResultDir = path.join(__dirname, '..', '/expect');
  const expectFilePath = path.resolve(expectResultDir, 'expect.json')
  let argumentObject = {
    "old": oldFileDir,
    "new": newFileDir,
  };
  process.argv.slice(3).forEach(argument => {
    const argumentArr = argument.split('=');
    const key = argumentArr[0];
    const value = argumentArr[1];
    argumentObject[key] = value;
  })
  it('testDiff', function () {
    ApiDiffPlugin.start(argumentObject);
    const resultFileName = `diff(${argumentObject.oldVersion}_${argumentObject.newVersion}).json`
    const resultFilePath = path.resolve(argumentObject.output, resultFileName);
    const resultFileContent = fs.readFileSync(resultFilePath, 'utf-8').replace(/\n|\r|\s/g, '');
    const expectContent = fs.readFileSync(expectFilePath, 'utf-8').replace(/\n|\r|\s/g, '');
    expect(resultFileContent).to.be.equal(expectContent);

  })
})
