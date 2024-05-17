/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * Declare digital crown sensitivity.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum DigitalCrownSensitivity {
  /**
   * Low.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  Low = 0,

  /**
   * Medium.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  Medium = 1,

  /**
   * High.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  High = 2,
}

/**
 * The arc list interface is extended.
 *
 * @interface ArcListInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface ArcListInterface {
  /**
   * Called when interface data is called.
   *
   * @param { object } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (value?: { initialIndex?: number; space?: number | string; scroller?: Scroller; header?: CustomBuilder; }): ArcListAttribute;
}

/**
 * @extends ScrollableCommonMethod<ArcListAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ArcListAttribute extends ScrollableCommonMethod<ArcListAttribute> {
  /**
   * Called to setting the digital crown sensitivity.
   *
   * @param { DigitalCrownSensitivity } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  digitalCrownSensitivity(value: DigitalCrownSensitivity): ArcListAttribute;

  /**
   * Called when the display mode of the side slider is set.
   *
   * @param { BarState } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBar(value: BarState): ArcListAttribute;

  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   *
   * @param { number } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  cachedCount(value: number): ArcListAttribute;

  /**
   * Called to setting the nested scroll options.
   *
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  nestedScroll(value: NestedScrollOptions): ArcListAttribute;

  /**
   * Called when setting whether to enable scroll by gesture or mouse.
   *
   * @param { boolean } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enableScrollInteraction(value: boolean): ArcListAttribute;

  /**
   * Called to setting the friction.
   *
   * @param { number | Resource } value - options for scrolling friction.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  friction(value: number | Resource): ArcListAttribute;

  /**
   * Called when the start and end positions of the display change.
   *
   * @param { function } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollIndex(event: (start: number, end: number, center: number) => void): ArcListAttribute;

  /**
   * Called when the list begins to arrive.
   *
   * @param { function } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onReachStart(event: () => void): ArcListAttribute;

  /**
   * Called when the list reaches the end.
   *
   * @param { function } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onReachEnd(event: () => void): ArcListAttribute;

  /**
   * Called when the slider start.
   *
   * @param { function } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollStart(event: () => void): ArcListAttribute;

  /**
   * Called when the slider stops.
   *
   * @param { function } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollStop(event: () => void): ArcListAttribute;

  /**
   * Called when scrolling begin each frame.
   *
   * @param { function } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollFrameBegin(event: (offset: number, state: ScrollState) => { offsetRemain: number }): ArcListAttribute;
}

/**
 * Defines ArcList Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcList: ArcListInterface;

/**
 * Defines ArcList Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcListInstance: ArcListAttribute;
