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

/**
 * AbilityState item.
 *
 * @name AbilityState
 * @since 8
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export enum AbilityState {
    /**
     * @default ability is in its initial state
     * @since 8
     * @SysCap SystemCapability.Appexecfwk
     * @StageModelOnly
     */
    INITIAL = 0,
    /**
     * @default ability is in the foreground state
     * @since 8
     * @SysCap SystemCapability.Appexecfwk
     * @StageModelOnly
     */
    FOREGROUND = 9,
    /**
     * @default ability is in the background state
     * @since 8
     * @SysCap SystemCapability.Appexecfwk
     * @StageModelOnly
     */
    BACKGROUND = 10,
    /**
     * @default ability is in the foregrounding state
     * @since 8
     * @SysCap SystemCapability.Appexecfwk
     * @StageModelOnly
    */
    FOREGROUNDING = 11,
    /**
     * @default ability is in the backgrounding state
     * @since 8
     * @SysCap SystemCapability.Appexecfwk
     * @StageModelOnly
     */
    BACKGROUNDING = 12,
  }