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

import { AsyncCallback, Callback } from './@ohos.base';
import { Permissions } from './permissions';
import { Context } from './application/Context';
import { PermissionRequestResult } from './security/PermissionRequestResult';

/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @since 8
 */
declare namespace abilityAccessCtrl {
  /**
   * Obtains the AtManager instance.
   *
   * @returns { AtManager } Returns the instance of the AtManager.
   * @syscap SystemCapability.Security.AccessToken
   * @since 8
   */
  /**
   * Obtains the AtManager instance.
   *
   * @returns { AtManager } returns the instance of the AtManager.
   * @syscap SystemCapability.Security.AccessToken
   * @crossplatform
   * @since 10
   */
  function createAtManager(): AtManager;

  /**
   * Provides methods for managing access_token.
   *
   * @interface AtMa
   * @syscap SystemCapability.Security.AccessToken
   * @since 8
   */
  interface AtManager {
    /**
     * Checks whether a specified application has been granted the given permission.
     *
     * @param { number } tokenID - Token ID of the application.
     * @param { number } permissionName - Name of the permission to be verified.
     * @returns { Promise<GrantStatus> } Returns permission verify result.
     * @syscap SystemCapability.Security.AccessToken
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.abilityAccessCtrl.AtManager#checkAccessToken
     */
    verifyAccessToken(tokenID: number, permissionName: string): Promise<GrantStatus>;

    /**
     * Checks whether a specified application has been granted the given permission synchronously.
     *
     * @param { number } tokenID - Token ID of the application.
     * @param { Permissions } permissionName - Name of the permission to be verified.
     * @returns { GrantStatus } Returns permission verify result.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws  12100001 - The parameter is invalid. The tokenID is 0, or the string size of permissionName is larger than 256.
     * @syscap SystemCapability.Security.AccessToken
     * @since 9
     */
    verifyAccessTokenSync(tokenID: number, permissionName: Permissions): GrantStatus;

  }
}

export default abilityAccessCtrl;
export { Permissions };
