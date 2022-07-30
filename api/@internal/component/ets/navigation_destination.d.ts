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
 * The construct function of NavigationDestination.
 * @since 9
 */
 interface NavigationDestinationInterface {
  /**
   * constructor.
   * @since 9
   */
   constructor(): NavigationDestinationAttribute;
}

/**
 * The attribute function of NavigationDestination
 * @since 9
 */
declare class NavigationDestinationAttribute extends CommonMethod<NavigationDestinationAttribute> {
  /**
   * Navigation title bar
   * @since 9
   */
  title(value: string | CustomBuilder): NavigationDestinationAttribute;

  /**
   * Hide navigation title bar
   * @since 9
   */
  hideTitleBar(value: boolean): NavigationDestinationAttribute;

  /**
   * Sets background color of navigation title bar
   * @since 9
   */
  titleBarBackgroundColor(value: boolean): NavigationDestinationAttribute;

  /**
   * Navigation title bar's menus
   * @since 9
   */
   menus(value: CustomBuilder): NavigationDestinationAttribute;
}

declare const NavigationDestination: NavigationDestinationInterface;
declare const NavigationDestinationInstance: NavigationDestinationAttribute;
