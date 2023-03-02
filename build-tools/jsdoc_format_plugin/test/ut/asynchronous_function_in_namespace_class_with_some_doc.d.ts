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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
declare namespace MediaQueryEvent {

  /**
   * Defines the MediaQuery event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  export class MediaQueryEvent {

    /**
     * Obtain the default display.
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.display#getDefaultDisplaySync
     */
    getDefaultDisplay(callback: AsyncCallback<Display>): void;

    /**
     * Creates the account name and extra information of this application to the account management service.
     * <p>
     * Only the owner of the application account has the permission to call this method.
     * @param name Indicates the name of the application account to add.
     * @param options Indicates the extra information of the application account to add.
     *        The extra information cannot be sensitive information of the application account.
     * @returns void.
     * @throws {BusinessError} 401 - the parameter check failed.
     * @throws {BusinessError} 12300001 - system service exception.
     * @throws {BusinessError} 12300002 - invalid name or options.
     * @throws {BusinessError} 12300004 - the account indicated by name already exist.
     * @throws {BusinessError} 12300007 - the account number has reached the upper limit.
     * @since 9
     */
    /**
     * Creates the account name and extra information of this application to the account management service.
     * <p>
     * Only the owner of the application account has the permission to call this method.
     * @param name Indicates the name of the application account to add.
     * @param options Indicates the extra information of the application account to add.
     *        The extra information cannot be sensitive information of the application account.
     * @returns void.
     * @throws {BusinessError} 401 - the parameter check failed.
     * @throws {BusinessError} 12300001 - system service exception.
     * @throws {BusinessError} 12300002 - invalid name or options.
     * @throws {BusinessError} 12300004 - the account indicated by name already exist.
     * @throws {BusinessError} 12300007 - the account number has reached the upper limit.
     * @since 10
     */
    createAccount(name: string, callback: AsyncCallback<void>): void;
    createAccount(name: string, options: CreateAccountOptions, callback: AsyncCallback<void>): void;
    createAccount(name: string, options?: CreateAccountOptions): Promise<void>;
  }


  /**
   * Obtain the default display.
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.display#getDefaultDisplaySync
   */
  function getDefaultDisplay(callback: AsyncCallback<Display>): void;

  /**
   * Creates the account name and extra information of this application to the account management service.
   * <p>
   * Only the owner of the application account has the permission to call this method.
   * @param name Indicates the name of the application account to add.
   * @param options Indicates the extra information of the application account to add.
   *        The extra information cannot be sensitive information of the application account.
   * @returns void.
   * @throws {BusinessError} 401 - the parameter check failed.
   * @throws {BusinessError} 12300001 - system service exception.
   * @throws {BusinessError} 12300002 - invalid name or options.
   * @throws {BusinessError} 12300004 - the account indicated by name already exist.
   * @throws {BusinessError} 12300007 - the account number has reached the upper limit.
   * @since 9
   */
  function createAccount(name: string, callback: AsyncCallback<void>): void;
  function createAccount(name: string, options: CreateAccountOptions, callback: AsyncCallback<void>): void;
  function createAccount(name: string, options?: CreateAccountOptions): Promise<void>;
}