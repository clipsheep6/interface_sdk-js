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

import ExtensionContext from './application/ExtensionContext';
import ipc from './@ohos.rpc'
import cloudData from "./@ohos.data.cloudData";

type Participant = cloudData.Sharing.Participant;
type ParticipantStatus = cloudData.Sharing.Status;

interface Result<T> {
  code: number;
  value: T;
}

export default class OfficeCloud {
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

declare namespace OfficeCloudExtension {
  function createOfficeCloudStub(context: ExtensionContext, impl: OfficeCloud): Promise<ipc.RemoteObject>;
}