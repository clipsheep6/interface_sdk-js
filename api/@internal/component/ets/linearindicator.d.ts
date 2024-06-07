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
 * Defines the LinearIndicator Controller.
 *
 * @interface LinearIndicatorController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class LinearIndicatorController {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor();

  /**
   * Sets the progress of indicator.
   *
   * @param { number } index - the index of current indicator, start from 0.
   * @param { number } value - current indicator progress value, value range: [0, 100]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  setProgress(index: number, value: number): void;

  /**
   * Start indicator auto play.
   *
   * @param { LinearIndicatorAutoPlayOptions } [options] - the options of indicator auto play.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  startAutoPlay(options?: LinearIndicatorAutoPlayOptions): void;

  /**
   * Pause indicator auto play. 
   * Start auto play will be resumed from this paused position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  pauseAutoPlay(): void;

  /**
   * Stop indicator auto play.
   * Start auto play will restart from the very beginning.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  stopAutoPlay(): void;
}

/**
 * Provides options of indicator auto play.
 *
 * @interface LinearIndicatorAutoPlayOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface LinearIndicatorAutoPlayOptions {
  /**
   * The interval between twice auto play. The unit is ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  interval?: number;

  /**
   * The animation curve duration. The unit is ms.
   *
   * @type { ?number }
   * @default 4000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  duration?: number;
}

/**
 * Provides linear indicator style.
 *
 * @interface LinearIndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface LinearIndicatorStyle {
  /**
   * The space of two linear indicator.
   *
   * @type { ?LengthMetrics }
   * @default 4vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  space?: LengthMetrics;

  /**
   * Stroke width of the progress indicator.
   *
   * @type { ?LengthMetrics }
   * @default 2vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  strokeWidth?: LengthMetrics;

  /**
   * The border radius of linear indicator.
   *
   * @type { ?BorderRadiuses }
   * @default 1vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  borderRadius?: BorderRadiuses;

  /**
   * The track background color of linear indicator.
   *
   * @type { ?ResourceColor }
   * @default #19182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  trackBackgroundColor?: ResourceColor;

  /**
   * The track color of linear indicator.
   *
   * @type { ?ResourceColor }
   * @default #ff007dff
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  trackColor?: ResourceColor;
}

/**
 * Defines the options of LinearIndicator.
 *
 * @interface LinearIndicatorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface LinearIndicatorOptions {
  /**
   * Sets the total number of indicator, minimum value is 2.
   *
   * @type { number }
   * @default 2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  count: number;

  /**
   * Controller of LinearIndicator.
   *
   * @type { ?LinearIndicatorController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  controller?: LinearIndicatorController;
}

/**
 * Provides an interface for indicator.
 *
 * @interface LinearIndicatorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface LinearIndicatorInterface {
  /**
   * Constructor parameters
   *
   * @param { ?LinearIndicatorOptions } options.
   * @returns { LinearIndicatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
   (options?: LinearIndicatorOptions): LinearIndicatorAttribute;
}

/**
 * Defines the Indicator attribute functions.
 *
 * @extends LinearIndicatorAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class LinearIndicatorAttribute extends CommonMethod<LinearIndicatorAttribute> {
  /**
   * Sets the indicator style.
   *
   * @param { LinearIndicatorStyle } value
   * @returns { LinearIndicatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  style(value: LinearIndicatorStyle): LinearIndicatorAttribute;

  /**
   * Sets whether indicator supports loop.
   *
   * @param { boolean } value
   * @returns { LinearIndicatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  loop(value: boolean): LinearIndicatorAttribute;

  /**
   * Called when progress value update.
   *
   * @param { function } event
   * "index": the index value of current indicator
   * "progress": the progress value of current indicator
   * @returns { LinearIndicatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onChange(event: (index: number, progress: number) => void): LinearIndicatorAttribute;
}

/**
 * Defines Indicator Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare const LinearIndicatorComponent: LinearIndicatorComponentInterface;

/**
 * Defines Indicator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare const LinearIndicatorComponentInstance: LinearIndicatorAttribute;
