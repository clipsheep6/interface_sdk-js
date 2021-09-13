/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback, BusinessError } from './basic';

 /**
 * The interface of system parameters class.
 *
 * @devices phone, tablet
 * @since 5
 * @Syscap SystemCapability.Startup.SysInfo
 * @hide
 */
declare namespace systemParameter {
    /**
     * Get the current value of the system parameter {@code key}.
     *
     * @param key the key to lookup.
     * @return if the parameter is empty or doesn't exist, empty string will be returned.
     * @since 5
     */
    function getSync(key: string, def?: string): string;
    function get(key: string, callback: AsyncCallback<string>): void;
    function get(key: string, def: string, callback: AsyncCallback<string>): void;
    function get(key: string, def?: string): Promise<string>;

    /**
     * Set the value for the given key.
     *
     * @param key the key to set.
     * @param value the value of the key.
     * @return system parameter setting is inherently asynchronous so a return value of {@code true}
     * isn't particularly meaningful, and immediately reading back the value won't necessarily
     * tell you whether or not your call succeeded. A {@code false} return value definitely means failure.
     * @since 5
     */
    function setSync(key: string, value: string): void;
    function set(key: string, value: string, callback: AsyncCallback<void>): void;
    function set(key: string, value: string): Promise<void>;
}

export default systemParameter;
