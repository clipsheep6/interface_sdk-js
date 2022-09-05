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
 * @systemapi
 * @since 9
 */
declare namespace installer {
  /**
   * Obtains the interface used to install bundle.
   * @param { AsyncCallback } callback - The callback of BundleInstaller object.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void

  /**
   * Obtains the interface used to install bundle.
   * @param { AsyncCallback } callback - The callback of getting a list of BundleInstaller objects.
   * @returns { Promise<BundleInstaller> } BundleInstaller object.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleInstaller(): Promise<BundleInstaller>;

  /**
   * Bundle installer interface, include install uninstall recover.
   * @interface BundleInstaller
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  interface BundleInstaller {
    /**
     * Install haps for an application.
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { Array<string> } hapFilePaths - Indicates the path where the hap of the application is stored.
     * @param { InstallParam } installParam - Indicates other parameters required for the installation.
     * @param { AsyncCallback } callback - The callback of installing haps result.
     * @throws { BusinessError } If the input parameter is not valid parameter.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    install(hapFilePaths: Array<string>, installParam: InstallParam, callback: AsyncCallback<void>) : void;

    /**
     * Uninstall an application.
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Indicates the bundle name of the application to be uninstalled.
     * @param { InstallParam } installParam - Indicates other parameters required for the uninstallation.
     * @param { AsyncCallback } callback - The callback of uninstalling application result.
     * @throws { BusinessError } If the input parameter is not valid parameter.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    uninstall(bundleName: string, installParam: InstallParam, callback : AsyncCallback<void>) : void;
 
    /**
     * recover an application.
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Indicates the bundle name of the application to be uninstalled.
     * @param { InstallParam } installParam - Indicates other parameters required for the uninstallation.
     * @param { AsyncCallback } callback - The callback of recoverring application result.
     * @throws { BusinessError } If the input parameter is not valid parameter.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    recover(bundleName: string, installParam: InstallParam, callback: AsyncCallback<void>): void;
  }

  /**
   * Install error code
   * @enum {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export enum InstallErrorCode{
    /**
     * success
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    SUCCESS = 0,

    /**
     * install failed
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_INSTALL_FAILURE = 1,

    /**
     * install failure aborted
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_INSTALL_FAILURE_ABORTED = 2,
  
    /**
     * install failure invalid
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_INSTALL_FAILURE_INVALID = 3,

    /**
     * install failure conflict
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_INSTALL_FAILURE_CONFLICT = 4,

    /**
     * install failure storage
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_INSTALL_FAILURE_STORAGE = 5,

    /**
     * install failure incompatible
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_INSTALL_FAILURE_INCOMPATIBLE = 6,

    /**
     * uninstall failure
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_UNINSTALL_FAILURE = 7,

    /**
     * uninstall failure blocked
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_UNINSTALL_FAILURE_BLOCKED = 8,

    /**
     * uninstall failure aborted
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_UNINSTALL_FAILURE_ABORTED = 9,

    /**
     * uninstall failure conflict
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_UNINSTALL_FAILURE_CONFLICT = 10,

    /**
     * install failure download timeout
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_INSTALL_FAILURE_DOWNLOAD_TIMEOUT = 0x0B,

    /**
     * install failure download failed
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED = 0x0C,

    /**
     * install recover failure invalid
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_RECOVER_FAILURE_INVALID = 0x0D,

    /**
     * ability not found
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_ABILITY_NOT_FOUND = 0x40,

    /**
     * bms service error
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_BMS_SERVICE_ERROR = 0x41,

    /**
     * no space left
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_FAILED_NO_SPACE_LEFT = 0x42,

    /**
     * grant request permissions failed
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_GRANT_REQUEST_PERMISSIONS_FAILED = 0x43,

    /**
     * install permission denied
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_INSTALL_PERMISSION_DENIED = 0x44,

    /**
     * uninstall permission denied
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    STATUS_UNINSTALL_PERMISSION_DENIED = 0x45,
  }

  /**
   * Indicates the install or uninstall status
   * @typedef InstallStatus
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  export interface InstallStatus {
    /**
    * Indicates the install or uninstall error code
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
    status: InstallErrorCode;

    /**
    * Indicates the install or uninstall result string message
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
    statusMessage: string;
  }

  /**
   * Provides parameters required for hashParam.
   * @typedef HashParam
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  export interface HashParam {
    /**
     * Indicates the moduleName
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    moduleName: string;
  
    /**
     * Indicates the hash value
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    hashValue: string;
  }

  /**
   * Provides parameters required for installing or uninstalling an application.
   * @typedef InstallParam
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  export interface InstallParam {
    /**
     * Indicates the user id
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    userId: number;

    /**
     * Indicates the install flag
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    installFlag: number;

    /**
     * Indicates whether the param has data
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    isKeepData: boolean;

    /**
     * Indicates the hash params
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    hashParams?: Array<HashParam>;

    /**
     * Indicates the deadline of the crowdtesting bundle
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    crowdtestDeadline?: number;
  }
}

export default installer;
