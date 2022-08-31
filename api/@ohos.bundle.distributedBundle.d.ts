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

import { AsyncCallback } from './basic';
import { ElementName }  from './bundleManager/elementName';
import { RemoteAbilityInfo as _RemoteAbilityInfo } from './bundleManager/remoteAbilityInfo';

/**
 * distributedBundle.
 * @namespace distributedBundle
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi Hide this for inner system use
 * @since 9
 */
declare namespace distributedBundle {
  /**
   * Obtains information about the ability info of the remote device.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {ElementName} elementName - Indicates the elementName.
   * @param {AsyncCallback<RemoteAbilityInfo>} callback - The callback of getting the ability info of the remote device.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  function getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>): void;

  /**
   * Obtains information about the ability info of the remote device.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {ElementName} elementName - Indicates the elementName.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @return {Promise<RemoteAbilityInfo>} Returns the ability info of the remote device.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  function getRemoteAbilityInfo(elementName: ElementName): Promise<RemoteAbilityInfo>;

  /**
   * Obtains information about the ability infos of the remote device.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {Array<ElementName>} elementNames - Indicates the elementNames, Maximum array length ten.
   * @param {AsyncCallback<Array<RemoteAbilityInfo>>} callback - the callback of getting the ability infos of the remote device.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  function getRemoteAbilityInfos(elementNames: Array<ElementName>, callback: AsyncCallback<Array<RemoteAbilityInfo>>): void;

  /**
   * Obtains information about the ability infos of the remote device.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {Array<ElementName>} elementNames - Indicates the elementNames, Maximum array length ten.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @return {Promise<Array<RemoteAbilityInfo>>} The result of getting the ability infos of the remote device.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  function getRemoteAbilityInfos(elementNames: Array<ElementName>): Promise<Array<RemoteAbilityInfo>>;

  /**
   * Obtains information about the ability info of the remote device.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {ElementName} elementName - Indicates the elementName.
   * @param {string} locale - Indicates the locale info
   * @param {AsyncCallback} callback - The callback of getting the ability info of the remote device.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  function getRemoteAbilityInfo(elementName: ElementName, locale: string, callback: AsyncCallback<RemoteAbilityInfo>): void;

  /**
   * Obtains information about the ability info of the remote device.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {ElementName} elementName - Indicates the elementName.
   * @param {string} locale - Indicates the locale info
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @return {Promise<Array<RemoteAbilityInfo>>} The result of getting the ability infos of the remote device.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  function getRemoteAbilityInfo(elementName: ElementName, locale: string): Promise<RemoteAbilityInfo>;

  /**
   * Obtains information about the ability infos of the remote device.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {Array<ElementName>} elementNames - Indicates the elementNames, Maximum array length ten.
   * @param {string} locale - Indicates the locale info
   * @param {AsyncCallback} callback - Returns the ability infos of the remote device.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  function getRemoteAbilityInfos(elementNames: Array<ElementName>, locale: string, callback: AsyncCallback<Array<RemoteAbilityInfo>>): void;

  /**
   * Obtains information about the ability infos of the remote device.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {Array<ElementName>} elementNames - Indicates the elementNames, Maximum array length ten.
   * @param {string} locale - Indicates the locale info
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @return {Promise<Array<RemoteAbilityInfo>>} Returns the ability infos of the remote device.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  function getRemoteAbilityInfos(elementNames: Array<ElementName>, locale: string): Promise<Array<RemoteAbilityInfo>>;

  /**
   * Contains basic remote ability information.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi hide this for inner system use
   * @since 9
   */
  export type RemoteAbilityInfo = _RemoteAbilityInfo;
}

export default distributedBundle;
