/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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

/*** if arkts 1.2 */
import { Resource } from '../../global/resource';
import { ResourceStr, ResourceColor, Length, Font } from './units';
import { TextOverflow, FontWeight, FontStyle, TextHeightAdaptivePolicy } from './enums';
import { CommonConfiguration, CommonMethod, ContentModifier } from './common';
/*** endif */

/**
 * Provides a button component.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides a button component.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides a button component.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides a button component.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ButtonType {
  /**
   * Capsule button (rounded corners default to half the height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Capsule button (rounded corners default to half the height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Capsule button (rounded corners default to half the height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Capsule button (rounded corners default to half the height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Capsule,

  /**
   * Round buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Round buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Round buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Round buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Circle,

  /**
   * Common button (no rounded corners by default).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Common button (no rounded corners by default).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Common button (no rounded corners by default).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Common button (no rounded corners by default).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Normal,

  /**
   * Rounded rectangle button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ROUNDED_RECTANGLE = 3,
}

/**
 * Enum for button style type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for button style type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ButtonStyleMode {
  /**
   * Normal button (with normal background color).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Normal button (with normal background color).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NORMAL = 0,

  /**
   * Emphasized button (with emphasized background color).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Emphasized button (with emphasized background color).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  EMPHASIZED = 1,

  /**
   * Textual button (with none background color).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Textual button (with none background color).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  TEXTUAL = 2,
}

/**
 * Enum for button role.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ButtonRole {
  /**
   * Normal button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NORMAL = 0,

  /**
   * Error button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ERROR = 1,
}

/**
 * Defines the callback type used in ButtonConfiguration.
 *
 * @typedef {function} ButtonTriggerClickCallback
 * @param { number } xPos - The value of xPos is x coordinate.
 * @param { number } yPos - The value of yPos is y coordinate.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type ButtonTriggerClickCallback = (xPos: number, yPos: number) => void;

/**
 * ButtonConfiguration used by button content modifier.
 *
 * @extends CommonConfiguration<ButtonConfiguration>
 * @interface ButtonConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */

