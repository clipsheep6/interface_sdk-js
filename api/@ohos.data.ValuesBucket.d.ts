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
 
  /**
   * Records information of the asset.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @since 10
   */
export class Asset {
    /**
     * The name of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 10
     */
    name: string;
    
    /**
     * The uri of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 10
     */
    uri: string;
    
    /**
     * The create time  of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 10
     */
    createTime: string;
    
    /**
     * The modify time of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 10
     */
    modifyTime: string;
    
    /**
     * The size of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 10
     */
    size: string;
}

/**
 * Indicates possible value types
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi
 * @StageModelOnly
 * @since 9
 */
export type ValueType = number | string | boolean;

/**
 * Values in buckets are stored in key-value pairs
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi
 * @StageModelOnly
 * @since 9
 */
export type ValuesBucket = {
  [key: string]: ValueType | Uint8Array | Asset | Asset[] | null;
};
