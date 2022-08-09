/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import {AsyncCallback,Callback} from "./basic";

/**
 * Provides mtp device manager APIs
 *
 * @since 9
 * @syscap SystemCapability.FileManagement.StorageService.Volume
 * @systemapi
 */
declare namespace mtpManager {

  /**
   * Mtp device info
   * 
   * @since 9
   * @systemapi
   */
  export interface MtpDev {
    id: string;
    path: string;
  }
  
   /**
   * Get all mtp device list
   * 
   * @since 9
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @permission ohos.permission.STORAGE_MANAGER
   * @systemapi
   */
  function getAllMtpDevs(callback: AsyncCallback<Array<MtpDev>>): void;
  function getAllMtpDevs(): Promise<Array<MtpDev>>;
}

export default mtpManager;