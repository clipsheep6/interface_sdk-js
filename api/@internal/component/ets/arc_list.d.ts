/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Called when the start, end and center positions of the display change.
 *
 * @typedef { function } OnScrollIndexCallback
 * @param { number } start - the start index of the display area.
 * @param { number } end - the end index of the display area.
 * @param { number } center - the center index of the display area.
 * @returns { void }
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnScrollIndexCallback = (start: number, end: number, center: number) => void;

/**
 * Defines the arc list options.
 *
 * @interface ArkListOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface ArkListOptions {
  initialIndex?: number;
  scroller?: Scroller;
  header?: ComponentContent;
}

/**
 * The arc list interface is extended.
 *
 * @interface ArcListInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
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
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (value?: ArkListOptions): ArcListAttribute;
}

/**
 * Defines the arc list attribute functions.
 * 
 * @extends CommonMethod<ArcListAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ArcListAttribute extends CommonMethod<ArcListAttribute> {
  /**
   * Called to setting the digital crown sensitivity.
   *
   * @param { CrownSensitivity } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  digitalCrownSensitivity(value: CrownSensitivity): ArcListAttribute;

  /**
   * Called when setting the space between items
   *
   * @param { number | string } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  space(value: number | string): ArcListAttribute;

  /**
   * Called when the display mode of the side slider is set.
   *
   * @param { BarState } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBar(value: BarState): ArcListAttribute;

  /**
   * Color of the scrollbar.
   *
   * @param { Color | number | string } value - Color of the scrollbar.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBarColor(value: Color | number | string): ArcListAttribute;

  /**
   * Width of the scrollbar.
   *
   * @param { number | string } value  - Width of the scrollbar.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBarWidth(value: number | string): ArcListAttribute;

  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   *
   * @param { number } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  cachedCount(value: number): ArcListAttribute;

  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   *
   * @param { boolean } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  chainAnimation(value: boolean): ArcListAttribute;

  /**
   * Set children main size for List.
   *
   * @param { ChildrenMainSize } value - children main size for List
   * @returns { ArcListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  childrenMainSize(value: ChildrenMainSize): ArcListAttribute;

  /**
   * Called when setting whether to enable scroll by gesture or mouse.
   *
   * @param { boolean } value
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enableScrollInteraction(value: boolean): ArcListAttribute;

  /**
   * Called when setting whether to enable fading Edge effect.
   *
   * @param { Optional<boolean> } value - Whether to turn on the edge fade effect
   * @returns { ArcListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fadingEdge(value: Optional<boolean>): ArcListAttribute;

  /**
   * Called to setting the friction.
   *
   * @param { number | Resource } value - options for scrolling friction.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  friction(value: number | Resource): ArcListAttribute;

  /**
   * Limit the max speed when fling.
   *
   * @param { number } value - Max fling speed, the minimum value is 0, the maximum value is not limited.
   *                           The unit is vp/s.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  flingSpeedLimit(value: number): ArcListAttribute;

  /**
   * Called when the start, end and center positions of the display change.
   *
   * @param { function } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollIndex(event: OnScrollIndexCallback): ArcListAttribute;

  /**
   * Called when the list begins to arrive.
   *
   * @param { VoidCallback } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onReachStart(event: VoidCallback): ArcListAttribute;

  /**
   * Called when the list reaches the end.
   *
   * @param { VoidCallback } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onReachEnd(event: VoidCallback): ArcListAttribute;

  /**
   * Called when the slider start.
   *
   * @param { VoidCallback } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollStart(event: VoidCallback): ArcListAttribute;

  /**
   * Called when the slider stops.
   *
   * @param { VoidCallback } event
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollStop(event: VoidCallback): ArcListAttribute;

  /**
   * Called when the scrollable will scroll.
   *
   * @param { Optional<OnWillScrollCallback> } handler - callback of scrollable.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillScroll(handler: Optional<OnWillScrollCallback>): ArcListAttribute;

  /**
   * Called when the scrollable did scroll.
   *
   * @param { OnScrollCallback } handler - callback of scrollable,
   * scrollOffset is offset this frame did scroll, scrollState is current scroll state.
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onDidScroll(handler: OnScrollCallback): ArcListAttribute;
}

/**
 * Defines ArcList Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcList: ArcListInterface;

/**
 * Defines ArcList Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcListInstance: ArcListAttribute;
