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
 * indexer align property.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum IndexerAlign {
  /**
   * A dialog box is displayed on the right of the index bar.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Left,

  /**
   * A dialog box is displayed on the left of the index bar.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Right,
}

/**
 * Alphabet index bar.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface AlphabetIndexerInterface {
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value: { arrayValue: Array<string>; selected: number }): AlphabetIndexerAttribute;
}

/**
 * Defines the alphabet index bar attribute functions.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class AlphabetIndexerAttribute extends CommonMethod<AlphabetIndexerAttribute> {
  /**
   * Index bar selection callback.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onSelected(event: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Definitions color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  color(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Select the text color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  selectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Font color of the pop-up prompt text.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  popupColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Select the text background color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  selectedBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Background color of the pop-up window index.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  popupBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Whether to use pop-up index hints.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  usingPopup(value: boolean): AlphabetIndexerAttribute;

  /**
   * Select the text text style,
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  selectedFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Select the text background color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  popupFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  itemSize(value: string | number): AlphabetIndexerAttribute;

  /**
   * Definitions fonts.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  font(value: Font): AlphabetIndexerAttribute;

  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported, which affects the pop-up position of the pop-up window.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  alignStyle(value: IndexerAlign): AlphabetIndexerAttribute;

  /**
   * Index bar selection callback and return the strings which display on pop-up.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onRequestPopupData(event: (index: number) => Array<string>): AlphabetIndexerAttribute;

  /**
   * Pop-up selection callback.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onPopupSelected(event: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Select the index.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  selectedIndex(index: number): AlphabetIndexerAttribute;

  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  popupPosition(value: {offsetX: number, offsetY: number}): AlphabetIndexerAttribute;
}

declare const AlphabetIndexer: AlphabetIndexerInterface;
declare const AlphabetIndexerInstance: AlphabetIndexerAttribute;
