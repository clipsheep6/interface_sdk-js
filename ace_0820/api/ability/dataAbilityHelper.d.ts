/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback } from '../basic';

/**
 * DataAbilityHelper
 * @devices phone, tablet
 *
 * @since 7
 */
export interface DataAbilityHelper {
    /**
     * Opens a file in a specified remote path.
     * @devices phone, tablet
     * @since 7
     * @SysCap AAFwk
     * @param uri Indicates the path of the file to open.
     * @param mode Indicates the file open mode, which can be "r" for read-only access, "w" for write-only access
     *             (erasing whatever data is currently in the file), "wt" for write access that truncates any existing
     *             file, "wa" for write-only access to append to any existing data, "rw" for read and write access on
     *             any existing data, or "rwt" for read and write access that truncates any existing file.
     * @param callback Indicates the callback when openfile success
     */
    openFile(uri: string, mode: string, callback: AsyncCallback<number>): void;
    openFile(uri: string, mode: string): Promise<number>;

    /**
     * Registers an observer to observe data specified by the given uri.
     * @devices phone, tablet
     * @since 7
     * @SysCap AAFwk
     * @param type dataChange.
     * @param uri Indicates the path of the data to operate.
     * @param callback Indicates the callback when dataChange.
     */
    on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void;

    /**
     * Deregisters an observer used for monitoring data specified by the given uri.
     * @devices phone, tablet
     * @since 7
     * @SysCap AAFwk
     * @param type dataChange.
     * @param uri Indicates the path of the data to operate.
     * @param callback Indicates the registered callback.
     */
    off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void;

    /**
     * Calls the method defined by the Data ability.
     * @devices phone, tablet
     * @since 7
     * @SysCap AAFwk
     * @param uri Indicates the Data ability to process.
     * @param method Indicates the method name.
     * @param arg Indicates the parameter of the String type.
     * @param extras Indicates the parameter of the object type.
     * @return callback Indicates the value returned by the called method.
     */
    call(uri: string, method: string, arg: string, extras: object, callback: AsyncCallback<object>): void;
    call(uri: string, method: string, arg: string, extras: object): Promise<object>;
}
