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

import { Axis, Color, Resource } from "./common";

/**
 * Provides a monthly view component to display information such as date, shift break, and schedule.
 * @since 7
 */
export interface CalendarDay {
  /**
   * Indicates the sequence number of the 7 x 7 (7 x 6) grid layout on a calendar page by row.
   * The week sequence is one, two, three, four, five, six.
   * @since 7
   */
  index: number;

  /**
   * Lunar moon.
   * The week sequence is one, two, three, four, five, six.
   * @since 7
   */
  lunarMonth: string;

  /**
   * Lunar day.
   * @since 7
   */
  lunarDay: string;

  /**
   * Day.
   * @since 7
   */
  dayMark: string;

  /**
   * Indicates the off-duty flag information. The options are work and off.By default, the off-duty flag information is not required.
   * @since 7
   */
  dayMarkValue: string;

  /**
   * Gregorian calendar year.
   * @since 7
   */
  year: number;

  /**
   * Gregorian calendar month.
   * @since 7
   */
  month: number;

  /**
   * Gregorian calendar day.
   * @since 7
   */
  day: number;

  /**
   *
   * Indicates whether the default value is Lunar calendar.
   * @since 7
   */
  isFirstOfLunar: boolean;

  /**
   * Indicates whether to display has Schedule.
   * The week sequence is one, two, three, four, five, six.
   * @since 7
   */
  hasSchedule: boolean;

  /**
   * Display Lunar Date.The week sequence is one, two, three, four, five, six.
   * @since 7
   */
  markLunarDay: boolean;
}

/**
 *  Date object.
 * @since 7
 */
export interface MonthData {
  /**
   * Gregorian calendar year.
   * @since 7
   */
  year: number;

  /**
   * Gregorian calendar month.
   * @since 7
   */
  month: number;

  /**
   * CalendarDay.
   * @since 7
   */
  data: CalendarDay[];
}

/**
 * CurrentDayStyle object.
 * @since 7
 */
export interface CurrentDayStyle {
  /**
   * Text color.
   * @since 7
   */
  dayColor?: Color | number | string | Resource;

  /**
   * lunar Text color.
   * @since 7
   */
  lunarColor?: Color | number | string | Resource;

  /**
   * lunar  Work and rest  text color.
   * @since 7
   */
  markLunarColor?: Color | number | string | Resource;

  /**
   * Text fontSize.
   * @since 7
   */
  dayFontSize?: number;

  /**
   * lunar text fontSize.
   * @since 7
   */
  lunarDayFontSize?: number;

  /**
   * Single date height.
   * @since 7
   */
  dayHeight?: number;

  /**
   * Single date width.
   * @since 7
   */
  dayWidth?: number;

  /**
   * Gregorian calendar height.
   * @since 7
   */
  gregorianCalendarHeight?: number;

  /**
   * Data y axis Off set.
   * @since 7
   */
  dayYAxisOffset?: number;

  /**
   * Lunar data y axis Off set.
   * @since 7
   */
  lunarDayYAxisOffset?: number;

  /**
   * Under score X Axis Off set.
   * @since 7
   */
  underscoreXAxisOffset?: number;

  /**
   * Under score Y Axis Off set
   * @since 7
   */
  underscoreYAxisOffset?: number;

  /**
   * Schedule marker X axis Off set
   * @since 7
   */
  scheduleMarkerXAxisOffset?: number;

  /**
   * schedule Marker Y Axis Off set
   * @since 7
   */
  scheduleMarkerYAxisOffset?: number;

  /**
   * Number of columns.
   * @since 7
   */
  colSpace?: number;

  /**
   * Daily five row space.
   * @since 7
   */
  dailyFiveRowSpace?: number;

  /**
   * Daily six row space.
   * @since 7
   */
  dailySixRowSpace?: number;

  /**
   * Sigle lunar height.
   * @since 7
   */
  lunarHeight?: number;

  /**
   * Under score width.
   * @since 7
   */
  underscoreWidth?: number;

  /**
   * Under score length.
   * @since 7
   */
  underscoreLength?: number;

  /**
   * Schedule marker radius.
   * @since 7
   */
  scheduleMarkerRadius?: number;

  /**
   * Boun dary row offset.
   * @since 7
   */
  boundaryRowOffset?: number;

  /**
   * Boundary col offsett.
   * @since 7
   */
  boundaryColOffset?: number;
}

/**
 * Non current day style.
 * @since 7
 */
export interface NonCurrentDayStyle {
  /**
   * Non-current month day color.
   * @since 7
   */
  nonCurrentMonthDayColor?: Color | number | string | Resource;

  /**
   * Lunar style of non-current month.
   * @since 7
   */
  nonCurrentMonthLunarColor?: Color | number | string | Resource;

  /**
   * Non-Current Month Workday Marker Color.
   * @since 7
   */
  nonCurrentMonthWorkDayMarkColor?: Color | number | string | Resource;

