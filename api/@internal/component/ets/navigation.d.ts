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
 * Defines the navigation common title.
 * @since 9
 */
/**
 * Defines the navigation common title.
 * @crossplatform
 * @since 10
 */
declare interface NavigationCommonTitle {
  /**
   * Sets the main title.
   * @since 9
   */
  /**
   * Sets the main title.
   * @crossplatform
   * @since 10
   */
  main: string;

  /**
   * Sets the sub title.
   * @since 9
   */
  /**
   * Sets the sub title.
   * @crossplatform
   * @since 10
   */
  sub: string;
}

/**
 * Defines the navigation custom title.
 * @since 9
 */
/**
 * Defines the navigation custom title.
 * @crossplatform
 * @since 10
 */
declare interface NavigationCustomTitle {
  /**
   * Sets the custom title builder.
   * @since 9
   */
  /**
   * Sets the custom title builder.
   * @crossplatform
   * @since 10
   */
  builder: CustomBuilder;

  /**
   * Sets the custom title height.
   * @since 9
   */
  /**
   * Sets the custom title height.
   * @crossplatform
   * @since 10
   */
  height: TitleHeight | Length;
}

/**
 * Navigation mode
 * @since 9
 */
/**
 * Navigation mode
 * @crossplatform
 * @since 10
 */
declare enum NavigationMode {
  /**
   * The navigation bar and the content area are displayed in stack.
   * @since 9
   */
  /**
   * The navigation bar and the content area are displayed in stack.
   * @crossplatform
   * @since 10
   */
  Stack,
  /**
   * The navigation bar and the content area are displayed side by side.
   * @since 9
   */
  /**
   * The navigation bar and the content area are displayed side by side.
   * @crossplatform
   * @since 10
   */
  Split,
  /**
  * If the window width is greater than 520vp, the navigation component is displayed in split mode.
  * Otherwise it's displayed in stack mode.
  * @since 9
  */
  /**
  * If the window width is greater than 520vp, the navigation component is displayed in split mode.
  * Otherwise it's displayed in stack mode.
  * @crossplatform
  * @since 10
  */
  Auto,
}

/**
 * Navigation bar position
 * @since 9
 */
/**
 * Navigation bar position
 * @crossplatform
 * @since 10
 */
declare enum NavBarPosition {
  /**
   * The navigation bar is on the Start of the container
   * @since 9
   */
  /**
   * The navigation bar is on the Start of the container
   * @crossplatform
   * @since 10
   */
  Start,
  /**
   * The navigation bar is on the End of the container
   * @since 9
   */
  /**
   * The navigation bar is on the End of the container
   * @crossplatform
   * @since 10
   */
  End,
}

/**
 * Navigation title mode.
 * @since 8
 */
/**
 * Navigation title mode.
 * @crossplatform
 * @since 10
 */
declare enum NavigationTitleMode {
  /**
   * The title is free mode.
   * @since 8
   */
  /**
   * The title is free mode.
   * @crossplatform
   * @since 10
   */
  Free = 0,

  /**
   * The title is full mode.
   * @since 8
   */
  /**
   * The title is full mode.
   * @crossplatform
   * @since 10
   */
  Full,

  /**
   * The title is mini mode.
   * @since 8
   */
  /**
   * @crossplatform
   * @since 10
   */
  Mini,
}

declare interface NavigationMenuItem {
  /**
   * The value of navigation menu item.
   * @since 8
   */
  /**
   * The value of navigation menu item.
   * @crossplatform
   * @since 10
   */
  value: string;
  /**
   * The icon of navigation menu item.
   * @since 8
   */
  /**
   * The icon of navigation menu item.
   * @crossplatform
   * @since 10
   */
  icon?: string;
  /**
   * Trigger by navigation menu item click.
   * @since 8
   */
  /**
   * Trigger by navigation menu item click.
   * @crossplatform
   * @since 10
   */
  action?: () => void;
}

/**
 * Provide navigator view interface
 * @since 8
 */
/**
 * Provide navigator view interface
 * @crossplatform
 * @since 10
 */
interface NavigationInterface {
  /**
   * Called when the navigator view interface is used.
   * @since 8
   */
  /**
   * Called when the navigator view interface is used.
   * @crossplatform
   * @since 10
   */
  (): NavigationAttribute;
}

