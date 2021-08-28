/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AsyncCallback, ErrorCallback } from './basic';
import image from './@ohos.multimedia.image';

/**
 * interface for screenshot
 * @devices tv, phone, tablet, wearable
 */
declare namespace screenshot {
  /**
   * capture screen
   * @param options screenshot options {@ScreenshotOptions}.
   * @devices tv, phone, tablet, wearable
   */
  function save(options: ScreenshotOptions, callback: AsyncCallback<image.PixelMap>): void;
  function save(callback: AsyncCallback<image.PixelMap>): void;
  function save(options?: ScreenshotOptions): Promise<image.PixelMap>;

  /**
   * rectangle
   * @devices tv, phone, tablet, wearable
   */
  interface Rect {
    left: number;
    top: number;
    width: number;
    height: number;
  }

  /**
   * size
   * @devices tv, phone, tablet, wearable
   */
  interface Size {
    width: number;
    height: number;
  }

  /**
   * screenshot options
   * @devices tv, phone, tablet, wearable
   */
  interface ScreenshotOptions {
    /**
     * the area of screenshot, default is full screen
     */
    screenRect?: Rect;
    /**
     * the size of screenshot image, default is full screen
     */
    imageSize?: Size;
    /**
     * the rotation angle of screenshot image, default is 0
     */
    rotation?: number;
  }
}

export default screenshot;