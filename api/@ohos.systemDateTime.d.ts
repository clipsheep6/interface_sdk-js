/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';

/**
 * System time and timezone.
 * @since 9
 * @syscap SystemCapability.MiscServices.Time
 */
declare namespace systemDateTime {
    /**
     * Sets the system time.
     * @param { number } time - Target time stamp (ms)
     * @param { AsyncCallback<void> } callback - The callback of setTime
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid parameters
     * @since 9
     * @systemapi Hide this for inner system use
     */
    function setTime(time : number, callback : AsyncCallback<void>) : void;
    /**
     * Sets the system time.
     * @param { number } time - Target time stamp (ms)
     * @returns { Promise<void> } The promise returned by the function
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid parameters
     * @since 9
     * @systemapi Hide this for inner system use
     */
    function setTime(time : number) : Promise<void>;

    /**
     * Obtains the number of milliseconds that have elapsed since the Unix epoch.
     * @throws { BusinessError } 401 - Invalid parameters
     * @since 9
     */
    function getCurrentTime(isNano: boolean, callback: AsyncCallback<number>): void;
    function getCurrentTime(callback: AsyncCallback<number>): void;
    function getCurrentTime(isNano?: boolean): Promise<number>;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, not including deep sleep time.
     * @throws { BusinessError } 401 - Invalid parameters
     * @since 9
     */
    function getRealActiveTime(isNano: boolean, callback: AsyncCallback<number>): void;
    function getRealActiveTime(callback: AsyncCallback<number>): void;
    function getRealActiveTime(isNano?: boolean): Promise<number>;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, including deep sleep time.
     * @throws { BusinessError } 401 - Invalid parameters
     * @since 9
     */
    function getRealTime(isNano: boolean, callback: AsyncCallback<number>): void;
    function getRealTime(callback: AsyncCallback<number>): void;
    function getRealTime(isNano?: boolean): Promise<number>;

    /**
     * Sets the system time.
     * @param date The target date
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid parameters
     * @since 9
     * @systemapi Hide this for inner system use
     */
    function setDate(date: Date, callback: AsyncCallback<void>): void;
    function setDate(date: Date): Promise<void>;

    /**
     * Obtains the system date.
     * @throws { BusinessError } 401 - Invalid parameters
     * @since 9
     */
    function getDate(callback: AsyncCallback<Date>): void;
    function getDate(): Promise<Date>;

    /**
     * Sets the system time zone.
     * @param timezone The system time zone
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid parameters
     * @since 9
     * @systemapi Hide this for inner system use
     */
    function setTimezone(timezone: string, callback: AsyncCallback<void>): void;
    function setTimezone(timezone: string): Promise<void>;

      /**
     * Obtains the system time zone.
     * @throws { BusinessError } 401 - Invalid parameters
     * @since 9
     */  
    function getTimezone(callback: AsyncCallback<string>): void;
    function getTimezone(): Promise<string>;
}

export default systemDateTime;
