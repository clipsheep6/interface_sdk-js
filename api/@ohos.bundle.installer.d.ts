/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';

/**
 * Support install, upgrade, remove and recover bundles on the devices.
 * @namespace installer
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi Hide this for inner system use
 * @since 9
 */
declare namespace installer {
  /**
   * @name InstallErrorCode
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @import NA
   * @permission NA
   */
  export enum InstallErrorCode{
    SUCCESS = 0,
    STATUS_INSTALL_FAILURE = 1,
    STATUS_INSTALL_FAILURE_ABORTED = 2,
    STATUS_INSTALL_FAILURE_INVALID = 3,
    STATUS_INSTALL_FAILURE_CONFLICT = 4,
    STATUS_INSTALL_FAILURE_STORAGE = 5,
    STATUS_INSTALL_FAILURE_INCOMPATIBLE = 6,
    STATUS_UNINSTALL_FAILURE = 7,
    STATUS_UNINSTALL_FAILURE_BLOCKED = 8,
    STATUS_UNINSTALL_FAILURE_ABORTED = 9,
    STATUS_UNINSTALL_FAILURE_CONFLICT = 10,
    STATUS_INSTALL_FAILURE_DOWNLOAD_TIMEOUT = 0x0B,
    STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED = 0x0C,
    STATUS_RECOVER_FAILURE_INVALID = 0x0D,
    STATUS_ABILITY_NOT_FOUND = 0x40,
    STATUS_BMS_SERVICE_ERROR = 0x41,
    STATUS_FAILED_NO_SPACE_LEFT = 0x42,
    STATUS_GRANT_REQUEST_PERMISSIONS_FAILED = 0x43,
    STATUS_INSTALL_PERMISSION_DENIED = 0x44,
    STATUS_UNINSTALL_PERMISSION_DENIED = 0x45,
  }

  /**
   * @name Indicates the install or uninstall status
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @permission NA
   * @systemapi Hide this for inner system use
   */
  export interface InstallStatus {
    /**
    * @default Indicates the install or uninstall error code
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
    status: InstallErrorCode;

    /**
    * @default Indicates the install or uninstall result string message
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
    statusMessage: string;
  }

  /**
   * @name Provides parameters required for hashParam.
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @permission NA
   * @systemapi Hide this for inner system use
   */
  export interface HashParam {
    /**
      * @default Indicates the moduleName
      * @since 9
      * @syscap SystemCapability.BundleManager.BundleFramework.Core
      */
    moduleName: string;
  
    /**
      * @default Indicates the hash value
      * @since 9
      * @syscap SystemCapability.BundleManager.BundleFramework.Core
      */
    hashValue: string;
  }

  /**
   * @name Provides parameters required for installing or uninstalling an application.
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @permission NA
   * @systemapi Hide this for inner system use
   */
  export interface InstallParam {
    /**
     * @default Indicates the user id
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     */
    userId: number;

    /**
     * @default Indicates the install flag
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     */
    installFlag: number;

    /**
     * @default Indicates whether the param has data
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     */
    isKeepData: boolean;

    /**
     * @default Indicates the hash params
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     */
    hashParams?: Array<HashParam>;

    /**
     * @default Indicates the deadline of the crowdtesting bundle
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     */
    crowdtestDeadline?: number;
  }

  /**
   * Install haps for an application.
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param {Array<string>} hapFilePaths - Indicates the path where the hap of the application is stored.
   * @param {InstallParam} installParam - Indicates other parameters required for the installation.
   * @param {AsyncCallback} callback - The callback of installing haps result.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi Hide this for inner system use
   * @since 9
   */
  function install(hapFilePaths: Array<string>, installParam: InstallParam, callback: AsyncCallback<void>) : void;

  /**
   * Uninstall an application.
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param {string} bundleName - Indicates the bundle name of the application to be uninstalled.
   * @param {InstallParam} installParam - Indicates other parameters required for the uninstallation.
   * @param {AsyncCallback} callback - The callback of uninstalling application result.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi Hide this for inner system use
   * @since 9
   */
  function uninstall(bundleName: string, installParam: InstallParam, callback : AsyncCallback<void>) : void;

  /**
   * recover an application.
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param {string} bundleName - Indicates the bundle name of the application to be uninstalled.
   * @param {InstallParam} installParam - Indicates other parameters required for the uninstallation.
   * @param {AsyncCallback} callback - The callback of recoverring application result.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi Hide this for inner system use
   * @since 9
   */
  function recover(bundleName: string, installParam: InstallParam, callback: AsyncCallback<void>): void;
}

export default installer;
