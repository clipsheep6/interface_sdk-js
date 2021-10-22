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

import {CommonMethod, Resource} from "./common";

/**
 * Declare the type of selector
 * @since 7
 */
export declare enum PickerStyle {
  /**
   * Inside the line.
   * @since 7
   */
  INLINE = 0,

  /**
   * Block-level elements.
   * @since 7
   */
  BLOCK,

  /**
   * fade.
   * @since 7
   */
  FADE,
}

/**
 * @since 7
 */
export declare class TextPickerExtend<T> extends TextPickerAttribute<T> {
}

/**
 * @since 7
 */
interface TextPicker extends TextPickerAttribute<TextPicker> {
  /**
   * Add the property of the selector value range.
   * @since 7
   */
  (options?: {range: string[] | Resource, value?: string, selected?: number, loop?: boolean , style?: PickerStyle}): TextPicker;
}

/**
 * Style the text selector.
 * @since 7
 */
declare class TextPickerAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the default height of the selected element is set.
   * @since 7
   */
  defaultPickerItemHeight(value: number): T;

  /**
   * Called when the pop-up value is returned.
   * @since 7
   */
  onAccept(callback: (value: string, index: number) => void): T;

  /**
   * Called when the Cancel button in the pop-up window is clicked.
   * @since 7
   */
  onCancel(callback: () => void): T;

  /**
   * Called when the OK button in the pop-up window is clicked.
   * @since 7
   */
  onChange(callback: (value: string, index: number) => void): T;
}

/**
 * @since 7
 */
export declare const TextPickerInterface: TextPicker;
