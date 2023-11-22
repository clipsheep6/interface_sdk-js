/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * Interface of screen manager
 *
 * @namespace screen
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 9
 */
declare namespace screen {
  /**
   * Get all screen instances, then can get or set detail information.
   *
   * @param { AsyncCallback<Array<Screen>> } callback the callback of all screens info
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getAllScreens(callback: AsyncCallback<Array<Screen>>): void;

  /**
   * Get all screen instances, then can get or set detail information.
   *
   * @returns { Promise<Array<Screen>> } the result of all screens info
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getAllScreens(): Promise<Array<Screen>>;

  /**
   * Register the callback for screen changes.
   *
   * @param { 'connect' | 'disconnect' | 'change' } eventType the event of screen changes
   * @param { Callback<number> } callback Callback used to return the screen ID
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<number>): void;

  /**
   * Unregister the callback for screen changes.
   *
   * @param { 'connect' | 'disconnect' | 'change' } eventType the event of screen changes
   * @param { Callback<number> } callback Callback used to return the screen ID
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<number>): void;

  /**
   * Make screens as expand-screen
   *
   * @param { Array<ExpandOption> } options Parameters for expanding the screen
   * @param { AsyncCallback<number> } callback callback used to return the group ID of the expanded screens
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function makeExpand(options: Array<ExpandOption>, callback: AsyncCallback<number>): void;

  /**
   * Make screens as expand-screen
   *
   * @param { Array<ExpandOption> } options Parameters for expanding the screen
   * @returns { Promise<number> } used to return the group ID of the expanded screens
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function makeExpand(options: Array<ExpandOption>): Promise<number>;

  /**
   * Stop expand screens
   *
   * @param { Array<number> } expandScreen IDs of expand screens to stop
   * @param { AsyncCallback<number> } callback used to return the result
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function stopExpand(expandScreen: Array<number>, callback: AsyncCallback<void>): void;

  /**
   * Stop expand screens
   *
   * @param { Array<number> } expandScreen IDs of expand screens to stop
   * @returns { Promise<void> } promise used to return the result
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function stopExpand(expandScreen: Array<number>): Promise<void>;

  /**
   * Make screens as mirror-screen
   *
   * @param { number } mainScreen ID of the primary screen
   * @param { Array<number> } mirrorScreen IDs of secondary screens
   * @param { AsyncCallback<number> } callback Callback used to return the group ID of the secondary screens
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function makeMirror(mainScreen: number, mirrorScreen: Array<number>, callback: AsyncCallback<number>): void;

  /**
   * Make screens as mirror-screen
   *
   * @param { number } mainScreen ID of the primary screen
   * @param { Array<number> } mirrorScreen IDs of secondary screens
   * @returns { Promise<number> } Promise used to return the group ID of the secondary screens
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function makeMirror(mainScreen: number, mirrorScreen: Array<number>): Promise<number>;

  /**
   * Stop mirror screens
   *
   * @param { Array<number> } mirrorScreen IDs of mirror screens to stop
   * @param { AsyncCallback<void> } callback used to return the result
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function stopMirror(mirrorScreen: Array<number>, callback: AsyncCallback<void>): void;

  /**
   * Stop mirror screens
   *
   * @param { Array<number> } mirrorScreen IDs of mirror screens to stop
   * @returns { Promise<void> } promise used to return the result
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function stopMirror(mirrorScreen: Array<number>): Promise<void>;

  /**
   * Create virtual screen. if surfaceId is valid, this permission is necessary.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { VirtualScreenOption } options Indicates the options of the virtual screen.
   * @param { AsyncCallback<Screen> } callback Callback used to return the created virtual screen
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function createVirtualScreen(options: VirtualScreenOption, callback: AsyncCallback<Screen>): void;

  /**
   * Create virtual screen. if surfaceId is valid, this permission is necessary.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { VirtualScreenOption } options Indicates the options of the virtual screen.
   * @returns { Promise<Screen> } Promise used to return the created virtual screen
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function createVirtualScreen(options: VirtualScreenOption): Promise<Screen>;

  /**
   * Destroy virtual screen.
   *
   * @param { number } screenId Indicates the screen id of the virtual screen.
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400002 - Unauthorized operation.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function destroyVirtualScreen(screenId: number, callback: AsyncCallback<void>): void;

  /**
   * Destroy virtual screen.
   *
   * @param { number } screenId Indicates the screen id of the virtual screen.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400002 - Unauthorized operation.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function destroyVirtualScreen(screenId: number): Promise<void>;

  /**
   * Set surface for the virtual screen.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { number } screenId Indicates the screen id of the virtual screen.
   * @param { string } surfaceId Indicates the surface id.
   * @param { AsyncCallback<void> } callback Callback used to return the result
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setVirtualScreenSurface(screenId: number, surfaceId: string, callback: AsyncCallback<void>): void;

  /**
   * Set surface for the virtual screen.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { number } screenId Indicates the screen id of the virtual screen.
   * @param { string } surfaceId Indicates the surface id.
   * @returns { Promise<void> } Promise that returns no value
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setVirtualScreenSurface(screenId: number, surfaceId: string): Promise<void>;

  /**
   * Get screen rotation lock status.
   *
   * @param { AsyncCallback<boolean> } callback If true, auto rotate is locked. If false, auto rotate is unlocked
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function isScreenRotationLocked(callback: AsyncCallback<boolean>): void;

  /**
   * Get screen rotation lock status.
   *
   * @returns { Promise<boolean> } If true, auto rotate is locked. If false, auto rotate is unlocked
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function isScreenRotationLocked(): Promise<boolean>;

  /**
   * Set screen rotation lock status.
   *
   * @param { boolean } isLocked Indicates whether the screen rotation switch is locked.
   * @param { AsyncCallback<void> } callback Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setScreenRotationLocked(isLocked: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set screen rotation lock status.
   *
   * @param { boolean } isLocked Indicates whether the screen rotation switch is locked.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setScreenRotationLocked(isLocked: boolean): Promise<void>;

  /**
   * The parameter of making expand screen
   *
   * @interface ExpandOption
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface ExpandOption {
    /**
     * Screen id
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    screenId: number;

    /**
     * The start coordinate X of the screen origin
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    startX: number;

    /**
     * The start coordinate Y of the screen origin
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    startY: number;
  }

  /**
   * The parameter for creating virtual screen.
   *
   * @interface VirtualScreenOption
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface VirtualScreenOption {
    /**
     * Indicates the name of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    name: string;

    /**
     * Indicates the width of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    width: number;

    /**
     * Indicates the height of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    height: number;

    /**
     * Indicates the density of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    density: number;

    /**
     * Indicates the surface id of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    surfaceId: string;
  }

  /**
   * Indicate the source mode of the screen
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  enum ScreenSourceMode {
    /**
     * Indicate that the screen is the default screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SCREEN_MAIN = 0,

    /**
     * Indicate that the screen is in mirror mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SCREEN_MIRROR = 1,

    /**
     * Indicate that the screen is in extend mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SCREEN_EXTEND = 2,

    /**
     * Indicate that the screen stands alone.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    SCREEN_ALONE = 3
  }

  /**
   * Interface for screen
   *
   * @interface Screen
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface Screen {
    /**
     * Screen id
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly id: number;

    /**
     * Group id
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly parent: number;

    /**
     * Mode supported by the screen
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly supportedModeInfo: Array<ScreenModeInfo>;

    /**
     * Currently active mode
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly activeModeIndex: number;

    /**
     * Orientation of the screen
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    readonly orientation: Orientation;

    /**
     * Source mode of the screen
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    readonly sourceMode: ScreenSourceMode;

    /**
     * Set the orientation of the screen
     *
     * @param { Orientation } orientation Screen orientation.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setOrientation(orientation: Orientation, callback: AsyncCallback<void>): void;

    /**
     * Set the orientation of the screen
     *
     * @param { Orientation } orientation Screen orientation.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setOrientation(orientation: Orientation): Promise<void>;

    /**
     * Active the mode
     *
     * @param { number } modeIndex Index of the mode to set.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setScreenActiveMode(modeIndex: number, callback: AsyncCallback<void>): void;

    /**
     * Active the mode
     *
     * @param { number } modeIndex Index of the mode to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setScreenActiveMode(modeIndex: number): Promise<void>;

    /**
     * Set display density of the screen
     *
     * @param { number } densityDpi Pixel density. The value ranges from 80 to 640.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setDensityDpi(densityDpi: number, callback: AsyncCallback<void>): void;

    /**
     * Set display density of the screen
     *
     * @param { number } densityDpi Pixel density. The value ranges from 80 to 640.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    setDensityDpi(densityDpi: number): Promise<void>;
  }

  /**
   * Screen orientation
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  enum Orientation {
    UNSPECIFIED = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
    REVERSE_VERTICAL = 3,
    REVERSE_HORIZONTAL = 4
  }

  /**
   * The information of the screen
   *
   * @interface ScreenModeInfo
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface ScreenModeInfo {
    id: number;
    width: number;
    height: number;
    refreshRate: number;
  }

  /**
     * Get all supported color space.
     *
     * @returns { Promise<ColorSpace> } The result of all supported color space.
     * @throws { BusinessError } 801 - Capability not supported on this device.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
  function GetSupportedColorSpaces(): Promise<Array<ColorSpace>>;

  /**
   * Get all supported color space.
   *
   * @param { AsyncCallback<ColorSpace> } callback The callback of all supported color space.
   * @throws { BusinessError } 801 - Capability not supported on this device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 11
   */
  function GetSupportedColorSpaces(callback: AsyncCallback<Array<ColorSpace>>): void;

