/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import {ErrorCallback, AsyncCallback, Callback} from './basic';
import { Context } from './app/context';

/**
 * This module provides the DRM capability to multimedia player.
 * @namespace drm
 * @syscap SystemCapability.Multimedia.Drm.Core
 * @since 11
 */
declare namespace drm {


    /**
     * Enumerates which config name we can get.
     * @enum PreDefinedConfigName
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    enum PreDefinedConfigName {
        /**
         * config name vendor
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_DEVICE_VENDOR = "vendor",
        /**
         * config name version
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_DEVICE_VERSION = "version",
        /**
         * config name description
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_DEVICE_DESCRIPTION = "description",
        /**
         * config name algorithms
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_DEVICE_ALGORITHMS = "algorithms",
        /**
         * config name deviceUniqueId
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_DEVICE_UNIQUE_ID = "deviceUniqueId",
        /**
         * config name maxSessionNum
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_SESSION_MAX = "maxSessionNum",
        /**
         * config name currentSessionNum
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_SESSION_CURRENT = "currentSessionNum",
        /**
         * config name maxHDCPLevel
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_OUTPUT_HDCP_MAX = "maxHDCPLevel",
        /**
         * config name currentHDCPLevel
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_OUTPUT_HDCP_CURRENT = "currentHDCPLevel",
        /**
         * config name maxADCPLevel
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_OUTPUT_ADCP_MAX = "maxADCPLevel",
        /**
         * config name currentADCPLevel
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CONFIG_OUTPUT_ADCP_CURRENT = "currentADCPLevel",
    }
    /**
     * Enumerates event types of listener.
     * @enum ListenerType
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    enum ListenerType {
        /**
         * DRM event base.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LISTENER_DRM_EVENT = 200,
         /**
         * provison required event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LISTENER_PROVISION_REQUIRED = 201,
        /**
         * license required event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LISTENER_KEY_NEEDED = 202,
        /**
         * license expired event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LISTENER_KEY_EXPIRED = 203,
        /**
         *vendor defined event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LISTENER_VENDOR_DEFINED = 204,
        /**
         * session reclaimed event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LISTENER_KEYSESSION_RECLAIMED = 205,
        /**
         * expiration update event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LISTENER_EXPIRATION_UPDATE = 206,
        /**
         * license change event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LISTENER_KEY_CHANGE = 207,
        /**
         * session lost event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LISTENER_KEYSESSION_LOST = 208,
    }

    /**
     * Enumerates hdcp level.
     * @enum HdcpLevel
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    enum HdcpLevel {
        /**
         * HDCP level unknown.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        HDCP_UNKNOWN = 0,
        /**
         * no HDCP level.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        HDCP_NONE,
        /**
         * HDCP level V1.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        HDCP_V1,
        /**
         * HDCP level V2.0.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        HDCP_V2,
        /**
         * HDCP level V2.1.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        HDCP_V2_1,
        /**
         * HDCP level V2.2.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        HDCP_V2_2,
        /**
         * HDCP level V2.3.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        HDCP_V2_3,
        /**
         * output prohibited.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        HDCP_NO_OUTPUT = 0x7fff,
    }

    /**
     * Enumerates adcp level.
     * @enum AdcpLevel
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    enum AdcpLevel {
        /**
         * ADCP level unknown.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        ADCP_UNKNOWN = 0,
        /**
         * ADCP level V1 security level L1.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        ADCP_V1_L1,
        /**
         * ADCP level V1 security level L2.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        ADCP_V1_L2,
        /**
         * ADCP level V1 security level L3.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        ADCP_V1_L3,
        /**
         * output prohibited.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        ADCP_NO_OUTPUT = 0x7fff,
    }

    /**
     * Enumerates license type.
     * @enum LicenseType
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    enum LicenseType {
        /**
         * offline license type.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LICENSE_TYPE_OFFLINE = 0,
        /**
         * online license type.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        LICENSE_TYPE_ONLINE,
    }

    /**
     * Enumerates offline license status.
     * @enum OfflineLicenseStatus
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    enum OfflineLicenseStatus {
        /**
         * offline license status unknown.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        OFFLINELICENSE_STATUS_UNKNOWN = 0,
        /**
         * offline license status usable.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        OFFLINELICENSE_STATUS_USABLE = 1,
        /**
         * offline license status inactive.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        OFFLINELICENSE_STATUS_INACTIVE = 2,
    }

    /**
     * Enumerates certificate status.
     * @enum CertificateStatus
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    enum CertificateStatus {
        /**
         * Device already privisioned.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CERT_STATUS_PROVISIONED = 0,
        /**
         * Device not privisioned.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CERT_STATUS_NOT_PROVISIONED,
        /**
         * Cert already expired.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CERT_STATUS_EXPIRED,
        /**
         * Certs are invalid.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CERT_STATUS_INVALID,
        /**
         * Get certs status failed.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        CERT_STATUS_GET_FAILED,
    }

    /**
     * Enumerates license request types.
     * @enum RequestType
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    enum RequestType {
        /**
         * License request type unknown.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        REQUEST_TYPE_UNKNOWN = 0,
        /**
         * License request type initial.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        REQUEST_TYPE_INITIAL = 1,
        /**
         * License request type renewal.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        REQUEST_TYPE_RENEWAL = 2,
        /**
         * License request type release.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        REQUEST_TYPE_RELEASE = 3,
        /**
         * License request type none.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        REQUEST_TYPE_NONE = 4,
        /**
         * License request type update.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        REQUEST_TYPE_UPDATE = 5,
    }

    /**
     * Enumerates security level.
     * @enum SecurityLevel
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    enum SecurityLevel {
        /**
         * Device decrypt and decode type unknown.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        SECURITY_LEVEL_UNKNOWN = 0,
        /**
         * Device using software decrypt.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        SECURITY_LEVEL_SW_CRYPTO = 1,
        /**
         * Device using software decode.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        SECURITY_LEVEL_SW_DECODE = 2,
        /**
         * Device using hardware decrypt.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        SECURITY_LEVEL_HW_CRYPTO = 3,
        /**
         * Device using hardtware decode.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        SECURITY_LEVEL_HW_DECODE = 4,
        /**
         * Device using hardtware and software decode.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        SECURITY_LEVEL_HW_ALL = 5,
        /**
         * max mode.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        SECURITY_LEVEL_MAX = 6,
    }

    /**
     * Provides the drm provision request definations.
     * @enum ProvisionRequest
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    interface ProvisionRequest {
        /**
         * Provision request data sent to provision server.
         * @type { Uint8Array }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        mData: Uint8Array;
        /**
         * Provision server URL.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        mDefaultURL: string;
    }

    /**
     * Provides the drm license request info optional data.
     * @enum OptionalData
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    interface OptionalData {
        /**
         * App defined optional data name.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        name: string;
        /**
         * App defined optional data value.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        value: string;
    }

     /**
     * Provides the drm license request definations.
     * @enum LicenseRequest
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
     interface LicenseRequest {
        /**
         * License request type.
         * @type { RequestType }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        licenseRequestType: RequestType;
        /**
         * License request data sent to license server.
         * @type { Uint8Array }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        mData: Uint8Array;
        /**
         * License server URL.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        mDefaultURL: string;
    }

    /**
     * Used to indicates the event info attached to specific event type.
     * @enum EventInfo
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    interface EventInfo {
        /**
         * Event info name.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        name: string;
        /**
         * Event info value.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        value: string;
    }

    /**
     * Used to indicates the metrics info.
     * @enum MetricKeyValue
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    interface MetricKeyValue {
        /**
         * Metric info name.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        name: string;
        /**
         * Metric info value.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        value: string;
    }

    /**
     * Used to indicates the license status.
     * @enum LicenseStatus
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    interface LicenseStatus {
        /**
         * License Id in string.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        name: string;
        /**
         * License status description.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        value: string;
    }

    /**
     * Used to indicates the license status with a key and its value.
    * @enum KeysInfo
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    interface KeysInfo {
        /**
         * Keys Id in license.
         * @type { Uint8Array }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        keyId: Uint8Array;
        /**
         * Keys status description.
         * @type { string }
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        value: string;
    }

    /**
     * Creates a Mediakeysystem instance.
     * @param { string } name Used to point a Digital Right Managements solution.
     * @param { Callback<MediaKeySystem> } callback used to return the Mediakeysystem instance.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    function createMediaKeySystem(name: string, callback: Callback<MediaKeySystem>): void;

    /**
     * Creates a MediaKeySystem instance.
     * @param { string } name Used to point a Digital Right Managements solution.
     * @returns { MediaKeySystem } return the MediaKeySystem instance.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    function createMediaKeySystem(name: string): MediaKeySystem;

    /**
     * Judge whether a system that specifies UUID, mimetype and security level is supported.
     * @param { string } name Used to point a Digital Right Managements solution.
     * @param { string } mimeType Used to specifies the meida type.
     * @param { SecurityLevel } level Used to specifies the SecurityLevel.
     * @returns { boolean } Whether these conditions will be met.
     * @syscap SystemCapability.Multimedia.Drm.Core
     *  @since 11
     */
    function isMediaKeySystemSupported(name: string, mimeType: string, level: SecurityLevel): boolean;

