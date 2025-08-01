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

/*** if arkts 1.2 */
import { EdgeEffectOptions, NestedScrollOptions, ItemDragInfo, ScrollableCommonMethod, Optional, CommonMethod, OnWillScrollCallback, OnScrollCallback, OnItemDragStartCallback } from './common';
import { Length, Resource } from './units';
import { Scroller, OnScrollFrameBeginCallback } from './scroll';
import { ScrollState } from './list';
import { BarState, Color, EdgeEffect } from './enums';
/*** endif */

/**
 * The options to help grid layout
 *
 * @interface GridLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The options to help grid layout
 *
 * @interface GridLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface GridLayoutOptions {
  /**
   * The size of most grid items, in [rows, columns], generally [1, 1]
   *
   * @type { [number, number] } regularSize
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The size of most grid items, in [rows, columns], generally [1, 1]
   *
   * @type { [number, number] } regularSize
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  regularSize: [number, number];

  /**
   * The indexes of grid items with irregular size.
   *
   * @type { ?number[] } irregularIndexes
   * @default number[] no irregular grid item
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The indexes of grid items with irregular size.
   *
   * @type { ?number[] } irregularIndexes
   * @default number[] no irregular grid item
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  irregularIndexes?: number[];

  /**
   * Called to return the size of the irregular grid items with the specified index in [rows, columns].
   *
   * @type { ?function } onGetIrregularSizeByIndex, 
   * all irregular grid items will occupy an entire line if not set
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called to return the size of the irregular grid items with the specified index in [rows, columns].
   *
   * @type { ?function } onGetIrregularSizeByIndex, 
   * all irregular grid items will occupy an entire line if not set
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onGetIrregularSizeByIndex?: (index: number) => [number, number]

  /**
   * Called to return the size of the grid items with the specified index in 
   * [rowStart, columnStart, rowSpan, columnSpan].
   *
   * @type { ?function } onGetRectByIndex
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called to return the size of the grid items with the specified index in 
   * [rowStart, columnStart, rowSpan, columnSpan].
   *
   * @type { ?function } onGetRectByIndex
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onGetRectByIndex?: (index: number) => [number, number, number, number]
}

/**
 * Defines the grid interface.
 *
 * @interface GridInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the grid interface.
 *
 * @interface GridInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the grid interface.
 *
 * @interface GridInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface GridInterface {
  /**
   * Grid is returned when the parameter is transferred.
   *
   * @param { Scroller } scroller
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Grid is returned when the parameter is transferred.
   *
   * @param { Scroller } scroller - Controller bound to the grid
   * @param { GridLayoutOptions } layoutOptions - The options to help grid layout
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Grid is returned when the parameter is transferred.
   *
   * @param { Scroller } scroller - Controller bound to the grid
   * @param { GridLayoutOptions } layoutOptions - The options to help grid layout
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (scroller?: Scroller, layoutOptions?: GridLayoutOptions): GridAttribute;
}

/**
 * The enum of property layoutDirection
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The enum of property layoutDirection
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The enum of property layoutDirection
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum GridDirection {
  /**
   * The row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Row,

  /**
   * The column direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The column direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The column direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Column,

  /**
   * The row reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The row reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The row reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  RowReverse,

  /**
   * The column reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The column reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The column reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ColumnReverse,
}

/**
 * Declare grid item alignment status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum GridItemAlignment {

  /**
   * Use the default alignment of the Grid.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DEFAULT = 0,

  /**
   * The height of the tallest grid item in the current line 
   * will be used as the height for the other items in the same line
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  STRETCH = 1,
}

/**
 * The attribute of scrollbar to compute scrollbar position and height.
 *
 * @interface ComputedBarAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The attribute of scrollbar to compute scrollbar position and height.
 *
 * @interface ComputedBarAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface ComputedBarAttribute {
  /**
   * The offset of the grid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The offset of the grid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  totalOffset: number;

  /**
   * The range of the grid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The range of the grid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  totalLength: number;
}

/**
 * Defines a UIGridEvent which is used to set event to target component.
 *
 * @extends UIScrollableCommonEvent
 * @interface UIGridEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare interface UIGridEvent extends UIScrollableCommonEvent {
  /**
   * Set or reset the callback which is triggered when the Grid will scroll.
   *
   * @param { OnWillScrollCallback | undefined } callback - callback function, triggered when the Grid will scroll.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  setOnWillScroll(callback: OnWillScrollCallback | undefined): void;

  /**
   * Set or reset the callback which is triggered when the Grid did scroll.
   *
   * @param { OnScrollCallback | undefined } callback - callback function, triggered when the Grid did scroll.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;

  /**
   * Set or reset the callback which is triggered when the start and end positions of the display change.
   *
   * @param { OnGridScrollIndexCallback | undefined } callback - callback function, triggered when start or
   *     end positions of the display change.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  setOnScrollIndex(callback: OnGridScrollIndexCallback | undefined): void;
}

/**
 * Defines the callback type used in onScrollIndex.
 *
 * @typedef {function} OnGridScrollIndexCallback
 * @param {number} first - the first index in visible content.
 * @param {number} last - the last index in visible content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare type OnGridScrollIndexCallback = (first: number, last: number) => void;

/**
 * Defines the grid attribute functions.
 *
 * @extends CommonMethod<GridAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the grid attribute functions.
 *
 * @extends CommonMethod<GridAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the grid attribute functions.
 *
 * @extends ScrollableCommonMethod<GridAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class GridAttribute extends ScrollableCommonMethod<GridAttribute> {
  /**
   * This parameter specifies the number of columns in the current grid layout.
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * This parameter specifies the number of columns in the current grid layout.
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * This parameter specifies the number of columns in the current grid layout.
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  columnsTemplate(value: string): GridAttribute;

  /**
   * Lets you set the number of rows in the current grid layout,
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Lets you set the number of rows in the current grid layout,
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Lets you set the number of rows in the current grid layout,
   *
   * @param { string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  rowsTemplate(value: string): GridAttribute;

  /**
   * Allows you to set the spacing between columns.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Allows you to set the spacing between columns.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Allows you to set the spacing between columns.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  columnsGap(value: Length): GridAttribute;

  /**
   * Lets you set the spacing between rows.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Lets you set the spacing between rows.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Lets you set the spacing between rows.
   *
   * @param { Length } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  rowsGap(value: Length): GridAttribute;

  /**
   * This parameter specifies the width of the scroll bar.
   *
   * @param { number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * This parameter specifies the width of the scroll bar.
   *
   * @param { number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * This parameter specifies the width of the scroll bar.
   *
   * @param { number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scrollBarWidth(value: number | string): GridAttribute;

  /**
   * Sets the color of the scroll bar.
   *
   * @param { Color | number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the color of the scroll bar.
   *
   * @param { Color | number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the color of the scroll bar.
   *
   * @param { Color | number | string } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scrollBarColor(value: Color | number | string): GridAttribute;

  /**
   * Lets you set the spacing between rows.
   *
   * @param { BarState } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Lets you set the spacing between rows.
   *
   * @param { BarState } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Lets you set the spacing between rows.
   *
   * @param { BarState } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scrollBar(value: BarState): GridAttribute;

  /**
   * Set scrollbar position.
   *
   * @param { function } event - callback of grid scroll,
   * index is the current first displayed item, offset is the grid offset,
   * return ComputedBarAttribute to update scrollbar position and height.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set scrollbar position.
   *
   * @param { function } event - callback of grid scroll,
   * index is the current first displayed item, offset is the grid offset,
   * return ComputedBarAttribute to update scrollbar position and height.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onScrollBarUpdate(event: (index: number, offset: number) => ComputedBarAttribute): GridAttribute;

  /**
   * Called when the first item displayed in the grid changes.
   *
   * @param { function } event - of grid scroll,
   * first is the index of the first item of the grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the first or last item displayed in the grid changes.
   *
   * @param { function } event - of grid scroll,
   * first is the index of the first item displayed in the grid, 
   * last is the index of the last item displayed in the grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the first or last item displayed in the grid changes.
   *
   * @param { function } event - of grid scroll,
   * first is the index of the first item displayed in the grid, 
   * last is the index of the last item displayed in the grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onScrollIndex(event: (first: number, last: number) => void): GridAttribute;

  /**
   * cached Count
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * cached Count
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * cached Count
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  cachedCount(value: number): GridAttribute;

  /**
   * Called to set number of GridItems to be preloaded (cached) in LazyForEach / Repeat. 
   * @param { number } count - number of GridItems to be preloaded (cached).
   * @param { boolean } show - if true, cached items are displayed when clip is disabled.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  cachedCount(count: number, show: boolean): GridAttribute;

  /**
   * editMode
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * editMode
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * editMode
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  editMode(value: boolean): GridAttribute;

  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  multiSelectable(value: boolean): GridAttribute;

  /**
   * maxCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * maxCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * maxCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxCount(value: number): GridAttribute;

  /**
   * minCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * minCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * minCount
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  minCount(value: number): GridAttribute;

  /**
   * cellLength
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * cellLength
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * cellLength
   *
   * @param { number } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  cellLength(value: number): GridAttribute;

  /**
   * Control GridDirection of the grid.
   *
   * @param { GridDirection } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Control GridDirection of the grid.
   *
   * @param { GridDirection } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Control GridDirection of the grid.
   *
   * @param { GridDirection } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  layoutDirection(value: GridDirection): GridAttribute;

  /**
   * Control if the grid supports animation.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Control if the grid supports animation.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Control if the grid supports animation.
   *
   * @param { boolean } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  supportAnimation(value: boolean): GridAttribute;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => (() => any) | void): GridAttribute;

   /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { OnItemDragStartCallback } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onItemDragStart(event: OnItemDragStartCallback): GridAttribute;
  
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): GridAttribute;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): GridAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): GridAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onItemDrop(
    event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void,
  ): GridAttribute;

  /**
   * Called when the sliding effect is set.
   *
   * @param { EdgeEffect } value - Scroll effect. For details, see EdgeEffect.
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the sliding effect is set.
   *
   * @param { EdgeEffect } value
   * @param { EdgeEffectOptions } options
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions): GridAttribute;

  /**
   * Called to setting the nested scroll options.
   *
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called to setting the nested scroll options.
   *
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  nestedScroll(value: NestedScrollOptions): GridAttribute;

  /**
   * Called when setting whether to enable scroll by gesture or mouse.
   *
   * @param { boolean } value
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when setting whether to enable scroll by gesture or mouse.
   *
   * @param { boolean } value
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  enableScrollInteraction(value: boolean): GridAttribute;

  /**
   * Called to setting the friction.
   *
   * @param { number | Resource } value - options for scrolling friction.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called to setting the friction.
   *
   * @param { number | Resource } value - options for scrolling friction.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  friction(value: number | Resource): GridAttribute;

  /**
   * Set the alignment of grid items.
   *
   * @param { Optional<GridItemAlignment> } alignment - Items alignment
   * @returns { GridAttribute } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
    alignItems(alignment: Optional<GridItemAlignment>): GridAttribute;

    /**
     * Sets the focus wrap mode of the grid.
     *
     * @param { Optional<FocusWrapMode> } mode - the focus wrap mode of the grid.
     * <br>Default value: **FocusWrapMode.DEFAULT**.
     * @returns { GridAttribute } the attribute of the grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    focusWrapMode(mode: Optional<FocusWrapMode>): GridAttribute;

  /**
   * Set whether to synchronously load child nodes within one frame.
   *
   * @param { boolean } enable - Whether to synchronously load child nodes within one frame
   * @returns { GridAttribute } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  syncLoad(enable: boolean): GridAttribute;

  /**
   * Called When sliding the grid.
   *
   * @param { function } event - callback of grid scroll,
   * scrollOffset is offset per frame scrolling, ScrollState is current sliding state.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called When sliding the grid.
   *
   * @param { function } event - callback of grid scroll,
   * scrollOffset is offset per frame scrolling, ScrollState is current sliding state.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 12
   * @useinstead common.ScrollableCommonMethod#onDidScroll
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): GridAttribute;

  /**
   * Called when the grid begins to arrive.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the grid begins to arrive.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onReachStart(event: () => void): GridAttribute;

  /**
   * Called when the grid reaches the end.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the grid reaches the end.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onReachEnd(event: () => void): GridAttribute;

  /**
   * Called when the slider start.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the slider start.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onScrollStart(event: () => void): GridAttribute;

  /**
   * Called when the slider stops.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the slider stops.
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onScrollStop(event: () => void): GridAttribute;

  /**
   * Called when scrolling begin each frame.
   *
   * @param { function } event - callback of grid scroll,
   * offset is the amount of sliding that is about to occur, state is current sliding state,
   * return number to actual sliding offset.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when scrolling begin each frame.
   *
   * @param { function } event - callback of grid scroll,
   * offset is the amount of sliding that is about to occur, state is current sliding state,
   * return number to actual sliding offset.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onScrollFrameBegin(event: (offset: number, state: ScrollState) => { offsetRemain: number }): GridAttribute;

  /**
   * Called when scrolling begin each frame.
   * Anonymous Object Rectification.
   *
   * @param { OnScrollFrameBeginCallback } event - callback function, triggered when the scrolling begin each frame.
   * @returns { GridAttribute } Returns the instance of the GridAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onScrollFrameBegin(event: OnScrollFrameBeginCallback): GridAttribute;

  /**
   * Called when the scrollable will scroll.
   *
   * @param { Optional<OnWillScrollCallback> } handler - callback of scrollable.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onWillScroll(handler: Optional<OnWillScrollCallback>): GridAttribute;
  
  /**
   * Called when the scrollable did scroll.
   *
   * @param { OnScrollCallback } handler - callback of scrollable,
   * scrollOffset is offset this frame did scroll, scrollState is current scroll state.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onDidScroll(handler: OnScrollCallback): GridAttribute;
}

/**
 * Defines Grid Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Grid Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Grid Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * Defines Grid Component.
 * It is recommended to use LazyForEach or Repeat to generate child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare const Grid: GridInterface;

/**
 * Defines Grid Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Grid Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Grid Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const GridInstance: GridAttribute;
