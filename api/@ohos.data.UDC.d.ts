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
import UDD from './@ohos.data.UDD';

/**
 * UDMF - Unified Data Management Framework
 * UDC - Unified Data Channel
 * @since 10
 * 
 * @namespace UDC
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 */
declare namespace UDC {
  /**
   * Insert data into UDMF by Intention
   *
   * @param { UDD.Options } options - fill the intention field to indicate the target {@link UDD.Intention}.
   * @param { UDD.UnifiedData } data - {@link UDD.UnifiedData} data object to insert into target intention.
   * @param { AsyncCallback<string> } callback - {string}: the unique identifier.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function insertData(options: UDD.Options, data: UDD.UnifiedData, callback: AsyncCallback<string>): void;

  /**
   * Insert data into UDMF by Intention
   *
   * @param { UDD.Options } options - fill the intention field to indicate the target {@link UDD.Intention}.
   * @param { UDD.UnifiedData } data - {@link UDD.UnifiedData} data object to insert into target intention.
   * @returns { Promise<string> } {string}: the unique identifier.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function insertData(options: UDD.Options, data: UDD.UnifiedData): Promise<string>;

  /**
   * Update data to UDMF by Unique Identifier
   *
   * @param { UDD.Options } options - fill the unique identifier field to indicate the target {@link UDD.UnifiedData}.
   * @param { UDD.UnifiedData } data - {@link UDD.UnifiedData} data object to update the target data.
   * @param { AsyncCallback<void> } callback - the callback of updateData.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function updateData(options: UDD.Options, data: UDD.UnifiedData, callback: AsyncCallback<void>): void;

  /**
   * Update data to UDMF by Unique Identifier
   *
   * @param { UDD.Options } options - fill the unique identifier field to indicate the target {@link UDD.UnifiedData}.
   * @param { UDD.UnifiedData } data - {@link UDD.UnifiedData} data object to update the target data.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function updateData(options: UDD.Options, data: UDD.UnifiedData): Promise<void>;

  /**
   * Query data of UDMF by Intention or Unique Identifier
   *
   * @param { UDD.Options } options - fill the intention or unique identifier field to indicate the target {@link UDD.Intention} or {@link UDD.UnifiedData}.
   * @param { AsyncCallback<Array<UDD.UnifiedData>> } callback - {Array<UnifiedData>}: the target {@link UDD.UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function queryData(options: UDD.Options, callback: AsyncCallback<Array<UDD.UnifiedData>>): void;

  /**
   * Query data of UDMF by Intention or Unique Identifier
   *
   * @param { UDD.Options } options - fill the intention or unique identifier field to indicate the target {@link UDD.Intention} or {@link UDD.UnifiedData}.
   * @returns { Promise<Array<UDD.UnifiedData>> } {Array<UnifiedData>}: the target {@link UDD.UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function queryData(options: UDD.Options): Promise<Array<UDD.UnifiedData>>;

  /**
   * Delete data of UDMF by Intention or Unique Identifier
   *
   * @param { UDD.Options } options - fill the intention or unique identifier field to indicate the target {@link UDD.Intention} or {@link UDD.UnifiedData}.
   * @param { AsyncCallback<Array<UDD.UnifiedData>> } callback - {Array<UnifiedData>}: the deleted {@link UDD.UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function deleteData(options: UDD.Options, callback: AsyncCallback<Array<UDD.UnifiedData>>): void;

  /**
   * Delete data of UDMF by Intention or Unique Identifier
   *
   * @param { UDD.Options } options - fill the intention or unique identifier field to indicate the target {@link UDD.Intention} or {@link UDD.UnifiedData}.
   * @returns { Promise<Array<UDD.UnifiedData>> } {Array<UnifiedData>}: the deleted {@link UDD.UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function deleteData(options: UDD.Options): Promise<Array<UDD.UnifiedData>>;
}

export default UDC;
