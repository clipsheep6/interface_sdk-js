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
 * @file Defines the inner fullScreen launch component for system applications
 * @kit ArkUI
 */

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import Callback from '@ohos.base';

/**
 * Declare component InnerFullScreenLaunchComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12
 */
@Component
export declare struct InnerFullScreenLaunchComponent {
  /**
   * Sets the component content.
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12
   */
  @BuilderParam content: Callback<void>;

  /**
   * Sets the component Controller.
   * @type { LaunchController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi  
   * @since 12
   */
  controller: LaunchController;

  /**
   * Indicates the callback of onReceive.
   * @type { ?Callback<Record<string, Object>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   */
  onReceive?: Callback<Record<string, Object>>;
}

/**
 * Declare type LaunchController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12
 */
export declare class LaunchController {

  /**
   * Function to launch atomicservice.
   *
   * @type { LaunchAtomicServiceCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12
   **/
  public launchAtomicService: LaunchAtomicServiceCallback;
}


/**
 * Callback for launch atomicservice.
 *
 * @typedef { function } LaunchAtomicServiceCallback
 * @param { string } appId - appId of atomicservice.
 * @param { AtomicServiceOptions } [options] - options that could be empty.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12
 **/
export declare type LaunchAtomicServiceCallback = (appId: string, options?: AtomicServiceOptions) => void;