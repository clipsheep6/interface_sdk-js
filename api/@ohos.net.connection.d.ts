/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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

import {AsyncCallback, Callback} from "./basic";
import http from "./@ohos.net.http";
import socket from "./@ohos.net.socket";

/**
 * Provides interfaces to manage and use data networks.
 *
 * @since 8
 * @syscap SystemCapability.Communication.NetManager.Core
 */
declare namespace connection {
  type HttpRequest = http.HttpRequest;
  type TCPSocket = socket.TCPSocket;
  type UDPSocket = socket.UDPSocket;

  /**
   * Create a network connection with optional netSpefifier and timeout.
   *
   * @param netSpecifier Indicates the network specifier. See {@link NetSpecifier}.
   * @param timeout The time in milliseconds to attempt looking for a suitable network before
   *   {@link NetConnection#netUnavailable} is called.
   */
  function createNetConnection(netSpecifier?: NetSpecifier, timeout?: number): NetConnection;

  /**
   * Obtains the data network that is activated by default.
   *
   * @param callback Returns the {@link NetHandle} object;
   *      returns {@code null} if the default network is not activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   */
  function getDefaultNet(callback: AsyncCallback<NetHandle>): void;
  function getDefaultNet(): Promise<NetHandle>;

  /**
   * Obtains the data network that is activated by default.
   *
   * <p>To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.
   *
   * @return Returns the {@link NetHandle} object;
   *      returns {@code null} if the default network is not activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   * @since 9
   */
  function getDefaultNetSync(): NetHandle;

  /**
   * Obtains the list of data networks that are activated.
   *
   * @param callback Returns the {@link NetHandle} object; returns {@code null} if no network is activated.
   * @permission ohos.permission.GET_NETWORK_INFO
   */
  function getAllNets(callback: AsyncCallback<Array<NetHandle>>): void;
  function getAllNets(): Promise<Array<NetHandle>>;

  /**
   * Queries the connection properties of a network.
   *
   * @param netHandle Indicates the network to be queried.
   * @param callback Returns the {@link ConnectionProperties} object.
   * @permission ohos.permission.GET_NETWORK_INFO
   */
  function getConnectionProperties(netHandle: NetHandle, callback: AsyncCallback<ConnectionProperties>): void;
  function getConnectionProperties(netHandle: NetHandle): Promise<ConnectionProperties>;

  /**
   * Obtains {@link NetCapabilities} of a {@link NetHandle} object.
   *
   * @param netHandle Indicates the handle. See {@link NetHandle}.
   * @param callback Returns {@link NetCapabilities}; returns {@code null} if {@code handle} is invalid.
   * @permission ohos.permission.GET_NETWORK_INFO
   */
  function getNetCapabilities(netHandle: NetHandle, callback: AsyncCallback<NetCapabilities>): void;
  function getNetCapabilities(netHandle: NetHandle): Promise<NetCapabilities>;

  /**
   * Checks whether the default data network is activated.
   *
   * @param callback Returns {@code true} if the default data network is activated; returns {@code false} otherwise.
   */
  function hasDefaultNet(callback: AsyncCallback<boolean>): void;
  function hasDefaultNet(): Promise<boolean>;

  /**
   * Enables the airplane mode for a device.
   *
   * @systemapi Hide this for inner system use. Only used for system app.
   */
  function enableAirplaneMode(callback: AsyncCallback<void>): void;
  function enableAirplaneMode(): Promise<void>;

  /**
   * Disables the airplane mode for a device.
   *
   * @systemapi Hide this for inner system use. Only used for system app.
   */
  function disableAirplaneMode(callback: AsyncCallback<void>): void;
  function disableAirplaneMode(): Promise<void>;

  /**
   * Reports the network state is connected.
   *
   * @param netHandle Indicates the network whose state is to be reported.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   */
  function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;
  function reportNetConnected(netHandle: NetHandle): Promise<void>;

  /**
   * Reports the network state is disconnected.
   *
   * @param netHandle Indicates the network whose state is to be reported.
   * @permission ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET
   */
  function reportNetDisconnected(netHandle: NetHandle, callback: AsyncCallback<void>): void;
  function reportNetDisconnected(netHandle: NetHandle): Promise<void>;

