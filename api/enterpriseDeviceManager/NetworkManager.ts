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

/**
 * @name Offers set network policies on the devices.
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
export interface NetworkManager {

  /**
   * Gets all of the network interfaces of the device.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @return Returns the list of network interfaces.
   * @permission ohos.permission.EDM_MANAGE_NETWORK
   */
  getAllNetworkInterfaces(admin: Want, callback: AsyncCallback<Array<string>>): void;
  getAllNetworkInterfaces(admin: Want): Promise<Array<string>>;

  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param networkInterface Indicates the network interface to get ip address.
   * @return Returns the list of ip address.
   * @permission ohos.permission.EDM_MANAGE_NETWORK
   */
  getIpAddress(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;
  getIpAddress(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param networkInterface Indicates the network interface to get mac address.
   * @return Returns the list of mac address.
   * @permission ohos.permission.EDM_MANAGE_NETWORK
   */
  getMac(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;
  getMac(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Gets the status of the network interface.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param networkInterface Indicates the network interface to get status.
   * @return {@code true} if the network interface is open.
   * @permission ohos.permission.EDM_MANAGE_NETWORK
   */
  getNetworkInterfaceStatus(admin: Want, networkInterface: string, callback: AsyncCallback<boolean>): void;
  getNetworkInterfaceStatus(admin: Want, networkInterface: string): Promise<boolean>;

  /**
   * Disables the network interfaces.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param networkInterface Indicates the network interface to get mac address.
   * @param isDisabled True if disable the network interfaces, otherwise false.
   * @return {@code true} if disables success.
   * @permission ohos.permission.EDM_MANAGE_NETWORK
   */
  setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean, callback: AsyncCallback<boolean>): void;
  setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean): Promise<boolean>;
}