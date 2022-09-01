/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AbilityInfo } from "./abilityInfo";
import { ExtensionAbilityInfo } from "./extensionAbilityInfo";
import { Metadata } from './metadata'

/**
 * Obtains configuration information about an module.
 * @typedef HapModuleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export interface HapModuleInfo {
  /**
   * Indicates the name of this hapmodule
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly name: string;

  /**
   * Indicates the icon of this hapmodule
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly icon: string;

   /**
    * Indicates the icon id of this hapmodule
    * @type {number}
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly iconId: number;

   /**
    * Indicates the label of this hapmodule
    * @type {string}
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
   readonly label: string;

   /**
    * Indicates the label id of this hapmodule
    * @type {number}
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
   readonly labelId: number;

  /**
   * Describes the hapmodule
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly description: string;

  /**
   * Indicates the description of this hapmodule
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly descriptionId: number;

  /**
   * Indicates main elementName of the module
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly mainElementName: string;

  /**
   * Obtains configuration information about ability
   * @type {Array<AbilityInfo>}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly abilityInfo: Array<AbilityInfo>;

  /**
   * Obtains configuration information about extension ability
   * @type {Array<ExtensionAbilityInfo>}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly extensionAbilityInfo: Array<ExtensionAbilityInfo>;

   /**
    * Indicates the metadata of ability
    * @type {Array<Metadata>}
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly metadata: Array<Metadata>;

  /**
   * The device types that this hapmodule can run on
   * @type {Array<string>}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
   readonly deviceTypes: Array<string>;

  /**
   * Indicates whether free installation of the hapmodule is supported
   * @type {boolean}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly installationFree: boolean;

   /**
    * Indicates the hash value of the module
    * @type {string}
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly hashValue: string;

  /**
   * Indicates the module source dir of this module
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly moduleSourceDir: string;
}
