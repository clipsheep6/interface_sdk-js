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

import { AsyncCallback } from "./basic";
import Want from "./@ohos.application.Want";
import wifi from "./@ohos.wifi";

/**
 * This module offers set wifi policies on the devices.
 * @namespace wifiManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
declare namespace wifiManager {

  /**
   * Disables the wifi of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @since 9
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } isDisabled - True if disable the wifi of the device, otherwise false.
   * @param { AsyncCallback<void> } callback - the callback of setWifiDisabled.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setWifiDisabled(admin: Want, isDisabled: boolean, callback: AsyncCallback<void>): void;
  /**
   * Disables the wifi of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @since 9
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } isDisabled - True if disable the wifi of the device, otherwise false.
   * @returns { Promise<void> } the promise returned by setWifiDisabled.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setWifiDisabled(admin: Want, isDisabled: boolean): Promise<void>;

  /**
   * Gets state of whether the wifi is disabled.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<boolean> } callback - the callback of isWifiDisabled.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isWifiDisabled(admin: Want, callback: AsyncCallback<boolean>): void;
  /**
   * Gets state of whether the wifi is disabled.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<boolean> } the promise returned by isWifiDisabled.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isWifiDisabled(admin: Want): Promise<boolean>;

  /**
   * Sets the wifi profile.
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { wifi.WifiDeviceConfig } config - config indicates the configuration of wifi.
   * @param { AsyncCallback<void> } callback - the callback of setWifiProfile.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setWifiProfile(admin: Want, config: wifi.WifiDeviceConfig, callback: AsyncCallback<void>): void;
  /**
   * Sets the wifi profile.
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { wifi.WifiDeviceConfig } config - config indicates the configuration of wifi.
   * @returns { Promise<void> } the promise returned by setWifiProfile.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setWifiProfile(admin: Want, config: wifi.WifiDeviceConfig): Promise<void>;
}

export default wifiManager;