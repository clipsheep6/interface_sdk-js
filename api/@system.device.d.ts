/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * @interface DeviceResponse
 * @syscap SystemCapability.Startup.SystemInfo.Lite
 * @since 3
 */
export interface DeviceResponse {

  /**
   * Device type. The options are as follows:
   * phone: smartphone
   * tablet: tablet
   * tv: smart TV
   * wearable: wearable
   * liteWearable: lite wearable
   * ar: AR
   * vr: virtual reality
   * earphones: headset
   * pc: personal computer
   * speaker: speaker
   * smartVision: smart visual device
   * linkIoT: connection module
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  deviceType: string;
  
  /**
   * Manufacturer.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3
   */
  manufacture: string;
 
  /**
   * Brand.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3
   */
  brand: string;
  
  /**
   * marketName.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  marketName: string;
 
  /**
   * productSeries.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  productSeries: string;
  
  /**
   * productModel.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  productModel: string;
  
  /**
   * softwareModel.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  softwareModel: string;
  
  /**
   * hardwareModel.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  hardwareModel: string;

  /**
   * hardwareProfile.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  hardwareProfile: string;
  
  /**
   * serial.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  serial: string;

  /**
   * bootloaderVersion.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  bootloaderVersion: string;

  /**
   * abiList.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  abiList: string;

  /**
   * securityPatchTag.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  securityPatchTag: string;

  /**
   * displayVersion.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  displayVersion: string;

  /**
   * incrementalVersion.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  incrementalVersion: string;

  /**
   * osReleaseType.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  osReleaseType: string;

  /**
   * osFullName.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  osFullName: string;

  /**
   * majorVersion.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  majorVersion: number;

  /**
   * seniorVersion.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  seniorVersion: number;
  
  /**
   * featureVersion.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  featureVersion: number;
  
  /**
   * buildVersion.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  buildVersion: number;

  /**
   * apiVersion.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  apiVersion: number;
  
  /**
   * firstApiVersion.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  firstApiVersion: number;
  
  /**
   * versionId.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  versionId: string;
  
  /**
   * buildType.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  buildType: string;
  
  /**
   * buildUser.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  buildUser: string;

  /**
   * buildHost.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  buildHost: string;

  /**
   * buildTime.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  buildTime: string;
  
  /**
   * buildRootHash.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  buildRootHash: string;
  
  /**
   * devUdid.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  devUdid: number;

  /**
   * distributionOSName.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  distributionOSName: string;
  
  /**
   * distributionOSVersion.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  distributionOSVersion: string;

  /**
   * distributionOSReleaseType.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  distributionOSReleaseType: string;
  
  /**
   * distributionOSReleaseType.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  distributionOSReleaseType: string;
  
  /**
   * System language.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  language: string;

  /**
   * System region.
   *
   * @type { string }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  region: string;

  /**
   * Window width.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3
   */
  windowWidth: number;

  /**
   * Window Height.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3
   */
  windowHeight: number;

  /**
   * Screen density.
   *
   * @type { number }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  screenDensity: number;

  /**
   * Screen shape. The options are as follows:
   * rect: Rectangle screen.
   * circle: Circle screen.
   *
   * @type { 'rect' | 'circle' }
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4
   */
  screenShape: 'rect' | 'circle';
}

export interface GetDeviceOptions {
  /**
   * Called when the device information is obtained.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3
   */
  success?: (data: DeviceResponse) => void;

  /**
   * Called when the device information fails to be obtained.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3
   */
  complete?: () => void;
}

/**
 * getInfo interface
 *
 * @syscap SystemCapability.Startup.SystemInfo.Lite
 * @since 3
 */
export default class Device {
  /**
   * Obtains the device information.
   *
   * @param { GetDeviceOptions } options - Options
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3
   * @deprecated since 6
   */
  static getInfo(options?: GetDeviceOptions): void;
}
