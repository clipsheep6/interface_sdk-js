/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { DataAbilityHelper } from './ability/dataAbilityHelper';
import { NotificationRequest } from './notification/notificationRequest';
import { WantAgent } from "./@ohos.wantAgent";

/**
 * A Particle Ability represents an ability with service.
 * @name particleAbility
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet
 * @permission N/A
 */
declare namespace particleAbility {
  /**
   * Service ability uses this method to start a specific ability.
   *
   * @devices phone, tablet
   * @since 7
   * @sysCap AAFwk
   * @param parameter Indicates the ability to start.
   * @return -
   */
  function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<void>): void;
  function startAbility(parameter: StartAbilityParameter): Promise<void>;

  /**
   * Destroys this service ability.
   *
   * @devices phone, tablet
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  function terminateSelf(callback: AsyncCallback<void>): void;
  function terminateSelf(): Promise<void>;

  /**
   * Obtains the dataAbilityHelper.
   *
   * @devices phone, tablet
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the path of the file to open.
   * @return Returns the dataAbilityHelper.
   */
  function acquireDataAbilityHelper(uri: string): DataAbilityHelper;

  /**
   * Service ability uses this method to request keep running in background.
   * note this is old api. will be deprecated in furture api version
   *
   * @devices phone, tablet
   * @since 7
   * @sysCap AAFwk
   * @param id Indicates the declared background mode
   * @param request the notification related to the this service.
   * @return -
   * @deprecated
   */
   function startBackgroundRunning(id: number, request: NotificationRequest, callback: AsyncCallback<void>): void;
   function startBackgroundRunning(id: number, request: NotificationRequest): Promise<void>;

   /**
   * Service ability uses this method to request keep running in background.
   * system will publish a notification related to the this service when condition is met.
   * each ability will only allowed to declare one type background mode.
   *
   * @devices phone, tablet
   * @since 8
   * @sysCap AAFwk
   * @param wantAgent Indicates which ability to start when user click the notification.
   * @return -
   */
  function startBackgroundRunning(wantAgent: WantAgent, callback: AsyncCallback<void>): void;
  function startBackgroundRunning(wantAgent: WantAgent): Promise<void>;

  /**
   * Service ability uses this method to request cancel running in background.
   *
   * @devices phone, tablet
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
   function cancelBackgroundRunning(callback: AsyncCallback<void>): void;
   function cancelBackgroundRunning(): Promise<void>;
}
export default particleAbility;
