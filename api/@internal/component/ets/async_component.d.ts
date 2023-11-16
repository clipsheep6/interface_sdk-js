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
/// <reference path="../../../../api/@internal/component/ets/common.d.ts" />
/// <reference path="../../../../api/@internal/component/ets/enums.d.ts" />

/**
 * Provide an interface for the AsyncComponent, which is used
 * <br/>to render UI asynchronously
 *
 * @interface AsyncComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
interface AsyncComponentInterface {
  /**
   * Construct the AsyncComponent.<br/>
   * Called when the AsyncComponent is used.
   *
   * @param { import('../../../../api/@ohos.app.ability.Want').default } loader - indicates initialization parameter
   * @returns { AsyncComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  (
    loader: import('../../../../api/@ohos.app.ability.Want').default,
    type: AsyncType
  ): AsyncComponentAttribute;
}

/**
 * Define the attribute functions of AsyncComponent.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare class AsyncComponentAttribute extends CommonMethod<AsyncComponentAttribute> {
  placeholder(
    builder: CustomBuilder
  ): AsyncComponentAttribute;

  onSizeChange(
    event: import('../../../../api/@ohos.base').Callback<{oldValue: Area, newValue: Area}>
  ): AsyncComponentAttribute;

  onTerminated(
    callback: import('../../../../api/@ohos.base').Callback<{
      code: number;
      want?: import('../../../../api/@ohos.app.ability.Want').default;}>
  ): AsyncComponentAttribute;

  onError(
    callback: import('../../../../api/@ohos.base').ErrorCallback
  ): AsyncComponentAttribute;
}

/**
 * Defines AsyncComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare const AsyncComponent: AsyncComponentInterface;

/**
 * Defines AsyncComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare const AsyncComponentInstance: AsyncComponentAttribute;
