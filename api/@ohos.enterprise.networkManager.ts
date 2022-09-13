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

/**
 * This module offers set network policies on the devices.
 * @namespace networkManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
declare namespace networkManager {

  /**
   * Gets all of the network interfaces of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getAllNetworkInterfaces.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getAllNetworkInterfaces(admin: Want, callback: AsyncCallback<Array<string>>): void;
  /**
   * Gets all of the network interfaces of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<Array<string>> } the promise returned by getAllNetworkInterfaces.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getAllNetworkInterfaces(admin: Want): Promise<Array<string>>;

  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get ip address.
   * @param { AsyncCallback<string> } callback - the callback of getIpAddress.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getIpAddress(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;
  /**
   * Gets the ip address of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get ip address.
   * @returns { Promise<string> } the promise returned by getIpAddress.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getIpAddress(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @param { AsyncCallback<string> } callback - the callback of getMac.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getMac(admin: Want, networkInterface: string, callback: AsyncCallback<string>): void;
  /**
   * Gets the mac address of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @returns { Promise<string> } the promise returned by getMac.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getMac(admin: Want, networkInterface: string): Promise<string>;

  /**
   * Gets the status of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get status.
   * @param { AsyncCallback<boolean> } callback - the callback of getNetworkInterfaceStatus.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getNetworkInterfaceStatus(admin: Want, networkInterface: string, callback: AsyncCallback<boolean>): void;
  /**
   * Gets the status of the network interface.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_NETWORK_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get status.
   * @returns { Promise<boolean> } the promise returned by getNetworkInterfaceStatus.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getNetworkInterfaceStatus(admin: Want, networkInterface: string): Promise<boolean>;

  /**
   * Disables the network interfaces.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @param { boolean } isDisabled - True if disable the network interfaces, otherwise false.
   * @param { AsyncCallback<void> } callback - the callback of setNetworkInterfaceDisabled.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean, callback: AsyncCallback<void>): void;
  /**
   * Disables the network interfaces.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_NETWORK
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } networkInterface - networkInterface indicates the network interface to get mac address.
   * @param { boolean } isDisabled - True if disable the network interfaces, otherwise false.
   * @returns { Promise<void> } the promise returned setNetworkInterfaceDisabled.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setNetworkInterfaceDisabled(admin: Want, networkInterface: string, isDisabled: boolean): Promise<void>;
}

export default networkManager;