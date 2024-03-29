/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import AbilityStageContext from './application/AbilityStageContext';
import StartupTaskDispatcher from './@ohos.app.appstartup.StartupTaskDispatcher';

/**
 * @file
 * @kit AbilityKit
 */

/**
 * The base class of startup task.
 * 
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12
 */
export default class StartupTask {
  /**
   * Indicates startup task dispatcher.
   *
   * @type { StartupTaskDispatcher }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12
   */
  dispatcher: StartupTaskDispatcher;

  /**
   * Called when specific dependent task complete.
   *
   * @param { string } dependence - Indicates name of specific dependent startup task.
   * @param { Object } result - Indicates result of specific dependent startup task.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12
   */
  onDependenceCompleted?(dependence: string, result: Object): void;

  /**
   * Initializes current startup task.
   * A developer could override this function to init current task and return a result for other tasks.
   *
   * @param { AbilityStageContext } context - Indicates ability stage context.
   * @returns { Promise<Object> } The result of initialization.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12
   */
  init(context: AbilityStageContext): Promise<Object>;

  /**
   * Obtains whether current startup task need to dispatch manually.
   *
   * @returns { boolean } Returns whether current startup task need to dispatch manually.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12
   */
  isManualDispatch?(): boolean;
}
