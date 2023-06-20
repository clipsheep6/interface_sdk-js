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
 * Provide an interface for the ui extension component
 *
 * @interface UIExtensionComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 10
 */
interface UIExtensionComponentInterface {
    /**
     * Construct the ui extension component.
     * Called when the ui extension component is used.
     *
     * @param { string } action - indicates implicit query fields of the UIExtensionAbility
     * @param { object } parameters - indicates info of the UIExtensionAbility
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    (action: string, parameters?: { [key: string]: any }): UIExtensionComponentAttribute;
  }
  
  /**
   * Define the attribute functions of ui extension component.
   *
   * @extends CommonMethod
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  declare class UIExtensionComponentAttribute extends CommonMethod<UIExtensionComponentAttribute> {
    /**
     * Called when the component is connected to ability.
     *
     * @param { function } Callback function when UIExtensionAbility connects successfully
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    onConnected(callback: () => void): UIExtensionComponentAttribute;
  
    /**
     * Called when the component is disconnected.
     *
     * @param { function } - Callback function when UIExtensionAbility disconnects
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    onDisconnected(callback: () => void): UIExtensionComponentAttribute;
  
    /**
     * Called when the provider sends data
     *
     * @param { function } indicates info of the UIExtensionAbility
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    onResult(
      callback: (info: { code: number; want?: import('../api/@ohos.app.ability.Want').default }) => void
    ): UIExtensionComponentAttribute;
  
    /**
     * Called when loading failed, takes the error messages as input parameter
     *
     * @param { function } indicates info of the UIExtensionAbility
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 10
     */
    onError(callback: (info: { errCode: number; errMsg: string }) => void): UIExtensionComponentAttribute;
  }
  
  /**
   * Defines UIExtensionComponent Component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  declare const UIExtensionComponent: UIExtensionComponentInterface;
  
  /**
   * Defines UIExtensionComponent Component instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 10
   */
  declare const UIExtensionComponentInstance: UIExtensionComponentAttribute;
  