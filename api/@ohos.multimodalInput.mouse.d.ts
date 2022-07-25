/*
* Copyright (c) 2021-2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback } from "./basic";
import AbilityContext from "./application/AbilityContext";

/**
* 鼠标指针相关属性接口
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Mouse
* @import import mouse from '@ohos.multimodalInput.mouse';
*/

declare namespace mouse {
  enum PointerStyle {
    // 正常选择
    NORMAL_SELECT,

    // 协助选择
    HELP_SELECT,

    // 后台运行
    WORKING_IN_BACKGROUND,

    // 忙碌
    BUSY,

    // 精确选择
    PRECISION_SELECT,

    // 下一步
    NEXT_SELECT,

    // 手写
    HANDWRITING,

    // 不可用
    UNAVAILABLE,

    // 垂直调整
    VERTICAL_RESIZE,

    // 水平调整
    HORIZONTAL_RESIZE,

    // 正向对角线调整
    DIAGONAL_RESIZE_1,

    // 负向对角线调整
    DIAGONAL_RESIZE_2,

    // 移动
    MOVE,

    // 备选
    ALTERNATE_SELECT,

    // 链接
    LINK_SELECT,

    // 位置
    LOCATION_SELECT,

    // 人物
    PERSON_SELECT,
  }

  /**
   * 设置光标移动速度
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param speed Speed of cursor movement.
   */
  function setPointerSpeed(speed: number, callback: AsyncCallback<void>): void;
  function setPointerSpeed(speed: number): Promise<void>;

  /**
   * 获取光标移动速度
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   */
  function getPointerSpeed(callback: AsyncCallback<number>): void;
  function getPointerSpeed(): Promise<number>;

  /**
   * 设置光标样式
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param pointerStyle 鼠标样式id。
   * @return callback function, receive reported data
   */
  function setPointerStyle(windowId: number, pointerStyle: PointerStyle, callback: AsyncCallback<void>): void;
  function setPointerStyle(windowId: number, pointerStyle: PointerStyle): Promise<void>;

  /**
     * 获取光标样式
     *
     * @since 9
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @return callback function, receive reported data
     */
  function getPointerStyle(windowId: number, callback: AsyncCallback<PointerStyle>): void;
  function getPointerStyle(windowId: number): Promise<PointerStyle>;

}

export default mouse;