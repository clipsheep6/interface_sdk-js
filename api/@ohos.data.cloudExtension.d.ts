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

import rpc from './@ohos.rpc';
import cloudData from "./@ohos.data.cloudData";
import Result = cloudData.Sharing.Result;

/**
 * Provides interfaces to implement extended cloud capabilities.
 *
 * @namespace cloudExtension
 * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
 * @since 11
 */
declare namespace cloudExtension {
  /**
   * Defines participant.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @since 11
   */
  type Participant = cloudData.Sharing.Participant;

  /**
   * Defines participantStatus.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @since 11
   */
  type ParticipantStatus = cloudData.Sharing.Status;

  /**
   * Creates a share service stub with the specified instance.
   *
   * @param { ShareService } instance - Indicates the <b>ShareService</b> instance.
   * @returns { Promise<rpc.RemoteObject> } Returns remote object.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11
   */
  function createShareServiceStub(instance: ShareService): Promise<rpc.RemoteObject>;

  /**
   * Provides interfaces for implementing ShareService.
   *
   * @interface ShareService
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11
   */
  export interface ShareService {
    /**
     * Share data with specific participants.
     *
     * @param { number } userId - Indicates the user ID.
     * @param { string } bundleName - Indicates the bundle name.
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the {@link Participant}.
     * @returns { Promise<Result<Array<Result<Participant>>>> } Returns the sharing result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11
     */
    share(
        userId: number,
        bundleName: string,
        sharingRes: string,
        participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * Unshare data with specific participants.
     *
     * @param { number } userId - Indicates the user ID.
     * @param { string } bundleName - Indicates the bundle name.
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the {@link Participant}.
     * @returns { Promise<Result<Array<Result<Participant>>>> } Returns the sharing result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11
     */
    unshare(
        userId: number,
        bundleName: string,
        sharingRes: string,
        participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * Exit the sharing.
     *
     * @param { number } userId - Indicates the user ID.
     * @param { string } bundleName - Indicates the bundle name.
     * @param { string } sharingRes - Indicates the sharing resource.
     * @returns { Promise<Result<void>> } Returns the exit result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11
     */
    exit(userId: number, bundleName: string, sharingRes: string): Promise<Result<void>>;

    /**
     * Changes privilege of the specific participants.
     *
     * @param { number } userId - Indicates the user ID.
     * @param { string } bundleName - Indicates the bundle name.
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the {@link Participant}.
     * @returns { Promise<Result<Array<Result<Participant>>>> } Returns the changing result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11
     */
    changePrivilege(
        userId: number,
        bundleName: string,
        sharingRes: string,
        participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * Query participants of the specific sharing resource.
     *
     * @param { number } userId - Indicates the user ID.
     * @param { string } bundleName - Indicates the bundle name.
     * @param { string } sharingRes - Indicates the sharing resource.
     * @returns { Promise<Result<Array<Participant>>> } Returns the query result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11
     */
    queryParticipants(
        userId: number,
        bundleName: string,
        sharingRes: string
    ): Promise<Result<Array<Participant>>>;

    /**
     * Confirms invitation.
     *
     * @param { number } userId - Indicates the user ID.
     * @param { string } bundleName - Indicates the bundle name.
     * @param { string } invitationCode - Indicates the invitation code.
     * @param { ParticipantStatus } status - Indicates the {@link ParticipantStatus}.
     * @returns { Promise<Result<string>> } Returns the sharing resource.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11
     */
    confirmInvitation(
        userId: number,
        bundleName: string,
        invitationCode: string,
        status: ParticipantStatus
    ): Promise<Result<string /*sharingRes*/>>;

    /**
     * Changes confirmation.
     *
     * @param { number } userId - Indicates the user ID.
     * @param { string } bundleName - Indicates the bundle name.
     * @param { string } sharingRes - Indicates the sharing resource.
     * @param { ParticipantStatus } status - Indicates the {@link ParticipantStatus}.
     * @returns { Promise<Result<void>> } Returns the change result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11
     */
    changeConfirmation(
      userId: number,
      bundleName: string,
      sharingRes: string,
      status: ParticipantStatus
    ): Promise<Result<void>>;
  }

  /**
   * Provides interfaces for implementing CloudService.
   *
   * @interface CloudService
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11
   */
  export interface CloudService {
  /**
   * Connects to a share service.
   *
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @returns { Promise<rpc.RemoteObject> } Returns connectAssetLoader RemoteObject.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11
   */
  connectShareService(bundleName: string): Promise<rpc.RemoteObject>;
  }
}

export default cloudExtension;