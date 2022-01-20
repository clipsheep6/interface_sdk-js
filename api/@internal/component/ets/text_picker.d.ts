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
 * Defines the option of TextPicker.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface TextPickerOption {
  /**
   * Specifies the range of the text selector.
   */
  range: string[] | Resource;
  /**
   * Value of the current selection.
   */
  value?: string;
  /**
   * Current selected subscript.
   */
  selected?: number;
}

/**
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface TextPickerInterface {
  /**
   * Defines the TextPicker constructor.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  (options?: TextPickerOption): TextPickerAttribute;
}

/**
 * Style the text selector.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class TextPickerAttribute extends CommonMethod<TextPickerAttribute> {
  /**
   * Called when the default height of the selected element is set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  defaultPickerItemHeight(value: number | string): TextPickerAttribute;
  /**
   * Called when the pop-up value is returned.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onAccept(callback: (value: string, index: number) => void): TextPickerAttribute;
  /**
   * Called when the Cancel button in the pop-up window is clicked.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onCancel(callback: () => void): TextPickerAttribute;
  /**
   * Called when the OK button in the pop-up window is clicked.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onChange(callback: (value: string, index: number) => void): TextPickerAttribute;
}

/**
 * Defines the TextPickerDialogOption for Text Picker Dialog.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface TextPickerDialogOption extends TextPickerOption {
  /**
   * Called when the default height of the selected element is set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  defaultPickerItemHeight?: number | string;
}

/**
 * Defines the event callback status in the pop-up window state.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum TextPickerDialogStatus {
  /**
   * Triggered when a user clicks the OK button.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Accept,
  /**
   * Triggered when a user taps the Cancel button.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Cancel,
  /**
   * Triggered when a user performs scrolling selection.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Update,
}

/**
 * Defines the TextPickerDialogResult for TextPickerDialog.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface TextPickerDialogResult {
 /**
   * The currently selected value.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  value: string;
  /**
   * The subscript of the current selection.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  index: number;
  /**
   * Operation status of the current user.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  status: TextPickerDialogStatus;
}
/**
 * Defines TextPickerDialog which uses show method to show TextPicker dialog.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class TextPickerDialog {
  /**
   * Invoking method display.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  static show(options?: TextPickerDialogOption, callback?: (value: TextPickerDialogResult) => void);
}

declare const TextPicker: TextPickerInterface;
declare const TextPickerInstance: TextPickerAttribute;
