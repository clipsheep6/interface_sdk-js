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
 * @since 11
 */
export declare enum GridEditType {
  /**
   * The GridEdit image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  imageText = "object",
  /**
   * The GridEdit text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  text = "text"
}

/**
 * Control state of Item
 * @enum { GridEditType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export declare enum StateType {
  /**
   * The GridEdit select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  select = 1,
  /**
   * The GridEdit no select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  unSelect = 0
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
   * @type { StateType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  state: StateType;

  /**
   * sort of ItemType.
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
 * OptionType of GridObjectEditSort.
 *
 * @interface OptionType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface OptionType {
  /**
   * type of OptionType.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  type?: GridEditType;

  /**
   * imageSize of OptionType.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  imageSize?: number;

  /**
   * title of OptionType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  title?: ResourceStr;

  /**
   * editTitle of OptionType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  editTitle?: ResourceStr;


  /**
   * secondaryTitleFirst of OptionType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  secondaryTitleFirst?: ResourceStr;

  /**
   * secondaryTitleSecond of OptionType.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  secondaryTitleSecond?: ResourceStr;
}

@Component
export declare struct GridEdit {
  /**
   * Options of GridEdit.
   *
   * @type { OptionType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  @Link
  options: OptionType;
  /**
   * DataList of GridEdit.
   *
   * @type { Array<ItemType> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  @Link
  dataList: ItemType[];

  /**
   * clickBack of GridEdit.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  clickBack: () => void;

  /**
   * Build function of GridEdit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  build(): void;
}
