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

const { ApiCollector, MultiProjectApiCollector } = require('./api_collector');
const { Logger } = require('./utils');
const path = require('path');
const fs = require('fs');

class AppApiCollectorPlugin {
  constructor() {
    this.logTag = 'AppApiCollectorPlugin';
  }
  getPluginOptions() {
    return {
      name: 'api-collector',
      version: '0.1.0',
      description: `collect api from app's source code.`,
      commands: [
        {
          isRequiredOption: false,
          options: ['--app <string>', 'app root directory']
        },
        {
          isRequiredOption: false,
          options: ['--appDir <string>', 'a path that contains multiple applications']
        },
        {
          isRequiredOption: false,
          options: ['--sdk <string>', 'sdk path, need to specify the ets directory, e.g sdk-root/version/ets']
        },
        {
          isRequiredOption: false,
          options: ['--output <string>', 'the path to output the report']
        },
        {
          isRequiredOption: false,
          options: ['--format <json,excel>', 'format of the output report']
        },
        {
          isRequiredOption: false,
          options: ['--scanTest', 'scan ohosTest']
        },
        {
          isRequiredOption: false,
          options: ['--debug', 'output debug logs']
        }
      ]
    };
  }

  async start(argv) {
    if (!this.checkArguments(argv)) {
      return;
    }
    const startTime = Date.now();
    if (argv.app) {
      const collector = new ApiCollector(argv);
      await collector.setLibPath(this.findLibPath()).setIncludeTest(argv.scanTest).start();
      Logger.info(this.logTag, `elapsed time ${Date.now() - startTime}`);
    } else if (argv.appDir) {
      const collector = new MultiProjectApiCollector(argv.appDir, argv.sdk, argv.output);
      await collector.start();
      Logger.info(this.logTag, `elapsed time ${Date.now() - startTime}`);
    } else {
      Logger.info(this.logTag, `see --help`);
    }
    if (argv.debug) {
      Logger.flush(this.getLogPath(argv));
    }
  }

  getLogPath(argv) {
    if (argv.output) {
      return argv.output;
    }
    if (argv.appDir) {
      return argv.appDir;
    }
    if (argv.app) {
      return argv.app;
    }
    return __dirname;
  }

  findLibPath() {
    if (process.env.bundleMode) {
      return path.resolve(__dirname, 'libs');
    }
    return path.resolve(__dirname, '..', 'libs');
  }

  stop() {

  }

  checkArguments(argv) {
    return this.checkPathIsValid(argv.app) &&
      this.checkPathIsValid(argv.sdk) &&
      this.checkPathIsValid(argv.output);
  }

  checkPathIsValid(path) {
    if (path && !fs.existsSync(path)) {
      Logger.error(this.logTag, `${path} not exists`);
      return false;
    }
    return true;
  }
}

module.exports = AppApiCollectorPlugin;