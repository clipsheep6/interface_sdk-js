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

import { ApplicationInfo } from './applicationInfo';
import { HapModuleInfo } from './hapModuleInfo';

/**
 * @name Obtains configuration information about a bundle
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 *
 */
export interface BundleInfo {
  /**
   * @default Indicates the name of this bundle
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly name: string;

  /**
   * @default Obtains configuration information about an application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly appInfo: ApplicationInfo;

  /**
   * @default Obtains configuration information about an module
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly hapModuleInfos: Array<HapModuleInfo>;

  /**
   * @default Indicates the required permissions details defined in file config.json
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly reqPermissionDetails: Array<ReqPermissionDetail>;

  /**
   * @default Indicates the grant status of required permissions
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly permissionGrantStates: Array<PermissionGrantStatus>;

  /**
   * @default Indicates the SignatureInfo of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly signatureInfo: SignatureInfo;

  /**
   * @default Indicates the hap install time
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly installTime: number;

  /**
   * @default Indicates the hap update time
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly updateTime: number;
}

/**
 * @name Indicates the required permissions details defined in file config.json
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 *
 */
export interface ReqPermissionDetail {
  /**
    * @default Indicates the name of this required permissions
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  name: string;

  /**
    * @default Indicates the reason of this required permissions
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  reason: string;

   /**
    * @default Indicates the reason id of this required permissions
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  reasonId: number;

  /**
    * @default Indicates the used scene of this required permissions
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  usedScene: UsedScene;
}

/**
 * @name The scene which is used
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 *
 */
export interface UsedScene {
  /**
   * @default Indicates the abilities that need the permission
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  abilities: Array<string>;

  /**
   * @default Indicates the time when the permission is used
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  when: string;
}

/**
 * @name PermissionGrantStatus
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
 export enum PermissionGrantStatus {
  /**
   * PERMISSION_DENIED
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  PERMISSION_DENIED = -1,

  /**
   * PERMISSION_DENIED
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  PERMISSION_GRANTED = 0,
}

/**
 * @name Indicates SignatureInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export interface SignatureInfo {
  /**
   * @default Indicates the ID of the application to which this bundle belongs
   * The application ID uniquely identifies an application. It is determined by the bundle name and signature
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly appId: string;

  /**
   * @default Indicates the fingerprint of the certificate
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
   readonly fingerprint: string;
}
