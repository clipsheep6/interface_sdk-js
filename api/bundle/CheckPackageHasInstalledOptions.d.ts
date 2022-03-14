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
 * Indicates the CheckPackageHasInstalledResponse
 *
 * @since 8
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @permission NA
 * @systemapi
 */
export interface CheckPackageHasInstalledResponse {
  /**
    *  Indicates the result of this response
    * @since 8
    * @syscap SystemCapability.BundleManager.BundleFramework
    */
  result: boolean;
}

/**
 * Indicates parameters required for hasInstalled
 *
 * @since 8
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @permission NA
 * @systemapi
 */
export interface CheckPackageHasInstalledOptions {
  /**
    * Indicates the name of the bundle
    * @since 8
    * @syscap SystemCapability.BundleManager.BundleFramework
    */
  bundleName: string;

  /**
    * Indicates the success function
    * @param data Indicates the response result
    * @since 8
    * @syscap SystemCapability.BundleManager.BundleFramework
    */
  success?: (data: CheckPackageHasInstalledResponse) => void;

  /**
    * Indicates the fail function
    * @param data Indicates the result data
    * @param code Indicates the result code
    * @since 8
    * @syscap SystemCapability.BundleManager.BundleFramework
    */
  fail?: (data: any, code: number) => void;

  /**
    * Indicates the complete function
    * @since 8
    * @syscap SystemCapability.BundleManager.BundleFramework
    */
  complete?: () => void;
}
