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

declare class IndicatorController {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  constructor();

  /**
   * Sets the progress of indicator.
   *
   * @param { number } index - the index of current indicator, start from 0.
   * @param { number } value - current indicator progress value, value range: [0, 100]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  setProgress(index: number, value: number): void;

  /**
   * Start indicator auto play.
   *
   * @param { AutoPlayOptions } options - the options of indicator auto play.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  startAutoPlay(options?: AutoPlayOptions): void;

  /**
   * Pause indicator auto play. 
   * Start auto play will be resumed from this paused position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  pauseAutoPlay(): void;

  /**
   * Stop indicator auto play.
   * Start auto play will restart from the very beginning.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  stopAutoPlay(): void;
}

/**
 * Provides options of indicator auto play.
 *
 * @interface AutoPlayOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare interface AutoPlayOptions {
  /**
   * The interval between twice auto play. The unit is ms.
   *
   * @type { number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  interval?: number;

  /**
   * The animation curve duration. The unit is ms.
   *
   * @type { number }
   * @default 4000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  duration?: number;
}

/**
 * Provides linear indicator style.
 *
 * @interface LinearIndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare interface LinearIndicatorStyle {
  /**
   * The space of two linear indicator.
   *
   * @type { Dimension }
   * @default 4vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  space?: Dimension;

  /**
   * Stroke width of the progress indicator.
   *
   * @type { Dimension }
   * @default 2vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  strokeWidth?: Dimension;

  /**
   * The border radius of linear indicator.
   *
   * @type { BorderRadiuses }
   * @default 1vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  borderRadius?: BorderRadiuses;

  /**
   * The track background color of linear indicator.
   *
   * @type { ResourceColor }
   * @default #19182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  trackBackgroundColor?: ResourceColor;

  /**
   * The track color of linear indicator.
   *
   * @type { ResourceColor }
   * @default #ff007dff
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  trackColor?: ResourceColor;
}

/**
 * Declare the type of indicator.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare enum IndicatorType {
  LINEAR = 0
}


/**
 * Provides an interface for indicator.
 *
 * @interface IndicatorComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
interface IndicatorComponentInterface {
  (controller?: IndicatorController): IndicatorComponentAttribute;
}

/**
 * Defines the Indicator attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare class IndicatorComponentAttribute extends CommonMethod<IndicatorComponentAttribute> {
  /**
   * Sets indicator type.
   *
   * @param { IndicatorType } value
   * @default IndicatorType.LINEAR
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  type(value: IndicatorType): IndicatorComponentAttribute;

  /**
   * Sets the total number of indicator.
   *
   * @param { number } value
   * @default 2
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  count(value: number): IndicatorComponentAttribute;

  /**
   * Sets the indicator style.
   *
   * @param { LinearIndicatorStyle } value - linear indicator style
   * @default { space: 4vp, strokeWidth: 2vp, borderRadius: 1vp, trackBackgroundColor: #19182431,trackColor: #ff000000}
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  style(value: LinearIndicatorStyle): IndicatorComponentAttribute;

  /**
   * Sets whether indicator supports loop.
   *
   * @param { boolean } value
   * @default false
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  loop(value: boolean): IndicatorComponentAttribute;

  /**
   * Called when progress value update.
   *
   * @param { function } event
   * "index": the index value of current indicator
   * "progress": the progress value of current indicator
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  onChange(event: (index: number, progress: number) => void): IndicatorComponentAttribute;
}

/**
 * Defines Indicator Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare const IndicatorComponent: IndicatorComponentInterface;

/**
 * Defines Indicator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare const IndicatorComponentInstance: IndicatorComponentAttribute;

