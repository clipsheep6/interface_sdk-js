/*
* Copyright (C) 2022 Huawei Device Co., Ltd.
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

import {AsyncCallback, Callback} from "./basic";

/**
 * Provides fileshare APIS
 *
 * @since 9
 * @syscap SystemCapability.FileManagement.AppFileService
 */
declare namespace fileShare {

/**
   * Provides grant uri permission for app
   * 
   * @since 9
   * @param {string} uri uri
   * @param {string} bundleName bundleName
   * @param {number} mode mode to uri
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @throws { BusinessError } 142000001  - IPC error.
   * @syscap SystemCapability.FileManagement.AppFileService
   * @systemapi
   */
function grantUriPermission(uri: string, bundleName: string, mode: number, callback: AsyncCallback<void>): void;
function grantUriPermission(uri: string, bundleName: string, mode: number): Promise<void>;
}

export default fileShare;