  /**
   * Get all supported HDR formats.
   *
   * @returns { Promise<HDRFormat> } The result of all supported HDR formats.
   * @throws { BusinessError } 801 - Capability not supported on this device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 11
   */
  function GetSupportedHDRFormats(): Promise<Array<HDRFormat>>;

  /**
   * Get all supported HDR formats.
   *
   * @param { AsyncCallback<HDRFormat> } callback The callback of all supported HDR formats.
   * @throws { BusinessError } 801 - Capability not supported on this device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 11
   */
  function GetSupportedHDRFormats(callback: AsyncCallback<Array<HDRFormat>>): void;

  /**
   * Screen Color Space
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 11
   */
  enum ColorSpace {
    /**
     * UNKNOWN color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    UNKNOWN = 0,
    /**
     * ADOBE_RGB color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    ADOBE_RGB = 1,
    /**
     * BT2020_HLG color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    BT2020_HLG = 2,
    /**
     * BT2020_PQ color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    BT2020_PQ= 3,
    /**
     * BT2020_SRGB color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    BT2020_SRGB= 4,
    /**
     * BT601_EBU color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    BT601_EBU = 5,
    /**
     * BT601_SMPTE_C color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    BT601_SMPTE_C = 6,
    /**
     * BT709 color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    BT709 = 7,
    /**
     * P3_HLG color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    P3_HLG = 8,
    /**
     * P3_PQ color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    P3_PQ = 9,
    /**
     * DISPLAY_P3 color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    DISPLAY_P3 = 10,
    /**
     * SRGB color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    SRGB = 11,
    /**
     * LINEAR_SRGB color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    LINEAR_SRGB = 12,
    /**
     * LINEAR_P3 color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    LINEAR_P3 = 15,
    /**
     * LINEAR_BT2020 color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    LINEAR_BT2020 = 14
  }

  /**
   * Screen HDR Format
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 11
   */
  enum HDRFormat {
    /**
     * Not support HDR.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    NONE = 0,
    /**
     * HLG format supported by video.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    VIDEO_HLG = 1,
    /**
     * HDR10 format supported by video.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    VIDEO_HDR10 = 2,
    /**
     * HDR Vivid format supported by video.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    VIDEO_HDR_VIVID = 3,
    /**
     * HDR Vivid format supported by image, stored in dual JPEG format.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    IMAGE_HDR_VIVID_DUAL = 4,
    /**
     * HDR Vivid format supported by image, stored in single HEIF format.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    IMAGE_HDR_VIVID_SINGLE = 5,
    /**
     * ISO HDR format supported by image, stored in dual JPEG format.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    IMAGE_HDR_ISO_DUAL = 6,
    /**
     * ISO HDR format supported by image, stored in single HEIF format.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    IMAGE_HDR_ISO_SINGLE = 7
  }
}

export default screen;
