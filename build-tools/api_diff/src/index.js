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

const { ApiDiffer } = require('./api_diff');
const { JSONReporter, ExcelReporter } = require('./reporter');
exports.ApiDiffPlugin = {
  pluginOptions: {
    name: 'diff',
    version: '0.1.0',
    description: 'Compare the differences between the two SDKS',
    commands: [
      {
        isRequiredOption: true,
        options: ['--old <string>', 'old sdk path']
      },
      {
        isRequiredOption: true,
        options: ['--new <string>', 'new sdk path']
      },
      {
        isRequiredOption: true,
        options: ['--oldVersion <string>', 'old sdk version']
      },
      {
        isRequiredOption: true,
        options: ['--newVersion <string>', 'new sdk version']
      },
      {
        isRequiredOption: true,
        options: ['--output <string>', 'output file path']
      },
      {
        isRequiredOption: false,
        options: ['--format <json, excel>', 'output file format']
      }
    ]
  },

  start: function (argv) {
    const oldSdk = argv.old;
    const newSdk = argv.new;
    const oldVersion = argv.oldVersion;
    const newVersion = argv.newVersion;
    const startTime = Date.now();
    const diffs = ApiDiffer.compareSdks(oldSdk, newSdk, oldVersion, newVersion);
    if (!argv.format || argv.format === 'json') {
      JSONReporter.write(diffs, argv.output, oldVersion, newVersion);
    } else {
      ExcelReporter.write(diffs, argv.output, oldVersion, newVersion);
    }
    console.log(`elapsed time: ${Date.now() - startTime}`)
  },

  stop: function () {}
}