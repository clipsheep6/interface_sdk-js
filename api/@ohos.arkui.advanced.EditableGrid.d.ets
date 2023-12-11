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
 * Controls the style types of EditableGrid
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export declare enum EditableGridType {
  /**
   * The EditableGrid image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  IMAGE_TEXT = "object",

  /**
   * The EditableGrid text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  TEXT = "text"
}


/**
 * Declaration of the EditableGrid item.
 * @interface EditableGridIteml
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export interface EditableGridItem {
  /**
   * id of EditableGrid item.
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  id: number | string;

  /**
   * EditableGrid item id.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  text: ResourceStr;

  /**
   * state of EditableGrid item.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  state: boolean;

  /**
   * sort of EditableGridItem, Used for sorting dataList.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  sort: number;

  /**
   * image resource path of the EditableGrid item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  url?: ResourceStr;
}

/**
 * EditableGridOptions of EditableGrid.
 * @interface GridEditOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export interface EditableGridOptions {
  /**
   * Configuration EditableGrid type.
   * @type { EditableGridType }
   * @default EditableGridType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  type?: EditableGridType;

  /**
   * The size of the EditableGrid image.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  imageSize?: number;

  /**
   * The title displayed in the unedited state of the  EditableGrid.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  title?: ResourceStr;

  /**
   * The title displayed in the EditableGrid edit state.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  editTitle?: ResourceStr;

  /**
   * First subtitle of the EditableGrid.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  firstSubtitle?: ResourceStr;

  /**
   * second subtitle of the EditableGrid.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  secondSubtitle?: ResourceStr;
}


  /**
   * Declare struct EditableGrid.
   * @struct { EditableGrid }
   * @since 11
   */
@Component
export declare struct EditableGrid {
  /**
   * Component types and parameters of the EditableGrid.
   * @type { EditableGridOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  @Prop
  options: EditableGridOptions;
  /**
   * data list of EditableGrid.
   * @type { Array<EditableGridItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  dataList: Array<EditableGridItem>;

  /**
   * Callback when Obtain edited data.
   * @type { (result: Array<EditableGridItem>) => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  onSave: (result: Array<EditableGridItem>) => void;

  /**
   * Build function of EditableGrid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  build(): void;
}