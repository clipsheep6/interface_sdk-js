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
import { lang } from '@kit.ArkTS';
/**
 * This module provides the capability of image codec and access
 * @namespace sendableImage
 * @syscap SystemCapability.Multimedia.Image.Core
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare namespace SendableImage {

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
  interface SendableSize {
    /**
     * Height
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 6
     */
    /**
     * Height
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Height
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
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
     * @since 6
     */
    /**
     * Width
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Width
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
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
   * Enumerates alpha types.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Enumerates alpha types.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Enumerates alpha types.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Enumerates alpha types.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  enum AlphaType {
    /**
     * Indicates an unknown alpha type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Indicates an unknown alpha type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates an unknown alpha type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates an unknown alpha type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    UNKNOWN = 0,

    /**
     * Indicates that the image has no alpha channel, or all pixels in the image are fully opaque.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Indicates that the image has no alpha channel, or all pixels in the image are fully opaque.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates that the image has no alpha channel, or all pixels in the image are fully opaque.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates that the image has no alpha channel, or all pixels in the image are fully opaque.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    OPAQUE = 1,

    /**
     * Indicates that RGB components of each pixel in the image are premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Indicates that RGB components of each pixel in the image are premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates that RGB components of each pixel in the image are premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates that RGB components of each pixel in the image are premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    PREMUL = 2,

    /**
     * Indicates that RGB components of each pixel in the image are independent of alpha and are not premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Indicates that RGB components of each pixel in the image are independent of alpha and are not premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates that RGB components of each pixel in the image are independent of alpha and are not premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates that RGB components of each pixel in the image are independent of alpha and are not premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    UNPREMUL = 3
  }

  /**
   * Enumerates decoding dynamic range.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12
   */
  enum DecodingDynamicRange {
    /**
     * Decoding according to the content of the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    AUTO = 0,

    /**
     * Decoding to standard dynamic range.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    SDR = 1,

    /**
     * Decoding to high dynamic range.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    HDR = 2
  }

  /**
   * Enumerates packing dynamic range.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12
   */
  enum PackingDynamicRange {
    /**
     * Packing according to the content of the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    AUTO = 0,

    /**
     * Packing to standard dynamic range.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    SDR = 1,
  }

  /**
   * Enum for image scale mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Enum for image scale mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Enum for image scale mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Enum for image scale mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  enum ScaleMode {
    /**
     * Indicates the effect that fits the image into the target size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Indicates the effect that fits the image into the target size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the effect that fits the image into the target size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the effect that fits the image into the target size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    FIT_TARGET_SIZE = 0,

    /**
     * Indicates the effect that scales an image to fill the target image area and center-crops the part outside the area.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Indicates the effect that scales an image to fill the target image area and center-crops the part outside the area.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the effect that scales an image to fill the target image area and center-crops the part outside the area.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates the effect that scales an image to fill the target image area and center-crops the part outside the area.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    CENTER_CROP = 1
  }

  /**
   * The component type of image.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9
   */
  enum ComponentType {
    /**
     * Luma info.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    YUV_Y = 1,

    /**
     * Chrominance info.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    YUV_U = 2,

    /**
     * Chroma info.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    YUV_V = 3,

    /**
     * Jpeg type.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    JPEG = 4
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
  interface SendableRegion {
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
    size: SendableSize;

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
   * Describes area information in an image.
   *
   * @typedef PositionArea
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 7
   */
  /**
   * Describes area information in an image.
   *
   * @typedef PositionArea
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Describes area information in an image.
   *
   * @typedef PositionArea
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Describes area information in an image.
   *
   * @typedef PositionArea
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  interface PositionArea {
    /**
     * Image data that will be read or written.
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    /**
     * Image data that will be read or written.
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Image data that will be read or written.
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Image data that will be read or written.
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    pixels: ArrayBuffer;

    /**
     * Offset for data reading.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    /**
     * Offset for data reading.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Offset for data reading.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Offset for data reading.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    offset: number;

    /**
     * Number of bytes to read.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    /**
     * Number of bytes to read.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Number of bytes to read.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Number of bytes to read.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    stride: number;

    /**
     * Region to read.
     *
     * @type { Region }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    /**
     * Region to read.
     *
     * @type { Region }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Region to read.
     *
     * @type { Region }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Region to read.
     *
     * @type { Region }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    region: image.Region;
  }

  /**
   * Describes image information.
   *
   * @typedef ImageInfo
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 6
   */
  /**
   * Describes image information.
   *
   * @typedef ImageInfo
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Describes image information.
   *
   * @typedef ImageInfo
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Describes image information.
   *
   * @typedef ImageInfo
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  interface ImageInfo {
    /**
     * Indicates image dimensions specified by a {@link Size} interface.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 6
     */
    /**
     * Indicates image dimensions specified by a {@link Size} interface.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates image dimensions specified by a {@link Size} interface.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates image dimensions specified by a {@link Size} interface.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    size: image.Size;

    /**
     * Indicates image default density.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Indicates image default density.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates image default density.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Indicates image default density.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    density: number;

    /**
     * The number of byte per row.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The number of byte per row.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    stride: number;

    /**
     * Indicates image format.
     *
     * @type { PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    pixelFormat: image.PixelMapFormat;

    /**
     * Indicates image alpha type.
     *
     * @type { AlphaType }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    alphaType: AlphaType;

    /**
     * Indicates image mime type.
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12
     */
    mimeType: string;

    /**
     * Indicates whether the image high dynamic range
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    isHdr: boolean;
  }

  /**
   * Describes image color components.
   *
   * @typedef Component
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  interface Component {
    /**
     * Component type.
     *
     * @type { ComponentType }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly componentType: ComponentType;

    /**
     * Row stride.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly rowStride: number;

    /**
     * Pixel stride.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly pixelStride: number;

    /**
     * Component buffer.
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly byteBuffer: ArrayBuffer;
  }

  /**
   * Initialization options for pixelmap.
   *
   * @typedef InitializationOptions
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 8
   */
  /**
   * Initialization options for pixelmap.
   *
   * @typedef InitializationOptions
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Initialization options for pixelmap.
   *
   * @typedef InitializationOptions
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Initialization options for pixelmap.
   *
   * @typedef InitializationOptions
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  interface InitializationOptions {
    /**
     * PixelMap size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 8
     */
    /**
     * PixelMap size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * PixelMap size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * PixelMap size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    size: image.Size;

    /**
     * PixelMap source format.
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    srcPixelFormat?: image.PixelMapFormat;

    /**
     * PixelMap expected format.
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    pixelFormat?: image.PixelMapFormat;

    /**
     * Editable or not.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 8
     */
    /**
     * Editable or not.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Editable or not.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Editable or not.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    editable?: boolean;

    /**
     * PixelMap expected alpha type.
     *
     * @type { ?AlphaType }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * PixelMap expected alpha type.
     *
     * @type { ?AlphaType }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * PixelMap expected alpha type.
     *
     * @type { ?AlphaType }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * PixelMap expected alpha type.
     *
     * @type { ?AlphaType }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    alphaType?: AlphaType;

    /**
     * PixelMap expected scaling effect.
     *
     * @type { ?ScaleMode }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * PixelMap expected scaling effect.
     *
     * @type { ?ScaleMode }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 10
     */
    /**
     * PixelMap expected scaling effect.
     *
     * @type { ?ScaleMode }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * PixelMap expected scaling effect.
     *
     * @type { ?ScaleMode }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    scaleMode?: ScaleMode;
  }

  /**
   * Creates an ImageSource instance based on the URI.
   *
   * @param { string } uri Image source URI.
   * @returns { ImageSource } returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 6
   */
  /**
   * Creates an ImageSource instance based on the URI.
   *
   * @param { string } uri Image source URI.
   * @returns { ImageSource } returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @since 10
   */
  /**
   * Creates an ImageSource instance based on the URI.
   *
   * @param { string } uri Image source URI.
   * @returns { ImageSource } returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function createImageSource(uri: string): ImageSourceHelper;

  /**
   * Creates an ImageSource instance based on the file descriptor.
   *
   * @param { number } fd ID of a file descriptor.
   * @returns { ImageSource } Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 7
   */
  /**
   * Creates an ImageSource instance based on the file descriptor.
   *
   * @param { number } fd ID of a file descriptor.
   * @returns { ImageSource } Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @since 10
   */
  /**
   * Creates an ImageSource instance based on the file descriptor.
   *
   * @param { number } fd ID of a file descriptor.
   * @returns { ImageSource } Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function createImageSource(fd: number): ImageSourceHelper;

  /**
   * Creates an ImageSource instance based on the buffer.
   *
   * @param { ArrayBuffer } buf The buffer of the image.
   * @returns { ImageSource } Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 9
   */
  /**
   * Creates an ImageSource instance based on the buffer.
   *
   * @param { ArrayBuffer } buf The buffer of the image.
   * @returns { ImageSource } Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @since 10
   */
  /**
   * Creates an ImageSource instance based on the buffer.
   *
   * @param { ArrayBuffer } buf The buffer of the image.
   * @returns { ImageSource } Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 11
   */
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
  function createImageSource(buf: ArrayBuffer): ImageSourceHelper;

  /**
   * Create SendablePixelMap by data buffer.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for SendablePixelMap.
   * @param { AsyncCallback<SendablePixelMap> } callback Callback used to return the SendablePixelMap object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12
   */
  function createPixelMap(colors: ArrayBuffer, options: image.InitializationOptions, callback: AsyncCallback<SendablePixelMap>): void;

  /**
   * Create SendablePixelMap by data buffer.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for SendablePixelMap.
   * @returns { Promise<SendablePixelMap> } A Promise instance used to return the SendablePixelMap object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12
   */
  function createSendablePixelMap(colors: ArrayBuffer, options: image.InitializationOptions): Promise<SendablePixelMap>;

  /**
   * Create SendablePixelMap by data buffer.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for SendablePixelMap.
   * @returns { SendablePixelMap } Returns the instance if the operation is successful;Otherwise, return undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12
   */
  function createSendablePixelMapSync(colors: ArrayBuffer, options: image.InitializationOptions): SendablePixelMap;

  /**
   * Create an empty SendablePixelMap.
   *
   * @param { InitializationOptions } options Initialization options for SendablePixelMap.
   * @returns { SendablePixelMap } Returns the instance if the operation is successful;Otherwise, return undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12
   */
  function createSendablePixelMapSync(options: image.InitializationOptions): SendablePixelMap;

  /**
   * Transforms SendablePixelMap from unpremultiplied alpha format to premultiplied alpha format.
   *
   * @param { SendablePixelMap } src The source SendablePixelMap.
   * @param { SendablePixelMap } dst The destination SendablePixelMap.
   * @param { AsyncCallback<void> } callback Callback used to return the operation result.
   * If the operation fails, an error message is returned.
   * @throws { BusinessError } 62980103 - The image data is not supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980246 - Failed to read the SendablePixelMap.
   * @throws { BusinessError } 62980248 - SendablePixelMap not allow modify.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12
   */
  function createPremultipliedSendablePixelMap(src: SendablePixelMap, dst: SendablePixelMap, callback: AsyncCallback<void>): void;

  /**
   * Transforms SendablePixelMap from premultiplied alpha format to unpremultiplied alpha format.
   *
   * @param { SendablePixelMap } src The source SendablePixelMap.
   * @param { SendablePixelMap } dst The destination SendablePixelMap.
   * @returns { Promise<void> } A Promise instance used to return the operation result.
   * If the operation fails, an error message is returned.
   * @throws { BusinessError } 62980103 - The image data is not supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980246 - Failed to read the SendablePixelMap.
   * @throws { BusinessError } 62980248 - SendablePixelMap not allow modify.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12
   */
function createPremultipliedSendablePixelMap(src: SendablePixelMap, dst: SendablePixelMap): Promise<void>;

  /**
   * Transforms SendablePixelMap from premultiplied alpha format to unpremultiplied alpha format.
   *
   * @param { SendablePixelMap } src The source SendablePixelMap.
   * @param { SendablePixelMap } dst The destination SendablePixelMap.
   * @param { AsyncCallback<void> } callback Callback used to return the operation result.
   * If the operation fails, an error message is returned.
   * @throws { BusinessError } 62980103 - The image data is not supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980246 - Failed to read the SendablePixelMap.
   * @throws { BusinessError } 62980248 - SendablePixelMap not allow modify.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12
   */
function createUnpremultipliedSendablePixelMap(src: SendablePixelMap, dst: SendablePixelMap, callback: AsyncCallback<void>): void;

  /**
   * Transforms SendablePixelMap from premultiplied alpha format to unpremultiplied alpha format.
   *
   * @param { SendablePixelMap } src The source SendablePixelMap.
   * @param { SendablePixelMap } dst The destination SendablePixelMap.
   * @returns { Promise<void> } A Promise instance used to return the operation result.
   * If the operation fails, an error message is returned.
   * @throws { BusinessError } 62980103 - The image data is not supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980246 - Failed to read the SendablePixelMap.
   * @throws { BusinessError } 62980248 - SendablePixelMap not allow modify.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12
   */
function createUnpremultipliedSendablePixelMap(src: SendablePixelMap, dst: SendablePixelMap): Promise<void>;

  /**
   * Creates a SendablePixelMap object based on MessageSequence parameter.
   *
   * @param { rpc.MessageSequence } sequence - rpc.MessageSequence parameter.
   * @returns { SendablePixelMap } Returns the instance if the operation is successful.
   * Otherwise, an exception will be thrown.
   * @throws { BusinessError } 62980096 - Operation failed.
   * @throws { BusinessError } 62980097 - IPC error.
   * @throws { BusinessError } 62980115 - Invalid input parameter.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980177 - Abnormal API environment.
   * @throws { BusinessError } 62980178 - Failed to create the SendablePixelMap.
   * @throws { BusinessError } 62980179 - Abnormal buffer size.
   * @throws { BusinessError } 62980180 - FD mapping failed.
   * @throws { BusinessError } 62980246 - Failed to read the SendablePixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12
   */
  function createSendablePixelMapFromParcel(sequence: rpc.MessageSequence): SendablePixelMap;

  /**
   * Creates a SendablePixelMap object from surface id.
   *
   * @param { string } surfaceId - surface id.
   * @param { Region } region - The region to surface.
   * @returns { Promise<SendablePixelMap> } Returns the instance if the operation is successful.
   * Otherwise, an exception will be thrown.
   * @throws { BusinessError } 62980115 - If the image parameter invalid.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980178 - Failed to create the SendablePixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12
   */
  function createSendablePixelMapFromSurface(surfaceId: string, region: image.Region): Promise<SendablePixelMap>;

  /**
   * Creates a SendablePixelMap from PixelMap.
   *
   * @param { image.PixelMap } pixelmap - the src pixelmap.
   * @returns { SendablePixelMap } Returns the instance if the operation is successful.
   * Otherwise, an exception will be thrown.
   * @throws { BusinessError } 401 - If the image parameter invalid. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12
   */
  function convertFromPixelMap(pixelmap: image.PixelMap): SendablePixelMap;

  /**
   * Create pixelmap by data buffer.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for pixelmap.
   * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 8
   */
  /**
   * Create pixelmap by data buffer.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for pixelmap.
   * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 10
   */
  function createPixelMap(colors: ArrayBuffer, options: InitializationOptions): Promise<ImageSourceHelper>;  

  type ISendable = lang.ISendable;

  /**
   * SendablePixelMap instance.
   *
   * @typedef SendablePixelMap
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  interface SendablePixelMap extends ISendable {
    /**
     * Whether the image sendable pixelmap can be edited.
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readonly isEditable: boolean;

    /**
     * Reads image sendable pixelmap data and writes the data to an ArrayBuffer. This method uses
     * a promise to return the result.
     *
     * @param { ArrayBuffer } dst A buffer to which the image sendable pixelmap data will be written.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readPixelsToBuffer(dst: ArrayBuffer): Promise<void>;

    /**
     * Reads image sendable pixelmap data and writes the data to an ArrayBuffer. This method uses
     * a callback to return the result.
     *
     * @param { ArrayBuffer } dst A buffer to which the image sendable pixelmap data will be written.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readPixelsToBuffer(dst: ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * Reads image sendable pixelmap data and writes the data to an ArrayBuffer.
     *
     * @param { ArrayBuffer } dst A bufferPositionAreac to which the image sendable pixelmap data will be written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readPixelsToBufferSync(dst: ArrayBuffer): void;

    /**
     * Reads image sendable pixelmap data in an area. This method uses a promise to return the data read.
     *
     * @param { PositionArea } area Area from which the image sendable pixelmap data will be read.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readPixels(area: image.PositionArea): Promise<void>;

    /**
     * Reads image sendable pixelmap data in an area. This method uses a callback to return the data read.
     *
     * @param { PositionArea } area Area from which the image sendable pixelmap data will be read.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readPixels(area: image.PositionArea, callback: AsyncCallback<void>): void;

    /**
     * Reads image sendable pixelmap data in an area.
     *
     * @param { PositionArea } area Area from which the image sendable pixelmap data will be read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readPixelsSync(area: image.PositionArea): void;

    /**
     * Writes image sendable pixelmap data to the specified area. This method uses a promise to return
     * the operation result.
     *
     * @param { PositionArea } area Area to which the image sendable pixelmap data will be written.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    writePixels(area: image.PositionArea): Promise<void>;

    /**
     * Writes image sendable pixelmap data to the specified area. This method uses a callback to return
     * the operation result.
     *
     * @param { PositionArea } area Area to which the image sendable pixelmap data will be written.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    writePixels(area: image.PositionArea, callback: AsyncCallback<void>): void;

    /**
     * Writes image sendable pixelmap data to the specified area.
     *
     * @param { PositionArea } area Area to which the image sendable pixelmap data will be written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    writePixelsSync(area: image.PositionArea): void;

    /**
     * Reads image data in an ArrayBuffer and writes the data to a SendablePixelMap object. This method
     * uses a promise to return the result.
     *
     * @param { ArrayBuffer } src A buffer from which the image data will be read.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    writeBufferToPixels(src: ArrayBuffer): Promise<void>;

    /**
     * Reads image data in an ArrayBuffer and writes the data to a SendablePixelMap object. This method
     * uses a callback to return the result.
     *
     * @param { ArrayBuffer } src A buffer from which the image data will be read.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    writeBufferToPixels(src: ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * Reads image data in an ArrayBuffer and writes the data to a SendablePixelMap object.
     *
     * @param { ArrayBuffer } src A buffer from which the image data will be read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    writeBufferToPixelsSync(src: ArrayBuffer): void;

    /**
     * Obtains sendable pixelmap information about this image. This method uses a promise to return the information.
     *
     * @returns { Promise<ImageInfo> } A Promise instance used to return the image sendable pixelmap information.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    getImageInfo(): Promise<image.ImageInfo>;

    /**
     * Obtains sendable pixelmap information about this image. This method uses a callback to return the information.
     *
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image sendable pixelmap information.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    getImageInfo(callback: AsyncCallback<image.ImageInfo>): void;

    /**
     * Get image information from image source.
     *
     * @returns { ImageInfo } the image information.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    getImageInfoSync(): image.ImageInfo;

    /**
     * Obtains the number of bytes in each line of the image sendable pixelmap.
     *
     * @returns { number } Number of bytes in each line.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    getBytesNumberPerRow(): number;

    /**
     * Obtains the total number of bytes of the image sendable pixelmap.
     *
     * @returns { number } Total number of bytes.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    getPixelBytesNumber(): number;

    /**
     * Obtains the density of the image sendable pixelmap.
     *
     * @returns { number } The number of density.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    getDensity(): number;

    /**
     * Set the transparent rate of sendable pixelmap. This method uses a callback to return the operation result.
     *
     * @param { number } rate The value of transparent rate.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    opacity(rate: number, callback: AsyncCallback<void>): void;

    /**
     * Set the transparent rate of sendable pixelmap. This method uses a promise to return the result.
     *
     * @param { number } rate The value of transparent rate.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    opacity(rate: number): Promise<void>;

    /**
     * Set the transparent rate of sendable pixelmap.
     *
     * @param { number } rate The value of transparent rate.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    opacitySync(rate: number): void;

    /**
     * Obtains new sendable pixelmap with alpha information. This method uses a promise to return the information.
     *
     * @returns { Promise<SendablePixelMap> } A Promise instance used to return the new image sendable pixelmap.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    createAlphaPixelmap(): Promise<SendablePixelMap>;

    /**
     * Obtains new sendable pixelmap with alpha information. This method uses a callback to return the information.
     *
     * @param { AsyncCallback<SendablePixelMap> } callback Callback used to return the new image sendable pixelmap.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    createAlphaPixelmap(callback: AsyncCallback<SendablePixelMap>): void;

    /**
     * Obtains new sendable pixelmap with alpha information.
     *
     * @returns { SendablePixelMap } return the new image sendable pixelmap. If the operation fails, an error message is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    createAlphaPixelmapSync(): SendablePixelMap;

    /**
     * Image zoom in width and height. This method uses a callback to return the operation result.
     *
     * @param { number } x The zoom value of width.
     * @param { number } y The zoom value of height.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    scale(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * Image zoom in width and height. This method uses a promise to return the result.
     *
     * @param { number } x The zoom value of width.
     * @param { number } y The zoom value of height.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    scale(x: number, y: number): Promise<void>;

    /**
     * Image zoom in width and height.
     *
     * @param { number } x The zoom value of width.
     * @param { number } y The zoom value of height.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    scaleSync(x: number, y: number): void;

    /**
     * Image position transformation. This method uses a callback to return the operation result.
     *
     * @param { number } x The position value of width.
     * @param { number } y The position value of height.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    translate(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * Image position transformation. This method uses a promise to return the result.
     *
     * @param { number } x The position value of width.
     * @param { number } y The position value of height.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    translate(x: number, y: number): Promise<void>;

    /**
     * Image position transformation.
     *
     * @param { number } x The position value of width.
     * @param { number } y The position value of height.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    translateSync(x: number, y: number): void;

    /**
     * Image rotation. This method uses a callback to return the operation result.
     *
     * @param { number } angle The rotation angle.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    rotate(angle: number, callback: AsyncCallback<void>): void;

    /**
     * Image rotation. This method uses a promise to return the result.
     *
     * @param { number } angle The rotation angle.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    rotate(angle: number): Promise<void>;

    /**
     * Image rotation.
     *
     * @param { number } angle The rotation angle.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    rotateSync(angle: number): void;

    /**
     * Image flipping. This method uses a callback to return the operation result.
     *
     * @param { boolean } horizontal Is flip in horizontal.
     * @param { boolean } vertical Is flip in vertical.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    flip(horizontal: boolean, vertical: boolean, callback: AsyncCallback<void>): void;

    /**
     * Image flipping. This method uses a promise to return the result.
     *
     * @param { boolean } horizontal Is flip in horizontal.
     * @param { boolean } vertical Is flip in vertical.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    flip(horizontal: boolean, vertical: boolean): Promise<void>;

    /**
     * Image flipping.
     *
     * @param { boolean } horizontal Is flip in horizontal.
     * @param { boolean } vertical Is flip in vertical.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    flipSync(horizontal: boolean, vertical: boolean): void;

    /**
     * Crop the image. This method uses a callback to return the operation result.
     *
     * @param { Region } region The region to crop.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    crop(region: image.Region, callback: AsyncCallback<void>): void;

    /**
     * Crop the image. This method uses a promise to return the result.
     *
     * @param { Region } region The region to crop.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    crop(region: image.Region): Promise<void>;

    /**
     * Crop the image.
     *
     * @param { Region } region The region to crop.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    cropSync(region: image.Region): void;

    /**
     * Get color space of sendable pixelmap.
     *
     * @returns { colorSpaceManager.ColorSpaceManager } If the operation fails, an error message is returned.
     * @throws { BusinessError } 62980101 - If the image data abnormal.
     * @throws { BusinessError } 62980103 - If the image data unsupport.
     * @throws { BusinessError } 62980115 - If the image parameter invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform  
     * @since 11
     */
    getColorSpace(): colorSpaceManager.ColorSpaceManager;

    /**
     * Marshalling SendablePixelMap and write into MessageSequence.
     *
     * @param { rpc.MessageSequence } sequence rpc.MessageSequence parameter.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    marshalling(sequence: rpc.MessageSequence): void;

    /**
     * Creates a SendablePixelMap object based on MessageSequence parameter.
     *
     * @param { rpc.MessageSequence } sequence rpc.MessageSequence parameter.
     * @returns { Promise<SendablePixelMap> } A Promise instance used to return the SendablePixelMap object.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error.
     * @throws { BusinessError } 62980096 - The operation failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    unmarshalling(sequence: rpc.MessageSequence): Promise<SendablePixelMap>;

    /**
     * Set color space of sendable pixelmap.
     * 
     * This method is only used to set the colorspace property of SendablePixelMap,
     * while all pixel data remains the same after calling this method.
     * If you want to change colorspace for all pixels, use method
     * {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager)} or
     * {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager, AsyncCallback<void>)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } colorSpace The color space for sendable pixelmap.
     * @throws { BusinessError } 62980111 - If the operation invalid.
     * @throws { BusinessError } 62980115 - If the image parameter invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform 
     * @since 11
     */
    setColorSpace(colorSpace: colorSpaceManager.ColorSpaceManager): void;

    /**
     * Is it stride Alignment
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 11
     */
    readonly isStrideAlignment: boolean;

     /**
     * Apply color space of sendable pixelmap, the pixels will be changed by input color space.
     * This method uses a callback to return the operation result.
     * 
     * This method is used to change color space of SendablePixelMap.
     * Pixel data will be changed by calling this method.
     * If you want to set the colorspace property of SendablePixelMap only,
     * use method {@Link #setColorSpace(colorSpaceManager.ColorSpaceManager)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } targetColorSpace - The color space for sendable pixelmap.
     * @param { AsyncCallback<void> } callback - Callback used to return the operation result.
     * If the operation fails, an error message is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
     * @throws { BusinessError } 62980108 - Failed to convert the color space.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11
     */
    applyColorSpace(targetColorSpace: colorSpaceManager.ColorSpaceManager, callback: AsyncCallback<void>): void;

    /**
     * Apply color space of sendable pixelmap, the pixels will be changed by input color space.
     * This method uses a promise to return the result.
     * 
     * This method is used to change color space of SendablePixelMap.
     * Pixel data will be changed by calling this method.
     * If you want to set the colorspace property of SendablePixelMap only,
     * use method {@Link #setColorSpace(colorSpaceManager.ColorSpaceManager)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } targetColorSpace - The color space for sendable pixelmap.
     * @returns { Promise<void> } A Promise instance used to return the operation result. 
     * If the operation fails, an error message is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
     * @throws { BusinessError } 62980108 - Failed to convert the color space.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11
     */
    applyColorSpace(targetColorSpace: colorSpaceManager.ColorSpaceManager): Promise<void>;

    /**
     * Releases this SendablePixelMap object. This method uses a callback to return the result.
     *
     * @param { AsyncCallback<void> } callback Callback invoked for instance release. 
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases this SendablePixelMap object. This method uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the instance release result. 
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    release(): Promise<void>;
  }

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
  interface ImageSourceHelper {
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
    createSendablePixelMap(options?: image.DecodingOptions): Promise<SendablePixelMap>;

    /**
     * Releases an ImageSource instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    /**
     * Releases an ImageSource instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    release(): Promise<void>;
  }


  /**
   * Provides basic image operations, including obtaining image information, and reading and writing image data.
   *
   * @typedef Image
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  interface SendableImage {
    /**
     * Sets or gets the image area to crop, default is size.
     *
     * @type { Region }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    clipRect: SendableRegion;

    /**
     * Image size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly size: SendableSize;

    /**
     * Image format.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
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
     * @since 9
     */
    getComponent(componentType: ComponentType): Promise<Component>;

    /**
     * Release current image to receive another and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    release(): Promise<void>;
  }

  /**
   * Image receiver object.
   *
   * @typedef ImageReceiver
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9
   */
  interface ImageReceiverHelper {
    /**
     * Image size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readonly size: image.Size;

    /**
     * Image capacity.
     *
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readonly capacity: number;

    /**
     * Image format.
     *
     * @type { ImageFormat }
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readonly format: image.ImageFormat;

    /**
     * Get an id which indicates a surface and can be used to set to Camera or other component can receive a surface
     * and uses a promise to return the result.
     *
     * @returns { Promise<string> } A Promise instance used to return the surface id.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    getReceivingSurfaceId(): Promise<string>;

    /**
     * Get lasted image from receiver and uses a promise to return the result.
     *
     * @returns { Promise<Image> } A Promise instance used to return the latest image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readLatestImage(): Promise<SendableImage>;

    /**
     * Get next image from receiver and uses a promise to return the result.
     *
     * @returns { Promise<Image> } A Promise instance used to return the next image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readNextImage(): Promise<SendableImage>;

    /**
     * Subscribe callback when receiving an image
     *
     * @param { 'imageArrival' } type Callback used to return the next image.
     * @param { AsyncCallback<void> } callback Callback used to return image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    on(type: 'imageArrival', callback: AsyncCallback<void>): void;

    /**
     * Release image receiver instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    release(): Promise<void>;
  }

}

export default SendableImage;