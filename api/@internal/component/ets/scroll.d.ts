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
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ScrollDirection {
  /**
   * Vertical scrolling is supported.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Vertical,

  /**
   * Horizontal scrolling is supported.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Horizontal,

  /**
   * Free scrolling is supported.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Free,

  /**
   * Non-scrollable.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class Scroller {
  /**
   * constructor.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor();

  /**
   * Called when the setting slides to the specified position.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollTo(value: {
    xOffset: number | string;
    yOffset: number | string;
    animation?: { duration: number; curve: Curve };
  });

  /**
   * Called when scrolling to the edge of the container.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollEdge(value: Edge);

  /**
   * Called when page turning mode is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollPage(value: { next: boolean; direction?: Axis });

  /**
   * Called when viewing the scroll offset.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  currentOffset();

  /**
   * Called when sliding to the specified index.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollToIndex(value: number);
}

/**
 * Provides interfaces for scrollable containers.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ScrollInterface {
  /**
   * Called when a scrollable container is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (scroller?: Scroller): ScrollAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class ScrollAttribute extends CommonMethod<ScrollAttribute> {
  /**
   * Called when the scroll method is slid.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollable(value: ScrollDirection): ScrollAttribute;

  /**
   * Called when the setting slides to the specified position.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onScroll(event: (xOffset: number, yOffset: number) => void): ScrollAttribute;

  /**
   * Called when scrolling to the edge of the container.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onScrollEdge(event: (side: Edge) => void): ScrollAttribute;

  /**
   * Called when scrolling has stopped.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onScrollEnd(event: () => void): ScrollAttribute;

  /**
   * Called when the status of the scroll bar is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollBar(barState: BarState): ScrollAttribute;

  /**
   * Called when the color of the scroll bar is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollBarColor(color: Color | number | string): ScrollAttribute;

  /**
   * Called when the width of the scroll bar is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollBarWidth(value: number | string): ScrollAttribute;

  /**
   * Called when the sliding effect is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  edgeEffect(edgeEffect: EdgeEffect): ScrollAttribute;
}

declare const Scroll: ScrollInterface;
declare const ScrollInstance: ScrollAttribute;
