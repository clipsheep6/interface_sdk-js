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
   * System update policy.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  enum UpdatePolicy {
    /**
     * Default update policy
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    DEFAULT = 0,

    /**
     * Prohibit update policy
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    PROHIBIT = 1,

    /**
     * Update to specific version policy
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    UPDATE_TO_SPECIFIC_VERSION = 2
  }

  /**
   * Device update time.
   *
   * @typedef UpdateTime
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface UpdateTime {
    /**
     * Device latest update version time
     *
     * @type { PowerPolicyAction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    latestUpdateTime: number;

    /**
     * The begin time of device install version.
     *
     * @type { PowerPolicyAction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    installBeginTime: number;

    /**
     * The end time of device install version.
     *
     * @type { PowerPolicyAction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    installEndTime: number;
  }

  /**
   * OTA update policy.
   *
   * @typedef OTAUpdatePolicy
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface OTAUpdatePolicy {
    /**
     * Device update type.
     *
     * @type { PowerPolicyAction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    updateType: UpdatePolicy;

    /**
     * Device version.
     *
     * @type { PowerPolicyAction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    version: string;

    /**
     * The time of device install version.
     *
     * @type { PowerPolicyAction }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    installTime: UpdateTime;
  }

  /**
   * Adds resource suppression exemption app list.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - the appid list of Nap resource suppression exemption.
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
  function addNapExemptedApps(admin: Want, appIds: Array<string>): void;

  /**
   * Removes resource suppression exemption app list.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - the appid list of Nap resource suppression exemption.
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
  function removeNapExemptedApps(admin: Want, appIds: Array<string>): void;

  /**
   * Gets the appid list of Nap resource suppression exemption.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Array<string> } the appid list of Nap resource suppression exemption.
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
  function getNapExemptedApps(admin: Want): Array<string>;

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
   * Sets app trust list of DLP.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - DLP trust appID list.
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
  function setDLPTrustApps(admin: Want, appIds: Array<string>): void;

  /**
   * Gets appid list of DLP trust apps.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Array<string> } DLP trust appID list.
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
  function getDLPTrustApps(admin: Want): Array<string>;

  /**
   * Sets device OTA update policy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { OTAUpdatePolicy } policy - OTA update policy.
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
  function setOTAUpdatePolicy(admin: Want, policy: OTAUpdatePolicy): void;

  /**
   * Gets device OTA update policy.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SYSTEM
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { OTAUpdatePolicy } OTA update policy.
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
  function getOTAUpdatePolicy(admin: Want): OTAUpdatePolicy;
}

export default systemManager;
