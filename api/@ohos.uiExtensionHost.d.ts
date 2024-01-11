/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkUI
 */

/// <reference path="../component/common_ts_ets_api.d.ts"/>

import { Callback } from './@ohos.base';
import window from './@ohos.window';
/**
 * uiExtensionHost.
 *
 * @namespace uiExtensionHost
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
declare namespace uiExtensionHost {
  /**
   * Transition Controller
   *
   * @interface UIExtensionHostWindowProxy
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  interface UIExtensionHostWindowProxy {
    /**
     * Get the avoid area
     *
     * @param { window.AvoidAreaType } type - Type of the area
     * @returns { window.AvoidArea } Area where the window cannot be displayed.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11
     */
    getWindowAvoidArea(type: window.AvoidAreaType): window.AvoidArea;

    /**
     * Register the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11
     */
    on(type: 'avoidAreaChange', callback: Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }>): void;

    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11
     */
    off(type: 'avoidAreaChange', callback?: Callback<{ type: window.AvoidAreaType, area: window.AvoidArea }>): void;

    /**
     * Register the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<window.Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11
     */
    on(type: 'windowSizeChange', callback: Callback<window.Size>): void;

    /**
     * Unregister the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<window.Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11
     */
    off(type: 'windowSizeChange', callback?: Callback<window.Size>): void;

    /**
     * The properties of the UIExtension window
     *
     * @type { UIExtensionHostWindowProxyProperties } 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11
     */
    properties: UIExtensionHostWindowProxyProperties;

    /**
     * Create sub window of the host window.
     *
     * @param { string } name window name of sub window
     * @returns { Promise<window.Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300002 - The host windowv is abnormal.
     * @throws { BusinessError } 1300005 - The host window is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    createSubWindow(name: string): Promise<window.Window>;
  }

  /**
   * Properties of UIExtension window
   *
   * @interface UIExtensionHostWindowProxyProperties
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  interface UIExtensionHostWindowProxyProperties {
    /**
     * The position and size of the UIExtension window
     *
     * @type { window.Rect } 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 11
     */
    uiExtensionHostWindowProxyRect: window.Rect;
  }
}

export default uiExtensionHost;
