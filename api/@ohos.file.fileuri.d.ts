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
import uri from './@ohos.uri';
import {AsyncCallback} from "./@ohos.base";

/**
 * Provides fileUri APIS
 *
 * @namespace fileUri
 * @syscap SystemCapability.FileManagement.AppFileService
 * @since 9
 */
declare namespace fileUri {
  /**
   * Enumerates the uri access rights types.
   *
   * @enum { number } ModeSetting
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 11
   */
  export enum ModeSetting {
    /**
     * Indicates the read and write permissions.
     *
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    O_RDWR = 0o2,
  }

  /**
   * FileUri represents the uri of the file.
   *
   * @extends uri.URI
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 10
   */
  class FileUri extends uri.URI {
    /**
     * Constructor for obtaining the instance of the FileUri class.
     *
     * @param { string } uriOrPath - Uri or Path.
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 10
     */
    constructor(uriOrPath: string);

    /**
     * Obtains the file name of uri.
     *
     * @type { string }
     * @readonly
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 10
     */
    readonly name: string;

    /**
     * Set the selected URI temporary permissions
     *
     * @param { number } tokenId the tokenid of app
     * @param { ModeSetting } mode the type of access rights
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 202 - The application is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    setPolicy(tokenId: number, mode: ModeSetting): Promise<void>;

    /**
     * Set the selected URI temporary permissions
     *
     * @param { number } tokenId the tokenid of app
     * @param { ModeSetting } mode the type of access rights
     * @param { AsyncCallback<void> } callback - the callback of setPolicy.
     * @throws { BusinessError } 202 - The application is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    setPolicy(tokenId: number, mode: ModeSetting, callback: AsyncCallback<void>): void;

    /**
     * Set persistence permissions for the URI
     *
     * @permission ohos.permission.FILE_ACCESS_PERSIST
     * @param { ModeSetting } mode the type of access rights
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    persistPermission(mode: ModeSetting): Promise<void>;

    /**
     * Set persistence permissions for the URI
     *
     * @permission ohos.permission.FILE_ACCESS_PERSIST
     * @param { ModeSetting } mode the type of access rights
     * @param { AsyncCallback<void> } callback - the callback of setPolicy.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    persistPermission(mode: ModeSetting, callback: AsyncCallback<void>): void;

    /**
     * Remove persistence permissions for the URI
     *
     * @permission ohos.permission.FILE_ACCESS_PERSIST
     * @param { ModeSetting } mode the type of access rights
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    unPersistPermission(mode: ModeSetting): Promise<void>;

    /**
     * Remove persistence permissions for the URI
     *
     * @permission ohos.permission.FILE_ACCESS_PERSIST
     * @param { ModeSetting } mode the type of access rights
     * @param { AsyncCallback<void> } callback - the callback of setPolicy.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    unPersistPermission(mode: ModeSetting, callback: AsyncCallback<void>): void;

    /**
     * Enable the URI that have been permanently authorized
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    startAccessingURI(): Promise<void>;

    /**
     * Enable the URI that have been permanently authorized
     *
     * @param { AsyncCallback<void> } callback - the callback of setPolicy.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    startAccessingURI(callback: AsyncCallback<void>): void;

    /**
     * Stop the authorized URI that has been enabled
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    stopAccessingURI(): Promise<void>;

    /**
     * Stop the authorized URI that has been enabled
     *
     * @param { AsyncCallback<void> } callback - the callback of setPolicy.
     * @throws { BusinessError } 401 - The input parameter is invalid
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    stopAccessingURI(callback: AsyncCallback<void>): void;

    /**
     * Get the directory where the file URI is located
     *
     * @returns { string } Return the directory path
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permitted denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 9
     */
    getFileDirectory(): string;
  }
  
  /**
   * Get the uri from the path of file in app sandbox
   *
   * @param { string } path the path of file in app sandbox
   * @returns { string } Return the file uri
   * @throws { BusinessError } 401 - The input parameter is invalid
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 9
   */
  function getUriFromPath(path: string): string;
}

export default fileUri;
