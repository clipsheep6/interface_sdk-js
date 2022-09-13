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
 * This module offers set restricted policies on the devices.
 * @namespace dateTimeManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
declare namespace dateTimeManager {
  /**
   * Sets the system time.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } time - time indicates rhe target time stamp (ms).
   * @param { AsyncCallback<void> } callback - the callback of setDateTime.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator applicayion does not have permission to manage the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to use bundle service.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setDateTime(admin: Want, time: number, callback: AsyncCallback<void>): void;
  /**
   * Sets the system time.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } time - time indicates rhe target time stamp (ms).
   * @returns { Promise<void> } the promise returned by the setDateTime.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator applicayion does not have permission to manage the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to use bundle service.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setDateTime(admin: Want, time: number): Promise<void>;

  /**
   * Disallow the modificationing of date time.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disallow - True if set the modificationing of date time disabled, otherwise false.
   * @param { AsyncCallback<void> } callback - the callback of disallowModifyDateTime.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disallowModifyDateTime(admin: Want, disallow: boolean, callback: AsyncCallback<void>): void;
  /**
   * Disallow the modificationing of date time.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disallow - True if set the modificationing of date time disabled, otherwise false.
   * @returns { Promise<void> } the promise returned by the disallowModifyDateTime.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disallowModifyDateTime(admin: Want, disallow: boolean): Promise<void>;

  /**
   * Gets state of whether the modificationing of date time is disallowed.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<boolean> } callback - the callback of isModifyDateTimeDisallowed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isModifyDateTimeDisallowed(admin: Want, callback: AsyncCallback<boolean>): void;
  /**
   * Gets state of whether the modificationing of date time is disallowed.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<boolean> } the promise returned by the isModifyDateTimeDisallowed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isModifyDateTimeDisallowed(admin: Want): Promise<boolean>;
}

export default dateTimeManager;