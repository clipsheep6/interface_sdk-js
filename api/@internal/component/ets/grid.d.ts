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
 * @since 11
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
   * @since 11
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
   * @since 11
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
   * @since 11
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
   * @since 12
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
 * @since 11
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
   * @since 11
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
 * @since 11
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
   * @since 11
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
   * @since 11
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
   * @since 11
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
   * @since 11
   */
  ColumnReverse,
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
 * @since 11
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
   * @since 11
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
   * @since 11
   */
  totalLength: number;
}

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
 * @since 11
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
   * @since 11
   */
  /**
   * This parameter specifies the number of columns in the current grid layout.
   *
   * @param { Optional<string> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  columnsTemplate(value: Optional<string>): GridAttribute;

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
   * @since 11
   */
  /**
   * Lets you set the number of rows in the current grid layout,
   *
   * @param { Optional<string> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  rowsTemplate(value: Optional<string>): GridAttribute;

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
   * @since 11
   */
  /**
   * Allows you to set the spacing between columns.
   *
   * @param { Optional<Length> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  columnsGap(value: Optional<Length>): GridAttribute;

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
   * @since 11
   */
  /**
   * Lets you set the spacing between rows.
   *
   * @param { Optional<Length> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  rowsGap(value: Optional<Length>): GridAttribute;

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
  /**
   * This parameter specifies the width of the scroll bar.
   *
   * @param { Optional<number | string> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBarWidth(value: Optional<number | string>): GridAttribute;

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
  /**
   * Sets the color of the scroll bar.
   *
   * @param { Optional<Color | number | string> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBarColor(value: Optional<Color | number | string>): GridAttribute;

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
  /**
   * Lets you set the spacing between rows.
   *
   * @param { Optional<BarState> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scrollBar(value: Optional<BarState>): GridAttribute;

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
   * @since 11
   */
  /**
   * Set scrollbar position.
   *
   * @param { Optional<OnScrollBarUpdateHandler> } handler - handler of grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollBarUpdate(handler: Optional<OnScrollBarUpdateHandler>): GridAttribute;

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
   * @since 11
   */
  /**
   * Called when the first or last item displayed in the grid changes.
   *
   * @param { Optional<OnScrollIndexHandler> } handler - handler of grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollIndex(handler: Optional<OnScrollIndexHandler>): GridAttribute;

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
   * @since 11
   */
  /**
   * cached Count
   *
   * @param { Optional<number> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  cachedCount(value: Optional<number>): GridAttribute;

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
   * @since 11
   */
  /**
   * editMode
   *
   * @param { Optional<boolean> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  editMode(value: Optional<boolean>): GridAttribute;

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
   * @since 11
   */
  /**
   * Called when judging whether it is multiSelectable.
   *
   * @param { Optional<boolean> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  multiSelectable(value: Optional<boolean>): GridAttribute;

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
   * @since 11
   */
  /**
   * maxCount
   *
   * @param { Optional<number> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  maxCount(value: Optional<number>): GridAttribute;

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
   * @since 11
   */
  /**
   * minCount
   *
   * @param { Optional<number> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  minCount(value: Optional<number>): GridAttribute;

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
   * @since 11
   */
  /**
   * cellLength
   *
   * @param { Optional<number> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  cellLength(value: Optional<number>): GridAttribute;

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
   * @since 11
   */
  /**
   * Control GridDirection of the grid.
   *
   * @param { Optional<GridDirection> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  layoutDirection(value: Optional<GridDirection>): GridAttribute;

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
   * @since 11
   */
  /**
   * Control if the grid supports animation.
   *
   * @param { Optional<boolean> } value
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  supportAnimation(value: Optional<boolean>): GridAttribute;

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
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { Optional<OnItemDragStartHandler> } handler - handler of Grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onItemDragStart(handler: Optional<OnItemDragStartHandler>): GridAttribute;

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
   * @since 11
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { Optional<Callback<ItemDragInfo>> } handler - handler of Grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onItemDragEnter(handler: Optional<Callback<ItemDragInfo>>): GridAttribute;

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
   * @since 11
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { Optional<OnItemDragMoveHandler> } handler - handler of Grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onItemDragMove(handler: Optional<OnItemDragMoveHandler>): GridAttribute;

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
   * @since 11
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { Optional<OnItemDragLeaveHandler> } handler - handler of Grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onItemDragLeave(handler: Optional<OnItemDragLeaveHandler>): GridAttribute;

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
   * @since 11
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { Optional<OnItemDropHandler> } handler - handler of Grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onItemDrop(handler: Optional<OnItemDropHandler>): GridAttribute;

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
  /**
   * Called when the sliding effect is set.
   *
   * @param { Optional<EdgeEffect> } value
   * @param { EdgeEffectOptions } [options]
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  edgeEffect(value: Optional<EdgeEffect>, options?: EdgeEffectOptions): GridAttribute;

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
  /**
   * Called to setting the nested scroll options.
   *
   * @param { Optional<NestedScrollOptions> } value - options for nested scrolling.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  nestedScroll(value: Optional<NestedScrollOptions>): GridAttribute;

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
  /**
   * Called when setting whether to enable scroll by gesture or mouse.
   *
   * @param { Optional<boolean> } value
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enableScrollInteraction(value: Optional<boolean>): GridAttribute;

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
  /**
   * Called to setting the friction.
   *
   * @param { Optional<number | Resource> } value - options for scrolling friction.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  friction(value: Optional<number | Resource>): GridAttribute;

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
  /**
   * Called when the grid begins to arrive.
   *
   * @param { Optional<Callback<void>> } handler - Handler function.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onReachStart(handler: Optional<Callback<void>>): GridAttribute;

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
  /**
   * Called when the grid reaches the end.
   *
   * @param { Optional<Callback<void>> } handler - Handler function.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onReachEnd(handler: Optional<Callback<void>>): GridAttribute;

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
  /**
   * Called when the slider start.
   *
   * @param { Optional<Callback<void>> } handler - Handler function.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollStart(handler: Optional<Callback<void>>): GridAttribute;

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
  /**
   * Called when the slider stops.
   *
   * @param { Optional<Callback<void>> } handler - Handler function.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollStop(handler: Optional<Callback<void>>): GridAttribute;

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
  /**
   * Called when scrolling begin each frame.
   *
   * @param { Optional<OnScrollFrameBeginHandler> } handler - handler of Scroll.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onScrollFrameBegin(handler: Optional<OnScrollFrameBeginHandler>): GridAttribute;
}

/**
 * Handler of Grid, using in onScrollBarUpdate.
 *
 * @typedef { function } OnScrollBarUpdateHandler
 * @param { number } index - the current first displayed item.
 * @param { number } offset - the grid offset.
 * @returns { ComputedBarAttribute } update scrollbar position and height. 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnScrollBarUpdateHandler = (index: number, offset: number) => ComputedBarAttribute;

/**
  * Handler of Grid, using in onScrollIndex.
  *
  * @typedef { function } OnScrollIndexHandler
  * @param { number } first - the index of the first item displayed in the grid.
  * @param { number } last - the index of the last item displayed in the grid. 
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
declare type OnScrollIndexHandler = (first: number, last: number) => void;

/**
  * Handler of Grid, using in onItemDragStart.
  *
  * @typedef { function } OnItemDragStartHandler
  * @param { ItemDragInfo } event - the dragged point information.
  * @param { number } itemIndex - the index of dragged grid item. 
  * @returns { () => any | void } void indicates that dragging is not allowed. 
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
declare type OnItemDragStartHandler = (event: ItemDragInfo, itemIndex: number) => (() => any) | void;

/**
 * Handler of Grid, using in onItemDragMove.
 *
 * @typedef { function } OnItemDragMoveHandler
 * @param { ItemDragInfo } event - the dragged point information.
 * @param { number } itemIndex - the starting index of dragged grid item.
 * @param { number } insertIndex - the inserted index of dragged grid item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnItemDragMoveHandler = (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void;

/**
 * Handler of Grid, using in onItemDragLeave.
 *
 * @typedef { function } OnItemDragLeaveHandler
 * @param { ItemDragInfo } event - the dragged point information.
 * @param { number } itemIndex - the starting index of dragged grid item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnItemDragLeaveHandler = (event: ItemDragInfo, itemIndex: number) => void;

/**
 * Handler of Grid, using in onItemDrop.
 *
 * @typedef { function } OnItemDropHandler
 * @param { ItemDragInfo } event - the dragged point information.
 * @param { number } itemIndex - the starting index of Dragged grid item.
 * @param { number } insertIndex - the inserted index of Dragged grid item.
 * @param { boolean } isSuccess - whether the grid item is successfully released.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnItemDropHandler = (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void;

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
