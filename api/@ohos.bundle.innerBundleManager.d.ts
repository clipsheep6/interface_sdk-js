/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
import { BundleStatusCallback } from './bundle/bundleStatusCallback';
import { LauncherAbilityInfo } from './bundle/launcherAbilityInfo';
import { ShortcutInfo } from './bundle/shortcutInfo';

/**
 * inner bundle manager.
 *
 * @namespace innerBundleManager
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.bundle.launcherBundleManager
 * @name innerBundleManager
 */
declare namespace innerBundleManager {
  /**
   * Obtains based on a given bundleName and userId.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param bundleName Indicates the application bundle name to be queried.
   * @param userId Indicates the id for the user.
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback
   * @returns Returns the LauncherAbilityInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager#getLauncherAbilityInfo
   */
  function getLauncherAbilityInfos(
    bundleName: string,
    userId: number,
    callback: AsyncCallback<Array<LauncherAbilityInfo>>
  ): void;

  /**
   * Obtains based on a given bundleName and userId.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param bundleName Indicates the application bundle name to be queried.
   * @param userId Indicates the id for the user.
   * @returns Returns the LauncherAbilityInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager#getLauncherAbilityInfo
   */
  function getLauncherAbilityInfos(bundleName: string, userId: number): Promise<Array<LauncherAbilityInfo>>;

  /**
   * Register Callback.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param type Indicates the command should be implement.
   * @param LauncherStatusCallback Indicates the callback to be register.
   * @param { AsyncCallback<string> } callback
   * @returns { string | Promise<string> } Returns the result of register.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#on
   */
  function on(
    type: 'BundleStatusChange',
    bundleStatusCallback: BundleStatusCallback,
    callback: AsyncCallback<string>
  ): void;

  /**
   * Register Callback.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param type Indicates the command should be implement.
   * @param LauncherStatusCallback Indicates the callback to be register.
   * @returns { string | Promise<string> } Returns the result of register.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#on
   */
  function on(type: 'BundleStatusChange', bundleStatusCallback: BundleStatusCallback): Promise<string>;

  /**
   * UnRegister Callback.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param type Indicates the command should be implement.
   * @param { AsyncCallback<string> } callback
   * @returns { string | Promise<string> } Returns the result of unregister.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#off
   */
  function off(type: 'BundleStatusChange', callback: AsyncCallback<string>): void;

  /**
   * UnRegister Callback.
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @param type Indicates the command should be implement.
   * @returns { string | Promise<string> } Returns the result of unregister.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor#off
   */
  function off(type: 'BundleStatusChange'): Promise<string>;

  /**
   * Obtains based on a given userId.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param userId Indicates the id for the user.
   * @param { AsyncCallback<Array<LauncherAbilityInfo>> } callback
   * @returns Returns the LauncherAbilityInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager#getAllLauncherAbilityInfos
   */
  function getAllLauncherAbilityInfos(userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>): void;

  /**
   * Obtains based on a given userId.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param userId Indicates the id for the user.
   * @returns Returns the LauncherAbilityInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager#getAllLauncherAbilityInfos
   */
  function getAllLauncherAbilityInfos(userId: number): Promise<Array<LauncherAbilityInfo>>;

  /**
   * Obtains based on a given bundleName.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param bundleName Indicates the application bundle name to be queried.
   * @param { AsyncCallback<Array<ShortcutInfo>> } callback
   * @returns Returns the LauncherShortcutInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager#getShortcutInfo
   */
  function getShortcutInfos(bundleName: string, callback: AsyncCallback<Array<ShortcutInfo>>): void;

  /**
   * Obtains based on a given bundleName.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param bundleName Indicates the application bundle name to be queried.
   * @returns Returns the LauncherShortcutInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager#getShortcutInfo
   */
  function getShortcutInfos(bundleName: string): Promise<Array<ShortcutInfo>>;
}

export default innerBundleManager;
