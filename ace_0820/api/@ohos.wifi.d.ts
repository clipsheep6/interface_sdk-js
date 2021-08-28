/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from "./basic";

/**
 * Provides methods to operate or manage Wi-Fi.
 *
 * @SysCap SystemCapability.Communication.WifiDevice
 * @devices phone, tablet
 * @since 7
 */
declare namespace wifi {
    /**
     * Obtains information about a Wi-Fi connection.
     *
     * <p>The connection information includes the SSID, BSSID, and RSSI of the Wi-Fi hotspot.
     * {@code networkId} is the unique ID of the Wi-Fi network.
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns the Wi-Fi connection information.
     * @since 6
     */
    function getLinkedInfo(): Promise<WifiLinkedInfo>;
    function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

    /**
     * Enables Wi-Fi.
     *
     * @return Returns {@code true} if the operation is successful; returns {@code false} otherwise.
     *
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function enableWifi(): boolean;

    /**
     * Disables Wi-Fi.
     *
     * @return Returns {@code true} if the operation is successful; returns {@code false} otherwise.
     *
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function disableWifi(): boolean;

    /**
     * Checks whether a Wi-Fi connection has been set up.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns {@code true} if a Wi-Fi connection has been set up; returns {@code false} otherwise.
     * @since 7
     */
    function isConnected(): boolean;

    /**
     * Queries the Wi-Fi status
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns {@code true} if the Wi-Fi is active; returns {@code false} otherwise.
     *
     * @since 7
     */
    function isWifiActive(): boolean;

    /**
     * Calculates the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @param rssi Indicates the Wi-Fi RSSI.
     * @band Indicates the Wi-Fi frequency band.
     * @return Returns Wi-Fi signal level ranging from 0 to 4.
     *
     * @since 7
     */
    function getSignalLevel(rssi: number, band: number): number;

    /**
     * Connects to Wi-Fi network.
     *
     * @param networkId ID of the connected network.
     * @return Returns {@code true} if the network connection is successful; returns {@code false} otherwise.
     *
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function connectToNetwork(networkId: number): boolean;

    /**
     * Obtains the features supported by this device.
     *
     * <p>To check whether this device supports a specified feature, call {@link #isFeatureSupported(long)}.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns the features supported by this device.
     * @see WifiUtils#WIFI_FEATURE_INFR
     * @since 7
     * @hide
     */
    function getSupportedFeatures(): number;

    /**
     * Checks whether this device supports a specified feature.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @param featureId Indicates the ID of the feature to check. {@link WifiUtils} provides feature IDs,
     *     for example, {@link WifiUtils#WIFI_FEATURE_INFRA}.
     * @return Returns {@code true} if this device supports the specified feature; returns {@code false} otherwise.
     * @since 7
     */
    function isFeatureSupported(featureId: number): boolean;

    /**
     * Obtains the MAC address of a Wi-Fi device. Wi-Fi must be enabled.
     *
     * <p>The MAC address is unique and cannot be changed.
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_LOCAL_MAC}
     * and {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns the MAC address of the Wi-Fi device.
     * @since 7
     * @hide
     */
    function getDeviceMacAddress(): string[];

    /**
     * Connects to Wi-Fi network.
     *
     * @param config Indicates the device configuration for connection to the Wi-Fi network.
     * @return Returns {@code true} if the network connection is successful; returns {@code false} otherwise.
     *
     * @devices phone, tablet
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function connectToDevice(config: WifiDeviceConfig): boolean;

    /**
     * Adds Wi-Fi connection configuration to the device.
     *
     * <p>The configuration will be updated when the configuration is added.</p>
     *
     * @return Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
     *
     * @devices phone, tablet
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function addDeviceConfig(config: WifiDeviceConfig): Promise<number>;
    function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void;

    /**
     * Adds a specified untrusted hotspot configuration.
     *
     * <p>This method adds one configuration at a time. After this configuration is added,
     *     your device will determine whether to connect to the hotspot.
     *
     * @return Returns {@code true} if the untrusted hotspot configuration is added; returns {@code false} otherwise.
     *
     * @devices phone, tablet
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function addUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;
    function addUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

    /**
     * Removes a specified untrusted hotspot configuration.
     *
     * <p>This method removes one configuration at a time.
     *
     * @return Returns {@code true} if the untrusted hotspot configuration is removed; returns {@code false} otherwise.
     *
     * @devices phone, tablet
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function removeUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>;
    function removeUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void;

    /**
     * Scans Wi-Fi hotspots with parameters.
     *
     * <p>This API works in asynchronous mode.</p>
     *
     * <p>The application must have the permission specified by {@code ohos.permission.SET_WIFI_INFO}
     * and {@code ohos.permission.LOCATION}.
     *
     * @return Returns {@code true} if the scanning is successful; returns {@code false} otherwise.
     *
     * @since 7
     */
    function scan(): boolean;

