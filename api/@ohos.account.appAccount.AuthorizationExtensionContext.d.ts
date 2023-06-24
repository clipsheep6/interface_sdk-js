/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import type { AsyncCallback } from '../@ohos.base';
import type { ConnectOptions } from '../ability/connectOptions';
import type ExtensionContext from './ExtensionContext';
import type Want from '../@ohos.app.ability.Want';

/**
 * The context of authorization extension. It allows access to AuthorizationExtension-specific resources.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.Account.AppAccount
 * @StageModelOnly
 * @since 10
 */
export default class AuthorizationExtensionContext extends ExtensionContext {
  /**
   * Connects an ability to a service extension ability. If the caller application is in foreground,
   * you can use this method to connect service extension ability; If the caller application is in the background,
   * you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target service extension ability is visible, you can connect the target service extension ability;
   * If the target service extension ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to connect target invisible service extension ability.
   * If the target service extension ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   * <p>This method can be called by an ability or service extension, but the destination of the connection must be a
   * service extension. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
   * service extension when the Service extension is connected.</p>
   *
   * @param { Want } want - Indicates the service extension to connect.
   * @param { ConnectOptions } options - Indicates the callback of connection.
   * @returns { number } Returns the connection id.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): number;

  /**
   * Disconnect an ability to a service extension, in contrast to {@link connectAbility}.
   *
   * @param { number } connection - the connection id returned from connectAbility api.
   * @param { AsyncCallback<void> } callback - The callback of disconnectAbility.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  disconnectServiceExtensionAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * Disconnect an ability to a service extension, in contrast to {@link connectAbility}.
   *
   * @param { number } connection - the connection id returned from connectAbility api.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  disconnectServiceExtensionAbility(connection: number): Promise<void>;
}