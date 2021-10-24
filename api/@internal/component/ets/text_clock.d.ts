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
 * TextClock组件构造参数。
 * @since 8
 */
export interface TextClockOption {
  /**
   * 设置是否为24小时制。
   * @since 8
   */
  is24hour?: boolean;

  /**
   * 设置当前时区信息，有效值为整数，时区范围为[-12, 12]，其中负值表示东时区，比如东八区为-8。
   * @since 8
   */
  hourswest?: number;
}

/**
 * TextClock组件，提供文本时钟能力。
 * @since 8
 */
interface TextClock extends TextClockAttribute<Text> {
  /**
   * 构造文本时钟组件。
   * @param options 可选参数，详见{@link TextClockOption}定义。
   * @since 8
   */
  (options?: TextClockOption): TextClock;
}

declare class TextClockAttribute<T> extends CommonMethod<T> {
  /**
   * 设置展示时间格式，如“now is yyyy/mm/dd”、“current: yyyy-mm-dd”等。
   * 支持的时间格式化字符串：yyyy,mm,mmm(英文月份简写),mmmm(英文月份全称),dd,ddd(英文星期简写),dddd(英文星期全称),HH,MM,SS,tt(12小时制下小写am或者pm),TT(12小时制下大写AM或者PM)。
   * @since 8
   */
  format(value: string): T;

  /**
   * 设置是否采用24小时制。
   * @param value 是否采用24小时制。
   * @since 8
   */
  is24hour(value: boolean): T;

  /**
   * 设置时区偏移值，有效值为整数，范围为[-12, 12]，其中负值表示东时区，如东八区为-8。
   * @param value 时区数值。
   * @since 8
   */
  hourswest(value: number): T;

  /**
   * 提供日期变化回调，回调参数为Unix Time Stamp，即自1970年1月1日（UTC）起经过的毫秒数。该事件最小回调间隔为秒。
   * 用户可以监听该回调，在该回调中通过format属性方法自定义数据展示。
   * @param event 监听日期事件回调。
   * @since 8
   */
  onDateChange(event: (value: number) => void);
}

export declare class TextExtend<T> extends TextClockAttribute<T> {}

export const TextClockInterface: TextClock;
