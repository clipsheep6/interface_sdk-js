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
 * The class of the enterprise admin extension ability.
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 9
 */
export default class AdminExtensionAbility {
  /**
   * Called back when an application is enabled.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onAdminEnabled(): void;

  /**
   * Called back when an application is disabled.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onAdminDisabled(): void;

  /**
   * Called back when a bundle is installed.
   * @param { string } bundleName - bundleName indicates the name of the bundle installed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onBundleAdded(bundleName: string): void;

  /**
   * Called back when a bundle is uninstalled.
   * @param { string } bundleName - bundleName indicates the name of the bundle uninstalled.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onBundleRemoved(bundleName: string): void;

  /**
   * Called back when an application start.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onAppStart(bundleName: string): void;

  /**
   * Called back when an application stop.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onAppStop(bundleName: string): void;

  /**
   * Called back when an application get content on paste board.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onPasteBoardGet(bundleName: string): void;

  /**
   * Called back when an application set content to paste board.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onPasteBoardSet(bundleName: string): void;

  /**
   * Called back when an application screenshot.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onScreenshot(bundleName: string): void;

  /**
   * Called back when an application start share screen.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onShareScreenStart(bundleName: string): void;

  /**
   * Called back when an application stop share screen.
   * @param { string } bundleName - bundleName indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  onShareScreenStop(bundleName: string): void;
}