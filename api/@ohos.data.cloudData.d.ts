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

import { AsyncCallback } from './@ohos.base';
import relationalStore from "./@ohos.data.relationalStore";

declare namespace cloudData {
  /**
   * Enumerates the types of the clear action.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 10
   */
  enum ClearAction {
    /**
     * Clear cloud-related data only, which includes the cloud meta data and
     * local cloud-related data.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    CLEAR_CLOUD_INFO,

    /**
     * Clear all cloud-related file data, which is synchronized with the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    CLEAR_CLOUD_DATA_AND_INFO
  }

  /**
   * ID of the event, which indicates the change of the data in the cloud.
   *
   * @constant
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @since 11
   */
  const DATA_CHANGE_EVENT_ID = "cloud_data_change";

  /**
   * Extra data for data change notification.
   *
   * @interface ExtraData
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11
   */
  interface ExtraData {
    /**
     * Event ID.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    eventId: string;

    /**
     * Extra data, which contains the following fields.
     * {
     *   "accountId": "aaa",
     *   "bundleName": "com.bbb.xxx",
     *   "containerName": "alias",
     *   "databaseScopes": ["private", "shared"],
     *   "recordTypes": ["xxx", "yyy", "zzz"],
     *   "properties": {
     *     "key": "value"
     *   },
     *   "keyId": "",
     *   "signV3": ""
     * }
     * <b>accountId</b> and <b>bundleName</b> are mandatory.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    extraData: string;
  }

  /**
   * Provides methods to set cloud-device synchronization.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 10
   */
  class Config {
    /**
     * Enables the cloud function.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is
     * a value obtained by hashing the cloud account ID.
     * @param { { [bundleName:string]:boolean } } switches - Indicates switches
     * of all applications. It overwrites the saved application switch information.
     * If an application switch changes, the {@link changeAppCloudSwitch
     * (accountId: string, bundleName: string, status: boolean)} method will be
     * called to notify the data manager service.
     * @param { AsyncCallback<void> } callback - Indicates the callback invoked
     * to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static enableCloud(
      accountId: string,
      switches: { [bundleName: string]: boolean },
      callback: AsyncCallback<void>
    ): void;

    /**
     * Enables the cloud function.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is
     * a value obtained by hashing the cloud account ID.
     * @param { { [bundleName:string]:boolean } } switches - Indicates switches
     * of all applications. It overwrites the saved application switch information.
     * If an application switch changes, the {@link changeAppCloudSwitch
     * (accountId: string, bundleName: string, status: boolean)} method will be
     * called to notify the data manager service.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static enableCloud(accountId: string, switches: { [bundleName: string]: boolean }): Promise<void>;

    /**
     * Disables the cloud function.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is
     * a value obtained by hashing the cloud account ID.
     * @param { AsyncCallback<void> } callback - Indicates the callback invoked
     * to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static disableCloud(accountId: string, callback: AsyncCallback<void>): void;

    /**
     * Disables the cloud function.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is
     * a value obtained by hashing the cloud account ID.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static disableCloud(accountId: string): Promise<void>;

    /**
     * Changes the cloud switch of a single application.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is a value
     * obtained by hashing the cloud account ID.
     * @param { string } bundleName -  Indicates the name of application.
     * @param { boolean } status - Indicates whether to enable cloud-device
     * synchronization. The value <b>true</b> means to enable cloud-device
     * synchronization; the value <b>false</b> means the opposite.
     * @param { AsyncCallback<void> } callback - Indicates the callback invoked
     * to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static changeAppCloudSwitch(
      accountId: string,
      bundleName: string,
      status: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Changes the cloud switch of a single application.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is a value
     * obtained by hashing the cloud account ID.
     * @param { string } bundleName -  Indicates the name of application.
     * @param { boolean } status - Indicates whether to enable cloud-device
     * synchronization. The value <b>true</b> means to enable cloud-device
     * synchronization; the value <b>false</b> means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>;

    /**
     * Notifies changes of the cloud records.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is a value
     * obtained by hashing the cloud account ID.
     * @param { string } bundleName - Indicates the name of application.
     * @param { AsyncCallback<void> } callback - Indicates the callback invoked
     * to report the data changes.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * Notifies changes of the cloud records.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is a value
     * obtained by hashing the cloud account ID.
     * @param { string } bundleName - Indicates the name of application.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static notifyDataChange(accountId: string, bundleName: string): Promise<void>;

    /**
     * Notifies changes of the cloud records.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - Indicates the extra data for
     * notification {@link ExtraData}.
     * @param { AsyncCallback<void> } callback - Indicates the callback invoked
     * to return the data changes.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    static notifyDataChange(extInfo: ExtraData, callback: AsyncCallback<void>): void;

    /**
     * Notifies changes of the cloud records
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - Indicates the extra data for
     * notification {@link ExtraData}.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     *
     * @since 11
     */
    static notifyDataChange(extInfo: ExtraData): Promise<void>;

