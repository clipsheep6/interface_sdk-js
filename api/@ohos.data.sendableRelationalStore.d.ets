/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkData
 */

import collections from '../arkts/@arkts.collections';
import lang from '../arkts/@arkts.lang';

/**
 * Provides methods for rdbStore create and delete.
 *
 * @namespace relationalStore
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @crossplatform
 * @since 12
 */
declare namespace sendableRelationalStore {
  /**
   * Records information of the asset.
   *
   * @interface Asset
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 12
   */
  interface Asset extends lang.ISendable {
    /**
     * The name of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 12
     */
    name: string;

    /**
     * The uri of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 12
     */
    uri: string;

    /**
     * The path of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 12
     */
    path: string;

    /**
     * The create time of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 12
     */
    createTime: string;

    /**
     * The modify time of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 12
     */
    modifyTime: string;

    /**
     * The size of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 12
     */
    size: string;

    /**
     * The status of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 12
     */
    status?: number;
  }

  /**
   * Indicates several assets in one column
   *
   * @typedef { collections.Array<Asset> } Assets
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 12
   */
  type Assets = collections.Array<Asset>;

  /**
   * Indicates possible value types
   *
   * @typedef { null | number | string | boolean | collections.Uint8Array | Asset | Assets |
   * collections.Float32Array | bigint } ValueType
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 12
   */
  type ValueType = null | number | string | boolean | collections.Uint8Array | Asset | Assets |
    collections.Float32Array | bigint;

  /**
   * Values in buckets are stored in key-value pairs, change {[key: string]: ValueType;} to Record<string, ValueType>
   *
   * @typedef { Record<string, ValueType> } ValuesBucket
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 12
   */
  type ValuesBucket = Record<string, ValueType>;
}

export default sendableRelationalStore;