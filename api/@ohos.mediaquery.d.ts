/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import {Callback} from './basic';

/**
 * Used to do mediaquery operations.
 * @import import mediaquery from '@ohos.mediaquery'
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
declare namespace mediaquery {

  interface MediaQueryResult {

    /**
     * Whether the match condition is met.
     * This parameter is read-only.
     * @since 7
     */
    readonly matches: boolean;

    /**
     * Matching condition of a media event.
     * This parameter is read-only.
     * @since 7
     */
    readonly media: string;
  }

  interface MediaQueryListener extends MediaQueryResult {

    /**
     * Registers a callback with the corresponding query condition by using the handle.
     * This callback is triggered when the media attributes change.
     * @throws BusinessError 401 if the number of arguments is 0, the type of argument 1 is not string, the length of argument 1 is too long, argument 1 mismatch "change" or the type of argument 2 is not function.
     * @throws BusinessError 100001 if can not get jsEngine or MediaQueryListener init failed.
     * @since 7
     */
    on(type: 'change', callback: Callback<MediaQueryResult>): void;

    /**
     * Deregisters a callback with the corresponding query condition by using the handle.
     * This callback is not triggered when the media attributes chang.
     * @throws BusinessError 401 if the number of arguments is 0, the type of argument 1 is not string, the length of argument 1 is too long, argument 1 mismatch "change" or the type of argument 2 is not function.
     * @throws BusinessError 100001 if can not get jsEngine or MediaQueryListener init failed.
     * @since 7
     */
    off(type: 'change', callback?: Callback<MediaQueryResult>): void;
  }

  /**
   * Sets the media query criteria and returns the corresponding listening handle
   * @throws BusinessError 401 if the number of parameters is not 1, the type of condition is incorrect or the length of condition is too long.
   * @since 7
   */
  function matchMediaSync(condition: string): MediaQueryListener;
}

export default mediaquery;
