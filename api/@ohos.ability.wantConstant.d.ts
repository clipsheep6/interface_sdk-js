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
 * the constant for action and entity in the want
 * @name wantConstant
 * @since 6
 * @syscap SystemCapability.Ability.AbilityBase
 * @permission N/A
 */
declare namespace wantConstant {
  

  /**
   * the constant for Entity of the want
   * @name Entity
   * @since 6
   * @syscap SystemCapability.Ability.AbilityBase
   * @permission N/A
   */
  export enum Entity {
    /**
     * Indicates the default entity, which is used if the entity is not specified.
     *
     * @since 6
     */
    ENTITY_DEFAULT = "entity.system.default",

    /**
     * Indicates the home screen entity.
     *
     * @since 6
     */
    ENTITY_HOME = "entity.system.home",

    /**
     * Indicates the voice interaction entity.
     *
     * @since 6
     */
    ENTITY_VOICE = "entity.system.voice",

    /**
     * Indicates the browser category.
     *
     * @since 6
     */
    ENTITY_BROWSABLE = "entity.system.browsable",

    /**
     * Indicates the video category.
     */
    ENTITY_VIDEO = "entity.system.video"
  }

  export enum Flags {
    /**
     * Indicates the grant to perform read operations on the URI.
     */
    FLAG_AUTH_READ_URI_PERMISSION = 0x00000001,

    /**
     * Indicates the grant to perform write operations on the URI.
     */
    FLAG_AUTH_WRITE_URI_PERMISSION = 0x00000002,

    /**
     * Returns the result to the source ability.
     */
    FLAG_ABILITY_FORWARD_RESULT = 0x00000004,

    /**
     * Determines whether an ability on the local device can be migrated to a remote device.
     */
    FLAG_ABILITY_CONTINUATION = 0x00000008,

    /**
     * Specifies whether a component does not belong to OHOS.
     */
    FLAG_NOT_OHOS_COMPONENT = 0x00000010,

    /**
     * Specifies whether an ability is started.
     */
    FLAG_ABILITY_FORM_ENABLED = 0x00000020,

    /**
     * Indicates the grant for possible persisting on the URI.
     *
     * @systemapi Hide this for inner system use.
     */
    FLAG_AUTH_PERSISTABLE_URI_PERMISSION = 0x00000040,

    /**
     * Returns the result to the source ability slice.
     *
     * @systemapi Hide this for inner system use.
     */
    FLAG_AUTH_PREFIX_URI_PERMISSION = 0x00000080,

    /**
     * Supports multi-device startup in the distributed scheduling system.
     */
    FLAG_ABILITYSLICE_MULTI_DEVICE = 0x00000100,

    /**
     * Indicates that an ability using the Service template is started regardless of whether the host application has
     * been started.
     */
    FLAG_START_FOREGROUND_ABILITY = 0x00000200,

    /**
     * Indicates the continuation is reversible.
     *
     * @systemapi Hide this for inner system use.
     */
    FLAG_ABILITY_CONTINUATION_REVERSIBLE = 0x00000400,

    /**
     * Install the specified ability if it's not installed.
     */
    FLAG_INSTALL_ON_DEMAND = 0x00000800,

    /**
     * Install the specifiedi ability with background mode if it's not installed.
     */
    FLAG_INSTALL_WITH_BACKGROUND_MODE = 0x80000000,

    /**
     * Indicates the operation of clearing other missions. This flag can be set for the {@code Intent} passed to
     * {@link ohos.app.Context#startAbility} and must be used together with {@link FLAG_ABILITY_NEW_MISSION}.
     */
    FLAG_ABILITY_CLEAR_MISSION = 0x00008000,

    /**
     * Indicates the operation of creating a task on the historical mission stack.
     */
    FLAG_ABILITY_NEW_MISSION = 0x10000000,

    /**
     * Indicates that the existing instance of the ability to start will be reused if it is already at the top of
     * the mission stack. Otherwise, a new ability instance will be created.
     *
     */
    FLAG_ABILITY_MISSION_TOP = 0x20000000
  }
}

export default wantConstant;
