/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Use the ImageBase class to display Image.
 * @since 10
 */
declare class ImageBase {
  /**
   * The constructor transfers parameter settings.
   * @since 10
   */
  constructor(value: Resource);

  /**
   * Get PixelMap of Image.
   * @since 10
   */
  getPixelMap(): PixelMap;
}

/**
 * Use the StratifiedImage class to display stratified image.
 * @since 10
 */
declare class StratifiedImage extends ImageBase {
  /**
   * The constructor with foreground and background.
   * @since 10
   */
  constructor(foreground: Resource, background: Resource);

  /**
  * Get PixelMap of foreground.
  * @since 10
  */
  getForegroundPixelMap(): PixelMap;

  /**
   * Get PixelMap of background.
   * @since 10
   */
  getBackgroundPixelMap(): PixelMap;

  /**
   * Get PiexlMap of mask.
   * @since 10
   */
  getMask(): PixelMap;
}