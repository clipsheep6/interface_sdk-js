/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { ElementName } from '../bundle/elementName';
import bundle from '../@ohos.bundle';

/**
 * The extension connection state data.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi hide for inner use.
 * @permission N/A
 */
export default class ConnectStateData {
    /**
    * @default Indicates the callee extension.
    * @since 9
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    */
    extension: ElementName;

    /**
     * The extension pid.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     */
    extensionPid: number;

    /**
     * The extension uid.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     */
    extensionUid: number;

    /**
    * @default Enumerates types of the extension.
    * @since 9
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    */
    extensionType: bundle.ExtensionAbilityType;

    /**
     * The caller pid.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     */
     callerPid: number;

     /**
      * The caller uid.
      *
      * @since 9
      * @syscap SystemCapability.Ability.AbilityRuntime.Core
      * @systemapi hide for inner use.
      */
     callerUid: number;

     /**
      * The caller bundleName.
      *
      * @since 9
      * @syscap SystemCapability.Ability.AbilityRuntime.Core
      * @systemapi hide for inner use.
      */
      callerBundleName: string;
}