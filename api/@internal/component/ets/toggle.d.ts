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

import {CommonMethod, Color} from "./common";

/**
 * Declare the type of status button
 * @since 7
 */
export declare enum ToggleType {
  /**
   * Checkbox
   * @since 7
   */
  Checkbox,

  /**
   * Switch
   * @since 7
   */
  Switch,

  /**
   * Button
   * @since 7
   */
  Button
}

/**
 * @since 7
 */
export declare class ToggleExtend<T> extends ToggleAttribute<T> {
}

/**
 * @since 7
 */
interface Toggle extends ToggleAttribute<Toggle> {
  /**
   * Set parameters to obtain the toggle.
   * @since 7
   */
  (options?: {type: ToggleType, isOn?: boolean}): Toggle;
}

/**
 * @since 7
 */
declare class ToggleAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the selected state of the component changes.
   * @since 7
   */
  onChange(callback: (isOn: boolean) => void): T;

  /**
   * Called when the color of the selected button is set.
   * @since 7
   */
  selectedColor(value: Color): T;

  /**
   * Called when the color of the selected button is set.
   * @since 7
   */
  swithPointStyle(color: Color): T;
}

/**
 * @since 7
 */
export declare const ToggleInterface: Toggle;
