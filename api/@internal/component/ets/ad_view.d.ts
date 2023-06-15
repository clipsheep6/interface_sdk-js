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

declare type Advertisement = import('../api/advertising/advertisement').Advertisement;
declare type AdInteractionListener = import('../api/@ohos.advertising').default.AdInteractionListener;
declare type AdDisplayOptions = import('../api/@ohos.advertising').default.AdDisplayOptions;

/**
 * Defines the AdView Component.
 * @interface AdViewInterface
 * @syscap SystemCapability.Cloud.Ads
 * @since 10
 */
interface AdViewInterface {
  /**
   * Create AdView Component with listener.
   * @param ads - The ads to display
   * @param options - The interaction options info for displaying an ad
   * @param adListener - The interaction listener to be registered that use to show ad
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  (ads: Advertisement[], options: AdDisplayOptions, adListener: AdInteractionListener);
}

declare const AdView: AdViewInterface;