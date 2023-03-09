/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

declare namespace coordination {
  /**
   * Enumerates keyboard and mouse through events.
   * 
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use.
   */
  enum NotifyMsg {
    /**
     * Keyboard and mouse through message: through is enabled.
     *
     * @since 9
    */
     MSG_COORDINATION_NOTIFY_START = 200,

    /**
     * Keyboard and mouse through message: through is successful.
     *
     * @since 9
    */
     MSG_COORDINATION_NOTIFY_SUCCESS = 201,

    /**
     * Keyboard and mouse through message: through fails.
     *
     * @since 9
    */
     MSG_COORDINATION_NOTIFY_FAIL = 202,

    /**
     * Keyboard and mouse through status: through is enabled.
     *
     * @since 9
    */
     MSG_COORDINATION_STATE_ON = 500,

    /**
     * Keyboard and mouse through status: through is disabled.
     *
     * @since 9
    */
     MSG_COORDINATION_STATE_OFF = 501,
  }

  /**
   * Prepare keyboard and mouse through.
   *
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   * @param isReady Whether keyboard and mouse through are ready.
   * @param callback Asynchronous callback function.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function prepare(isReady: boolean, callback: AsyncCallback<void>): void;

  /**
   * Prepare keyboard and mouse through.
   *
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   * @param isReady Whether keyboard and mouse through are ready.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function activate(isReady: boolean): Promise<void>;

  /**
   * Starts keyboard and mouse through.
   *
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   * @param srcNetworkId Descriptor of the target network for keyboard and mouse through.
   * @param sinkInputDeviceId Identifier of the peripheral device for keyboard and mouse through.
   * @param callback Asynchronous callback function.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 4400001 - Incorrect descriptor for the target device.
   * @throws {BusinessError} 4400002 - Screen hop failed.
   */
  function start(srcNetworkId: string, sinkInputDeviceId: number, callback: AsyncCallback<void>): void;

  /**
   * Starts keyboard and mouse through.
   *
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   * @param srcNetworkId Descriptor of the target network for keyboard and mouse through.
   * @param sinkInputDeviceId Identifier of the peripheral device for keyboard and mouse through.
   * @throws {BusinessError} 401 - Parameter error.
   * @throws {BusinessError} 4400001 - Incorrect descriptor for the target device.
   * @throws {BusinessError} 4400002 - Screen hop failed.
   */
  function start(srcNetworkId: string, sinkInputDeviceId: number): Promise<void>;

  /**
   * Stops keyboard and mouse through.
   *
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   * @param callback Asynchronous callback function.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function stop(callback: AsyncCallback<void>): void;

  /**
   * Stops keyboard and mouse through.
   *
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   */
  function stop(): Promise<void>;

  /**
   * Obtains the status of the keyboard and mouse through switch.
   *
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   * @param networkId Descriptor of the target network for keyboard and mouse through.
   * @param callback Asynchronous callback used to receive the status of the keyboard and mouse through switch.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function getState(networkId: string, callback: AsyncCallback<{ state: boolean }>): void;

  /**
   * Obtains the status of the mouse through switch.
   *
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   * @param networkId Descriptor of the target network for mouse through.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function getState(networkId: string): Promise<{ state: boolean }>;

  /**
   * Enables listening for mouse through events.
   * 
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   * @param type Registration type.
   * @param callback Asynchronous callback used to receive mouse through events.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function on(type: 'coordination', callback: AsyncCallback<{ networkId: string, eventMsg: EventMsg }>): void;

  /**
   * Disables listening for mouse through events.
   * 
   * @since 9
   * @syscap SystemCapability.Msdp.DeviceStatus.Coordination
   * @systemapi hide for inner use
   * @param type Registration type.
   * @param callback Asynchronous callback used to return the result.
   * @throws {BusinessError} 401 - Parameter error.
   */
  function off(type: 'coordination', callback?: AsyncCallback<void>): void;
}

export default coordination;
