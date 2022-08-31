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
 * @name Obtains configuration information about an ability
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 */
export interface AbilityInfo {
  /**
    * @default Indicates the name of the bundle containing the ability
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly bundleName: string;

  /**
    * @default Indicates the name of the .hap package to which the capability belongs
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly moduleName: string;

  /**
    * @default Ability simplified class name
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly name: string;

  /**
    * @default Indicates the label of the ability
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly label: string;

  /**
    * @default Describes the ability
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly description: string;

  /**
    * @default Indicates the icon of the ability
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly icon: string;

  /**
    * @default Indicates the label id of the ability
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly labelId: number;

  /**
    * @default Indicates the description id of the ability
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
  readonly descriptionId: number;

  /**
    * @default Indicates the icon id of the ability
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
  readonly iconId: number;

  /**
    * @default Process of ability, if user do not set it ,the value equal application process
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
  readonly process: string;

  /**
    * @default Indicates the background service addressing a specific usage scenario
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @FAModelOnly
    */
  readonly backgroundModes: number;

  /**
    * @default Indicates whether an ability can be called by other abilities
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly isVisible: boolean;

  /**
    * @default Enumerates ability display orientations
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly orientation: DisplayOrientation;

  /**
    * @default Enumerates ability launch type
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly launchType: LaunchType;

  /**
    * @default The permissions that others need to launch this ability
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly permissions: Array<string>;

  /**
    * @default The device types that this ability can run on
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly deviceTypes: Array<string>;

  /**
    * @default Obtains configuration information about an application
    * @since 7
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
  readonly applicationInfo: ApplicationInfo;

  /**
    * @default Indicates the metadata of ability
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * 
    */
  readonly metadata: Array<Metadata>;

  /**
    * @default Indicates whether the ability is enabled
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly enabled: boolean;

  /**
    * @default Indicates which window mode is supported
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly supportWindowMode: Array<SupportWindowMode>;

  /**
    * @default Indicates maximum ratio of width over height of window under free window status.
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    * @since 9
    */
  readonly maxWindowRatio: number;

  /**
    * @default Indicates minimum ratio of width over height of window under free window status.
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
  readonly minWindowRatio: number;

  /**
    * @default Indicates maximum width of window under free window status.
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
  readonly maxWindowWidth: number;

  /**
    * @default Indicates minimum width of window under free window status.
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
  readonly minWindowWidth: number;

  /**
    * @default Indicates maximum height of window under free window status.
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
  readonly maxWindowHeight: number;

  /**
    * @default Indicates minimum height of window under free window status.
    * @since 9
    * @syscap SystemCapability.BundleManager.BundleFramework.Core
    */
  readonly minWindowHeight: number;
}

/**
 * @name SupportWindowMode
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export enum SupportWindowMode {
  /**
   * @default Indicates supported window mode of full screen mode
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  FULL_SCREEN = 0,
  /**
   * @default Indicates supported window mode of split mode
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  SPLIT = 1,
  /**
   * @default Indicates supported window mode of floating mode
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  FLOATING = 2,
}

/**
* @name LaunchType
* @syscap SystemCapability.BundleManager.BundleFramework.Core
* @since 9
*/
export enum LaunchType {
  /**
   * @default Indicates that the ability has only one instance
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  SINGLETON = 0,
  
  /**
   * @default Indicates that the ability can have multiple instances
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  STANDARD = 1,

  /**
   * @default Indicates that the ability can have specified instances
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  SPECIFIED = 2,
}

/**
 * @name DisplayOrientation
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @import NA
 * @permission NA
 * @since 9
 */
export enum DisplayOrientation {
  /**
   * @default Indicates that the system automatically determines the display orientation
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  UNSPECIFIED,

  /**
   * @default Indicates the landscape orientation
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  LANDSCAPE,

  /**
   * @default Indicates the portrait orientation
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  PORTRAIT,

  /**
   * @default Indicates the page ability orientation is the same as that of the nearest ability in the stack
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  FOLLOW_RECENT,

  /**
   * @default Indicates the inverted landscape orientation
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  LANDSCAPE_INVERTED,

  /**
   * @default Indicates the inverted portrait orientation
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  PORTRAIT_INVERTED,

  /**
   * @default Indicates the orientation can be auto-rotated
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  AUTO_ROTATION,

  /**
   * @default Indicates the landscape orientation rotated with sensor
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  AUTO_ROTATION_LANDSCAPE,

  /**
   * @default Indicates the portrait orientation rotated with sensor
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  AUTO_ROTATION_PORTRAIT,

  /**
   * @default Indicates the sensor restricted mode
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  AUTO_ROTATION_RESTRICTED,

  /**
   * @default Indicates the sensor landscape restricted mode
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  AUTO_ROTATION_LANDSCAPE_RESTRICTED,

  /**
   * @default Indicates the sensor portrait restricted mode
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  AUTO_ROTATION_PORTRAIT_RESTRICTED,

  /**
   * @default Indicates the locked orientation mode
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   */
  LOCKED,
}
