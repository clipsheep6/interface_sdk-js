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
 * Declare scroll status
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ScrollState {
  /**
   * Not activated.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Idle,

  /**
   * Scrolling status.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Scroll,

  /**
   * Drag status.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Fling,
}



/**
 * The list interface is extended.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ListInterface {
  /**
   * Called when interface data is called.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: { initialIndex?: number; space?: number | string; scroller?: Scroller }): ListAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class ListAttribute extends CommonMethod<ListAttribute> {
  /**
   * Called when the arrangement direction of the list component is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  listDirection(value: Axis): ListAttribute;

  /**
   * Called when the display mode of the side slider is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollBar(value: BarState): ListAttribute;

  /**
   * Called when the sliding effect is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  edgeEffect(value: EdgeEffect): ListAttribute;

  /**
   * Called when the ListItem split line style is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  divider(
    value: {
      strokeWidth: Length;
      color?: ResourceColor;
      startMargin?: Length;
      endMargin?: Length;
    } | null,
  ): ListAttribute;

  /**
   * Called when judging whether it is in editable mode.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  editMode(value: boolean): ListAttribute;

  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  cachedCount(value: number): ListAttribute;

  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  chainAnimation(value: boolean): ListAttribute;

  /**
   * Called when the offset and status callback of the slide are set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): ListAttribute;

  /**
   * Called when the start and end positions of the display change.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onScrollIndex(event: (start: number, end: number) => void): ListAttribute;

  /**
   * Called when the list begins to arrive.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onReachStart(event: () => void): ListAttribute;

  /**
   * Called when the list reaches the end.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onReachEnd(event: () => void): ListAttribute;

  /**
   * Called when the slider stops.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onScrollStop(event: () => void): ListAttribute;

  /**
   * Called when a list item is deleted.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDelete(event: (index: number) => boolean): ListAttribute;

  /**
   * Called when a list item is moved.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemMove(event: (from: number, to: number) => boolean): ListAttribute;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => ((() => any) | void)): ListAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): ListAttribute;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): ListAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): ListAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDrop(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void): ListAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const List: ListInterface;
declare const ListInstance: ListAttribute;
