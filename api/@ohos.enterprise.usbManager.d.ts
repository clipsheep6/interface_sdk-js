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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * This module provides the capability to manage the usb of the enterprise devices.
 *
 * @namespace usbManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @since 10
 */
declare namespace usbManager {
  /**
   * Usb policy
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  export enum UsbPolicy {
    /**
     * Policy read write
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    READ_WRITE = 0,

    /**
     * Policy read only
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    READ_ONLY = 1,

    /**
     * Policy disabled
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    DISABLED = 2
  }

  /**
   * USB storage devices policy
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
   export enum USBStorageDevicesPolicy {
    /**
     * Policy read write
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    READ_WRITE = 0,

    /**
     * Policy read only
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    READ_ONLY = 1,

    /**
     * Policy disabled
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    DISABLED = 2
  }


  /**
   * Identify the USB device.
   *
   * @typedef USBDeviceID
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  export interface USBDeviceID {
    /**
     * Vendor ID.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    vendorId: number;

    /**
     * Product ID.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 11
     */
    productId: number;
  }

  /**
   * Set usb policy by {@link UsbPolicy}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { UsbPolicy } usbPolicy - usb policy code.
   * @param { AsyncCallback<void> } callback - the callback of setUsbPolicy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setUsbPolicy(admin: Want, usbPolicy: UsbPolicy, callback: AsyncCallback<void>): void;

  /**
   * Set usb policy by {@link UsbPolicy}.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { UsbPolicy } usbPolicy - usb policy code.
   * @returns { Promise<void> } the promise returned setUsbPolicy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setUsbPolicy(admin: Want, usbPolicy: UsbPolicy): Promise<void>;

  /**
   * Sets usb devices disallowed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } isDisallowed - true if the usb devices is disallowed.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function disallowUSBDevices(admin: Want, isDisallowed: boolean): void;

  /**
   * Queries usb devices is disallowed or allowed.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { boolean } true if the usb devices is disallowed.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function isUSBDevicesDisallowed(admin: Want): boolean;

  /**
   * Adds usb devices list that is allowed to be used.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<USBDeviceID> } usbDevicesIDs - the array of usb devices.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function AddAllowedUSBDevices(admin: Want, usbDevicesIDs: Array<USBDeviceID>): void;

  /**
   * Removes usb devices list that is allowed to be used.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<USBDeviceID> } usbDevicesIDs - the array of usb devices.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function RemoveAllowedUsbDevices(admin: Want, usbDevicesIDs: Array<USBDeviceID>): void;

  /**
   * Gets usb devices list that is allowed to be used.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Array<USBDeviceID> } the array of usb devices.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function getAllowedUsbDevices(admin: Want): Array<USBDeviceID>;

  /**
   * Sets the USB storage devices policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { USBStorageDevicesPolicy } usbStorageDevicesPolicy - the USB storage devices policy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function setUSBStorageDevicesPolicy(admin: Want, usbStorageDevicesPolicy: USBStorageDevicesPolicy): void;

  /**
   * Gets the USB storage devices policy.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { USBStorageDevicesPolicy } the USB storage devices policy.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function getUSBStorageDevicesAccessPolicy(admin: Want): USBStorageDevicesPolicy;
}

export default usbManager;
