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

/*** if arkts 1.2 */
import { BaseEvent, SourceTool, Callback } from './common'
import { InteractionHand } from './enums'
/*** endif */

/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum PanDirection {
  /**
   * Default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  None,

  /**
   * Sliding horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sliding horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Horizontal,

  /**
   * Sliding left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sliding left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Left,

  /**
   * Sliding right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sliding right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Right,

  /**
   * Sliding Vertical
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sliding Vertical
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding Vertical
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Vertical,

  /**
   * Sliding up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sliding up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Up,

  /**
   * Sliding Down.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sliding Down.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding Down.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Down,

  /**
   * Sliding in all directions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sliding in all directions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding in all directions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  All,
}

/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum SwipeDirection {
  /**
   * Default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  None,

  /**
   * Sliding horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sliding horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Horizontal,

  /**
   * Sliding Vertical
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sliding Vertical
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding Vertical
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Vertical,

  /**
   * Sliding in all directions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sliding in all directions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sliding in all directions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  All,
}

/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum GestureMode {
  /**
   * Sequential gesture recognition is performed in sequence according to the gesture registration sequence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sequential gesture recognition is performed in sequence according to the gesture registration sequence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sequential gesture recognition is performed in sequence according to the gesture registration sequence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Sequence,

  /**
   * Simultaneous recognition. Registration gestures participate in recognition. Everything can be triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Simultaneous recognition. Registration gestures participate in recognition. Everything can be triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Simultaneous recognition. Registration gestures participate in recognition. Everything can be triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Parallel,

  /**
   * Mutually exclusive recognition. Only one gesture is successfully recognized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Mutually exclusive recognition. Only one gesture is successfully recognized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Mutually exclusive recognition. Only one gesture is successfully recognized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Exclusive,
}

/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum GestureMask {
  /**
   * High-priority response to the current gesture.When the current gesture fails to be recognized, other gesture responses are triggered.For gestures with the same priority, responses are performed based on the recognition sequence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * High-priority response to the current gesture.When the current gesture fails to be recognized, other gesture responses are triggered.For gestures with the same priority, responses are performed based on the recognition sequence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * High-priority response to the current gesture.When the current gesture fails to be recognized, other gesture responses are triggered.For gestures with the same priority, responses are performed based on the recognition sequence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Normal,

  /**
   * Ignore internal gestures and recognize the current gesture first.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Ignore internal gestures and recognize the current gesture first.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Ignore internal gestures and recognize the current gesture first.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  IgnoreInternal,
}

/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum GestureJudgeResult {
  /**
   * The system gesture determination is not affected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The system gesture determination is not affected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  CONTINUE = 0,

  /**
   * The user-defined gesture determination result of the current component is fail.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The user-defined gesture determination result of the current component is fail.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  REJECT = 1,
}

/**
 * Creating an Object
 *
 * @namespace GestureControl 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Creating an Object
 *
 * @namespace GestureControl 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace GestureControl {
  /**
   * Creating an Object
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Creating an Object
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum GestureType {
    /**
     * TapGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * TapGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TAP_GESTURE = 0,

    /**
     * LongPressGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * LongPressGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    LONG_PRESS_GESTURE = 1,

    /**
     * PanGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * PanGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PAN_GESTURE = 2,

    /**
     * PinchGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * PinchGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PINCH_GESTURE = 3,

    /**
     * SwipeGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * SwipeGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SWIPE_GESTURE = 4,

    /**
     * RotationGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * RotationGesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    ROTATION_GESTURE = 5,

    /**
     * Drag.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Drag.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    DRAG = 6,

    /**
     * Click.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Click.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CLICK = 7,
  }
}

/**
 * The description of gesture information.
 *
 * @interface GestureInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * The description of gesture information.
 *
 * @interface GestureInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface GestureInfo {
  /**
   * The tag of gesture.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The tag of gesture.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  tag?: string;

  /**
   * The type of gesture.
   *
   * @type { GestureControl.GestureType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The type of gesture.
   *
   * @type { GestureControl.GestureType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: GestureControl.GestureType;

  /**
   * The flag whether it is a system gesture.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The flag whether it is a system gesture.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isSystemGesture: boolean;
}

/**
 * The location info used in gesture event.
 *
 * @interface EventLocationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface EventLocationInfo {
  /**
   * X-axis coordinates relative to the upper left corner of the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  x: number;

  /**
   * Y-axis coordinates relative to the upper left corner of the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  y: number;

  /**
   * X-axis coordinates relative to the upper left corner of the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  windowX: number;

  /**
   * Y-axis coordinates relative to the upper left corner of the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  windowY: number;

  /**
   * X-axis coordinates relative to the upper left corner of the screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  displayX: number;

  /**
   * Y-axis coordinates relative to the upper left corner of the screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  displayY: number;
}

/**
 * Type of the finger information.
 *
 * @interface FingerInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Type of the finger information.
 *
 * @interface FingerInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Type of the finger information.
 *
 * @interface FingerInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface FingerInfo {
  /**
   * Finger unique identifier.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Finger unique identifier.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Finger unique identifier.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  id: number;

  /**
   * X position of the click point relative to the global display coordinate.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  globalDisplayX?: number;

  /**
   * Y position of the click point relative to the global display coordinate.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  globalDisplayY?: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  globalX: number;

  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  globalY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  localX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  localY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  displayX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  displayY: number;

  /**
   * Type of the touch hand.
   *
   * @type { InteractionHand }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  hand?: InteractionHand;
}

/**
 * Defines the Gesture Type.
 *
 * @typedef { TapGestureInterface | LongPressGestureInterface | PanGestureInterface | PinchGestureInterface | SwipeGestureInterface | RotationGestureInterface | GestureGroupInterface } GestureType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the Gesture Type.
 *
 * @typedef { TapGestureInterface | LongPressGestureInterface | PanGestureInterface | PinchGestureInterface | SwipeGestureInterface | RotationGestureInterface | GestureGroupInterface } GestureType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Gesture Type.
 *
 * @typedef { TapGestureInterface | LongPressGestureInterface | PanGestureInterface | PinchGestureInterface | SwipeGestureInterface | RotationGestureInterface | GestureGroupInterface } GestureType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare type GestureType =
  TapGestureInterface
  | LongPressGestureInterface
  | PanGestureInterface
  | PinchGestureInterface
  | SwipeGestureInterface
  | RotationGestureInterface
  | GestureGroupInterface;

/**
 * Defines the Gesture Type.
 *
 * @typedef { Gesture | GestureGroup } GestureType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type GestureType = Gesture | GestureGroup;

/**
 * Defines the gesture base event.
 *
 * @extends BaseEvent
 * @interface BaseGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the gesture base event.
 *
 * @extends BaseEvent
 * @interface BaseGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface BaseGestureEvent extends BaseEvent {
  /**
   * All finger information.
   *
   * @type { FingerInfo[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * All finger information.
   *
   * @type { FingerInfo[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fingerList: FingerInfo[];

  /**
   * All finger information when the gesture event is triggered, the return value
   * is one array, and the array length is just the total fingers count. 
   * 
   * @type { ?FingerInfo[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  fingerInfos?: FingerInfo[];
}

/**
 * Defines event info for tap gesture.
 *
 * @extends BaseGestureEvent
 * @interface TapGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines event info for tap gesture.
 *
 * @extends BaseGestureEvent
 * @interface TapGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface TapGestureEvent extends BaseGestureEvent {
  /**
   * The tap location info used in tap gesture.
   * 
   * @type {?EventLocationInfo}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  tapLocation?: EventLocationInfo;
}

/**
 * Defines event info for long press gesture.
 *
 * @extends BaseGestureEvent
 * @interface LongPressGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines event info for long press gesture.
 *
 * @extends BaseGestureEvent
 * @interface LongPressGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface LongPressGestureEvent extends BaseGestureEvent {
  /**
   * Indicates whether an event is triggered repeatedly.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Indicates whether an event is triggered repeatedly.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  repeat: boolean;
}

/**
 * Defines event info for pan gesture.
 *
 * @extends BaseGestureEvent
 * @interface PanGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines event info for pan gesture.
 *
 * @extends BaseGestureEvent
 * @interface PanGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PanGestureEvent extends BaseGestureEvent {
  /**
   * Gesture event offset X.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Gesture event offset X.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offsetX: number;

  /**
   * Gesture event offset Y.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Gesture event offset Y.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offsetY: number;

  /**
   * X-axis velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * X-axis velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  velocityX: number;

  /**
   * Y-axis velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Y-axis velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  velocityY: number;

  /**
   * velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  velocity: number;
}

/**
 * Defines event info for pinch gesture.
 *
 * @extends BaseGestureEvent
 * @interface PinchGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines event info for pinch gesture.
 *
 * @extends BaseGestureEvent
 * @interface PinchGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PinchGestureEvent extends BaseGestureEvent {
  /**
   * Scaling ratio.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Scaling ratio.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  scale: number;

  /**
   * X-axis coordinate of the kneading center point.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * X-axis coordinate of the kneading center point.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  pinchCenterX: number;

  /**
   * Y-axis coordinate of the kneading center point.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Y-axis coordinate of the kneading center point.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  pinchCenterY: number;
}

/**
 * Defines event info for rotation gesture.
 *
 * @extends BaseGestureEvent
 * @interface RotationGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines event info for rotation gesture.
 *
 * @extends BaseGestureEvent
 * @interface RotationGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface RotationGestureEvent extends BaseGestureEvent {
  /**
   * Gesture event direction angle.
   * The unit is deg.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Gesture event direction angle.
   * The unit is deg.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  angle: number;
}

/**
 * Defines event info for swipe gesture.
 *
 * @extends BaseGestureEvent
 * @interface SwipeGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines event info for swipe gesture.
 *
 * @extends BaseGestureEvent
 * @interface SwipeGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface SwipeGestureEvent extends BaseGestureEvent {
  /**
   * Gesture event direction angle.
   * The unit is deg.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Gesture event direction angle.
   * The unit is deg.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  angle: number;

  /**
   * Gesture event slide speed.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Gesture event slide speed.
   * The unit is vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  speed: number;
}

/**
 * Defines event info for gesture.
 *
 * @extends BaseEvent
 * @interface GestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines event info for gesture.
 *
 * @extends BaseEvent
 * @interface GestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines event info for gesture.
 *
 * @extends BaseEvent
 * @interface GestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface GestureEvent extends BaseEvent {
  /**
   * Indicates whether an event is triggered repeatedly.
   * Used in LongPressGesture.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates whether an event is triggered repeatedly.
   * Used in LongPressGesture.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates whether an event is triggered repeatedly.
   * Used in LongPressGesture.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  repeat: boolean;

  /**
   * All finger information.
   * Used in LongPressGesture and TapGesture.
   *
   * @type { FingerInfo[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * All finger information.
   * Used in LongPressGesture and TapGesture.
   *
   * @type { FingerInfo[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * All finger information.
   * Used in LongPressGesture and TapGesture.
   *
   * @type { FingerInfo[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fingerList: FingerInfo[];

  /**
   * All finger information when the gesture event is triggered, the return value
   * is one array, and the array length is just the total fingers count. 
   * 
   * @type { ?FingerInfo[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  fingerInfos?: FingerInfo[];

  /**
   * Gesture event offset X.
   * The unit is vp.
   * Used in PanGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Gesture event offset X.
   * The unit is vp.
   * Used in PanGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Gesture event offset X.
   * The unit is vp.
   * Used in PanGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offsetX: number;

  /**
   * Gesture event offset Y.
   * The unit is vp.
   * Used in PanGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Gesture event offset Y.
   * The unit is vp.
   * Used in PanGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Gesture event offset Y.
   * The unit is vp.
   * Used in PanGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offsetY: number;

  /**
   * Gesture event direction angle.
   * The unit is deg.
   * Used in RotationGesture and SwipeGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Gesture event direction angle.
   * The unit is deg.
   * Used in RotationGesture and SwipeGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Gesture event direction angle.
   * The unit is deg.
   * Used in RotationGesture and SwipeGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  angle: number;

  /**
   * Gesture event slide speed.
   * The unit is vp.
   * Used in SwipeGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Gesture event slide speed.
   * The unit is vp.
   * Used in SwipeGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Gesture event slide speed.
   * The unit is vp.
   * Used in SwipeGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  speed: number;

  /**
   * Scaling ratio.
   * Used in PinchGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Scaling ratio.
   * Used in PinchGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Scaling ratio.
   * Used in PinchGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  scale: number;

  /**
   * X-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * X-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  pinchCenterX: number;

  /**
   * Y-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Y-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y-axis coordinate of the kneading center point.
   * The unit is vp.
   * Used in PinchGesture.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  pinchCenterY: number;

  /**
   * X-axis velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X-axis velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  velocityX: number;

  /**
   * Y-axis velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y-axis velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  velocityY: number;

  /**
   * velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * velocity of the gesture.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  velocity: number;

  /**
   * The tap location info used in tap gesture.
   * 
   * @type {?EventLocationInfo}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  tapLocation?: EventLocationInfo;
}

/**
 * Defines Gesture interface.
 *
 * @interface GestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface GestureInterface<T> {
  /**
   * Set gesture's tag.
   *
   * @param { string } tag
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  tag(tag: string): T;

  /**
   * Input source type for gesture response.
   *
   * @param { Array<SourceTool> } types - indicate the allowed input source for gesture to response
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  allowedTypes(types: Array<SourceTool>): T;
}

  /** 
   * Defines the BaseHandlerOptions options.
   * @interface BaseHandlerOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface BaseHandlerOptions {
  /**
   * The flag to strict verification fingers, if touch finger size is over or less than fingers, gesture can not be accepted.
   * The default value is false.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isFingerCountLimited?: boolean;
}

/**
 * Defines Gesture interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export declare class Gesture {
  /**
   * Set gesture's tag.
   *
   * @param { string } tag
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  tag(tag: string): this;

  /**
   * Input source type for gesture response.
   *
   * @param { Array<SourceTool> } types - indicate the allowed input source for gesture to response
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  allowedTypes(types: Array<SourceTool>): this;
}

/**
 * Defines TapGesture parameters.
 *
 * @interface TapGestureParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines TapGesture parameters.
 *
 * @extends BaseHandlerOptions
 * @interface TapGestureParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TapGestureParameters extends BaseHandlerOptions {
  /**
   * Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  count?: number;
  /**
   * The hand index that triggers the click. If the value is less than 1, the default value is used.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fingers?: number;
  /**
   * The limited move distance of click. If the value is less than 0, the default value is used.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  distanceThreshold?: number;
}

/**
 * Defines TapGesture interface.
 *
 * @extends GestureInterface<TapGestureInterface>
 * @interface TapGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines TapGesture interface.
 *
 * @extends GestureInterface<TapGestureInterface>
 * @interface TapGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TapGesture interface extends GestureInterface<TapGestureInterface>.
 *
 * @extends GestureInterface<TapGestureInterface>
 * @interface TapGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface TapGestureInterface extends GestureInterface<TapGestureInterface> {
  /**
   * Set the value.
   * count:Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   * fingers:The hand index that triggers the click. If the value is less than 1, the default value is used.
   *
   * @param { object } value
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the value.
   * count:Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   * fingers:The hand index that triggers the click. If the value is less than 1, the default value is used.
   *
   * @param { object } value
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the value.
   * count:Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   * fingers:The hand index that triggers the click. If the value is less than 1, the default value is used.
   *
   * @param { object } value
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set the value.
   * TapGestureParameters: The parameters of the tapGesture.
   *
   * @param { TapGestureParameters } value
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (value?: TapGestureParameters): TapGestureInterface;

  /**
   * Tap gesture recognition success callback.
   *
   * @param { function } event
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Tap gesture recognition success callback.
   *
   * @param { function } event
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Tap gesture recognition success callback.
   *
   * @param { function } event
   * @returns { TapGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onAction(event: (event: GestureEvent) => void): TapGestureInterface;
}

/*** if arkts 1.2 */
/**
 * Defines TapGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class TapGesture extends Gesture {
  /**
   * Set the value.
   * TapGestureParameters: The parameters of the tapGesture.
   *
   * @param { function } factory
   * @param { TapGestureParameters } value
   * @returns { TapGesture }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  static $_instantiate(factory: () => TapGesture, value?: TapGestureParameters): TapGesture

  /**
   * Tap gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onAction(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines LongPressGesture interface.
 *
 * @extends GestureInterface<LongPressGestureInterface>
 * @interface LongPressGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines LongPressGesture interface.
 *
 * @extends GestureInterface<LongPressGestureInterface>
 * @interface LongPressGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines LongPressGesture interface extends GestureInterface<LongPressGestureInterface>.
 *
 * @extends GestureInterface<LongPressGestureInterface>
 * @interface LongPressGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface LongPressGestureInterface extends GestureInterface<LongPressGestureInterface> {
  /**
   * Set the value.
   * fingers: Indicates the hand index that triggers the long press.
   * repeat: Indicates whether to trigger event callback continuously.
   * duration: Minimum press and hold time, in milliseconds.
   *
   * @param { object } value
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the value.
   * fingers: Indicates the hand index that triggers the long press.
   * repeat: Indicates whether to trigger event callback continuously.
   * duration: Minimum press and hold time, in milliseconds.
   *
   * @param { object } value
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the value.
   * fingers: Indicates the hand index that triggers the long press.
   * repeat: Indicates whether to trigger event callback continuously.
   * duration: Minimum press and hold time, in milliseconds.
   *
   * @param { object } value
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (value?: { fingers?: number; repeat?: boolean; duration?: number }): LongPressGestureInterface;

  /**
   * Set the options.
   * options: The options of the long press gesture.
   *
   * @param { LongPressGestureHandlerOptions } options
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
    (options?: LongPressGestureHandlerOptions): LongPressGestureInterface;
  /**
   * LongPress gesture recognition success callback.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * LongPress gesture recognition success callback.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * LongPress gesture recognition success callback.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onAction(event: (event: GestureEvent) => void): LongPressGestureInterface;

  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionEnd(event: (event: GestureEvent) => void): LongPressGestureInterface;

  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionCancel(event: () => void): LongPressGestureInterface;
  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { LongPressGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onActionCancel(event: Callback<GestureEvent>): LongPressGestureInterface;
}

/*** if arkts 1.2 */
/**
 * Defines LongPressGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class LongPressGesture extends Gesture {
  /**
   * Set the value.
   * fingers: Indicates the hand index that triggers the long press.
   * repeat: Indicates whether to trigger event callback continuously.
   * duration: Minimum press and hold time, in milliseconds.
   *
   * @param { function } factory
   * @param { LongPressGestureHandlerOptions } value
   * @returns { LongPressGesture }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  static $_instantiate(factory: () => LongPressGesture, value?: LongPressGestureHandlerOptions): LongPressGesture

  /**
   * LongPress gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onAction(event: Callback<GestureEvent>): this;

  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionEnd(event: Callback<GestureEvent>): this;

  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionCancel(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the PanGesture options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the PanGesture options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the PanGesture options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class PanGestureOptions {
  /**
   * Constructor parameters.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Constructor parameters.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Constructor parameters.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  constructor(value?: { fingers?: number; direction?: PanDirection; distance?: number });

  /**
   * Constructor parameters.
   *
   * @param { PanGestureHandlerOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  constructor(value?: PanGestureHandlerOptions);

  /**
   * Sets the direction attribute.
   *
   * @param { PanDirection } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the direction attribute.
   *
   * @param { PanDirection } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the direction attribute.
   *
   * @param { PanDirection } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  setDirection(value: PanDirection);

  /**
   * Sets the direction attribute.
   *
   * @param { PanDirection } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  setDirection(value: PanDirection): void;

  /**
   * Sets the setDistance attribute.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the setDistance attribute.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the setDistance attribute.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  setDistance(value: number);

  /**
   * Sets the setDistance attribute.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  setDistance(value: number): void;

  /**
   * Sets the setFingers attribute.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the setFingers attribute.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the setFingers attribute.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  setFingers(value: number);

  /**
   * Sets the setFingers attribute.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  setFingers(value: number): void;

  /**
   * Get the pan direction attribute.
   *
   * @returns { PanDirection } - Pan gesture direction
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getDirection(): PanDirection;
  /**
   * Returns the pan gesture's distance.
   * The unit is vp.
   *
   * @returns { number } - the distance of the pan gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getDistance(): number;
}

/**
 * Defines the PanGesture interface.
 *
 * @extends GestureInterface<PanGestureInterface>
 * @interface PanGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the PanGesture interface.
 *
 * @extends GestureInterface<PanGestureInterface>
 * @interface PanGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines PanGesture interface extends GestureInterface<PanGestureInterface>.
 *
 * @extends GestureInterface<PanGestureInterface>
 * @interface PanGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface PanGestureInterface extends GestureInterface<PanGestureInterface> {
  /**
   * Set the value.
   *
   * @param { { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions } value
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the value.
   *
   * @param { { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions } value
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the value.
   *
   * @param { { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions } value
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOptions): PanGestureInterface;

  /**
   * Set the value.
   *
   * @param { PanGestureHandlerOptions } options
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  (options?: PanGestureHandlerOptions): PanGestureInterface;

  /**
   * Pan gesture recognition success callback.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Pan gesture recognition success callback.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pan gesture recognition success callback.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionStart(event: (event: GestureEvent) => void): PanGestureInterface;

  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionUpdate(event: (event: GestureEvent) => void): PanGestureInterface;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionEnd(event: (event: GestureEvent) => void): PanGestureInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionCancel(event: () => void): PanGestureInterface;
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { PanGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onActionCancel(event: Callback<GestureEvent>): PanGestureInterface;
  
}

/*** if arkts 1.2 */
/**
 * Defines PanGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class PanGesture extends Gesture {
  /**
   * Set the value.
   *
   * @param { function } factory
   * @param { PanGestureHandlerOptions | PanGestureOptions } value
   * @returns { PanGesture }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  static $_instantiate(factory: () => PanGesture, value?: PanGestureHandlerOptions | PanGestureOptions): PanGesture

  /**
   * Pan gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionStart(event: Callback<GestureEvent>): this;

  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionUpdate(event: Callback<GestureEvent>): this;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionEnd(event: Callback<GestureEvent>): this;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionCancel(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the SwipeGesture interface.
 *
 * @extends GestureInterface<SwipeGestureInterface>
 * @interface SwipeGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the SwipeGesture interface.
 *
 * @extends GestureInterface<SwipeGestureInterface>
 * @interface SwipeGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines SwipeGesture interface extends GestureInterface<SwipeGestureInterface>.
 *
 * @extends GestureInterface<SwipeGestureInterface>
 * @interface SwipeGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface SwipeGestureInterface extends GestureInterface<SwipeGestureInterface> {
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (value?: { fingers?: number; direction?: SwipeDirection; speed?: number }): SwipeGestureInterface;

  /**
   * Set the options.
   * options: The options of the swipe gesture.
   *
   * @param { SwipeGestureHandlerOptions } options
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  (options?: SwipeGestureHandlerOptions): SwipeGestureInterface;

  /**
   * Slide gesture recognition success callback.
   *
   * @param { function } event
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Slide gesture recognition success callback.
   *
   * @param { function } event
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Slide gesture recognition success callback.
   *
   * @param { function } event
   * @returns { SwipeGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onAction(event: (event: GestureEvent) => void): SwipeGestureInterface;
}

/*** if arkts 1.2 */
/**
 * Defines SwipeGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class SwipeGesture extends Gesture {
  /**
   * Set the value.
   *
   * @param { function } factory
   * @param { SwipeGestureHandlerOptions } value
   * @returns { SwipeGesture }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  static $_instantiate(factory: () => SwipeGesture, value?: SwipeGestureHandlerOptions): SwipeGesture

  /**
   * Slide gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onAction(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the PinchGesture interface.
 *
 * @extends GestureInterface<PinchGestureInterface>
 * @interface PinchGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the PinchGesture interface.
 *
 * @extends GestureInterface<PinchGestureInterface>
 * @interface PinchGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines PinchGesture interface extends GestureInterface<PinchGestureInterface>.
 *
 * @extends GestureInterface<PinchGestureInterface>
 * @interface PinchGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface PinchGestureInterface extends GestureInterface<PinchGestureInterface> {
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (value?: { fingers?: number; distance?: number }): PinchGestureInterface;

  /**
   * Set the options.
   * options: The options of the pinch gesture.
   *
   * @param { PinchGestureHandlerOptions } options
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  (options?: PinchGestureHandlerOptions): PinchGestureInterface;

  /**
   * Pan gesture recognition success callback.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Pan gesture recognition success callback.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pan gesture recognition success callback.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionStart(event: (event: GestureEvent) => void): PinchGestureInterface;

  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionUpdate(event: (event: GestureEvent) => void): PinchGestureInterface;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionEnd(event: (event: GestureEvent) => void): PinchGestureInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionCancel(event: () => void): PinchGestureInterface;
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { PinchGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onActionCancel(event: Callback<GestureEvent>): PinchGestureInterface;
}

/*** if arkts 1.2 */
/**
 * Defines PinchGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class PinchGesture extends Gesture {
  /**
   * Set the value.
   *
   * @param { function } factory
   * @param { PinchGestureHandlerOptions } value
   * @returns { PinchGesture }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  static $_instantiate(factory: () => PinchGesture, value?: PinchGestureHandlerOptions): PinchGesture

  /**
   * Pinch gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionStart(event: Callback<GestureEvent>): this;

  /**
   * Callback when the Pinch gesture is moving.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionUpdate(event: Callback<GestureEvent>): this;

  /**
   * The Pinch gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionEnd(event: Callback<GestureEvent>): this;

  /**
   * The Pinch gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionCancel(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the RotationGesture interface.
 *
 * @extends GestureInterface<RotationGestureInterface>
 * @interface RotationGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the RotationGesture interface.
 *
 * @extends GestureInterface<RotationGestureInterface>
 * @interface RotationGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines RotationGesture interface extends GestureInterface<RotationGestureInterface>.
 *
 * @extends GestureInterface<RotationGestureInterface>
 * @interface RotationGestureInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface RotationGestureInterface extends GestureInterface<RotationGestureInterface> {
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the value.
   *
   * @param { object } value
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (value?: { fingers?: number; angle?: number }): RotationGestureInterface;

  /**
   * Set the options.
   * options: The options of the rotation gesture.
   *
   * @param { RotationGestureHandlerOptions } options
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  (options?: RotationGestureHandlerOptions): RotationGestureInterface;

  /**
   * Pan gesture recognition success callback.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Pan gesture recognition success callback.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pan gesture recognition success callback.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionStart(event: (event: GestureEvent) => void): RotationGestureInterface;

  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionUpdate(event: (event: GestureEvent) => void): RotationGestureInterface;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionEnd(event: (event: GestureEvent) => void): RotationGestureInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onActionCancel(event: () => void): RotationGestureInterface;
   /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { RotationGestureInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
   onActionCancel(event: Callback<GestureEvent>): RotationGestureInterface;
}

/*** if arkts 1.2 */
/**
 * Defines RotationGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class RotationGesture extends Gesture {
  /**
   * Set the value.
   *
   * @param { function } factory
   * @param { RotationGestureHandlerOptions } value
   * @returns { RotationGesture }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  static $_instantiate(factory: () => RotationGesture, value?: RotationGestureHandlerOptions): RotationGesture

  /**
   * Rotation gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionStart(event: Callback<GestureEvent>): this;

  /**
   * Callback when the Rotation gesture is moving.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionUpdate(event: Callback<GestureEvent>): this;

  /**
   * The Rotation gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionEnd(event: Callback<GestureEvent>): this;

  /**
   * The Rotation gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionCancel(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the GestureGroup interface.
 *
 * @interface GestureGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the GestureGroup interface.
 *
 * @interface GestureGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the GestureGroup interface.
 *
 * @interface GestureGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface GestureGroupInterface {
  /**
   * Return to Obtain GestureGroup.
   *
   * @param { GestureMode } mode
   * @param { GestureType[] } gesture
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Return to Obtain GestureGroup.
   *
   * @param { GestureMode } mode
   * @param { GestureType[] } gesture
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Return to Obtain GestureGroup.
   *
   * @param { GestureMode } mode
   * @param { GestureType[] } gesture
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (mode: GestureMode, ...gesture: GestureType[]): GestureGroupInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { function } event
   * @returns { GestureGroupInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onCancel(event: () => void): GestureGroupInterface;
}

/*** if arkts 1.2 */
/**
 * Defines the GestureGroup.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class GestureGroup {
  /**
   * Return to Obtain GestureGroup.
   *
   * @param { function } factory
   * @param { GestureMode } mode
   * @param { GestureType[] } gesture
   * @returns { GestureGroup }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  static $_instantiate(factory: () => GestureGroup, mode: GestureMode, ...gesture: GestureType[]): GestureGroup;

  /**
   * The Gesture group is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<void> } event
   * @returns { GestureGroup }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onCancel(event: Callback<void>): GestureGroup;
}
/*** endif */

/**
 * Defines TapGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines TapGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TapGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TapGesture: TapGestureInterface;

/**
 * Defines LongPressGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines LongPressGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines LongPressGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const LongPressGesture: LongPressGestureInterface;

/**
 * Defines PanGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines PanGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines PanGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const PanGesture: PanGestureInterface;

/**
 * Defines SwipeGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines SwipeGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines SwipeGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const SwipeGesture: SwipeGestureInterface;

/**
 * Defines PinchGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines PinchGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines PinchGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const PinchGesture: PinchGestureInterface;

/**
 * Defines RotationGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines RotationGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines RotationGesture Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const RotationGesture: RotationGestureInterface;

/**
 * Defines GestureGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines GestureGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines GestureGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const GestureGroup: GestureGroupInterface;

/**
 * Defines the gesture handler.
 *
 * @implements GestureInterface<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class GestureHandler<T> implements GestureInterface<T> {
  /**
   * Set the GestureHandler's tag.
   *
   * @param { string } tag
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  tag(tag: string): T;

  /**
   * Input source type for gesture response.
   *
   * @param { Array<SourceTool> } types - indicate the allowed input source for gesture to response
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  allowedTypes(types: Array<SourceTool>): T;
}

/*** if arkts 1.2 */
/**
 * Defines the gesture handler.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class GestureHandler {
  /**
   * Set the GestureHandler's tag.
   *
   * @param { string } tag
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  tag(tag: string): this;

  /**
   * Input source type for gesture response.
   *
   * @param { Array<SourceTool> } types - indicate the allowed input source for gesture to response
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  allowedTypes(types: Array<SourceTool>): this;
}
/*** endif */

/**
 * Defines the TapGestureHandler options.
 *
 * @interface TapGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the TapGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface TapGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface TapGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Indicates the number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   * The default value is 1.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  count?: number;
  /**
   * Indicates the hand index that triggers the click. If the value is less than 1, the default value is used.
   * The default value is 1.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fingers?: number;
}

/**
 * Defines the TapGesture handler.
 *
 * @extends GestureHandler<TapGestureHandler>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class TapGestureHandler extends GestureHandler<TapGestureHandler> {
  /**
   * Constructor parameters.
   *
   * @param { TapGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(options?: TapGestureHandlerOptions);
  /**
   * Tap gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { TapGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onAction(event: Callback<GestureEvent>): TapGestureHandler;
}

/*** if arkts 1.2 */
/**
 * Defines the TapGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class TapGestureHandler extends GestureHandler {
  /**
   * Constructor parameters.
   *
   * @param { TapGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(options?: TapGestureHandlerOptions);
  /**
   * Tap gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onAction(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the LongPressGestureHandler options.
 *
 * @interface LongPressGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the LongPressGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface LongPressGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface LongPressGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Indicates the hand index that triggers the long press. If the value is less than 1, the default value is used.
   * The default value is 1.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fingers?: number;
  /**
   * Indicates whether an event is triggered repeatedly.
   * The default value is false.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  repeat?: boolean;
  /**
   * Indicates minimum press and hold time, in milliseconds.
   * The default value is 500ms.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  duration?: number;
}

/**
 * Defines the LongPressGesture handler.
 *
 * @extends GestureHandler<LongPressGestureHandler>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class LongPressGestureHandler extends GestureHandler<LongPressGestureHandler> {
  /**
   * Constructor parameters.
   *
   * @param { LongPressGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(options?: LongPressGestureHandlerOptions);
  /**
   * LongPress gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { LongPressGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onAction(event: Callback<GestureEvent>): LongPressGestureHandler;
  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { LongPressGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionEnd(event: Callback<GestureEvent>): LongPressGestureHandler;
  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<void> } event
   * @returns { LongPressGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionCancel(event: Callback<void>): LongPressGestureHandler;
  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * Add GestureEvent in cancel callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { LongPressGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onActionCancel(event: Callback<GestureEvent>): LongPressGestureHandler;
}

/*** if arkts 1.2 */
/**
 * Defines the LongPressGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class LongPressGestureHandler extends GestureHandler {
  /**
   * Constructor parameters.
   *
   * @param { LongPressGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(options?: LongPressGestureHandlerOptions);
  /**
   * LongPress gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onAction(event: Callback<GestureEvent>): this;
  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionEnd(event: Callback<GestureEvent>): this;
  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionCancel(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the PanGestureHandler options.
 *
 * @interface PanGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the PanGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface PanGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PanGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Indicates the hand index that triggers the pan. If the value is less than 1, the default value is used.
   * The default value is 1.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fingers?: number;
  /**
   * Indicates the move direction of the pan gesture.
   * The default value is PanDirection.All.
   *
   * @type { ?PanDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  direction?: PanDirection;
  /**
   * Indicates minimum move distance.
   * The default value is 5vp.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  distance?: number;
  /**
   * Indicates minimum move distance map.
   *
   * @type { ?Map<SourceTool, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  distanceMap?: Map<SourceTool, number>;
}

/**
 * Defines the PanGesture handler.
 *
 * @extends GestureHandler<PanGestureHandler>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class PanGestureHandler extends GestureHandler<PanGestureHandler> {
  /**
   * Constructor parameters.
   *
   * @param { PanGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(options?: PanGestureHandlerOptions);
  /**
   * Pan gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { PanGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionStart(event: Callback<GestureEvent>): PanGestureHandler;
  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { PanGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionUpdate(event: Callback<GestureEvent>): PanGestureHandler;
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { PanGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionEnd(event: Callback<GestureEvent>): PanGestureHandler;
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<void> } event
   * @returns { PanGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionCancel(event: Callback<void>): PanGestureHandler;
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * Add GestureEvent in cancel callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { PanGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onActionCancel(event: Callback<GestureEvent>): PanGestureHandler;
}

/*** if arkts 1.2 */
/**
 * Defines the PanGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class PanGestureHandler extends GestureHandler {
  /**
   * Constructor parameters.
   *
   * @param { PanGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(options?: PanGestureHandlerOptions);
  /**
   * Pan gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionStart(event: Callback<GestureEvent>): this;
  /**
   * Callback when the Pan gesture is moving.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionUpdate(event: Callback<GestureEvent>): this;
  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionEnd(event: Callback<GestureEvent>): this;
  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionCancel(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the SwipeGestureHandler options.
 *
 * @interface SwipeGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the SwipeGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface SwipeGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface SwipeGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Indicates the hand index that triggers the swipe. If the value is less than 1, the default value is used.
   * The default value is 1.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fingers?: number;
  /**
   * Indicates the move direction of the swipe gesture.
   * The default value is SwipeDirection.All.
   *
   * @type { ?SwipeDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  direction?: SwipeDirection;
  /**
   * Indicates minimum move speed.
   * The default value is 100vp/s.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  speed?: number;
}

/**
 * Defines the SwipeGesture handler.
 *
 * @extends GestureHandler<SwipeGestureHandler>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class SwipeGestureHandler extends GestureHandler<SwipeGestureHandler> {
  /**
   * Constructor parameters.
   *
   * @param { SwipeGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(options?: SwipeGestureHandlerOptions);
  /**
   * Swipe gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { SwipeGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onAction(event: Callback<GestureEvent>): SwipeGestureHandler;
}

/*** if arkts 1.2 */
/**
 * Defines the SwipeGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class SwipeGestureHandler extends GestureHandler {
  /**
   * Constructor parameters.
   *
   * @param { SwipeGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(options?: SwipeGestureHandlerOptions);
  /**
   * Swipe gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onAction(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the PinchGestureHandler options.
 *
 * @interface PinchGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the PinchGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface PinchGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PinchGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Indicates the hand index that triggers the pinch. If the value is less than 1, the default value is used.
   * The default value is 1.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fingers?: number;
  /**
   * Indicates minimum pinch move distance.
   * The default value is 5vp.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  distance?: number;
}

/**
 * Defines the PinchGesture handler.
 *
 * @extends GestureHandler<PinchGestureHandler>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class PinchGestureHandler extends GestureHandler<PinchGestureHandler> {
  /**
   * Constructor parameters.
   *
   * @param { PinchGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(options?: PinchGestureHandlerOptions);
  /**
   * Pinch gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { PinchGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionStart(event: Callback<GestureEvent>): PinchGestureHandler;
  /**
   * Callback when the Pinch gesture is moving.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { PinchGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionUpdate(event: Callback<GestureEvent>): PinchGestureHandler;
  /**
   * The Pinch gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { PinchGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionEnd(event: Callback<GestureEvent>): PinchGestureHandler;
  /**
   * The Pinch gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<void> } event
   * @returns { PinchGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionCancel(event: Callback<void>): PinchGestureHandler;
  /**
   * The Pinch gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * Add GestureEvent in cancel callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { PinchGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onActionCancel(event: Callback<GestureEvent>): PinchGestureHandler;
}

/*** if arkts 1.2 */
/**
 * Defines the PinchGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class PinchGestureHandler extends GestureHandler {
  /**
   * Constructor parameters.
   *
   * @param { PinchGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(options?: PinchGestureHandlerOptions);
  /**
   * Pinch gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionStart(event: Callback<GestureEvent>): this;
  /**
   * Callback when the Pinch gesture is moving.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionUpdate(event: Callback<GestureEvent>): this;
  /**
   * The Pinch gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionEnd(event: Callback<GestureEvent>): this;
  /**
   * The Pinch gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionCancel(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the RotationGestureHandler options.
 *
 * @interface RotationGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the RotationGestureHandler options.
 *
 * @extends BaseHandlerOptions
 * @interface RotationGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface RotationGestureHandlerOptions extends BaseHandlerOptions {
  /**
   * Indicates the hand index that triggers the rotation. If the value is less than 1, the default value is used.
   * The default value is 1.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fingers?: number;
  /**
   * Indicates minimum rotate angle.
   * The default value is 1deg.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  angle?: number;
}

/**
 * Defines the RotationGesture handler.
 *
 * @extends GestureHandler<RotationGestureHandler>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class RotationGestureHandler extends GestureHandler<RotationGestureHandler> {
  /**
   * Constructor parameters.
   *
   * @param { RotationGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(options?: RotationGestureHandlerOptions);
  /**
   * Rotation gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { RotationGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionStart(event: Callback<GestureEvent>): RotationGestureHandler;
  /**
   * Callback when the Rotation gesture is moving.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { RotationGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionUpdate(event: Callback<GestureEvent>): RotationGestureHandler;
  /**
   * The Rotation gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { RotationGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionEnd(event: Callback<GestureEvent>): RotationGestureHandler;
  /**
   * The Rotation gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<void> } event
   * @returns { RotationGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onActionCancel(event: Callback<void>): RotationGestureHandler;
  /**
   * The Rotation gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * Add GestureEvent in cancel callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { RotationGestureHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onActionCancel(event: Callback<GestureEvent>): RotationGestureHandler;
}

/*** if arkts 1.2 */
/**
 * Defines the RotationGesture handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class RotationGestureHandler extends GestureHandler {
  /**
   * Constructor parameters.
   *
   * @param { RotationGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(options?: RotationGestureHandlerOptions);
  /**
   * Rotation gesture recognition success callback.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionStart(event: Callback<GestureEvent>): this;
  /**
   * Callback when the Rotation gesture is moving.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionUpdate(event: Callback<GestureEvent>): this;
  /**
   * The Rotation gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionEnd(event: Callback<GestureEvent>): this;
  /**
   * The Rotation gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<GestureEvent> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onActionCancel(event: Callback<GestureEvent>): this;
}
/*** endif */

/**
 * Defines the GestureGroupGestureHandler options.
 *
 * @interface GestureGroupGestureHandlerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface GestureGroupGestureHandlerOptions {
  /**
   * Indicates the mode of gesture group.
   *
   * @type { GestureMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  mode: GestureMode;
  /**
   * Indicates the gestures included in the gesture group.
   *
   * @type { GestureHandler<TapGestureHandler | LongPressGestureHandler | PanGestureHandler | SwipeGestureHandler | PinchGestureHandler | RotationGestureHandler | GestureGroupHandler>[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  gestures: GestureHandler<TapGestureHandler | LongPressGestureHandler | PanGestureHandler | SwipeGestureHandler | PinchGestureHandler | RotationGestureHandler | GestureGroupHandler>[];
  /**
   * Indicates the gestures included in the gesture group.
   *
   * @type { GestureHandler[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  gestures: GestureHandler[];
}

/**
 * Defines the GestureGroup handler.
 *
 * @extends GestureHandler<GestureGroupHandler>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class GestureGroupHandler extends GestureHandler<GestureGroupHandler> {
  /**
   * Constructor parameters.
   *
   * @param { GestureGroupGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(options?: GestureGroupGestureHandlerOptions);
  /**
   * The GestureGroup gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<void> } event
   * @returns { GestureGroupHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onCancel(event: Callback<void>): GestureGroupHandler;
}

/*** if arkts 1.2 */
/**
 * Defines the GestureGroup handler.
 *
 * @extends GestureHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class GestureGroupHandler extends GestureHandler {
  /**
   * Constructor parameters.
   *
   * @param { GestureGroupGestureHandlerOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  constructor(options?: GestureGroupGestureHandlerOptions);
  /**
   * The GestureGroup gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   *
   * @param { Callback<void> } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onCancel(event: Callback<void>): this;
}
/*** endif */

/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum GesturePriority {
  /**
   * The normal gesture priority.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NORMAL = 0,
  /**
   * The high gesture priority.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PRIORITY = 1,
}

/**
 * Creating an Object
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum GestureRecognizerState {
  /**
   * Ready state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  READY = 0,
  /**
   * Detecting state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DETECTING = 1,
  /**
   * Pending state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PENDING = 2,
  /**
   * Blocked state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  BLOCKED = 3,
  /**
   * Successful state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  SUCCESSFUL = 4,
  /**
   * Failed state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  FAILED = 5,
}

/**
 * Defines the scrollable target information.
 *
 * @extends EventTargetInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class ScrollableTargetInfo extends EventTargetInfo {
  /**
   * Returns whether the scrollable component is at begin.
   * 
   * @returns { boolean } - true is at begin, false is not at begin
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isBegin(): boolean;
  /**
   * Returns whether the scrollable component is at end.
   * 
   * @returns { boolean } - true is at end, false is not at end
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isEnd(): boolean;
}

/**
 * Defines the event target information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class EventTargetInfo {
  /**
   * Returns the component's inspector id.
   * 
   * @returns { string } - the inspector id of the component
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getId(): string;
}

/**
 * Defines the touch recognizer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare class TouchRecognizer {
    /**
     * Returns the event target information of the component.
     *
     * @returns { EventTargetInfo } - the event target information of the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getEventTargetInfo(): EventTargetInfo;
    /**
     * Dispatch touch cancel to the touch recognizer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cancelTouch(): void;
}

/**
 * Defines the gesture recognizer.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class GestureRecognizer {
  /**
   * Returns the gesture's tag.
   * 
   * @returns { string } - the gesture's tag
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getTag(): string;
  /**
   * Returns the gesture's type.
   * 
   * @returns { GestureControl.GestureType } - the gesture's type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getType(): GestureControl.GestureType;
  /**
   * Returns whether the gesture recognizer is built in recognizer.
   * 
   * @returns { boolean } - true is built in recognizer, false is not built in recognizer
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isBuiltIn(): boolean;
  /**
   * set the enabled state of the gesture recognizer.
   *
   * @param { boolean } isEnabled - Indicates the enabled state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  setEnabled(isEnabled: boolean): void;
  /**
   * Returns whether the gesture recognizer is enabled.
   * 
   * @returns { boolean } - true is enabled, false is not enabled
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isEnabled(): boolean;
  /**
   * Returns the gesture recognizer's state.
   * 
   * @returns { GestureRecognizerState } - the gesture recognizer's state
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getState(): GestureRecognizerState;
  /**
   * Returns the event target information of the component.
   * 
   * @returns { EventTargetInfo } - the event target information of the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getEventTargetInfo(): EventTargetInfo;
  /**
   * Returns whether the gesture recognizer is valid.
   * 
   * @returns { boolean } - true is valid, false is invalid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isValid(): boolean;
  /**
   * Returns the tap gesture's finger count.
   *
   * @returns { number } - the finger count of the tap gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getFingerCount(): number;
  /**
   * Returns the tap gesture's limitFingerCount.
   *
   * @returns { boolean } - the limitFingerCount of the tap gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isFingerCountLimit(): boolean;
  /**
   * Prevent the gesture recognizer from participating in this gesture recognition until all fingers are lifted.
   * If the system has already made out the result of this gesture recognizer (success and failure), calling this
   * function will have no any effect.
   *
   * [Note]: This method is different from GestureRecognizer.setEnabled(isEnabled: boolean), setEnabled does not
   * prevent a gesture recognizer object from participating in the gesture recognition process, but only affects
   * whether the gesture's corresponding callback function is executed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  preventBegin(): void;
}

/**
 * Defines the tap gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class TapRecognizer extends GestureRecognizer {
  /**
   * Returns the tap gesture's count.
   *
   * @returns { number } - the count of the tap gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getTapCount(): number;
}

/**
 * Defines the long press gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class LongPressRecognizer extends GestureRecognizer {
  /**
   * Returns the long press gesture's repeat state.
   *
   * @returns { boolean } - the repeat state of the long press gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isRepeat(): boolean;
  /**
   * Returns the long press gesture's duration.
   * The unit is ms.
   *
   * @returns { number } - the duration of the long press gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getDuration(): number;
}

/**
 * Defines the swipe gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class SwipeRecognizer extends GestureRecognizer {
  /**
   * Returns the swipe gesture's speed.
   * The unit is vp/s.
   *
   * @returns { number } - the velocity threshold of the swipe gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getVelocityThreshold(): number;
  /**
   * Returns the swipe gesture's direction.
   *
   * @returns { SwipeDirection } - the direction of the swipe gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getDirection(): SwipeDirection;
}

/**
 * Defines the pinch gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class PinchRecognizer extends GestureRecognizer {
  /**
   * Returns the pinch gesture's distance.
   * The unit is vp.
   *
   * @returns { number } - the distance of the pinch gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getDistance(): number;
}

/**
 * Defines the rotation gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class RotationRecognizer extends GestureRecognizer {
  /**
   * Returns the rotation gesture's angle.
   *
   * @returns { number } - the angle of the rotation gesture.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getAngle(): number;
}

/**
 * Defines the gesture recognizer.
 *
 * @extends GestureRecognizer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class PanRecognizer extends GestureRecognizer {
  /**
   * Returns the the pan gesture options of the recognizer.
   * 
   * @returns { PanGestureOptions } - Pan gesture options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  getPanGestureOptions(): PanGestureOptions;
  /**
   * Returns the pan recognizer's direction attribute.
   *
   * @returns { PanDirection } - Pan recognizer direction
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  getDirection(): PanDirection;
  /**
   * Returns the pan recognizer's distance.
   * The unit is vp.
   *
   * @returns { number } - the distance of the pan recognizer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  getDistance(): number;
  /**
   * Returns the pan recognizer's distance map.
   * The unit is vp.
   *
   * @returns { Map<SourceTool, number> } - the distance map of the pan recognizer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  getDistanceMap(): Map<SourceTool, number>;
}
