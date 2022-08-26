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
 * Class of the enterprise admin extension ability.
 *
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @StageModelOnly
 */
export default class EnterpriseAdminExtensionAbility {
  /**
   * Called back when an application is enabled.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onAdminEnabled(): void;

  /**
   * Called back when an application is disabled.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onAdminDisabled(): void;

  /**
   * Called back when a bundle is installed.
   *
   * @since 9
   * @param admin Indicates the name of the bundle installed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onBundleAdded(bundleName: string): void;

  /**
   * Called back when a bundle is uninstalled.
   *
   * @since 9
   * @param bundleName Indicates the name of the bundle uninstalled.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onBundleRemoved(bundleName: string): void;

  /**
   * Called back when an application start.
   *
   * @since 9
   * @param bundleName Indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onAppStart(bundleName: string): void;

  /**
   * Called back when an application stop.
   *
   * @since 9
   * @param bundleName Indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onAppStop(bundleName: string): void;

  /**
   * Called back when an application get content on paste board.
   *
   * @since 9
   * @param bundleName Indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onPasteBoardGet(bundleName: string): void;

  /**
   * Called back when an application set content to paste board.
   *
   * @since 9
   * @param bundleName Indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onPasteBoardSet(bundleName: string): void;

  /**
   * Called back when an application screenshot.
   *
   * @since 9
   * @param bundleName Indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onScreenshot(bundleName: string): void;

  /**
   * Called back when an application start share screen.
   *
   * @since 9
   * @param bundleName Indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onShareScreenStart(bundleName: string): void;

  /**
   * Called back when an application stop share screen.
   *
   * @since 9
   * @param bundleName Indicates the bundle name of the application.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   */
  onShareScreenStop(bundleName: string): void;
}