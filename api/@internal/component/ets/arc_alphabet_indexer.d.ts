/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Called after an index is selected.
 *
 * @typedef { function } onRequestPopupDataCallback
 * @param { number } index - the selected index
 * @returns { Array<string> } -An array of strings corresponding to the index
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type onRequestPopupDataCallback = (index: number) => Array<string>;

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
 * Defines the arc alphabet index bar attribute functions.
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
   * @param { Optional<ResourceColor> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  color(value: Optional<ResourceColor>): ArcAlphabetIndexerAttribute;

  /**
   * Select the text color.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedColor(value: Optional<ResourceColor>): ArcAlphabetIndexerAttribute;

  /**
   * Font color of the pop-up prompt text.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupColor(value: Optional<ResourceColor>): ArcAlphabetIndexerAttribute;

  /**
   * Select the text background color.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedBackgroundColor(value: Optional<ResourceColor>): ArcAlphabetIndexerAttribute;

  /**
   * Background color of the pop-up window index.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupBackground(value: Optional<ResourceColor>): ArcAlphabetIndexerAttribute;

  /**
   * Whether to use pop-up index hints.
   *
   * @param { Optional<boolean> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  usingPopup(value: Optional<boolean>): ArcAlphabetIndexerAttribute;

  /**
   * Select the text text style,
   *
   * @param { Optional<Font> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedFont(value: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * Select the text background color.
   *
   * @param { Optional<Font> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupFont(value: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * Definitions fonts.
   *
   * @param { Optional<Font> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  font(value: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   *
   * @param { Optional<string | number> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  itemSize(value: Optional<string | number>): ArcAlphabetIndexerAttribute;

  /**
   * Sets the selected index.
   *
   * @param { Optional<number> } index
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selected(index: Optional<number>): ArcAlphabetIndexerAttribute;

  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   * 
   * @param { Optional<Position> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupPosition(value: Optional<Position>): ArcAlphabetIndexerAttribute;

  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   *
   * @param { Optional<ResourceColor> } value - indicates the color of the selected font.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupSelectedColor(value: Optional<ResourceColor>): ArcAlphabetIndexerAttribute;

  /**
   * Set the unselected font color of non-alphabetic part of the pop-up window.
   *
   * @param { Optional<ResourceColor> } value - indicates the color of the unselected font.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupUnselectedColor(value: Optional<ResourceColor>): ArcAlphabetIndexerAttribute;

  /**
   * Set the font style of non-alphabetic part of the prompt pop-up window.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Optional<Font> } value - indicates the style of the font.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupItemFont(value: Optional<Font>): ArcAlphabetIndexerAttribute;

  /**
   * Set the background color of non-alphabetic part of the pop-up window.
   *
   * @param { Optional<ResourceColor> } value - indicates the color of background.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupItemBackgroundColor(value: Optional<ResourceColor>): ArcAlphabetIndexerAttribute;

  /**
   * Automatically collapses the characters when the indexer bar not high enough to display all characters.
   *
   * @param { Optional<boolean> } value - A boolean value determines whether auto collapses is enabled for indexer bar.
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  autoCollapse(value: Optional<boolean>): ArcAlphabetIndexerAttribute;

  /**
   * Set the radius of the item of the pop-up window.
   *
   * @param { Optional<number> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupItemBorderRadius(value: Optional<number>): ArcAlphabetIndexerAttribute;

  /**
   * Set the radius of the item of the indexer.
   *
   * @param { Optional<number> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  itemBorderRadius(value: Optional<number>): ArcAlphabetIndexerAttribute;

  /**
   * Set the background blurStyle of title of the pop-up window.
   *
   * @param { Optional<BlurStyle> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupBackgroundBlurStyle(value: Optional<BlurStyle>): ArcAlphabetIndexerAttribute;

  /**
   * Set the background color of title of the pop-up window.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupTitleBackground(value: Optional<ResourceColor>): ArcAlphabetIndexerAttribute;

  /**
   * Index bar selection callback.
   *
   * @param { Optional<Callback<number>> } callback
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onSelect(callback: Optional<Callback<number>>): ArcAlphabetIndexerAttribute;

  /**
   * Index bar selection callback and return the strings which display on pop-up.
   * 
   * @param { Optional<onRequestPopupDataCallback> } callback - callback of ArcAlphabetIndexer
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onRequestPopupData(callback: Optional<onRequestPopupDataCallback>): ArcAlphabetIndexerAttribute;
  
  /**
   * Pop-up selection callback.
   *
   * @param { Optional<Callback<number>> } callback
   * @returns { ArcAlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onPopupSelect(callback: Optional<Callback<number>>): ArcAlphabetIndexerAttribute;
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
