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

import UIAbilityContext from './application/UIAbilityContext';
import { AsyncCallback } from './basic';
import { Advertisement } from './advertising/advertisement';

/**
 * advertising.
 *
 * @syscap SystemCapability.Cloud.Ads
 * @since 10
 * @import advertising from '@ohos.advertising';
 */
declare namespace advertising {
  /**
   * the parameters in the request for loading one or more advertisements.
   *
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  export interface AdRequestParams {
    /**
     * @argument adId the advertisement slot id.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    adId: string;

    /**
     * the advertisement type of request.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    adType?: number;

    /**
     * the advertisement quantity of request.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    adCount?: number;

    /**
     * the advertisement view size width that expect.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    adWidth?: number;

    /**
     * the advertisement view size height that expect.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    adHeight?: number;

    /**
     * the extended attributes for request parameters.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    [key:string] : number | boolean | string | undefined;
  }

  /**
   * load advertising options.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  export interface AdOptions {
    /**
     * the tags for children's content.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    tagForChildProtection?: number;

    /**
     * advertisement content Classification setting.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    adContentClassification?: string;

    /**
     * non-personalized advertising settings.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    nonPersonalizedAd?: number;

    /**
     * the extended attributes for advertising options.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    [key:string] : number | boolean | string | undefined;
  }

  /**
   * the interaction options info for show advertising.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  export interface AdDisplayOptions {
    /**
     * advertising custom data.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    customData?: string;

    /**
     * advertising user Id.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    userId?: string;

    /**
     * indicates whether a dialog box is displayed to notify users of video playback
     * and application download in non-Wi-Fi scenarios.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    mobileDataRemind: boolean;

    /**
     * indicates whether to mute the playback of the incentive ad video.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    mute: boolean;

    /**
     * the type of the scenario where the audio focus is obtained during video playback.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    audioFocusType: number;

    /**
     * the extended attributes for interaction options.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    [key:string] : number | boolean | string | undefined;
  }

  export interface AdInteractionListener {
    /**
     * ads status callback
     * @param status The current advertising status
     * @param data The data of current advertising status
     */
    onStatusChanged(status: string, data: string);
  }

  /**
   * the listener of load advertising.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  export interface AdLoadListener {
    /**
     * Called by system when the ad load has been failed.
     *
     * @param { number } errorCode - code of ad loading failure.
     * @param { string } errorMsg - error message
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    onAdLoadFailed(errorCode: number, errorMsg: string): void;

    /**
     * Called by system when the ad load has been successed.
     *
     * @param { Advertisement[] } adList - one or more advertisements are loaded successfully.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    onAdLoadSuccess(adList: Advertisement[]): void;
  }

  /**
   * initializing the global advertisement configuration.
   *
   * @param { UIAbilityContext } abilityContext - Context of the Media Application.
   * @param { AdOptions } adConfig - the global advertisement configuration.
   * @param { AsyncCallback<void> } callback - Indicates the callback to ads init.
   * @throws {BusinessError} 401 - Invalid input parameter.
   * @throws {BusinessError} 21800001 - System internal error.
   * @throws {BusinessError} 21800002 - Failed to initialize the Advertising configuration...
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  function init(abilityContext: UIAbilityContext, adConfig: AdOptions, callback: AsyncCallback<void>): void;

  /**
   * initializing the global advertisement configuration.
   *
   * @param { UIAbilityContext } abilityContext - Context of the Media Application.
   * @param { AdOptions } adConfig - the global advertisement configuration.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws {BusinessError} 401 - Invalid input parameter.
   * @throws {BusinessError} 21800001 - System internal error.
   * @throws {BusinessError} 21800002 - Failed to initialize the Advertising configuration.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  function init(abilityContext: UIAbilityContext, adConfig: AdOptions): Promise<void>;

  /**
   * show full screen advertising.
   *
   * @param { UIAbilityContext } context - Indicates the UIAbility Context of the Media Application.
   * @param { Advertisement } ad - Indicates the Advertisement content information.
   * @param { AdDisplayOptions } option - Indicates Interaction option object use to the show Ad object.
   * @throws {BusinessError} 401 - Invalid input parameter.
   * @throws {BusinessError} 21800001 - System internal error.
   * @throws {BusinessError} 21800004 - Failed to display the Advertising.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  function showAd(context: UIAbilityContext, ad: Advertisement, option: AdDisplayOptions): void;

  /**
   * A class for advertising loader.
   *
   * The AdLoader contains the function of requesting to load advertising.
   * All advertising parameters are obtained from this function.
   * @syscap SystemCapability.Cloud.Ads
   * @since 10
   */
  export class AdLoader {
    /**
     * Constructs a AdLoader object, UIAbilityContext should be transferred.
     *
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    constructor(abilityContext: UIAbilityContext);

    /**
     * Load advertising.
     *
     * @param { AdRequestParams } adParams - Indicates the parameters in the request for load ad.
     * @param { AdOptions } adOptions - Indicates the global advertisement configuration.
     * @param { AdLoadListener } listener - Indicates the listener to be registered that use to load Ad.
     * @throws {BusinessError} 401 - Invalid input parameter.
     * @throws {BusinessError} 21800001 - System internal error.
     * @throws {BusinessError} 21800003 - Failed to load the ad request.
     * @syscap SystemCapability.Cloud.Ads
     * @since 10
     */
    loadAd(adParams: AdRequestParams, adOptions: AdOptions, listener: AdLoadListener): void;
  }
}

export default advertising;