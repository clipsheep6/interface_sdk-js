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
 * @since 10
 * @syscap SystemCapability.MultimodalInput.Input.Shortkey
 * @systemapi hide for inner use
 */
declare namespace shortKey {
    /**
     * Set short key down duration.
     * @since 10
     * @syscap SystemCapability.MultimodalInput.Input.Shortkey
     * @systemapi hide for inner use
     * @param businessKey The key for business which should be applied to MMI.
     * @param delay Duration of short key press which should be limited to 0-4000ms.
     * @param callback Callback used to return the result.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function setKeyDownDuration(businessKey: string, delay: number, callback: AsyncCallback<void>): void;
    /**
     * Sets key down duration.
     * @since 10
     * @syscap SystemCapability.MultimodalInput.Input.Shortkey
     * @systemapi hide for inner use
     * @param businessKey The key for business which should be applied to MMI.
     * @param delay Duration of short key press which should be limited to 0-4000ms.
     * @returns Returns the result through a promise.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function setKeyDownDuration(businessKey: string, delay: number): Promise<void>;

}
export default shortKey;
