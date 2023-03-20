/*
* Copyright (c) 2023 Huawei Device Co., Ltd.
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
import { AsyncCallback } from "./basic";
/**
 * Declares interfaces related to short key attributes.
 *
 * @since10
 * @syscap SystemCapability.MultimodalInput.Input.Shortkey
 */
declare namespace shortKey {
    /**
     * Sets key down duration.
     * @since 10
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @param key Ability Key.
     * @param delay Key Down Duration.
     * @param callback Callback used to return the result.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function setKeyDownDuration(key: string, delay: number, callback: AsyncCallback<void>): void;
    /**
     * Sets key down duration.
     * @since 10
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @param key Ability Key.
     * @param delay Key Down Duration.
     * @returns Returns the result through a promise.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function setKeyDownDuration(key: string, delay: number): Promise<void>;

}
export default shortKey;
