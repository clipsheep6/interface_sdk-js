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
 * This nodule offers application management.
 * @namespace applicationManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
declare namespace applicationManager {
  /**
   * Adds disallowed running list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed running.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedRunningBundles.
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
  function addDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function addDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  /**
   * Adds disallowed running list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed running.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promiose returned by the addDisallowedRunningBundles.
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
  function addDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes disallowed running list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed running.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.s
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function removeDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  function removeDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, callback: AsyncCallback<void>): void;
  /**
   * Removes disallowed running list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } bundleNames - List of applications that disallowed running.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promiose returned by the removeDisallowedRunningBundles.
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
  function removeDisallowedRunningBundles(admin: Want, bundleNames: Array<string>, userId?: number): Promise<void>;

  /**
   * Gets disallowed running list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_APP_RUNNING_POLICY
   * @since 9
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getDisallowedRunningBundles.
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
  function getDisallowedRunningBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;
  function getDisallowedRunningBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;
  /**
   * Gets disallowed running list of applications.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_APP_RUNNING_POLICY
   * @since 9
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<Array<string>> } the promiose returned by the getDisallowedRunningBundles.
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
  function getDisallowedRunningBundles(admin: Want, userId?: number): Promise<Array<string>>;
}

export default applicationManager;