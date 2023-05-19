/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Enum the icon and text layout direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecSaveButtonLayoutDirection {
  /**
   * Horizontal layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  HORIZONTAL = 0,
  /**
   * Vertical layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  VERTICAL = 1
}

/**
 * Relative position of the icon and text.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecSaveButtonLayoutOrder {
  /**
   * Icon will be placed on the left when horizontal layout is set. Icon will be placed on the top when Vertical layout is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ICON_FIRST = 0,
  /**
   * Text will be placed on the left when horizontal layout is set. Text will be placed on the top when Vertical layout is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEXT_FIRST = 1
}

/**
 * Enum the icon styles.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SaveIconStyle {
  /**
   * Icon filled with the specified color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  FULL_FILLED = 0,
  /**
   * Icon rendered as lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LINES = 1
}

/**
 * Enum the texts that can be displayed on the save button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SaveDescription {
  /**
   * Download
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DOWNLOAD = 0,

  /**
   * Download_Files
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DOWNLOAD_FILES = 1,

  /**
   * Save
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SAVE = 2,

  /**
   * Save Images
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SAVE_IMAGES = 3,

  /**
   * Save Files
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SAVE_FILES = 4,

  /**
   * Download And Share
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DOWNLOAD_AND_SHARE = 5,

  /**
   * Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  RECEIVE = 6,

  /**
   * Continue To Receive
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CONTINUE_TO_RECEIVE = 7,
}

/**
 * Enum the save button background types.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum BackgroundButtonType {
  /**
   * Capsule type (rounded corners default to half the height).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CAPSULE_BACKGROUND = 0,

  /**
   * Round type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CIRCLE_BACKGROUND = 1,

  /**
   * Common type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NORMAL_BACKGROUND = 2
}

/**
 * Declares the interface for setting the save button options.
 *
 * @interface SecSaveButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface SecSaveButtonOptions {
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?SaveIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon?: SaveIconStyle;

  /**
   * Text to be displayed on the icon.
   *
   * @type { ?SaveDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  text?: SaveDescription;

  /**
   * Button background type.
   *
   * @type { ?BackgroundButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  background?: BackgroundButtonType;
}

/**
 * Enum save button click event result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum SecSaveButtonOnClickResult {
  /**
   * Save button click event success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SAVE_BUTTON_CLICK_SUCCESS = 0,
  /**
   * Save button click event is failed because the app can not be granted with save permission.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SAVE_BUTTON_CLICK_GRANT_FAILED = 1
}

/**
 * Defines the interface for setting a save button.
 *
 * @interface SecSaveButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
interface SecSaveButtonInterface {
  /**
   * Creates a save button.
   *
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (): SecSaveButtonAttribute;

  /**
   * Creates a save button with the specified composition. If an attribute is not set, the corresponding element will not be drawn.
   *
   * @param { SecSaveButtonOptions } option - options of the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (option: SecSaveButtonOptions): SecSaveButtonAttribute;
}

/**
 * Defines the attributes of the save button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class SecSaveButtonAttribute {
  /**
   * Icon size.
   *
   * @param { Length } value - Indicates the size of the icon.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  iconSize(value: Length): SecSaveButtonAttribute;

  /**
   * Layout direction of the icon and text.
   *
   * @param { SecSaveButtonLayoutDirection } value - Indicates the layout direction of the icon and the text.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  layoutDirection(value: SecSaveButtonLayoutDirection): SecSaveButtonAttribute;

  /**
   * Layout order of the icon and text.
   *
   * @param { SecSaveButtonLayoutOrder } value - Indicates the layout order of the icon and the text.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  layoutOrder(value: SecSaveButtonLayoutOrder): SecSaveButtonAttribute;

  /**
   * Position of the button.
   *
   * @param { Position } value - Indicates the position of the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  position(value: Position): SecSaveButtonAttribute;

  /**
   * Anchor point of the component for positioning. The top start edge of the component is used as the reference point for offset.
   *
   * @param { Position } value - Indicates the anchor point of the element when it is positioned.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  markAnchor(value: Position): SecSaveButtonAttribute;

  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value - Indicates the offset value.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offset(value: Position): SecSaveButtonAttribute;

  /**
   * Font size of the inner text.
   *
   * @param { Length } value - Indicates the font size of the text in the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontSize(value: Length): SecSaveButtonAttribute;

  /**
   * Font style of the inner text.
   *
   * @param { FontStyle } value - Indicates the font style of the text in the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontStyle(value: FontStyle): SecSaveButtonAttribute;

  /**
   * Font weight of the inner text.
   *
   * @param { number | FontWeight | string } value - Indicates the font weight of the text in the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontWeight(value: number | FontWeight | string): SecSaveButtonAttribute;

  /**
   * Font family of the inner text.
   *
   * @param { string | Resource } value - Indicates the font family of the text in the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontFamily(value: string | Resource): SecSaveButtonAttribute;

  /**
   * Font color of the inner text.
   *
   * @param { ResourceColor } value - Indicates the font color of the text in the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor(value: ResourceColor): SecSaveButtonAttribute;

  /**
   * Color of the icon.
   *
   * @param { ResourceColor } value - Indicates the icon color in the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  iconColor(value: ResourceColor): SecSaveButtonAttribute;

  /**
   * Background color.
   *
   * @param { ResourceColor } value - Indicates the background color of the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  backgroundColor(value: ResourceColor): SecSaveButtonAttribute;

  /**
   * Style of the border.
   *
   * @param { BorderStyle } value - Indicates the border style of the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderStyle(value: BorderStyle): SecSaveButtonAttribute;

  /**
   * Width of the border.
   *
   * @param { Length } value - Indicates the border width of the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderWidth(value: Length): SecSaveButtonAttribute;

  /**
   * Color of the border.
   *
   * @param { ResourceColor } value - Indicates the border color of the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderColor(value: ResourceColor): SecSaveButtonAttribute;

  /**
   * Border radius.
   *
   * @param { Length } value - Indicates the border radius of the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderRadius(value: Length): SecSaveButtonAttribute;

  /**
   * Background padding.
   *
   * @param { Padding | Length } value - Indicates the background padding of the secure save button.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  backgroundPadding(value: Padding | Length): SecSaveButtonAttribute;

  /**
   * Padding between the text and icon.
   *
   * @param { Length } value - Indicates the padding between the text and icon.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textIconPadding(value: Length): SecSaveButtonAttribute;

  /**
   * Trigger a click event when the secure save button is clicked.
   *
   * @param { (result: SecSaveButtonOnClickResult, event?: ClickEvent) => void } event - Indicates the response of the click.
   * @returns { SecSaveButtonAttribute } The attribute of the secure save button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onClick(event: (result: SecSaveButtonOnClickResult, event?: ClickEvent) => void): SecSaveButtonAttribute;
}

/**
 * Defines a button that interacts with the security component service to request the authorization for accessing save data.
 * It's a button added to the UI that allows users to grant the application one-time authorization to access the save information.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const SecSaveButton: SecSaveButtonInterface;

/**
 * Defines a save button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const SecSaveButtonInstance: SecSaveButtonAttribute;
