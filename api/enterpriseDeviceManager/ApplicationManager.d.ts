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
 * @name Offers application management.
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
export interface ApplicationManager {

  /**
   * Adds the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that disallowed uninstall.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.EDM_MANAGE_APPLICATION
   */
  addDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  addDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  addDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that disallowed uninstall.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.EDM_MANAGE_APPLICATION
   */
  removeDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  removeDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  removeDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Gets the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param userId Indicates the user ID or do not pass user ID.
   * @return Returns the list of applications that disallowed uninstall.
   * @permission ohos.permission.EDM_MANAGE_APPLICATION
   */
  getDisallowedUninstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
  getDisallowedUninstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
  getDisallowedUninstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Adds the allowed install list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that allowed install.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.EDM_MANAGE_APPLICATION
   */
  addAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  addAllowedInstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  addAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes allowed install list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that allowed install.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.EDM_MANAGE_APPLICATION
   */
  removeAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  removeAllowedInstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  removeAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Gets allowed install list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param userId Indicates the user ID or do not pass user ID.
   * @return Returns the list of applications that allowed install.
   * @permission ohos.permission.EDM_MANAGE_APPLICATION
   */
  getAllowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
  getAllowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
  getAllowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

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
  addDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  addDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  addDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

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
  removeDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  removeDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  removeDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

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
  getDisallowedRunningBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
  getDisallowedRunningBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
  getDisallowedRunningBundles(admin: Want, userId?: number): Promise<Array<string>>;
}