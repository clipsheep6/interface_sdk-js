/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { Callback } from './@ohos.base';

/**
 * 该模块提供订阅手势事件的能力。
 * @namespace motion
 * @syscap SystemCapability.MultimodalAwareness.User
 * @since 11
 */
declare namespace motion {
  /**
   * 订阅屏幕旋转事件
   * @param { 'rotation' } event - 表示要监听的屏幕旋转事件类型。
   * @param { Callback<RotationDirection> } callback - 回调函数，用于返回屏幕旋转事件。
   * @throws { BusinessError } 401 - 参数检查失败，包括必选参数没有传入，参数类型错误等。
   * @throws { BusinessError } 801 - 设备不支持该API，通常用于在设备已支持该SysCap时，针对其少量的API支持处理。
   * @syscap SystemCapability.MultimodalAwareness.User
   * @since 11
   */
  function on(event: 'rotation', callback: Callback<RotationDirection>): void;

  /**
   * 取消订阅屏幕旋转事件
   * @param { 'rotation' } event - 表示要取消监听的屏幕旋转事件类型。
   * @param { Callback<RotationDirection> } callback - 回调函数，用于返回屏幕旋转事件。
   * @throws { BusinessError } 401 - 参数检查失败，包括必选参数没有传入，参数类型错误等。
   * @throws { BusinessError } 801 - 设备不支持该API，通常用于在设备已支持该SysCap时，针对其少量的API支持处理。
   * @syscap SystemCapability.MultimodalAwareness.User
   * @since 11
   */
  function off(event: 'rotation', callback?: Callback<RotationDirection>): void;

  /**
   * 该枚举用来描述设备旋转后屏幕的方向
   * @enum { number }
   * @syscap SystemCapability.MultimodalAwareness.User
   * @since 11
   */
  export enum RotationDirection {
    /**
     * 设备的上边缘朝上.
     * @syscap SystemCapability.MultimodalAwareness.User
     * @since 11
     */
    UP = 0,
    /**
     * 设备的上边缘朝左.
     * @syscap SystemCapability.MultimodalAwareness.User
     * @since 11
     */
    LEFT = 1,
    /**
     * 设备的上边缘面朝下.
     * @syscap SystemCapability.MultimodalAwareness.User
     * @since 11
     */
    DOWN = 2,
    /**
     * 设备的上边缘面朝右.
     * @syscap SystemCapability.MultimodalAwareness.User
     * @since 11
     */
    RIGHT = 3
  }
}

export default motion;