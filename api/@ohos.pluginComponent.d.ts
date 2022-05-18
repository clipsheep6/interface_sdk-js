/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { Want } from './ability/want';

/**
 * Plugin component template property.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 * @systemapi Hide this for inner system use.
 */
interface PluginComponentTemplate {
  source: string;
  ability: string;
}

/**
 * Plugin component manager interface.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 * @systemapi Hide this for inner system use.
 */
declare namespace pluginComponentManager {
  type KVObject = {[key: string]: number | string | boolean | [] | KVObject}

  /**
   * Plugin component push parameters.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  interface PushParameters {
    want: Want;
    name: string;
    data: KVObject;
    extraData: KVObject;
    jsonPath?: string;
  }

  /**
   * Plugin component request parameters.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  interface RequestParameters {
    want: Want;
    name: string;
    data: KVObject;
    jsonPath?: string;
  }

  /**
   * Plugin component request callback parameters.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  interface RequestCallbackParameters {
    componentTemplate: PluginComponentTemplate;
    data: KVObject;
    extraData: KVObject;
  }

  /**
   * Plugin component request event result value.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  interface RequestEventResult {
    template?: string;
    data?: KVObject;
    extraData?: KVObject;
  }

  /**
   * Plugin component push event callback.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  type OnPushEventCallback = (source: Want, template: PluginComponentTemplate, data: KVObject,
    extraData: KVObject) => void;

  /**
   * Plugin component request event callback.
   * @since 8
   * @systemapi Hide this for inner system use.
   */

  type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult;

  /**
   * Plugin component push method.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  function push(param: PushParameters, callback: AsyncCallback<void>): void;

  /**
   * Plugin component request method.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void;

  /**
   * Plugin component event listener.
   * @since 8
   * @systemapi Hide this for inner system use.
   */
  function on(eventType: string, callback: OnPushEventCallback | OnRequestEventCallback): void;
}

export default pluginComponentManager;
