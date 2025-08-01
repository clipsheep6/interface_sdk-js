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

/*** if arkts 1.2 */
import { CommonMethod, BlurStyle, Bindable } from './common'
import { ResourceColor, Length, Position } from './units'
import { Font } from './units'
/*** endif */

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
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Right,

  /**
   * A dialog box is displayed on the start of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  START,

  /**
   * A dialog box is displayed on the end of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  END,
}

/**
 * AlphabetIndexer constructor options.
 *
 * @interface AlphabetIndexerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface AlphabetIndexerOptions {
  /**
   * Alphabetical index string array.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Alphabetical index string array.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Alphabetical index string array.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Alphabetical index string array.
   * Anonymous Object Rectification.
   * 
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  arrayValue: Array<string>;
  /**
   * ID of the selected item.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * ID of the selected item.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * ID of the selected item.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * ID of the selected item.
   * Anonymous Object Rectification.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  selected: number;
  /**
   * ID of the selected item.
   *
   * @type { number | Bindable<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  selected: number | Bindable<number>;
}

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
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
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
  /**
   * Construct the alphabet indexer component.
   * Called when the alphabet indexer component is used.
   * Anonymous Object Rectification.
   *
   * @param { AlphabetIndexerOptions } options - alphabet indexer options
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options: AlphabetIndexerOptions): AlphabetIndexerAttribute;
}

/**
 * Defines an AlphabetIndexer callback when onSelect.
 *
 * @typedef { function } OnAlphabetIndexerSelectCallback
 * @param { number } index - selected index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnAlphabetIndexerSelectCallback = (index: number) => void;

/**
 * Defines an AlphabetIndexer callback when onPopupSelect.
 *
 * @typedef { function } OnAlphabetIndexerPopupSelectCallback
 * @param { number } index - selected index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnAlphabetIndexerPopupSelectCallback = (index: number) => void;

/**
 * Defines an AlphabetIndexer callback when onRequestPopupData.
 *
 * @typedef { function } OnAlphabetIndexerRequestPopupDataCallback
 * @param { number } index - selected index
 * @returns { Array<string> } string array corresponding to the index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnAlphabetIndexerRequestPopupDataCallback = (index: number) => Array<string>;

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
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color(value: ResourceColor): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedColor(value: ResourceColor): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupColor(value: ResourceColor): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupBackground(value: ResourceColor): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupSelectedColor(value: ResourceColor): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupUnselectedColor(value: ResourceColor): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupItemBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  usingPopup(value: boolean): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedFont(value: Font): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupFont(value: Font): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupItemFont(value: Font): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  itemSize(value: string | number): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  font(value: Font): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  alignStyle(value: IndexerAlign, offset?: Length): AlphabetIndexerAttribute;

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
   * Anonymous Object Rectification.
   *
   * @param { OnAlphabetIndexerSelectCallback } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSelect(callback: OnAlphabetIndexerSelectCallback): AlphabetIndexerAttribute;

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
   * Anonymous Object Rectification.
   *
   * @param { OnAlphabetIndexerRequestPopupDataCallback } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onRequestPopupData(callback: OnAlphabetIndexerRequestPopupDataCallback): AlphabetIndexerAttribute;

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
   * Anonymous Object Rectification.
   *
   * @param { OnAlphabetIndexerPopupSelectCallback } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onPopupSelect(callback: OnAlphabetIndexerPopupSelectCallback): AlphabetIndexerAttribute;

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
  selected(index: number): AlphabetIndexerAttribute;
  /**
   * Sets the selected index.
   *
   * @param { number | Bindable<number> } index
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  selected(index: number | Bindable<number>): AlphabetIndexerAttribute;

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
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupPosition(value: Position): AlphabetIndexerAttribute;

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
   * @param { boolean } value - A boolean value determines whether auto collapses is enabled for indexer bar.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  autoCollapse(value: boolean): AlphabetIndexerAttribute;

  /**
   * Set the radius of the item of the pop-up window.
   *
   * @param { number } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupItemBorderRadius(value: number): AlphabetIndexerAttribute;

  /**
   * Set the radius of the item of the indexer.
   *
   * @param { number } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  itemBorderRadius(value: number): AlphabetIndexerAttribute;

  /**
   * Set the background blurStyle of title of the pop-up window.
   *
   * @param { BlurStyle } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupBackgroundBlurStyle(value: BlurStyle): AlphabetIndexerAttribute;

  /**
   * Set the background color of title of the pop-up window.
   *
   * @param { ResourceColor } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  popupTitleBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Enable or disable haptic feedback.
   *
   * @param { boolean } value - Default value is true, set false to disable haptic feedback.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableHapticFeedback(value: boolean): AlphabetIndexerAttribute;
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
