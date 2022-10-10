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
import { BundleInfo } from './bundleManager/bundleInfo';
import { ElementName } from './bundleManager/elementName';

/**
 * default application manager.
 * @namespace defaultAppManager
 * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
 * @since 9
 */
declare namespace defaultAppManager {
  /**
   * the constant for application type.
   * @enum {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
   * @since 9
   */
  export enum ApplicationType {
    /**
     * default browser identifier.
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
     * @since 9
     */
    BROWSER = "Web Browser",
    /**
     * default image identifier.
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
     * @since 9
     */
    IMAGE = "Image Gallery",
    /**
     * default audio identifier.
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
     * @since 9
     */
    AUDIO = "Audio Player",
    /**
     * default video identifier.
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
     * @since 9
     */
    VIDEO = "Video Player",
    /**
     * default PDF identifier.
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
     * @since 9
     */
    PDF = "PDF Viewer",
    /**
     * default word identifier.
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
     * @since 9
     */
    WORD = "Word Viewer",
    /**
     * default excel identifier.
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
     * @since 9
     */
    EXCEL = "Excel Viewer",
    /**
     * default PPT identifier.
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
     * @since 9
     */
    PPT = "PPT Viewer",
  }

  /**
   * query whether the caller is default application based on type.
   * @param { string } type - application type or file type.
   * @param { AsyncCallback } callback - The callback of querying default application result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
   * @since 9
   */
  function isDefaultApplication(type: string, callback: AsyncCallback<boolean>) : void;

  /**
   * query whether the caller is default application based on type.
   * @param { string } type - application type or file type.
   * @returns { Promise<boolean> } return true if caller is default application; return false otherwise.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
   * @since 9
   */
  function isDefaultApplication(type: string) : Promise<boolean>;

  /**
   * get default application based on type.
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - application type or file type.
   * @param { number } userId - indicates the id for the user.
   * @param { AsyncCallback } callback - the callback of the BundleInfo object result.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
   * @systemapi
   * @since 9
   */
  function getDefaultApplication(type: string, userId: number, callback: AsyncCallback<BundleInfo>) : void;
  function getDefaultApplication(type: string, callback: AsyncCallback<BundleInfo>) : void;

  /**
   * get default application based on type.
   * @param { string } type - application type or file type.
   * @param { number } userId - indicates the id for the user.
   * @throws { BusinessError } If the input parameter is not valid parameter.
   * @return { Promise<BundleInfo> } return the BundleInfo object.
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager
   * @systemapi
   * @since 9
   */
  function getDefaultApplication(type: string, userId?: number) : Promise<BundleInfo>;

  /**
   * set default application based on type.
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - application type or file type.
   * @param { ElementName } elementName - uniquely identifies an ability or extensionAbility.
   * @param { number } userId - indicates the id for the user.
   * @param { AsyncCallback } callback - the callback of setting default application result.
   * @throws { BusinessError } if the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager.defaultAppManager
   * @systemapi
   * @since 9
   */
  function setDefaultApplication(type: string, elementName: ElementName, userId: number, callback: AsyncCallback<void>) : void;
  function setDefaultApplication(type: string, elementName: ElementName, callback: AsyncCallback<void>) : void;

  /**
   * set default application based on type.
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - application type or file type.
   * @param { ElementName } elementName - uniquely identifies an ability or extensionAbility.
   * @param { number } userId - indicates the id for the user.
   * @returns { Promise<void> } the resut of setting default application.
   * @throws { BusinessError } if the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager.defaultAppManager
   * @systemapi
   * @since 9
   */
  function setDefaultApplication(type: string, elementName: ElementName, userId?: number) : Promise<void>;

  /**
   * reset default application based on type.
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - application type or file type.
   * @param { number } userId - indicates the id for the user.
   * @param { AsyncCallback } callback - the callback of resetting default application result.
   * @throws { BusinessError } if the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager.defaultAppManager
   * @systemapi
   * @since 9
   */
  function resetDefaultApplication(type: string, userId: number, callback: AsyncCallback<void>) : void;
  function resetDefaultApplication(type: string, callback: AsyncCallback<void>) : void;

  /**
   * reset default application based on type.
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - application type or file type.
   * @param { number } userId - indicates the id for the user.
   * @returns { Promise<void> } the result of resetting default application.
   * @throws { BusinessError } if the input parameter is not valid parameter.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultAppManager.defaultAppManager
   * @systemapi
   * @since 9
   */
  function resetDefaultApplication(type: string, userId?: number) : Promise<void>;
}

export default defaultAppManager;
