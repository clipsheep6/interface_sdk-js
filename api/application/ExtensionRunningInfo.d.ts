/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { ElementName } from '../bundleManager/ElementName';
import bundle from '../@ohos.bundle.bundleManager';

/**
 * The class of an extension running information.
 *
 * @interface ExtensionRunningInfo
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi hide this for inner system use
 * @since 9
 */
export interface ExtensionRunningInfo {
    /**
    * @permission N/A
    * @default Indicates the extension of the extension info
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    * @since 9
    */
    extension: ElementName;

    /**
    * @permission N/A
    * @default process id
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    * @since 9
    */
    pid: number;

    /**
    * @permission N/A
    * @default user id
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    * @since 9
    */
    uid: number;

    /**
    * @permission N/A
    * @default the name of the process
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    * @since 9
    */
    processName: string;

    /**
    * @permission N/A
    * @default ability start time
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    * @since 9
    */
    startTime: number;

    /**
    * @permission N/A
    * @default All package names under the current process
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    * @since 9
    */
    clientPackage: Array<String>;

    /**
    * @permission N/A
    * @default Enumerates types of the extension info
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    * @since 9
    */
    type: bundle.ExtensionAbilityType;
}