/**
 * Declare Navigation view properties.
 * @since 8
 */
/**
 * Declare Navigation view properties.
 * @crossplatform
 * @since 10
 */
declare class NavigationAttribute extends CommonMethod<NavigationAttribute> {
  /**
   * Sets the width of navigation bar.
   * @since 9
   */
  /**
   * Sets the width of navigation bar.
   * @crossplatform
   * @since 10
   */
  navBarWidth(value: Length): NavigationAttribute;

  /**
   * Sets the position of navigation bar.
   * @since 9
   */
  /**
   * Sets the position of navigation bar.
   * @crossplatform
   * @since 10
   */
  navBarPosition(value: NavBarPosition): NavigationAttribute;

  /**
   * Sets the mode of navigation.
   * @since 9
   */
  /**
   * Sets the mode of navigation.
   * @crossplatform
   * @since 10
   */
  mode(value: NavigationMode): NavigationAttribute;

  /**
   * Sets the back button icon.
   * @since 9
   */
  /**
   * Sets the back button icon.
   * @crossplatform
   * @since 10
   */
  backButtonIcon(value: string | PixelMap | Resource): NavigationAttribute;

  /**
   * Hide the navigation bar.
   * @since 9
   */
  /**
   * Hide the navigation bar.
   * @crossplatform
   * @since 10
   */
  hideNavBar(value: boolean): NavigationAttribute;

  /**
   * Navigation title
   * @type { (string | CustomBuilder) }
   * @since 8
   */
  /**
   * Navigation title
   * @type { (string | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle) }
   * @since 9
   */
  /**
   * Navigation title
   * @type { (ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle) }
   * @crossplatform
   * @since 10
   */
  title(value: ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle): NavigationAttribute;

  /**
   * Navigation subtitle
   * @since 8
   * @deprecated since 9
   * @useinstead title
   */
  subTitle(value: string): NavigationAttribute;

  /**
   * Hide navigation title bar
   * @since 8
   */
  /**
   * Hide navigation title bar
   * @crossplatform
   * @since 10
   */
  hideTitleBar(value: boolean): NavigationAttribute;

  /**
   * Hide navigation back button
   * @since 8
   */
  /**
   * Hide navigation back button
   * @crossplatform
   * @since 10
   */
  hideBackButton(value: boolean): NavigationAttribute;

  /**
   * Navigation title mode
   * @since 8
   */
  /**
   * Navigation title mode
   * @crossplatform
   * @since 10
   */
  titleMode(value: NavigationTitleMode): NavigationAttribute;

  /**
   * Navigation title bar's menus
   * @since 8
   */
  /**
   * Navigation title bar's menus
   * @crossplatform
   * @since 10
   */
  menus(value: Array<NavigationMenuItem> | CustomBuilder): NavigationAttribute;

  /**
   * Tool bar
   * @since 8
   */
  /**
   * Tool bar
   * @crossplatform
   * @since 10
   */
  toolBar(value: object | CustomBuilder): NavigationAttribute;

  /**
   * Hide tool bar
   * @since 8
   */
  /**
   * Hide tool bar
   * @crossplatform
   * @since 10
   */
  hideToolBar(value: boolean): NavigationAttribute;

  /**
   * Trigger callback when title mode change finished at free mode.
   * @since 8
   */
  /**
   * Trigger callback when title mode change finished at free mode.
   * @crossplatform
   * @since 10
   */
  onTitleModeChange(callback: (titleMode: NavigationTitleMode) => void): NavigationAttribute;

  /**
   * Trigger callback when the visibility of navigation bar change.
   * @since 9
   */
  /**
   * Trigger callback when the visibility of navigation bar change.
   * @crossplatform
   * @since 10
   */
  onNavBarStateChange(callback: (isVisible: boolean) => void): NavigationAttribute;
}

/**
 * Defines Navigation Component.
 * @since 8
 */
/**
 * Defines Navigation Component.
 * @crossplatform
 * @since 10
 */
declare const Navigation: NavigationInterface;

/**
 * Defines Navigation Component instance.
 * @since 8
 */
/**
 * Defines Navigation Component instance.
 * @crossplatform
 * @since 10
 */
declare const NavigationInstance: NavigationAttribute;
