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

import relationalStore from './@ohos.data.relationalStore';
import rpc from './@ohos.rpc';
import cloudData from "./@ohos.data.cloudData";


/**
 * Provides interfaces to implement extended cloud capabilities.
 *
 * @namespace cloudExtension
 * @syscap systemCapability.DistributedDataManager.CloudData.Extension
 * @since 11
 */
declare namespace cloudExtension {
  type Participant = cloudData.Sharing.Participant;
  type ParticipantStatus = cloudData.Sharing.Status;
  /**
   * Defines the result.
   *
   * @interface Result
   * @syscap systemCapability.DistributedDataManager.CloudData.Extension
   * @systemapi
   * @since 11
   */
  export interface Result<T> {
    /**
     * Error code {@link ErrorCode}.
     *
     * @type { number }
     * @syscap systemCapability.DistributedDataManager.CloudData.Extension
     * @systemapi
     * @since 11
     */
    code: number;

    /**
     * Result value.
     *
     * @type { T }
     * @syscap systemCapability.DistributedDataManager.CloudData.Extension
     * @systemapi
     * @since 11
     */
    value: T;
  }

  /**
   * Creates a share service stub with the specified instance.
   *
   * @param { ShareService } instance - Indicates the <b>ShareService</b> instance.
   * @returns { Promise<rpc.RemoteObject> } Returns remote object.
   * @syscap systemCapability.DistributedDataManager.CloudData.Extension
   * @systemapi
   * @since 11
   */
  function createShareServiceStub(instance: ShareService): Promise<rpc.RemoteObject>;

  /**
   * Provides interfaces for implementing ShareService.
   *
   * @interface ShareService
   * @syscap systemCapability.DistributedDataManager.CloudData.Extension
   * @systemapi
   * @since 11
   */
  export interface ShareService {
    share(
        userId: number,
        bundleName: string,
        sharingRes: string,
        participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    unshare(
        userId: number,
        bundleName: string,
        sharingRes: string,
        participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    exit(userId: number, bundleName: string, sharingRes: string): Promise<void>;

    changePrivilege(
        userId: number,
        bundleName: string,
        sharingRes: string,
        participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    queryParticipants(
        userId: number,
        bundleName: string,
        sharingRes: string
    ): Promise<Result<Array<Participant>>>;

    confirmInvitation(
        userId: number,
        bundleName: string,
        invitationCode: string,
        status: ParticipantStatus
    ): Promise<string /*sharingRes*/>;

    changeConfirmation(userId: number, bundleName: string, sharingRes: string, status: ParticipantStatus): Promise<void>;
  }

  /**
   * Provides interfaces for implementing CloudService.
   *
   * @interface CloudService
   * @syscap systemCapability.DistributedDataManager.CloudData.Extension
   * @systemapi
   * @since 11
   */
  export interface CloudService {
  /**
   * Connects to a share service.
   *
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @returns { Promise<rpc.RemoteObject> } Returns connectAssetLoader RemoteObject.
   * @syscap systemCapability.DistributedDataManager.CloudData.Extension
   * @systemapi
   * @since 11
   */
  connectShareService(bundleName: string): Promise<rpc.RemoteObject>;
  }
}

export default cloudExtension;