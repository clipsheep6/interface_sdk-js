/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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

import {AsyncCallback, ErrorCallback} from './basic';

/**
 * System time and timezone.
 * @since 7
 * @syscap SystemCapability.MiscServices.Time
 * @import systemTime from '@ohos.systemTime';
 */
declare namespace systemTime {
    /**
     * Sets the system time.
     * 
     * @permission ohos.permission.SET_TIME
     * @param {number} time - Target time stamp (ms)
     * @param {AsyncCallback<void>} callback - The callback function.
     * @throws {BusinessError} 201 - if forbidden by permission: ohos.permission.SET_TIME.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 7
     */
    function setTime(time: number, callback: AsyncCallback<void>): void;
    
    /**
     * Sets the system time.
     *
     * @permission ohos.permission.SET_TIME
     * @param {number} time - Target time stamp (ms)
     * @returns {Promise<void>} the promise object.
     * @throws {BusinessError} 201 - if forbidden by permission: ohos.permission.SET_TIME.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 7
     */
    function setTime(time: number): Promise<void>;

    /**
     * Obtains the number of milliseconds that have elapsed since the Unix epoch.
     *
     * @param {boolean} isNano - return in nanoseconds if true, otherwise in milliseconds
     * @param {AsyncCallback<number>} callback - the number of time.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 8
     */
    function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void;

    /**
     * Obtains the number of milliseconds that have elapsed since the Unix epoch.
     *
     * @param {AsyncCallback<number>} callback - the number of milliseconds.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 8
     */
    function getCurrentTime(callback: AsyncCallback<number>): void;

    /**
     * Obtains the number of milliseconds that have elapsed since the Unix epoch.
     *
     * @param {boolean} isNano - return in nanoseconds if true, otherwise in milliseconds
     * @returns {Promise<number>} the number of time.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 8
     */
    function getCurrentTime(isNano?: boolean): Promise<number>;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, not including deep sleep time.
     * 
     * @param {boolean} isNano - return in nanoseconds if true, otherwise in milliseconds
     * @param {AsyncCallback<number>} callback - the number of time.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 8
     */
    function getRealActiveTime(isNano: boolean, callback: AsyncCallback<number>): void;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, not including deep sleep time.
     *
     * @param {AsyncCallback<number>} callback - the number of milliseconds.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 8
     */
    function getRealActiveTime(callback: AsyncCallback<number>): void;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, not including deep sleep time.
     *
     * @param {boolean} isNano - return in nanoseconds if true, otherwise in milliseconds.
     * @returns {Promise<number>} the number of time.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 8
     */
    function getRealActiveTime(isNano?: boolean): Promise<number>;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, including deep sleep time.
     * 
     * @param {boolean} isNano - return in nanoseconds if true, otherwise in milliseconds
     * @param {AsyncCallback<number>} callback - the number of time.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 8
     */
    function getRealTime(isNano: boolean, callback: AsyncCallback<number>): void;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, including deep sleep time.
     *
     * @param {AsyncCallback<number>} callback - the number of milliseconds.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 8
     */
    function getRealTime(callback: AsyncCallback<number>): void;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, including deep sleep time.
     *
     * @param {boolean} isNano - return in nanoseconds if true, otherwise in milliseconds
     * @returns {Promise<number>} the number of time.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 8
     */
    function getRealTime(isNano?: boolean): Promise<number>;

    /**
     * Sets the system time.
     * 
     * @permission ohos.permission.SET_TIME
     * @param {Date} date - The target date.
     * @param {AsyncCallback<void>} callback - the callback function.
     * @throws {BusinessError} 201 - if forbidden by permission: ohos.permission.SET_TIME.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 7
     */
    function setDate(date: Date, callback: AsyncCallback<void>): void;

    /**
     * Sets the system time.
     *
     * @permission ohos.permission.SET_TIME
     * @param {Date} date - The target date.
     * @returns {Promise<void>} the promise object.
     * @throws {BusinessError} 201 - if forbidden by permission: ohos.permission.SET_TIME.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 7
     */
    function setDate(date: Date): Promise<void>;

    /**
     * Obtains the system date.
     *
     * @param {AsyncCallback<Date>} callback - the system date.
     * @since 8
     */
    function getDate(callback: AsyncCallback<Date>): void;

    /**
     * Obtains the system date.
     *
     * @returns {Promise<Date>} the system date.
     * @since 8
     */
    function getDate(): Promise<Date>;

    /**
     * Sets the system time zone.
     * 
     * @permission ohos.permission.SET_TIME_ZONE
     * @param {string} timezone - The system time zone.
     * @param {AsyncCallback<void>} callback - the callback function.
     * @throws {BusinessError} 201 - if forbidden by permission: ohos.permission.SET_TIME_ZONE.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 7
     */
    function setTimezone(timezone: string, callback: AsyncCallback<void>): void;

    /**
     * Sets the system time zone.
     *
     * @permission ohos.permission.SET_TIME_ZONE
     * @param {string} timezone - The system time zone.
     * @returns {Promise<void>} the promise object.
     * @throws {BusinessError} 201 - if forbidden by permission: ohos.permission.SET_TIME_ZONE.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @since 7
     */
    function setTimezone(timezone: string): Promise<void>;

    /**
     * Obtains the system time zone.
     *
     * @param {AsyncCallback<string>} callback - the system time zone.
     * @since 8
     */
    function getTimezone(callback: AsyncCallback<string>): void;

    /**
     * Obtains the system time zone.
     *
     * @returns {Promise<string>} the system time zone.
     * @since 8
     */
    function getTimezone(): Promise<string>;
}

export default systemTime;
