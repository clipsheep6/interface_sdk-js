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
 * Sets the initial state of the slidable panel.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum PanelMode {
  /**
   * Minimum state.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Mini,

  /**
   * SHalf-screen-like status
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Half,

  /**
   * Class Full Screen Status.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Full,
}

/**
 * Sets the type of sliding panel.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum PanelType {
  /**
   * The switch between the minibar and full-screen display is provided.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Minibar,

  /**
   * Permanent content display class.
   * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Foldable,

  /**
   * Temporary content display area.
   * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Temporary,
}

/**
 * Provides a sliding panel interface.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface PanelInterface {
  /**
   * Called when the panel slidable panel pops up.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (show: boolean): PanelAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class PanelAttribute extends CommonMethod<PanelAttribute> {
  /**
   * Called when the initial state of the slidable panel is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  mode(value: PanelMode): PanelAttribute;

  /**
   * Called when the slidable panel type is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  type(value: PanelType): PanelAttribute;

  /**
   * Called when determining whether dragbar exists.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  dragBar(value: boolean): PanelAttribute;

  /**
   * Called when the height in the full state is specified.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fullHeight(value: number | string): PanelAttribute;

  /**
   * Called when the height in the half state is specified.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  halfHeight(value: number | string): PanelAttribute;

  /**
   * Called when the height in the mini state is specified.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  miniHeight(value: number | string): PanelAttribute;

  /**
   * Called when the panel slidable panel pops up.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  show(value: boolean): PanelAttribute;

  /**
   * Called when the state of the slidable panel changes.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onChange(
    event: (
      /**
       * Width of content area.
       * @since 7
* @Syscap SystemCapability.ArkUI.Standard
       */
      width: number,

      /**
       * Height of content area.
       * @since 7
* @Syscap SystemCapability.ArkUI.Standard
       */
      height: number,

      /**
       * Initial state.
       * @since 7
* @Syscap SystemCapability.ArkUI.Standard
       */
      mode: PanelMode,
    ) => void,
  ): PanelAttribute;
}

declare const Panel: PanelInterface;
declare const PanelInstance: PanelAttribute;
