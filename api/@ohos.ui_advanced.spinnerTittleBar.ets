/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * The declare of OperationOptions.Icon item on the right.
 * @typedef OperationOptions
 * @since 10
 */
declare type OperationOptions = {
  /**
   * The spinner option content.
   * @type { Resource }.
   * @since 10
   */
  value: Resource;

  /**
   * Events bound to the spinner option.
   * @type { () => void }.
   * @since 10
   */
  action?: () => void;
};

/**
 * The declare of SpinnerTitleBar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */ 
@Component
export declare struct SpinnerTitleBar {
  /**
   * The spinner drop-down list.
   * @type { Array<SelectOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  options: Array<SelectOption>;

  /**
   * Sets the index of the initial options in the drop-down menu. The index of the first item is 0.
   * If the selected attribute is not set, the default value is - 1. The menu item is not selected.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop selected: number;

  /**
   * Icon on the right.
   * @type { Array<OperationOptions> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  menus: Array<OperationOptions>;

  /**
   * Configuring Subtitles.
   * @type { string | Resource }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  subTitle: string | Resource;

  /**
   * Sets the text content of the drop-down button itself.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: string;

  /**
   * Whether to hide the left return arrow.
   * @type { boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  hideBackButton: boolean;

  /**
   * New Event Tag Value.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  badgeValue: number;

  /**
   * Callback event when select is selected
   * @type { (index: number) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedCallback: ((index: number) => void);
}
export { OperationOptions, SpinnerTitleBar };