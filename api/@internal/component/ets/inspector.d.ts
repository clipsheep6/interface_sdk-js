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

/**
 * @file
 * @kit ArkUI
 */

/**
 * Get inspector node infos.
 *
 * @returns { object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 * @deprecated since 9
 * @useinstead getInspectorTree
 */
declare function getInspectorNodes(): object;

/**
 * Get inspector node info by node id.
 *
 * @param { number } id
 * @returns { object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 * @deprecated since 9
 * @useinstead getInspectorByKey
 */
declare function getInspectorNodeById(id: number): object;

/**
 * Profiler tools for inspectors.
 *
 * @namespace Profiler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since arkts {'1.1':'8','1.2':'20'}
 * @test
 * @arkts 1.1&1.2
 */
declare namespace Profiler {
  /**
   * Registers vsync callback for profiler.
   *
   * @param { function } callback - the callback info is json string with ui update info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'8','1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  function registerVsyncCallback(callback: (info: string) => void): void;

  /**
   * Unregisters vsync callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'8','1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  function unregisterVsyncCallback(): void;
}

/**
 * Set app background color.
 *
 * @param { string } value
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since arkts {'1.1':'8','1.2':'20'}
 * @test
 * @arkts 1.1&1.2
 */
declare function setAppBgColor(value: string): void;
