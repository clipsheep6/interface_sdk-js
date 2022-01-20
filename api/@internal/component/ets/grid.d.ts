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
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface GridInterface {
  /**
   * Grid is returned when the parameter is transferred.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (scroller?: Scroller): GridAttribute;
}

/**
 * The enum of property layoutDirection
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum GridDirection {
  Row,
  Column,
  RowReverse,
  ColumnReverse
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class GridAttribute extends CommonMethod<GridAttribute> {
  /**
   * This parameter specifies the number of columns in the current grid layout.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  columnsTemplate(value: string): GridAttribute;

  /**
   * Lets you set the number of rows in the current grid layout,
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  rowsTemplate(value: string): GridAttribute;

  /**
   * Allows you to set the spacing between columns.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  columnsGap(value: Length): GridAttribute;

  /**
   * Lets you set the spacing between rows.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  rowsGap(value: Length): GridAttribute;

  /**
   * This parameter specifies the width of the scroll bar.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollBarWidth(value: number | string): GridAttribute;

  /**
   * Sets the color of the scroll bar.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollBarColor(value: Color | number | string): GridAttribute;

  /**
   * Lets you set the spacing between rows.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scrollBar(value: BarState): GridAttribute;

  /**
   * Sets the status of the scroll bar.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onScrollIndex(event: (first: number) => void): GridAttribute;

  /**
   * cached Count
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  cachedCount(value: number): GridAttribute;

  /**
   * editMode
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  editMode(value: boolean): GridAttribute;

  /**
   * maxCount
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  maxCount(value: number): GridAttribute;

   /**
    * minCount
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
  minCount(value: number): GridAttribute;

  /**
   * cellLength
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  cellLength(value: number): GridAttribute;

  /**
   * control GridDirection of the grid.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  layoutDirection(value: GridDirection): GridAttribute;

  /**
   * control if the grid supports animation.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  supportAnimation(value: boolean): GridAttribute;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => (() => any) | void): GridAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): GridAttribute;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): GridAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): GridAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onItemDrop(event:
    (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void): GridAttribute;
}

declare const Grid: GridInterface;
declare const GridInstance: GridAttribute;
