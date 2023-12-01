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
 * Defines the image analyze type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare enum ImageAnalyzerType {
  /**
   * Image analyze type subject.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  SUBJECT = 0,

  /**
   * Image analyze type text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  TEXT,
}

/**
* Image analyzer subject options.
*
* @interface ImageAnalyzerSubjectOptions
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @systemapi
* @since 11
*/
declare interface ImageAnalyzerSubjectOptions {

  /**
   * Image analyze source file, same with Image src but maybe different quality.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  sourcePixelMap?: PixelMap

  /**
   * Image analyze data update callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  onAnalyzed?: (tag: string, data: Uint8Array) => void

  /**
   * Image analyze cache data, binary format.
   *
   * @type { ?Uint8Array }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  analyzedData?: Uint8Array

  /**
   * Specify custom config info.
   *
   * @type { ?Record<string,Object> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  customInfo?: Record<string,Object>

  /**
   * Specify custom info callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  onCustomInfoCallback?: (info: Record<string,Object>) => void
}

/**
 * Image analyzer text options.
 *
 * @interface ImageAnalyzerTextOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare interface ImageAnalyzerTextOptions {
  
  /**
   * Image analyze text by default.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  isAutoDetectText?: boolean

  /**
   * Image analyze data update callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  onAnalyzed?: (tag: string, data: string) => void

  /**
   * Image analyze cache data, json format.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  analyzedData?: string

  /**
   * Text select callback.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  onTextSelected?: (tag: string, data: string) => void
}

/**
 * Image analyzer config.
 *
 * @interface ImageAnalyzerConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare interface ImageAnalyzerConfig {
  /**
   * Image analyze types.
   *
   * @type { ImageAnalyzerType[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  types: ImageAnalyzerType[];

  /**
   * If show ai button.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  showAIButton?: boolean

  /**
   * AI button margin.
   *
   * @type { ?Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  aiButtonMargin?: Margin

  /**
   * Subject options.
   *
   * @type { ?ImageAnalyzerSubjectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  subjectOptions?: ImageAnalyzerSubjectOptions

  /**
   * Text options.
   *
   * @type { ?ImageAnalyzerTextOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  textOptions?: ImageAnalyzerTextOptions

  /**
   * Image tag.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  tag?: string
}