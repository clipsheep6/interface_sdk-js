/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit InputKit
 */

import type { InputEvent } from './@ohos.multimodalInput.inputEvent';

/**
 * Action
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 12
 */
export declare enum Action {
  /**
   * Cancel
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  CANCEL = 0,

  /**
   * Pressing down of the joystick buttom
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  BUTTON_DOWN = 1,

  /**
   * Lifting of the joystick button
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  BUTTON_UP = 2,

  /**
   * Beginning of the axis event associated with the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  AXIS_BEGIN = 3,

  /**
   * Updating of the axis event associated with the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  AXIS_UPDATE = 4,

  /**
   * Ending of the axis event associated with the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  AXIS_END = 5
}

/**
 * joystick button
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 12
 */
export declare enum Button {
  /**
   * TL2 button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  TL2 = 0,

  /**
   * TR2 button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  TR2 = 1,
	
  /**
   * TL button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  TL = 2,

  /**
   * TR button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  TR = 3,

  /**
   * West button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  WEST = 4,

  /**
   * South button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  SOUTH = 5,

  /**
   * North button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  NORTH = 6,

  /**
   * East button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  EAST = 7,

  /**
   * Start button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  START = 8,
  
   /**
   * Select button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  SELECT = 9,

   /**
   * HomePage button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  HOMEPAGE = 10,

   /**
   * Thumbl button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  THUMBL = 11,

   /**
   * Thumbr button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  THUMBR = 12,

   /**
   * Trigger button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  TRIGGER = 13,

   /**
   * Thumb button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  THUMB = 14,

  /**
   * Thumb2 button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  THUMB2 = 15,

  /**
   * Top button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  TOP = 16,
	
  /**
   * Top2 button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  TOP2 = 17,

  /**
   * Pinkie button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  PINKIE = 18,

  /**
   * Base button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  BASE = 19,

  /**
   * Base2 button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  BASE2 = 20,

  /**
   * Base3 button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  BASE3 = 21,

  /**
   * Base4 button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  BASE4 = 22,

  /**
   * Base5 button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  BASE5 = 23,
  
   /**
   * Base6 button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  BASE6 = 24,

   /**
   * Dead button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  DEAD = 25,

   /**
   * C button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  C = 26,

   /**
   * Z button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  Z = 27,

   /**
   * Mode button on the joystick
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  MODE = 28
}

/**
 * Axis
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 12
 */
export declare enum Axis {
  /**
   * X axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  ABS_X = 0,

  /**
   * Y axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  ABS_Y = 1,

  /**
   * Z axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  ABS_Z = 2,

  /**
   * Rz axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  ABS_RZ = 3,

  /**
   * Gas axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  ABS_GAS = 4,

  /**
   * Brake axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  ABS_BRAKE = 5,

  /**
   * Hat0x axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  ABS_HAT0X = 6,

  /**
   * Hat0y axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  ABS_HAT0Y = 7,

  /**
   * Throttle axis
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  ABS_THROTTLE = 8,
}

/**
 * AxisValue
 *
 * @interface AxisValue
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 12
 */
export declare interface AxisValue {
  /**
   * Axis type
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  axis: Axis;

  /**
   * Axis value
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  value: number;
}

/**
 * joystickEvent
 *
 * @interface joystickEvent
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 12
 */
export declare interface JoystickEvent extends InputEvent {
  /**
   * joystick event action
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  action: Action;

  /**
   * Button that is currently pressed or released
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  button: Button;

  /**
   * Button that is being pressed
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  pressedButtons: Button[];

  /**
   * All axis data contained in the event
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  axes: AxisValue[];
}