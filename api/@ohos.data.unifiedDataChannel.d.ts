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
import uniformTypeDescriber from './@ohos.data.uniformTypeDescriber';

/**
 * UDMF - Unified Data Management Framework
 * @since 10
 * 
 * @namespace unifiedDataChannel
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 */
declare namespace unifiedDataChannel {
  /**
   * Insert data into UDMF by Intention
   *
   * @param { uniformTypeDescriber.Options } options - fill the intention field to indicate the target {@link uniformTypeDescriber.Intention}.
   * @param { uniformTypeDescriber.UnifiedData } data - {@link uniformTypeDescriber.UnifiedData} data object to insert into target intention.
   * @param { AsyncCallback<string> } callback - {string}: the unique identifier.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function insertData(options: uniformTypeDescriber.Options, data: uniformTypeDescriber.UnifiedData, callback: AsyncCallback<string>): void;

  /**
   * Insert data into UDMF by Intention
   *
   * @param { uniformTypeDescriber.Options } options - fill the intention field to indicate the target {@link uniformTypeDescriber.Intention}.
   * @param { uniformTypeDescriber.UnifiedData } data - {@link uniformTypeDescriber.UnifiedData} data object to insert into target intention.
   * @returns { Promise<string> } {string}: the unique identifier.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function insertData(options: uniformTypeDescriber.Options, data: uniformTypeDescriber.UnifiedData): Promise<string>;

  /**
   * Update data to UDMF by Unique Identifier
   *
   * @param { uniformTypeDescriber.Options } options - fill the unique identifier field to indicate the target {@link uniformTypeDescriber.UnifiedData}.
   * @param { uniformTypeDescriber.UnifiedData } data - {@link uniformTypeDescriber.UnifiedData} data object to update the target data.
   * @param { AsyncCallback<void> } callback - the callback of updateData.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function updateData(options: uniformTypeDescriber.Options, data: uniformTypeDescriber.UnifiedData, callback: AsyncCallback<void>): void;

  /**
   * Update data to UDMF by Unique Identifier
   *
   * @param { uniformTypeDescriber.Options } options - fill the unique identifier field to indicate the target {@link uniformTypeDescriber.UnifiedData}.
   * @param { uniformTypeDescriber.UnifiedData } data - {@link uniformTypeDescriber.UnifiedData} data object to update the target data.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function updateData(options: uniformTypeDescriber.Options, data: uniformTypeDescriber.UnifiedData): Promise<void>;

  /**
   * Query data of UDMF by Intention or Unique Identifier
   *
   * @param { uniformTypeDescriber.Options } options - fill the intention or unique identifier field to indicate the target {@link uniformTypeDescriber.Intention} or {@link uniformTypeDescriber.UnifiedData}.
   * @param { AsyncCallback<Array<uniformTypeDescriber.UnifiedData>> } callback - {Array<UnifiedData>}: the target {@link uniformTypeDescriber.UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function queryData(options: uniformTypeDescriber.Options, callback: AsyncCallback<Array<uniformTypeDescriber.UnifiedData>>): void;

  /**
   * Query data of UDMF by Intention or Unique Identifier
   *
   * @param { uniformTypeDescriber.Options } options - fill the intention or unique identifier field to indicate the target {@link uniformTypeDescriber.Intention} or {@link uniformTypeDescriber.UnifiedData}.
   * @returns { Promise<Array<uniformTypeDescriber.UnifiedData>> } {Array<UnifiedData>}: the target {@link uniformTypeDescriber.UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function queryData(options: uniformTypeDescriber.Options): Promise<Array<uniformTypeDescriber.UnifiedData>>;

  /**
   * Delete data of UDMF by Intention or Unique Identifier
   *
   * @param { uniformTypeDescriber.Options } options - fill the intention or unique identifier field to indicate the target {@link uniformTypeDescriber.Intention} or {@link uniformTypeDescriber.UnifiedData}.
   * @param { AsyncCallback<Array<uniformTypeDescriber.UnifiedData>> } callback - {Array<UnifiedData>}: the deleted {@link uniformTypeDescriber.UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function deleteData(options: uniformTypeDescriber.Options, callback: AsyncCallback<Array<uniformTypeDescriber.UnifiedData>>): void;

  /**
   * Delete data of UDMF by Intention or Unique Identifier
   *
   * @param { uniformTypeDescriber.Options } options - fill the intention or unique identifier field to indicate the target {@link uniformTypeDescriber.Intention} or {@link uniformTypeDescriber.UnifiedData}.
   * @returns { Promise<Array<uniformTypeDescriber.UnifiedData>> } {Array<UnifiedData>}: the deleted {@link uniformTypeDescriber.UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function deleteData(options: uniformTypeDescriber.Options): Promise<Array<uniformTypeDescriber.UnifiedData>>;
}

export default unifiedDataChannel;
