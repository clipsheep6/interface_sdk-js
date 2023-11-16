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
   * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
   * @systemapi
   * @since 11
   */
  export namespace sharing {
    /**
     * Enumerates the roles.
     *
     * @enum { number }
     * @syscap systemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    export enum Role {
      /**
       * Inviter of cloud sharing.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      ROLE_INVITER,

      /**
       * Invitee of cloud sharing.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      ROLE_INVITEE
    }

    /**
     * Enumerates the statuses of sharing invitation.
     *
     * @enum { number }
     * @syscap systemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    export enum Status {
      /**
       * Unknown status.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      STATUS_UNKNOWN,

      /**
       * Accept the sharing invitation.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      STATUS_ACCEPTED,

      /**
       * Reject the sharing invitation.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      STATUS_REJECTED,

      /**
       * Suspend the sharing process.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      STATUS_SUSPENDED,
    }

    /**
     * Enumerates the error code of sharing invitation.
     *
     * @enum { number }
     * @syscap systemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    export enum ErrorCode {
      /**
       * Invalid parameter.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      INVALID_PARAMETER = 11001,

      /**
       * The number of sharing times today of current user has reached maximum.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      SHARING_TIMES_LIMIT_EXCEEDED = 14000,

      /**
       * The number of resource sharing times reaches the maximum.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      RESOURCE_SHARING_TIMES_LIMIT_EXCEEDED = 14001,

      /**
       * The sharing resource can't modify permission.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      FORBID_MODIFY_PERMISSION = 14002,

      /**
       * Invoke cloud space failed.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      INVOKE_CLOUD_SPACE_FAILURE = 14003,

      /**
       * The user has been invited.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      ALREADY_INVITED = 14004,

      /**
       * Sharing resource feed back error.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      FEED_BACK_ERROR = 14005,

      /**
       * Sharing resource not exist error.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      RESOURCE_NOT_EXIST = 14006,

      /**
       * Sharing resource has feed back once.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      FEED_BACK_ONCE = 14007,

      /**
       * Current user have no permission operation resource.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      PERMISSION_DENIED = 14008,

      /**
       * Part of accounts operation failed.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      PART_OPERATION_FAILURE = 14009,

      /**
       * Parse permission failed.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      PARSE_PERMISSION_FAILURE = 14010,

      /**
       * The sharing resource not support the exit function.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      FORBID_EXIT = 14011,
    }

    /**
     * Result interface.
     *
     * @interface Result
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @StageModelOnly
     * @since 11
     */
    export interface Result<T> {
      /**
       * Error code.
       *
       * @type { number }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      code: number;

      /**
       * The result value.
       *
       * @type { T }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      value?: T;
    }

    /**
     * Privilege for the shared data.
     *
     * @interface Privilege
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    export interface Privilege {
      /**
       * Whether the participants can write the shared data. The value <b>true</b>
       * means the participants can write the shared data; the value <b>false</b>
       * means the opposite.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      writeable?: boolean;

      /**
       * Whether the participants can read the shared data. The value <b>true</b>
       * means the participants can read the shared data; the value <b>false</b>
       * means the opposite.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      readable?: boolean;

      /**
       * Whether the participants can create data. The value <b>true</b>
       * means the participants can create data; the value <b>false</b>
       * means the opposite.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      creatable?: boolean;

      /**
       * Whether the participants can delete the shared data. The value <b>true</b>
       * means the participants can delete the shared data; the value <b>false</b>
       * means the opposite.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      deletable?: boolean;

      /**
       * Whether the participants can share the data. The value <b>true</b>
       * means the participants can share the data; the value <b>false</b>
       * means the opposite.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      shareable?: boolean;
    }

    /**
     * Participants in cloud sharing.
     *
     * @interface Participant
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    export interface Participant {
      /**
       * Identity of participant.
       *
       * @type { string }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      identity: string;

      /**
       * Role of the participant, which can be inviter or invitee.
       *
       * @type { ?Role }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      role?: Role;

      /**
       * Status of the sharing invitation.
       *
       * @type { ?Status }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      status?: Status;

      /**
       * Permissions for the shared data.
       *
       * @type { ?Privilege }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      privilege?: Privilege;

      /**
       * Extended information.
       *
       * @type { ?string }
       * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
       * @systemapi
       * @since 11
       */
      extension?: string;
    }

    /**
     * Allocates shared resources based on conditions,
     * and shares data with the specified privilege to participants.
     *
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
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function allocResourceAndShare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      callback: AsyncCallback<relationalStore.ResultSet>
    ): void;

    /**
     * Allocates shared resources based on conditions,
     * and shares data with the specified privilege to participants.
     *
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
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function allocResourceAndShare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      columns: Array<string>,
      callback: AsyncCallback<relationalStore.ResultSet>
    ): void;

    /**
     * Allocates shared resources based on conditions,
     * and shares data with the specified privilege to participants.
     *
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
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function allocResourceAndShare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      columns?: Array<string>
    ): Promise<relationalStore.ResultSet>;

    /**
     * Shares data with the specified privilege to participants.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     * involved in the data sharing.
     * @param { AsyncCallback<Array<Result<Participant>>> } callback - Indicates the
     * callback invoked to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function share(
      sharingRes: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void;

    /**
     * Shares data with the specified privilege to participants.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     * involved in the data sharing.
     * @Returns { Promise<Array<Result<Participant>>> } - Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function share(sharingRes: string, participants: Array<Participant>): Promise<Result<Array<Result<Participant>>>>;

    /**
     * Unshares data.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     * involved.
     * @param { AsyncCallback<Array<Result<Participant>>> } callback - Indicates the callback invoked
     * to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function unshare(
      sharingRes: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void;

    /**
     * Unshares data.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     * involved.
     * @Returns { Promise<Array<Result<Participant>>> } - Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function unshare(
      sharingRes: string,
      participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * Exit sharing.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { AsyncCallback<void> } callback - The callback of exit.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function exit(sharingRes: string, callback: AsyncCallback<Result<void>>): void;

    /**
     * Exit sharing.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @Returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function exit(sharingRes: string): Promise<Result<void>>;

    /**
     * Changes the permissions for the shared data.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     * whose permissions are to be changed.
     * @param { AsyncCallback<Array<Result<Participant>>> } callback - Indicates the
     * callback invoked to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function changePrivilege(
      sharingRes: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void;

    /**
     * Changes the permissions for the shared data.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     * whose permissions are to be changed.
     * @Returns { Promise<Array<Result<Participant>>> } - Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function changePrivilege(
      sharingRes: string,
      participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * Queries the participants based on the specified shared data.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { AsyncCallback<Array<Result<Participant>>> } callback - Indicates the
     * callback invoked to return the participants obtained.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function queryParticipants(sharingRes: string, callback: AsyncCallback<Result<Array<Participant>>>): void;

    /**
     * Queries the participants based on the specified shared data.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @Returns { Promise<Array<Result<Participant>>> } - Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function queryParticipants(sharingRes: string): Promise<Result<Array<Participant>>>;

    /**
     * Queries the participants based on the specified invitation code.
     *
     * @param { string } invitationCode - Indicates the invitation code.
     * @param { AsyncCallback<Array<Result<Participant>>> } callback - Indicates the
     * callback invoked to return the participants obtained.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function queryParticipantsByInvitation(
      invitationCode: string,
      callback: AsyncCallback<Result<Array<Participant>>>
    ): void;

    /**
     * Queries the participants based on the specified invitation code.
     *
     * @param { string } invitationCode - Indicates the invitation code.
     * @Returns { Promise<Array<Result<Participant>>> } - Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function queryParticipantsByInvitation(invitationCode: string): Promise<Result<Array<Participant>>>;

    /**
     * Confirms the invitation of cloud sharing.
     *
     * @param { string } invitationCode - Indicates the invitation code.
     * @param { Status } status - Indicates the status of invitation.
     * @param { AsyncCallback<Result<string>> } callback - Indicates the callback
     * invoked to return the sharing resource.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function confirmInvitation(invitationCode: string, status: Status, callback: AsyncCallback<Result<string>>): void;

    /**
     * Confirms the invitation of cloud sharing.
     *
     * @param { string } invitationCode - Indicates the invitation code.
     * @param { Status } status - Indicates the status of invitation.
     * @Returns { Promise<Result<string>> } - Promise used to return the sharing resource.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function confirmInvitation(invitationCode: string, status: Status): Promise<Result<string>>;

    /**
     * Changes confirmation of shared record.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Status } status - Indicates the status of invitation.
     * @param { AsyncCallback<void> } callback - Indicates the callback.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function changeConfirmation(sharingRes: string, status: Status, callback: AsyncCallback<Result<void>>): void;

    /**
     * Changes confirmation of shared record.
     *
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Status } status - Indicates the status of invitation.
     * @Returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed, which
     * is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, which is
     * returned when the system API is not called by a system application.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudData.Sharing
     * @systemapi
     * @since 11
     */
    function changeConfirmation(sharingRes: string, status: Status): Promise<Result<void>>;
  }
}

export default cloudData;
