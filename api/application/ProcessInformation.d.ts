/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

/*** if arkts 1.1 */
import type appManager from '../@ohos.app.ability.appManager';
/*** endif */
/*** if arkts 1.2 */
import appManager from '../@ohos.app.ability.appManager';
/*** endif */
import bundleManager from '../@ohos.bundle.bundleManager';

/**
 * The class of an process information.
 *
 * @typedef ProcessInformation
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9
 */
/**
 * The class of an process information.
 *
 * @typedef ProcessInformation
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform
 * @since 10
 */
/**
 * The class of an process information.
 *
 * @typedef ProcessInformation
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface ProcessInformation {
  /**
   * @type { number }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 9
   */
  /**
   * @type { number }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 10
   */
  /**
   * @type { number }
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  pid: number;

  /**
   * @type { number }
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9
   */
  /**
   * @type { number }
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  uid: number;

  /**
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 9
   */
  /**
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 10
   */
  /**
   * @type { string }
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  processName: string;

  /**
   * @type { Array<string> }
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 9
   */
  /**
   * @type { Array<string> }
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @since 10
   */
  /**
   * @type { Array<string> }
   * @default an array of the bundleNames running in the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  bundleNames: Array<string>;

  /**
   * The process state.
   *
   * @type { appManager.ProcessState }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 10
   */
  /**
   * The process state.
   *
   * @type { appManager.ProcessState }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  state: appManager.ProcessState;

  /**
   * The bundle type of the process.
   *
   * @type { bundleManager.BundleType }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  bundleType: bundleManager.BundleType;

  /**
   * The app clone index of current process if app is multi app mode.
   * @type { ?number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  appCloneIndex?: number;
}
