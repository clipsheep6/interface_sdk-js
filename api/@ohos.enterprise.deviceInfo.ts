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
 * This module offers set or get device info policies on the devices.
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
declare namespace deviceInfo {
  /**
   * Get the serial of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<string> } callback - the callback of getDeviceSerial.
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
  function getDeviceSerial(admin: Want, callback: AsyncCallback<string>): void;
  /**
   * Get the serial of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<string> } the promise returned by getDeviceSerial.
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
  function getDeviceSerial(admin: Want): Promise<string>;

  /**
   * Get the display version of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<string> } callback - the callback of getDisplayVersion.
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
  function getDisplayVersion(admin: Want, callback: AsyncCallback<string>): void;
  /**
   * Get the display version of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<string> } the promise returned by getDisplayVersion.
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
  function getDisplayVersion(admin: Want): Promise<string>;

  /**
   * Get the device name of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<string> } callback - the callback of getDeviceName.
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
  function getDeviceName(admin: Want, callback: AsyncCallback<string>): void;
  /**
   * Get the device name of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<string> } the promise returned by getDeviceName.
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
  function getDeviceName(admin: Want): Promise<string>;

  /**
   * Get the hard disk serial of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<string> } callback - the callback of getHardDiskSerial.
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
  function getHardDiskSerial(admin: Want, callback: AsyncCallback<string>): void;
  /**
   * Get the hard disk serial of the device.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<string> } the promise returned by getHardDiskSerial.
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
  function getHardDiskSerial(admin: Want): Promise<string>;
}

export default deviceInfo;