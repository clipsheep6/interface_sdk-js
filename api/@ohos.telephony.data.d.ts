/*
 * Copyright (C) 2021-2022 Huawei Device Co., Ltd.
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

import {AsyncCallback} from "./@ohos.base";

/**
 * Provides methods related to cellular data services.
 *
 * @since 7
 * @syscap SystemCapability.Telephony.CellularData
 */
declare namespace data {
  /**
   * Get the default cellular data card.
   *
   * @param { AsyncCallback<number> } callback - Indicates the default cellular data slot id.
   */
  function getDefaultCellularDataSlotId(callback: AsyncCallback<number>): void;

  /**
   * Get the default cellular data card.
   *
   * @returns { Promise<number> } Returns the default cellular data slot id.
   */
  function getDefaultCellularDataSlotId(): Promise<number>;

  /**
   * Get the default cellular data card.
   *
   * @returns { number } Returns default cellular data slot id.
   * @since 9
   */
  function getDefaultCellularDataSlotIdSync(): number;

  /**
   * Switches cellular data services to another card, without changing the default settings.
   *
   * @param { number } slotId - Indicates the ID of the target card slot.
   *  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { AsyncCallback<void> } callback - The callback of setDefaultCellularDataSlotId.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - Do not have sim card.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @systemapi Hide this for inner system use.
   */
  function setDefaultCellularDataSlotId(slotId: number, callback: AsyncCallback<void>): void;

  /**
   * Switches cellular data services to another card, without changing the default settings.
   *
   * @param { number } slotId - Indicates the ID of the target card slot.
   *  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @returns { Promise<void> } The promise returned by the setDefaultCellularDataSlotId.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - Do not have sim card.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @systemapi Hide this for inner system use.
   */
  function setDefaultCellularDataSlotId(slotId: number): Promise<void>;

  /**
   * Indicates that there is no uplink or downlink data.
   *
   * <p>It is a return value of service state query of cellular data services.
   * @param { AsyncCallback<DataFlowType> } callback - Indicates the data flow type.
   */
  function getCellularDataFlowType(callback: AsyncCallback<DataFlowType>): void;

  /**
   * Indicates that there is no uplink or downlink data.
   *
   * <p>It is a return value of service state query of cellular data services.
   * @returns { Promise<DataFlowType> } Returns the data flow type.
   */
  function getCellularDataFlowType(): Promise<DataFlowType>;

  /**
   * Obtains the connection state of the PS domain.
   *
   * @param { AsyncCallback<DataConnectState> } callback - Indicates the callback for getting the connection state, which can be any of the following:
   * <ul>
   * <li>{@code DataConnectState#DATA_STATE_UNKNOWN}
   * <li>{@code DataConnectState#DATA_STATE_DISCONNECTED}
   * <li>{@code DataConnectState#DATA_STATE_CONNECTING}
   * <li>{@code DataConnectState#DATA_STATE_CONNECTED}
   * <li>{@code DataConnectState#DATA_STATE_SUSPENDED}
   * </ul>
   */
  function getCellularDataState(callback: AsyncCallback<DataConnectState>): void;

  /**
   * Obtains the connection state of the PS domain.
   *
   * @returns { Promise<DataConnectState> } Returns the connection state, which can be any of the following:
   * <ul>
   * <li>{@code DataConnectState#DATA_STATE_UNKNOWN}
   * <li>{@code DataConnectState#DATA_STATE_DISCONNECTED}
   * <li>{@code DataConnectState#DATA_STATE_CONNECTING}
   * <li>{@code DataConnectState#DATA_STATE_CONNECTED}
   * <li>{@code DataConnectState#DATA_STATE_SUSPENDED}
   * </ul>
   */
  function getCellularDataState(): Promise<DataConnectState>;

  /**
   * Checks whether cellular data services are enabled.
   *
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for checking whether cellular data services are enabled.
   *  Returns {@code true} if cellular data services are enabled; returns {@code false} otherwise.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   */
  function isCellularDataEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether cellular data services are enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if cellular data services are enabled; returns {@code false} otherwise.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   */
  function isCellularDataEnabled(): Promise<boolean>;

  /**
   * Enables cellular data services.
   *
   * @param { AsyncCallback<void> } callback - The callback of enableCellularData.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   */
  function enableCellularData(callback: AsyncCallback<void>): void;

  /**
   * Enables cellular data services.
   *
   * @returns { Promise<void> } The promise returned by the enableCellularData.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   */
  function enableCellularData(): Promise<void>;

  /**
   * Disables cellular data services.
   *
   * @param { AsyncCallback<void> } callback - The callback of disableCellularData.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   */
  function disableCellularData(callback: AsyncCallback<void>): void;

  /**
   * Disables cellular data services.
   *
   * @returns { Promise<void> } The promise returned by the disableCellularData.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   */
  function disableCellularData(): Promise<void>;

  /**
   * Checks whether roaming is enabled for cellular data services.
   *
   * @param { number } slotId - Indicates the ID of a card slot.
   *  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for checking whether roaming is enabled for cellular data services.
   *  Returns {@code true} if roaming is enabled for cellular data services; returns {@code false} otherwise.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   */
  function isCellularDataRoamingEnabled(slotId: number, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether roaming is enabled for cellular data services.
   *
   * @param { number } slotId - Indicates the ID of a card slot.
   *  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @returns { Promise<boolean> } Returns {@code true} if roaming is enabled for cellular data services; returns {@code false} otherwise.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   */
  function isCellularDataRoamingEnabled(slotId: number): Promise<boolean>;

  /**
   * Enables cellular data roaming.
   *
   * @param { number } slotId - Indicates the ID of a card slot.
   *  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { AsyncCallback<void> } callback - The callback of enableCellularDataRoaming.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   */
  function enableCellularDataRoaming(slotId: number, callback: AsyncCallback<void>): void;

  /**
   * Enables cellular data roaming.
   *
   * @param { number } slotId - Indicates the ID of a card slot.
   *  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @returns { Promise<void> } The promise returned by the enableCellularDataRoaming.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   */
  function enableCellularDataRoaming(slotId: number): Promise<void>;

  /**
   * Disables cellular data roaming.
   *
   * @param { number } slotId - Indicates the ID of a card slot.
   *  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @param { AsyncCallback<void> } callback - The callback of disableCellularDataRoaming.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   */
  function disableCellularDataRoaming(slotId: number, callback: AsyncCallback<void>): void;

  /**
   * Disables cellular data roaming.
   *
   * @param { number } slotId - Indicates the ID of a card slot.
   *  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2.
   * @returns { Promise<void> } The promise returned by the disableCellularDataRoaming.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   */
  function disableCellularDataRoaming(slotId: number): Promise<void>;

  /**
   * Describes the cellular data flow type.
   */
  export enum DataFlowType {
    /**
     * Indicates that there is no uplink or downlink data.
     */
    DATA_FLOW_TYPE_NONE = 0,

    /**
     * Indicates that there is only downlink data.
     */
    DATA_FLOW_TYPE_DOWN = 1,

    /**
     * Indicates that there is only uplink data.
     */
    DATA_FLOW_TYPE_UP = 2,

    /**
     * Indicates that there is uplink and downlink data.
     */
    DATA_FLOW_TYPE_UP_DOWN = 3,

    /**
     * Indicates that there is no uplink or downlink data, and the bottom-layer link is in the dormant state.
     */
    DATA_FLOW_TYPE_DORMANT = 4
  }

  /**
   * Describes the cellular data link connection state.
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
