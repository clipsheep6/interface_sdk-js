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
 * @file
 * @kit ArkUI
 */

/// <reference path="../../../../api/@internal/component/ets/common.d.ts" />
/// <reference path="../../../../api/@internal/component/ets/enums.d.ts" />

/**
 * Provide an interface for the IsolatedComponent, which is used
 * <br/>to render UI asynchronously
 *
 * @interface IsolatedComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
interface IsolatedComponentInterface {
  /**
   * Construct the IsolatedComponent.<br/>
   * Called when the IsolatedComponent is used.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } loader - indicates initialization parameter
   * @returns { IsolatedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  (
    loader: import('../api/@ohos.app.ability.Want').default,
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
   * Called when some error occurred.
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback
   * @returns { IsolatedComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  onError(callback: import('../api/@ohos.base').ErrorCallback): IsolatedComponentAttribute;
}

/**
 * Defines IsolatedComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare const IsolatedComponent: IsolatedComponentInterface;

/**
 * Defines IsolatedComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
declare const IsolatedComponentInstance: IsolatedComponentAttribute;
