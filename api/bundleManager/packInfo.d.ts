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
 * @name The bundle pack info class.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface BundlePackInfo {
  /**
   * @default This contains package information in pack.info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly packages: Array<PackageConfig>;

  /**
   * @default This contains bundle summary information in pack.info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly summary: PackageSummary;
}

/**
 * @name PackageConfig: the package info class.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface PackageConfig {
  /**
   * @default Indicates the device type of this package
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly deviceType: Array<string>;
  
  /**
   * @default Indicates the name of this package 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly name: string;

  /**
   * @default Indicates the module type of this package
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly moduleType: string;
  
  /**
   * @default Indicates whether this package is delivery and install
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly deliveryWithInstall: boolean;
}

/**
 * @name PackageSummary: the package summary class.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface PackageSummary {
  /**
   * @default Indicates the bundle config info of this package
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly app: BundleConfigInfo;

  /**
   * @default Indicates the modules config info of this package
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly modules: Array<ModuleConfigInfo>;
}

/**
 * @name BundleConfigInfo: the bundle summary class.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface BundleConfigInfo {
  /**
   * @default Indicates the name of this bundle
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly bundleName: string;

  /**
   * @default Indicates the bundle version
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly version: Version;
}

/**
 * @name ExtensionAbility: the extension ability forms class.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
 export interface ExtensionAbility {
  /**
   * @default Indicates the name of this extension ability
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly name: string;

  /**
   * @default Indicates the ability forms info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
   readonly forms: Array<AbilityFormInfo>;
}

/**
 * @name ModuleConfigInfo: the module summary of a bundle.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface ModuleConfigInfo {
  /**
   * @default Indicates the api version
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly apiVersion: ApiVersion;

  /**
   * @default Indicates the devices type
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly deviceTypes: Array<string>;
  
  /**
   * @default Indicates the module distro info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly distro: ModuleDistroInfo;

  /**
   * @default Indicates the abilities info of this module
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly abilities: Array<ModuleAbilityInfo>;

  /**
   * @default Indicates extension abilities info of this module
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
   readonly extensionAbilities: Array<ExtensionAbility>;
}

/**
 * @name ModuleDistroInfo: the bundle info summary class.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface ModuleDistroInfo {
  /**
   * @default Indicates the name of main ability
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly mainAbility: string;

  /**
   * @default Indicates is delivery with install
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly deliveryWithInstall: boolean;
  
  /**
   * @default Indicates is free install
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly installationFree: boolean;

  /**
   * @default Indicates the module name
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly moduleName: string;
  
  /**
   * @default Indicates the module type
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly moduleType: string;
}

/**
 * @name ModuleAbilityInfo: the ability info of a module.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface ModuleAbilityInfo {
  /**
   * @default Indicates the name of this module ability
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly name: string;

  /**
   * @default Indicates the label of this module ability
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly label: string;
  
  /**
   * @default Indicates is visible
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly visible: boolean;

  /**
   * @default Indicates the ability forms info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly forms: Array<AbilityFormInfo>;
}

/**
 * @name AbilityFormInfo: the form info of an ability.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface AbilityFormInfo {
  /**
   * @default Indicates the name of this ability
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly name: string;

  /**
   * @default Indicates the type of this ability
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly type: string;
  
  /**
   * @default Indicates is enabled update
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly updateEnabled: boolean;

  /**
   * @default Indicates the scheduled update time
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly scheduledUpdateTime: string;
  
  /**
   * @default Indicates the update duration
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly updateDuration: number;
  
  /**
   * @default Indicates the ability support dimensions
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly supportDimensions: Array<number>;
  
  /**
   * @default Indicates the ability default dimension
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly defaultDimension: number;
}

/**
 * @name Version: the bundle version class.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface Version {
  /**
   * @default Indicates the min compatible code of this version
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly minCompatibleVersionCode: number;

  /**
   * @default Indicates the name of this version
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly name: string;
  
  /**
   * @default Indicates the code of this version
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly code: number;
}

/**
 * @name ApiVersion: the bundle Api version class.
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi hide this for inner system use
 */
export interface ApiVersion {
  /**
   * @default Indicates the min compatible code of this version
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly releaseType: string;

  /**
   * @default Indicates the name of this version
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly compatible: number;
  
  /**
   * @default Indicates the code of this version
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   */
  readonly target: number;
}
