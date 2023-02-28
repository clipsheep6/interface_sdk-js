/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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


import { AsyncCallback, Callback } from "./basic";
import connection from "./@ohos.net.connection";
import AbilityContext from "./application/AbilityContext";


/**
 * Provides VPN related interfaces.
 *
 * @since 10
 * @syscap SystemCapability.Communication.NetManager.Extension
 */
declare namespace vpn {
  export type LinkAddress = connection.LinkAddress;
  export type RouteInfo = connection.RouteInfo;


  function createVpnConnection(context: AbilityContext): VpnConnection;

  export interface VpnConnection {
    /**
     * Checks whether has vpn is running.
     *
     * @param VpnStateInfo Returns {@code true} check system vpn network info; returns {@code false} otherwise.
     * @throws {BusinessError} 201 NETMANAGER_EXT_ERR_PERMISSION_DENIED
     * @throws {BusinessError} 2200202 NETMANAGER_EXT_ERR_WRITE_DESCRIPTOR_TOKEN_FAIL
     * @throws {BusinessError} 2200207 NETMANAGER_EXT_ERR_IPC_CONNECT_STUB_FAIL
     * @throws {BusinessError} 2200208 NETMANAGER_EXT_ERR_GET_PROXY_FAIL
     */
    prepare(callback: AsyncCallback<VpnStateInfo>): void;
    prepare(): Promise<VpnStateInfo>;

    /**
     * @param config After vpn hap and remote vpn server negotiate, hap notify system to create vpn network.
     * @permission ohos.permission.CONNECTIVITY_INTERNAL
     * @throws {BusinessError} 201 NETMANAGER_EXT_ERR_PERMISSION_DENIED
     * @throws {BusinessError} 401 NETMANAGER_EXT_ERR_PARAMETER_ERROR
     * @throws {BusinessError} 2200003 NETMANAGER_EXT_ERR_INTERNAL
     * @throws {BusinessError} 2200202 NETMANAGER_EXT_ERR_WRITE_DESCRIPTOR_TOKEN_FAIL
     * @throws {BusinessError} 2200203 NETMANAGER_EXT_ERR_WRITE_DATA_FAIL
     * @throws {BusinessError} 2200207 NETMANAGER_EXT_ERR_IPC_CONNECT_STUB_FAIL
     * @throws {BusinessError} 2200208 NETMANAGER_EXT_ERR_GET_PROXY_FAIL
     * @throws {BusinessError} 2203001 NETWORKVPN_ERROR_REFUSE_CREATE_VPN
     * @throws {BusinessError} 2203003 NETWORKVPN_ERROR_CREATE_INTERFACE
     */
    setUp(config: VpnConfig, callback: AsyncCallback<number>): void;
    setUp(config: VpnConfig): Promise<number>;

    /**
     * @params socketFd: file descriptor of socket, this socket from @ohos.net.socket.
     * @throws {BusinessError} 2200003 NETMANAGER_EXT_ERR_INTERNAL
     */
    protect(socketFd: number, callback: AsyncCallback<void>): void;
    protect(socketFd: number): Promise<void>;

    /**
     * @param config Before vpn hap exit, need destroy vpn network.
     * @permission ohos.permission.CONNECTIVITY_INTERNAL
     * @throws {BusinessError} 201 NETMANAGER_EXT_ERR_PERMISSION_DENIED
     * @throws {BusinessError} 2200202 NETMANAGER_EXT_ERR_WRITE_DESCRIPTOR_TOKEN_FAIL
     * @throws {BusinessError} 2200207 NETMANAGER_EXT_ERR_IPC_CONNECT_STUB_FAIL
     * @throws {BusinessError} 2200208 NETMANAGER_EXT_ERR_GET_PROXY_FAIL
     * @throws {BusinessError} 2203002 NETWORKVPN_ERROR_DESTROY_VPN
     */
    destroy(callback: AsyncCallback<boolean>): void;
    destroy(): Promise<boolean>;

    /**
     * @param callback Need to receive system event, for example vpn network connected or disconnected.
     * @permission ohos.permission.CONNECTIVITY_INTERNAL
     * @throws {BusinessError} 201 NETMANAGER_EXT_ERR_PERMISSION_DENIED
     * @throws {BusinessError} 401 NETMANAGER_EXT_ERR_PARAMETER_ERROR
     * @throws {BusinessError} 2200005 NETMANAGER_EXT_ERR_REGISTER_CALLBACK_FAIL
     * @throws {BusinessError} 2200202 NETMANAGER_EXT_ERR_WRITE_DESCRIPTOR_TOKEN_FAIL
     * @throws {BusinessError} 2200207 NETMANAGER_EXT_ERR_IPC_CONNECT_STUB_FAIL
     * @throws {BusinessError} 2200208 NETMANAGER_EXT_ERR_GET_PROXY_FAIL
     */
    on(type: 'connect', callback: Callback<void>): void;

    /**
     * @param callback Need to receive system event, for example vpn network connected or disconnected.
     * @permission ohos.permission.CONNECTIVITY_INTERNAL
     * @throws {BusinessError} 201 NETMANAGER_EXT_ERR_PERMISSION_DENIED
     * @throws {BusinessError} 401 NETMANAGER_EXT_ERR_PARAMETER_ERROR
     * @throws {BusinessError} 2200202 NETMANAGER_EXT_ERR_WRITE_DESCRIPTOR_TOKEN_FAIL
     * @throws {BusinessError} 2200207 NETMANAGER_EXT_ERR_IPC_CONNECT_STUB_FAIL
     * @throws {BusinessError} 2200208 NETMANAGER_EXT_ERR_GET_PROXY_FAIL
     */
    off(type: 'connect', callback?: Callback<void>): void;
  }

  export interface VpnStateInfo {
    /**
     * true: system has vpn network.
     */
    isExistVpn: boolean;
    /**
     * the hap name which created the vpn network.
     */
    package: string;
  }

  export interface VpnConfig {
    user: string;
    sessionName: string;
    addresses: Array<LinkAddress>;
    routes: Array<RouteInfo>;
    interface?: string;
    mtu?: number;
    startTime?: number;
    isBlock?: boolean;
    isAcceptBypass?: boolean;
    isAcceptIPv4?: boolean;
    isAcceptIPv6?: boolean;
    isMetered?: boolean;
    dnsAddresses?: Array<string>;
    searchDomains?: Array<string>;
    acceptedApplications?: Array<string>;
    refusedApplications?: Array<string>;
  }
}

export default vpn;
