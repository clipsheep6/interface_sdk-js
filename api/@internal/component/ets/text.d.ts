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
 * Provides an interface for writing texts.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface TextInterface {
  /**
   * Called when writing text.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (content?: string | Resource): TextAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class TextAttribute extends CommonMethod<TextAttribute> {
  /**
   * Called when the font color is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontColor(value: ResourceColor): TextAttribute;

  /**
   * Called when the font size is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontSize(value: number | string | Resource): TextAttribute;

  /**
   * Called when the minimum font size of the font is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  minFontSize(value: number | string | Resource): TextAttribute;

  /**
   * Called when the maximum font size of the font is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  maxFontSize(value: number | string | Resource): TextAttribute;

  /**
   * Called when the font style of a font is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontStyle(value: FontStyle): TextAttribute;

  /**
   * Called when the font weight is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontWeight(value: number | FontWeight | string): TextAttribute;

  /**
   * Called when the horizontal center mode of the font is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  textAlign(value: TextAlign): TextAttribute;

  /**
   * Called when the vertical center mode of the font is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  lineHeight(value: number | string | Resource): TextAttribute;

  /**
   * Called when the overflow mode of the font is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  textOverflow(value: { overflow: TextOverflow }): TextAttribute;

  /**
   * Called when the font list of text is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontFamily(value: string | Resource): TextAttribute;

  /**
   * Called when the maximum number of lines of text is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  maxLines(value: number): TextAttribute;

  /**
   * Called when the text decoration of the text is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  decoration(value: { type: TextDecorationType; color?: ResourceColor }): TextAttribute;

  /**
   * Called when the distance between text fonts is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  letterSpacing(value: number | string): TextAttribute;

  /**
   * Called when the type of letter in the text font is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  textCase(value: TextCase): TextAttribute;

  /**
   * Called when the baseline offset is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  baselineOffset(value: number | string): TextAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const TextInstance: TextAttribute;
/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Text: TextInterface;