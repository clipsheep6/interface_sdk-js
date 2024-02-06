/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit MDMKit
 */

import type Want from './@ohos.app.ability.Want';

/**
 * This module provides the capability to manage the system of the enterprise devices.
 *
 * @namespace systemManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 11
 */
declare namespace systemManager {
  /**
   * The device system update info.
   *
   * @typedef SystemUpdateInfo
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface SystemUpdateInfo {
    /**
     * The name of version need to update.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    versionName: string;

    /**
     * The time when the version first received.
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    firstReceivedTime: number;

    /**
     * The type of version package.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    packageType: string;
  }

  /**
   * The device system upgrade package info.
   *
   * @typedef UpgradePackageInfo
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface UpgradePackageInfo {
    /**
     * The version of system upgrade package.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    version: string;

    /**
     * The detail of system upgrade packages.
     *
     * @type { Array<Package> }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    packages: Array<Package>;

    /**
     * The description of system upgrade package.
     *
     * @type { ?PackageDescription }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    description?: PackageDescription;
  }

  /**
   * The detail of system upgrade package.
   *
   * @typedef Package
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface Package {
    /**
     * The type of system upgrade package.
     *
     * @type { PackageType }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    type: PackageType;

    /**
     * The path of system upgrade package.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    path: string;
  }

  /**
   * Enum for system upgrade package.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum PackageType {
    /**
     * FIRMWARE
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    FIRMWARE = 1
  }

  /**
   * The description of system upgrade package.
   *
   * @typedef PackageDescription
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface PackageDescription {
    /**
     * The custom notification of system upgrade package.
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    notify?: NotifyDescription;
  }

  /**
   * The custom notification of system upgrade package.
   *
   * @typedef NotifyDescription
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface NotifyDescription {
    /**
     * The custom notification tips of system upgrade package.
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installTips?: string;

    /**
     * The custom notification tips detail of system upgrade package.
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    installTipsDetail?: string;
  }

  /**
   * The result of system upgrade.
   *
   * @typedef UpgradeResult
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface UpgradeResult {
    /**
     * The current version of the system.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    version: string;

    /**
     * The upgrade status of the system.
     *
     * @type { UpgradeStatus }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    status: UpgradeStatus;

    /**
     * The upgrade error message of the system.
     *
     * @type { UpgradeStatus }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    errorInfo: ErrorInfo;
  }

  /**
   * Enum for system upgrade status.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  enum UpgradeStatus {
    /**
     * The specified version system update package does not exist.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    NO_UPGRADE_PACKAGE = -4,

    /**
     * The system update package waiting for installation.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPGRADE_WAITING = -3,

    /**
     * The system is updating.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPGRADING = -2,

    /**
     * The system upgrade failed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPGRADE_FAILURE = -1,

    /**
     * The system upgrade successful.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    UPGRADE_SUCCESS = 0
  }

  /**
   * The upgrade error information of the system.
   *
   * @typedef ErrorInfo
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  interface ErrorInfo {
    /**
     * The upgrade error code of the system.
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    code: number;

    /**
     * The upgrade error message of the system.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    message: string;
  }

  /**
   * Sets NTP server.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } server - the address of NTP server.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function setNTPServer(admin: Want, server: string): void;

  /**
   * Gets NTP server.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { string } the address of NTP server.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function getNTPServer(admin: Want): string;

  /**
   * Notifies the system of upgrade packages information.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { UpgradePackageInfo } packageInfo - packageInfo indicates the information of system upgrade package.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function notifyUpgradePackages(admin: Want, packageInfo: UpgradePackageInfo): void;

  /**
   * Gets the result of system upgrade.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } admin - admin indicates the administrator ability information.
   * @returns { Promise<UpgradeResult> } the promise returned by the getUpgradeResult.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getUpgradeResult(admin: Want, version: string): Promise<UpgradeResult>;
}

export default systemManager;