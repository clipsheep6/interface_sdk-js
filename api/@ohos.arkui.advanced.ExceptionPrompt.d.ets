/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * Control type of  Network hardware  of ExceptionPrompt.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export declare enum HardwareStatus {
  /**
   * ON of HardwareStatus.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  ON = 0,
  /**
   * OFF of HardwareStatus.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  OFF = 1
}
/**
 * Control margin status of  ExceptionPrompt
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export declare enum MarginType {
  /**
   * DEFAULT_MARGIN of MarginType.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  DEFAULT_MARGIN = 0,
  /**
   * FIT_MARGIN of MarginType.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  FIT_MARGIN = 1,
}

/**
 * Configuration parameter of ExceptionPrompt.
 * @interface PromptOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export interface PromptOptions {
  /**
   * hardwareStatus of PromptOptions.
   * @type {HardwareStatus}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  hardwareStatus: HardwareStatus;
  /**
   * icon of PromptOptions.
   * @type {?ResourceStr}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  icon?: ResourceStr;
  /**
   * tip of PromptOptions.
   * @type {?ResourceStr}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  tip?: ResourceStr;
  /**
   * Unavailable resource of PromptOptions.
   * @type {MarginType}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  marginState: MarginType;
  /**
   * Right icon button text of PromptOptions.
   * @type {ResourceStr}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  touchText?: ResourceStr;
  /**
   * The icon button on the right is hidden of PromptOptions.
   * @type {boolean}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  isTouchShow?: boolean;
  /**
   * Distance from the top of PromptOptions.
   * @type {number}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  positionTop:number
  /**
   * Control concealment of PromptOptions.
   * @type {boolean}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  isShow?:boolean
}
/**
 * Declare struct ExceptionPrompt
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
@Component
export declare struct ExceptionPrompt {
  /**
   * Options of ExceptionPrompt.
   * @type { PromptOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  @Prop options: PromptOptions;
  /**
   * Callback when clicking the text on the left.
   * @type {?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  onReconnectionCallback?: () => void;
  /**
   * Callback when click Set network.
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  onConfigureCallback?: () => void;
  /**
   * Build function of ExceptionPrompt.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  build(): void;
}
