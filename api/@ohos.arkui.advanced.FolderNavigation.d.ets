/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
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

import window from './@ohos.window';

/**
 * Declare enum FolderNavLayout
 * @enum { ItemState }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
export declare enum FolderNavLayout {
  /**
   * Default layout 1:1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  LAYOUT_DEFAULT = 0,
  /**
   * Layout 3:2.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  LAYOUT_3_2 = 1,
  /**
   * Layout 2:3.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  LAYOUT_2_3 = 2,
  /**
   * Layout 1:0.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  LAYOUT_1_0 = 3,
  /**
   * Layout 0:1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  LAYOUT_0_1 = 4
}

/**
 * Declare enum FolderNavEvent
 * @enum { ItemState }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
export declare enum FolderNavEvent {
  /**
   * Hide the extended region.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  EXT_HIDE = 0,
  /**
   * Show the extended region.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  EXT_SHOW = 1,
  /**
   * ReLayout.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  RELAYOUT = 2
}

/**
 * Declare Component FolderNavigation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
@Component
export declare struct FolderNavigation {
  /**
     * Container in the user-defined major display area.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */ 
  @BuilderParam majorContainer: () => void;
  /**
     * Container in the user-defined minor display area.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
   */
  @BuilderParam minorContainer: () => void;
  /**
     * Container in the user-defined extended display area.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
   */
  @BuilderParam extContainer: () => void;
  /**
   * Sets the vertical layout style.
   * @type { FolderNavLayout }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  @Prop verticalLayout: FolderNavLayout;
  /**
   * Sets the horizontal layout style.
   * @type { FolderNavLayout }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  @Prop horizontalLayout: FolderNavLayout;
  /**
   * Sets the TipsDialog checkbox check state.
   * @type { boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  isAutoRotation?: boolean;
  /**
   * The main window of the stage.
   * @type { window.WindowStage }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  @Link windowStage: window.WindowStage;
  /**
   * Called when the Folder navigation has changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  onLayoutChanged?: (event: FolderNavEvent) => void;
}