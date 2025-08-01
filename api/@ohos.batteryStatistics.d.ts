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
 * @file
 * @kit BasicServicesKit
 * @arkts 1.1&1.2
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * Provides methods to get power consumption information.
 *
 * @namespace batteryStats
 * @syscap SystemCapability.PowerManager.BatteryStatistics
 * @systemapi
 * @since arkts {'1.1':'8', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace batteryStats {
  /**
   * Describes the consumption type.
   *
   * @enum { int }
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export enum ConsumptionType {
    /**
     * Indicates an invalid consumption type.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONSUMPTION_TYPE_INVALID = -17,

    /**
     * Indicates the battery power consumption generated by APP.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONSUMPTION_TYPE_APP,

    /**
     * Indicates the battery power consumption generated by bluetooth.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONSUMPTION_TYPE_BLUETOOTH,

    /**
     * Indicates the battery power consumption generated when the CPU is idle.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONSUMPTION_TYPE_IDLE,

    /**
     * Indicates the battery power consumption generated when phone call is active.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONSUMPTION_TYPE_PHONE,

    /**
     * Indicates the battery power consumption generated by radio.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONSUMPTION_TYPE_RADIO,

    /**
     * Indicates the battery power consumption generated by screen.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONSUMPTION_TYPE_SCREEN,

    /**
     * Indicates the battery power consumption generated by user.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONSUMPTION_TYPE_USER,

    /**
     * Indicates the battery power consumption generated by WIFI.
     *
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CONSUMPTION_TYPE_WIFI
  }

  /**
   * Obtains the power consumption information list.
   *
   * @returns { Promise<Array<BatteryStatsInfo>> } Power consumption information list.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getBatteryStats(): Promise<Array<BatteryStatsInfo>>;

  /**
   * Obtains the power consumption information list.
   *
   * @param { AsyncCallback<Array<BatteryStatsInfo>> } callback Indicates the callback of power consumption information list.
   * AsyncCallback encapsulates an interface of BatteryStatsInfo type.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getBatteryStats(callback: AsyncCallback<Array<BatteryStatsInfo>>): void;

  /**
   * Obtains power consumption information(mAh) for a given uid.
   *
   * @param { int } uid Indicates the uid.
   * @returns { double } Power consumption information(mAh).
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getAppPowerValue(uid: int): double;

  /**
   * Obtains power consumption information(Percent) for a given uid.
   *
   * @param { int } uid Indicates the uid.
   * @returns { double } Power consumption information(Percent).
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getAppPowerPercent(uid: int): double;

  /**
   * Obtains power consumption information(mAh) for a given type.
   *
   * @param { ConsumptionType } type Indicates the hardware type.
   * the ConsumptionType type is an enumeration class.
   * @returns { double } Power consumption information(mAh).
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getHardwareUnitPowerValue(type: ConsumptionType): double;

  /**
   * Obtains power consumption information(Percent) for a given type.
   *
   * @param { ConsumptionType } type Indicates the hardware type.
   * the ConsumptionType type is an enumeration class.
   * @returns { double } Power consumption information(Percent).
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4600101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getHardwareUnitPowerPercent(type: ConsumptionType): double;

  /**
   * Contains power consumption information of a device.
   * <p>Power consumption information includes the uid, type and power consumption value.
   *
   * @typedef BatteryStatsInfo
   * @syscap SystemCapability.PowerManager.BatteryStatistics
   * @systemapi
   * @since arkts {'1.1':'8', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface BatteryStatsInfo {
    /**
     * The uid related with the power consumption info.
     *
     * @type { int }
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    uid: int;

    /**
     * The type related with the power consumption info.
     *
     * @type { ConsumptionType }
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    type: ConsumptionType;

    /**
     * The power consumption value(mAh).
     *
     * @type { double }
     * @syscap SystemCapability.PowerManager.BatteryStatistics
     * @systemapi
     * @since arkts {'1.1':'8', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    power: double;
  }
}

/**
 * Provides methods to get power consumption information.
 *
 * @namespace batteryStats
 * @syscap SystemCapability.PowerManager.BatteryStatistics
 * @systemapi
 * @since arkts {'1.1':'8', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export default batteryStats;
