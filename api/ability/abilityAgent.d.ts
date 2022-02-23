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
 * AbilityAgent,oncallback object.
 * @name AbilityAgent 
 * @since 7
 * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
 * @permission N/A
 */
 export interface AbilityAgent {
  /**
   * register message,get AsyncCallback info.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type message
   * @return Returns the register results.
   */
  on(type: 'message', callback: AsyncCallback<string>): void;

  /**
   * register stateChange,get AsyncCallback info.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel 
   * @param type stateChange.
   * @return Returns the register results.
   */
  on(type: 'stateChange', callback: AsyncCallback<number>): void;

  /**
   * unRegister message,get AsyncCallback info.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type message
   * @return Returns the unRegister results.
   */
  off(type: 'message', callback?: AsyncCallback<string>): void;

  /**
   * unRegister stateChange,get AsyncCallback info.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel 
   * @param type stateChange.
   * @return Returns the unRegister results.
   */
  off(type: 'stateChange', callback?: AsyncCallback<number>): void;

  /**
   * postMessage,get AsyncCallback info.
   * @since 7
   * @sysCap SystemCapability.Ability.AbilityRuntime.FAModel 
   * @param data Message.
   * @return -
   */
  postMessage(data: Message, callback:AsyncCallback<void>): void;
  postMessage(data: Message): Promise<void>;
}

export interface Message {
  type: string;
  data: {[key: string]: Object};
}

export default AbilityAgent;
