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
 * Content scroll direction.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ScrollBarDirection {
  /**
   * Vertical scrolling is supported.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Vertical,

  /**
   * Horizontal scrolling is supported.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Horizontal,
}

/**
 * Defines the option of ScrollBar.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface ScrollBarOption {
  /**
   * Sets the scroller of scroll bar.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  scroller: Scroller;

  /**
   * Sets the direction of scroll bar.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  direction?: ScrollBarDirection;

  /**
   * Sets the state of scroll bar.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  state?: BarState;
}

/**
 * Provides interfaces for scroll bar.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ScrollBarInterface {
  /**
   * Called when a ScrollBar container is set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value: ScrollBarOption): ScrollBarAttribute;
}

/**
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class ScrollBarAttribute extends CommonMethod<ScrollBarAttribute> {}
declare const ScrollBar: ScrollBarInterface;
declare const ScrollBarInstance: ScrollBarAttribute;
