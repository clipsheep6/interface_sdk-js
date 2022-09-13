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
 * @name Offers set restricted policies on the devices.
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
declare namespace dateTimeManager {
  /**
   * Sets the system time.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param time Target time stamp (ms)
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   */
  function setDateTime(admin: Want, time: number, callback: AsyncCallback<void>): void;
  function setDateTime(admin: Want, time: number): Promise<void>;

  /**
   * Disallow the modificationing of date time.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param disallow True if set the modificationing of date time disabled, otherwise false.
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   */
  function disallowModifyDateTime(admin: Want, disallow: boolean, callback: AsyncCallback<void>): void;
  function disallowModifyDateTime(admin: Want, disallow: boolean): Promise<void>;

  /**
   * Gets state of whether the modificationing of date time is disallowed.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @return {@code true} if disallowed.
   * @permission ohos.permission.ENTERPRISE_SET_DATETIME
   */
  function isModifyDateTimeDisallowed(admin: Want, callback: AsyncCallback<boolean>): void;
  function isModifyDateTimeDisallowed(admin: Want): Promise<boolean>;
}

export default dateTimeManager;