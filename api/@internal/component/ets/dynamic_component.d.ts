/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Provide an interface for the DynamicComponent, which is used
 * <br/>to render UI of a remote UIExtensionAbility
 *
 * @interface DynamicComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
interface DynamicComponentInterface {
  /**
   * Construct the DynamicComponent.<br/>
   * Called when the DynamicComponent is used.
   *
   * @param { import('../api/@ohos.app.ability.Want').default } want - indicates the want of UIExtensionAbility
   * @returns { DynamicComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  (
    want: import('../api/@ohos.app.ability.Want').default,
    type: DynamicType
  ): DynamicComponentAttribute;
}

/**
 * Define the attribute functions of DynamicComponent.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare class DynamicComponentAttribute extends CommonMethod<DynamicComponentAttribute> {}

/**
 * Defines DynamicComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare const DynamicComponent: DynamicComponentInterface;

/**
 * Defines DynamicComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
declare const DynamicComponentInstance: DynamicComponentAttribute;
