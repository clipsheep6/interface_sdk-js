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
import type constant from './@ohos.bluetooth.constant';
import type access from './@ohos.bluetooth.access'

/**
 * This module provides the capability to manage the bluetooth of the enterprise devices.
 *
 * @namespace bluetoothManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 11
 */
declare namespace bluetoothManager {
  /**
   * The information of device bluetooth.
   *
   * @typedef BluetoothInfo
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface BluetoothInfo {
    /**
     * The name of bluetooth.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    name: string;

    /**
     * The state of bluetooth.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    state: access.BluetoothState;

    /**
     * The states of bluetooth connection
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
     connectionState: constant.ProfileConnectionState;
  }

  /**
   * Disallows bluetooth capability.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } isDisallowed - true if bluetooth capability of the device is not allowed.
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
  function disallowBluetooth(admin: Want, isDisallowed: boolean): void;

  /**
   * Queries the capability of bluetooth is allowed or disallowed.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { boolean } true if the bluetooth capability of the device is is not allowed.
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
  function isBluetoothDisallowed(admin: Want): boolean;

  /**
   * Gets bluetooth information.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { BluetoothInfo } the bluetooth information.
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
  function getBluetoothInfo(admin: Want): BluetoothInfo;
}

export default bluetoothManager;
