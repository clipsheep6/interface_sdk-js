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
 * @enum { GridEditType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare enum GridEditType {
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
 * gridEditItemType of GridObjectEditSort.
 *
 * @interface DataListType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface gridEditItemType {
  /**
   * id of DataListType.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  id: number | string;

  /**
   * text of gridEditItemType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  text: ResourceStr;

  /**
   * state of gridEditItemType.
   *
   * @type { IsSelectedType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  state: IsSelectedType;

  /**
   * sort of gridEditItemType, Used for sorting dataList.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  sort: number;

  /**
   * url of gridEditItemType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  url?: ResourceStr;
}

/**
 * GridEditOptions of EditableGrid.
 *
 * @interface GridEditOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface GridEditOptions {
  /**
   * type of GridEditOptions.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  type?: GridEditType;

  /**
   * imageSize of GridEditOptions.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  imageSize?: number;

  /**
   * title of GridEditOptions.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  title?: ResourceStr;

  /**
   * editTitle of GridEditOptions.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  editTitle?: ResourceStr;


  /**
   * firstSubTitle of GridEditOptions.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  firstSubTitle?: ResourceStr;

  /**
   * secondSubTitle of GridEditOptions.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  secondSubTitle?: ResourceStr;
}

@Component
export declare struct EditableGrid {
  /**
   * Options of EditableGrid.
   *
   * @type { GridEditOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  @Prop
  options: GridEditOptions;
  /**
   * DataList of EditableGrid.
   *
   * @type { Array<gridEditItemType> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  @Prop
  dataList: Array<gridEditItemType>;

  /**
   * getDataList of EditableGrid, Obtain edited data.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onSaveList: (result:Array<gridEditItemType>) => void;

  /**
   * Build function of EditableGrid.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  build(): void;
}
