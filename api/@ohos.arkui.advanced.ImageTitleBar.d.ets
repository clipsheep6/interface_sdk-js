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
 * The declare of TitleBarMenuItem.
 * @typedef TitleBarMenuItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare type TitleBarMenuItem = {
  /**
   * Set avatar resources and click events.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon: ResourceStr;
  /**
   * Set avatar resources and click events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  action?: () => void;
}

/**
 * The declare of ImageTitleBar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct ImageTitleBar {
  /**
   * Set avatar resources and click events.
   * @type { TitleBarMenuItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  portrait: TitleBarMenuItem;

  /**
   * Set the title content.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop title: ResourceStr;

  /**
   * Set subtitle content.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop subTitle: ResourceStr;

  /**
   * Set Menu Icons.
   * @type { Array<TitleBarMenuItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  menus: Array<TitleBarMenuItem>;
}