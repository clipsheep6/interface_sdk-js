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
export declare enum HardwareStatusType {
  /**
   * ON of HardwareStatusType.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  ON = 0,
  /**
   * OFF of HardwareStatusType.
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
export declare enum MarginState {
  /**
   * DEFAULT_MARGIN of MarginState.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  DEFAULT_MARGIN = 0,
  /**
   * FIT_MARGIN of MarginState.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  FIT_MARGIN = 1,
}
  /**
   * Control status of  ExceptionPrompt
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
export declare enum PromptType {
   /**
    * Default hiding state of PromptType.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 11
    */
    DEFAULT_HIDE = 0,
    /**
     * The network is disconnected of PromptType.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    NETWORK_NOT_CONNECTED = 1,
    /**
     * Poor network state of PromptType.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    NETWORK_CONNECTED_UNSTABLE = 2,
    /**
     * The server status cannot be connected of PromptType.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    UNSTABLE_CONNECT_SERVER = 3,
    /**
     * There is a network but the content status cannot be obtained of PromptType.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    CUSTOM_NETWORK_TIPS = 4,
    /**
     * Customize the prompt content status of PromptType.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    CUSTOM_TIPS = 5
}
 /**
  * Configuration parameter of ExceptionPrompt.
  * @interface Options
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 11
  */
export interface PromptOptions {
    /**
     * hardwareStatus of PromptOptions.
     * @type {HardwareStatusType}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    hardwareStatus: HardwareStatusType;
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
     * @type {?ResourceStr}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    networkTip?: ResourceStr;
    /**
     * Margin status of PromptOptions.
     * @type {MarginState}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    marginState: MarginState;
}
/**
 * Declare struct ExceptionPrompt
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
@Component
export declare struct ExceptionPrompt {
    /**
     * type of ExceptionPrompt.
     * @type { PromptType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    @Prop type: PromptType;
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
    onReconnection?: () => void;
    /**
     * Callback when click Set network.
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    onConfigureNetwork?: () => void;
    /**
     * Build function of ExceptionPrompt.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    build(): void;
}
