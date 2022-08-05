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
 * 订阅设备状态，可上报静止状态、相对静止状态等事件。
 *
 * @since 9
 * @syscap SystemCapability.Msdp.DeviceStatus
 * @import import DeviceStatus from '@ohos.DeviceStatus'
 */
declare namespace deviceStatus {
    /**
     * 设备状态。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus
     * @since 9
     */
    interface ActivityResponse {
        state: ActivityState;
    }
	
    /**
     * 设备状态类型。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus
     * @since 9
     */
    type ActivityType = 'still' | 'relativeStill';

    /**
     * 设备状态事件。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus
     * @since 9
     */
    enum ActivityEvent {
        /**
         * 进入设备状态。
         */ 
        ENTER = 1,
		
        /**
         * 退出设备状态。
         */
        EXIT = 2,
		
        /**
         * 进入和退出设备状态。
         */
        ENTER_EXIT = 3
    }
	
    /**
     * 设备状态。
     *
     * @syscap SystemCapability.Msdp.DeviceStatus
     * @since 9
     */
    enum ActivityState {
        /**
         * 进入设备状态。
         */
        ENTER = 1,
		
        /**
         * 退出设备状态。
         */
        EXIT = 2
    }

    /**	
     * 订阅设备状态。
     *
     * @param activity 设备状态类型，{@code type: ActivityType}。
     * @param event 设备状态事件。
     * @param reportLatencyNs 事件上报周期。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.DeviceStatus
     * @since 9
     */
    function on(activity: ActivityType, event: ActivityEvent, reportLatencyNs: number, callback: Callback<ActivityResponse>): void;
	
    /**
     * 查询设备状态。
     *
     * @param activity 设备状态类型，{@code type: ActivityType}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.DeviceStatus
     * @since 9
     */
    function once(activity: ActivityType, callback: Callback<ActivityResponse>): void;
	
    /**
     * 取消订阅设备状态。
     *
     * @param activity 设备状态类型，{@code type: ActivityType}。
     * @param event 设备状态事件。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.DeviceStatus
     * @since 9
     */
    function off(activity: ActivityType, event: ActivityEvent, callback?: Callback<ActivityResponse>): void;
}

export default DeviceStatus;