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
 * CheckboxGroup SelectStatus
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum SelectStatus {
  /**
   * All checkboxs is selected.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  All,
  /**
   * Part of the checkbox is selected.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Part,
  /**
   * None of the checkbox is selected.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,
}

/**
 * Defines the option of CheckboxGroup.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface CheckboxGroupOption {
  /**
   * Setting the group of CheckboxGroup.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
   group?: string;
}

/**
 * Provides an interface for the CheckboxGroup component.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface CheckboxGroupInterface {
  /**
   * Called when the CheckboxGroup component is used.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  (options?: CheckboxGroupOption): CheckboxGroupAttribute;
}

/**
 * Defines the attribute functions of CheckboxGroup.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class CheckboxGroupAttribute extends CommonMethod<CheckboxGroupAttribute> {

  /**
   * setting whether all checkbox is selected.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
   selectAll(value: boolean): CheckboxGroupAttribute;

  /**
   * setting the display color of checkbox.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
   selectedColor(value: ResourceColor): CheckboxGroupAttribute;

  /**
   * Called when the selection status changes.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  onChange(callback: (name: Array<any>, status: SelectStatus) => void): CheckboxGroupAttribute;
}

declare const CheckboxGroup: CheckboxGroupInterface;
declare const CheckboxGroupInstance: CheckboxGroupAttribute;
