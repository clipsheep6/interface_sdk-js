/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file Defines the halfScreen launch component
 * @kit ArkUI
 */

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import { Callback, ErrorCallback } from '@ohos.base';

/**
 * Declare component HalfScreenLaunchComponent
 * @struct { HalfScreenLaunchComponent }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18
 */
@Component
export declare struct HalfScreenLaunchComponent {
  /**
   * Sets the component content.
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  @BuilderParam content: Callback<void>;
  /**
   * Indicates atomic service appId.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  appId: string;
  /**
   * Indicates the atomic service start options.
   * @type { ?AtomicServiceOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  options?: AtomicServiceOptions;
    /**
    * Indicates the callback of onError.
    * @type { ?ErrorCallback }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 18
    */
    onError?: ErrorCallback;
    /**
    * Indicates the callback of onTerminated.
    * @type { ?Callback<TerminationInfo> }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 18
    */
    onTerminated?: Callback<TerminationInfo>;

  /**
   * Indicates the callback of onReceive.
   * @type { ?Callback<Record<string, Object>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  onReceive?: Callback<Record<string, Object>>;
}