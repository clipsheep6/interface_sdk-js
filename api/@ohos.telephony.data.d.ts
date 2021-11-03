/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from "./basic";

/**
 * Provides methods related to cellular data services.
 *
 * @since 6
 */
declare namespace data {

  function getCellularDataState(callback: AsyncCallback<DataConnectState>): void;
  function getCellularDataState(): Promise<DataConnectState>;

  // need ohos.permission.GET_NETWORK_INFO
  function isCellularDataEnabled(callback: AsyncCallback<boolean>): void;
  function isCellularDataEnabled(): Promise<boolean>;

  // @SystemApi, used for system app.
  function enableCellularData(callback: AsyncCallback<void>): void;
  function enableCellularData(): Promise<void>;

  // @SystemApi, used for system app.
  function disableCellularData(callback: AsyncCallback<void>): void;
  function disableCellularData(): Promise<void>;

  // @SystemApi, used for system app.
  function enableCellularDataRoaming(slotId: number, callback: AsyncCallback<void>): void;
  function enableCellularDataRoaming(slotId: number): Promise<void>;

  // @SystemApi, used for system app.
  function disableCellularDataRoaming(slotId: number, callback: AsyncCallback<void>): void;
  function disableCellularDataRoaming(slotId: number): Promise<void>;

  // need ohos.permission.GET_NETWORK_INFO
  function isCellularDataRoamingEnabled(slotId: number, callback: AsyncCallback<boolean>): void;
  function isCellularDataRoamingEnabled(slotId: number): Promise<boolean>;

  /**
   * Describes the cellular data link connection state.
   *
   * @devices phone, tablet
   * @version 5
   */
  export enum DataConnectState {
    /**
     * Indicates that a cellular data link is unknown.
     */
    DATA_STATE_UNKNOWN = -1,

    /**
     * Indicates that a cellular data link is disconnected.
     */
    DATA_STATE_DISCONNECTED = 0,

    /**
     * Indicates that a cellular data link is being connected.
     */
    DATA_STATE_CONNECTING = 1,

    /**
     * Indicates that a cellular data link is connected.
     */
    DATA_STATE_CONNECTED = 2,

    /**
     * Indicates that a cellular data link is suspended.
     */
    DATA_STATE_SUSPENDED = 3
  }
}

export default data;