    /**
     * Obtains the IP information of a Wi-Fi connection.
     *
     * <p>The IP information includes the host IP address, gateway address, and DNS information.
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns the IP information of the Wi-Fi connection.
     * @since 7
     */
    function getIpInfo(): IpInfo;

    /**
     * Obtains the hotspot information that scanned.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}
     * and {@code ohos.permission.GET_WIFI_PEERS_MAC} and {@code ohos.permission.LOCATION}.
     *
     * @return Returns information about scanned Wi-Fi hotspots if any.
     *
     * @since 7
     */
    function getScanInfos(): Promise<Array<WifiScanInfo>>;
    function getScanInfos(callback: AsyncCallback<Array<WifiScanInfo>>): void;

    /**
     * Obtains the country code of this device.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns the country code of this device.
     * @since 7
     */
    function getCountryCode(): string;

    /**
     * Disconnects Wi-Fi network.
     *
     * @return Returns {@code true} for disconnecting network success, returns {@code false} otherwise.
     *
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function disconnect(): boolean;

    /**
     * Re-associates to current network.
     *
     * @return {@code true} if the Wi-Fi network is re-associate successfully.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function reassociate(): boolean;

    /**
     * Re-connects to current network.
     *
     * @return {@code true} if the Wi-Fi network is re-connect successfully.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function reconnect(): boolean;

    /**
     * Subscribe Wi-Fi status change events.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns 0: inactive, 1: active, 2: activating, 3: deactivating
     * @since 7
     */
    function on(type: "wifiStateChange", callback: AsyncCallback<number>): void;

    /**
     * Unsubscribe Wi-Fi status change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @since 7
     */
    function off(type: "wifiStateChange", callback?: AsyncCallback<number>): void;

    /**
     * Subscribe Wi-Fi connection change events.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns 0: disconnected, 1: connected
     * @since 7
     */
    function on(type: "wifiConnectionChange", callback: AsyncCallback<number>): void;

    /**
     * Unsubscribe Wi-Fi connection change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @since 7
     */
    function off(type: "wifiConnectionChange", callback?: AsyncCallback<number>): void;

    /**
     * Subscribe Wi-Fi scan status change events.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns 0: scan fail, 1: scan success
     * @since 7
     */
    function on(type: "wifiScanStateChange", callback: AsyncCallback<number>): void;

    /**
     * Unsubscribe Wi-Fi scan status change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @since 7
     */
    function off(type: "wifiScanStateChange", callback?: AsyncCallback<number>): void;

    /**
     * Subscribe Wi-Fi rssi change events.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @return Returns RSSI value in dBm
     * @since 7
     */
    function on(type: "wifiRssiChange", callback: AsyncCallback<number>): void;

    /**
     * Unsubscribe Wi-Fi rssi change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * <p>The application must have the permission specified by {@code ohos.permission.GET_WIFI_INFO}.
     *
     * @since 7
    */
    function off(type: "wifiRssiChange", callback?: AsyncCallback<number>): void;

    /**
     * Subscribe Wi-Fi stream change events.
     *
     * <p>The application must have the permission specified by {@code ohos.permission.MANAGE_WIFI_CONNECTION}.
     *
     * @return Returns 0: stream none, 1: stream down, 2: stream up, 3: stream bidirectional
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function on(type: "streamChange", callback: AsyncCallback<number>): void;

    /**
     * Unsubscribe Wi-Fi stream change events.
     *
     * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
     *
     * <p>The application must have the permission specified by {@code ohos.permission.MANAGE_WIFI_CONNECTION}.
     *
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function off(type: "streamChange", callback?: AsyncCallback<number>): void;

    interface WifiLinkedInfo {
        /** The SSID of the Wi-Fi hotspot */
        ssid: string;

        /** The BSSID of the Wi-Fi hotspot */
        bssid: string;

        /** The ID(uniquely identifies) of a Wi-Fi connection. */
        networkId: number;

        /** The RSSI(dBm) of a Wi-Fi access point. */
        rssi: number;

        /** The frequency band of a Wi-Fi access point. */
        band: number;

        /** The speed of a Wi-Fi access point. */
        linkSpeed: number;

        /** The frequency of a Wi-Fi access point. */
        frequency: number;

        /** Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden. */
        isHidden:boolean;

        /** Whether this Wi-Fi connection restricts the data volume. */
        isRestricted: boolean;

        /** The load value of this Wi-Fi connection. A greater value indicates a higher load. */
        chload: number;

