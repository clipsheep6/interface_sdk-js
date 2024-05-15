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
 * indexer align property.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * indexer align property.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * indexer align property.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum IndexerAlign {
  /**
   * A dialog box is displayed on the right of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * A dialog box is displayed on the right of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * A dialog box is displayed on the right of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Left,

  /**
   * A dialog box is displayed on the left of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * A dialog box is displayed on the left of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * A dialog box is displayed on the left of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Right,

  /**
   * A dialog box is displayed on the start of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  START,

  /**
   * A dialog box is displayed on the end of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  END,
}

/**
  * Called after an index is selected.
  *
  * @typedef { function } OnRequestPopupDataCallback
  * @param { number } index - the selected index
  * @returns { Array<string> } - An array of strings corresponding to the index
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
declare type OnRequestPopupDataCallback =  (index: number) => Array<string>;

/**
 * Alphabet index bar.
 *
 * @interface AlphabetIndexerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Alphabet index bar.
 *
 * @interface AlphabetIndexerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Alphabet index bar.
 *
 * @interface AlphabetIndexerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface AlphabetIndexerInterface {
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   *
   * @param { object } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   *
   * @param { object } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   *
   * @param { object } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (value: { arrayValue: Array<string>; selected: number }): AlphabetIndexerAttribute;
}

/**
 * Defines the alphabet index bar attribute functions.
 *
 * @extends CommonMethod<AlphabetIndexerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the alphabet index bar attribute functions.
 *
 * @extends CommonMethod<AlphabetIndexerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the alphabet index bar attribute functions.
 *
 * @extends CommonMethod<AlphabetIndexerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class AlphabetIndexerAttribute extends CommonMethod<AlphabetIndexerAttribute> {
  /**
   * Index bar selection callback.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 8
   * @useinstead onSelect
   */
  onSelected(callback: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Definitions color.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Definitions color.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Definitions color.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Definitions color.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  color(value: Optional<ResourceColor>): AlphabetIndexerAttribute;

  /**
   * Select the text color.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Select the text color.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Select the text color.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Select the text color.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedColor(value: Optional<ResourceColor>): AlphabetIndexerAttribute;

  /**
   * Font color of the pop-up prompt text.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Font color of the pop-up prompt text.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Font color of the pop-up prompt text.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Font color of the pop-up prompt text.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupColor(value: Optional<ResourceColor>): AlphabetIndexerAttribute;

  /**
   * Select the text background color.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Select the text background color.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Select the text background color.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Select the text background color.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedBackgroundColor(value: Optional<ResourceColor>): AlphabetIndexerAttribute;

  /**
   * Background color of the pop-up window index.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Background color of the pop-up window index.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Background color of the pop-up window index.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Background color of the pop-up window index.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupBackground(value: Optional<ResourceColor>): AlphabetIndexerAttribute;

  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of the selected font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of the selected font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of the selected font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   *
   * @param { Optional<ResourceColor> } value - indicates the color of the selected font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupSelectedColor(value: Optional<ResourceColor>): AlphabetIndexerAttribute;

  /**
   * Set the unselected font color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of the unselected font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the unselected font color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of the unselected font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set the unselected font color of non-alphabetic part of the pop-up window.
   *
   * @param { Optional<ResourceColor> } value - indicates the color of the unselected font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupUnselectedColor(value: Optional<ResourceColor>): AlphabetIndexerAttribute;

  /**
   * Set the background color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of background.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the background color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of background.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set the background color of non-alphabetic part of the pop-up window.
   *
   * @param { Optional<ResourceColor> } value - indicates the color of background.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupItemBackgroundColor(value: Optional<ResourceColor>): AlphabetIndexerAttribute;

  /**
   * Whether to use pop-up index hints.
   *
   * @param { boolean } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Whether to use pop-up index hints.
   *
   * @param { boolean } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Whether to use pop-up index hints.
   *
   * @param { boolean } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Whether to use pop-up index hints.
   *
   * @param { Optional<boolean> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  usingPopup(value: Optional<boolean>): AlphabetIndexerAttribute;

  /**
   * Select the text text style,
   *
   * @param { Font } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Select the text text style,
   *
   * @param { Font } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Select the text text style,
   *
   * @param { Font } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Select the text text style,
   *
   * @param { Optional<Font> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedFont(value: Optional<Font>): AlphabetIndexerAttribute;

  /**
   * Select the text background color.
   *
   * @param { Font } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Select the text background color.
   *
   * @param { Font } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Select the text background color.
   *
   * @param { Font } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Select the text background color.
   *
   * @param { Optional<Font> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupFont(value: Optional<Font>): AlphabetIndexerAttribute;

  /**
   * Set the font style of non-alphabetic part of the prompt pop-up window.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Font } value - indicates the style of the font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the font style of non-alphabetic part of the prompt pop-up window.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Font } value - indicates the style of the font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set the font style of non-alphabetic part of the prompt pop-up window.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Optional<Font> } value - indicates the style of the font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupItemFont(value: Optional<Font>): AlphabetIndexerAttribute;

  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   *
   * @param { string | number } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   *
   * @param { string | number } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   *
   * @param { string | number } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   *
   * @param { Optional<string | number> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  itemSize(value: Optional<string | number>): AlphabetIndexerAttribute;

  /**
   * Definitions fonts.
   *
   * @param { Font } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Definitions fonts.
   *
   * @param { Font } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Definitions fonts.
   *
   * @param { Font } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Definitions fonts.
   *
   * @param { Optional<Font> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  font(value: Optional<Font>): AlphabetIndexerAttribute;

  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported,
   * which affects the pop-up position of the pop-up window.
   *
   * @param { IndexerAlign } value - indicates the alignment style of Alphabet index.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported,
   * which affects the pop-up position of the pop-up window.
   *
   * @param { IndexerAlign } value - indicates the alignment style of Alphabet index.
   * @param { Length } [offset] - indicates the horizontal space between pop-up window and indexer bar.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported,
   * which affects the pop-up position of the pop-up window.
   *
   * @param { IndexerAlign } value - indicates the alignment style of Alphabet index.
   * @param { Length } [offset] - indicates the horizontal space between pop-up window and indexer bar.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported,
   * which affects the pop-up position of the pop-up window.
   *
   * @param { Optional<IndexerAlign> } value - indicates the alignment style of Alphabet index.
   * @param { Length } offset - indicates the horizontal space between pop-up window and indexer bar.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  alignStyle(value: Optional<IndexerAlign>, offset?: Length): AlphabetIndexerAttribute;

  /**
   * Index bar selection callback.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Index bar selection callback.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Index bar selection callback.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Index bar selection callback.
   *
   * @param { Optional<Callback<number>> } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onSelect(callback: Optional<Callback<number>>): AlphabetIndexerAttribute;

  /**
   * Index bar selection callback and return the strings which display on pop-up.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Index bar selection callback and return the strings which display on pop-up.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Index bar selection callback and return the strings which display on pop-up.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Index bar selection callback and return the strings which display on pop-up.
   *
   * @param { Optional<OnRequestPopupDataCallback> } callback - callback of AlphabetIndexer
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onRequestPopupData(callback: Optional<OnRequestPopupDataCallback>): AlphabetIndexerAttribute;

  /**
   * Pop-up selection callback.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Pop-up selection callback.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pop-up selection callback.
   *
   * @param { function } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Pop-up selection callback.
   *
   * @param { Optional<Callback<number>> } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onPopupSelect(callback: Optional<Callback<number>>>): AlphabetIndexerAttribute;

  /**
   * Sets the selected index.
   *
   * @param { number } index
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the selected index.
   *
   * @param { number } index
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the selected index.
   *
   * @param { number } index
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the selected index.
   *
   * @param { Optional<number> } index
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selected(index: Optional<number>): AlphabetIndexerAttribute;

  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   *
   * @param { Position } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   *
   * @param { Position } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   *
   * @param { Position } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   *
   * @param { Optional<Position> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupPosition(value: Optional<Position>): AlphabetIndexerAttribute;

  /**
   * Automatically collapses the characters when the indexer bar not high enough to display all characters.
   *
   * @param { boolean } value - A boolean value determines whether auto collapses is enabled for indexer bar.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Automatically collapses the characters when the indexer bar not high enough to display all characters.
   *
   * @param { Optional<boolean> } value - A boolean value determines whether auto collapses is enabled for indexer bar.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  autoCollapse(value: Optional<boolean>): AlphabetIndexerAttribute;

  /**
   * Set the radius of the item of the pop-up window.
   *
   * @param { Optional<number> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupItemBorderRadius(value: Optional<number>): AlphabetIndexerAttribute;

  /**
   * Set the radius of the item of the indexer.
   *
   * @param { Optional<number> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  itemBorderRadius(value: Optional<number>): AlphabetIndexerAttribute;

  /**
   * Set the background blurStyle of title of the pop-up window.
   *
   * @param { Optional<BlurStyle> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupBackgroundBlurStyle(value: Optional<BlurStyle>): AlphabetIndexerAttribute;

  /**
   * Set the background color of title of the pop-up window.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupTitleBackground(value: Optional<ResourceColor>): AlphabetIndexerAttribute;

  /**
   * Enable or disable haptic feedback.
   *
   * @param { Optional<boolean> } value - Default value is true, set false to disable haptic feedback.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  enableHapticFeedback(value: Optional<boolean>): AlphabetIndexerAttribute;
}

/**
 * Defines AlphabetIndexer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines AlphabetIndexer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines AlphabetIndexer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const AlphabetIndexer: AlphabetIndexerInterface;

/**
 * Defines AlphabetIndexer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines AlphabetIndexer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines AlphabetIndexer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const AlphabetIndexerInstance: AlphabetIndexerAttribute;
