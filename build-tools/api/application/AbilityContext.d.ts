/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
import { AbilityInfo } from "../bundle/abilityInfo";
import { AbilityResult } from "../ability/abilityResult";
import { AsyncCallback } from "../basic";
import { HapModuleInfo } from "../bundle/hapModuleInfo";
import Context from "./Context";
import Want from "../@ohos.application.Want";
import StartOptions from "../@ohos.application.StartOptions";
import PermissionRequestResult from "./PermissionRequestResult";
import { Configuration } from '../@ohos.application.Configuration';
import Caller from '../@ohos.application.Ability';
/**
 * The context of an ability. It allows access to ability-specific resources.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 * @StageModelOnly
 */
export default class AbilityContext extends Context {
    /**
     * Indicates configuration information about an ability.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    abilityInfo: AbilityInfo;
    /**
     * Indicates configuration information about an module.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    currentHapModuleInfo: HapModuleInfo;
    /**
     * Indicates configuration information.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    config: Configuration;
    /**
     * Starts a new ability.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the ability to start.
     * @param options Indicates the start options.
     * @return -
     * @StageModelOnly
     */
    startAbility(want: Want, callback: AsyncCallback<void>): void;
    startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;
    startAbility(want: Want, options?: StartOptions): Promise<void>;
    /**
     * Get the caller object of the startup capability
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the ability to start.
     * @return Returns to the Caller interface on success Returns empty or undefined on failure
     * @StageModelOnly
     */
    startAbilityByCall(want: Want): Promise<Caller>;
    /**
     * Starts an ability and returns the execution result when the ability is destroyed.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the ability to start.
     * @param options Indicates the start options.
     * @return Returns the {@link AbilityResult}.
     * @StageModelOnly
     */
    startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>): void;
    startAbilityForResult(want: Want, options: StartOptions, callback: AsyncCallback<AbilityResult>): void;
    startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>;
    /**
     * Destroys this Page ability.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @return -
     * @StageModelOnly
     */
    terminateSelf(callback: AsyncCallback<void>): void;
    terminateSelf(): Promise<void>;
    /**
     * Sets the result code and data to be returned by this Page ability to the caller
     * and destroys this Page ability.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param parameter Indicates the result to return.
     * @return -
     * @StageModelOnly
     */
    terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;
    terminateSelfWithResult(parameter: AbilityResult): Promise<void>;
    /**
     * Set mission label of current ability.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param label The label of ability that showed in recent missions.
     * @StageModelOnly
     */
    setMissionLabel(label: string, callback: AsyncCallback<void>): void;
    setMissionLabel(label: string): Promise<void>;
    /**
    * Requests certain permissions from the system.
    *
    * @since 9
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @param permissions Indicates the list of permissions to be requested. This parameter cannot be null or empty.
    * @return Returns the {@link PermissionRequestResult}.
    * @StageModelOnly
    */
    requestPermissionsFromUser(permissions: Array<string>, requestCallback: AsyncCallback<PermissionRequestResult>): void;
    requestPermissionsFromUser(permissions: Array<string>): Promise<PermissionRequestResult>;
    /**
     * Restore window stage data in ability continuation
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param LocalStorage the storage data used to restore window stage
     * @StageModelOnly
     */
    restoreWindowStage(localStorage: LocalStorage): void;
    /**
     * check to see ability is in terminating state.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @return Returns true when ability is in terminating state, else returns false.
     * @StageModelOnly
     */
    isTerminating(): boolean;
}
