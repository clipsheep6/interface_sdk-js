/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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
import {AsyncCallback} from "./@ohos.base";

/**
 * Provides filePermission APIS
 *
 * @namespace filePermission
 * @syscap SystemCapability.FileManagement.HMSFile
 * @since 11
 */
declare namespace filePermission {
  /**
   * Enumerates the uri access rights types.
   *
   * @enum { number } ModeSetting
   * @syscap SystemCapability.FileManagement.HMSFile
   * @since 11
   */
  export enum ModeSetting {
    /**
     * Indicates the read and write permissions.
     *
     * @syscap SystemCapability.FileManagement.HMSFile
     * @since 11
     */
    O_RDWR = 0o2,
  }

  /**
   * Set the selected URI temporary permissions
   *
   * @param { string } uri the uri that require authorization
   * @param { number } tokenId the tokenid of app
   * @param { ModeSetting } mode the type of access rights
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function grantPolicy(uri: string, tokenId: number, mode: ModeSetting): Promise<void>;

  /**
   * Set the selected URI temporary permissions
   *
   * @param { string } uri the uri that require authorization
   * @param { number } tokenId the tokenid of app
   * @param { ModeSetting } mode the type of access rights
   * @param { AsyncCallback<void> } callback - the callback of grantPolicy.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function grantPolicy(uri: string, tokenId: number, mode: ModeSetting, callback: AsyncCallback<void>): void;

  /**
   * Set persistence permissions for the URI
   *
   * @param { string } uri the uri that require authorization
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { ModeSetting } mode the type of access rights
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function persistPermission(uri: string, mode: ModeSetting): Promise<void>;

  /**
   * Set persistence permissions for the URI
   *
   * @param { string } uri the uri that require authorization
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { ModeSetting } mode the type of access rights
   * @param { AsyncCallback<void> } callback - the callback of persistPermission.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function persistPermission(uri: string, mode: ModeSetting, callback: AsyncCallback<void>): void;

  /**
   * Desist persistence permissions for the URI
   *
   * @param { string } uri the uri that require authorization
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { ModeSetting } mode the type of access rights
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function desistPersistPermission(uri: string, mode: ModeSetting): Promise<void>;

  /**
   * Desist persistence permissions for the URI
   *
   * @param { string } uri the uri that require authorization
   * @permission ohos.permission.FILE_ACCESS_PERSIST
   * @param { ModeSetting } mode the type of access rights
   * @param { AsyncCallback<void> } callback - the callback of grantPolicy.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function desistPersistPermission(uri: string, mode: ModeSetting, callback: AsyncCallback<void>): void;

  /**
   * Enable the URI that have been permanently authorized
   *
   * @param { string } uri the uri that require authorization
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function activateAccessingUri(uri: string): Promise<void>;

  /**
   * Enable the URI that have been permanently authorized
   *
   * @param { string } uri the uri that require authorization
   * @param { AsyncCallback<void> } callback - the callback of activateAccessingUri.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function activateAccessingUri(uri: string, callback: AsyncCallback<void>): void;

  /**
   * Stop the authorized URI that has been enabled
   *
   * @param { string } uri the uri that require authorization
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function deactivateAccessingUri(uri: string): Promise<void>;

  /**
   * Stop the authorized URI that has been enabled
   *
   * @param { string } uri the uri that require authorization
   * @param { AsyncCallback<void> } callback - the callback of deactivateAccessingUri.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  function deactivateAccessingUri(uri: string, callback: AsyncCallback<void>): void;
}

export default filePermission;