  /**
   * Non-Current Month Off Day Marker Color.
   * @since 7
   */
  nonCurrentMonthOffDayMarkColor?: Color | number | string | Resource;
}

/**
 * Non current day style.
 * @since 7
 */
export interface TodayStyle {
  /**
   * Style of focus color.
   * @since 7
   */
  focusedDayColor?: Color | number | string | Resource;

  /**
   * Focus on Lunar Colors.
   * @since 7
   */
  focusedLunarColor?: Color | number | string | Resource;

  /**
   * Background color of the focus area.
   * @since 7
   */
  focusedAreaBackgroundColor?: Color | number | string | Resource;

  /**
   * Focus area radius.
   * @since 7
   */
  focusedAreaRadius?: number;
}

/**
 * Week Style.
 * @since 7
 */
export interface WeekStyle {
  /**
   * Style of week color.
   * @since 7
   */
  weekColor?: Color | number | string | Resource;

  /**
   * Style of week day color.
   * @since 7
   */
  weekendDayColor?: Color | number | string | Resource;

  /**
   * Style of lunar color.
   * @since 7
   */
  weekendLunarColor?: Color | number | string | Resource;

  /**
   * Style of week font size.
   * @since 7
   */
  weekFontSize?: number;

  /**
   * Style of week height.
   * @since 7
   */
  weekHeight?: number;

  /**
   * Style of week width.
   * @since 7
   */
  weekWidth?: number;

  /**
   * Style of week space.
   * @since 7
   */
  weekAndDayRowSpace?: number;
}

/**
 * Work state style.
 * @since 7
 */
export interface WorkStateStyle {
  /**
   * Style of day color.
   * @since 7
   */
  workDayMarkColor?: Color | number | string | Resource;

  /**
   * Style of day color.
   * @since 7
   */
  offDayMarkColor?: Color | number | string | Resource;

  /**
   * Style of day size.
   * @since 7
   */
  workDayMarkSize?: number;

  /**
   * Style of day size.
   * @since 7
   */
  offDayMarkSize?: number;

  /**
   * Style of width.
   * @since 7
   */
  workStateWidth?: number;

  /**
   * Style of distance.
   * @since 7
   */
  workStateHorizontalMovingDistance?: number;

  /**
   * Style of distance.
   * @since 7
   */
  workStateVerticalMovingDistance?: number;
}

/**
 * Calendar controller.
 * @since 7
 */
declare class CalendarController {
  /**
   * Constructor.
   * @since 7
   */
  constructor();

  /**
   * Back to day.
   * @since 7
   */
  backToToday();

  /**
   * To the specified element.
   * @since 7
   */
  goTo(value: { year: number, month: number, day: number });
}

/**
 * Create calendar.
 * @since 7
 */
export declare class CalendarExtend<T> extends CalendarAttribute<T> {
}

/**
 * @since 7
 */
interface Calendar extends CalendarAttribute<Calendar> {
  /**
   * Set value.
   * @since 7
   */
  (value: { date: { year: number, month: number, day: number }, currentData: MonthData, preData: MonthData, nextData: MonthData, controller?: CalendarController }): Calendar;
}

/**
 * @since 7
 */
declare class CalendarAttribute<T> {
  /**
   * Specifies whether the component displays the lunar calendar information.
   * @since 7
   */
  showLunar(value: boolean): T;

  /**
   * Setting whether to display holiday information
   * @since 7
   */
  showHoliday(value: boolean): T;

  /**
   * Indicates whether the page can be scrolled.
   * @since 7
   */
  needSlide(value: boolean): T;

  /**
   * Set the start day of the week for the calendar.
   * @since 7
   */
  startOfWeek(value: number): T;

  /**
   * Set weekend. The default value is Sunday and Saturday.
   * @since 7
   */
  offDays(value: number): T;

  /**
   * Sets the sliding direction.
   * @since 7
   */
  direction(value: Axis): T;

  /**
   * Sets the date style in the current month.
   * @since 7
   */
  currentDayStyle(value: CurrentDayStyle): T;

  /**
   * Sets the non-monthly date style.
   * @since 7
   */
  nonCurrentDayStyle(value: NonCurrentDayStyle): T;

  /**
   * Set the date style for today.
   * @since 7
   */
  todayStyle(value: TodayStyle): T;

  /**
   * Sets the date style for the weekend.
   * @since 7
   */
  weekStyle(value: WeekStyle): T;

  /**
   * Sets the style of the working state.
   * @since 7
   */
  workStateStyle(value: WorkStateStyle): T;

  /**
   * Click a date to return the information about the date you clicked.
   * @since 7
   */
  onSelectChange(event: (event: { year: number, month: number, day: number }) => void): T;

  /**
   * When you swipe to switch months, the information about the previous month and the next month is requested.
   * @since 7
   */
  onRequestData(event: (event: { year: number, month: number, currentYear: number, currentMonth: number, monthState: number }) => void): T;
}

/**
 * @since 7
 */
export declare const CalendarInterface: Calendar;
