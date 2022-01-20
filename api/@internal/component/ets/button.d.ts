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
 * Provides a button component.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ButtonType {
  /**
   * Capsule button (rounded corners default to half the height).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Capsule,

  /**
   * Round buttons.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Circle,

  /**
   * Common button (no rounded corners by default).
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Normal,
}

/**
 * Defines the button options.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface ButtonOption {
  /**
   * Describes the button style.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  type?: ButtonType;

  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  stateEffect?: boolean;
}

/**
 * Defines the Button Component.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ButtonInterface {
  /**
   * Button object
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (): ButtonAttribute;

  /**
   * Create Button with Text child.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (options: ButtonOption): ButtonAttribute;

  /**
   * Create Button with inner text label.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (label: ResourceStr, options?: ButtonOption): ButtonAttribute;
}

/**
 * Defines the button attribute functions.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class ButtonAttribute extends CommonMethod<ButtonAttribute> {
  /**
   * Describes the button style.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  type(value: ButtonType): ButtonAttribute;

  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  stateEffect(value: boolean): ButtonAttribute;

  /**
   * Text color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontColor(value: ResourceColor): ButtonAttribute;

  /**
   * Text size.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontSize(value: Length): ButtonAttribute;

  /**
   * Font weight.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontWeight(value: number | FontWeight | string): ButtonAttribute;

  /**
   * Font style.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontStyle(value: FontStyle): ButtonAttribute;

  /**
   * Font family.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  fontFamily(value: string | Resource): ButtonAttribute;
}

declare const Button: ButtonInterface
declare const ButtonInstance: ButtonAttribute;