declare interface ButtonConfiguration extends CommonConfiguration<ButtonConfiguration> {
  /**
   * Button with inner text label.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  label: string;

  /**
   * Indicates whether the button is pressed.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  pressed: boolean;

  /**
   * Trigger button click x coordinate and y coordinate.
   *
   * @type { ButtonTriggerClickCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  triggerClick: ButtonTriggerClickCallback;
}

/**
 * Enum for Control Size.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for Control Size.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ControlSize {
  /**
   * The component size is small.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * The component size is small.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  SMALL = 'small',

  /**
   * The component size is normal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * The component size is normal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NORMAL = 'normal',
}

/**
 * Defines the button options.
 *
 * @interface ButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the button options.
 *
 * @interface ButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the button options.
 *
 * @interface ButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the button options.
 *
 * @interface ButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface ButtonOptions {
  /**
   * Describes the button style.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Describes the button style.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Describes the button style.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Describes the button style.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type?: ButtonType;

  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  stateEffect?: boolean;

  /**
   * Describes the button style.
   *
   * @type { ?ButtonStyleMode }
   * @default ButtonStyleMode.EMPHASIZED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Describes the button style.
   *
   * @type { ?ButtonStyleMode }
   * @default ButtonStyleMode.EMPHASIZED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  buttonStyle?: ButtonStyleMode;

  /**
   * Describes the button size.
   *
   * @type { ?ControlSize }
   * @default ControlSize.NORMAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Describes the button size.
   *
   * @type { ?ControlSize }
   * @default ControlSize.NORMAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  controlSize?: ControlSize;

  /**
   * Describes the button role.
   *
   * @type { ?ButtonRole }
   * @default ButtonRole.NORMAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
    role?: ButtonRole;
}

/**
 * Defines the Button Component.
 *
 * @interface ButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the Button Component.
 *
 * @interface ButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the Button Component.
 *
 * @interface ButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Button Component.
 *
 * @interface ButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ButtonInterface {
  /**
   * Button object
   *
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Button object
   *
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Button object
   *
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Button object
   *
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (): ButtonAttribute;

  /**
   * Create Button with Text child.
   *
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Create Button with Text child.
   *
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Create Button with Text child.
   *
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Create Button with Text child.
   *
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options: ButtonOptions): ButtonAttribute;

  /**
   * Create Button with inner text label.
   *
   * @param { ResourceStr } label
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Create Button with inner text label.
   *
   * @param { ResourceStr } label
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Create Button with inner text label.
   *
   * @param { ResourceStr } label
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Create Button with inner text label.
   *
   * @param { ResourceStr } label
   * @param { ButtonOptions } options
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (label: ResourceStr, options?: ButtonOptions): ButtonAttribute;
}

/**
 * LabelStyle object.
 *
 * @interface LabelStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * LabelStyle object.
 *
 * @interface LabelStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface LabelStyle {
  /**
   * overflow mode.
   *
   * @type { ?TextOverflow }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * overflow mode.
   *
   * @type { ?TextOverflow }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  overflow?: TextOverflow;

  /**
   * Label max lines.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Label max lines.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  maxLines?: number;

  /**
   * Min font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Min font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  minFontSize?: number | ResourceStr;

  /**
   * Max font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Max font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  maxFontSize?: number | ResourceStr;

  /**
   * Adapt text height option.
   *
   * @type { ?TextHeightAdaptivePolicy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Adapt text height option.
   *
   * @type { ?TextHeightAdaptivePolicy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  heightAdaptivePolicy?: TextHeightAdaptivePolicy;

  /**
   * Font style.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Font style.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  font?: Font;
}

/**
 * ButtonLabelStyle object.
 *
 * @interface ButtonLabelStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare interface ButtonLabelStyle {
  /**
   * overflow mode.
   *
   * @type { ?TextOverflow }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  overflow?: TextOverflow;

  /**
   * Label max lines.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  maxLines?: number;

  /**
   * Min font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  minFontSize?: number | ResourceStr;

  /**
   * Max font size for adapted height.
   *
   * @type { ?(number | ResourceStr) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  maxFontSize?: number | ResourceStr;

  /**
   * Adapt text height option.
   *
   * @type { ?TextHeightAdaptivePolicy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  heightAdaptivePolicy?: TextHeightAdaptivePolicy;

  /**
   * Font style.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  font?: Font;
}

/**
 * Defines the button attribute functions.
 *
 * @extends CommonMethod<ButtonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the button attribute functions.
 *
 * @extends CommonMethod<ButtonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the button attribute functions.
 *
 * @extends CommonMethod<ButtonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the button attribute functions.
 *
 * @extends CommonMethod<ButtonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class ButtonAttribute extends CommonMethod<ButtonAttribute> {
  /**
   * Describes the button style.
   *
   * @param { ButtonType } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Describes the button style.
   *
   * @param { ButtonType } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Describes the button style.
   *
   * @param { ButtonType } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Describes the button style.
   *
   * @param { ButtonType } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type(value: ButtonType): ButtonAttribute;

  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   *
   * @param { boolean } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   *
   * @param { boolean } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   *
   * @param { boolean } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   *
   * @param { boolean } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  stateEffect(value: boolean): ButtonAttribute;

  /**
   * Describes the button style.
   *
   * @param { ButtonStyleMode } value - button style mode
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Describes the button style.
   *
   * @param { ButtonStyleMode } value - button style mode
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  buttonStyle(value: ButtonStyleMode): ButtonAttribute;
  
  /** 
   * Set the Button size.
   * 
   * @param { ControlSize } value - control size
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /** 
   * Set the Button size.
   * 
   * @param { ControlSize } value - control size
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  controlSize(value: ControlSize): ButtonAttribute;

  /** 
   * Set the Button role.
   * 
   * @param { ButtonRole } value - button role
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice 
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  role(value: ButtonRole): ButtonAttribute;

  /**
   * Text color.
   *
   * @param { ResourceColor } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Text color.
   *
   * @param { ResourceColor } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Text color.
   *
   * @param { ResourceColor } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Text color.
   *
   * @param { ResourceColor } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor(value: ResourceColor): ButtonAttribute;

  /**
   * Text size.
   *
   * @param { Length } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Text size.
   *
   * @param { Length } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Text size.
   *
   * @param { Length } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Text size.
   *
   * @param { Length } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize(value: Length): ButtonAttribute;

  /**
   * Font weight.
   *
   * @param { number | FontWeight | string } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Font weight.
   *
   * @param { number | FontWeight | string } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Font weight.
   *
   * @param { number | FontWeight | string } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Font weight.
   *
   * @param { number | FontWeight | string } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight(value: number | FontWeight | string): ButtonAttribute;

  /**
   * Font style.
   *
   * @param { FontStyle } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Font style.
   *
   * @param { FontStyle } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Font style.
   *
   * @param { FontStyle } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Font style.
   *
   * @param { FontStyle } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontStyle(value: FontStyle): ButtonAttribute;

  /**
   * Font family.
   *
   * @param { string | Resource } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Font family.
   *
   * @param { string | Resource } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Font family.
   *
   * @param { string | Resource } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Font family.
   *
   * @param { string | Resource } value
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFamily(value: string | Resource): ButtonAttribute;

  /**
   * Set the content modifier of button.
   *
   * @param { ContentModifier<ButtonConfiguration> } modifier - The content modifier of button.
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  contentModifier(modifier: ContentModifier<ButtonConfiguration>): ButtonAttribute;

  /**
   * Set button label style.
   *
   * @param { LabelStyle } value - The label style configuration on button.
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set button label style.
   *
   * @param { LabelStyle } value - The label style configuration on button.
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  labelStyle(value: LabelStyle): ButtonAttribute;
  
  /**
   * Set button label style.
   *
   * @param { ButtonLabelStyle } value - The label style configuration on button.
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  labelStyle(value: ButtonLabelStyle): ButtonAttribute;

  /**
   * Sets the minimum zoom-out ratio of the button text.
   *
   * @param { number | Resource } scale
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  /**
   * Sets the minimum zoom-out ratio of the button text.
   *
   * @param { number | Resource } scale
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  minFontScale(scale: number | Resource): ButtonAttribute;

  /**
   * Sets the maximum magnification of the button text.
   *
   * @param { number | Resource  } scale
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  /**
   * Sets the maximum magnification of the button text.
   *
   * @param { number | Resource  } scale
   * @returns { ButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  maxFontScale(scale: number | Resource): ButtonAttribute;
}

/**
 * Defines Button Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Button Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Button Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Button Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Button: ButtonInterface;

/**
 * Defines Button Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Button Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Button Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Button Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const ButtonInstance: ButtonAttribute;
