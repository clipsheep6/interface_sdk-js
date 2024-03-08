/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AbilityKit
 */

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import type Want from './@ohos.app.ability.Want';


/**
 * The class of an FlotWindowExtensionAbility.
 *
 * @namespace FlotWindowExtensionAbility
 * @syscap SystemCapability.Ability.FlotWindowExtensionAbility
 * @since 10
 */
export default class FloatWindowExtensionAbility {
  /**
   * Called back when a float window extension is started for initialization.
   *
   * @param { Want } want - Indicates the want info of the UI extension.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onCreate(want: Want): void;

  /**
   * Called back when a PromptAction is started for initialization.
   *
   * @param { Want } want - Indicates the want info of the UI extension.
   * @param { meta } session - Indicates the session of the meta.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onPromptActionCreate(want: Want, meta: meta): void;

  /**
   * Called back when a float window extension is started.
   *
   * @param { Want } want - Indicates the want info of the UI extension.
   * @param { number } startId - Indicates the number of times the service extension has been started.
   *                             The {@code startId} is incremented by 1 every time the service extension is started.
   *                             For example, if the service extension has been started for six times.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onRequest(want: Want, startId: number): void;

  /**
   * Called back when a float window is created.
   *
   * @param { window.Window } window Current Window instance.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onWindowReady(window: window.window): void;

  /**
   * Called back when the system configuration is updated.
   *
   * @param { Configuration } config - Indicates the new configuration.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onConfigurationUpdated(newConfig: Configuration): void;

  /**
   * Called back when an UI extension session is created.
   *
   * @param { Want } want - Indicates the want info of the UI extension.
   * @param { UIExtensionContentSession } session - Indicates the session of the UI extension page.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onSessionCreate(want: Want, session: UIExtensionContentSession): void;

  /**
   * Called back when opacity is updated.
   *
   * @param { number } opacity Interval is 0.f-1.f.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onOpacityUpdated(opacity: number): void;

  /**
   * Called back when view size width is updated.
   *
   * @param { number } opacity Interval is 0.f-1.f.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onSizeWidthUpdated(adWidth: number): void;

  /**
   * Called back when view size height is updated.
   *
   * @param { number } opacity Interval is 0.f-1.f.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onSizeHeightUpdated(adHeight: number): void;

  /**
   * Called back before an UI extension is destroyed.
   *
   * @returns { void | Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  onDestroy(): void | Promise<void>;
}
