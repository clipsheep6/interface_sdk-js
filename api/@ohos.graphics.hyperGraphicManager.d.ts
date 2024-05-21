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
 * Provides interfaces to hyepr graphic manager.
 *
 * @namespace hyperGraphicManager
 * @since 10
 */
declare namespace hyperGraphicManager {
  /**
   * Set the mode of refresh rate, only accessible to inner system use.
   *
   * @param { RefreshRateMode } mode - Indicates the refresh rate mode to set. 
   * Use -1 for auto refresh rate mode. If defined, use 1, 2 and 3 for low, mid and high refresh rate mode.
   * @returns Returns {@code true} if the operation is successful, returns {@code false} otherwise.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @since 10
   * @syscap SystemCapability.Graphic.Graphic2D.HyperGraphicManager
   * @systemapi Hide this for inner system use.
   */
  function setRefreshRateMode(mode: RefreshRateMode): boolean;

  /**
   * Query the current refresh rate of a screen.
   *
   * @param { number } screenId - Indicates the id of the screen whose current refresh rate is queried.
   * @returns Returns the current refresh rate of the screen.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @since 10
   * @syscap SystemCapability.Graphic.Graphic2D.HyperGraphicManager
   */
  function getScreenCurrentRefreshRate(screenId: number): number;

  /**
   * Query all supported refresh rates of a screen.
   *
   * @param { number } screenId - Indicates the id of the screen whose supported refresh rates are queried.
   * @returns Returns an array which contains all supported refresh rates of the screen.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @since 10
   * @syscap SystemCapability.Graphic.Graphic2D.HyperGraphicManager
   */
  function getScreenSupportedRefreshRates(screenId: number): Array<number>;

  /**
   * The enum of refresh rate mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphic.Graphic2D.HyperGraphicManager
   * @since 10
   */
  enum RefreshRateMode {
    /**
     * Auto refresh rate mode.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.HyperGraphicManager
     * @since 10
     */
    AUTO_REFRESH_RATE_MODE = -1,
    /**
     * Low refresh rate mode.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.HyperGraphicManager
     * @since 10
     */
    LOW_REFRESH_RATE_MODE = 1,
    /**
     * Mid refresh rate mode.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.HyperGraphicManager
     * @since 10
     */
    MID_REFRESH_RATE_MODE = 2,
    /**
     * High refresh rate mode.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.HyperGraphicManager
     * @since 10
     */
    HIGH_REFRESH_RATE_MODE = 3
  }
}
