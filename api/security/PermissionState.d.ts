/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Enumerates the permission oper state.
 *
 * @enum { number }
 * @syscap SystemCapability.Security.AccessToken
 * @StageModelOnly
 * @atomicservice
 * @since 12
 */
declare enum PermissionOperState {
  /**
   * Permission has been set, only can change it in settings
   *
   * @syscap SystemCapability.Security.AccessToken
   * @since 12
   */
  SETTING_OPER = -1,

  /**
   * Permission has been granted, no need to do anything
   *
   * @syscap SystemCapability.Security.AccessToken
   * @since 12
   */
  PASS_OPER = 0,

  /**
   * Permission has not been operated
   *
   * @syscap SystemCapability.Security.AccessToken
   * @atomicservice
   * @since 12
   */
  DYNAMIC_OPER = 1,

  /**
   * Invalid operation, something is wrong, see in md files
   *
   * @syscap SystemCapability.Security.AccessToken
   * @atomicservice
   * @since 11
   */
  INVALID_OPER = 2,

  /**
   * operate is forbidden by system
   *
   * @syscap SystemCapability.Security.AccessToken
   * @atomicservice
   * @since 11
   */
  FORBIDDEN_OPER = 3
}

/**
 * The state of permission.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @StageModelOnly
 * @atomicservice
 * @since 12
 */
export default class PermissionState {
  /**
   * The permissions passed in by the user.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @StageModelOnly
   * @atomicservice
   * @since 12
   */
  permissions: Array<string>;

  /**
   * The states for the corresponding request permissions.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @StageModelOnly
   * @atomicservice
   * @since 12
   */
  states: Array<PermissionOperState>;
}