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

/**
 * The device system update info.
 *
 * @typedef SystemUpdateInfo
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 11
 */
export interface SystemUpdateInfo {
  /**
   * The device current version name.
   *
   * @type { string }
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  versionName: string;

  /**
   * The device current version number.
   *
   * @type { string }
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  versionNumber: string;

  /**
   * The time the version received.
   *
   * @type { number }
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  firstReceivedTime: number;

  /**
   * The type of package to update.
   *
   * @type { string }
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  packageType: string;
}

/**
 * Class of the enterprise admin extension ability.
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @StageModelOnly
 * @since 9
 */
export default class EnterpriseAdminExtensionAbility {
  /**
   * Called back when an application is enabled.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onAdminEnabled(): void;

  /**
   * Called back when an application is disabled.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onAdminDisabled(): void;

  /**
   * Called back when a bundle is installed.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle installed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onBundleAdded(bundleName: string): void;

  /**
   * Called back when a bundle is uninstalled.
   *
   * @param { string } bundleName - bundleName indicates the name of the bundle uninstalled.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onBundleRemoved(bundleName: string): void;

  /**
   * Called back when an app is started.
   *
   * @param { string } bundleName - bundleName indicates the name of the app started.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  onAppStart(bundleName: string): void;

  /**
   * Called back when an app is stopped.
   *
   * @param { string } bundleName - bundleName indicates the name of the app stopped.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  onAppStop(bundleName: string): void;

  /**
   * Called back when system update version. 
   *
   * @param { SystemUpdateInfo } systemUpdateInfo - the information of the update system.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  onSystemUpdate(systemUpdateInfo: SystemUpdateInfo): void;
}