  /**
   * Resolves the host name to obtain all IP addresses based on the default data network.
   *
   * @param host Indicates the host name or the domain.
   * @param callback Returns the NetAddress list.
   * @permission ohos.permission.GET_NETWORK_INFO
   */
  function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;
  function getAddressesByName(host: string): Promise<Array<NetAddress>>;

  export interface NetConnection {
    on(type: 'netAvailable', callback: Callback<NetHandle>): void;

    on(type: 'netBlockStatusChange', callback: Callback<{ netHandle: NetHandle, blocked: boolean }>): void;

    on(type: 'netCapabilitiesChange', callback: Callback<{ netHandle: NetHandle, netCap: NetCapabilities }>): void;

    on(type: 'netConnectionPropertiesChange', callback: Callback<{ netHandle: NetHandle, connectionProperties: ConnectionProperties }>): void;

    on(type: 'netLost', callback: Callback<NetHandle>): void;

    on(type: 'netUnavailable', callback: Callback<void>): void;

    /**
     * Receives status change notifications of a specified network.
     *
     * @permission ohos.permission.GET_NETWORK_INFO
     */
    register(callback: AsyncCallback<void>): void;

    /**
     * Cancels listening for network status changes.
     */
    unregister(callback: AsyncCallback<void>): void;
  }

  export interface NetSpecifier {
    netCapabilities: NetCapabilities;
    bearerPrivateIdentifier?: string;
  }

  export interface NetHandle {
    netId: number;

    /**
     * Binds a TCPSocket or UDPSocket to the current network. All data flows from
     * the socket will use this network, without being subject to {@link setAppNet}.
     * Before using this method, ensure that the socket is disconnected.
     *
     * @param socketParam Indicates the TCPSocket or UDPSocket object.
     * @since 9
     */
    bindSocket(socketParam: TCPSocket | UDPSocket, callback: AsyncCallback<void>): void;
    bindSocket(socketParam: TCPSocket | UDPSocket): Promise<void>;

    /**
     * Resolves a host name to obtain all IP addresses based on the specified NetHandle.
     *
     * @param host Indicates the host name or the domain.
     * @param callback Returns the NetAddress list.
     * @permission ohos.permission.GET_NETWORK_INFO
     */
    getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void;
    getAddressesByName(host: string): Promise<Array<NetAddress>>;

    /**
     * Resolves a host name to obtain the first IP address based on the specified NetHandle.
     *
     * @param host Indicates the host name or the domain.
     * @return Returns the first NetAddress.
     * @permission ohos.permission.GET_NETWORK_INFO
     */
    getAddressByName(host: string, callback: AsyncCallback<NetAddress>): void;
    getAddressByName(host: string): Promise<NetAddress>;
  }

  export interface NetCapabilities {
    linkUpBandwidthKbps?: number;
    linkDownBandwidthKbps?: number;
    networkCap?: Array<NetCap>;
    bearerTypes: Array<NetBearType>;
  }

  export enum NetCap {
    /**
     * Indicates that the network can access the carrier's MMSC to send and receive multimedia messages.
     */
    NET_CAPABILITY_MMS = 0,

    /**
     * Indicates that the network can access the carrier's SUPL server.
     * @since 9
     */
    NET_CAPABILITY_SUPL = 1,

    /**
     * Indicates that the network can access the carrier's DUN or Tethering gateway.
     * @since 9
     */
    NET_CAPABILITY_DUN = 2,

    /**
     * Indicates that the network can access the FOTA server for remote device upgrade.
     * @since 9
     */
    NET_CAPABILITY_FOTA = 3,

    /**
     * Indicates that the network can access the IMS server.
     * @since 9
     */
    NET_CAPABILITY_IMS = 4,

    /**
     * Indicates that the network can access the carrier's CBS server.
     * @since 9
     */
    NET_CAPABILITY_CBS = 5,

    /**
     * Indicates that the network can be used for Wi-Fi Direct.
     * @since 9
     */
    NET_CAPABILITY_WIFI_P2P = 6,

    /**
     * Indicates that the network can access the carrier's Initial Attach server.
     * @since 9
     */
    NET_CAPABILITY_IA = 7,

    /**
     * Indicates that the network can access the carrier's RCS server.
     * @since 9
     */
    NET_CAPABILITY_RCS = 8,

