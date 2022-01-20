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

/**
 * Naivagtion title mode.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum NavigationTitleMode {
  /**
   * The title is free mode.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Free = 0,

  /**
   * The title is full mode.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Full,

  /**
   * The title is mini mode.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Mini,
}

declare interface NavigationMenuItem {
  /**
   * The value of navigation menu item.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  value: string;
  /**
   * The icon of navigation menu item.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  icon?: string;
  /**
   * Trigger by navigation menu item click.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  action?: () => void;
}

/**
 * Provide navigator view interface
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface NavigationInterface {
  /**
   * Called when the navigator view interface is used.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  (): NavigationAttribute;
}

/**
 * Declare Navigation view properties.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class NavigationAttribute extends CommonMethod<NavigationAttribute> {
  /**
   * Navigation title
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  title(value: string | CustomBuilder): NavigationAttribute;

  /**
   * Navigation subtitle
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  subTitle(value: string): NavigationAttribute;

  /**
   * Hide navigation bar
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  hideTitleBar(value: boolean): NavigationAttribute;

  /**
   * Hide navigation back button
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  hideBackButton(value: boolean): NavigationAttribute;

  /**
   * Navigation title mode
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  titleMode(value: NavigationTitleMode): NavigationAttribute;

  /**
   * Navigation title bar's menus
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  menus(value: Array<NavigationMenuItem> | CustomBuilder): NavigationAttribute;

  /**
   * The amount of the menu in Navigation.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  menuCount(value: number): NavigationAttribute;

  /**
   * Tool bar
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  toolBar(value: object | CustomBuilder): NavigationAttribute;

  /**
   * Hide tool bar
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  hideToolBar(value: boolean): NavigationAttribute;

  /**
   * Trigger a titleModeChanged event when title mode changed at free mode.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onTitleModeChanged(callback: (titleMode: NavigationTitleMode) => void): NavigationAttribute;
}

declare const Navigation: NavigationInterface;
declare const NavigationInstance: NavigationAttribute;
