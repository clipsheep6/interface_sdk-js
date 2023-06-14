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
  * @namespace vpn
  * @syscap SystemCapability.Communication.NetManager.vpn
  * @since 10
  */
 declare namespace vpn {
   export type LinkAddress = connection.LinkAddress;
   export type RouteInfo = connection.RouteInfo;
 
   function createVpnConnection(context: AbilityContext): VpnConnection;
 
   export interface VpnConnection {
     /**
      * Create a VPN connection using the VpnConfig.
      * @permission ohos.permission.MANAGE_VPN
      * @param { VpnConfig } config - After vpn hap and remote vpn server negotiate, hap notify system to create vpn network.
      * @param { AsyncCallback<number> } callback - the callback is used to return file descriptor of tun device. 
      * @throws { BusinessError } 201 - Permission denied.
      * @throws { BusinessError } 202 - Non-system applications use system APIs.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
      * @throws { BusinessError } 2200003 - System internal error.
      * @throws { BusinessError } 2203001 - Deny vpn creation.
      * @throws { BusinessError } 2203003 - Create virtual device failed.
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     setUp(config: VpnConfig, callback: AsyncCallback<number>): void;
 
     /**
      * Create a VPN connection using the VpnConfig.
      * @permission ohos.permission.MANAGE_VPN
      * @param { VpnConfig } config - After vpn hap and remote vpn server negotiate, hap notify system to create vpn network.
      * @returns { Promise<number> } The promise returns file descriptor of tun device.
      * @throws { BusinessError } 201 - Permission denied.
      * @throws { BusinessError } 202 - Non-system applications use system APIs.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
      * @throws { BusinessError } 2200003 - System internal error.
      * @throws { BusinessError } 2203001 - Deny vpn creation.
      * @throws { BusinessError } 2203003 - Create virtual device failed.
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     setUp(config: VpnConfig): Promise<number>;
 
     /**
      * Protect a socket from VPN connections. After protecting, data sent through this socket will go directly to the
      * underlying network so its traffic will not be forwarded through the VPN.
      * @permission ohos.permission.MANAGE_VPN
      * @param { number } socketFd - file descriptor of socket, this socket from @ohos.net.socket.
      * @param { AsyncCallback<boolean> } callback - Returns true if protect the socketFd successfully.
      * @throws { BusinessError } 201 - Permission denied.
      * @throws { BusinessError } 202 - Non-system applications use system APIs.
      * @throws { BusinessError } 2200003 - System internal error.
      * @throws { BusinessError } 2203004 - Invalid socket file discriptor.
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     protect(socketFd: number, callback: AsyncCallback<boolean>): void;
 
     /**
      * Protect a socket from VPN connections. After protecting, data sent through this socket will go directly to the
      * underlying network so its traffic will not be forwarded through the VPN.
      * @permission ohos.permission.MANAGE_VPN
      * @param { number } socketFd - file descriptor of socket, this socket from @ohos.net.socket.
      * @returns { Promise<boolean> } The promise returns true if protect the socketFd successfully.
      * @throws { BusinessError } 201 - Permission denied.
      * @throws { BusinessError } 202 - Non-system applications use system APIs.
      * @throws { BusinessError } 2200003 - System internal error.
      * @throws { BusinessError } 2203004 - Invalid socket file discriptor.
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     protect(socketFd: number): Promise<boolean>;
 
     /**
      * Destroy the vpn connection Before vpn hap exit.
      * @permission ohos.permission.MANAGE_VPN
      * @param { AsyncCallback<boolean> } callback - Returns true if the vpn connection destroy successfully.
      * @throws { BusinessError } 201 - Permission denied.
      * @throws { BusinessError } 202 - Non-system applications use system APIs.
      * @throws { BusinessError } 2200003 - System internal error.
      * @throws { BusinessError } 2203002 - Destroy vpn failed.
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     destroy(callback: AsyncCallback<boolean>): void;
 
     /**
      * Destroy the vpn connection Before vpn hap exit.
      * @permission ohos.permission.MANAGE_VPN
      * @returns { Promise<boolean> } The promise returns true if the vpn connection destroy successfully.
      * @throws { BusinessError } 201 - Permission denied.
      * @throws { BusinessError } 202 - Non-system applications use system APIs.
      * @throws { BusinessError } 2200003 - System internal error.
      * @throws { BusinessError } 2203002 - Destroy vpn failed.
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     destroy(): Promise<boolean>;
   }

  /**
   * Vpn hap and remote vpn server negotiate, hap notify system to create vpn network.
   * @interface VpnConfig
   * @syscap SystemCapability.Communication.NetManager.vpn
   * @systemapi Hide this for inner system use.
   * @since 10
   */
   export interface VpnConfig {
 
     /**
      * The tun device address.
      * @type {LinkAddress}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     tunAddress: LinkAddress;
 
     /**
      * The array address.
      * @type {?Array<LinkAddress>}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     addresses?: Array<LinkAddress>;
 
     /**
      * The array route.
      * @type {?Array<RouteInfo>}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     routes?: Array<RouteInfo>;
 
     /**
      * Set the maximum transmission unit (MTU) of the VPN interface.
      * @type {?number}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     mtu?: number;
 
     /**
      * Whether ipv4 is supported.
      * @type {?boolean}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     isAcceptIPv4?: boolean;
 
     /**
      * Whether ipv6 is supported.
      * @type {?boolean}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     isAcceptIPv6?: boolean;
 
     /**
      * Whether to use the built-in vpn
      * @type {?boolean}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     isLegacy?: boolean;
 
     /**
      * Sets the VPN interface's file descriptor to be in blocking/non-blocking mode.
      * @type {?boolean}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     isBlock?: boolean;
 
     /**
      * Marks the VPN network as metered.
      * @type {?boolean}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     isMetered?: boolean;
 
     /**
      * Allows all apps to bypass this VPN connection.
      * @type {?boolean}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     isAcceptBypass?: boolean;
 
     /**
      * Add a DNS server to the VPN connection.
      * @type {?Array<string>}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     dnsAddresses?: Array<string>;
 
     /**
      * Add a search domain to the DNS resolver.
      * @type {?Array<string>}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     searchDomains?: Array<string>;
 
     /**
      * Add whitelist to the vpn network.
      * @type {?Array<string>}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     acceptedApplications?: Array<string>;
 
     /**
      * Add blacklist to the vpn network.
      * @type {?Array<string>}
      * @syscap SystemCapability.Communication.NetManager.vpn
      * @systemapi Hide this for inner system use.
      * @since 10
      */
     refusedApplications?: Array<string>;
   }
 }
 
 export default vpn;
 