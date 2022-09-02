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

import { AsyncCallback } from './basic';
import { ApplicationInfo as _ApplicationInfo } from './bundleManager/applicationInfo';
import { Metadata as _Metadata } from './bundleManager/metadata';
import { HapModuleInfo as _HapModuleInfo } from './bundleManager/hapModuleInfo';
import { AbilityInfo as _AbilityInfo } from './bundleManager/abilityInfo';
import { ExtensionAbilityInfo as _ExtensionAbilityInfo, ExtensionAbilityType as _ExtensionAbilityType } from './bundleManager/extensionAbilityInfo';
import { PermissionDef as _PermissionDef } from  './bundleManager/PermissionDef';
import { ElementName as _ElementName }  from './bundleManager/elementName';
import Want from './@ohos.application.want';
import image from './@ohos.multimedia.image';
import * as _BundleInfo from './bundleManager/bundleInfo';

/**
 * This module is used to obtain package information of various applications installed on the current device.
 * @namespace bundleManager
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
declare namespace bundleManager {
  /**
   * 用于查询BundleInfo的枚举值，在调用getBundleInfo、getAllBundleInfo接口时，传入此枚举值，枚举值也可以以或的方式传入多个，以此查询到不同内容的bundleInfo
   * @enum { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  enum BundleFlag {
    /**
     * 该标签用于获取默认的包信息，获取到的包信息不包含SinatureInfo、ApplicationInfo、HapModuleInfo、Ability、ExtensionAbility及Permission的信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_BUNDLE_INFO_DEFAULT = 0x00000000,
    /** 
     * 该标签用于获取包含ApplicationInfo的包信息，获取到的包信息不包含appId、HapModuleInfo、Ability、ExtensionAbility及Permission的信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_BUNDLE_INFO_WITH_APPLICATION = 0x00000001,
    /** 
     * 该标签用于获取包含HapModuleInfo的包信息，获取到的包信息不包含appId、ApplicationInfo、Ability、ExtensionAbility及Permission的信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_BUNDLE_INFO_WITH_HAPMODULE = 0x00000002,
    /** 
     * 该标签用于获取包含Ability的BundleInfo，获取到的包信息不包含appId、ApplicationInfo、HapModuleInfo、Ability、ExtensionAbility及Permission的信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_BUNDLE_INFO_WITH_ABILITY = 0x00000004,
    /**
     * 该标签用于获取包含ExtensionAbility的BundleInfo，获取到的包信息不包含appId、ApplicationInfo、HapModuleInfo、Ability及Permission的信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY = 0x00000008,
    /** 
     * 该标签用于获取包含Permission的BundleInfo，获取到的包信息不包含appId、ApplicationInfo、HapModuleInfo、Ability及ExtensionAbility的信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION = 0x00000010,
    /** 
     * 该标签用于获取包含在ModuleInfo、AbilityInfo中的metadata，不能单独使用，要配合GET_BUNDLE_INFO_WITH_APPLICATION、GET_BUNDLE_INFO_WITH_HAPMODULES、GET_BUNDLE_INFO_WITH_ABILITIES、GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY一起使用
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_BUNDLE_INFO_WITH_METADATA = 0x00000020,
    /**
     * 获取的ability信息包含被禁用的ability信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
     GET_BUNDLE_INFO_WITH_DISABLE = 0x00000040,
    /**
     * 该标签用于获取包含SignatureInfo的BundleInfo，获取到的包信息不包含applicationInfo、hapModuleInfo、ability、extensionAbility及permission的信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_BUNDLE_INFO_WITH_SIGNATURE_INFO = 0x00000080,
  }

  /**
   * 用于查询ApplicationInfo的枚举值，在调用getApplicationInfo、getAllApplicationInfo接口时，传入此枚举值，枚举值也可以以或的方式传入多个，以此查询到不同内容的applicationInfo
   * @enum { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  enum ApplicationFlag {
    /**
     * 该标签用于获取默认的ApplicationInfo信息，获取到的包信息不包含Permission、Metadata、应用被禁及用于证书指纹等信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_APPLICATION_INFO_DEFAULT = 0x00000000,
    /**
     * 获取包含权限的ApplicationInfo信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_APPLICATION_INFO_WITH_PERMISSION = 0x00000001,
    /**
     * 获取包含metadata的ApplicationInfo信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_APPLICATION_INFO_WITH_METADATA = 0x00000002,
    /**
     * 获取的application信息包含被禁用的applicationInfo信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_APPLICATION_INFO_WITH_DISABLE = 0x00000004,
    /**
     * 获取的applicationInfo信息包含证书的指纹
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_APPLICATION_INFO_WITH_CERTIFICATE_FINGERPRINT = 0x0000008,
    /** 
     * 获取包含所有的应用ApplicationInfo
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ALL_APPLICATION_INFO = 0xFFFF0000,
  }

  /**
   * 用于查询AbilityInfo的枚举值，在调用queryAbilityInfo接口时，传入此枚举值，枚举值也可以以或的方式传入多个，以此查询到不同内容的abilityInfo
   * @enum { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  enum AbilityFlag {
    /**
     * 获取默认的AbilityInfo，不包含权限信息、ApplicationInfo、metadata、禁用的AbilityInfo
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_DEFAULT = 0x00000000,
    /** 
     * 获取的Ability信息带有权限的信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_WITH_PERMISSION = 0x00000001,
    /**
     * 获取带有应用的Ability信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_WITH_APPLICATION = 0x00000002,
    /**
     * 获取的Ability信息中带有metadata信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_WITH_METADATA = 0x00000004,
    /**
     * 获取的ability信息包含被禁用的ability信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_WITH_DISABLE = 0x00000008,
  }

  /**
   * 用于查询ExtensionAbilityInfo的枚举值，在调用queryAbilityInfo接口时，传入此枚举值，枚举值也可以以或的方式传入多个，以此查询到不同内容的abilityInfo
   * @enum { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  enum ExtensionAbilityFlag {
    /**
     * 获取默认的ExtensionAbilityInfo，不包含权限信息、ApplicationInfo、metadata、禁用的ExtensionAbilityInfo
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_EXTENSION_ABILITY_INFO_DEFAULT = 0x00000000,
    /** 
     * 获取的ExtensionAbility信息带有权限的信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_EXTENSION_ABILITY_INFO_WITH_PERMISSION = 0x00000001,
    /** 
     * 获取带有应用的ExtensionAbility信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_EXTENSION_ABILITY_INFO_WITH_APPLICATION = 0x00000002,
    /**
     * 获取的ExtensionAbility信息中带有metadata信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_EXTENSION_ABILITY_INFO_WITH_METADATA = 0x00000004,
    /**
     * 获取的ExtensionAbility信息包含被禁用的ExtensionAbility信息
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_EXTENSION_ABILITY_INFO_WITH_DISABLE = 0x00000008,
  }

  /**
   * Obtains bundleInfo based on bundleName, bundleFlags and options.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param { string } bundleName - Indicates the application bundle name to be queried.
   * @param { number } bundleFlags - 查询BundleInfo的过滤标签，使用不同的BundleFlag可以查询到不同的包信息内容，BundleFlag中的值可以以或的方式使用
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @param { AsyncCallback } callback - The callback of getting bundle info result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getBundleInfo(bundleName: string, bundleFlags: number, userId: number, callback: AsyncCallback<BundleInfo>): void;
  function getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void;  

  /**
   * Obtains bundleInfo based on bundleName, bundleFlags and options.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param { string } bundleName - Indicates the application bundle name to be queried.
   * @param { number } bundleFlags - 查询BundleInfo的过滤标签，使用不同的BundleFlag可以查询到不同的包信息内容，BundleFlag中的值可以以或的方式使用
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @returns { Promise<BundleInfo> } The result of getting the bundle info.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getBundleInfo(bundleName: string, bundleFlags: BundleFlag, userId?: number, ): Promise<BundleInfo>;  

  /**
   * Obtains application info based on a given bundle name.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param { string } bundleName - Indicates the application bundle name to be queried.
   * @param { number } appFlags - 查询ApplicationInfo的过滤标签，使用不同的ApplicationFlag可以查询到不同的包信息内容，ApplicationFlag中的值可以以或的方式使用
   * @param { number } userId Indicates the user ID or do not pass user ID.
   * @param { AsyncCallback } callback - The callback of getting application info result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getApplicationInfo(bundleName: string, appFlags: number, userId: number, callback: AsyncCallback<ApplicationInfo>): void;
  function getApplicationInfo(bundleName: string, appFlags: number, callback: AsyncCallback<ApplicationInfo>): void;  

  /**
   * Obtains application info based on a given bundle name.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param { string } bundleName - Indicates the application bundle name to be queried.
   * @param { number } appFlags - 查询ApplicationInfo的过滤标签，使用不同的ApplicationFlag可以查询到不同的包信息内容，ApplicationFlag中的值可以以或的方式使用
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @returns { Promise<ApplicationInfo> } The result of getting the application info.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getApplicationInfo(bundleName: string, appFlags: number, userId?: number): Promise<ApplicationInfo>;  

  /**
   * Obtains BundleInfo of all bundles available in the system.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param { number } bundleFlags - Indicates the flag used to specify information contained in the BundleInfo that will be returned.
   * @param { number } userId - Indicates the user id.
   * @param { AsyncCallback } callback - The callback of getting a list of BundleInfo objects.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getAllBundleInfo(bundleFlags: number, userId: number, callback: AsyncCallback<Array<BundleInfo>>): void;
  function getAllBundleInfo(bundleFlags: number, callback: AsyncCallback<Array<BundleInfo>>): void;  

  /**
   * Obtains BundleInfo of all bundles available in the system.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param { number } bundleFlags - Indicates the flag used to specify information contained in the BundleInfo that will be returned.
   * @param { number } userId - Indicates the user id.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @return { Promise<Array<BundleInfo>> } Returns a list of BundleInfo objects.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getAllBundleInfo(bundleFlags: number, userId?: number): Promise<Array<BundleInfo>>;

  /**
   * Obtains information about all installed applications of a specified user.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param { number } appFlags - Indicates the flag used to specify information contained in the ApplicationInfo objects that will be returned.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @param { AsyncCallback } callback - The callback of getting a list of ApplicationInfo objects.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getAllApplicationInfo(appFlags: number, userId: number, callback: AsyncCallback<Array<ApplicationInfo>>): void;
  function getAllApplicationInfo(appFlags: number, callback: AsyncCallback<Array<ApplicationInfo>>): void;

  /**
   * Obtains information about all installed applications of a specified user.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param { number } appFlags - Indicates the flag used to specify information contained in the ApplicationInfo objects that will be returned.
   * @param { number } userId - Indicates the user ID or do not pass user ID. 
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @returns { Promise<Array<ApplicationInfo>> } Returns a list of ApplicationInfo objects.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getAllApplicationInfo(appFlags: number, userId?: number): Promise<Array<ApplicationInfo>>;

  /**
   * Query the AbilityInfo by the given Want.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限(system_basic权限）
   * @param {Want} want - Indicates the Want containing the application bundle name to be queried.
   * @param { number } abilityFlags - Indicates the flag used to specify information contained in the AbilityInfo objects that will be returned.
   * @param { number } userId - userId Indicates the user ID.
   * @param { AsyncCallback } callback - The callback of quering ability info result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function queryAbilityInfo(want: Want, abilityFlags: number, userId: number, callback: AsyncCallback<Array<AbilityInfo>>): void;
  function queryAbilityInfo(want: Want, abilityFlags: number, callback: AsyncCallback<Array<AbilityInfo>>): void;

  /**
   * Query the AbilityInfo by the given Want.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param {Want} want - Indicates the Want containing the application bundle name to be queried.
   * @param { AbilityFlag } abilityFlags Indicates the flag used to specify information contained in the AbilityInfo objects that will be returned.
   * @param { number } userId - userId Indicates the user ID.
   * @returns { Promise<Array<AbilityInfo>> } Returns a list of AbilityInfo objects.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function queryAbilityInfo(want: Want, abilityFlags: AbilityFlag, userId?: number): Promise<Array<AbilityInfo>>;

  /**
   * Query extension info of by utilizing a Want.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param {Want} want - Indicates the Want containing the application bundle name to be queried.
   * @param {ExtensionAbilityType} extensionType - 指定的extensionType.
   * @param { number } extensionAbilityFlags - Indicates the flag used to specify information contained in the ExtensionInfo objects that will be returned.
   * @param { number } userId - Indicates the user ID.
   * @param { AsyncCallback } callback - The callback of quering extension ability info result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function queryExtensionAbilityInfos(want: Want, extensionType: ExtensionAbilityType, extensionAbilityFlags: number, userId: number, callback: AsyncCallback<Array<ExtensionAbilityInfo>>): void;
  function queryExtensionAbilityInfos(want: Want, extensionType: ExtensionAbilityType, extensionAbilityFlags: number, callback: AsyncCallback<Array<ExtensionAbilityInfo>>): void;

  /**
   * Query the ExtensionAbilityInfo by the given Want.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 (system_basic权限）
   * @param {Want} want - Indicates the Want containing the application bundle name to be queried.
   * @param {ExtensionAbilityType} extensionType - 指定的extensionType.
   * @param { number } extensionAbilityFlags - Indicates the flag used to specify information contained in the ExtensionAbilityInfo objects that will be returned.
   * @param { number } userId - userId Indicates the user ID.
   * @returns { Promise<Array<ExtensionAbilityInfo>> } Returns a list of ExtensionAbilityInfo objects.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function queryExtensionAbilityInfos(want: Want, extensionType: number, extensionAbilityFlags: number, userId?: number): Promise<Array<ExtensionAbilityInfo>>;

  /**
   * Obtains bundle name by the given uid.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { number } uid - Indicates the UID of an application.
   * @param { AsyncCallback } callback - The callback of getting bundle name.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getBundleNameByUid(uid: number, callback: AsyncCallback<string>): void

  /**
   * Obtains bundle name by the given uid.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { number } uid - Indicates the UID of an application.
   * @returns { Promise<string> } Returns the bundle name.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getBundleNameByUid(uid: number): Promise<string>;

  /**
   * Obtains information about an application bundle contained in an ohos Ability Package (HAP).
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hapFilePath - Indicates the path storing the HAP. The path should be the relative path to the data directory of the current application.
   * @param { number } bundleFlags - Indicates the flag used to specify information contained in the BundleInfo object to be returned.
   * @param { AsyncCallback } callback - The callback of getting bundle archive info result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void

  /**
   * Obtains information about an application bundle contained in an ohos Ability Package (HAP).
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED 
   * @param { string } hapFilePath - Indicates the path storing the HAP. The path should be the relative path to the data directory of the current application.
   * @param { number } bundleFlags - Indicates the flag used to specify information contained in the BundleInfo object to be returned.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @return { Promise<BundleInfo> } Returns the BundleInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getBundleArchiveInfo(hapFilePath: string,  bundleFlags: number): Promise<BundleInfo>;

  /**
   * Obtains the Want for starting the main ability of an application based on the
   * given bundle name. The main ability of an application is the ability that has the
   * #ACTION_HOME and #ENTITY_HOME Want filters set in the application's <b>config.json</b> or <b>module.json</b> file.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限 
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { number } userId - Indicates the user ID or do not pass user ID. 
   * @param { AsyncCallback } callback - The callback for starting the application's main ability.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getLaunchWantForBundle(bundleName: string, userId: number, callback: AsyncCallback<Want>): void;
  function getLaunchWantForBundle(bundleName: string, callback: AsyncCallback<Want>): void;

  /**
   * Obtains the Want for starting the main ability of an application based on the
   * given bundle name. The main ability of an application is the ability that has the
   * #ACTION_HOME and #ENTITY_HOME Want filters set in the application's <b>config.json</b> or <b>module.json</b> file.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @permission 如果跨用户访问的话，需要有跨用户访问的权限
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { number } userId - Indicates the user ID or do not pass user ID. 
   * @returns { Promise<Want> } the Want for starting the application's main ability.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getLaunchWantForBundle(bundleName: string, userId?: number): Promise<Want>;

  /**
   * Clears cache data of a specified application.
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - Indicates the bundle name of the application whose cache data is to be cleaned.
   * @param { AsyncCallback } callback - The callback of cleaning bundle cache files result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function cleanBundleCacheFiles(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Clears cache data of a specified application.
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - Indicates the bundle name of the application whose cache data is to be cleaned.
   * @returns { Promise<void> } Clean bundle cache files result
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function cleanBundleCacheFiles(bundleName: string): Promise<void>;

  /**
   * Sets whether to enable a specified application.
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { boolean } isEnabled - The value true means to enable it, and the value false means to disable it.
   * @param { AsyncCallback } callback - The callback of setting app enabled result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function setApplicationEnabled(bundleName: string, isEnable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to enable a specified application.
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { boolean } isEnabled - The value true means to enable it, and the value false means to disable it.
   * @returns { Promise<void> } set app enabled result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function setApplicationEnabled(bundleName: string, isEnable: boolean): Promise<void>;

  /**
   * Sets whether to enable a specified ability.
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param {AbilityInfo} abilityInfo - Indicates information about the ability to set.
   * @param { boolean } isEnabled - The value true means to enable it, and the value false means to disable it.
   * @param { AsyncCallback } callback - The callback of setting ability enabled result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function setAbilityEnabled(info: AbilityInfo, isEnable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to enable a specified ability.
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param {AbilityInfo} abilityInfo - Indicates information about the ability to set.
   * @param { boolean } isEnabled - The value true means to enable it, and the value false means to disable it.
   * @returns { Promise<void> } set ability enabled result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function setAbilityEnabled(info: AbilityInfo, isEnable: boolean): Promise<void>;

  /**
   * Checks whether a specified application is enabled.
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { AsyncCallback } callback - The callback of checking application enabled result. The result is true if enabled, false otherwise.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function isApplicationEnabled(bundleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a specified application is enabled.
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @returns { Promise<boolean> }  Returns true if the application is enabled; returns false otherwise.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function isApplicationEnabled(bundleName: string): Promise<boolean>;

  /**
   * Checks whether a specified ability is enabled.
   * @param {AbilityInfo} info - Indicates information about the ability to check.
   * @param { AsyncCallback } callback - The callback of checking ability enabled result. The result is true if enabled, false otherwise.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function isAbilityEnabled(info: AbilityInfo, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a specified ability is enabled.
   * @param {AbilityInfo} info - Indicates information about the ability to check.
   * @returns { Promise<boolean> } Returns true if the ability is enabled; returns false otherwise.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function isAbilityEnabled(info: AbilityInfo): Promise<boolean>;

  /**
   * Get the permission details by permission name.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - Indicates permission name.
   * @param { AsyncCallback } callback - The callback of get permissionDef objec result.
   * @returns Returns permissionDef object.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>): void;

  /**
   * Get the permission details by permission name.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - Indicates permission name.
   * @returns { Promise<PermissionDef> } Returns permissionDef object.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getPermissionDef(permissionName: string): Promise<PermissionDef>;

  /**
   * Obtains the label of a specified ability.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the bundle name of the application to which the ability belongs.
   * @param { string } moduleName Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
   * @param { AsyncCallback } callback - The callback of getting ability label result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource 
   * @since 9
   */
  function getAbilityLabel(bundleName: string, moduleName: string, abilityName: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains the label of a specified ability.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the bundle name of the application to which the ability belongs.
   * @param { string } moduleName Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @return { Promise<string> } Returns the label representing the label of the specified ability.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @since 9
   */
  function getAbilityLabel(bundleName: string, moduleName: string, abilityName: string): Promise<string>;

  /**
   * Obtains the icon of a specified ability.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param bundleName Indicates the bundle name of the application to which the ability belongs.
   * @param moduleName Indicates the module name.
   * @param abilityName Indicates the ability name.
   * @param { AsyncCallback } callback - The callback of getting ability icon result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @since 9
   */
  function getAbilityIcon(bundleName: string, moduleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Obtains the icon of a specified ability.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName Indicates the bundle name of the application to which the ability belongs.
   * @param { string } moduleName Indicates the module name.
   * @param { string } abilityName Indicates the ability name.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @return { Promise<image.PixelMap> } Returns the PixelMap object representing the icon of the specified ability.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @since 9
   */
  function getAbilityIcon(bundleName: string, moduleName: string, abilityName: string): Promise<image.PixelMap>;

  /**
   * Obtains the profile designated by metadata name, abilityName and moduleName from the current application.
   * @param { string } moduleName - Indicates the moduleName of the application.
   * @param { string } abilityName - Indicates the abilityName of the application.
   * @param { string } metadataName - Indicates the name of metadata in ability.
   * @param { AsyncCallback } callback - The callback of returning string in json-format of the corresponding config file.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getProfileByAbility(moduleName: string, abilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the profile designated by metadata name, abilityName and moduleName from the current application.
   * @param { string } moduleName - Indicates the moduleName of the application.
   * @param { string } abilityName - Indicates the abilityName of the application.
   * @param { string } metadataName - Indicates the name of metadata in ability.
   * @returns { Promise<Array<string>> } Returns string in json-format of the corresponding config file.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getProfileByAbility(moduleName: string, abilityName: string, metadataName?: string): Promise<Array<string>>;

  /**
   * Obtains the profile designated by metadata name, extensionAbilityName and moduleName from the current application.
   * @param { string } moduleName - Indicates the moduleName of the application.
   * @param { string } extensionAbilityName - Indicates the extensionAbilityName of the application.
   * @param { string } metadataName - Indicates the name of metadata in ability.
   * @param { AsyncCallback } callback - The callback of returning string in json-format of the corresponding config file.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the profile designated by metadata name, extensionAbilityName and moduleName from the current application.
   * @param { string } moduleName - Indicates the moduleName of the application.
   * @param { string } extensionAbilityName - Indicates the extensionAbilityName of the application.
   * @param { string } metadataName - Indicates the name of metadata in ability.
   * @returns { Promise<Array<string>> } Returns string in json-format of the corresponding config file.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName?: string): Promise<Array<string>>;

  /**
   * Obtains configuration information about an application.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type ApplicationInfo = _ApplicationInfo;

  /**
   * Indicates the Metadata.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type Metadata = _Metadata;

  /**
   * Obtains configuration information about a bundle.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type BundleInfo = _BundleInfo.BundleInfo;

  /**
   * The scene which is used.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type UsedScene = _BundleInfo.UsedScene;

  /**
   * Indicates the required permissions details defined in file config.json.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type ReqPermissionDetail = _BundleInfo.ReqPermissionDetail;

  /**
   * Obtains configuration information about an module.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type HapModuleInfo = _HapModuleInfo;

  /**
   * Obtains configuration information about an ability.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type AbilityInfo = _AbilityInfo;

  /**
   * Obtains extension information about a bundle.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type ExtensionAbilityInfo = _ExtensionAbilityInfo;

  /**
   * Indicates extension ability type
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type ExtensionAbilityType = _ExtensionAbilityType;

  /**
   * Indicates the defined permission details in file config.json.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type PermissionDef = _PermissionDef;

  /**
   * Contains basic Ability information, which uniquely identifies an ability.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type ElementName = _ElementName;
}

export default bundleManager;
