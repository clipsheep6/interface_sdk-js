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

/**
 * The declare of selectOption.
 *
 * @interface SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The declare of selectOption.
 *
 * @interface SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The declare of selectOption.
 *
 * @interface SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface SelectOption {
  /**
   * Option string.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Option string.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Option string.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  value: ResourceStr;

  /**
   * Option icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Option icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Option icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  icon?: ResourceStr;
}

/**
 * Provides the select interface.
 *
 * @interface SelectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides the select interface.
 *
 * @interface SelectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides the select interface.
 *
 * @interface SelectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface SelectInterface {
  /**
   * Called when the select is set.
   *
   * @param { Array<SelectOption> } options
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the select is set.
   *
   * @param { Array<SelectOption> } options
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the select is set.
   *
   * @param { Array<SelectOption> } options
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (options: Array<SelectOption>): SelectAttribute;
}

/**
 * The enum for arrow position in the select
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The enum for arrow position in the select
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ArrowPosition {
  /**
   * The value of arrow position end
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The value of arrow position end
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  END = 0,

  /**
   * The value of arrow position start
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The value of arrow position start
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  START = 1
}

/**
 * The type of alignment between select and menu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * The type of alignment between select and menu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum MenuAlignType {
  /**
   * The value of menu align type start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The value of menu align type start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  START,
  /**
   * The value of menu align type center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The value of menu align type center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  CENTER,
  /**
   * The value of menu align type end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The value of menu align type end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  END
}

/**
 * Defines the callback type used in onSelect.
 * 
 * @typedef { function } OnSelectHandler
 * @param { number } index
 * @param { string } value
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnSelectHandler = (index: number, value: string) => void;

/**
 * The commonMethod of select.
 *
 * @extends CommonMethod<SelectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The commonMethod of select.
 *
 * @extends CommonMethod<SelectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The commonMethod of select.
 *
 * @extends CommonMethod<SelectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class SelectAttribute extends CommonMethod<SelectAttribute> {
  /**
   * Sets the serial number of the select item, starting from 0.
   *
   * @param { number } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the serial number of the select item, starting from 0.
   *
   * @param { number } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the serial number of the select item, starting from 0.
   *
   * @param { number | Resource } value - the serial number of the select item.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the serial number of the select item, starting from 0.
   *
   * @param { Optional<number | Resource> } value - the serial number of the select item.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selected(value: Optional<number | Resource>): SelectAttribute;

  /**
   * Sets the text display of the select button itself.
   *
   * @param { string } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text display of the select button itself.
   *
   * @param { string } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text display of the select button itself.
   *
   * @param { ResourceStr } value - the text display of the select button itself.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the text display of the select button itself.
   *
   * @param { Optional<ResourceStr> } value - the text display of the select button itself.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  value(value: Optional<ResourceStr>): SelectAttribute;

  /**
   * Sets the text properties of the select button itself.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text properties of the select button itself.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text properties of the select button itself.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the text properties of the select button itself.
   *
   * @param { Optional<Font> } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  font(value: Optional<Font>): SelectAttribute;

  /**
   * Sets the text color of the select button itself.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text color of the select button itself.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text color of the select button itself.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the text color of the select button itself.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fontColor(value: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the background color of the selected items in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the background color of the selected items in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the background color of the selected items in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the background color of the selected items in the select.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedOptionBgColor(value: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the text style of the selected items in the select.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text style of the selected items in the select.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text style of the selected items in the select.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the text style of the selected items in the select.
   *
   * @param { Optional<Font> } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedOptionFont(value: Optional<Font>): SelectAttribute;

  /**
   * Sets the text color of the selected item in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text color of the selected item in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text color of the selected item in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the text color of the selected item in the select.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selectedOptionFontColor(value: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the background color of the select item.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the background color of the select item.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the background color of the select item.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the background color of the select item.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  optionBgColor(value: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the text style for select items.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text style for select items.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text style for select items.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the text style for select items.
   *
   * @param { Optional<Font> } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  optionFont(value: Optional<Font>): SelectAttribute;

  /**
   * Sets the text color for select items.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text color for select items.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text color for select items.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the text color for select items.
   *
   * @param { Optional<ResourceColor> } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  optionFontColor(value: Optional<ResourceColor>): SelectAttribute;

  /**
   * Callback for selecting an item from the select.
   *
   * @param { function } callback
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback for selecting an item from the select.
   *
   * @param { function } callback
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback for selecting an item from the select.
   *
   * @param { function } callback
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Callback for selecting an item from the select.
   *
   * @param { Optional<OnSelectHandler> } handler
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onSelect(handler: Optional<OnSelectHandler>): SelectAttribute;

  /**
   * Set the space for text and icon in select
   *
   * @param { Length } value - indicates the length of the space
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the space for text and icon in select
   *
   * @param { Length } value - indicates the length of the space
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set the space for text and icon in select
   *
   * @param { Optional<Length> } value - indicates the length of the space
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  space(value: Optional<Length>): SelectAttribute;

  /**
   * Set the layout direction for text and arrow in select
   *
   * @param { ArrowPosition } value - indicates the arrow position in the select
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the layout direction for text and arrow in select
   *
   * @param { ArrowPosition } value - indicates the arrow position in the select
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set the layout direction for text and arrow in select
   *
   * @param { Optional<ArrowPosition> } value - indicates the arrow position in the select
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  arrowPosition(value: Optional<ArrowPosition>): SelectAttribute;

  /**
   * Set the alignment between select and menu.
   *
   * @param { MenuAlignType } alignType - The type of alignment between select and menu.
   * @param { Offset } offset - The offset between select and menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the alignment between select and menu.
   *
   * @param { MenuAlignType } alignType - The type of alignment between select and menu.
   * @param { Offset } offset - The offset between select and menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */ 
  /**
   * Set the alignment between select and menu.
   *
   * @param { Optional<MenuAlignType> } alignType - The type of alignment between select and menu.
   * @param { Offset } offset - The offset between select and menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */ 
  menuAlign(alignType: Optional<MenuAlignType>, offset?: Offset): SelectAttribute;

  /** 
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @param { Dimension | OptionWidthMode } value - The length of option width and decide option width to fit trigger or content.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /** 
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @param { Optional<Dimension | OptionWidthMode> } value - The length of option width and decide option width to fit trigger or content.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  optionWidth(value: Optional<Dimension | OptionWidthMode>): SelectAttribute;

  /** 
   * Set the height of each option.
   * 
   * @param { Dimension } value - The length of option height.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /** 
   * Set the height of each option.
   * 
   * @param { Optional<Dimension> } value - The length of option height.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  optionHeight(value: Optional<Dimension>): SelectAttribute;

  /**
   * set the menu's background color
   *
   * @param { ResourceColor } value - The backgroundColor of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * set the menu's background color
   *
   * @param { Optional<ResourceColor> } value - The backgroundColor of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  menuBackgroundColor(value: Optional<ResourceColor>): SelectAttribute;

  /**
   * set menu background blur Style
   *
   * @param { BlurStyle } value - The BackgroundBlurStyle of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * set menu background blur Style
   *
   * @param { Optional<BlurStyle> } value - The BackgroundBlurStyle of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  menuBackgroundBlurStyle(value: Optional<BlurStyle>): SelectAttribute;

  /**
   * Sets the size for controls within Select Component.
   *
   * @param { Optional<ControlSize> } value - control size
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  controlSize(value: Optional<ControlSize>): SelectAttribute;

  /**
   * Register a ContentModifier for each menu item.
   *
   * @param { Optional<ContentModifier<MenuItemConfiguration>> } modifier - The content modifier of select menu item.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  menuItemContentModifier(modifier: Optional<ContentModifier<MenuItemConfiguration>>): SelectAttribute;
}

/**
 * MenuItemConfiguration used by menu item content modifier.
 *
 * @interface MenuItemConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface MenuItemConfiguration extends CommonConfiguration<MenuItemConfiguration>{
  /**
   * Indicates the text of this menu item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  value: ResourceStr;

  /**
   * Indicates the icon of this menu item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  icon?: ResourceStr;

  /**
   * Indicates whether this menu item is selected or not.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  selected: boolean;

  /**
   * Indicates the index of the menu item.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  index: number;

  /**
   * Select this menu item.
   *
   * @param { number } index - The value of menu item index.
   * @param { string } value - The value of menu item text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  triggerSelect(index: number, value: string): void;
}
/**
 * Defines Select Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Select Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Select Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Select: SelectInterface;

/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const SelectInstance: SelectAttribute;