    /**
     * Clears cloud information from the local device.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is a value
     * obtained by hashing the cloud account ID.
     * @param { { [bundleName: string]: ClearAction } } appActions - Indicates
     * the clear operation to perform.
     * @param { AsyncCallback<void> } callback - Indicates the callback invoked
     * to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static clear(
      accountId: string,
      appActions: { [bundleName: string]: ClearAction },
      callback: AsyncCallback<void>
    ): void;

    /**
     * Clears cloud information from a local device.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID, which is a value
     * obtained by hashing the cloud account ID.
     * @param { { [bundleName: string]: ClearAction } } appActions - Indicates
     * the clear operation to perform.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10
     */
    static clear(accountId: string, appActions: { [bundleName: string]: ClearAction }): Promise<void>;
  }

  /**
   * Provides methods to implement cloud sharing.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11
   */
  export namespace Sharing {
    /**
     * Enumerates the roles.
     *
     * @enum { number }
     * @syscap systemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    enum Role {
      /**
       * Inviter of cloud sharing.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      ROLE_INVITER,

      /**
       * Invitee of cloud sharing.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      ROLE_INVITEE
    }

    /**
     * Enumerates the statuses of sharing invitation.
     *
     * @enum { number }
     * @syscap systemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    enum Status {
      /**
       * Unknown status.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      STATUS_UNKNOWN,

      /**
       * Accept the sharing invitation.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      STATUS_ACCEPTED,

      /**
       * Reject the sharing invitation.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      STATUS_REJECTED,

      /**
       * Suspend the sharing process.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      STATUS_SUSPENDED,
    }

    /**
     * Privilege for the shared data.
     *
     * @interface Privilege
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    export interface Privilege {
      /**
       * Whether the participants can write the shared data. The value <b>true</b>
       * means the participants can write the shared data; the value <b>false</b>
       * means the opposite.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      writeable?: boolean;

      /**
       * Whether the participants can read the shared data. The value <b>true</b>
       * means the participants can read the shared data; the value <b>false</b>
       * means the opposite.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      readable?: boolean;

      /**
       * Whether the participants can create data. The value <b>true</b>
       * means the participants can create data; the value <b>false</b>
       * means the opposite.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      creatable?: boolean;

      /**
       * Whether the participants can delete the shared data. The value <b>true</b>
       * means the participants can delete the shared data; the value <b>false</b>
       * means the opposite.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      deletable?: boolean;

      /**
       * Whether the participants can share the data. The value <b>true</b>
       * means the participants can share the data; the value <b>false</b>
       * means the opposite.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      shareable?: boolean;
    }

    /**
     * Participants in cloud sharing.
     *
     * @interface Participant
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    export interface Participant {
      /**
       * Identity of participant.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      identity: string;

      /**
       * Role of the participant, which can be inviter or invitee.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      role?: Role;

      /**
       * Status of the sharing invitation.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      status?: Status;

      /**
       * Permissions for the shared data.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
       * @since 11
       */
      privilege?: Privilege;
    }

    /**
     * RESULT_FIELD.
     *
     * @constant
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    const RESULT_FIELD = "sharing_result";

    /**
     * RESOURCE_FIELD.
     *
     * @constant
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 11
     */
    const RESOURCE_FIELD = "sharing_resource";

