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
 * @name Obtains configuration information about an module.
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 *
 */
export interface HapModuleInfo {
  /**
   * @default Indicates the name of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly name: string;

  /**
   * @default Indicates the icon of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly icon: string;

   /**
    * @default Indicates the icon id of this hapmodule
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly iconId: number;

   /**
    * @default Indicates the label of this hapmodule
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
   readonly label: string;

   /**
    * @default Indicates the label id of this hapmodule
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
   readonly labelId: number;

  /**
   * @default Describes the hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly description: string;

  /**
   * @default Indicates the description of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly descriptionId: number;

  /**
   * @default Indicates main elementName of the module
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly mainElementName: string;

  /**
   * @default Obtains configuration information about ability
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly abilityInfo: Array<AbilityInfo>;

  /**
   * @default Obtains configuration information about extension ability
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly extensionAbilityInfo: Array<ExtensionAbilityInfo>;

   /**
    * @default Indicates the metadata of ability
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * 
    */
  readonly metadata: Array<Metadata>;

  /**
   * @default The device types that this hapmodule can run on
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
   readonly deviceTypes: Array<string>;

  /**
   * @default Indicates whether free installation of the hapmodule is supported
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly installationFree: boolean;

   /**
    * @default Indicates the hash value of the module
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly hashValue: string;

  /**
   * @default Indicates the module source dir of this module
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly moduleSourceDir: string;
}
