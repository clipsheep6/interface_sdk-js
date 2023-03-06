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

import { AsyncCallback, Callback } from './basic';

/**
 * Defines the MediaQuery event.
 * 
 * @namespace MediaQueryEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
declare namespace MediaQueryEvent {

  /**
   * Obtain the default display.
   *
   * @param { AsyncCallback<Display> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  function getDefaultDisplay(callback: AsyncCallback<Display>): void;
}

declare function createAccount(name: string, callback: AsyncCallback<void>): void;
declare function createAccount(name: string, options: CreateAccountOptions, callback: AsyncCallback<void>): void;
declare function createAccount(name: string, options?: CreateAccountOptions): Promise<void>;