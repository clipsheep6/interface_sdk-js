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
 * This module offers set account policies on the devices.
 * @namespace accountManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
declare namespace accountManager {
  /**
   * Disallow add local account.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disallow - True if disallow add local account, otherwise false.
   * @param { AsyncCallback<void> } callback - the callback of disalloweAddLocalAccount.
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
  function disalloweAddLocalAccount(admin: Want, disallow: boolean, callback: AsyncCallback<void>): void;
  /**
   * Disallow add local account.
   * This function can be called by a super administrator.
   * @permission ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disallow - True if disallow add local account, otherwise false.
   * @returns { Promise<void> } the promise returned by the disalloweAddLocalAccount.
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
  function disalloweAddLocalAccount(admin: Want, disallow: boolean): Promise<void>;
}

export default accountManager;