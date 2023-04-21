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

/**
 * The process data.
 *
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi hide for inner use.
 * @since 8
 */
export default class ProcessData {
    /**
     * The bundle name.
     *
     * @permission N/A
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @since 8
     */
    bundleName: string;

    /**
     * The pid.
     *
     * @permission N/A
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @since 8
     */
    pid: number;

    /**
     * The uid.
     *
     * @permission N/A
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @since 8
     */
    uid: number;

    /**
     * The process state.
     *
     * @permission N/A
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @since 9
     */
    state: number;

    /**
     * Whether the process is continuous task.
     *
     * @permission N/A
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @since 9
     */
    isContinuousTask: boolean;

    /**
     * Whether the process is keep alive.
     *
     * @permission N/A
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @since 9
     */
    isKeepAlive: boolean;
}