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

/**
 * The extension connection state data.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi hide for inner use.
 * @permission N/A
 */
export default class DlpStateData {
    /**
    * @default Indicates the target ability started by dlp.
    * @since 9
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    */
    targetAbility: ElementName;

    /**
     * The target pid started by dlp.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     */
     targetPid: number;

     /**
      * The target uid started by dlp.
      *
      * @since 9
      * @syscap SystemCapability.Ability.AbilityRuntime.Core
      * @systemapi hide for inner use.
      */
     targetUid: number;

    /**
     * The dlp pid.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     */
    dlpPid: number;

    /**
     * The dlp uid.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     */
    dlpUid: number;

    /**
    * @default dlp application bundle name.
    * @since 9
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @systemapi hide this for inner system use
    */
    dlpBundleName: string;
}