    /**
     * Indicates that the network can access the carrier's XCAP server.
     * @since 9
     */
    NET_CAPABILITY_XCAP = 9,

    /**
     * Indicates that the network can access the carrier's IMS emergency call server.
     * @since 9
     */
    NET_CAPABILITY_EIMS = 10,

    /**
     * Indicates that the network traffic is not metered.
     */
    NET_CAPABILITY_NOT_METERED = 11,

    /**
     * Indicates that the network can access the Internet.
     */
    NET_CAPABILITY_INTERNET = 12,

    /**
     * Indicates that the network is not restricted.
     * @since 9
     */
    NET_CAPABILITY_NOT_RESTRICTED = 13,

    /**
     * Indicates that the network is trusted.
     * @since 9
     */
    NET_CAPABILITY_TRUSTED = 14,

    /**
     * Indicates that the network does not use a VPN.
     */
    NET_CAPABILITY_NOT_VPN = 15,

    /**
     * Indicates that the network is available.
     */
    NET_CAPABILITY_VALIDATED = 16,

    /**
     * Indicates that this network was found to have a captive portal in place last time it was
     * probed.
     * @since 9
     */
    NET_CAPABILITY_CAPTIVE_PORTAL = 17,

    /**
     * Indicates that the network is unavailable during roaming.
     * @since 9
     */
    NET_CAPABILITY_NOT_ROAMING = 18,

    /**
     * Indicates that the network is available only for foreground applications.
     * @since 9
     */
    NET_CAPABILITY_FOREGROUND = 19,

    /**
     * Indicates that the network is not congested.
     * @since 9
     */
    NET_CAPABILITY_NOT_CONGESTED = 20,

    /**
     * Indicates that the network is not suspended.
     * @since 9
     */
    NET_CAPABILITY_NOT_SUSPENDED = 21,

    /**
     * Indicates that traffic that goes through this network is paid by oem. For example,
     * this network can be used by system apps to upload telemetry data.
     *
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    NET_CAPABILITY_OEM_PAID = 22,

    /**
     * Indicates that the network can access the Mission Critical server of the carrier.
     * @since 9
     */
    NET_CAPABILITY_MCX = 23,

    /**
     * Indicates that the network was tested to only provide partial connectivity.
     *
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    NET_CAPABILITY_PARTIAL_CONNECTIVITY = 24,
  }

  export enum NetBearType {
    /**
     * Indicates that the network is based on a cellular network.
     */
    BEARER_CELLULAR = 0,

    /**
     * Indicates that the network is based on a Wi-Fi network.
     */
    BEARER_WIFI = 1,

    /**
     * Indicates that the network is based on a Bluetooth network.
     * @since 9
     */
    BEARER_BLUETOOTH = 2,

    /**
     * Indicates that the network is an Ethernet network.
     */
    BEARER_ETHERNET = 3,

    /**
     * Indicates that the network is a VPN.
     * @since 9
     */
    BEARER_VPN = 4,

    /**
     * Indicates that the network is a Wi-Fi Aware network.
     * @since 9
     */
    BEARER_WIFI_AWARE = 5,

    /**
     * Indicates that the network is a LoWPAN network.
     * @since 9
     */
    BEARER_LOWPAN = 6
  }

  export interface ConnectionProperties {
    interfaceName: string;
    /**
     * @since 9
     */
    isUsePrivateDns: boolean;
    /**
     * @since 9
     */
    privateDnsServerName: string;
    domains: string;
    /**
     * @since 9
     */
    httpProxy: HttpProxy;
    linkAddresses: Array<LinkAddress>;
    dnses: Array<NetAddress>;
    routes: Array<RouteInfo>;
    mtu: number;
  }

  /**
   * @since 9
   */
  export interface HttpProxy {
    host: string;
    port: number;
    parsedExclusionList: Array<string>;
  }

  export interface RouteInfo {
    interface: string;
    destination: LinkAddress;
    gateway: NetAddress;
    hasGateway: boolean;
    isDefaultRoute: boolean;
  }

  export interface LinkAddress {
    address: NetAddress;
    prefixLength: number;
  }

  export interface NetAddress {
    address: string;
    family?: number; // IPv4 = 1; IPv6 = 2, default is IPv4
    port?: number; // [0, 65535]
  }
}

export default connection;