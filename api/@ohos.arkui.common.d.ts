/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
   * Gets the value on the breakpoint.
   * @param {BreakPointTypeOption<T>} options - The options for the breakpoint type.
   * @param {string} currentBreakpoint - The current breakpoint.
   * @returns {T | undefined} The value on the breakpoint.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
export declare function GetValueOnBreakpoint<T>(options: BreakPointTypeOption<T>, currentBreakpoint: string): T | undefined;

  /**
   * Register listening event
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
export declare function register();

  /**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   * unregister listening event
   */
export declare function unregister();