        /** The signal-to-noise ratio (SNR) of this Wi-Fi connection. */
        snr: number;

        /** The Wi-Fi MAC address of a device. */
        macAddress: string;

        /** The IP address of this Wi-Fi connection. */
        ipAddress: number;

        /** The state of the supplicant of this Wi-Fi connection. */
        suppState: SuppState;

        /** The state of this Wi-Fi connection. */
        connState: ConnState;
    }

    interface IpInfo {
        /** The IP address of the Wi-Fi connection */
        ipAddress: number;

        /** The gateway of the Wi-Fi connection */
        gateway: number;

        /** The network mask of the Wi-Fi connection */
        netmask: number;

        /** The primary DNS server IP address of the Wi-Fi connection */
        primaryDns: number;

        /** The secondary DNS server IP address of the Wi-Fi connection */
        secondDns: number;

        /** The DHCP server IP address of the Wi-Fi connection */
        serverIp: number;

        /** The IP address lease duration of the Wi-Fi connection */
        leaseDuration: number;
    }

    /**
     * Wi-Fi device configuration information.
     *
     * @devices phone, tablet
     * @since 2
     */
    interface WifiDeviceConfig {
        /** Wi-Fi SSID: the maximum length is 32 */
        ssid: string;

        /** Wi-Fi bssid(MAC): the length is 6 */
        bssid: string;

        /** Wi-Fi key: maximum length is 64 */
        preSharedKey: string;

        /** Hide SSID or not, false(default): not hide */
        isHiddenSsid: boolean;

        /** Security type: reference definition of WifiSecurityType */
        securityType: number;

        /** The UID of the Wi-Fi configuration creator */
        creatorUid: number;

        /** Disable reason */
        disableReason: number;

        /** Allocated networkId */
        netId: number;

        /** Random mac type */
        randomMacType: number;

        /** Random mac address, the length is 6 */
        randomMacAddr: string;

        /** IP Type */
        ipType: IpType;

        /** IP config of static */
        staticIp: IpConfig;
    }

    interface IpConfig {
        ipAddress: number;
        gateway: number;
        dnsServers: number[];
        domains: string;
    }

    /**
     * Describes the scanned Wi-Fi information.
     *
     * @devices phone, tablet
     * @since 7
     */
    interface WifiScanInfo {
        /** Wi-Fi SSID: the maximum length is 32 */
        ssid: string;

        /** Wi-Fi bssid(MAC): the length is 6 */
        bssid: string;

        /** Hotspot capability */
        capabilities: string;

        /** Security type: reference definition of WifiSecurityType */
        securityType: number;

        /** Received signal strength indicator (RSSI) */
        rssi: number;

        /** Frequency band */
        band: number;

        /** Frequency */
        frequency: number;

        /** Channel width */
        channelWidth: number;

        /** Time stamp */
        timestamp: number;
    }

    enum IpType {
        /** Use statically configured IP settings */
        STATIC,

        /** Use dynamically configured IP settings */
        DHCP,

        /** No IP details are assigned */
        UNKNOWN,
    }

    export enum SuppState {
        /** The supplicant is not associated with or is disconnected from the AP. */
        DISCONNECTED,

        /** The network interface is disabled. */
        INTERFACE_DISABLED,

        /** The supplicant is disabled. */
        INACTIVE,

        /** The supplicant is scanning for a Wi-Fi connection. */
        SCANNING,

        /** The supplicant is authenticating with a specified AP. */
        AUTHENTICATING,

        /** The supplicant is associating with a specified AP. */
        ASSOCIATING,

        /** The supplicant is associated with a specified AP. */
        ASSOCIATED,

        /** The four-way handshake is ongoing. */
        FOUR_WAY_HANDSHAKE,

        /** The group handshake is ongoing. */
        GROUP_HANDSHAKE,

        /** All authentication is completed. */
        COMPLETED,

        /** Failed to establish a connection to the supplicant. */
        UNINITIALIZED,

        /** The supplicant is in an unknown or invalid state. */
        INVALID
    }

    export enum ConnState {
        /** The device is searching for an available AP. */
        SCANNING,

        /** The Wi-Fi connection is being set up. */
        CONNECTING,

        /** The Wi-Fi connection is being authenticated. */
        AUTHENTICATING,

        /** The IP address of the Wi-Fi connection is being obtained. */
        OBTAINING_IPADDR,

        /** The Wi-Fi connection has been set up. */
        CONNECTED,

        /** The Wi-Fi connection is being torn down. */
        DISCONNECTING,

        /** The Wi-Fi connection has been torn down. */
        DISCONNECTED,

        /** Failed to set up the Wi-Fi connection. */
        UNKNOWN
    }
}

export default wifi;
