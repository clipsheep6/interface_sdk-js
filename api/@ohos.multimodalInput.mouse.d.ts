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
    // 默认
    DEFAULT,

    // 向东箭头
    EAST,

    // 向西箭头
    WEST,

    // 向南箭头
    SOUTH,

    // 向北箭头
    NORTH,

    // 东西箭头
    WEST_EAST,

    // 南北箭头
    NORTH_SOUTH,

    // 东北箭头
    NORTH_EAST,

    // 西北箭头
    NORTH_WEST,

    // 东南箭头
    SOUTH_EAST,

    // 西南箭头
    SOUTH_WEST,

    // 东北西南箭头
    NORTH_EAST_SOUTH_WEST,

    // 西北东南箭头
    NORTH_WEST_SOUTH_EAST,

    // 十字
    CROSS,

    // 拷贝光标
    CURSOR_COPY,

    // 禁止拷贝
    CURSOR_FORBID,

    // 吸管
    COLOR_SUCKER,

    // 手掌抓取
    HAND_GRABBING,

    // 手掌打开
    HAND_OPEN,

    // 手掌指向
    HAND_POINTING,

    // 帮助
    HELP,

    // 移动
    MOVE,

    // 左右调整
    RESIZE_LEFT_RIGHT,

    // 上下调整
    RESIZE_UP_DOWN,

    // 截图选择
    SCREENSHOT_CHOOSE,

    // 截图光标
    SCREENSHOT_CURSOR,

    // 文本光标
    TEXT_CURSOR,

    // 缩小
    ZOOM_IN,

    // 放大
    ZOOM_OUT,

    // 鼠标向东箭头
    MOUSE_EAST,

    // 鼠标向西箭头
    MOUSE_WEST,

    // 鼠标向南箭头
    MOUSE_SOUTH,

    // 鼠标向北箭头
    MOUSE_NORTH,

    // 鼠标南北箭头
    MOUSE_NORTH_SOUTH,

    // 鼠标东北箭头
    MOUSE_NORTH_EAST,

    // 鼠标西北箭头
    MOUSE_NORTH_WEST,

    // 鼠标东南箭头
    MOUSE_SOUTH_EAST,

    // 鼠标西南箭头
    MOUSE_SOUTH_WEST,

    // 鼠标东西南北箭头
    MOUSE_NORTH_SOUTH_WEST_EAST,
  }

  /**
   * 设置光标移动速度
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @systemapi hide for inner use
   * @param speed 光标移动速度
   * @param callback 回调函数，用于上报设置结果
   */
  function setPointerSpeed(speed: number, callback: AsyncCallback<void>): void;

  /**
   * 设置光标移动速度
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @systemapi hide for inner use
   * @param speed 光标移动速度
   * @return 回调函数，用于上报设置结果
   */
  function setPointerSpeed(speed: number): Promise<void>;

  /**
   * 查询光标移动速度
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @systemapi hide for inner use
   * @param callback 回调函数，用于上报查询结果
   */
  function getPointerSpeed(callback: AsyncCallback<number>): void;

  /**
   * 查询光标移动速度
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @systemapi hide for inner use
   * @return 回调函数，用于上报查询结果
   */
  function getPointerSpeed(): Promise<number>;

  /**
   * 设置光标样式
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @systemapi hide for inner use
   * @param windowId 窗口id
   * @param pointerStyle 鼠标样式
   * @param callback 回调函数，用于上报设置结果
   */
  function setPointerStyle(windowId: number, pointerStyle: PointerStyle, callback: AsyncCallback<void>): void;

  /**
   * 设置光标样式
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @systemapi hide for inner use
   * @param windowId 窗口id
   * @param pointerStyle 鼠标样式
   * @return 回调函数，用于上报设置结果
   */
  function setPointerStyle(windowId: number, pointerStyle: PointerStyle): Promise<void>;

  /**
   * 查询光标样式
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @systemapi hide for inner use
   * @param windowId 窗口id
   * @param callback 回调函数，用于上报查询结果
   */
  function getPointerStyle(windowId: number, callback: AsyncCallback<PointerStyle>): void;

  /**
   * 查询光标样式
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.Mouse
   * @systemapi hide for inner use
   * @param windowId 窗口id
   * @return 回调函数，用于上报查询结果
   */
  function getPointerStyle(windowId: number): Promise<PointerStyle>;

}

export default mouse;