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

/**
 * Defines the advertisement.
 *
 * @syscap SystemCapability.Cloud.Ads
 * @since 10
 */
export interface Advertisement {
  /**
   * the advertising type.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  adType: number;

  /**
   * the content id that is being played in the media.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  contentId: string;

  /**
   * the advertising close keywords.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  adCloseKeyWords: string[];

  /**
   * the detailed creative type returned by an advertisement.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  creativeType: number;

  /**
   * the server verifies the configuration parameters.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  rewardVerifyConfig: Map<string, string>;

  /**
   * the advertising content data.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  adContentData: object;

  /**
   * the unique identifier of the advertising event generation.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  uniqueId: string;

  /**
   * the subscriber has been rewarded.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  rewarded: boolean;

  /**
   * the ad has been shown.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  shown: boolean;

  /**
   * the extended attributes of advertisement.
   */
  [key:string] : number | boolean | string | undefined;
}