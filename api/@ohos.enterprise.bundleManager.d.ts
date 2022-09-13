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
 * This module offers application management.
 * @namespace bundleManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
declare namespace bundleManager {
  /**
   * Adds the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed uninstall.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedUninstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function addDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function addDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  /**
   * Adds the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed uninstall.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by addDisallowedUninstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function addDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed uninstall.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedUninstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function removeDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function removeDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  /**
   * Removes the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed uninstall.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by removeDisallowedUninstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function removeDisallowedUninstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Gets the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getDisallowedUninstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getDisallowedUninstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
  function getDisallowedUninstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
  /**
   * Gets the disallowed uninstall list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<Array<string>> } the promise returned by getDisallowedUninstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getDisallowedUninstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Adds the allowed install list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed uninstall.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<void> } callback - the callback of addAllowedInstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function addAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function addAllowedInstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  /**
   * Adds the allowed install list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed uninstall.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by addAllowedInstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function addAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes allowed install list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed uninstall.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeAllowedInstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function removeAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function removeAllowedInstallBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  /**
   * Removes allowed install list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed uninstall.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by removeAllowedInstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function removeAllowedInstallBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Gets allowed install list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getAllowedInstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getAllowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
  function getAllowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
  /**
   * Gets allowed install list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { Promise<Array<string>> } the promise returned by getAllowedInstallBundles.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getAllowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;
}

export default bundleManager;