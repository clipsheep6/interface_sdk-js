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
declare namespace bundleManager {
  /**
   * Adds the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that disallowed uninstall.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   */
  function addDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function addDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  function addDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that disallowed uninstall.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   */
  function removeDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function removeDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  function removeDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Gets the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param userId Indicates the user ID or do not pass user ID.
   * @return Returns the list of applications that disallowed uninstall.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   */
  function getDisallowedUninstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
  function getDisallowedUninstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
  function getDisallowedUninstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Adds the allowed install list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that allowed install.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   */
  function addAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function addAllowedInstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  function addAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes allowed install list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param bundleNames List of applications that allowed install.
   * @param userId Indicates the user ID or do not pass user ID.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   */
  function removeAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function removeAllowedInstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  function removeAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Gets allowed install list of applications.
   * This function can be called by a super administrator.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param userId Indicates the user ID or do not pass user ID.
   * @return Returns the list of applications that allowed install.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   */
  function getAllowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
  function getAllowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
  function getAllowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;
}

export default bundleManager;