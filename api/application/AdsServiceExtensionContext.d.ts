/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import ExtensionContext from './ExtensionContext';

/**
 * The context of ads service extension ability.
 * @syscap SystemCapability.Advertising.Ads
 * @systemapi
 * @since 11
 */
export default class AdsServiceExtensionContext extends ExtensionContext {
  /**
   * Indicates the UID of media application.
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Advertising.Ads
   * @systemapi
   * @since 11
   */
  readonly callingUid: number;

  /**
   * Indicates the bundle name of media application.
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Advertising.Ads
   * @systemapi
   * @since 11
   */
  readonly bundleName: string;

  /**
   * Indicates the time that request starts.
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Advertising.Ads
   * @systemapi
   * @since 11
   */
  readonly requestStartTime: number;
}