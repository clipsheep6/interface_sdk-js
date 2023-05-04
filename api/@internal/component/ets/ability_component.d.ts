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
 * Provide an interface for the ability component.
 * @since 9
 * @systemapi
 */
/**
 * Provide an interface for the ability component.
 * @crossplatform
 * @since 10
 * @systemapi
 */
interface AbilityComponentInterface {
  /**
   * Construct the ability component.
   * Called when the ability component is used.
   * @since 9
   * @systemapi
   */
  /**
   * Construct the ability component.
   * Called when the ability component is used.
   * @crossplatform
   * @since 10
   * @systemapi
   */
  (value: {want: import('../api/@ohos.app.ability.Want').default}): AbilityComponentAttribute;
}

/**
 * Define the attribute functions of ability component.
 * @since 9
 * @systemapi
 */
/**
 * Define the attribute functions of ability component.
 * @crossplatform
 * @since 10
 * @systemapi
 */
declare class AbilityComponentAttribute extends CommonMethod<AbilityComponentAttribute> {
  /**
   * Called when the component is connected to ability.
   * @since 9
   * @systemapi
   */
  /**
   * Called when the component is connected to ability.
   * @crossplatform
   * @since 10
   * @systemapi
   */
  onConnect(callback: () => void): AbilityComponentAttribute;
  /**
   * Called when the component is disconnected.
   * @since 9
   * @systemapi
   */
  /**
   * Called when the component is disconnected.
   * @crossplatform
   * @since 10
   * @systemapi
   */
   onDisconnect(callback: () => void): AbilityComponentAttribute;
}

/**
 * Defines AbilityComponent Component.
 * @since 9
 */
/**
 * Defines AbilityComponent Component.
 * @crossplatform
 * @since 10
 */
declare const AbilityComponent: AbilityComponentInterface;

/**
 * Defines AbilityComponent Component instance.
 * @since 9
 */
/**
 * Defines AbilityComponent Component instance.
 * @crossplatform
 * @since 10
 */
declare const AbilityComponentInstance: AbilityComponentAttribute;
