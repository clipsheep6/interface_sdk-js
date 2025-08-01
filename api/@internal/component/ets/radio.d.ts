/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
import { CommonMethod, ContentModifier, CommonConfiguration, Callback, Bindable } from './common';
import { CustomBuilder } from './builder';
import { ResourceColor } from './units';
/*** endif */

/**
 * Defines the IndicatorType of Radio component
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum RadioIndicatorType {
  /**
   * Tick shape.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  TICK = 0,
  /**
   * Dot shape.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DOT = 1,
    /**
   * custom shape.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  CUSTOM = 2,
}

/**
 * Input parameter for creating a radio box.
 *
 * @interface RadioOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Input parameter for creating a radio box.
 *
 * @interface RadioOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Input parameter for creating a radio box.
 *
 * @interface RadioOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Input parameter for creating a radio box.
 *
 * @interface RadioOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RadioOptions {
  /**
   * Radio group name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Radio group name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Radio group name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Radio group name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  group: string;

  /**
   * Radio name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Radio name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Radio name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Radio name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  value: string;
  /**
   * Indicator Type.
   *
   * @type { ?RadioIndicatorType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  indicatorType?: RadioIndicatorType;
  /**
   * builder for IndicatorType.CUSTOM
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  indicatorBuilder?: CustomBuilder;
}

/**
 * Set radio Style.
 *
 * @interface RadioStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Set radio Style.
 *
 * @interface RadioStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RadioStyle {
  /**
   * Set the background color when the radio box is checked.
   *
   * @type { ?ResourceColor } checkedBackgroundColor - the background color when the radio box is checked.
   * @default #007DFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the background color when the radio box is checked.
   *
   * @type { ?ResourceColor } checkedBackgroundColor - the background color when the radio box is checked.
   * @default #007DFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  checkedBackgroundColor?: ResourceColor;

  /**
   * Set the bolder color when the radio box is unchecked.
   *
   * @type { ?ResourceColor } uncheckedBorderColor - the bolder color when the radio box is unchecked.
   * @default #182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the bolder color when the radio box is unchecked.
   *
   * @type { ?ResourceColor } uncheckedBorderColor - the bolder color when the radio box is unchecked.
   * @default #182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  uncheckedBorderColor?: ResourceColor;

  /**
   * Set the indicator color when the radio box is checked.
   *
   * @type { ?ResourceColor } indicatorColor - the indicator color when the radio box is checked.
   * @default #FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the indicator color when the radio box is checked.
   *
   * @type { ?ResourceColor } indicatorColor - the indicator color when the radio box is checked.
   * @default #FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  indicatorColor?: ResourceColor;
}

/**
 * Provides an interface for creating a radio box.
 *
 * @interface RadioInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides an interface for creating a radio box.
 *
 * @interface RadioInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides an interface for creating a radio box.
 *
 * @interface RadioInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for creating a radio box.
 *
 * @interface RadioInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface RadioInterface {
  /**
   * Called when a radio box is created.
   *
   * @param { RadioOptions } options
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when a radio box is created.
   *
   * @param { RadioOptions } options
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when a radio box is created.
   *
   * @param { RadioOptions } options
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when a radio box is created.
   *
   * @param { RadioOptions } options
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options: RadioOptions): RadioAttribute;
}

/**
 * Callback of radio box selection status changes event.
 * 
 * @typedef {function} OnRadioChangeCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnRadioChangeCallback = (isChecked: boolean) => void;

/**
 * Provides methods for radio method component.
 *
 * @extends CommonMethod<RadioAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides methods for radio method component.
 *
 * @extends CommonMethod<RadioAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides methods for radio method component.
 *
 * @extends CommonMethod<RadioAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides methods for radio method component.
 *
 * @extends CommonMethod<RadioAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class RadioAttribute extends CommonMethod<RadioAttribute> {
  /**
   * Called when the radio box is selected.
   *
   * @param { boolean } value
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the radio box is selected.
   *
   * @param { boolean } value
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the radio box is selected.
   *
   * @param { boolean } value
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the radio box is selected.
   *
   * @param { boolean } value
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  checked(value: boolean): RadioAttribute;

  /**
   * Called when the radio box is selected.
   *
   * @param { Optional<boolean> } isChecked
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */  
  checked(isChecked: Optional<boolean>): RadioAttribute;

  /**
   * Called when the radio box is selected.
   *
   * @param { boolean | undefined | Bindable<boolean> } isChecked
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  checked(isChecked: boolean | undefined | Bindable<boolean>): RadioAttribute;

  /**
   * Called when the radio box selection status changes.
   *
   * @param { function } callback
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the radio box selection status changes.
   *
   * @param { function } callback
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the radio box selection status changes.
   *
   * @param { function } callback
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the radio box selection status changes.
   *
   * @param { function } callback
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onChange(callback: (isChecked: boolean) => void): RadioAttribute;

  /**
   * Called when the radio box selection status changes.
   *
   * @param { Optional<OnRadioChangeCallback> } callback
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */  
  onChange(callback: Optional<OnRadioChangeCallback>): RadioAttribute;

  /**
   * Set the radio style.
   *
   * @param { RadioStyle } value - the radio style.
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the radio style.
   *
   * @param { RadioStyle } value - the radio style.
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  radioStyle(value?: RadioStyle): RadioAttribute;

    /**
   * Set the Configuration of radio.
   *
   * @param { ContentModifier<RadioConfiguration> } modifier - The contentModifier of radio.
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  contentModifier(modifier: ContentModifier<RadioConfiguration>): RadioAttribute;

    /**
   * Set the Configuration of radio.
   *
   * @param { Optional<ContentModifier<RadioConfiguration>> } modifier - The contentModifier of radio.
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */  
  contentModifier(modifier: Optional<ContentModifier<RadioConfiguration>>): RadioAttribute;
}

/**
 * RadioConfiguration used by radio Configuration
 *
 * @extends CommonConfiguration<RadioConfiguration>
 * @interface RadioConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RadioConfiguration extends CommonConfiguration<RadioConfiguration> {
    /**
   * Radio name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  value: string;
  
    /**
   * Called when the radio box is selected.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  checked: boolean;

  /**
   * Called when the radio box selection status changes.
   *
   * @type { Callback<boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  triggerChange: Callback<boolean>;
}

/**
 * Defines Radio Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Radio Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Radio Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Radio Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Radio: RadioInterface;

/**
 * Defines Radio Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Radio Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Radio Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Radio Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const RadioInstance: RadioAttribute;
