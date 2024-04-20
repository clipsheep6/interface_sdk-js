/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file Defines the isolated component
 * @kit ArkUI
 */

/**
 * This interface is used to set the options for IsolatedComponentAttribute during construction
 *
 * @interface IsolatedOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare interface IsolatedOptions {
  /**
   * Indicates hapPath where abc is located.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  hapPath: string;
  /**
   * Indicates abc Path which need to run.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  abcPath: string;
  /**
   * Indicates entryPoint of the abc.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  entryPoint: string;
  /**
   * Indicates entryPoint of the abc.
   * @type { import('../api/@ohos.worker').worker } worker - worker which run abc
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  worker: import('../api/@ohos.worker').worker;
}

/**
 * Provide an interface for the IsolatedComponent, which is used
 * <br/>to render UI of other ABC
 *
 * @interface IsolatedComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12
 */
interface IsolatedComponentInterface {
  /**
   * Construct the IsolatedComponent.<br/>
   * Called when the IsolatedComponent is used.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } want - indicates the want of IsolatedAbility
   * @param { IsolatedOptions } [option] - Construction configuration of IsolatedComponentAttribute
   * @returns { IsolatedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12
   */
  (
    options: IsolatedOptions
  ): IsolatedComponentAttribute;
}

/**
 * Define the attribute functions of IsolatedComponent.
 *
 * @extends CommonMethod<IsolatedComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare class IsolatedComponentAttribute extends CommonMethod<IsolatedComponentAttribute> {
  /**
   * @param { import('../api/@ohos.base').ErrorCallback } callback
   * - called when some error occurred except disconnected from IsolatedAbility.
   * @returns { IsolatedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  onError(
    callback: import('../api/@ohos.base').ErrorCallback
  ): IsolatedComponentAttribute;
}

/**
 * Defines IsolatedComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12
 */
declare const IsolatedComponent: IsolatedComponentInterface;

/**
 * Defines IsolatedComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12
 */
declare const IsolatedComponentInstance: IsolatedComponentAttribute;
