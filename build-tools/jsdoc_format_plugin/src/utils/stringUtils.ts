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

import { StringId } from "./constant";


const ZH_STRING_MAP: Map<number, string> = new Map([
    [StringId.INPUT_FILE_NOT_FOUND, "找不到d.ts文件"],
    [StringId.INPUT_FILE_CONTENT_EMPTY, "文件无内容"],
    [StringId.COMMAND_INPUT_DESCRIPTION, "d.ts文件或包含d.ts的文件夹的绝对路径"],
    [StringId.COMMAND_OUT_DESCRIPTION, "整改后的d.ts的路径,若输入为文件夹路径时，输出也必须为文件夹路径"],
    [StringId.INVALID_FILE, "输入文件不是d.ts文件"]
]);

const EN_STRING_MAP: Map<number, string> = new Map([
    [StringId.INPUT_FILE_NOT_FOUND, "d.ts is not found"],
    [StringId.INPUT_FILE_CONTENT_EMPTY, "file is empty"],
    [StringId.COMMAND_INPUT_DESCRIPTION, 'absolute path of the file'],
    [StringId.COMMAND_OUT_DESCRIPTION, 'absolute path of the file'],
    [StringId.INVALID_FILE, "not a d.ts file"]
]);

export class StringUtils {
    static stringMap: Map<number, string> = ZH_STRING_MAP;
    static getString(key: number): string {
        return this.stringMap.get(key) || `unknown string resource ${key}`;
    }

    static isEmpty(str: string|undefined): boolean {
        return str == undefined || str.length == 0;
    }
}