    /**
     * Allocates shared resources based on conditions,
     * and shares data with the specified privilege to participants.
     * all columns will take effect by default.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } storeId - Indicates relational store name.
     * @param { relationalStore.RdbPredicates } predicates - See {@link relationalStore.RdbPredicates}.
     * @param { Array<Participant> } participants - Participants to share.
     * @param { AsyncCallback<relationalStore.ResultSet> } callback - Indicates the
     * callback invoked to return the {@link relationalStore.ResultSet}.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function allocResourceAndshare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      callback: AsyncCallback<relationalStore.ResultSet>
    ): void;

    /**
     * Allocates shared resources based on conditions,
     * and shares data with the specified privilege to participants.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } storeId - Indicates relational store name.
     * @param { relationalStore.RdbPredicates } predicates - See {@link relationalStore.RdbPredicates}.
     * @param { Array<string> } columns - Columns to be shared.
     * @param { Array<Participant> } participants - Participants to share.
     * @param { AsyncCallback<relationalStore.ResultSet> } callback - Indicates the
     * callback invoked to return the {@link relationalStore.ResultSet}.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function allocResourceAndshare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      columns: Array<string>,
      callback: AsyncCallback<relationalStore.ResultSet>
    ): void;

    /**
     * Allocates shared resources based on conditions,
     * and shares data with the specified privilege to participants.
     * all columns will take effect by default.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } storeId - Indicates relational store name.
     * @param { relationalStore.RdbPredicates } predicates - See {@link relationalStore.RdbPredicates}.
     * @param { Array<Participant> } participants - Participants to share.
     * @param { Array<string> } [columns] - Columns to be shared.
     * @param { Promise<relationalStore.ResultSet> } - Promise used to return {@link relationalStore.ResultSet}.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function allocResourceAndshare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      columns?: Array<string>
    ): Promise<relationalStore.ResultSet>;

    /**
     * Shares data with the specified privilege to participants.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the uniform resource identifier
     * (URI) of the data to share.
     * @param { Array<Participant> } participants - Indicates the participants
     * involved in the data sharing.
     * @param { AsyncCallback<Array<Participant>> } callback - Indicates the
     * callback invoked to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function share(
      sharingRes: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Array<Participant>>
    ): void;

    /**
     * Shares data with the specified privilege to participants.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the data to share.
     * @param { Array<Participant> } participants - Indicates the participants
     * involved in the data sharing.
     * @Returns { Promise<Array<Participant>> } - Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function share(sharingRes: string, participants: Array<Participant>): Promise<Array<Participant>>;

    /**
     * Unshares data.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the data to unshare.
     * @param { Array<Participant> } participants - Indicates the participants
     * involved.
     * @param { AsyncCallback<void> } callback - Indicates the callback invoked
     * to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function unshare(
      sharingRes: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Array<Participant>>
    ): void;

    /**
     * Unshares data.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the data to unshare.
     * @param { Array<Participant> } participants - Indicates the participants
     * involved.
     * @Returns { Promise<void> } - Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function unshare(sharingRes: string, participants: Array<Participant>): Promise<Array<Participant>>;

    /**
     * Exit sharing.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the data.
     * @param { AsyncCallback<void> } callback - The callback of exit.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function exit(sharingRes: string, callback: AsyncCallback<void>): void;

    /**
     * Exit sharing.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the data.
     * @Returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function exit(sharingRes: string): Promise<void>;

    /**
     * Changes the permissions for the shared data.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the target data.
     * @param { Array<Participant> } participants - Indicates the participants
     * whose permissions are to be changed.
     * @param { AsyncCallback<Array<Participant>> } callback - Indicates the
     * callback invoked to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported..0
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function changePrivilege(
      sharingRes: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Array<Participant>>
    ): void;

    /**
     * Changes the permissions for the shared data.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the target data.
     * @param { Array<Participant> } participants - Indicates the participants
     * whose permissions are to be changed.
     * @Returns { Promise<Array<Participant>> } - Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function changePrivilege(sharingRes: string, participants: Array<Participant>): Promise<Array<Participant>>;

    /**
     * Queries the participants based on the specified shared data.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the target data.
     * @param { AsyncCallback<Array<Participant>> } callback - Indicates the
     * callback invoked to return the participants obtained.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function queryParticipants(sharingRes: string, callback: AsyncCallback<Array<Participant>>): void;

    /**
     * Queries the participants based on the specified shared data..
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the target data.
     * @Returns { Promise<Array<Participant>> } - Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function queryParticipants(sharingRes: string): Promise<Array<Participant>>;

    /**
     * Confirms the invitation of cloud sharing.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } invitationCode - Indicates the invitation code.
     * @param { Status } status - Indicates the status of invitation.
     * @param { AsyncCallback<string> } callback - Indicates the callback
     * invoked to return the URI of the record.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function confirmInvitation(invitationCode: string, status: Status, callback: AsyncCallback<string>): void;

    /**
     * Confirms the invitation of cloud sharing.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } invitationCode - Indicates the invitation code.
     * @param { Status } status - Indicates the status of invitation.
     * @Returns { Promise<string> } - Promise used to return the URI of the record.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function confirmInvitation(invitationCode: string, status: Status): Promise<string>;

    /**
     * Changes confirmation of shared record.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the target data.
     * @param { Status } status - Indicates the status of invitation.
     * @param { AsyncCallback<void> } callback - Indicates the callback.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function changeConfirmation(sharingRes: string, status: Status, callback: AsyncCallback<void>): void;

    /**
     * Changes confirmation of shared record.
     *
     * @permission ohos.permission.CLOUDDATA_SHARING
     * @param { string } sharingRes - Indicates the URI of the target data.
     * @param { Status } status - Indicates the status of invitation.
     * @Returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11
     */
    function changeConfirmation(sharingRes: string, status: Status): Promise<void>;
  }
}

export default cloudData;