    /**
     * Judge whether a system that specifies UUID, mimetype and security level is supported.
     * @param { string } name Used to point a Digital Right Managements solution.
     * @param { string } mimeType Used to specifies the meida type.
     * @returns { boolean } Whether these conditions will be met.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    function isMediaKeySystemSupported(name: string, mimeType: string): boolean;

    /**
     * Judge whether a system that specifies UUID, mimetype and security level is supported.
     * @param { string } name Used to point a Digital Right Managements solution.
     * @returns { boolean } Whether these conditions will be met.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    function isMediaKeySystemSupported(name: string): boolean;

    /**
     * Manages and record key sessions. Before calling an MediaKeySystem method, we must use getMediaKeySystem
     * to get a MediaKeySystem instance, then we can call functions.
     * @interface MediaKeySystem
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     *
     */
    interface MediaKeySystem {

        /**
         * Get the specified configuration.
         * @param { string } configName Used to specify the config name.
         * @returns { string } The result.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        getConfigurationString(configName: string): string;

        /**
         * Set the specified configuration.
         * @param { string } configName Used to specify the config name.
         * @param { string } value The value to be set.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        setConfigurationString(configName: string, value: string): void;

        /**
         * Get the specified configuration.
         * @param { string } configName Used to specify the config name.
         * @returns { Uint8Array } The result.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        getConfigurationByteArray(configName: string): Uint8Array;

        /**
         * Set the specified configuration.
         * @param { string } configName Used to specify the config name.
         * @param { Uint8Array } value The value to be set.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        setConfigurationByteArray(configName: string, value: Uint8Array): void;

        /**
         * Get performance statistics information.That includes currentSessionNum, version, decryptNumber,
         * and errorDecryptNumber.
         * @returns { MetricKeyValue[] } A list that includes perfaormence index and corresponding statistics.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        getMetrics(): MetricKeyValue[];

        /**
         * Get security level.
         * @returns { SecurityLevel } return SecurityLevel.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        getMaxSecurityLevel(): SecurityLevel;

        /**
         * Generate the media key system provision request.
         * @returns { ProvisionRequest } return a ProvisionRequest
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */

