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
 * Enumerates the icon styles.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum LocationIconStyle {
  /**
   * Icon filled with the specified color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  FULL_FILLED = 0,
  /**
   * Icon rendered as lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  LINES = 1
}

/**
 * Enumerates the text that can be displayed on the location button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum LocationDescription {
  /**
   * Current Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  CURRENT_LOCATION = 0,

  /**
   * Add Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  ADD_LOCATION = 1,

  /**
   * Select Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  SELECT_LOCATION = 2,

  /**
   * Share Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  SHARE_LOCATION = 3,

  /**
   * Send Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  SEND_LOCATION = 4,

  /**
   * Locating
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  LOCATING = 5,

  /**
   * Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  LOCATION = 6,

  /**
   * Send Current Location
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  SEND_CURRENT_LOCATION = 7,

  /**
   * Relocation
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  RELOCATION = 8,

  /**
   * Punch In
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  PUNCH_IN = 9,

  /**
   * Current Position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  CURRENT_POSITION = 10
}

 /**
   * Declares the interface for setting the location button options.
   *
   * @interface SecLocationButtonOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
 declare interface SecLocationButtonOptions {
  /**
   * Style of the icon to be drawn.
   *
   * @type { ?LocationIconStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  icon?: LocationIconStyle;

  /**
   * Text to be displayed on the button.
   *
   * @type { ?LocationDescription }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  text?: LocationDescription;

  /**
   * Type of the button.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  buttonType?: ButtonType;
 }

  /**
 * Enumerates the click event results of the location button.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
  declare enum SecLocationButtonOnClickResult {
  /**
   * Success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  SUCCESS = 0,
  /**
   * Failure because the application is not temporarily authorized for accessing the current pasteboard data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  TEMPORARY_AUTHORIZATION_FAILED = 1
  }

/**
 * Defines the interface for setting a location button.
 *
 * @interface SecLocationButtonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface SecLocationButtonInterface {
  /**
   * Creates a location button.
   *
   * @returns { SecLocationButtonAttribute } Returns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (): SecLocationButtonAttribute;

  /**
   * Creates a location button with the specified composition.
   * If an attribute is not set, the corresponding element will not be drawn.
   *
   * @param { SecLocationButtonOptions } option - Indicates the options of the location button.
   * @returns { SecLocationButtonAttribute } Returns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (options: SecLocationButtonOptions): SecLocationButtonAttribute;
}

/**
 * Defines the attributes of the location button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface SecLocationButtonAttribute extends SecCompButtonAttribute {
  /**
   * Called when the location button is clicked.
   *
   * @param { (event: ClickEvent, result: SecLocationButtonOnClickResult) => void } event - Indicates the
   * click event result.
   * @returns { SecLocationButtonAttribute } Returns the attribute of the location button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onClick(event: (event: ClickEvent, result: SecLocationButtonOnClickResult) => void): SecLocationButtonAttribute;
}

/**
 * Defines a button that interacts with the security component service to
 * request the authorization for accessing location data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const SecLocationButton: SecLocationButtonInterface;

/**
 * Defines a location button instance for secure access.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const SecLocationButtonInstance: SecLocationButtonAttribute;
