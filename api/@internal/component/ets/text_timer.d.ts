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
 * @file
 * @kit ArkUI
 */

/**
 * Provides a way to control the process.
 *
 * @since 8
 */
/**
 * Provides a way to control the process.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
/**
 * Provides a way to control the process.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
declare class TextTimerController {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  constructor();

  /**
   * Provides a start event for timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Provides a start event for timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Provides a start event for timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  start();

  /**
   * Provides a pause event for timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Provides a pause event for timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Provides a pause event for timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  pause();

  /**
   * Provides an event to reset timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Provides an event to reset timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Provides an event to reset timer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  reset();
}

/**
 * TextTimerConfiguration used by content modifier.
 *
 * @interface TextTimerConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface TextTimerConfiguration extends CommonConfiguration<TextTimerConfiguration> {
  /**
   * Specifies the timer range.
   * In the non-countDown scenario, a negative value indicates that the timer is not limited.
   * The unit is millisecond.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  count: number;

  /**
   * Texttimer is isCountDown or not.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  isCountDown: boolean;

  /**
   * Texttimer is started or not.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  started: boolean;
  
  /**
   * Elapsed time of the timer, readonly.
   * The unit is millisecond.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  elapsedTime: number;
}

/**
 * Defines the options of TextTimer.
 *
 * @interface TextTimerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of TextTimer.
 *
 * @interface TextTimerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
/**
 * Defines the options of TextTimer.
 *
 * @interface TextTimerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
interface TextTimerOptions {
  /**
   * Sets whether to countdown.The default value is false.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets whether to countdown.The default value is false.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Sets whether to countdown.The default value is false.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  isCountDown?: boolean;

  /**
   * Specifies the timer range.
   * In the non-countDown scenario, a negative value indicates that the timer is not limited.
   * The unit is millisecond.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Specifies the timer range.
   * In the non-countDown scenario, a negative value indicates that the timer is not limited.
   * The unit is millisecond.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Specifies the timer range.
   * In the non-countDown scenario, a negative value indicates that the timer is not limited.
   * The unit is millisecond.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  count?: number;

  /**
   * Controller of Texttimer.
   *
   * @type { ?TextTimerController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Controller of Texttimer.
   *
   * @type { ?TextTimerController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Controller of Texttimer.
   *
   * @type { ?TextTimerController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  controller?: TextTimerController;
}

/**
 * Provides an interface for texttimer containers.
 *
 * @interface TextTimerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides an interface for texttimer containers.
 *
 * @interface TextTimerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
/**
 * Provides an interface for texttimer containers.
 *
 * @interface TextTimerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
interface TextTimerInterface {
  /**
   * Defines the TextTimer constructor.
   *
   * @param { TextTimerOptions } options
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the TextTimer constructor.
   *
   * @param { TextTimerOptions } options
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Defines the TextTimer constructor.
   *
   * @param { TextTimerOptions } options
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  (options?: TextTimerOptions): TextTimerAttribute;
}

/**
 * Defines the TextTimer attribute functions.
 *
 * @extends CommonMethod<TextTimerAttribute>
 * @since 8
 */
/**
 * Defines the TextTimer attribute functions.
 *
 * @extends CommonMethod<TextTimerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
/**
 * Defines the TextTimer attribute functions.
 *
 * @extends CommonMethod<TextTimerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
declare class TextTimerAttribute extends CommonMethod<TextTimerAttribute> {
  /**
   * Set the display time format, for example, now is hh/mm/ss/ms and current: hh-mm-ss-ms.
   * The time format string can be hh, mm, ss, or ms.
   *
   * @param { string } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the display time format, for example, now is hh/mm/ss/ms and current: hh-mm-ss-ms.
   * The time format string can be hh, mm, ss, or ms.
   *
   * @param { string } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Set the display time format, for example, now is hh/mm/ss/ms and current: hh-mm-ss-ms.
   * The time format string can be hh, mm, ss, or ms.
   *
   * @param { string } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  /**
   * Set the display time format, for example, now is hh/mm/ss/ms and current: hh-mm-ss-ms.
   * The time format string can be hh, mm, ss, or ms.
   *
   * @param { Optional<string> } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @form
   */
  format(value: Optional<string>): TextTimerAttribute;

  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  /**
   * Called when the font color is set.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @form
   */
  fontColor(value: Optional<ResourceColor>): TextTimerAttribute;

  /**
   * Called when the font size is set.
   *
   * @param { Length } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the font size is set.
   *
   * @param { Length } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Called when the font size is set.
   *
   * @param { Length } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  /**
   * Called when the font size is set.
   *
   * @param { Optional<Length> } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @form
   */
  fontSize(value: Optional<Length>): TextTimerAttribute;

  /**
   * Called when the fontStyle is set
   *
   * @param { FontStyle } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the fontStyle is set
   *
   * @param { FontStyle } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Called when the fontStyle is set
   *
   * @param { FontStyle } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  /**
   * Called when the fontStyle is set
   *
   * @param { Optional<FontStyle> } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @form
   */
  fontStyle(value: Optional<FontStyle>): TextTimerAttribute;

  /**
   * Called when the fontWeight is set
   *
   * @param { number | FontWeight | string } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the fontWeight is set
   *
   * @param { number | FontWeight | string } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Called when the fontWeight is set
   *
   * @param { number | FontWeight | string } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  /**
   * Called when the fontWeight is set
   *
   * @param { Optional<number | FontWeight | string> } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @form
   */
  fontWeight(value: Optional<number | FontWeight | string>): TextTimerAttribute;

  /**
   * Called when the fontFamily is set
   *
   * @param { ResourceStr } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the fontFamily is set
   *
   * @param { ResourceStr } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Called when the fontFamily is set
   *
   * @param { ResourceStr } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  /**
   * Called when the fontFamily is set
   *
   * @param { Optional<ResourceStr> } value
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @form
   */
  fontFamily(value: Optional<ResourceStr>): TextTimerAttribute;

  /**
   * Called when the timer value is returned.
   *
   * @param { function } event
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the timer value is returned.
   *
   * @param { function } event
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Called when the timer value is returned.
   *
   * @param { function } event
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  /**
   * Called when the timer value is returned.
   *
   * @param { Optional<onTimerHandler> } event
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @form
   */
  onTimer(event: Optional<onTimerHandler>): TextTimerAttribute;

  /**
   * Called when the text shadow is set.
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the text shadow is set.
   *
   * @param { Optional<ShadowOptions | Array<ShadowOptions>> } value - The shadow options.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  textShadow(value: Optional<ShadowOptions | Array<ShadowOptions>>): TextTimerAttribute;

  /**
   * Set the content modifier of texttimer.
   *
   * @param { ContentModifier<TextTimerConfiguration> } modifier - The content modifier of texttimer.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  contentModifier(modifier: ContentModifier<TextTimerConfiguration>): TextTimerAttribute;
}

/**
 * Event of TextTimer, using in onTimer.
 * 
 * @typedef { function } onTimerHandler
 * @param { number } utc - UTC coordinated universal time.
 * @param { number } elapsedTime - The time elapsed by TextTimer.
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type onTimerHandler = (utc: number, elapsedTime: number) => void;

/**
 * Defines TextTimer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TextTimer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
/**
 * Defines TextTimer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
declare const TextTimer: TextTimerInterface;

/**
 * Defines TextTimer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TextTimer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
/**
 * Defines TextTimer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
declare const TextTimerInstance: TextTimerAttribute;
