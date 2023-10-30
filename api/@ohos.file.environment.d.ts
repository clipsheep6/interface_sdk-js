/*
 * Copyright (C) 2021-2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback } from './@ohos.base';

/**
 * Provides Environment APIs.
 *
 * @namespace Environment
 * @syscap SystemCapability.FileManagement.File.Environment
 * @systemapi
 * @since 8
 */
declare namespace Environment {
  /**
   * Enumerates the directory types.
   *
   * @enum { number } DirectoryType
   * @syscap SystemCapability.FileManagement.File.Environment
   * @since 11
   */
  export enum DirectoryType {
    /**
     * Indicates download directory.
     *
     * @syscap SystemCapability.FileManagement.File.Environment
     * @since 11
     */
    DOWNLOAD = 0,
    /**
     * Indicates desktop directory.
     *
     * @syscap SystemCapability.FileManagement.File.Environment
     * @since 11
     */
    DESKTOP = 1,
    /**
     * Indicates documents directory.
     *
     * @syscap SystemCapability.FileManagement.File.Environment
     * @since 11
     */
    DOCUMENTS = 2
  }

  /**
   * Get the user data path.
   *
   * @returns { Promise<string> } return Promise
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi
   * @since 8
   */
  function getStorageDataDir(): Promise<string>;

  /**
   * Get the user data path.
   *
   * @param { AsyncCallback<string> } [callback] - callback
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi
   * @since 8
   */
  function getStorageDataDir(callback: AsyncCallback<string>): void;

  /**
   * Get the User storage path.
   *
   * @returns { Promise<string> } return Promise
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi
   * @since 8
   */
  function getUserDataDir(): Promise<string>;

  /**
   * Get the User storage path.
   *
   * @param { AsyncCallback<string> } [callback] - callback
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi
   * @since 8
   */
  function getUserDataDir(callback: AsyncCallback<string>): void;

  /**
   * Get the sandbox path to the public directory.
   *
   * @permission ohos.permission.READ_WRITE_DOWNLOAD or ohos.permission.READ_WRITE_DESKTOP or ohos.permission.READ_WRITE_DOCUMENTS
   * @returns { string } Return the sandbox path to the common directory.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @since 11
   */
  function getUserPublicDir(type: DirectoryType): string;

  /**
   * Get the sandbox directory of the current user root.
   *
   * @returns { string } Return the sandbox directory of the current user root.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function getUserHomeDir(): string;

  /**
   * Get the sandbox directory of the wild card root.
   *
   * @returns { string } Return the sandbox directory of the wild card root.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function getExternalUsbDir(): string;

  /**
   * Get the sandbox directory that shares the root directory.
   *
   * @returns { string } Return the sandbox directory that shares the root directory.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function getUserShareDir(): string;

  /**
   * Gets the sandbox path of the current user's installed app directory.
   *
   * @returns { string } Return the sandbox path of the current user's installed app directory.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900012 - Permitted denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function getUserAppDataDir(): string;
}

export default Environment;
