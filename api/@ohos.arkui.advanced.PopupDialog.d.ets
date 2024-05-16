/*
* Copyright (C) 2024-2024 Huawei Device Co., Ltd.
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

/**
 * Declare struct PopupDialog
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
@Component
export declare struct PopupDialog {
  /**
   * Sets the PopupDialog Visible Status.
   * 
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  @Link
  show: boolean;
  /**
   * Sets the targetBuilder content.
   * 
   * @type { () => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
   @BuilderParam targetBuilder: () => void;
  /**
   * Sets the PopupDialog options.
   * 
   * @type { PopupDialogOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  @Prop
  popup: PopupDialogOptions;
}

/**
 * Defines PopupDialog Options
 * 
 * @interface PopupDialogOptions
 * @extends CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export declare interface PopupDialogOptions extends CustomPopupOptions {
}