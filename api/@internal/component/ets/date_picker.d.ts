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

import { CommonMethod } from "./common";

/**
 * Date and time slide selector component.
 * @since 7
 */
export declare class DatePickerExtend<T> extends DatePickerAttribute<T> {}

/**
 * @since 7
 */
export declare enum DatePickerType {
  /**
   * Application hour and second
   * @since 7
   */
  Time,

  /**
   * Application data
   * @since 7
   */
  Date,
}

export interface DatePickerResult {
  /**
   * Application year
   * @since 7
   */
  year?: number;

  /**
   * Application month
   * @since 7
   */
  month?: number;

  /**
   * Application day
   * @since 7
   */
  day?: number;

  /**
   * Application hour
   * @since 7
   */
  hour?: number;

  /**
   * Application minute
   * @since 7
   */
  minute?: number;

  /**
   * Application second
   * @since 7
   */
  second?: number;
}

/**
 * @since 7
 */
interface DatePicker extends DatePickerAttribute<DatePicker> {
  /**
   * start: Specifies the start date of the date selector.
   * end: Specifies the end date for the date selector.
   * selected: Specifies the date selector check date or time selector check time.
   * type: Selector type, including date selector and time selector. By default, the date selector is used.
   * @since 7
   */
  (options?: { start?: Date; end?: Date; selected?: Date; type?: DatePickerType }): DatePicker;
}

/**
 * @since 7
 */
declare class DatePickerAttribute<T> extends CommonMethod<T> {
  /**
   * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
   * @since 7
   */
  lunar(value: boolean): T;

  /**
   * Time Selector: indicates whether to display the 24-hour clock.
   * @since 7
   */
  useMilitaryTime(value: boolean): T;

  /**
   * This event is triggered when a DatePicker date or time is selected.
   * @since 7
   */
  onChange(callback: (value: DatePickerResult) => void): T;
}

/**
 * @since 7
 */
export declare const DatePickerInterface: DatePicker;
