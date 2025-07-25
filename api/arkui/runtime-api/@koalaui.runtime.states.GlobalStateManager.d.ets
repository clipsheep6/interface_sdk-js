/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */

import { ArrayState, Equivalent, MutableState, StateManager, ValueTracker } from '@koalaui.runtime.states.State'
export declare class GlobalStateManager {
    static current: StateManager | undefined
    static get instance(): StateManager
    static reset(): void
}
export declare function updateStateManager(manager: StateManager = GlobalStateManager.instance): void
export declare function callScheduledCallbacks(manager: StateManager = GlobalStateManager.instance): void
export declare function scheduleCallback(
    callback?: () => void,
    manager: StateManager = GlobalStateManager.instance): void
export declare function mutableState<T>(
    value: T,
    equivalent?: Equivalent<T>,
    tracker?: ValueTracker<T>): MutableState<T>
export declare function arrayState<T>(array?: ReadonlyArray<T>, equivalent?: Equivalent<T>): ArrayState<T>