        generateKeySystemRequest(): Promise<ProvisionRequest>;

        /**
         * Process the response corresponding the key system request obtained by the application.
         * @param { Uint8Array } response Response corresponding to the request.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        processKeySystemResponse(response: Uint8Array): Promise<void>;

        /**
         * Get certificate status of DRM system.
         * @returns { CertificateStatus } Certificate Status.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        getCertificateStatus():CertificateStatus;

        /**
         * Register or unregister listens for drm events.
         * @param { 'keySystemRequired' } type Type of the drm event to listen for.
         * @param { Callback<EventInfo>callback } used to listen for the key system required event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        on(type: 'keySystemRequired', callback: Callback<EventInfo>): void;
        off(type: 'keySystemRequired'): void;

        /**
         * Create a key session instance with level.
         * @param { SecurityLevel } level Used to specify the Security level.
         * @returns { MediaKeySession } a MediaKeySession instance.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        createMediaKeySession(level: SecurityLevel): MediaKeySession;

        /**
         * Create a key session instance.
         * @returns { MediaKeySession } a MediaKeySession instance.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        createMediaKeySession(): MediaKeySession;

        /**
         * Get the list of offline LicenseIds.
         * @returns { Uint8Array[] } The list of offline LicenseIds.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        getOfflineLicenseIds(): Uint8Array[];

        /**
         * Get offline license status corresponding to the licenseId.
         * @param { Uint8Array } licenseId The licenseId specifies license.
         * @returns { OfflineLicenseStatus } Offline License Status.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        getOfflineLicenseStatus(licenseId: Uint8Array): OfflineLicenseStatus;

        /**
         * Remove license corresponding to the licenseId.
         * @param { Uint8Array } licenseId The licenseId specifies which license should be remove.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        removeOfflineLicense(licenseId: Uint8Array): void;
        /**
         * Release the resource before the mediakeysystem gonna be unused.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        destroy(): void;
    }

    /**
     * Provide functions and keep a decrypt module. Before calling an MediaKeySession method, we must
     * use MediaKeySystem's createMediaKeySession to get a key session instance.
     * @interface MediaKeySession
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    interface MediaKeySession {

        /**
         * Generate the license request.
         * @param { string } mimeType Media type.
         * @param { Uint8Array } initData pssh after base64.
         * @param { number } licenseType Offline or online.
         * @param { OptionalData[] } optionalData optional data app to drm framework.
         * @return { LicenseRequest } LicenseRequest
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        generateLicenseRequest(mimeType: string, initData: Uint8Array, licenseType: number,
            optionalData?: OptionalData[]): Promise<LicenseRequest>;

        /**
         * Process the response corresponding the license request obtained by the application.
         * @param { Uint8Array } response The response.
         * @returns { Uint8Array } licenseId.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        processLicenseResponse(response: Uint8Array): Promise<Uint8Array>;

        /**
         * Check the license status
         * @returns { LicenseStatus[] } License status pair.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        checkLicenseStatus(): LicenseStatus[];

        /**
         * Remove license.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        removeLicense(): void;

        /**
         * Generate offline license request.
         * @param { Uint8Array } licenseId The licenseId specifies which media content's license request should be generated.
         * @returns { Uint8Array } the license request.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        generateOfflineReleaseRequest(licenseId: Uint8Array): Promise<Uint8Array>;

        /**
         * Process offline license response.
         * @param { Uint8Array } licenseId The licenseId specifies which media content's license it is
         * @param { Uint8Array } response The offline license.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        processOfflineReleaseResponse(licenseId: Uint8Array, response: Uint8Array): Promise<void>;

        /**
         * Restore offline license response.
         * @param { Uint8Array } licenseId The licenseId specifies which license should be restore.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        restoreOfflineLicense(licenseId: Uint8Array): Promise<void>;

        /**
         * Get security level.
         * @returns { SecurityLevel } Session securityLevel.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        getSecurityLevel(): SecurityLevel;

        /**
         * When the decrypt content need a secure decoder, return true, otherwise return false.
         * @param { string } mimeType The media content type.
         * @returns { boolean } Whether secure decoder is needed.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        requireSecureDecoderModule(mimeType: string): boolean;

        /**
         * Register or unregister keyRequired event.
         * @param { 'keyRequired' } type Type of the drm event to listen for.
         * @param { Callback<EventInfo> } callback used to listen for the key required event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        on(type: 'keyRequired', callback: Callback<EventInfo>): void;
        off(type: 'keyRequired'): void;

        /**
         * Register or unregister keyExpired event.
         * @param { 'keyExpired' } type Type of the drm event to listen for.
         * @param { Callback<EventInfo> } callback used to listen for the key required event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        on(type: 'keyExpired', callback: Callback<EventInfo>): void;
        off(type: 'keyExpired'): void;

        /**
         * Register or unregister vendorDefined event.
         * @param { 'vendorDefined' } type Type of the drm event to listen for.
         * @param { Callback<EventInfo> } callback used to listen for the vendor defined event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        on(type: 'vendorDefined', callback: Callback<EventInfo>): void;
        off(type: 'vendorDefined'): void;

        /**
         * Register or unregister sessionReclaimed event.
         * @param { 'sessionReclaimed' } type Type of the drm event to listen for.
         * @param { Callback<EventInfo> } callback used to listen for keySession reclaimed event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        on(type: 'sessionReclaimed', callback: Callback<EventInfo>): void;
        off(type: 'sessionReclaimed'): void;

        /**
         * Register or unregister expirationUpdate event.
         * @param { 'expirationUpdate' } type Type of the drm event to listen for.
         * @param { Callback<EventInfo> } callback used to listen for expiration update event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        on(type: 'expirationUpdate', callback: Callback<EventInfo>): void;
        off(type: 'expirationUpdate'): void;

        /**
         * Register or unregister keysChange event.
         * @param { 'keysChange' } type Type of the drm event to listen for.
         * @param { Callback<EventInfo> } callback used to listen for keys change event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        on(type: 'keysChange', callback: Callback<KeysInfo[]>): void;
        off(type: 'keysChange'): void;

        /**
         * Register or unregister sessionLost event .
         * @param { 'sessionLost' } type Type of the drm event to listen for.
         * @param { Callback<EventInfo> } callback used to listen for Session lost event.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        on(type: 'sessionLost', callback: Callback<EventInfo>): void;
        off(type: 'sessionLost'): void;

        /**
         * Release the resource before the session gonna be unused.
         * @syscap SystemCapability.Multimedia.Drm.Core
         * @since 11
         */
        destroy(): void;

    }
}

export default drm;