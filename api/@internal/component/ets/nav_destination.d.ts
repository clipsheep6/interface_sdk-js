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
 * Navigation tile height.
 * @since 9
 */
 declare enum TitleHeight {
  /**
   * Title height when only main title is avaliable.
   * @since 9
   */
  MainOnly,

  /**
   * Title height when main title and subtitle are both avaliable.
   * @since 9
   */
  MainWithSub,
}

/**
 * Defines the navigation common title.
 * @since 9
 */
 declare interface NavigatinCommonTitle {
  /**
   * Sets the main title.
   * @since 9
   */
  main: string;

  /**
   * Sets the sub title.
   * @since 9
   */
  sub?: string;
}

/**
 * Defines the navigation custom title.
 * @since 9
 */
 declare interface NavigatinCustomTitle {
  /**
   * Sets the custom title builder.
   * @since 9
   */
  builder: string;

  /**
   * Sets the custom title height.
   * @since 9
   */
  height?: TitleHeight | Length;
}

/**
 * The construct function of NavDestination.
 * @since 9
 */
 interface NavDestinationInterface {
  /**
   * constructor.
   * @since 9
   */
  constructor(): NavDestinationAttribute;
}

/**
 * The attribute function of NavDestination
 * @since 9
 */
declare class NavDestinationAttribute extends CommonMethod<NavDestinationAttribute> {
  /**
   * Navigation title bar
   * @since 9
   */
  title(value: string | NavigatinCommonTitle | NavigatinCustomTitle): NavDestinationAttribute;

  /**
   * Hide navigation title bar
   * @since 9
   */
  hideTitleBar(value: boolean): NavDestinationAttribute;
}

declare const NavDestination: NavDestinationInterface;
declare const NavDestinationInstance: NavDestinationAttribute;
