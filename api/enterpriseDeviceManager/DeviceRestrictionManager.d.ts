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
 * @name Offers set restricted policies on the devices.
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
export interface DeviceRestrictionManager {

  /**
   * Disables the modificationing of date time.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param isDisabled True if set the modificationing of date time disabled, otherwise false.
   * @permission ohos.permission.EDM_SET_RESTRICTION
   */
  setModifyDateTimeDisabled(admin: Want, isDisabled: boolean, callback: AsyncCallback<void>): void;
  setModifyDateTimeDisabled(admin: Want, isDisabled: boolean): Promise<void>;

  /**
   * Gets state of whether the modificationing of date time is disabled.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @return {@code true} if disabled.
   * @permission ohos.permission.EDM_SET_RESTRICTION
   */
  isModifyDateTimeDisabled(admin: Want, callback: AsyncCallback<boolean>): void;
  isModifyDateTimeDisabled(admin: Want): Promise<boolean>;

  /**
   * Disables creating local users.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param isDisabled True if disable creating local users, otherwise false.
   * @return {@code true} if disables success.
   * @permission ohos.permission.EDM_SET_RESTRICTION
   */
  setAddLocalAccountDisabled(admin: Want, isDisabled: boolean, callback: AsyncCallback<boolean>): void;
  setAddLocalAccountDisabled(admin: Want, isDisabled: boolean): Promise<boolean>;
}