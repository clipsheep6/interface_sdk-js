/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
import image from './@ohos.multimedia.image';

/**
 * This module provides the capability to manage the security of the enterprise devices.
 *
 * @namespace securityManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 11
 */
declare namespace securityManager {
  /**
   * The device encryption status.
   *
   * @typedef DeviceEncryptionStatus
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface DeviceEncryptionStatus {
    /**
     * True indicates device is encrypted.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    isEncrypted: boolean;
  }

  /**
   * User certificate data.
   *
   * @typedef CertBlob
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface CertBlob {
    /**
     * The certificate content
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    inData: Uint8Array;

    /**
     * The certificate alias
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    alias: string;
  }

  /**
   * Password policy.
   *
   * @typedef PasswordPolicy
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface PasswordPolicy {
    /**
     * The regex of complexity
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    complexityRegex?: string;

    /**
     * Period of validity
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    validityPeriod?: number;

    /**
     * Other supplementary description
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    additionalDescription?: string;
  }

  /**
   * ClipBoard policy.
   *
   * @enum { number } ClipboardPolicy
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export enum ClipboardPolicy {
    /**
     * Policy default
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DEFAULT = 0,

    /**
     * Policy indicates that the clipboard can be used on the same application
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    IN_APP = 1,

    /**
     * Policy indicates that the clipboard can be used on the same device
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    LOCAL_DEVICE = 2,

    /**
     * Policy indicates that the clipboard can be used across device
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    CROSS_DEVICE = 3
  }

  /**
   * Gets device security patch tag.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { string } the security patch tag of the device.
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
  function getSecurityPatchTag(admin: Want): string;

  /**
   * Gets device encryption status.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { DeviceEncryptionStatus } device encryption status.
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
  function getDeviceEncryptionStatus(admin: Want): DeviceEncryptionStatus;

  /**
   * Gets device security policy of the specific type.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } item - item indicates the specific type of security policy.
   * @returns { string } security policy of the specific type.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getSecurityStatus(admin: Want, item: string): string;

  /**
   * Install user certificate.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { CertBlob } certificate - certificate file content and alias.
   * @returns { Promise<string> } the promise carries the uri of the certificate used to uninstall
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - manage certificate failed
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function installUserCertificate(admin: Want, certificate: CertBlob): Promise<string>;

  /**
   * Uninstall user certificate.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } certUri - uri of the certificate.
   * @returns { Promise<void> } the promise returned by the uninstallUserCertificate.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201001 - manage certificate failed
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function uninstallUserCertificate(admin: Want, certUri: string): Promise<void>;

  /**
   * Sets the password policy of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { PasswordPolicy } policy - password policy to be set.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setPasswordPolicy(admin: Want, policy: PasswordPolicy): void;

  /**
   * Gets the password policy of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { PasswordPolicy } the password policy of the device.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getPasswordPolicy(admin: Want): PasswordPolicy;

  /**
   * Sets the application's clipboard policy of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } tokenId - token id of the application.
   * @param { ClipboardPolicy } policy - clipboard policy to be set.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setAppClipboardPolicy(admin: Want, tokenId: string, policy: ClipboardPolicy): void;

  /**
   * Gets the application's clipboard policy of the device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } [tokenId] - token id of the application.
   * @returns { string } the json string of clipboard policy for each application of the device.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAppClipboardPolicy(admin: Want, tokenId?: string): string;

  /**
   * Sets the watermark image displayed during application running.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } bundleName - the bundle name of the application to be set watermark.
   * @param { string | image.PixelMap } source - watermark's pixelMap or its url.
   * @param { number } accountId - indicates the account ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setWatermarkImage(admin: Want, bundleName: string, source: string | image.PixelMap, accountId: number): void;

  /**
   * Cancels the watermark image displayed during application running.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SECURITY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } bundleName - the bundle name of the application to be cancel watermark.
   * @param { number } accountId - indicates the account ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function cancelWatermarkImage(admin: Want, bundleName: string, accountId: number): void;
}

export default securityManager;