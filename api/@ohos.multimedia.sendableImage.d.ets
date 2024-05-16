/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ImageKit
 */

import { AsyncCallback } from './@ohos.base';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import type image from './@ohos.multimedia.image';
import type resourceManager from './@ohos.resourceManager';
import type rpc from './@ohos.rpc';
import lang from '../arkts/@arkts.lang';
/**
 * This module provides the capability of image codec and access
 * @namespace sendableImage
 * @syscap SystemCapability.Multimedia.Image.Core
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare namespace sendableImage {

  /**
   * Describes the size of an image.
   *
   * @typedef Size
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  interface Size extends lang.ISendable {
    /**
     * Height
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    height: number;

    /**
     * Width
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    width: number;
  }

  /**
   * Describes region information.
   *
   * @typedef Region
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  interface Region extends lang.ISendable {
    /**
     * Image size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    size: Size;

    /**
     * x-coordinate at the upper left corner of the image.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    x: number;

    /**
     * y-coordinate at the upper left corner of the image.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    y: number;
  }

  /**
   * Creates an ImageSource instance based on the URI.
   *
   * @param { string } uri Image source URI.
   * @returns { ImageSource } returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  function createImageSource(uri: string): ImageSource;

  /**
   * Creates an ImageSource instance based on the file descriptor.
   *
   * @param { number } fd ID of a file descriptor.
   * @returns { ImageSource } Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  function createImageSource(fd: number): ImageSource;

  /**
   * Creates an ImageSource instance based on the buffer.
   *
   * @param { ArrayBuffer } buf The buffer of the image.
   * @returns { ImageSource } Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  function createImageSource(buf: ArrayBuffer): ImageSource;

  /**
   * Creates an ImageReceiver instance.
   *
   * @param { Size } size - The default {@link Size} in pixels of the Images that this receiver will produce.
   * @param { ImageFormat } format - The format of the Image that this receiver will produce. This must be one of the
   *            {@link ImageFormat} constants.
   * @param { number } capacity - The maximum number of images the user will want to access simultaneously.
   * @returns { ImageReceiver } Returns the ImageReceiver instance if the operation is successful; returns null otherwise.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 12
   */
  function createImageReceiver(size: image.Size, format: image.ImageFormat, capacity: number): ImageReceiver; 

  /**
   * ImageSource instance.
   *
   * @typedef ImageSource
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  interface ImageSource {
    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    createPixelMap(options?: image.DecodingOptions): Promise<PixelMap>;

    /**
     * Releases an ImageSource instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12
     */
    release(): Promise<void>;
  }

  /**
   * Provides basic image operations, including obtaining image information, and reading and writing image data.
   *
   * @typedef Image
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12
   */
  interface Image extends lang.ISendable {
    /**
     * Sets or gets the image area to crop, default is size.
     *
     * @type { Region }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    clipRect: Region;

    /**
     * Image size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    readonly size: Size;

    /**
     * Image format.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    readonly format: number;

    /**
     * Image timestamp.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    readonly timestamp: number;

    /**
     * Get component buffer from image and uses a promise to return the result.
     *
     * @param { ComponentType } componentType The component type of image.
     * @returns { Promise<Component> } A Promise instance used to return the component buffer.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    getComponent(componentType: image.ComponentType): Promise<image.Component>;

    /**
     * Release current image to receive another and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    release(): Promise<void>;
  }

  /**
   * Image receiver object.
   *
   * @typedef ImageReceiver
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 12
   */
  interface ImageReceiver {
    /**
     * Image size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12
     */
    readonly size: image.Size;

    /**
     * Image capacity.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12
     */
    readonly capacity: number;

    /**
     * Image format.
     *
     * @type { ImageFormat }
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12
     */
    readonly format: image.ImageFormat;

    /**
     * Get an id which indicates a surface and can be used to set to Camera or other component can receive a surface
     * and uses a promise to return the result.
     *
     * @returns { Promise<string> } A Promise instance used to return the surface id.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12
     */
    getReceivingSurfaceId(): Promise<string>;

    /**
     * Get lasted image from receiver and uses a promise to return the result.
     *
     * @returns { Promise<Image> } A Promise instance used to return the latest image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12
     */
    readLatestImage(): Promise<Image>;

    /**
     * Get next image from receiver and uses a promise to return the result.
     *
     * @returns { Promise<Image> } A Promise instance used to return the next image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12
     */
    readNextImage(): Promise<Image>;

    /**
     * Subscribe callback when receiving an image
     *
     * @param { 'imageArrival' } type Callback used to return the next image.
     * @param { AsyncCallback<void> } callback Callback used to return image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12
     */
    on(type: 'imageArrival', callback: AsyncCallback<void>): void;

    /**
     * Release image receiver instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12
     */
    release(): Promise<void>;
  }

}

export default sendableImage;