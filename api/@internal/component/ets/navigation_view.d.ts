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
 * Sets the sidebar mode of showing
 * @since 9
 */
declare enum SideBarMode {
  /**
   * The sidebar and the content are displayed side by side.
   * @since 9
   */
  Embed,
  /**
   * The sidebar is displayed hovering over the content.
   * @since 9
   */
  Overlay,
  /**
   * The sidebar is diaplay as a standalone unit.
   * @since 9
   */
   Independent,
   /**
   * The sidebar is displayed automatically.
   * @since 9
   */
  Auto,
  
}

/**
 * @since 9
 */
 declare class NavigationViewController {
  /**
   * constructor.
   * @since 9
   */
  constructor();

  /**
   * Checks whether the navigation view can go back.
   * @since 9
   */
   accessBackward(): boolean;

   /**
   * Goes back in the history of the navigation view.
   * @since 9
   */
  backward();
}

/**
 * The construct function of NavigationView.
 * @since 9
 */
interface NavigationViewInterface {
  /**
   * Called when showing the NavigaitonView of a block entry.
   * @since 9
   */
  (value?: { controller?: NavigationViewController }): NavigationViewAttribute;
}

/**
 * The attribute function of NavigationView
 * @since 9
 */
declare class NavigationViewAttribute extends CommonMethod<NavigationViewAttribute> {
  /**
   * Sets the visibility of sidebar.
   * @since 9
   */
  showSideBar(value: boolean): NavigationViewAttribute;
  /**
   * Sets the width of sidebar.
   * @since 9
   */
  sideBarWidth(value: Length): NavigationViewAttribute;
  /**
   * Sets the mode of sidebar.
   * @since 9
   */
   sideBarMode(value: SideBarMode): NavigationViewAttribute;
  /**
   * Sets the icon of back button.
   * @since 9
   */
   backButtonIcon(value: string | PixelMap | Resource): NavigationViewAttribute;
}

declare const NavigationView: NavigationViewInterface;
declare const NavigationViewInstance: NavigationViewAttribute;
