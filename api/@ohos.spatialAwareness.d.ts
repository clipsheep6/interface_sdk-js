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

import { Callback } from './basic';

/**
 * 提供设备空间感知数据上报功能，可上报方位关系、接近关系等事件。
 *    
 * @since 9
 * @syscap SystemCapability.Msdp.SpatialAwareness
 * @import import spatialAwareness from '@ohos.spatialAwareness'
 */
declare namespace spatialAwareness {
   /**
     * 用于接收方位数据。
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @since 9
     */
    interface DirectionResponse {
        direction : Direction
    }
	
    /**
     * 设备信息定义。
     *	 
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @since 9
     */
    interface DeviceInfo {
        /**
         * 设备ID。
         */
        deviceId: string;

        /**
         * 设备名称。
         */
        deviceName: string;

        /**
         * 设备类型。
         */
        deviceType: DeviceType;
    }

    /**
     * 位置关系类型。
     *
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @since 9
     */
    enum PositionRelation {
        /**
         * 方位关系。
         */
        DIRECTION = "direction",
		
        /**
         * 接近关系。
         */
        NEARBY = "nearby"
    }

    /**
     * 设备类型。
     *
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @since 9
     */
    enum DeviceType {
        /**
         * 表示未知的设备类型。
         */
        UNKNOWN_TYPE = 1,

        /**
         * 表示音响。
         */
        SPEAKER = 2,

        /**
         * 表示智能手机。
         */
        PHONE = 3,

        /**
         * 表示平板电脑。
         */
        TABLET = 4,

        /**
         * 表示穿戴设备。
         */
        WEARABLE = 5,

        /**
         * 表示汽车。
         */
        CAR = 6,

        /**
         * 表示智能电视。
         */
        TV = 7
    }

    /**
     * 方位关系定义。
     *	 
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @since 9
     */
    enum Direction {
        /**
         * 表示在请求设备的左边。
         */
        LEFT = 1,
		
        /**
         * 表示在请求设备的右边。
         */
        RIGHT = 2,
		
        /**
         * 表示在请求设备的前面。
         */
        FRONT = 3,
		
        /**
         * 表示在请求设备的后面。
         */
        BACK = 4,
		
        /**
         * 表示在请求设备的上面。
         */
        UP = 5,
		
        /**
         * 表示在请求设备的下面。
         */
        DOWN = 6
    }
	
    /**
     * 订阅设备间方位关系。
     *
     * @param type 方位关系，{@code PositionRelation}。
     * @param deviceInfo 目标设备信息，{@code DeviceInfo}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @since 9
     */
     function on(type: PositionRelation.DIRECTION, deviceInfo : DeviceInfo,
        callback: Callback<DirectionResponse>): void;

    /**
     * 订阅设备间接近关系。
     *
     * @param type 方位关系，{@code PositionRelation}。
     * @param deviceInfo 目标设备信息，{@code DeviceInfo}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @since 9
     */
    function on(type: PositionRelation.NEARBY, deviceInfo : DeviceInfo,
        callback: Callback<NearByResponse>): void;
		
    /**
     * 取消订阅设备间方位关系。
     *
     * @param type 方位关系，{@code PositionRelation}。
     * @param deviceInfo 目标设备信息，{@code DeviceInfo}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @since 9
     */
    function off(type: PositionRelation.DIRECTION, deviceInfo : DeviceInfo, 
        callback?: Callback<DirectionResponse>): void;

    /**
     * 取消订阅设备间接近关系。
     *
     * @param type 方位关系，{@code PositionRelation}。
     * @param deviceInfo 目标设备信息，{@code DeviceInfo}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.SpatialAwareness
     * @since 9
     */
    function off(type: PositionRelation.NEARBY, deviceInfo : DeviceInfo,
        callback?: Callback<NearByResponse>): void;
}

export default spatialAwareness;