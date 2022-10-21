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
 * 提供手势状态上报功能，可上报拿起、翻转、接近等事件。
 *
 * @since 9
 * @sysCap SystemCapability.Sensors.Motion
 * @import import motion from '@ohos.motion'
 */
declare namespace motion {
    /**
     * 手势状态类型。
     * @sysCap SystemCapability.Msdp.Motion
     * @since 9
     */
    type MotionType = 'pickUp' | 'closeToEar' | 'flip' | 'shake' | 'rotate';
	
    /**
     * 订阅手势状态。
     * @param motion 手势状态类型，{@code type: MotionType}。
     * @param callback 用于接收上报数据的回调。
     * @sysCap SystemCapability.Msdp.Motion
     * @since 9
     */
    function on(motion: MotionType, callback: Callback<boolean>): void;
	
    /**
     * 取消订阅手势状态。
     * @param motion 手势状态类型，{@code type: MotionType}。
     * @param callback 用于接收上报数据的回调。
     * @sysCap SystemCapability.Msdp.Motion
     * @since 9
     */
    function off(motion: MotionType, callback?: Callback<boolean>): void;
}

export default motion;

