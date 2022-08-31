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

import { HapModuleInfo } from './hapModuleInfo';
import { Metadata } from './metadata';
import { Resource } from '../global/resource';

/**
 * @name Obtains configuration information about an application
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 *
 */
export interface ApplicationInfo {
  /**
   * @default Indicates the application name, which is the same as {@code bundleName}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly name: string;

  /**
   * @default Description of application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly description: string;

  /**
   * @default Indicates the description id of the application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly descriptionId: number;

  /**
   * @default Indicates whether or not this application may be instantiated
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly enabled: boolean;

  /**
   * @default Indicates the label of the application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly label: string;

  /**
   * @default Indicates the label id of the application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly labelIndex: number;

  /**
   * @default Indicates the icon of the application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly icon: string;

  /**
   * @default Indicates the icon id of the application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly iconId: number;

  /**
   * @default Indicates the bundle vendor
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly vendor: string;

  /**
   * @default Indicates the version code of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly versionCode: number;

  /**
   * @default Indicates the version name of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly versionName: string;

  /**
   * @default Indicates the earliest historical version compatible with the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
   readonly minCompatibleVersionCode: number;

  /**
   * @default Indicates the target version number of the bundle
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
   readonly targetVersion: number;
  
  /**
   * @default Process of application, if user do not set it ,the value equal bundleName
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly process: string;

  /**
   * @default Indicates the path storing the module resources of the application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly moduleSourceDirs: Array<string>;

  /**
   * @default Indicates the permissions required for accessing the application.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly permissions: Array<string>;

  /**
   * @default Indicates module information about an application
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly moduleInfos: Array<HapModuleInfo>;

  /**
   * @default Indicates the path where the {@code Entry.hap} file of the application is saved
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly entryDir: string;

  /**
   * @default Indicates the application source code path
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly codePath: string;

  /**
   * @default Indicates the metadata of module
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly metadata: Map<string, Array<Metadata>>;

  /**
   * @default Indicates whether or not this application may be removable
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly removable: boolean;

  /**
   * @default Indicates the access token of the application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly accessTokenId: number;

  /**
   * @default Indicates the uid of the application
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly uid: number;

  /**
   * @default Indicates icon resource of the application
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly iconResource: Resource;

  /**
   * @default Indicates label resource of the application
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
    readonly labelResource: Resource;

  /**
   * @default Indicates description resource of the application
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly descriptionResource: Resource;

  /**
   * @default Indicates the appDistributionType of the application
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly appDistributionType: string;

  /**
   * @default Indicates the appProvisionType of the application
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly appProvisionType: string;
}
