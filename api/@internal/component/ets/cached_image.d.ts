/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Defines the resource which can use Astc.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
declare type AstcResource = {
  /**
   * Array of astc uri resources, indicating the range of astc data to be obtained.
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  srcs: Array<string>;
  /**
   * Column size, indicating the number of astc resources to be spliced per row.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  column: number;
}

/**
 * @interface CachedImageInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
interface CachedImageInterface {
  /**
   * Image resource to be obtained.
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | AstcResource } src
   * @returns { CachedImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  (src: PixelMap | ResourceStr | DrawableDescriptor | AstcResource): CachedImageAttribute;
}

/**
 * Attributes of CachedImage inherited from ImageAttribute.
 *
 * @extends ImageAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
declare class CachedImageAttribute extends ImageAttribute {}

/**
 * CachedImage component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
declare const CachedImage: CachedImageInterface;

/**
 * Instance of CachedImage component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
declare const CachedImageInstance: CachedImageAttribute;
