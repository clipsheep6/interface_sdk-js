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
import { AsyncCallback } from '../basic';

/**
 * AbilityAgent, onCallback object.
 * @name AbilityAgent 
 * @since 7
 * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
 * @permission N/A
 */
 export interface AbilityAgent {
  /**
   * Listens for the event of sending messages to the peer device. This method uses a callback to return the result.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type Event type. The value is fixed at message.
   * @param callback Callback used to return the result.
   */
  on(type: 'message', callback: AsyncCallback<string>): void;

  /**
   * Listens for collaboration lifecycle change events. This method uses a callback to return the result.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel 
   * @param type Event type. The value is fixed at stateChange.
   * @param callback Callback used to return the state value. For details about the state values, see LifecycleEvent.
   */
  on(type: 'stateChange', callback: AsyncCallback<number>): void;

  /**
   * Cancels listening for the event of sending messages to the peer device.
   * This method uses a callback to return the result.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type Event type. The value is fixed at message.
   * @param callback Callback specified in abilityAgent.on(type: "message").
   * If no callback is specified, listening will be canceled for all callbacks.
   */
  off(type: 'message', callback?: AsyncCallback<string>): void;

  /**
   * Cancels listening for the collaboration lifecycle changes.
   * This method uses a callback to return the result.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel 
   * @param type Event type. The value is fixed at stateChange.
   * @param callback Callback specified in abilityAgent.on(type: "stateChange").
   * If no callback is specified, listening will be canceled for all callbacks.
   */
  off(type: 'stateChange', callback?: AsyncCallback<number>): void;

  /**
   * Sends a message to the peer device. This method uses an asynchronous callback to return the result.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel 
   * @param data Message to send.
   * @param callback Callback used to return the result.
   */
  postMessage(data: Message, callback:AsyncCallback<void>): void;
  postMessage(data: Message): Promise<void>;
}

/**
 * Defines a Message instance.
 * @name AbilityAgent 
 * @since 7
 * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
 * @permission N/A
 */
export interface Message {
  /**
   * Message type.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   */
  type: string;

  /**
   * Message content.
   * @default -
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   */
  data: {[key: string]: Object};
}

export default AbilityAgent;
