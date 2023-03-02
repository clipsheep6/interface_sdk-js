/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './basic';

/**
 * Defines the MediaQuery event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
declare namespace MediaQueryEvent {

  /**
   * Enum for obtain the type of sensor.
   * @enum {number}
   * @syscap SystemCapability.Sensors.Sensor
   * @since 9
   */
  enum SensorId {
    ACCELEROMETER = 1,          /**< Acceleration sensor */
    GYROSCOPE = 2,              /**< Gyroscope sensor */
    AMBIENT_LIGHT = 5,          /**< Ambient light sensor */
    MAGNETIC_FIELD = 6,         /**< Magnetic field sensor */
    BAROMETER = 8,              /**< Barometric pressure sensor */
    HALL = 10,                  /**< Hall effect sensor */
    PROXIMITY = 12,             /**< Proximity sensor */
    HUMIDITY = 13,              /**< Humidity sensor */
    ORIENTATION = 256,          /**< Orientation sensor */
    GRAVITY = 257,              /**< Gravity sensor */
    LINEAR_ACCELEROMETER = 258,  /**< Linear acceleration sensor */
    ROTATION_VECTOR = 259,      /**< Rotation vector sensor */
    AMBIENT_TEMPERATURE = 260,  /**< Ambient temperature sensor */
    MAGNETIC_FIELD_UNCALIBRATED = 261,  /**< Uncalibrated magnetic field sensor */
    GYROSCOPE_UNCALIBRATED = 263,  /**< Uncalibrated gyroscope sensor */
    SIGNIFICANT_MOTION = 264,    /**< Significant motion sensor */
    PEDOMETER_DETECTION = 265,   /**< Pedometer detection sensor */
    PEDOMETER = 266,             /**< Pedometer sensor */
    HEART_RATE = 278,            /**< Heart rate sensor */
    WEAR_DETECTION = 280,        /**< Wear detection sensor */
    ACCELEROMETER_UNCALIBRATED = 281   /**< Uncalibrated acceleration sensor */
  }

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function on(type: number | string, callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function off(type: number | string, callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function on(type: string, callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function off(type: string, callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function on(type: 'aaa', callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function off(type: 'aaa', callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function on(type: SensorId.ACCELEROMETER | SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function off(type: SensorId.ACCELEROMETER | SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<number>): void;


  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function on(type: SensorId, callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function off(type: SensorId, callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function on(type: BundleChangedEvent, callback: Callback<number>): void;

  /**
   * Register the callback for display changes.
   * @param type: type of callback
   * @since 7
   * @throws {BusinessError} 401 - If param is invalid
   */
  function off(type: BundleChangedEvent, callback: Callback<number>): void;

  /**
   * Indicates the event type of bundle change
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  type BundleChangedEvent = 'add' | 'update' | 'remove';

  /**
   * Obtain the default display.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.display#getDefaultDisplaySync
   */
  function getDefaultDisplay(callback: AsyncCallback<Display>): void;
}