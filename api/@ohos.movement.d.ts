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
 * 提供移动状态上报功能，可上报走、跑、骑、乘等事件。
 *
 * @since 9
 * @syscap SystemCapability.Msdp.Movement
 * @import import movement from '@ohos.movement'
 */
declare namespace movement {
    /**
     * 用于接收移动状态。
     * @syscap SystemCapability.Msdp.Movement
     * @since 9
     */
    interface MovementResponse {
        state: MovementState;
    }
	
    /**
     * 移动状态类型。
     * @syscap SystemCapability.Msdp.Movement
     * @since 9
     */
    type MovementType = 'inAuto' | 'inBicycle' | 'walking' | 'running';
	
    /**
     * 移动状态事件。
     * @syscap SystemCapability.Msdp.Movement
     * @since 9
     */
    enum MovementEvent {
        /**
         * 进入移动状态。
         */ 
        ENTER = 1,
		
        /**
         * 退出移动状态。
         */
        EXIT = 2,
		
        /**
         * 进入和退出移动状态。
         */
        ENTER_EXIT = 3
    }
	
	/**
     * 移动状态。
     * @syscap SystemCapability.Msdp.Movement
     * @since 9
     */
    enum MovementState {
        /**
         * 进入移动状态。
         */
        ENTER = 1,
		
        /**
         * 退出移动状态。
         */
        EXIT = 2
    }
	
    /**
     * 订阅移动状态。
     *
     * @param movement 移动状态类型，{@code movement: MovementType}。
     * @param event 移动状态事件。
     * @param reportLatencyNs 事件上报周期。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.Movement
     * @since 9
     */
    function on(movement: MovementType, event: MovementEvent, reportLatencyNs: number, callback: Callback<MovementResponse>): void;

    /**
     * 查询当前移动状态。
     *
     * @param movement 移动状态类型，{@code MovementType}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.Movement
     * @since 9
     */
    function once(movement: MovementType, callback: Callback<MovementResponse>): void;

    /**
     * 取消订阅移动状态。
     *
     * @param movement 移动状态类型，{@code movement: MovementType}。
     * @param event 移动状态事件。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.Movement
     * @since 9
     */
    function off(movement: MovementType, event: MovementEvent, callback?: Callback<MovementResponse>): void;
}

export default movement;

