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
 * Control type of GridEdit
 * @enum { GridEditType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare enum GridEditType {
  /**
   * The GridEdit image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  IMAGE_TEXT = "object",
  /**
   * The GridEdit text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  TEXT = "text"
}

/**
 * Control state of Item
 * @enum { IsSelectedStateType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export declare enum IsSelectedStateType {
  /**
   * The GridEdit no select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  UNSELECTED = 0,
  /**
   * The GridEdit select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  SELECTED = 1
}

/**
 * ItemType of GridObjectEditSort.
 *
 * @interface DataListType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface ItemType {
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
   * text of ItemType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  text: ResourceStr;

  /**
   * state of ItemType.
   *
   * @type { IsSelectedStateType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  state: IsSelectedStateType;

  /**
   * sort of ItemType, Used for sorting dataList.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  sort: number;

  /**
   * url of ItemType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  url?: ResourceStr;
}

/**
 * GridEditOptions of GridEdit.
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
export declare struct GridEdit {
  /**
   * Options of GridEdit.
   *
   * @type { GridEditOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  options: GridEditOptions;
  /**
   * DataList of GridEdit.
   *
   * @type { Array<ItemType> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  dataList: Array<ItemType>;

  /**
   * getDataList of GridEdit, Obtain edited data.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onSaveList: (result:Array<ItemType>) => void;

  /**
   * Build function of GridEdit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  build(): void;
}
