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
 * Provides an interface for symbolglyph.
 *
 * @interface SymbolGlyphInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
interface SymbolGlyphInterface {
  /**
   * Called when anything is entered in SymbolGlyph.
   *
   * @param { Resource } value
   * @returns { SymbolAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  (value: Resource): SymbolAttribute;
}

/**
 * symbol renderingstrategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare const enum SymbolRenderingStrategy {
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
 * @form
 */
declare const enum SymbolEffectStrategy {
  /**
   * none.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  NONE = 0,

  /**
   * scale.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  SCALE = 1,

  /**
   * hierarchical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  HIERARCHICAL = 2,
}

/**
 * @extends CommonMethod<SymbolAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare class SymbolAttribute extends CommonMethod<SymbolAttribute> {
  /**
   * Called when the SymbolGlyph size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  fontSize(value: number | string | Resource): SymbolAttribute;

  /**
   * Called when the symbolGlyph color is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  fontColor(value: Array<ResourceColor>): SymbolAttribute;

  /**
   * Called when the font symbolGlyph weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  fontWeight(value: number | FontWeight | string): SymbolAttribute;

  /**
   * Called when the symbolGlyph effect is set.
   *
   * @param { SymbolEffectStrategy } value
   * @returns { SymbolAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  symbolEffect(value: SymbolEffectStrategy): SymbolAttribute;

  /**
   * Called when the symbolGlyph renderingstrategy is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  symbolRenderingStrategy(value: SymbolRenderingStrategy): SymbolAttribute;
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
declare const SymbolGlyphInstance: SymbolAttribute;