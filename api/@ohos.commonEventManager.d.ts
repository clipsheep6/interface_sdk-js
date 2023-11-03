/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { CommonEventData } from './commonEvent/commonEventData';
import { CommonEventSubscriber } from './commonEvent/commonEventSubscriber';
import { CommonEventSubscribeInfo } from './commonEvent/commonEventSubscribeInfo';
import { CommonEventPublishData } from './commonEvent/commonEventPublishData';

/**
 * Common event definition
 * @namespace commonEventManager
 * @syscap SystemCapability.Notification.CommonEvent
 * @since 9
 */
declare namespace commonEventManager {
  /**
   * Publishes an ordered, sticky, or standard common event.
   * @param { string } event - Name of the common event.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the common event published.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 1500004 - The caller is not a system service.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  function publish(event: string, callback: AsyncCallback<void>): void;

  /**
   * Publishes an ordered, sticky, or standard common event.
   * @param { string } event - Name of the common event.
   * @param { CommonEventPublishData } options - Content and attributes of the event to publish.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the common event published.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 1500004 - The caller is not a system service.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  function publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>): void;

  /**
   * Publishes an ordered, sticky, or standard common event to a user.
   * @param { string } event - Name of the common event.
   * @param { number } userId - User to receive the common event.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the common event published.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 1500004 - The caller is not a system service.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 9
   */
  function publishAsUser(event: string, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Publishes an ordered, sticky, or standard common event to a user.
   * @param { string } event - Name of the common event.
   * @param { number } userId - User to receive the common event.
   * @param { CommonEventPublishData } options - Content and attributes of the common event.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the common event published.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 1500004 - The caller is not a system service or system application.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @throws { BusinessError } 1500009 - Failed to obtain system parameters.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 9
   */
  function publishAsUser(event: string, userId: number, options: CommonEventPublishData, callback: AsyncCallback<void>): void;

  /**
   * Creates a common event subscriber. This method uses an asynchronous callback to return the result.
   * @param { CommonEventSubscribeInfo } subscribeInfo - Information of the subscriber to create.
   * @param { AsyncCallback<CommonEventSubscriber> } callback - Callback invoked to return the subscriber created.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  function createSubscriber(subscribeInfo: CommonEventSubscribeInfo, callback: AsyncCallback<CommonEventSubscriber>): void;

  /**
   * Creates a common event subscriber. This method uses a promise to return the result.
   * @param { CommonEventSubscribeInfo } subscribeInfo - Information of the subscriber to create.
   * @returns { Promise<CommonEventSubscriber> } - Promise used to return the subscriber created.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  function createSubscriber(subscribeInfo: CommonEventSubscribeInfo): Promise<CommonEventSubscriber>;

  /**
   * Subscribes to an ordered, sticky, or standard common event.
   * @param { CommonEventSubscriber } subscriber - Subscriber of the common event.
   * @param { AsyncCallback<CommonEventData> } callback - Callback invoked to return the common event.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  function subscribe(subscriber: CommonEventSubscriber, callback: AsyncCallback<CommonEventData>): void;

  /**
   * Unsubscribes from an ordered, sticky, or standard common event for a subscriber.
   * @param { CommonEventSubscriber } subscriber - Subscriber of the common event.
   * @param { AsyncCallback<void> } callback - Callback that returns no value.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  function unsubscribe(subscriber: CommonEventSubscriber, callback?: AsyncCallback<void>): void;

  /**
   * Removes a sticky common event.
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @param { string } event - Name of the common event to remove.
   * @param { AsyncCallback<void> } callback - Callback that returns no value.
   * @throws { BusinessError } 201 - The application dose not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 1500004 - The caller is not a system service.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 10
   */
  function removeStickyCommonEvent(event: string, callback: AsyncCallback<void>): void;

  /**
   * Removes a sticky common event.
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @param { string } event - Name of the common event to remove.
   * @throws { BusinessError } 201 - The application dose not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 1500004 - The caller is not a system service.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 10
   */
  function removeStickyCommonEvent(event: string): Promise<void>;

  /**
   * Sets the static subscriber state.
   * @param { boolean } enable - Whether to enable the static subscriber.
   * @param { AsyncCallback<void> } callback - Callback that returns no value.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @systemapi Hide this for inner system use.
   * @syscap SystemCapability.Notification.CommonEvent
   * @StageModelOnly
   * @since 10
   */
  function setStaticSubscriberState(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets the static subscriber state.
   * @param { boolean } enable - Whether to enable the static subscriber.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Invalid parameter.
   * @throws { BusinessError } 1500007 - Failed to send a message to the common event service.
   * @throws { BusinessError } 1500008 - The common event service is not initialized.
   * @systemapi Hide this for inner system use.
   * @syscap SystemCapability.Notification.CommonEvent
   * @StageModelOnly
   * @since 10
   */
  function setStaticSubscriberState(enable: boolean): Promise<void>;

  /**
   * Enumerates the common events supported.
   * @enum { string }
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9
   */
  export enum Support {
    /**
     * Event indicating that a device is booted or the system upgrade is complete. It can be sent only by the system.
     */
    COMMON_EVENT_BOOT_COMPLETED = "usual.event.BOOT_COMPLETED",

    /**
     * Event indicating a device in the locked state after being booted.
     */
    COMMON_EVENT_LOCKED_BOOT_COMPLETED = "usual.event.LOCKED_BOOT_COMPLETED",

    /**
     * Event indicating that a device is shut down (turned off, not sleeping).
     */
    COMMON_EVENT_SHUTDOWN = "usual.event.SHUTDOWN",

    /**
     * Event indicating the battery information, such as the the charging state and level.
     */
    COMMON_EVENT_BATTERY_CHANGED = "usual.event.BATTERY_CHANGED",

    /**
     * Event indicating a device in low battery state.
     */
    COMMON_EVENT_BATTERY_LOW = "usual.event.BATTERY_LOW",

    /**
     * Event indicating that the battery level is an ok state.
     */
    COMMON_EVENT_BATTERY_OKAY = "usual.event.BATTERY_OKAY",

    /**
     * Event indicating that a device is connected to the power supply.
     */
    COMMON_EVENT_POWER_CONNECTED = "usual.event.POWER_CONNECTED",

    /**
     * Event indicating that a device is disconnected from the power supply.
     */
    COMMON_EVENT_POWER_DISCONNECTED = "usual.event.POWER_DISCONNECTED",

    /**
     * Event indicating that the screen is turned off.
     */
    COMMON_EVENT_SCREEN_OFF = "usual.event.SCREEN_OFF",

    /**
     * Event indicating that a device is woke up and interactive.
     */
    COMMON_EVENT_SCREEN_ON = "usual.event.SCREEN_ON",

    /**
     * Event indicating that the thermal state level is changed.
     */
    COMMON_EVENT_THERMAL_LEVEL_CHANGED = "usual.event.THERMAL_LEVEL_CHANGED",

    /**
     * Event indicating that the user is present after the device is woke up.
     * @deprecated since 10
     */
    COMMON_EVENT_USER_PRESENT = "usual.event.USER_PRESENT",

    /**
     * Event indicating that the current time is changed.
     */
    COMMON_EVENT_TIME_TICK = "usual.event.TIME_TICK",

    /**
     * Event indicating that the time is set.
     */
    COMMON_EVENT_TIME_CHANGED = "usual.event.TIME_CHANGED",

    /**
     * Event indicating that the current date is changed.
     */
    COMMON_EVENT_DATE_CHANGED = "usual.event.DATE_CHANGED",

    /**
     * Event indicating that the time zone is changed.
     */
    COMMON_EVENT_TIMEZONE_CHANGED = "usual.event.TIMEZONE_CHANGED",

    /**
     * Event indicating the dialog to close.
     */
    COMMON_EVENT_CLOSE_SYSTEM_DIALOGS = "usual.event.CLOSE_SYSTEM_DIALOGS",

    /**
     * Event indicating that a new application package is installed on the device.
     */
    COMMON_EVENT_PACKAGE_ADDED = "usual.event.PACKAGE_ADDED",

    /**
     * Event indicating that a new application version is installed on the device to
     * replace the earlier version. The event contains the name of the package.
     */
    COMMON_EVENT_PACKAGE_REPLACED = "usual.event.PACKAGE_REPLACED",

    /**
     * Event indicating that a new application version is installed on the device to
     * replace the earlier version. The event does not contain additional data and only be sent to the
     * replaced application.
     */
    COMMON_EVENT_MY_PACKAGE_REPLACED = "usual.event.MY_PACKAGE_REPLACED",

    /**
     * Event indicating that an application package is removed from the device.
     */
    COMMON_EVENT_PACKAGE_REMOVED = "usual.event.PACKAGE_REMOVED",

    /**
     * Event indicating that an application bundle is removed from the device.
     */
    COMMON_EVENT_BUNDLE_REMOVED = "usual.event.BUNDLE_REMOVED",

    /**
     * Event indicating that an application package is completely removed from the device.
     */
    COMMON_EVENT_PACKAGE_FULLY_REMOVED = "usual.event.PACKAGE_FULLY_REMOVED",

    /**
     * Event indicating the change of an application package.
     */
    COMMON_EVENT_PACKAGE_CHANGED = "usual.event.PACKAGE_CHANGED",

    /**
     * Event indicating that an application is restarted and all of its processes are killed.
     */
    COMMON_EVENT_PACKAGE_RESTARTED = "usual.event.PACKAGE_RESTARTED",

    /**
     * Event indicating that the application package data is cleared.
     */
    COMMON_EVENT_PACKAGE_DATA_CLEARED = "usual.event.PACKAGE_DATA_CLEARED",

    /**
     * Event indicating that the package cache is cleared.
     */
    COMMON_EVENT_PACKAGE_CACHE_CLEARED = "usual.event.PACKAGE_CACHE_CLEARED",

    /**
     * Event indicating that the packages are suspended.
     */
    COMMON_EVENT_PACKAGES_SUSPENDED = "usual.event.PACKAGES_SUSPENDED",

    /**
     * Event indicating that the packages are resumed.
     */
    COMMON_EVENT_PACKAGES_UNSUSPENDED = "usual.event.PACKAGES_UNSUSPENDED",

    /**
     * Event indicating that the user's package is suspended.
     */
    COMMON_EVENT_MY_PACKAGE_SUSPENDED = "usual.event.MY_PACKAGE_SUSPENDED",

    /**
     * Event indicating that the user's package is resumed.
     */
    COMMON_EVENT_MY_PACKAGE_UNSUSPENDED = "usual.event.MY_PACKAGE_UNSUSPENDED",

    /**
     * Event indicating that a user ID is removed from the system.
     */
    COMMON_EVENT_UID_REMOVED = "usual.event.UID_REMOVED",

    /**
     * Event indicating that an application is first launched after being installed.
     */
    COMMON_EVENT_PACKAGE_FIRST_LAUNCH = "usual.event.PACKAGE_FIRST_LAUNCH",

    /**
     * Event indicating that a package needs to be verified.
     */
    COMMON_EVENT_PACKAGE_NEEDS_VERIFICATION =
    "usual.event.PACKAGE_NEEDS_VERIFICATION",

    /**
     * Event indicating that a package has been verified.
     */
    COMMON_EVENT_PACKAGE_VERIFIED = "usual.event.PACKAGE_VERIFIED",

    /**
     * Event indicating that resources for a set of packages (which were previously unavailable) become
     * available because the external storage device holding the information is available.
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_AVAILABLE =
    "usual.event.EXTERNAL_APPLICATIONS_AVAILABLE",

    /**
     * Event indicating that resources for a set of packages are currently unavailable because the external storage
     * device holding the information is unavailable.
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_UNAVAILABLE =
    "usual.event.EXTERNAL_APPLICATIONS_UNAVAILABLE",

    /**
     * Event indicating that the device configuration such as orientation and locale is changed.
     */
    COMMON_EVENT_CONFIGURATION_CHANGED = "usual.event.CONFIGURATION_CHANGED",

    /**
     * Event indicating that the current device's locale is changed.
     */
    COMMON_EVENT_LOCALE_CHANGED = "usual.event.LOCALE_CHANGED",

    /**
     *  Event indicating that an alert of low memory is acknowledged by the user and
     *  package storage should be cleaned up.
     */
    COMMON_EVENT_MANAGE_PACKAGE_STORAGE = "usual.event.MANAGE_PACKAGE_STORAGE",

    /**
     * Event sent by the smart function when the system in drive mode.
     */
    COMMON_EVENT_DRIVE_MODE = "common.event.DRIVE_MODE",

    /**
     * Event sent by the smart function when the system in home mode.
     */
    COMMON_EVENT_HOME_MODE = "common.event.HOME_MODE",

    /**
     * Event sent by the smart function when the system in office mode.
     */
    COMMON_EVENT_OFFICE_MODE = "common.event.OFFICE_MODE",

    /**
     * Remind new user of preparing to start.
     */
    COMMON_EVENT_USER_STARTED = "usual.event.USER_STARTED",

    /**
     * Remind previous user of that the service is running in background.
     */
    COMMON_EVENT_USER_BACKGROUND = "usual.event.USER_BACKGROUND",

    /**
     * Remind new user of that the service is running in the foreground.
     */
    COMMON_EVENT_USER_FOREGROUND = "usual.event.USER_FOREGROUND",

    /**
     * Remind new user of that the service has been switched to new user.
     */
    COMMON_EVENT_USER_SWITCHED = "usual.event.USER_SWITCHED",

    /**
     * Remind new user of that the service is starting.
     */
    COMMON_EVENT_USER_STARTING = "usual.event.USER_STARTING",

    /**
     * Remind new user of that the service is unlocked.
     */
    COMMON_EVENT_USER_UNLOCKED = "usual.event.USER_UNLOCKED",

    /**
     * Remind new user of that the service is stopping.
     */
    COMMON_EVENT_USER_STOPPING = "usual.event.USER_STOPPING",

    /**
     * Remind new user of that the service is stopped.
     */
    COMMON_EVENT_USER_STOPPED = "usual.event.USER_STOPPED",

    /**
     * Event indicating that a distributed account is logged in.
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGIN = "common.event.DISTRIBUTED_ACCOUNT_LOGIN",

    /**
     * Event indicating that a distributed account is logged out.
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOUT = "common.event.DISTRIBUTED_ACCOUNT_LOGOUT",

    /**
     * Event indicating that a distributed account is invalid.
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_TOKEN_INVALID = "common.event.DISTRIBUTED_ACCOUNT_TOKEN_INVALID",

    /**
     * Event indicating that a distributed account is logged off.
     */
    COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOFF = "common.event.DISTRIBUTED_ACCOUNT_LOGOFF",

    /**
     * Event sent to report the Wi-Fi state.
     */
    COMMON_EVENT_WIFI_POWER_STATE = "usual.event.wifi.POWER_STATE",

    /**
     * Event sent to report the Wi-Fi scan results.
     */
    COMMON_EVENT_WIFI_SCAN_FINISHED = "usual.event.wifi.SCAN_FINISHED",

    /**
     * Event sent to report the Wi-Fi RSSI change.
     */
    COMMON_EVENT_WIFI_RSSI_VALUE = "usual.event.wifi.RSSI_VALUE",

    /**
     * Event sent to report the Wi-Fi connect state.
     */
    COMMON_EVENT_WIFI_CONN_STATE = "usual.event.wifi.CONN_STATE",

    /**
     * Event sent to report the Wi-Fi hotspot state.
     */
    COMMON_EVENT_WIFI_HOTSPOT_STATE = "usual.event.wifi.HOTSPOT_STATE",

    /**
     * Event indicating that a station connects to Wi-Fi.
     */
    COMMON_EVENT_WIFI_AP_STA_JOIN = "usual.event.wifi.WIFI_HS_STA_JOIN",

    /**
     * Event indicating that a station disconnects from Wi-Fi.
     */
    COMMON_EVENT_WIFI_AP_STA_LEAVE = "usual.event.wifi.WIFI_HS_STA_LEAVE",

    /**
     * Event indicating the change of the Wi-Fi MpLink state.
     */
    COMMON_EVENT_WIFI_MPLINK_STATE_CHANGE = "usual.event.wifi.mplink.STATE_CHANGE",

    /**
     * Event indicating the change of the Wi-Fi P2P connection state.
     */
    COMMON_EVENT_WIFI_P2P_CONN_STATE = "usual.event.wifi.p2p.CONN_STATE_CHANGE",

    /**
     * Event indicating the change of the Wi-Fi P2P state.
     */
    COMMON_EVENT_WIFI_P2P_STATE_CHANGED = "usual.event.wifi.p2p.STATE_CHANGE",

    /**
     * Event indicating the change of the Wi-Fi P2P peers state.
     */
    COMMON_EVENT_WIFI_P2P_PEERS_STATE_CHANGED =
    "usual.event.wifi.p2p.DEVICES_CHANGE",

    /**
     * Event indicating the change of the Wi-Fi P2P discovery state.
     */
    COMMON_EVENT_WIFI_P2P_PEERS_DISCOVERY_STATE_CHANGED =
    "usual.event.wifi.p2p.PEER_DISCOVERY_STATE_CHANGE",

    /**
     * Event indicating the change of the Wi-Fi P2P current device state.
     */
    COMMON_EVENT_WIFI_P2P_CURRENT_DEVICE_STATE_CHANGED =
    "usual.event.wifi.p2p.CURRENT_DEVICE_CHANGE",

    /**
     * Event indicating that the Wi-Fi P2P group info is changed.
     */
    COMMON_EVENT_WIFI_P2P_GROUP_STATE_CHANGED =
    "usual.event.wifi.p2p.GROUP_STATE_CHANGED",

    /**
     * Bluetooth.handsfree.ag.connect.state.update.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_UPDATE =
    "usual.event.bluetooth.handsfree.ag.CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.handsfree.ag.current.device.update.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CURRENT_DEVICE_UPDATE =
    "usual.event.bluetooth.handsfree.ag.CURRENT_DEVICE_UPDATE",

    /**
     * Bluetooth.handsfree.ag.audio.state.update.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_AUDIO_STATE_UPDATE =
    "usual.event.bluetooth.handsfree.ag.AUDIO_STATE_UPDATE",

    /**
     * Bluetooth.a2dpsource.connect.state.update.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_UPDATE =
    "usual.event.bluetooth.a2dpsource.CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.a2dpsource.current.device.update.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CURRENT_DEVICE_UPDATE =
    "usual.event.bluetooth.a2dpsource.CURRENT_DEVICE_UPDATE",

    /**
     * Bluetooth.a2dpsource.playing.state.update.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_PLAYING_STATE_UPDATE =
    "usual.event.bluetooth.a2dpsource.PLAYING_STATE_UPDATE",

    /**
     * Bluetooth.a2dpsource.avrcp.connect.state.update.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_UPDATE =
    "usual.event.bluetooth.a2dpsource.AVRCP_CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.a2dpsource.codec.value.update.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_UPDATE =
    "usual.event.bluetooth.a2dpsource.CODEC_VALUE_UPDATE",

    /**
     * Bluetooth.remotedevice.discovered.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_DISCOVERED =
    "usual.event.bluetooth.remotedevice.DISCOVERED",

    /**
     * Bluetooth.remotedevice.class.value.update.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CLASS_VALUE_UPDATE =
    "usual.event.bluetooth.remotedevice.CLASS_VALUE_UPDATE",

    /**
     * Bluetooth.remotedevice.acl.connected.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_CONNECTED =
    "usual.event.bluetooth.remotedevice.ACL_CONNECTED",

    /**
     * Bluetooth.remotedevice.acl.disconnected.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_DISCONNECTED =
    "usual.event.bluetooth.remotedevice.ACL_DISCONNECTED",

    /**
     * Bluetooth.remotedevice.name.update.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_NAME_UPDATE =
    "usual.event.bluetooth.remotedevice.NAME_UPDATE",

    /**
     * Bluetooth.remotedevice.pair.state.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE =
    "usual.event.bluetooth.remotedevice.PAIR_STATE",

    /**
     * Bluetooth.remotedevice.battery.value.update.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_BATTERY_VALUE_UPDATE =
    "usual.event.bluetooth.remotedevice.BATTERY_VALUE_UPDATE",

    /**
     * Bluetooth.remotedevice.sdp.result.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_SDP_RESULT =
    "usual.event.bluetooth.remotedevice.SDP_RESULT",

    /**
     * Bluetooth.remotedevice.uuid.value.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_UUID_VALUE =
    "usual.event.bluetooth.remotedevice.UUID_VALUE",

    /**
     * Bluetooth.remotedevice.pairing.req.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_REQ =
    "usual.event.bluetooth.remotedevice.PAIRING_REQ",

    /**
     * Bluetooth.remotedevice.pairing.cancel.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_CANCEL =
    "usual.event.bluetooth.remotedevice.PAIRING_CANCEL",

    /**
     * Bluetooth.remotedevice.connect.req.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REQ =
    "usual.event.bluetooth.remotedevice.CONNECT_REQ",

    /**
     * Bluetooth.remotedevice.connect.reply.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REPLY =
    "usual.event.bluetooth.remotedevice.CONNECT_REPLY",

    /**
     * Bluetooth.remotedevice.connect.cancel.
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_CANCEL =
    "usual.event.bluetooth.remotedevice.CONNECT_CANCEL",

    /**
     * Bluetooth.handsfreeunit.connect.state.update.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_CONNECT_STATE_UPDATE =
    "usual.event.bluetooth.handsfreeunit.CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.handsfreeunit.audio.state.update.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AUDIO_STATE_UPDATE =
    "usual.event.bluetooth.handsfreeunit.AUDIO_STATE_UPDATE",

    /**
     * Bluetooth.handsfreeunit.ag.common.event.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_COMMON_EVENT =
    "usual.event.bluetooth.handsfreeunit.AG_COMMON_EVENT",

    /**
     * Bluetooth.handsfreeunit.ag.call.state.update.
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_CALL_STATE_UPDATE =
    "usual.event.bluetooth.handsfreeunit.AG_CALL_STATE_UPDATE",

    /**
     * Bluetooth.host.state.update.
     */
    COMMON_EVENT_BLUETOOTH_HOST_STATE_UPDATE =
    "usual.event.bluetooth.host.STATE_UPDATE",

    /**
     * Bluetooth.host.req.discoverable.
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISCOVERABLE =
    "usual.event.bluetooth.host.REQ_DISCOVERABLE",

    /**
     * Bluetooth.host.req.enable.
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_ENABLE = "usual.event.bluetooth.host.REQ_ENABLE",

    /**
     * Bluetooth.host.req.disable.
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISABLE =
    "usual.event.bluetooth.host.REQ_DISABLE",

    /**
     * Bluetooth.host.scan.mode.update.
     */
    COMMON_EVENT_BLUETOOTH_HOST_SCAN_MODE_UPDATE =
    "usual.event.bluetooth.host.SCAN_MODE_UPDATE",

    /**
     * Bluetooth.host.discovery.stated.
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_STARTED =
    "usual.event.bluetooth.host.DISCOVERY_STARTED",

    /**
     * Bluetooth.host.discovery.finished.
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_FINISHED =
    "usual.event.bluetooth.host.DISCOVERY_FINISHED",

    /**
     * Bluetooth.host.name.update.
     */
    COMMON_EVENT_BLUETOOTH_HOST_NAME_UPDATE =
    "usual.event.bluetooth.host.NAME_UPDATE",

    /**
     * Bluetooth.a2dp.connect.state.update.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_CONNECT_STATE_UPDATE =
    "usual.event.bluetooth.a2dpsink.CONNECT_STATE_UPDATE",

    /**
     * Bluetooth.a2dp.playing.state.update.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_PLAYING_STATE_UPDATE =
    "usual.event.bluetooth.a2dpsink.PLAYING_STATE_UPDATE",

    /**
     * Bluetooth.a2dp.audio.state.update.
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_AUDIO_STATE_UPDATE =
    "usual.event.bluetooth.a2dpsink.AUDIO_STATE_UPDATE",

    /**
     * Event indicating the NFC state change.
     */
    COMMON_EVENT_NFC_ACTION_ADAPTER_STATE_CHANGED =
    "usual.event.nfc.action.ADAPTER_STATE_CHANGED",

    /**
     * Nfc field on detected.
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_ON_DETECTED =
    "usual.event.nfc.action.RF_FIELD_ON_DETECTED",

    /**
     * Nfc field off detected.
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_OFF_DETECTED =
    "usual.event.nfc.action.RF_FIELD_OFF_DETECTED",

    /**
     * Event indicating that the battery charging is stopped.
     */
    COMMON_EVENT_DISCHARGING = "usual.event.DISCHARGING",

    /**
     * Event indicating that the battery starts charging.
     */
    COMMON_EVENT_CHARGING = "usual.event.CHARGING",

    /**
     * Event indicating that the charging type is changed.
     *
     * @since 10
     * @systemapi
     */
    COMMON_EVENT_CHARGE_TYPE_CHANGED = "usual.event.CHARGE_TYPE_CHANGED",

    /**
     * Event indicating the change of the device's idle mode.
     */
    COMMON_EVENT_DEVICE_IDLE_MODE_CHANGED = "usual.event.DEVICE_IDLE_MODE_CHANGED",

    /**
     * Event indicating that the list of applications that are exempted from the idle mode is updated.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_DEVICE_IDLE_EXEMPTION_LIST_UPDATED = "usual.event.DEVICE_IDLE_EXEMPTION_LIST_UPDATED",

    /**
     * Event indicating the change of the device's power save mode.
     */
    COMMON_EVENT_POWER_SAVE_MODE_CHANGED = "usual.event.POWER_SAVE_MODE_CHANGED",

    /**
     * Event indicating that a user is added.
     */
    COMMON_EVENT_USER_ADDED = "usual.event.USER_ADDED",

    /**
     * Event indicating that a user is removed.
     */
    COMMON_EVENT_USER_REMOVED = "usual.event.USER_REMOVED",

    /**
     * Event indicating that an ability is added.
     */
    COMMON_EVENT_ABILITY_ADDED = "common.event.ABILITY_ADDED",

    /**
     * Event indicating that an ability is removed.
     */
    COMMON_EVENT_ABILITY_REMOVED = "common.event.ABILITY_REMOVED",

    /**
     * Event indicating that an ability is updated.
     */
    COMMON_EVENT_ABILITY_UPDATED = "common.event.ABILITY_UPDATED",

    /**
     * Event indicating a change of the GPS mode state.
     */
    COMMON_EVENT_LOCATION_MODE_STATE_CHANGED =
    "usual.event.location.MODE_STATE_CHANGED",

    /**
     * Event indicating that the IVI is about to enter the sleep state.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_IVI_SLEEP = "common.event.IVI_SLEEP",

    /**
     * Event sent to notify the app to stop playing because the IVI is in sleep state.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_IVI_PAUSE = "common.event.IVI_PAUSE",

    /**
     * Event sent to notify the app to stop playing because the IVI is in standby state.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_IVI_STANDBY = "common.event.IVI_STANDBY",

    /**
     * Event indicating that the app has stopped playing to save power.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_IVI_LASTMODE_SAVE = "common.event.IVI_LASTMODE_SAVE",

    /**
     * Event indicating that the IVI voltage is abnormal.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_IVI_VOLTAGE_ABNORMAL = "common.event.IVI_VOLTAGE_ABNORMAL",

    /**
     * Event indicating that the IVI temperature is high.
     * This is a protected common event that can only be sent by the system. This event will be deleted later.
     * Use COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL instead.
     */
    COMMON_EVENT_IVI_HIGH_TEMPERATURE = "common.event.IVI_HIGH_TEMPERATURE",

    /**
     * Event indicating that the IVI temperature is extremely high.
     * This is a protected common event that can only be sent by the system. This event will be deleted later.
     * Use COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL instead.
     */
    COMMON_EVENT_IVI_EXTREME_TEMPERATURE = "common.event.IVI_EXTREME_TEMPERATURE",

    /**
     * Event indicating that the IVI temperature is abnormal.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL = "common.event.IVI_TEMPERATURE_ABNORMAL",

    /**
     * Event indicating that the IVI voltage is recovered.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_IVI_VOLTAGE_RECOVERY = "common.event.IVI_VOLTAGE_RECOVERY",

    /**
     * Event indicating that the IVI temperature is recovered.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_IVI_TEMPERATURE_RECOVERY = "common.event.IVI_TEMPERATURE_RECOVERY",

    /**
     * Event indicating that the battery service is active.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_IVI_ACTIVE = "common.event.IVI_ACTIVE",

    /**
     * Event indicating the USB state change.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_USB_STATE = "usual.event.hardware.usb.action.USB_STATE",

    /**
     * Event indicating that the USB port is changed.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_USB_PORT_CHANGED = "usual.event.hardware.usb.action.USB_PORT_CHANGED",

    /**
     * Event indicating that a USB device is attached.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_USB_DEVICE_ATTACHED =
    "usual.event.hardware.usb.action.USB_DEVICE_ATTACHED",

    /**
     * Event indicating that a USB device is detached.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_USB_DEVICE_DETACHED =
    "usual.event.hardware.usb.action.USB_DEVICE_DETACHED",

    /**
     * Event indicating that a USB accessory is attached.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_USB_ACCESSORY_ATTACHED =
    "usual.event.hardware.usb.action.USB_ACCESSORY_ATTACHED",

    /**
     * Event indicating that a USB accessory is detached.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_USB_ACCESSORY_DETACHED =
    "usual.event.hardware.usb.action.USB_ACCESSORY_DETACHED",

    /**
     * Event indicating that a disk is removed.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_DISK_REMOVED = "usual.event.data.DISK_REMOVED",

    /**
     * Event indicating that a disk is unmounted.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_DISK_UNMOUNTED = "usual.event.data.DISK_UNMOUNTED",

    /**
     * Event indicating that a disk is mounted.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_DISK_MOUNTED = "usual.event.data.DISK_MOUNTED",

    /**
     * Event indicating that a disk is forcibly removed.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_DISK_BAD_REMOVAL = "usual.event.data.DISK_BAD_REMOVAL",

    /**
     * Event indicating that a disk is unmountable.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_DISK_UNMOUNTABLE = "usual.event.data.DISK_UNMOUNTABLE",

    /**
     * Event indicating that a disk is ejected.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_DISK_EJECT = "usual.event.data.DISK_EJECT",

    /**
     * Event indicating that a volume is removed.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_VOLUME_REMOVED = "usual.event.data.VOLUME_REMOVED",

    /**
     * Event indicating that a volume is unmounted.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_VOLUME_UNMOUNTED = "usual.event.data.VOLUME_UNMOUNTED",

    /**
     * Event indicating that a volume is mounted.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_VOLUME_MOUNTED = "usual.event.data.VOLUME_MOUNTED",

    /**
     * Event indicating that a volume is forcibly removed.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_VOLUME_BAD_REMOVAL = "usual.event.data.VOLUME_BAD_REMOVAL",

    /**
     * Event indicating that a volume is ejected.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_VOLUME_EJECT = "usual.event.data.VOLUME_EJECT",

    /**
     * Event indicating that visible accounts are updated.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_VISIBLE_ACCOUNTS_UPDATED =
    "usual.event.data.VISIBLE_ACCOUNTS_UPDATED",

    /**
     * Event indicating that an account is deleted.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_ACCOUNT_DELETED = "usual.event.data.ACCOUNT_DELETED",

    /**
     * Event indicating that the foundation is ready.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_FOUNDATION_READY = "common.event.FOUNDATION_READY",

    /**
     * Event indicating the change in the airplane mode of a device.
     * You can use this event to listen for the change of the airplane mode of a device.
     */
    COMMON_EVENT_AIRPLANE_MODE_CHANGED = "usual.event.AIRPLANE_MODE",

    /**
     * Event sent by the window manager service when the screen is split.
     */
    COMMON_EVENT_SPLIT_SCREEN = "common.event.SPLIT_SCREEN",

    /**
     * Event indicating the slot change.
     * This is a protected common event that can only be sent by the system.
     */
    COMMON_EVENT_SLOT_CHANGE = "usual.event.SLOT_CHANGE",

    /**
     * Event indicating that the SPN information is updated.
     * This common event can be triggered only by the system.
     */
    COMMON_EVENT_SPN_INFO_CHANGED = "usual.event.SPN_INFO_CHANGED",

    /**
     * Event used to report the quick fix result.
     * This common event can be triggered only by the system.
     */
    COMMON_EVENT_QUICK_FIX_APPLY_RESULT = "usual.event.QUICK_FIX_APPLY_RESULT",

    /**
     * Event used to report the revocation result of the quick fix.
     * This common event can be triggered only by the system.
     * @since 10
     */
    COMMON_EVENT_QUICK_FIX_REVOKE_RESULT = "usual.event.QUICK_FIX_REVOKE_RESULT",

    /**
     * Event indicating that the user information is updated.
     * This common event can be triggered only by the system.
     */
    COMMON_EVENT_USER_INFO_UPDATED = "usual.event.USER_INFO_UPDATED",

    /**
     * Event indicating that the HTTP proxy is changed.
     * This is a protected common event that can only be sent by the system.
     * @since 10
     */
    COMMON_EVENT_HTTP_PROXY_CHANGE = "usual.event.HTTP_PROXY_CHANGE",

    /**
     * Event indicating that the SIM card state is changed.
     * This is a protected common event that can only be sent by the system.
     * @since 10
     */
    COMMON_EVENT_SIM_STATE_CHANGED = "usual.event.SIM_STATE_CHANGED",

    /**
     * Event indicating that an SMS is received by the device.
     * To subscribe to this common event, your application must have the ohos.permission.RECEIVE_SMS permission.
     * This common event can be triggered only by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_SMS_RECEIVE_COMPLETED = "usual.event.SMS_RECEIVE_COMPLETED",

    /**
     * Event indicating that an SMS emergency cell broadcast is received by the device.
     * This common event can be triggered only by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_SMS_EMERGENCY_CB_RECEIVE_COMPLETED = "usual.event.SMS_EMERGENCY_CB_RECEIVE_COMPLETED",

    /**
     * Event indicating that an SMS normal cell broadcast is received by the device.
     * This common event can be triggered only by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_SMS_CB_RECEIVE_COMPLETED = "usual.event.SMS_CB_RECEIVE_COMPLETED",

    /**
     * Event indicating that an STK command is received by the device.
     * To subscribe to this event, your application must have the ohos.permission.STK_MESSAGES_RECEIVED
     * permission.
     * This common event can be triggered only by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_STK_COMMAND = "usual.event.STK_COMMAND",

    /**
     * Event indicating that an STK session ends.
     * To subscribe to this event, your application must have the ohos.permission.STK_MESSAGES_RECEIVED
     * permission.
     * This common event can be triggered only by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_STK_SESSION_END = "usual.event.STK_SESSION_END",

    /**
     * Event indicating a change of the STK phone card state.
     * To subscribe to this event, your application must have the ohos.permission.STK_MESSAGES_RECEIVED
     * permission.
     * This common event can be triggered only by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_STK_CARD_STATE_CHANGED = "usual.event.STK_CARD_STATE_CHANGED",

    /**
     * Event indicating that an alpha string during call control is received by the device.
     * To subscribe to this event, your application must have the ohos.permission.STK_MESSAGES_RECEIVED
     * permission.
     * This common event can be triggered only by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_STK_ALPHA_IDENTIFIER = "usual.event.STK_ALPHA_IDENTIFIER",

    /**
     * Event indicating that an SMS wappush is received by the device.
     * This common event can be triggered only by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_SMS_WAPPUSH_RECEIVE_COMPLETED = "usual.event.SMS_WAPPUSH_RECEIVE_COMPLETED",

    /**
     * Event indicating that the operator configuration is updated.
     * This common event can be triggered only by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_OPERATOR_CONFIG_CHANGED = "usual.event.OPERATOR_CONFIG_CHANGED",

    /**
     * Event indicating that the default SMS subscription is changed.
     * This is a protected common event that can only be sent by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_SMS_SUBSCRIPTION_CHANGED = "usual.event.SIM.DEFAULT_SMS_SUBSCRIPTION_CHANGED",

    /**
     * Event indicating that the default data subscription is changed.
     * This is a protected common event that can only be sent by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_DATA_SUBSCRIPTION_CHANGED = "usual.event.SIM.DEFAULT_DATA_SUBSCRIPTION_CHANGED",

    /**
     * Event indicating that the default main subscription is changed.
     * This is a protected common event that can only be sent by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_MAIN_SUBSCRIPTION_CHANGED = "usual.event.SIM.DEFAULT_MAIN_SUBSCRIPTION_CHANGED",

    /**
     * Event indicating that the default voice subscription is changed.
     * This is a protected common event that can only be sent by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_SIM_CARD_DEFAULT_VOICE_SUBSCRIPTION_CHANGED = "usual.event.SIM.DEFAULT_VOICE_SUBSCRIPTION_CHANGED",

    /**
     * Event indicating that the call state is changed.
     * To subscribe to this event, your application must have the ohos.permission.GET_TELEPHONY_STATE
     * permission.
     * This is a protected common event that can only be sent by the system.
      * @since 10
     */
    COMMON_EVENT_CALL_STATE_CHANGED = "usual.event.CALL_STATE_CHANGED",

    /**
     * Event indicating that the cellular data state is changed.
     * This is a protected common event that can only be sent by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_CELLULAR_DATA_STATE_CHANGED = "usual.event.CELLULAR_DATA_STATE_CHANGED",

    /**
     * Event indicating that the network state is changed.
     * This is a protected common event that can only be sent by the system.
     * @since 10
     */
    COMMON_EVENT_NETWORK_STATE_CHANGED = "usual.event.NETWORK_STATE_CHANGED",

    /**
     * Event indicating that the signal info is changed.
     * This is a protected common event that can only be sent by the system.
     * @since 10
     */
    COMMON_EVENT_SIGNAL_INFO_CHANGED = "usual.event.SIGNAL_INFO_CHANGED",

    /**
     * Event indicating that an incoming call is missed.
     * To subscribe to this event, your application must have the ohos.permission.GET_TELEPHONY_STATE
     * permission.
     * This is a protected common event that can only be sent by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_INCOMING_CALL_MISSED = "usual.event.INCOMING_CALL_MISSED",

    /**
     * Event indicating that the radio state is changed.
     * This is a protected common event that can only be sent by the system.
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_RADIO_STATE_CHANGE = "usual.event.RADIO_STATE_CHANGE",

    /**
     * Event indicating that domain account status is changed.
     * To subscribe to this event, your application must have the ohos.permission.GET_LOCAL_ACCOUNTS
     * @systemapi
     * @since 10
     */
    COMMON_EVENT_DOMAIN_ACCOUNT_STATUS_CHANGED = "usual.event.DOMAIN_ACCOUNT_STATUS_CHANGED",

    /**
     * Event indicating that the screen is unlocked.
     * @since 10
     */
    COMMON_EVENT_SCREEN_UNLOCKED = "usual.event.SCREEN_UNLOCKED",

    /**
     * Event indicating that the screen is locked.
     * @since 10
     */
    COMMON_EVENT_SCREEN_LOCKED = "usual.event.SCREEN_LOCKED"
  }
}

export default commonEventManager;
