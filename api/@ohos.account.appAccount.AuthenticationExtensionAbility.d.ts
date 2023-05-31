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

import type appAccount from './@ohos.account.appAccount';
import type { AsyncCallback } from './@ohos.base';

/**
 * Class of the account authentication extension ability.
 *
 * @syscap SystemCapability.Account.AppAccount
 * @systemapi
 * @StageModelOnly
 * @since 10
 */
export default class AuthenticationExtensionAbility {
  /**
   * Starts the authentication of the specified request.
   *
   * @param { AuthenticationRequest } request - Indicates the authentication request.
   * @param { AuthenticationCallback } callback - Indicates the authentication callback.
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  startAuthentication(request: AuthenticationRequest, callback: AuthenticationCallback): void;

  /**
   * Cancels the authentication of the specified request.
   *
   * @param { AuthenticationRequest } request - Indicates the authentication request.
   * @param { AuthenticationCallback } callback - Indicates the authentication callback.
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  cancelAuthentication(request: AuthenticationRequest, callback: AuthenticationCallback): void;
}

/**
 * The definition of an authentication request.
 *
 * @interface AuthenticationRequest
 * @syscap SystemCapability.Account.AppAccount
 * @systemapi
 * @StageModelOnly
 * @since 10
 */
declare interface AuthenticationRequest {
  /**
   * Indicates the caller UID of the authentication request.
   *
   * @type { number }
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  callerUid: number;

  /**
   * Indicates the business parameters of the authentication request.
   *
   * @type { appAccount.AccountCapabilityRequest }
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  parameters: appAccount.AccountCapabilityRequest;
}

/**
 * The definition of an authentication callback.
 *
 * @interface AuthenticationCallback
 * @syscap SystemCapability.Account.AppAccount
 * @systemapi
 * @StageModelOnly
 * @since 10
 */
declare interface AuthenticationCallback {
  /**
   * Indicates the callback for notifying the result.
   *
   * @type { AsyncCallback<appAccount.AccountCapabilityResponse> }
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
  */
  onResult: AsyncCallback<appAccount.AccountCapabilityResponse>;
}