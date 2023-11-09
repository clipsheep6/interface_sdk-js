/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { ConnectOptions } from '../ability/connectOptions';
import ExtensionContext from './ExtensionContext';
import Want from '../@ohos.app.ability.Want';

/**
 * The context of vpn extension. It allows access to
 * vpnExtension-specific resources.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 9
 */
export default class VpnExtensionContext extends ExtensionContext {
  /**
   * Connects an ability to a vpn extension ability.
   * If the target vpn extension ability is visible, you can connect the target vpn extension ability;
   * <p>This method can be called by an ability or vpn extension, but the destination of the connection must be a
   * vpn extension. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
   * vpn extension when the vpn extension is connected.</p>
   *
   * @param { Want } want - Indicates the vpn extension to connect.
   * @param { ConnectOptions } options - Indicates the callback of connection.
   * @returns { number } Returns the connection id.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 20000001 - The specified ability does not exist.
   * @throws { BusinessError } 20000002 - Incorrect ability type.
   * @throws { BusinessError } 20000004 - Can not start invisible component.
   * @throws { BusinessError } 20000005 - The specified process does not have the permission.
   * @throws { BusinessError } 20000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 20000008 - The crowdtesting application expires.
   * @throws { BusinessError } 20000011 - The context does not exist.
   * @throws { BusinessError } 20000050 - Internal error.
   * @throws { BusinessError } 20000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 20000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  connectVpnExtensionAbility(want: Want, options: ConnectOptions): number;

  /**
   * Disconnect an ability from a vpn extension, in contrast to {@link connectAbility}.
   *
   * @param { number } connection - the connection id returned from connectAbility api.
   * @param { AsyncCallback<void> } callback - The callback of disconnectAbility.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 20000011 - The context does not exist.
   * @throws { BusinessError } 20000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  disconnectVpnExtensionAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * Disconnect an ability from a vpn extension, in contrast to {@link connectAbility}.
   *
   * @param { number } connection - the connection id returned from connectAbility api.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 20000011 - The context does not exist.
   * @throws { BusinessError } 20000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  disconnectVpnExtensionAbility(connection: number): Promise<void>;
}
