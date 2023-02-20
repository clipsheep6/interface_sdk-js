/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
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

import { ApplicationInfo as _ApplicationInfo } from './bundleManager/ApplicationInfo';
import Want from './@ohos.app.ability.Want';

/**
 * This module is used to obtain service information of various applications installed on the current device.
 * @namespace serviceRouterManager
 * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
 * @since 10
 */
 declare namespace serviceRouterManager {
  /**
   * This enumeration value is used to identify various types of service info
   * @enum {number}
   * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
   * @since 10
   */
  export enum ServiceType {
    /**
     * Indicates extension info with type of form
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 10
     */
    SHARE = 0,
  }

  /**
   * Service information about a bundle
   * @typedef ServiceInfo
   * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
   * @since 10
   */
  export interface ServiceInfo {
    /**
     * Indicates the name of the bundle
     * @type {string}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly bundleName: string;

    /**
     * Indicates the name of the module
     * @type {string}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly moduleName: string;

    /**
     * Indicates the name of the extension ability info
     * @type {string}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly name: string;

    /**
     * Indicates the label id of the extension ability info
     * @type {number}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly labelId: number;

    /**
     * Indicates the description id of the extension ability info
     * @type {number}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly descriptionId: number;

    /**
     * Indicates the icon id of the extension ability info
     * @type {number}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly iconId: number;

    /**
     * Enumerates types of the extension ability info
     * @type {serviceRouterManager.ServiceType}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly serviceType: serviceRouterManager.ServiceType;

    /**
     * The permissions that others need to use this extension ability info
     * @type {Array<string>}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly permissions: Array<string>;

    /**
     * Obtains configuration information about an application
     * @type {ApplicationInfo}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly applicationInfo: ApplicationInfo;

    /**
     * Indicates the read permission extension ability info
     * @type {string}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly readPermission: string;

    /**
     * Indicates the write permission of extension ability info
     * @type {string}
     * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
     * @since 9
     */
    readonly writePermission: string;
  }

  /**
   * Query extension info of by utilizing a Want. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Indicates the Want containing the application bundle name to be queried.
   * @param { ServiceType } serviceType - Indicates ServiceType.
   * @param { AsyncCallback<Array<ServiceInfo>> } callback - The callback of querying service info result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
   * @systemapi
   * @since 10
   */
  function queryServiceInfos(want: Want, serviceType: ServiceType, callback: AsyncCallback<Array<ServiceInfo>>): void;

  /**
   * Query the ExtensionAbilityInfo by the given Want. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Indicates the Want containing the application bundle name to be queried.
   * @param { ServiceType } serviceType - Indicates ServiceType.
   * @returns { Promise<Array<ServiceInfo>> } Returns a list of ServiceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.ServiceRouterManager.ServiceRouterFramework.Core
   * @systemapi
   * @since 10
   */
  function queryServiceInfos(want: Want, serviceType: ServiceType): Promise<Array<ServiceInfo>>;
}

export default bundleManager;
