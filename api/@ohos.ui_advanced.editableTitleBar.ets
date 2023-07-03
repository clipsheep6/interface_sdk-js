/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * The declare of EditableTitleBarMenuItem.Item of the cancellation icon in the upper right corner of the page.
 * @typedef EditableTitleBarMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type EditableTitleBarMenuItem = {
  /**
   * icon resource.
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon: string | Resource;
  /**
   * whether titleBarMenu is enable.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  enable: boolean;
  /**
   * Callback when interact with titleBarMenu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  action?: () => void;
}

/**
 * The declare of EditableLeftIconType.
 * @enum { EditableLeftIconType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum EditableLeftIconType {
  /**
   * back type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  Back,
  /**
   * cancel type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  Cancel
}

/**
 * The declare of EditableTitleBar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
declare struct EditableTitleBar {
  /**
   * The Left Icon Style.
   * @type { EditableLeftIconType }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  leftIconStyle: EditableLeftIconType;
  /**
   * The Page Title.
   * @type { string | Resource }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
	title: string | Resource;
  /**
   * The Icon for canceling the operation in the upper right corner of the page.
   * @type { Array<EditableTitleBarMenuItem> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  menus: Array<EditableTitleBarMenuItem>;
  /**
   * The Callback event of saving the icon on the right.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onRightClick: () => void;
  /**
   * The Callback event of canceling the icon on the left.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onLeftClick: () => void;
}

export { EditableTitleBarMenuItem, EditableLeftIconType, EditableTitleBar }