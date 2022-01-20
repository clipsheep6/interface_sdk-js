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
 * Provides a way to control the process.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class TextTimerController {
  /**
   * constructor.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor();

  /**
   * Provides a start event for timer.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  start();

  /**
   * Provides a pause event for timer.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  pause();

  /**
   * Provides an event to reset timer.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  reset();
}

/**
 * Defines the option of TextTimer.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface TextTimerOption {
  /**
   * Sets whether to countdown.The default value is false.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  isCountDown?: boolean;
  /**
   * Specifies the timer range.
   * In the non-countDown scenario, a negative value indicates that the timer is not limited.
   * The unit is millisecond.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  count?: number;

  /**
   * Controller of Texttimer.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  controller?: TextTimerController;
}

/**
 * Provides an interface for texttimer containers.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface TextTimerInterface {
  /**
   * Defines the TextTimer constructor.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  (options?: TextTimerOption): TextTimerAttribute;
}

/**
 * Defines the TextTimer attribute functions.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class TextTimerAttribute extends CommonMethod<TextTimerAttribute> {
  /**
   * Set the display time format, for example, now is hh/mm/ss/ms and current: hh-mm-ss-ms.
   * The time format string can be hh, mm, ss, or ms.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  format(value: string): TextTimerAttribute;
   /**
    * Called when the font color is set.
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
  fontColor(value: ResourceColor): TextTimerAttribute;
  /**
   * Called when the font size is set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontSize(value: Length): TextTimerAttribute;
  /**
   * Called when the fontStyle is set
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontStyle(value: FontStyle): TextTimerAttribute;
   /**
    * Called when the fontWeight is set
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
  fontWeight(value: number | FontWeight | string): TextTimerAttribute;
   /**
    * Called when the fontFamily is set
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
  fontFamily(value: ResourceStr): TextTimerAttribute;
  /**
   * Called when the timer value is returned.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onTimer(event: (utc: number, elapsedTime: number) => void): TextTimerAttribute;
}

declare const TextTimer: TextTimerInterface;
declare const TextTimerInstance: TextTimerAttribute;
