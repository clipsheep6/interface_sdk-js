/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AsyncCallback, Callback } from './basic';

 /**
 * interface of window manager
 * @devices tv, phone, tablet, wearable
 */
declare namespace window {
  /**
   * get top window of current app
   * @devices tv, phone, tablet, wearable
   */
  function getTopWindow(callback: AsyncCallback<Window>): void;
  function getTopWindow(): Promise<Window>;

  /**
   * Create a sub window with a specific id and type.
   * @param id Indicates window id.
   * @param type Indicates window type.
   */
  function create(id: string, type: WindowType, callback: AsyncCallback<Window>): void;
  function create(id: string, type: WindowType): Promise<Window>;

  /**
   * Find the sub window by id.
   * @param id Indicates window id.
   */
  function find(id: string, callback: AsyncCallback<Window>): void;
  function find(id: string): Promise<Window>;

  /**
   * Get the ability window mode.
   * @systemapi Hide this for inner system use.
   */
  function getWindowMode(callback: AsyncCallback<WindowMode>): void;
  /**
   * Get the ability window mode.
   * @systemapi Hide this for inner system use.
   */
  function getWindowMode(): Promise<WindowMode>;

  /**
   * Window mode.
   * @systemapi Hide this for inner system use.
   */
  enum WindowMode {
    UNDEFINED = 1,
    FULLSCREEN,
    PRIMARY,
    SECONDARY,
    FLOATING,
  }

  /**
   * Get hw split stack position
   * @param splitRatio split ratio value 0 for 1:1, value 1 for 1:2, value 2 for 2:1.
   * @systemapi Hide this for inner system use.
   */
  function getSplitScreenBounds(splitRatio: number, callback: AsyncCallback<SplitScreenBoundsInfo>): void;
  /**
   * Get hw split stack position
   * @param splitRatio split ratio value 0 for 1:1, value 1 for 1:2, value 2 for 2:1.
   * @systemapi Hide this for inner system use.
   */
  function getSplitScreenBounds(splitRatio: number): Promise<SplitScreenBoundsInfo>;

  /**
   * Split screen bounds info.
   * @systemapi Hide this for inner system use.
   */
  interface SplitScreenBoundsInfo {
    readonly splitMode: SplitMode;
    readonly primaryBounds: Rect;
    readonly secondaryBounds: Rect;
  }

  /**
   * Split mode.
   * @systemapi Hide this for inner system use.
   */
  enum SplitMode {
    TOP = 0,
    LEFT,
  }

  /**
   * Whether there is a floating ability window.
   * @systemapi Hide this for inner system use.
   */
  function isFloatingAbilityWindowVisible(callback:AsyncCallback<boolean>): void
  /**
   * Whether there is a floating ability window.
   * @systemapi Hide this for inner system use.
   */
  function isFloatingAbilityWindowVisible (): Promise<boolean>;

  /**
   * Set the visibility of split bar.
   * @systemapi Hide this for inner system use.
   */
  function setSplitBarVisibility(isVisibility: boolean, callback: AsyncCallback<void>): void;
  /**
   * Set the visibility of split bar.
   * @systemapi Hide this for inner system use.
   */
  function setSplitBarVisibility(isVisibility: boolean): Promise<void>;

  /**
   * window type
   * @devices tv, phone, tablet, wearable,
   */
  enum WindowType {
    /**
     * App window
     */
    TYPE_APP,

    /**
     * window for system alert
     */
    TYPE_SYSTEM_ALERT,
  }

  /**
   * avoid area type
   * @devices tv, phone, tablet, wearable
   */
  enum AvoidAreaType {
    /**
     * area of SystemUI
     */
    TYPE_SYSTEM,
    /**
     * cutout of screen
     */
    TYPE_CUTOUT,
    /**
     * area for system gesture
     */
    TYPE_SYSTEM_GESTURE,
  }

  /**
   * Rectangle
   * @devices tv, phone, tablet, wearable
   */
  interface Rect {
    left: number;
    top: number;
    width: number;
    height: number;
  }

  /**
   * avoid area for app
   * @devices tv, phone, tablet, wearable
   */
  interface AvoidArea {
    /**
     * left of screen
     */
    left: Rect;

