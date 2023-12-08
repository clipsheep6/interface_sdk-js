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
 * Provide text decoration.
 *
 * @interface SymbolGlyphInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
interface SymbolGlyphInterface {
    /**
     * Called when text is entered in SymbolGlyph.
     *
     * @param { Resource } value
     * @returns { SymbolGlyphAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     * @form
     */
    (value: Resource): SymbolGlyphAttribute;
  }

/**
 * symbol renderingstrategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
declare enum SymbolGlyphRenderingStrategy {
  /**
   * single.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  SINGLE = 0,

  /**
   * multiple color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  MULTIPLE_COLOR = 1,

  /**
   * multiple opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  MULTIPLE_OPACITY = 2,
}

/**
 * symbol effectstrategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
declare enum EffectStrategy {
  /**
   * NONE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  NONE = 0,

  /**
   * multiple color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  SCALE = 1,

  /**
   * multiple opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  HIERARCHICAL = 2,
}

/**
 * @extends CommonMethod<SymbolGlyphAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare class SymbolGlyphAttribute extends CommonMethod<SymbolGlyphAttribute> {
  /**
   * Called when the SymbolGlyph size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  fontSize(value: number | string | Resource): SymbolGlyphAttribute;

  /**
   * Called when the font is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  fontColor(value: Array<ResourceColor>): SymbolGlyphAttribute;

  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  fontWeight(value: number | FontWeight | string): SymbolGlyphAttribute;

  /**
   * Called when the font is set.
   *
   * @param { EffectStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  symbolGlyphEffect(value: EffectStrategy): SymbolGlyphAttribute;

  /**
   * Called when the font is set.
   *
   * @param { SymbolGlyphRenderingStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  symbolGlyphRenderinStrategy(value: SymbolGlyphRenderingStrategy): SymbolGlyphAttribute;
}

/**
 * Defines SymbolGlyph Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare const SymbolGlyph: SymbolGlyphInterface;

/**
 * Defines SymbolGlyph Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare const SymbolGlyphInstance: SymbolGlyphAttribute;