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
  * Enumerates the collaboration states.
  * @since 7
  * @sysCap SystemCapability.Ability.AbilityBase
  * @permission N/A
  */
export enum AssistantCode {
  /**
   * Operation succeeded.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  OK = 0,

  /**
   * Failed to establish the collaboration session.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_UNCONNECTED = 1,

  /**
   * Invalid parameters.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_INVALID_PARAMETER = 2,

  /**
   * System error.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_SYSTEM_ERROR = 3,

  /**
   * EventHandler is not set.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_EVENT_HANDLER_IS_NOT_SET_UP = 4,

  /**
   * Invalid ability type.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_ABILITY_TYPE_NOT_SUPPORTED = 5,

  /**
   * Signatures don't match.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_SIGNATURE_IS_NOT_CONSISTENT = 6,

  /**
   * No matching ability.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_ABILITY_NOT_MATCHED = 7,

  /**
   * Ability exited.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_ABILITY_TERMINATED = 8,

  /**
   * The device is offline.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_DEVICE_OFFLINE = 9,

  /**
   * The process has been killed.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_PROCESS_DIED = 10,

  /**
   * Failed to start the ability.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_ABILITY_START_FAILED = 11,

  /**
   * Incompatible versions.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_VERSION_INCOMPATIBLE = 12,

  /**
   * The permission request for distributed communication was rejected.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_DISTRIBUTED_COMMUNICATION_PERMISSION_DENIED = 13,

  /**
   * Operation timed out.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_TIMEOUT = 14,

  /**
   * The ability is already in a collaboration session.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_IN_ASSISTING_MODE = 15,

  /**
   * The networking mode is not supported.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityBase
   */
  ERR_NETWORK_TYPE_NOT_SUPPORTED = 16
}