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
 * 提供地理围栏数据上报功能，可上报进入景区、离开景区事件。
 *
 * @since 9
 * @syscap SystemCapability.Msdp.Geofence
 * @import import geofence from '@ohos.geofense'
 */
declare namespace geofence {
    /**
     * 用于接收地理围栏状态。
     *
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    interface GeofenceResponse {
        status: GeofenceState;
    }

    /**
     * 圆形围栏的选项。
     *
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    interface CircleOption {
        /**
         * 圆形围栏中心点的坐标。
         */
        centerCoordinate: Array<number>;
		
        /**
         * 圆形围栏半径。
         */
        radius: number;
    }

    /**
     * 多边形围栏的选项。
     *
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    interface PolygonOption {
        /**
         * 多边形围栏关键字。
         */
        keyword: string;
		
        /**
         * 多边形围栏类型。
         */
        type: string;
		
        /**
         * 多边形围栏所在的城市。
         */
        city: string;
    }

    /**
     * 地理围栏的类型。
     *
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    enum GeofenceType{
        /**
         * 圆形围栏。
         */
        CIRCLE_FENCE = "CircleFence",
		
        /**
         * 多边形围栏。
         */
        POLYGON_FENCE = "PolygonFence"
    }

    /**
     * 围栏状态。
     *
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    enum GeofenceState {
        /**
         * 围栏外。
         */
        OUTSIDE = 1,
		
        /**
         * 围栏内。
         */
        INSIDE = 2,
		
        /**
         * 进入围栏。
         */
        ENTER = 3,
		
        /**
         * 离开围栏。
         */
        EXIT = 4
    }

    /**
     * 订阅圆形围栏。
     *
     * @param type 围栏类型，{@code GeofenceType}。
     * @param option 围栏的参数选项，{@code Option}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    function on(type: GeofenceType, option: CircleOption, callback: Callback<GeofenceResponse>): void;

    /**
     * 订阅多边形围栏。
     *
     * @param type 围栏类型，{@code GeofenceType}。
     * @param option 围栏的参数选项，{@code Option}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    function on(type: GeofenceType, option: PolygonOption, callback: Callback<GeofenceResponse>): void;

    /**
     * 取消订阅圆形围栏。
     *
     * @param type 围栏类型，{@code GeofenceType}。
     * @param option 围栏的可选参数，{@code Option}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    function off(type: GeofenceType, option: CircleOption, callback?: Callback<GeofenceResponse>): void;

    /**
     * 取消订阅多边形围栏。
     *
     * @param type 围栏类型，{@code GeofenceType}。
     * @param option 围栏的可选参数，{@code Option}。
     * @param callback 用于接收上报数据的回调。
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    function off(type: GeofenceType, option: PolygonOption, callback?: Callback<GeofenceResponse>): void;

    /**
     * 设置防呆策略的时长。
     *
     * @param minuteTime 防呆策略的时长，取值范围大于或等于0。
     * @syscap SystemCapability.Msdp.Geofence
     * @since 9
     */
    function setFoolProofTime(inuteTime: number): void;
}

export default geofence;