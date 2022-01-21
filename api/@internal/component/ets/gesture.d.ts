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
 * Creating an Object
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum GestureDirection {
  /**
   * Sliding in all directions.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  All,

  /**
   * Sliding horizontally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Horizontal,

  /**
   * Sliding Vertical
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Vertical,
}

/**
 * Creating an Object
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum PanDirection {
  /**
   * Default.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,

  /**
   * Sliding horizontally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Horizontal,

  /**
   * Sliding left.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Left,

  /**
   * Sliding right.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Right,

  /**
   * Sliding Vertical
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Vertical,

  /**
   * Sliding up.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Up,

  /**
   * Sliding Down.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Down,

  /**
   * Sliding in all directions.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  All,
}

/**
 * Creating an Object
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum SwipeDirection {
  /**
   * Default.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,

  /**
   * Sliding horizontally.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Horizontal,

  /**
   * Sliding Vertical
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Vertical,

  /**
   * Sliding in all directions.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  All,
}

/**
 * Creating an Object
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum GestureMode {
  /**
   * Sequential gesture recognition is performed in sequence according to the gesture registration sequence.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Sequence,

  /**
   * Simultaneous recognition. Registration gestures participate in recognition. Everything can be triggered.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Parallel,

  /**
   * Mutually exclusive recognition. Only one gesture is successfully recognized.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Exclusive,
}

/**
 * Creating an Object
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum GestureMask {
  /**
   * High-priority response to the current gesture.When the current gesture fails to be recognized, other gesture responses are triggered.For gestures with the same priority, responses are performed based on the recognition sequence.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Normal,

  /**
   * Ignore internal gestures and recognize the current gesture first.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  IgnoreInternal,
}

/**
 * Type of the finger information.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface FingerInfo {
  /**
   * Finger unique identifier.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  id: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  globalX: number;

  /**
   * The Y coordinate of the touch point relative to the upper edge of the device screen.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  globalY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  localX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  localY: number;
}

/**
 * Defines the Gesture Type.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare type GestureType =
  | TapGestureInterface 
  | LongPressGestureInterface 
  | PanGestureInterface 
  | PinchGestureInterface
  | SwipeGestureInterface 
  | RotationGestureInterface 
  | GestureGroupInterface;

/**
 * Defines the GestureEvent type.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare type GestureEvent =
 | TapGestureEvent 
 | LongPressGestureEvent 
 | PanGestureEvent
 | SwipeGestureEvent 
 | PinchGestureEvent 
 | RotationGestureEvent;

/**
 * tap gesture event used in the longpress scenario.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface TapGestureEvent extends BaseGestureEvent {
  /**
   * All finger information.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fingerList: FingerInfo[];
}

/**
 * long press gesture event used in the longpress scenario.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface LongPressGestureEvent extends BaseGestureEvent {
  /**
   * Indicates whether an event is triggered repeatedly.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  repeat: boolean;

  /**
   * All finger information.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fingerList: FingerInfo[];
}

/**
 * pan gesture event used in the pan gesture triggering scenario.
 */
interface PanGestureEvent extends BaseGestureEvent {
  /**
   * Gesture event offset X.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  offsetX: number;

  /**
   * Gesture event offset Y.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  offsetY: number;
}

/**
 * slide gesture event used in the slide gesture triggering scenario.
 */
interface SwipeGestureEvent extends BaseGestureEvent {
  /**
   * Gesture event direction angle.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  angle: number;
  /**
   * Gesture event slide speed.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  speed: number;
}

/**
 * pinch gesture event used for triggering the pinch gesture.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface PinchGestureEvent extends BaseGestureEvent {
  /**
   * Scaling ratio.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  scale: number;

  /**
   * X-axis coordinate of the kneading center point, in pixels.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  pinchCenterX: number;

  /**
   * Y-axis coordinate of the kneading center point, in pixels.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  pinchCenterY: number;
}

/**
 * rotation gesture event used for triggering the pinch gesture.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface RotationGestureEvent extends BaseGestureEvent {
  /**
   * Rotation angle.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  angle: number;
}

/**
 * base event for gesture.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface BaseGestureEvent extends BaseEvent {}

/**
 * Creating an interface
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface TapGestureInterface {
  /**
   * Set the value.
   * count:Number of consecutive clicks recognized. If the value is less than 1, the default value is used.
   * fingers:The hand index that triggers the click. If the value is less than 1, the default value is used.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: { count?: number; fingers?: number }): TapGestureInterface;

  /**
   * Tap gesture recognition success callback.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onAction(event: (event?: GestureEvent) => void): TapGestureInterface;
}

/**
 * Creating an interface
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface LongPressGestureInterface {
  /**
   * Set the value.
   * fingers: Indicates the hand index that triggers the long press.
   * repeat: Indicates whether to trigger event callback continuously.
   * duration: Minimum press and hold time, in milliseconds.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: { fingers?: number; repeat?: boolean; duration?: number }): LongPressGestureInterface;

  /**
   * LongPress gesture recognition success callback.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onAction(event: (event?: LongPressGestureEvent) => void): LongPressGestureInterface;

  /**
   * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionEnd(event: (event?: LongPressGestureEvent) => void): LongPressGestureInterface;

  /**
   * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionCancel(event: () => void): LongPressGestureInterface;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class PanGestureOption {
  /**
   * Constructor parameters.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor(value?: { fingers?: number; direction?: PanDirection; distance?: number });

  /**
   * Sets the direction attribute.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  setDirection(value: PanDirection);

  /**
   * Sets the setDistance attribute.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  setDistance(value: number);

  /**
   * Sets the setFingers attribute.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  setFingers(value: number);
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface PanGestureInterface {
  /**
   * Set the value.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: { fingers?: number; direction?: PanDirection; distance?: number } | PanGestureOption): PanGestureInterface;

  /**
   * Pan gesture recognition success callback.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionStart(event: (event?: PanGestureEvent) => void): PanGestureInterface;

  /**
   * Callback when the Pan gesture is moving.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionUpdate(event: (event?: PanGestureEvent) => void): PanGestureInterface;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionEnd(event: (event?: PanGestureEvent) => void): PanGestureInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionCancel(event: () => void): PanGestureInterface;
}

/**
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface SwipeGestureInterface {
  /**
   * Set the value.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: { fingers?: number; direction?: SwipeDirection; speed?: number }): SwipeGestureInterface;

  /**
   * Slide gesture recognition success callback.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onAction(event: (event?: SwipeGestureEvent) => void): SwipeGestureInterface;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface PinchGestureInterface {
  /**
   * Set the value.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: { fingers?: number; distance?: number }): PinchGestureInterface;

  /**
   * Pan gesture recognition success callback.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionStart(event: (event?: PinchGestureEvent) => void): PinchGestureInterface;

  /**
   * Callback when the Pan gesture is moving.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionUpdate(event: (event?: PinchGestureEvent) => void): PinchGestureInterface;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionEnd(event: (event?: PinchGestureEvent) => void): PinchGestureInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionCancel(event: () => void): PinchGestureInterface;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface RotationGestureInterface {
  /**
   * Set the value.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: { fingers?: number; angle?: number }): RotationGestureInterface;

  /**
   * Pan gesture recognition success callback.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionStart(event: (event?: RotationGestureEvent) => void): RotationGestureInterface;

  /**
   * Callback when the Pan gesture is moving.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionUpdate(event: (event?: RotationGestureEvent) => void): RotationGestureInterface;

  /**
   * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionEnd(event: (event?: RotationGestureEvent) => void): RotationGestureInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onActionCancel(event: () => void): RotationGestureInterface;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface GestureGroupInterface {
  /**
   * Return to Obtain GestureGroup.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (mode: GestureMode, ...gesture: GestureType[]): GestureGroupInterface;

  /**
   * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event is received.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onCancel(event: () => void): GestureGroupInterface;
}

declare const TapGesture: TapGestureInterface;
declare const LongPressGesture: LongPressGestureInterface;
declare const PanGesture: PanGestureInterface;
declare const SwipeGesture: SwipeGestureInterface;
declare const PinchGesture: PinchGestureInterface;
declare const RotationGesture: RotationGestureInterface;
declare const GestureGroup: GestureGroupInterface;
