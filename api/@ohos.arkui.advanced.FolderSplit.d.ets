/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

import window from './@ohos.window';

/**
 * Declare enum FolderSplitLayout
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
export declare enum FolderSplitLayout {
  /**
   * Default layout 1:1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  LAYOUT_DEFAULT = 0,

  /**
   * Layout 3:2.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  LAYOUT_3_2 = 1,

  /**
   * Layout 2:3.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  LAYOUT_2_3 = 2,

  /**
   * Layout 1:0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  LAYOUT_1_0 = 3,

  /**
   * Layout 0:1.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  LAYOUT_0_1 = 4
}

/**
 * Declare enum FolderSplitEvent
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
export declare enum FolderSplitEvent {

    /**
     * Hide the extended region.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    EXT_HIDE = 0,

    /**
     * Show the extended region.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    EXT_SHOW = 1,

    /**
     * ReLayout.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    RE_LAYOUT = 2
}

/**
 * Declare enum DirectionType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
export declare enum DirectionType {
    /**
     * Set the horizontal direction.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    HORIZONTAL = 0,

    /**
     * Set the vertical direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    VERTICAL = 1
}

/**
 * Declare Component FolderSplit
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
@Component
export declare struct FolderSplit {

    /**
     * Container in the user-defined major display area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */ 
    @BuilderParam majorContainer: () => void;

    /**
     * Container in the user-defined minor display area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    @BuilderParam minorContainer: () => void;

    /**
     * Container in the user-defined extended display area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    @BuilderParam extContainer: () => void;

    /**
     * Sets the vertical layout style.
     *
     * @type { FolderSplitLayout }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    @Prop verticalLayout: FolderSplitLayout;

    /**
     * Sets the horizontal layout style.
     *
     * @type { FolderSplitLayout }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    @Prop horizontalLayout: FolderSplitLayout;

    /**
     * The main window of the stage.
     *
     * @type { window.WindowStage }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    @Link windowStage: window.WindowStage;

    /**
     * Called when the FolderSplit component has changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    onLayoutChanged?: (event: FolderSplitEvent) => void;

    /**
     * Sets the direction for the main window.
     *
     * @type { DirectionType }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 12
     */
    direction?: DirectionType;
}