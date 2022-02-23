/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @since 7
 * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
 * @permission N/A
 */
export enum AssistantCode {
    OK = 0,
    ERR_UNCONNECTED = 1,
    ERR_INVALID_PARAMETER = 2,
    ERR_SYSTEM_ERROR = 3,
    ERR_EVENT_HANDLER_IS_NOT_SET_UP = 4,
    ERR_ABILITY_TYPE_NOT_SUPPORTED = 5,
    ERR_SIGNATURE_IS_NOT_CONSISTENT = 6,
    ERR_ABILITY_NOT_MATCHED = 7,
    ERR_ABILITY_TERMINATED = 8,
    ERR_DEVICE_OFFLINE = 9,
    ERR_PROCESS_DIED = 10,
    ERR_ABILITY_START_FAILED = 11,
    ERR_VERSION_INCOMPATIBLE = 12,
    ERR_DISTRIBUTED_COMMUNICATION_PERMISSION_DENIED = 13,
    ERR_TIMEOUT = 14,
    ERR_IN_ASSISTING_MODE = 15,
    ERR_NETWORK_TYPE_NOT_SUPPORTED = 16
}