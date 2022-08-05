/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { Callback } from "./basic";

/**
 * 提供时间线数据上报功能，可上报位于家或者位于公司事件。
 *
 * @since 9
 * @syscap SystemCapability.Msdp.Timeline
 * @import import timeline from '@ohos.timeline'
 */
declare namespace timeline {
    /**
     * 用于接收时间线数据。
     *
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    export class TimelineResponse {
        state: TimelineState;
    }
	
    /**
     * 时间线类型。
     *
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    type TimelineArea = 'areaHome' | 'areaCompany';
		
    /**
     * 时间类型。
     *
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    type ActivityTime = 'sleepTime' | 'restTime' | 'workTime';
	
    /**
     * 时间线事件。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus
     * @since 9
     */
    enum TimelineEvent {
        /**
         * 进入时间线。
         */ 
        ENTER = 1,
		
        /**
         * 退出时间线。
         */
        EXIT = 2,
		
        /**
         * 进入和退出时间线。
         */
        ENTER_EXIT = 3
    }
	
    /**
     * 时间线状态.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus
     * @since 9
     */
    enum TimelineState {
        /**
         * 进入时间线。
         */
        ENTER = 1,
		
        /**
         * 退出时间线。
         */
        EXIT = 2
    }

    /**
     * 订阅时间线。
     * 
     * @param area 时间线类型，{@code TimelineArea}。
     * @param event 时间线事件。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    function on(area: TimelineArea, event:TimelineEvent, callback: Callback<TimelineResponse>): void;

    /**
     * 取消订阅时间线。
     * 
     * @param area 时间线类型，{@code TimelineArea}.
     * @param callback 用于接收上报数据的回调.
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    function off(area: TimelineArea, callback?: Callback<TimelineResponse>): void;

    /**
     * 设置地理位置。
     *
     * @param area 时间线类型，{@code TimelineArea}.
     * @param longitude 经度。 
     * @param latitude 纬度。
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    function setPosition(area: TimelineArea, longitude: number, latitude: number): void;

    /**
     * 设置白班或者夜班。
     *
     * @param value 白班或者夜班，取值范围是[0,1]，0表示白班，1表示夜班。
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    function setDayAndNightShift(value: number): void;

    /**
     * 设置时间段。 
     *
     * @param time 时间段活动类型。	 
     * @param start 起始时间，取值范围是[0,23]。
     * @param end 结束时间，取值范围是[0,23]。
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    function setTime(time: ActivityTime, start: number, end: number): void;

    /**
     * 获取指定时间的预测结果。
     *
     * @param hour 指定的时间，取值范围是[0,23]。
     * @param callback 用于接收时间线上报数据的回调。
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    function getForecastPosition(hour: number, callback: Callback<TimelineArea>): void
	
    /**
     * 获取指定时间的预测结果。
     *
     * @param hour 指定的时间，取值范围是[0,23]。
     * @syscap SystemCapability.Msdp.Timeline
     * @since 9
     */
    function getForecastPosition(hour: number): Promise(TimelineArea)
}

export default timeline;