    /**
     * top of screen
     */
    top: Rect;

    /**
     * right of screen
     */
    width: Rect;

    /**
     * bottom of screen
     */
    height: Rect;
  }

  /**
   * window size
   * @devices tv, phone, tablet, wearable
   */
  interface Size {
    /**
     * the width of the window.
     */
    width: number;

    /**
     * the height of the window.
     */
    height: number;
  }

  /**
   * Properties of status bar and navigation bar, it couldn't update automatically
   * @devices tv, phone, tablet, wearable
   */
  interface SystemBarProperties {
    /**
     * the color of the status bar.
     */
    statusBarColor?: string;

    /**
     * the light icon of the status bar.
     */
    isStatusBarLightIcon?: boolean;

    /**
     * the color of the navigation bar.
     */
    navigationBarColor?: string;

    /**
     * the light icon of the navigation bar.
     */
    isNavigationBarLightIcon?: boolean;
  }

  /**
   * Properties of window, it couldn't update automatically
   * @devices tv, phone, tablet, wearable
   */
  interface WindowProperties {
    /**
     * the position and size of the window
     */
    windowRect: Rect;

    /**
     * window type
     */
    type: WindowType;

    /**
     * the brightness of the window
     */
    brightness: number;

    /**
     * transparent or opaque
     */
    isTransparent: boolean;

    /**
     * the flag of the window is shown full screen
     */
    isFullScreen: boolean;

    /**
     * the flag of keep screen always on as long as the window is visible
     */
    isKeepScreenOn: boolean;

    /**
     * the flag of dim all the windows behind of current window
     */
    isDimBehind: boolean;

    /**
     * the flag of extends the window to cover the full screen
     */
    isLayoutFullScreen: boolean;

    /**
     * the window is focusable
     */
    focusable: boolean;

    /**
     * the window is touchable
     */
    touchable: boolean;

    /**
     * privacy mode, screenshot is not allowed if true,
     */
    isPrivacyMode: boolean;

    /**
     * the corner of the window is round
     */
    isRoundCorner: boolean;
  }

  /**
   * interface for window
   */
  interface Window {
    /**
     * set the brightness of window
     * @param brightness the brightness of window
     * @devices tv, phone, tablet, wearable
     */
    setBrightness(brightness:number, callback: AsyncCallback<void>): void;
    setBrightness(brightness:number): Promise<void>;

    /**
     * set the background color of window
     * @param color the background color of window
     * @devices tv, phone, tablet, wearable
     */
    setBackgroundColor(color: string, callback: AsyncCallback<void>): void;
    setBackgroundColor(color: string): Promise<void>;

    /**
     * set the window transparent or opaque
     * @param isTransparent transparent or opaque
     * @devices tv, phone, tablet, wearable
     */
    setTransparent(isTransparent: boolean, callback: AsyncCallback<void>): void;
    setTransparent(isTransparent: boolean): Promise<void>;

    /**
     * set the flag of the window is shown full screen
     * @param isFullScreen the flag of the window is shown full screen
     * @devices tv, phone, tablet, wearable
     */
    setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;
    setFullScreen(isFullScreen: boolean): Promise<void>;

    /**
     * set the flag of keep screen always on
     * @param isKeepScreenOn the flag of keep screen always on
     * @devices tv, phone, tablet, wearable
     */
    setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * set the flag of dim all the windows behind of current window
     * @param dimBehindValue Indicates the degree of dim behind.
     * The value 0 indicates that background is completely transparent and the value 1 indicates that the background is completely opaque.
     * @devices tv, phone, tablet, wearable
     */
    setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void;
    setDimBehind(dimBehindValue: number): Promise<void>;

    /**
     * set the property of the window can layout in full screen
     * @param isLayoutFullScreen the window can layout in full screen
     * @devices tv, phone, tablet, wearable
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;
    setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * set the window is focusable
     * @param focusable the window is focusable
     * @devices tv, phone, tablet, wearable
     */
    setFocusable(focusable: boolean, callback: AsyncCallback<void>): void;
    setFocusable(focusable: boolean): Promise<void>;

