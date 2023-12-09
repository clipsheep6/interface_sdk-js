/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * Control type of EditableGrid
 * @enum { EditableGridType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare enum EditableGridType {
  /**
   * The EditableGrid image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  IMAGE_TEXT = "object",
  /**
   * The EditableGrid text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  TEXT = "text"
}

/**
 * Control type of EditableGrid
 * @enum { EditableGridState }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
* @since 11
 */
export declare enum EditableGridState {
  /**
   * The EditableGrid select state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
  * @since 11
   */
  SELECTED = true,
  /**
   * The EditableGrid unselect state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
  * @since 11
   */
  UNSELECTED = false
}


/**
 * EditableGridItemType of GridObjectEditSort.
 *
 * @interface DataListType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface EditableGridItem {
  /**
   * id of EditableGridItemType.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  id: number | string;

  /**
   * text of EditableGridItemType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  text: ResourceStr;

  /**
   * state of EditableGridItemType.
   *
   * @type { selectedState }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  state: EditableGridState;

  /**
   * sort of EditableGridItemType, Used for sorting dataList.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  sort: number;

  /**
   * url of EditableGridItemType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  url?: ResourceStr;
}

/**
 *  EditableGridOptions of  EditableGrid.
 *
 * @interface GridEditOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface EditableGridOptions {
  /**
   * type of EditableGridOptions.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  type?: GridEditType;

  /**
   * imageSize of EditableGridOptions.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  imageSize?: number;

  /**
   * title of EditableGridOptions.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  title?: ResourceStr;

  /**
   * editTitle of EditableGridOptions.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  editTitle?: ResourceStr;


  /**
   * firstSubtitle of EditableGridOptions.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  firstSubtitle?: ResourceStr;

  /**
   * secondSubtitle of EditableGridOptions.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  secondSubtitle?: ResourceStr;
}

@Component
export declare struct EditableGrid {
  /**
   * options of EditableGrid.
   *
   * @type { GridEditOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  @Prop
  options: EditableGridOptions;
  /**
   * dataList of EditableGrid.
   *
   * @type { Array<EditableGridItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  @Prop
  dataList: Array<EditableGridItem>;

  /**
   * onSave of EditableGrid, Obtain edited data.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onSave: (result: Array<EditableGridItem>) => void;

  /**
   * Build function of EditableGrid.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  build(): void;
}