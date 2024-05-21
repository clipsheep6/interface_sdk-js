/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * This module provides some special features to the file manager.
 *
 * @namespace fileSpecialRecord
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 10
 */
declare namespace fileSpecialRecord {
  /**
   * FileInfo Object
   *
   * @interface FileInfo
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  interface FileInfo {
    /**
     * Indicates the uri of the file.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    uri: string;

    /**
     * Indicates the source path of the file.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    sourceFilePath: string;

    /**
     * Indicates the name of the file.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    fileName: string;

    /**
     * Indicates the mode of the file.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    mode: number;

    /**
     * Indicates the size of the file.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    size: number;
    
    /**
     * Indicates the mtime of the file.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    mtime: number;
  }

  /**
   * RootInfo Object
   *
   * @interface RootInfo
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */  
  interface RootInfo {
    /**
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    uri: string;

    /**
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    displayName: string;

    /**
     * List files in the current directory.
     *
     * @returns { Array<FileInfo> } Returns the next level FileInfo Object.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10
     */
    listFile(): Array<FileInfo>;
  }

  /**
   * Get a RootInfo object of Trash in the promise way.
   * 
   * @returns { Promise<RootInfo> } Returns a RootInfo.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getTrashRoot(): Promise<RootInfo>;

  /**
   * Get a RootInfo object of Trash in the asyncCallback way.
   * 
   * @param { AsyncCallback<RootInfo> } callback - The callback is used to return a RootInfo.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getTrashRoot(callback: AsyncCallback<RootInfo>): void;

  /**
   * TRASH_REQUEST_TYPE represents the operation way for Trash.
   * 
   * @enum { number } TRASH_REQUEST_TYPE
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  enum TRASH_REQUEST_TYPE {
    /**
     * Completeley delete a file in the Trash.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    COMPLETELY_DELETE,

    /**
     * Recovery a file in the Trash.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    RECOVERY
  }

  /**
   * Delete a file completely or restore a file in the promise way.
   * 
   * @param { string } uri - The identity of a file.
   * @param { TRASH_REQUEST_TYPE } mode - The operation way of the recently deleted directory.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function MakeTrashRequest(uri: string, mode: TRASH_REQUEST_TYPE): Promise<void>;

  /**
   * Delete a file completely or restore a file in the asyncCallback way.
   * 
   * @param { string } uri - The identity of a file.
   * @param { TRASH_REQUEST_TYPE } mode - The operation way of the recently deleted directory.
   * @param { AsyncCallback<void> } [callback] - callback.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function MakeTrashRequest(uri: string, mode: TRASH_REQUEST_TYPE, callback: AsyncCallback<void>): void;


  /**
   * Get a RootInfo object of Recent in the promise way.
   *
   * @returns { Promise<RootInfo> } Returns a RootInfo.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getRecentRoot(): Promise<RootInfo>;

  /**
   * Get a RootInfo object of Recent in the asyncCallback way.
   * 
   * @param { AsyncCallback<RootInfo> } callback - The callback is used to return a RootInfo.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getRecentRoot(callback: AsyncCallback<RootInfo>): void;
  
  /**
   * RECENT_REQUEST_TYPE represents the operation way for Recent.
   * 
   * @enum { number } RECENT_REQUEST_TYPE
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  enum RECENT_REQUEST_TYPE {
    /**
     * Add a file in the Recent.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    ADD,
    
    /**
     * Delete a file in the Recent.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10
     */
    DELETE
  }
 
  /**
   * Add a file or delete a file in the promise way.
   * 
   * @param { string } uri - The identity of a file.
   * @param { RECENT_REQUEST_TYPE } mode - The operation way of the recently visited directory.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function MakeRecentRequest(uri: string, mode: RECENT_REQUEST_TYPE): Promise<void>;
  
  /**
   * Add a file or delete a file in the asyncCallback way.
   * 
   * @param { string } uri - The identity of a file.
   * @param { RECENT_REQUEST_TYPE } mode - The operation way of the recently visited directory.
   * @param { AsyncCallback<void> } [callback] - callback.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function MakeRecentRequest(uri: string, mode: RECENT_REQUEST_TYPE, callback: AsyncCallback<void>): void;
}

export default fileSpecialRecord;