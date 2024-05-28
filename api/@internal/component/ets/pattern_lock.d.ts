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
 * The challenge result based on input pattern for control pattern lock component.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
declare enum PatternLockChallengeResult {
  /**
   * The challenge result is correct.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  CORRECT = 1,
  /**
   * The challenge result is wrong.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  WRONG = 2
}

/**
 * Provides methods for control pattern lock component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Provides methods for control pattern lock component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class PatternLockController {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Reset pattern lock.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Reset pattern lock.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  reset();

  /**
   * Set challenge result.
   * @param { PatternLockChallengeResult } result - The challenge result based on input pattern.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  setChallengeResult(result: PatternLockChallengeResult): void;
}

/**
 * Provides an interface for generating PatternLock.
 *
 * @interface PatternLockInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Provides an interface for generating PatternLock.
 *
 * @interface PatternLockInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface PatternLockInterface {
  /**
   * Constructor.
   *
   * @param { PatternLockController } [controller] - controller
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Constructor.
   *
   * @param { PatternLockController } [controller]  controller
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (controller?: PatternLockController): PatternLockAttribute;
}

/**
 * Provides methods for attribute pattern lock component.
 *
 * @extends CommonMethod<PatternLockAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Provides methods for attribute pattern lock component.
 *
 * @extends CommonMethod<PatternLockAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class PatternLockAttribute extends CommonMethod<PatternLockAttribute> {
  /**
   * The square side length of pattern lock component.
   *
   * @param { Length } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The square side length of pattern lock component.
   *
   * @param { Length } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The square side length of pattern lock component.
   *
   * @param { Optional<Length> } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  sideLength(value: Optional<Length>): PatternLockAttribute;

  /**
   * Circle radius.
   *
   * @param { Length } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Circle radius.
   *
   * @param { Length } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Circle radius.
   *
   * @param { Optional<Length> } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  circleRadius(value: Optional<Length>): PatternLockAttribute;

  /**
   * The background color.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The background color.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The background color.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  backgroundColor(value: Optional<ResourceColor>): PatternLockAttribute;

  /**
   * Regular color.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Regular color.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Regular color.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  regularColor(value: Optional<ResourceColor>): PatternLockAttribute;

  /**
   * The color when cell is selected.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The color when cell is selected.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The color when cell is selected.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  selectedColor(value: Optional<ResourceColor>): PatternLockAttribute;

  /**
   * The color when cell is active state.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The color when cell is active state.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The color when cell is active state.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  activeColor(value: Optional<ResourceColor>): PatternLockAttribute;

  /**
   * The path line color.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The path line color.
   *
   * @param { ResourceColor } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The path line color.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  pathColor(value: Optional<ResourceColor>): PatternLockAttribute;

  /**
   * The path line stroke width.
   *
   * @param { number | string } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The path line stroke width.
   *
   * @param { number | string } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The path line stroke width.
   *
   * @param { Optional<number | string> } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  pathStrokeWidth(value: Optional<number | string>): PatternLockAttribute;

  /**
   * Called when the pattern input completed.
   *
   * @param { function } callback
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when the pattern input completed.
   *
   * @param { function } callback
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the pattern input completed.
   *
   * @param { Optional<Callback<Array<number>>> } callback
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onPatternComplete(handler: Optional<Callback<Array<number>>>): PatternLockAttribute;

  /**
   * Called when judging whether the input state can be reset by touch pattern lock.
   *
   * @param { boolean } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when judging whether the input state can be reset by touch pattern lock.
   *
   * @param { boolean } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when judging whether the input state can be reset by touch pattern lock.
   *
   * @param { Optional<boolean> } value
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  autoReset(value: Optional<boolean>): PatternLockAttribute;

  /**
   * Called when connecting to a grid dot.
   * @param { import('../api/@ohos.base').Callback<number> } callback - A callback instance used when connection to a grid dot.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when connecting to a grid dot.
   * @param { Optional<Callback<number>> } callback - A callback instance used when connection to a grid dot.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onDotConnect(handler: Optional<Callback<number>>): PatternLockAttribute;
}

/**
 * Defines PatternLock Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines PatternLock Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const PatternLock: PatternLockInterface;

/**
 * Defines PatternLock Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines PatternLock Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const PatternLockInstance: PatternLockAttribute;
