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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 * @namespace MediaQueryEvent
 */
declare namespace MediaQueryEvent {
    /**
     * Enum for obtain the type of sensor.
     *
     * @enum { number }
     * @syscap SystemCapability.Sensors.Sensor
     * @since 9
     */
    enum SensorId {
        ACCELEROMETER = 1,
        GYROSCOPE = 2,
        AMBIENT_LIGHT = 5,
        MAGNETIC_FIELD = 6,
        BAROMETER = 8,
        HALL = 10,
        PROXIMITY = 12,
        HUMIDITY = 13,
        ORIENTATION = 256,
        GRAVITY = 257,
        LINEAR_ACCELEROMETER = 258,
        ROTATION_VECTOR = 259,
        AMBIENT_TEMPERATURE = 260,
        MAGNETIC_FIELD_UNCALIBRATED = 261,
        GYROSCOPE_UNCALIBRATED = 263,
        SIGNIFICANT_MOTION = 264,
        PEDOMETER_DETECTION = 265,
        PEDOMETER = 266,
        HEART_RATE = 278,
        WEAR_DETECTION = 280,
        ACCELEROMETER_UNCALIBRATED = 281 /**< Uncalibrated acceleration sensor */
    }

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function on(type: number | string, callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function off(type: number | string, callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function on(type: string, callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function off(type: string, callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function on(type: 'aaa', callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function off(type: 'aaa', callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function on(type: SensorId.ACCELEROMETER | SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function off(type: SensorId.ACCELEROMETER | SensorId.ACCELEROMETER_UNCALIBRATED, callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function on(type: SensorId, callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function off(type: SensorId, callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function on(type: BundleChangedEvent, callback: Callback<number>): void;

    /**
     * Register the callback for display changes.
     *
     * @param type: type of callback
     * @param { Callback<number> } callback
     * @param
     * @returns { void }
     * @throws { BusinessError } 401 - If param is invalid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    function off(type: BundleChangedEvent, callback: Callback<number>): void;

    /**
     * Indicates the event type of bundle change
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    type BundleChangedEvent = 'add' | 'update' | 'remove';

    /**
     * Obtain the default display.
     *
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.display#getDefaultDisplaySync
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param { AsyncCallback<Display> } callback
     * @returns { void }
     */
    function getDefaultDisplay(callback: AsyncCallback<Display>): void;
}
