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
import { Metadata } from './metadata'

/**
 * Extension information about a bundle
 * @interface
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 *
 */
export interface ExtensionAbilityInfo {
  /**
   * @default Indicates the name of the bundle
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly bundleName: string;

  /**
   * @default Indicates the name of the module
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly moduleName: string;

  /**
   * @default Indicates the name of the extension info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly name: string;

  /**
   * @default Indicates the label id of the entension info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly labelId: number;

  /**
   * @default Indicates the description id of the entension info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly descriptionId: number;

  /**
   * @default Indicates the icon id of the entension info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly iconId: number;

  /**
   * @default Indicates whether the entensionInfo can be visible or not
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly isVisible: boolean;

  /**
   * @default Enumerates types of the entension info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly extensionAbilityType: ExtensionAbilityType;

  /**
   * @default The permissions that others need to use this extension info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly permissions: Array<string>;

  /**
   * @default Obtains configuration information about an application
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * @default Indicates the metadata of bundle
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly metadata: Array<Metadata>;

  /**
   * @default Indicates the src language to express extension info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly enabled: boolean;

  /**
   * @default Indicates the read permission extension ability info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly readPermission: string;

  /**
   * @default Indicates the write permission of extension ability info
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  readonly writePermission: string;
}

/**
 * This enumeration value is used to identify various types of extension ability
 * @enum {number}
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
 export enum ExtensionAbilityType {
  /**
   * Indicates extension info with type of form
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  FORM = 0,
  /**
   * Indicates extension info with type of work schedule
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  WORK_SCHEDULER = 1,
  /**
   * Indicates extension info with type of input method
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  INPUT_METHOD = 2,
  /**
   * Indicates extension info with type of service
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
  */
  SERVICE = 3,
  /**
   * Indicates extension info with type of accessibility
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  ACCESSIBILITY = 4,
  /**
   * Indicates extension info with type of datashare
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  DATA_SHARE = 5,
  /**
   * Indicates extension info with type of fileshare
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  FILE_SHARE = 6,
  /**
   * Indicates extension info with type of staticsubscriber
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  STATIC_SUBSCRIBER = 7,
  /**
   * Indicates extension info with type of wallpaper
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  WALLPAPER = 8,
  /**
   * Indicates extension info with type of backup
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  BACKUP = 9,
  /**
   * Indicates extension info with type of window
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  WINDOW = 10,
  /**
   * Indicates extension info with type of enterprise admin
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  ENTERPRISE_ADMIN = 11,
  /**
   * Indicates extension info with type of thumbnail
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  THUMBNAIL = 13,
  /**
   * Indicates extension info with type of preview
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  PREVIEW = 14,
  /**
   * Indicates extension info with type of unspecified
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  UNSPECIFIED = 255,
}
