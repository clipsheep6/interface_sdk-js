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
 * Controls the style types of ImageTextEditableSort
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export declare enum ImageTextEditableSortType {
  /**
   * The ImageTextEditableSort image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  IMAGE_TEXT = "image_text",

  /**
   * The ImageTextEditableSort text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  TEXT = "text"
}


/**
 * Declaration of the ImageTextEditableSort item.
 * @interface ImageTextEditableSortIteml
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export interface ImageTextEditableSortItem {
  /**
   * id of ImageTextEditableSort item.
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  id: number | string;

  /**
   * ImageTextEditableSort item id.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  text: ResourceStr;

  /**
   * state of ImageTextEditableSort item.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  state: boolean;

  /**
   * order of ImageTextEditableSortItem, Used for sorting dataList.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  order: number;

  /**
   * image resource path of the ImageTextEditableSort item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  url?: ResourceStr;
}

/**
 * ImageTextEditableSortOptions of ImageTextEditableSort.
 * @interface GridEditOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export interface ImageTextEditableSortOptions {
  /**
   * Configuration ImageTextEditableSort type.
   * @type { ImageTextEditableSortType }
   * @default ImageTextEditableSortType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  type?: ImageTextEditableSortType;

  /**
   * The size of the ImageTextEditableSort image.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  imageSize?: number;

  /**
   * The title displayed in the unedited state of the  ImageTextEditableSort.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  title?: ResourceStr;

  /**
   * The title displayed in the ImageTextEditableSort edit state.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  editTitle?: ResourceStr;

  /**
   * First subtitle of the ImageTextEditableSort.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  firstSubtitle?: ResourceStr;

  /**
   * second subtitle of the ImageTextEditableSort.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  secondSubtitle?: ResourceStr;
}


  /**
   * Declare struct ImageTextEditableSort.
   * @struct { ImageTextEditableSort }
   * @since 11
   */
@Component
export declare struct ImageTextEditableSort {
  /**
   * Component types and parameters of the ImageTextEditableSort.
   * @type { ImageTextEditableSortOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  @Prop
  options: ImageTextEditableSortOptions;
  /**
   * data list of ImageTextEditableSort.
   * @type { Array<ImageTextEditableSortItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  dataList: Array<ImageTextEditableSortItem>;

  /**
   * Callback when Obtain edited data.
   * @type { (result: Array<ImageTextEditableSortItem>) => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  onSave: (result: Array<ImageTextEditableSortItem>) => void;

  /**
   * Build function of ImageTextEditableSort.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  build(): void;
}