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
 * @name Offers application management.
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
declare namespace applicationManager {
  /**
   * Adds disallowed running list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that disallowed running.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.EDM_MANAGE_APPLICATION
   */
  function addDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function addDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  function addDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes disallowed running list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that disallowed running.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.EDM_MANAGE_APPLICATION
   */
  function removeDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function removeDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  function removeDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Gets disallowed running list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param userId Indicates the user ID or do not pass user ID.
   * @return Returns the list of applications that disallowed running.
   * @permission ohos.permission.EDM_MANAGE_APPLICATION
   */
  function getDisallowedRunningBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
  function getDisallowedRunningBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
  function getDisallowedRunningBundles(admin: Want, userId?: number): Promise<Array<string>>;
}

export default applicationManager;