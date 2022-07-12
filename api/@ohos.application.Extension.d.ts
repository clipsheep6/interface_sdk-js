/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import rpc from "./@ohos.rpc";
import Want from './@ohos.application.Want';
import { Configuration } from './@ohos.application.Configuration';

/**
 * class of extension.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 */
export default class Extension {
    /**
     * Called back when an extension is started for initialization.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the want of created extension.
     * @return -
     * @StageModelOnly
     */
    onCreate(want: Want): void;

    /**
     * Called back before an extension is destroyed.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    onDestroy(): void;

    /**
     * Called back when an extension is started.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the want of extension to start.
     * @param startId Indicates the number of times the extension has been started. The {@code startId} is
     *     incremented by 1 every time the extension is started. For example, if the extension
     *     has been started for six times.
     * @return -
     * @StageModelOnly
     */
    onRequest(want: Want, startId: number): void;

    /**
     * Called back when an extension is first connected to an ability.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates connection information about the Extension.
     * @systemapi hide for inner use.
     * @return Returns the proxy of the extension.
     * @StageModelOnly
     */
    onConnect(want: Want): rpc.RemoteObject;

    /**
     * Called back when all abilities connected to an extension are disconnected.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates disconnection information about the extension.
     * @return -
     * @StageModelOnly
     */
    onDisconnect(want: Want): void;

    /**
     * Called when the system configuration is updated.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param config Indicates the updated configuration.
     * @return -
     * @StageModelOnly
     */
    onConfigurationUpdated(config: Configuration): void;

    /**
     * Called when the system has determined to trim the memory, for example, when the ability is running in the
     * background and there is no enough memory for running as many background processes as possible.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @param level Indicates the memory trim level, which shows the current memory usage status.
     * @return -
     * @StageModelOnly
     */
     onMemoryLevel(level: number): void;
}
