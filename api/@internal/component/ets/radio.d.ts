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

import { CommonMethod } from "./common";

/**
 * radio
 * @since 7
 */
export declare class RadioExtend<T> extends RadioAttribute<T> {}

/**
 * Provides an interface for creating a radio box.
 * @since 7
 */
interface Radio extends RadioAttribute<Radio> {
  /**
   * Called when a radio box is created.
   * @since 7
   */
  (options: { value: string }): Radio;
}

/**
 * @since 7
 */
declare class RadioAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the radio box is selected.
   * @since 7
   */
  checked(value: boolean): T;

  /**
   * Called when the radio box selection status changes.
   * @since 7
   */
  onChange(callback: (isChecked: boolean) => void): T;
}

/**
 * @since 7
 */
export declare const RadioInterface: Radio;