    /**
     * set the window is touchable
     * @param touchable the window is touchable
     * @devices tv, phone, tablet, wearable
     */
    setTouchable(touchable: boolean, callback: AsyncCallback<void>): void;
    setTouchable(touchable: boolean): Promise<void>;

    /**
     * set the privacy mode of window
     * @param isPrivacyMode the privacy mode of window
     * @devices tv, phone, tablet, wearable
     */
    setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;
    setPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * set the system bar to have visible.
     * @param names the set of system bar
     * @devices tv, phone, tablet, wearable
     */
    setSystemBarEnable(names: Array<'status'|'navigation'>, callback: AsyncCallback<void>): void;
    setSystemBarEnable(names: Array<'status'|'navigation'>): Promise<void>;

    /**
     * set the background color of statusbar
     * @param color the background color of statusbar
     * @devices tv, phone, tablet, wearable
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;
    setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * get the properties of current window
     * @devices tv, phone, tablet, wearable
     */
    getProperties(callback: AsyncCallback<WindowProperties>): void;
    getProperties(): Promise<WindowProperties>;

    /**
     * get the avoid area
     * @param type: the type of avoid area.
     * @devices tv, phone, tablet, wearable
     */
    getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void;
    getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>;

    /**
     * move the window
     * @param x x coordinate of target position
     * @param y y coordinate of target position
     * @devices tv, phone, tablet, wearable
     */
    moveTo(x: number, y: number, callback: AsyncCallback<void>): void;
    moveTo(x: number, y: number): Promise<void>;

    /**
     * resize the window
     * @param width width of the window
     * @param height height of the window
     * @devices tv, phone, tablet, wearable
     */
    resetSize(width: number, height: number, callback: AsyncCallback<void>): void;
    resetSize(width: number, height: number): Promise<void>;

    /**
     * load sub window content
     * @param path window content path
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;
    loadContent(path: string): Promise<void>;

    /**
     * hide sub window.
     * @systemapi Hide this for inner system use.
     */
    hide (callback: AsyncCallback<void>): void;
    /**
     * hide sub window.
     * @systemapi Hide this for inner system use.
     */
    hide(): Promise<void>;

    /**
     * show sub window.
     */
    show(callback: AsyncCallback<void>): void;
    show(): Promise<void>;

    /**
     * Check whether the sub window is showing.
     */
    isShowing(callback: AsyncCallback<boolean>): void;
    isShowing(): Promise<boolean>;

    /**
     * Destroy the sub window.
     */
    destroy(callback: AsyncCallback<void>): void;
    destroy(): Promise<void>;

    /**
     * Sets whether the area outside the window is touchable.
     * @param touchable Indicates touchable.
     */
    setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void;
    setOutsideTouchable(touchable: boolean): Promise<void>;

    /**
     * register the callback of systemAvoidAreaChange
     * @param type: 'systemAvoidAreaChange'
     * @devices tv, phone, tablet, wearable
     */
    on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void;

    /**
     * unregister the callback of systemAvoidAreaChange
     * @param type: 'systemAvoidAreaChange'
     * @devices tv, phone, tablet, wearable
     */
    off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void;

    /**
     * register the callback of windowSizeChange
     * @param type: 'windowSizeChange'
     * @devices tv, phone, tablet, wearable
     */
    on(type: 'windowSizeChange', callback: Callback<Size>): void;

    /**
     * unregister the callback of windowSizeChange
     * @param type: 'windowSizeChange'
     * @devices tv, phone, tablet, wearable
     */
    off(type: 'windowSizeChange', callback?: Callback<Size>): void;

    /**
     * register the callback of keyboard height change.
     * @param type: 'keyboardHeightChange'
     * @devices tv, phone, tablet, wearable
     */
    on(type: 'keyboardHeightChange', callback: Callback<number>): void;

    /**
     * unregister the callback of keyboard height change.
     * @param type: 'keyboardHeightChange'
     * @devices tv, phone, tablet, wearable
     */
    off(type: 'keyboardHeightChange', callback?: Callback<number>): void;
  }
}


export default window;