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
 * Alphabet arc index bar.
 *
 * @interface ArcAlphabetIndexerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface ArcAlphabetIndexerInterface {
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   *
   * @param { object } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (value: { arrayValue: Array<string>; selected: number }): ArcAlphabetIndexerAttribute;
}

/**
 * Defines the alphabet arc index bar attribute functions.
 *
 * @extends CommonMethod<ArcAlphabetIndexerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ArcAlphabetIndexerAttribute extends CommonMethod<ArcAlphabetIndexerAttribute> {
  /**
   * Definitions color.
   *
   * @param { ResourceColor } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  color(value: ResourceColor): ArcAlphabetIndexerAttribute;

  /**
   * Select the text color.
   *
   * @param { ResourceColor } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedColor(value: ResourceColor): ArcAlphabetIndexerAttribute;

  /**
   * Font color of the pop-up prompt text.
   *
   * @param { ResourceColor } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupColor(value: ResourceColor): ArcAlphabetIndexerAttribute;

  /**
   * Select the text background color.
   *
   * @param { ResourceColor } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedBackgroundColor(value: ResourceColor): ArcAlphabetIndexerAttribute;

  /**
   * Background color of the pop-up window index.
   *
   * @param { ResourceColor } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupBackground(value: ResourceColor): ArcAlphabetIndexerAttribute;

  /**
   * Whether to use pop-up index hints.
   *
   * @param { boolean } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  usingPopup(value: boolean): ArcAlphabetIndexerAttribute;

  /**
   * Select the text text style,
   *
   * @param { Font } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedFont(value: Font): ArcAlphabetIndexerAttribute;

  /**
   * Select the text background color.
   *
   * @param { Font } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupFont(value: Font): ArcAlphabetIndexerAttribute;

  /**
   * Definitions fonts.
   *
   * @param { Font } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  font(value: Font): ArcAlphabetIndexerAttribute;

  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   *
   * @param { string | number } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  itemSize(value: string | number): ArcAlphabetIndexerAttribute;

  /**
   * Sets the selected index.
   *
   * @param { number } index
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selected(index: number): ArcAlphabetIndexerAttribute;

  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   * 
   * @param { Position } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupPosition(value: Position): ArcAlphabetIndexerAttribute;

  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of the selected font.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupSelectedColor(value: ResourceColor): ArcAlphabetIndexerAttribute;

  /**
   * Set the unselected font color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of the unselected font.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupUnselectedColor(value: ResourceColor): ArcAlphabetIndexerAttribute;

  /**
   * Set the font style of non-alphabetic part of the prompt pop-up window.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Font } value - indicates the style of the font.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupItemFont(value: Font): ArcAlphabetIndexerAttribute;

  /**
   * Set the background color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor } value - indicates the color of background.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupItemBackgroundColor(value: ResourceColor): ArcAlphabetIndexerAttribute;

  /**
   * Automatically collapses the characters when the indexer bar not high enough to display all characters.
   *
   * @param { boolean } value - A boolean value determines whether auto collapses is enabled for indexer bar.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  autoCollapse(value: boolean): ArcAlphabetIndexerAttribute;

  /**
   * Set the radius of the item of the pop-up window.
   *
   * @param { number } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupItemBorderRadius(value: number): ArcAlphabetIndexerAttribute;

  /**
   * Set the radius of the item of the indexer.
   *
   * @param { number } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  itemBorderRadius(value: number): ArcAlphabetIndexerAttribute;

  /**
   * Set the background blurStyle of title of the pop-up window.
   *
   * @param { BlurStyle } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupBackgroundBlurStyle(value: BlurStyle): ArcAlphabetIndexerAttribute;

  /**
   * Set the background color of title of the pop-up window.
   *
   * @param { ResourceColor } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupTitleBackground(value: ResourceColor): ArcAlphabetIndexerAttribute;

  /**
   * Index bar selection callback.
   *
   * @param { function } callback
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onSelect(callback: (index: number) => void): ArcAlphabetIndexerAttribute;

  /**
   * Index bar selection callback and return the strings which display on pop-up.
   * 
   * @param { function } callback
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onRequestPopupData(callback: (index: number) => Array<string>): ArcAlphabetIndexerAttribute;
  
  /**
   * Pop-up selection callback.
   *
   * @param { function } callback
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onPopupSelect(callback: (index: number) => void): ArcAlphabetIndexerAttribute;
}

/**
 * Defines ArcAlphabetIndexer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcAlphabetIndexer: ArcAlphabetIndexerInterface;

/**
 * Defines ArcAlphabetIndexer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ArcAlphabetIndexerInstance: ArcAlphabetIndexerAttribute;
