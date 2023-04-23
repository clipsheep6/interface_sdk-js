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

const { Project, Sdk, FileSystem, Logger } = require('./utils');
const { ApiWriter, ApiExcelWriter } = require('./api_writer');
const { SystemApiRecognizer } = require('./api_recognizer');
const { ReporterFormat } = require('./configs');
const ts = require('typescript');
const fs = require('fs');

class ProgramFactory {
  setLibPath(libPath) {
    this.libPath = libPath;
  }

  getETSOptions(componentLibs) {
    const tsconfig = require('../tsconfig.json');
    const etsConfig = tsconfig.compilerOptions.ets;
    etsConfig.libs = [...componentLibs];
    return etsConfig;
  }

  createProgram(rootNames, apiLibs, componentLibs, esLibs) {
    const compilerOption = {
      target: ts.ScriptTarget.ES2017,
      ets: this.getETSOptions([]),
      allowJs: false,
      lib: [...apiLibs, ...componentLibs, ...esLibs],
      module: ts.ModuleKind.CommonJS
    };
    this.compilerHost = this.createCompilerHost({
      resolveModuleName: (moduleName) => {
        return this.resolveModuleName(moduleName, apiLibs);
      }
    }, compilerOption);

    if (this.libPath && fs.existsSync(this.libPath)) {
      Logger.info('ProgramFactory', `set default lib location: ${this.libPath}`);
      this.compilerHost.getDefaultLibLocation = () => {
        return this.libPath;
      };
    }
    return ts.createProgram({
      rootNames: [...rootNames],
      options: compilerOption,
      host: this.compilerHost
    });
  }

  resolveModuleName(moduleName, libs) {
    if (moduleName.startsWith('@')) {
      const moduleFileName = `${moduleName}.d.ts`;
      for (const lib of libs) {
        if (lib.endsWith(moduleFileName)) {
          return lib;
        }
      }
    }
    return undefined;
  }

  createCompilerHost(moduleResolver, compilerOption) {
    const compilerHost = ts.createCompilerHost(compilerOption);
    compilerHost.resolveModuleNames = this.getResolveModuleNames(moduleResolver);
    return compilerHost;
  }

  getResolveModuleNames(moduleResolver) {
    return (moduleNames, containingFile, reusedNames, redirectedReference, options) => {
      const resolvedModules = [];
      for (const moduleName of moduleNames) {
        const moduleLookupLocaton = ts.resolveModuleName(moduleName, containingFile, options, {
          fileExists: (fileName) => {
            return fileName && ts.sys.fileExists(fileName);
          },
          readFile: (fileName) => {
            ts.sys.readFile(fileName);
          }
        });
        if (moduleLookupLocaton.resolvedModule) {
          resolvedModules.push(moduleLookupLocaton.resolvedModule);
        } else {
          const modulePath = moduleResolver.resolveModuleName(moduleName);
          const resolved = modulePath && ts.sys.fileExists(modulePath) ? { resolvedFileName: modulePath } : undefined;
          resolvedModules.push(resolved);
        }
      }
      return resolvedModules;
    };
  }
}

class ApiCollector {
  constructor(argv) {
    this.project = new Project(argv.app);
    this.sdk = new Sdk(this.project, argv.sdk);
    this.formatFlag = ReporterFormat.getFlag(argv.format);
    this.outputPath = !argv.output ? argv.app : argv.output;
    this.logTag = 'ApiCollector';
    this.debugFlag = argv.debug;
  }

  setLibPath(libPath) {
    this.libPath = libPath;
    if (libPath && !fs.existsSync(this.libPath)) {
      Logger.warn(this.logTag, `${libPath} is not exist`);
    } else {
      Logger.info(this.logTag, `set lib path ${libPath}`);
    }
    return this;
  }

  setIncludeTest(isIncludeTest) {
    this.isIncludeTest = isIncludeTest;
    return this;
  }

  async start() {
    const sdkPath = this.sdk.getPath();
    if (!sdkPath || !fs.existsSync(sdkPath)) {
      Logger.error(this.logTag, `sdk is not exisit ${sdkPath ? sdkPath: ''}`);
      return;
    }
    Logger.info(this.logTag, `scan app ${this.project.getPath()}`);
    Logger.info(this.logTag, `sdk is in ${sdkPath}`);
    const apiLibs = this.sdk.getApiLibs();
    const componentLibs = this.sdk.getComponentLibs();
    const eslibs = this.sdk.getESLibs(this.libPath);
    const appSourceSet = this.project.getAppSources(this.isIncludeTest);
    const programFactory = new ProgramFactory();
    programFactory.setLibPath(this.libPath);
    const program = programFactory.createProgram(appSourceSet, apiLibs, componentLibs, eslibs);

    if (this.debugFlag) {
      program.getSourceFiles().forEach((sf) => {
        Logger.info("ApiCollector", sf.fileName);
      });
    }

    const systemApiRecognizer = new SystemApiRecognizer(sdkPath);
    systemApiRecognizer.setTypeChecker(program.getTypeChecker());

    appSourceSet.forEach((appCodeFilePath) => {
      const canonicalFileName = programFactory.compilerHost.getCanonicalFileName(appCodeFilePath);
      const sourceFile = program.getSourceFileByPath(canonicalFileName);
      if (sourceFile) {
        systemApiRecognizer.visitNode(sourceFile, sourceFile.fileName);
      } else {
        Logger.warn(this.logTag, `no sourceFile ${appCodeFilePath}`);
      }
    });

    const apiWriter = this.getApiWriter();
    apiWriter.add(systemApiRecognizer.getApiInformations());
    await apiWriter.flush();
  }

  getApiWriter() {
    if (!this.apiWriter) {
      this.apiWriter = new ApiWriter(this.outputPath, this.formatFlag)
    }
    return this.apiWriter;
  }

  setApiWriter(apiWriter) {
    this.apiWriter = apiWriter;
  }
}

class MultiProjectApiCollector {
  constructor(appDir, sdk, output) {
    this.appDir = appDir;
    this.sdk = sdk;
    this.output = output;
  }

  async start() {
    const allApps = FileSystem.listAllAppDirs(this.appDir);
    const apiExcelWriter = new ApiExcelWriter(this.output);
    allApps.forEach((app) => {
      const apiCollector = new ApiCollector(app, this.sdk, this.output);
      apiCollector.setApiWriter(apiExcelWriter);
      apiCollector.start();
    });
    await apiExcelWriter.flush();
  }
}

exports.ApiCollector = ApiCollector;
exports.MultiProjectApiCollector = MultiProjectApiCollector;