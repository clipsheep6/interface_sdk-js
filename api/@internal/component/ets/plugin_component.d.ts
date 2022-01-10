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

import {CommonMethod} from "./common";
import {PluginComponentTemplate} from "../../../@ohos.plugincomponent"

/**
 * Plugin component property.
 * @since 8
 */
export declare class PluginComponentExtend<T> extends PluginComponentAttribute<T> {
}

/**
 * Plugin component interface.
 * @since 8
 */
interface PluginComponent extends PluginComponentAttribute<PluginComponent> {
  (value: {template: PluginComponentTemplate, data: Object}): PluginComponent;
}

/**
 * Defines plugin component attribute functions.
 * @since 8
 */
declare class PluginComponentAttribute<T> extends CommonMethod<T> {
  /**
   * Plugin component complete callback.
   * @since 8
   */
  onComplete(callback: () => void): T;
  
  /**
   * Plugin component error callback.
   * @since 8
   */
  onError(callback: (info: {errcode: number, msg: string}) => void): T;
}

export declare const PluginComponentInterface: PluginComponent;
