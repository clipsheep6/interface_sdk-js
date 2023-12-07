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
 * @interface SymbolSpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
interface SymbolSpanInterface {
    /**
     * Called when text is entered in SymbolSpan.
     *
     * @param { Resource } value
     * @returns { SymbolSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     * @form
     */
    (value: Resource): SymbolSpanAttribute;
  }

/**
 * @extends CommonMethod<SymbolSpanAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
declare class SymbolSpanAttribute extends CommonMethod<SymbolSpanAttribute> {
  /**
   * Called when the symbolspan size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  fontSize(value: number | string | Resource): SymbolSpanAttribute;

  /**
   * Called when the font is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolSpan.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  fontColor(value: Array<ResourceColor>): SymbolSpanAttribute;

  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  fontWeight(value: number | FontWeight | string): SymbolSpanAttribute;

  /**
   * Called when the font is set.
   *
   * @param { EffectStrategy } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolSpan.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  symbolGlyphEffect(value: EffectStrategy): SymbolSpanAttribute;

  /**
   * Called when the font is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolSpanAttribute } The attribute of the SymbolSpan.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  symbolGlyphRenderinStrategy(value: SymbolRenderingStrategy): SymbolSpanAttribute;
}

/**
 * Defines SymbolSpan Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
declare const SymbolSpan: SymbolSpanInterface;

/**
 * Defines SymbolSpan Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
declare const SymbolSpanInstance: SymbolSpanAttribute;