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
import { CommonConfiguration, Callback, CommonMethod, ContentModifier, Optional, Bindable } from './common';
import { CustomBuilder } from './builder';
import { ResourceColor, MarkStyle } from './units';
import { CheckBoxShape } from './enums';
/*** endif */

/**
 * Defines the options of Checkbox.
 *
 * @interface CheckboxOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of Checkbox.
 *
 * @interface CheckboxOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of Checkbox.
 *
 * @interface CheckboxOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of Checkbox.
 *
 * @interface CheckboxOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface CheckboxOptions {
  /**
   * Current name of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Current name of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Current name of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Current name of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  name?: string;

  /**
   * Sets the group of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the group of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the group of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the group of Checkbox.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  group?: string;

  /**
   * Custom builder function.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  indicatorBuilder?: CustomBuilder;
}

/**
 * CheckBoxConfiguration used by content modifier.
 *
 * @extends CommonConfiguration<CheckBoxConfiguration>
 * @interface CheckBoxConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface CheckBoxConfiguration extends CommonConfiguration<CheckBoxConfiguration> {
  /**
   * Current name of checkbox.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  name: string;

  /**
   * Indicates whether the checkbox is selected.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selected: boolean;

  /**
   * Trigger checkbox select change.
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
 * Provides an interface for the Checkbox component.
 *
 * @interface CheckboxInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides an interface for the Checkbox component.
 *
 * @interface CheckboxInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides an interface for the Checkbox component.
 *
 * @interface CheckboxInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for the Checkbox component.
 *
 * @interface CheckboxInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface CheckboxInterface {
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   *
   * @param { CheckboxOptions } options
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   *
   * @param { CheckboxOptions } options
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   *
   * @param { CheckboxOptions } options
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   *
   * @param { CheckboxOptions } options
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options?: CheckboxOptions): CheckboxAttribute;
}

/**
 * Defines a Checkbox callback when onChange.
 * Anonymous Object Rectification.
 *
 * @typedef { function } OnCheckboxChangeCallback
 * @param { boolean } value - selected status
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnCheckboxChangeCallback = (value: boolean) => void;

/**
 * Defines the attribute functions of Checkbox.
 *
 * @extends CommonMethod<CheckboxAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the attribute functions of Checkbox.
 *
 * @extends CommonMethod<CheckboxAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the attribute functions of Checkbox.
 *
 * @extends CommonMethod<CheckboxAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the attribute functions of Checkbox.
 *
 * @extends CommonMethod<CheckboxAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class CheckboxAttribute extends CommonMethod<CheckboxAttribute> {
  /**
   * setting whether checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * setting whether checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * setting whether checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * setting whether checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  select(value: boolean): CheckboxAttribute;

  /**
   * setting whether checkbox is selected.
   *
   * @param { Optional<boolean> } isSelected
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  select(isSelected: Optional<boolean>): CheckboxAttribute;

  /**
   * setting whether checkbox is selected.
   *
   * @param { boolean | undefined | Bindable<boolean> } isSelected
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  select(isSelected: boolean | undefined | Bindable<boolean>): CheckboxAttribute;

  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedColor(value: ResourceColor): CheckboxAttribute;

  /**
   * setting the display color of checkbox.
   *
   * @param { Optional<ResourceColor> } resColor
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedColor(resColor: Optional<ResourceColor>): CheckboxAttribute;

  /**
   * setting the shape of checkbox.
   *
   * @param { CheckBoxShape } value - The configuration of checkbox shape.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
   /**
   * setting the shape of checkbox.
   *
   * @param { CheckBoxShape } value - The configuration of checkbox shape.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  shape(value: CheckBoxShape): CheckboxAttribute;

   /**
   * setting the shape of checkbox.
   *
   * @param { Optional<CheckBoxShape> } shape - The configuration of checkbox shape.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  shape(shape: Optional<CheckBoxShape>): CheckboxAttribute;

  /**
   * Set the display border color of unselected checkbox.
   *
   * @param { ResourceColor } value - The color of border when checkbox unselected.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the display border color of unselected checkbox.
   *
   * @param { ResourceColor } value - The color of border when checkbox unselected.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  unselectedColor(value: ResourceColor): CheckboxAttribute;

  /**
   * Set the display border color of unselected checkbox.
   *
   * @param { Optional<ResourceColor> } resColor - The color of border when checkbox unselected.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  unselectedColor(resColor: Optional<ResourceColor>): CheckboxAttribute;

  /**
   * Set the mark style of checkbox.
   *
   * @param { MarkStyle } value - The style configuration of checkbox mark.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the mark style of checkbox.
   *
   * @param { MarkStyle } value - The style configuration of checkbox mark.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  mark(value: MarkStyle): CheckboxAttribute;

  /**
   * Set the mark style of checkbox.
   *
   * @param { Optional<MarkStyle> } style - The style configuration of checkbox mark.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  mark(style: Optional<MarkStyle>): CheckboxAttribute;

  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the selection status changes.
   * Anonymous Object Rectification.
   *
   * @param { OnCheckboxChangeCallback } callback
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onChange(callback: OnCheckboxChangeCallback): CheckboxAttribute;

  /**
   * Called when the selection status changes.
   *
   * @param { Optional<OnCheckboxChangeCallback> } callback
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onChange(callback: Optional<OnCheckboxChangeCallback>): CheckboxAttribute;

  /**
   * Set the content modifier of checkbox.
   *
   * @param { ContentModifier<CheckBoxConfiguration> } modifier - The content modifier of checkbox.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  contentModifier(modifier: ContentModifier<CheckBoxConfiguration>): CheckboxAttribute;

  /**
   * Set the content modifier of checkbox.
   *
   * @param { Optional<ContentModifier<CheckBoxConfiguration>> } modifier - The content modifier of checkbox.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */  
  contentModifier(modifier: Optional<ContentModifier<CheckBoxConfiguration>>): CheckboxAttribute;
}

/**
 * Defines Checkbox Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Checkbox Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Checkbox Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Checkbox Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Checkbox: CheckboxInterface;

/**
 * Defines Checkbox Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Checkbox Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Checkbox Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Checkbox Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const CheckboxInstance: CheckboxAttribute;
