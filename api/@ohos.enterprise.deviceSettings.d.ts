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
 * This module offers set settings policies on the devices.
 * @namespace deviceSettings
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
declare namespace deviceSettings {
  /**
   * Sets the screen off time.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } time - time indicates rhe target time stamp (ms).
   * @param { AsyncCallback<void> } callback - the callback of setScreenOffTime.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to use bundle service.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setScreenOffTime(admin: Want, time: number, callback: AsyncCallback<void>): void;
  /**
   * Sets the screen off time.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } time - time indicates rhe target time stamp (ms).
   * @returns { Promise<void> } the promise returned by setScreenOffTime.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to use bundle service.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setScreenOffTime(admin: Want, time: number): Promise<void>;

  /**
   * Gets the screen off time.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<number> } callback - the callback of getScreenOffTime.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to use bundle service.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getScreenOffTime(admin: Want, callback: AsyncCallback<number>): void;
  /**
   * Gets the screen off time.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<number> } the promise returned by getScreenOffTime.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to use bundle service.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getScreenOffTime(admin: Want): Promise<number>;
}

export default deviceSettings;