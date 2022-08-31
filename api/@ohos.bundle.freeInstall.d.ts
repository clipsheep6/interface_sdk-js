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
import { DispatchInfo as _DispatchInfo } from './bundle/dispatchInfo';
import * as _PackInfo from './bundle/packInfo'

/**
 * free install bundle manager.
 * @namespace freeInstall
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi Hide this for inner system use
 * @since 9
 */
declare namespace freeInstall {
  /**
   * 用于设置免安装在不用场景下升级的枚举值
   * @enum {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.freeIntall
   * @systemapi
   * @since 9
   */
  export enum UpgradeFlag {
      /**
       * Indicates module not need to be upgraded
       * @syscap SystemCapability.BundleManager.BundleFramework.freeIntall
       * @systemapi
       * @since 9
       */
      NOT_UPGRADE = 0,
      /**
       * Indicates single module need to be upgraded
       * @syscap SystemCapability.BundleManager.BundleFramework.freeIntall
       * @systemapi
       * @since 9
       */
      SINGLE_UPGRADE = 1,
      /**
       * Indicates relation module need to be upgraded
       * @syscap SystemCapability.BundleManager.BundleFramework.freeIntall
       * @systemapi
       * @since 9
       */
      RELATION_UPGRADE = 2,
  }

  /**
   * 用于查询BundlePackInfo的枚举值，在调用getBundleInfo、getAllBundleInfo接口时
   * @enum {number}
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 9
   */
  export enum BundlePackFlag {
    /**
     * 查询所有的包信息
     * @syscap SystemCapability.BundleManager.BundleFramework.freeIntall
     * @systemapi
     * @since 9
     */
    GET_PACK_INFO_ALL = 0x00000000,
    /**
     * 查询所有的包信息
     * @syscap SystemCapability.BundleManager.BundleFramework.freeIntall
     * @systemapi
     * @since 9
     */
    GET_PACKAGES = 0x00000001,
    /**
     * 查询包的简要信息
     * @syscap SystemCapability.BundleManager.BundleFramework.freeIntall
     * @systemapi
     * @since 9
     */
    GET_BUNDLE_SUMMARY = 0x00000002,
    /**
     * 查询module的简要信息
     * @syscap SystemCapability.BundleManager.BundleFramework.freeIntall
     * @systemapi
     * @since 9
     */
    GET_MODULE_SUMMARY = 0x00000004,
  }

  /**
   * Set the module wether need upgrade
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param {string} bundleName - Indicates the bundle name of the application.
   * @param {string} moduleName - Indicates the module name of the application.
   * @param {UpgradeFlag} upgradeFlag - Indicates upgradeFlag of the application.
   * @param {AsyncCallback} callback - The callback of setting module upgrade flag result.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi Hide this for inner system use
   * @since 9
   */
  function setModuleUpgradeFlag(bundleName: string, moduleName: string, upgradeFlag: UpgradeFlag, callback: AsyncCallback<void>) : void;

  /**
   * Set the module wether need upgrade
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param {string} bundleName - Indicates the bundle name of the application.
   * @param {string} moduleName - Indicates the module name of the application.
   * @param {UpgradeFlag} upgradeFlag - Indicates upgradeFlag of the application.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @return {Promise<void>} - Return the reslut of setting module upgrade flag.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi Hide this for inner system use
   * @since 9
   */
  function setModuleUpgradeFlag(bundleName: string, moduleName: string, upgradeFlag: UpgradeFlag): Promise<void>;

  /**
   * Checks whether a specified module is removable.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {string} bundleName - Indicates the bundle name of the application.
   * @param {string} moduleName - Indicates the module name of the application.
   * @param {AsyncCallback} callback - The callback of checking module removeable result.The result is true if the module is removable, false otherwise.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi Hide this for inner system use
   * @since 9
   */
  function isModuleRemovable(bundleName: string, moduleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a specified module is removable.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {string} bundleName - Indicates the bundle name of the application.
   * @param {string} moduleName - Indicates the module name of the application.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @returns {Promise<void>} Returns true if the module is removable; returns false otherwise.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi Hide this for inner system use
   * @since 9
   */
  function isModuleRemovable(bundleName: string, moduleName: string): Promise<boolean>;

  /**
   * Obtains bundlePackInfo based on bundleName and bundleFlags.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {string} bundleName - Indicates the application bundle name to be queried.
   * @param {BundlePackFlag} bundlePackFlag - Indicates the application bundle pack flag to be queried.
   * @param {AsyncCallback} callback - The callback of getting the BundlePackInfo object result.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi hide this for inner system use
   * @since 9
   */
  function getBundlePackInfo(bundleName: string, bundlePackFlag : BundlePackFlag, callback: AsyncCallback<BundlePackInfo>): void;

  /**
   * Obtains bundlePackInfo based on bundleName and bundleFlags.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {string} bundleName - Indicates the application bundle name to be queried.
   * @param {pack.BundlePackFlag} bundlePackFlag - Indicates the application bundle pack flag to be queried.
   * @throws {BusinessError} If the input parameter is not valid parameter.
   * @return {Promise<pack.BundlePackInfo>} Returns the BundlePackInfo object.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi hide this for inner system use
   * @since 9
   */
  function getBundlePackInfo(bundleName: string, bundlePackFlag : BundlePackFlag): Promise<BundlePackInfo>;

  /**
   * Obtains information about the dispatcher version.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param {AsyncCallback} callback - The callback of getting the dispatchInfo object for the current ability result.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi hide this for inner system use
   * @since 9
   */
  function getDispatchInfo(callback: AsyncCallback<DispatchInfo>): void;

  /**
   * Obtains information about the dispatcher version.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @return {Promise<DispatchInfo>} Returns the DispatchInfo object for the current ability.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi hide this for inner system use
   * @since 9
   */
  function getDispatchInfo(): Promise<DispatchInfo>;

  /**
   * The dispatch info class.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type DispatchInfo = _DispatchInfo;

  /**
   * The bundle pack info class.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type BundlePackInfo = _PackInfo.BundlePackInfo;

  /**
   * The package info class.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type PackageConfig = _PackInfo.PackageConfig;

  /**
   * The package summary class.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type PackageSummary = _PackInfo.PackageSummary;

  /**
   * The bundle summary class.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type BundleConfigInfo = _PackInfo.BundleConfigInfo;

  /**
   * The extension ability forms class.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type ExtensionAbilities = _PackInfo.ExtensionAbilities;

  /**
   * The module summary of a bundle.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type ModuleConfigInfo = _PackInfo.ModuleConfigInfo;

  /**
   * The bundle info summary class.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type ModuleDistroInfo = _PackInfo.ModuleDistroInfo;

  /**
   * The ability info of a module.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type ModuleAbilityInfo = _PackInfo.ModuleAbilityInfo;

  /**
   * The form info of an ability.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type AbilityFormInfo = _PackInfo.AbilityFormInfo;

  /**
   * The bundle version class.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type Version = _PackInfo.Version;

  /**
   * The bundle Api version class.
   *
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type ApiVersion = _PackInfo.ApiVersion;
}

export default freeInstall;
