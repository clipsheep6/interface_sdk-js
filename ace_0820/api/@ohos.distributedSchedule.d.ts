/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AsyncCallback } from './basic';

/**
 * Start and stop the distributed execution service on the specified device.
 *
 * @name distributedSchedule
 * @since 7
 * @import distributedSchedule from '@ohos.distributedSchedule'
 * @devices tv, phone, tablet, wearable
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 */
declare namespace distributedSchedule {
  /**
   * Start the distributed execution service on the specified device.
   *
   * @param deviceId Indicates the network ID of the device on which the distributed execution service will be started.
   * @return Returns the network ID of the device on which the distributed execution service started.
   * @since 7
   */
  function startDistributedService(deviceId: string, callback: AsyncCallback<string>): void;
  function startDistributedService(deviceId: string): Promise<string>;

  /**
   * Stop the distributed execution service on the specified device.
   *
   * @param deviceId Indicates the network ID of the device on which the distributed execution service will be stoped.
   * @return Returns the network ID of the device on which the distributed execution service stoped.
   * @since 7
   */
  function stopDistributedService(deviceId: string, callback: AsyncCallback<string>): void;
  function stopDistributedService(deviceId: string): Promise<string>;
}

export default distributedSchedule;
