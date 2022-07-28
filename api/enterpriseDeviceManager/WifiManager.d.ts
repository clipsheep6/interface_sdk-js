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

import { AsyncCallback } from "./../basic";
import Want from "./../@ohos.application.Want";
import wifi from "../@ohos.wifi";

/**
 * @name Offers set wifi policies on the devices.
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
export interface WifiManager {

  /**
   * Disables the wifi of the device.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param isDisabled True if disable the wifi of the device, otherwise false.
   * @return {@code true} if disables success.
   * @permission ohos.permission.EDM_MANAGE_WIFI
   */
  setWifiDisabled(admin: Want, isDisabled: boolean, callback: AsyncCallback<boolean>): void;
  setWifiDisabled(admin: Want, isDisabled: boolean): Promise<boolean>;

  /**
   * Gets state of whether the wifi is disabled.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @return {@code true} if disabled.
   * @permission ohos.permission.EDM_MANAGE_WIFI
   */
  isWifiDisabled(admin: Want, callback: AsyncCallback<boolean>): void;
  isWifiDisabled(admin: Want): Promise<boolean>;

  /**
   * Sets the wifi profile.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param config Indicates the configuration of wifi.
   * @return {@code true} if set success.
   * @permission ohos.permission.EDM_MANAGE_WIFI
   */
  setWifiProfile(admin: Want, config: wifi.WifiDeviceConfig, callback: AsyncCallback<boolean>): void;
  setWifiProfile(admin: Want, config: wifi.WifiDeviceConfig): Promise<boolean>;
}