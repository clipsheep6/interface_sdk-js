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

import { AsyncCallback } from "../basic";
import Want from "./../@ohos.application.Want";

/**
 * @name Offers set or get device info policies on the devices.
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
export interface DeviceInfo {

  /**
   * Get the serial of the device.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @return Returns the device serial.
   * @permission ohos.permission.EDM_GET_DEVICE_BASE_INFO
   */
  getDeviceSerial(admin: Want, callback: AsyncCallback<string>): void;
  getDeviceSerial(admin: Want): Promise<string>;

  /**
   * Get the display version of the device.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @return Returns the display version of the device.
   * @permission ohos.permission.EDM_GET_DEVICE_BASE_INFO
   */
  getDisplayVersion(admin: Want, callback: AsyncCallback<string>): void;
  getDisplayVersion(admin: Want): Promise<string>;

  /**
   * Get the device name of the device.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @return Returns the device name of the device.
   * @permission ohos.permission.EDM_GET_DEVICE_BASE_INFO
   */
  getDeviceName(admin: Want, callback: AsyncCallback<string>): void;
  getDeviceName(admin: Want): Promise<string>;

  /**
   * Get the hard disk serial of the device.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @return Returns the hard disk serial of the device.
   * @permission ohos.permission.EDM_GET_DEVICE_BASE_INFO
   */
  getHardDiskSerial(admin: Want, callback: AsyncCallback<string>): void;
  getHardDiskSerial(admin: Want): Promise<string>;
}