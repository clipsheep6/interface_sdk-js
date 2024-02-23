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
 * @systemapi
 * @since 11
 */
/**
 * Defines the image analyze type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare enum ImageAnalyzerType {
  /**
   * Image analyze type subject.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  /**
   * Image analyze type subject.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  SUBJECT = 0,

  /**
   * Image analyze type text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  /**
   * Image analyze type text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  TEXT,
}

/**
 * Image analyzer config.
 *
 * @interface ImageAnalyzerConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
/**
 * Image analyzer config.
 *
 * @interface ImageAnalyzerConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare interface ImageAnalyzerConfig {
  /**
   * Image analyze types.
   *
   * @type { ImageAnalyzerType[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  /**
   * Image analyze types.
   *
   * @type { ImageAnalyzerType[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  types: ImageAnalyzerType[];
}

/**
 * Defines the image analysis state.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare enum ImageAnalysisState {
  /**
   * Image analysis is unsupported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  UNSUPPORTED = 0,

  /**
   * Image analysis is successful.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  SUCCESSFUL,

  /**
   * Image analysis is failed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  FAILED,
}

/**
 * Defines the image analysis results.
 *
 * @interface ImageAnalysisResults
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare interface ImageAnalysisResults {
  /**
   * Image analysis state.
   *
   * @type { ImageAnalysisState }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  state: ImageAnalysisState

  /**
   * The types recognized through image analysis, only when analysis is successful does it have value.
   *
   * @type { ImageAnalyzerType[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  types?: ImageAnalyzerType[];
}

/**
 * Defines the image analyzer callback.
 *
 * @interface ImageAnalyzerCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare interface ImageAnalyzerCallback {
  /**
   * Called when the image analyzer is stopped.
   *
   * @param { string } reason The image analyzer stop reason.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  onStop(reason: string):  void;

  /**
   * Called when the image analyzer is complete.
   * @param { ImageAnalysisResults } results The image analysis results.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  onAnalyzed(results: ImageAnalysisResults): void;
 }