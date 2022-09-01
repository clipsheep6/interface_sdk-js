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
 * @typedef ExtensionAbilityInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export interface ExtensionAbilityInfo {
  /**
   * Indicates the name of the bundle
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly bundleName: string;

  /**
   * Indicates the name of the module
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly moduleName: string;

  /**
   * Indicates the name of the extension info
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly name: string;

  /**
   * Indicates the label id of the entension info
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly labelId: number;

  /**
   * Indicates the description id of the entension info
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly descriptionId: number;

  /**
   * Indicates the icon id of the entension info
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly iconId: number;

  /**
   * Indicates whether the entensionInfo can be visible or not
   * @type {boolean}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly isVisible: boolean;

  /**
   * Enumerates types of the entension info
   * @type {ExtensionAbilityType}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly extensionAbilityType: ExtensionAbilityType;

  /**
   * The permissions that others need to use this extension info
   * @type {Array<string>}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly permissions: Array<string>;

  /**
   * Obtains configuration information about an application
   * @type {ApplicationInfo}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * Indicates the metadata of bundle
   * @type {Array<Metadata>}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly metadata: Array<Metadata>;

  /**
   * Indicates the src language to express extension info
   * @type {boolean}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly enabled: boolean;

  /**
   * Indicates the read permission extension ability info
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly readPermission: string;

  /**
   * Indicates the write permission of extension ability info
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
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
