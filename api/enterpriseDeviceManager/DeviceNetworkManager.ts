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

import { AsyncCallback, Callback } from "../basic";
import Want from "../@ohos.application.want";

/**
 * @name Offers set network policies on the devices.
 * @since 10
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
export interface DeviceNetworkManager {

  /**
   * Add the block list and trust list of the Broswer.
   *
   * @since 10
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param isTrustList True if the network address list to add is trust list.
   * @return {@code true} if add the browser network trust list or block list successfully.
   * @permission ohos.permission.EDM_MANAGE_NETWORK
   */
  addBrowserNetworkList(admin: Want, isTrustList: boolean, addrList: Array<string>, callback: AsyncCallback<void>): void;
  addBrowserNetworkList(admin: Want, isTrustList: boolean, addrList: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  addBrowserNetworkList(admin: Want, isTrustList: boolean, addrList: Array<string>, userId?: number): Promise<void>;

  /**
   * Remove the block list and trust list of the Broswer.
   *
   * @since 10
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param isTrustList True if the network address list to remove is trust list.
   * @return {@code true} if remove the browser network trust list or block list successfully.
   * @permission ohos.permission.EDM_MANAGE_NETWORK
   */
  removeBrowserNetworkList(admin: Want, isTrustList: boolean, addrList: Array<string>, callback: AsyncCallback<void>): void;
  removeBrowserNetworkList(admin: Want, isTrustList: boolean, addrList: Array<string>, userId: number, callback: AsyncCallback<void>): void;
  removeBrowserNetworkList(admin: Want, isTrustList: boolean, addrList: Array<string>, userId?: number): Promise<void>;

  /**
   * Get the block list and trust list of the Broswer.
   *
   * @since 10
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @param admin Indicates the administrator ability information.
   * @param isTrustList True if the network address list to get is trust list.
   * @return {@code true} if get the browser network trust list or block list successfully.
   */
  getBrowserNetworkList(admin: Want, isTrustList: boolean, callback: AsyncCallback<Array<string>>): void;
  getBrowserNetworkList(admin: Want, isTrustList: boolean, userId: number, callback: AsyncCallback<Array<string>>): void;
  getBrowserNetworkList(admin: Want, isTrustList: boolean, userId?: number): Promise<Array<string>>;
}