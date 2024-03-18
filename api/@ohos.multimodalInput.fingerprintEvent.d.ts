/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/**
 * FingerprintAction
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 12
 */
export declare enum FingerprintAction {
  /**
   * This action represents the user placing their finger down, initiating the sliding action.
   * 
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  DOWN = 0,

  /**
   * This action represents the user lifting their finger, and the sliding action has ended.
   * 
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  UP = 1,

  /**
   * This action signifies that the user is currently engaged in sliding.
   * The sequnces of "DOWN, SLIDE, UP" constitutes a complete sliding process.
   * 
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  SLIDE = 2,

  /**
   * This action corresponds to a click event
   * 
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  CLICK = 3,
}

/**
 * FingerprintEvent
 * 
 * @interface FingerprintEvent
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 12
 */
export declare interface FingerprintEvent {
  /**
   * Fingerprint action
   * 
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  action: FingerprintAction;


  /**
   * This field represents the percentage of relative sliding distance on X-axis
   * compared to the total sliding distance.
   * A positve value indicates sliding to the right, while a negative value indicates sliding to the left.
   * This value is only meaningful when the type is "SLIDE".
   * 
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  distanceX: number;

  /**
   * This field represents the percentage of relative sliding distance on Y-axis
   * compared to the total sliding distance.
   * A positve value indicates upward sliding , while a negative value indicates downward sliding.
   * This value is only meaningful when the type is "SLIDE".
   * 
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 12
   */
  distanceY: number;
}