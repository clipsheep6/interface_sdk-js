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

import fs, { constants, Stats } from "fs";
import path from "path";
import { LogUtil } from "./logUtil";

export class FileUtils {
    static readFileContent(file: string): string|undefined {
        return fs.readFileSync(file, 'utf-8');
    }

    static readFilesInDir(dir: string, filter?: Function): Array<string> {
        return new Array();
    }

    static writeStringToFile(str: string,  filePath: string) {
        const parentDir = path.join(filePath, '..');
        if (!FileUtils.isExists(parentDir)) {
            fs.mkdirSync(parentDir);
        }
        fs.writeFileSync(filePath, str);
    }

    static isDirectory(path: string): boolean {
        const stats: Stats = fs.lstatSync(path);
        return stats.isDirectory();
    }

    static isExists(path: string|undefined): boolean {
        if (!path) {
            return false;
        }
        try {
            fs.accessSync(path, constants.R_OK);
            return true;
        } catch (exception) {
            LogUtil.e("FileUtils", `path is not exists, ${exception}`);
            return false;
        }
    }   
}