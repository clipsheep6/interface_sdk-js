/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';

/**
 * @namespace image
 * @since 6
 * @name image
 */
declare namespace image {
  /**
   * Enumerates pixel map formats.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 7
   */
  enum PixelMapFormat {
    /**
     * Indicates an unknown format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    UNKNOWN = 0,

    /**
     * Indicates that each pixel is stored on 16 bits. Only the R, G, and B components are encoded
     * from the higher-order to the lower-order bits: red is stored with 5 bits of precision,
     * green is stored with 6 bits of precision, and blue is stored with 5 bits of precision.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    RGB_565 = 2,

    /**
     * Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：B(8bits), G(8bits), R(8bits), A(8bits)
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    RGBA_8888 = 3,

    /**
     * Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：B(8bits), G(8bits), R(8bits), A(8bits)
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    BGRA_8888 = 4,

    /**
     * Indicates that each pixel is stored on 24 bits. Each pixel contains 3 components：R(8bits), G(8bits), B(8bits)
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    RGB_888 = 5,

    /**
     * Indicates that each pixel is stored on 8 bits. Each pixel contains 1 component：ALPHA(8bits)
     * and is stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    ALPHA_8 = 6,

    /**
     * Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：B(8bits), G(8bits), R(8bits), A(8bits)
     * and are stored from the higher-order to the lower-order bits in F16.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    RGBA_F16 = 7,

    /**
     * Indicates that the storage order is to store Y first and then V U alternately each occupies 8 bits
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    NV21 = 8,

    /**
     * Indicates that the storage order is to store Y first and then U V alternately each occupies 8 bits
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    NV12 = 9
  }

  /**
   * Describes the size of an image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 6
   */
  interface Size {
    /**
     * Height
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 6
     */
    height: number;

    /**
     * Width
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 6
     */
    width: number;
  }

  /**
   * Enumerates exchangeable image file format (Exif) information types of an image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 7
   */
  enum PropertyKey {
    /**
     * Number of bits in each pixel of an image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    BITS_PER_SAMPLE = 'BitsPerSample',

    /**
     * Image rotation mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    ORIENTATION = 'Orientation',

    /**
     * Image length.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    IMAGE_LENGTH = 'ImageLength',

    /**
     * Image width.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    IMAGE_WIDTH = 'ImageWidth',

    /**
     * GPS latitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    GPS_LATITUDE = 'GPSLatitude',

    /**
     * GPS longitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    GPS_LONGITUDE = 'GPSLongitude',

    /**
     * GPS latitude reference. For example, N indicates north latitude and S indicates south latitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    GPS_LATITUDE_REF = 'GPSLatitudeRef',

    /**
     * GPS longitude reference. For example, E indicates east longitude and W indicates west longitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    GPS_LONGITUDE_REF = 'GPSLongitudeRef',

    /**
     * Shooting time
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    DATE_TIME_ORIGINAL = 'DateTimeOriginal',

    /**
     * Exposure time
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    EXPOSURE_TIME = 'ExposureTime',

    /**
     * Scene type
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    SCENE_TYPE = 'SceneType',

    /**
     * ISO speedratings
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    ISO_SPEED_RATINGS = 'ISOSpeedRatings',

    /**
     * Aperture value
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    F_NUMBER = 'FNumber'
  }

  /**
   * Enum for image formats.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  enum ImageFormat {
    /**
     * YCBCR422 semi-planar format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    YCBCR_422_SP = 1000,

    /**
     * JPEG encoding format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    JPEG = 2000
  }

  /**
   * Enumerates alpha types.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  enum AlphaType {
    /**
     * Indicates an unknown alpha type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    UNKNOWN = 0,

    /**
     * Indicates that the image has no alpha channel, or all pixels in the image are fully opaque.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    OPAQUE = 1,

    /**
     * Indicates that RGB components of each pixel in the image are premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    PREMUL = 2,

    /**
     * Indicates that RGB components of each pixel in the image are independent of alpha and are not premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    UNPREMUL = 3
  }

  /**
   * Enum for image scale mode.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  enum ScaleMode {
    /**
     * Indicates the effect that fits the image into the target size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    FIT_TARGET_SIZE = 0,

    /**
     * Indicates the effect that scales an image to fill the target image area and center-crops the part outside the area.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    CENTER_CROP = 1
  }

  /**
   * The component type of image.
   *
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
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 8
   */
  interface Region {
    /**
     * Image size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    size: Size;

    /**
     * x-coordinate at the upper left corner of the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    x: number;

    /**
     * y-coordinate at the upper left corner of the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    y: number;
  }

  /**
   * Describes area information in an image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 7
   */
  interface PositionArea {
    /**
     * Image data that will be read or written.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    pixels: ArrayBuffer;

    /**
     * Offset for data reading.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    offset: number;

    /**
     * Number of bytes to read.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    stride: number;

    /**
     * Region to read.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    region: Region;
  }

  /**
   * Describes image information.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 6
   */
  interface ImageInfo {
    /**
     * Indicates image dimensions specified by a {@link Size} interface.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 6
     */
    size: Size;

    /**
     * Indicates image default density.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    density: number;
  }

  /**
   * Describes the option for image packing.
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @since 6
   */
  interface PackingOption {
    /**
     * Multipurpose Internet Mail Extensions (MIME) format of the target image, for example, image/jpeg.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    format: string;

    /**
     * Quality of the target image. The value is an integer ranging from 0 to 100. A larger value indicates better.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    quality: number;

    /**
     * BufferSize of the target image.
     * If this bufferSize is less than or equal to 0, it will be converted to 10MB.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 9
     */
    bufferSize?: number;
  }

  /**
   * Describes image properties.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 7
   */
  interface GetImagePropertyOptions {
    /**
     * Index of an image.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    index?: number;

    /**
     * Default property value.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    defaultValue?: string;
  }

  /**
   * Describes image decoding parameters.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 7
   */
  interface DecodingOptions {
    /**
     * Number of image frames.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    index?: number;

    /**
     * Sampling ratio of the image pixel map.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    sampleSize?: number;

    /**
     * Rotation angle of the image pixel map. The value ranges from 0 to 360.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    rotate?: number;

    /**
     * Whether the image pixel map is editable.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    editable?: boolean;

    /**
     * Width and height of the image pixel map. The value (0, 0) indicates that the pixels are decoded
     * based on the original image size.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    desiredSize?: Size;

    /**
     * Cropping region of the image pixel map.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    desiredRegion?: Region;

    /**
     * Data format of the image pixel map.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    desiredPixelFormat?: PixelMapFormat;

    /**
     * The density for image pixel map.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 9
     */
    fitDensity?: number;
  }

  /**
   * Describes image color components.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  interface Component {
    /**
     * Component type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly componentType: ComponentType;

    /**
     * Row stride.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly rowStride: number;

    /**
     * Pixel stride.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly pixelStride: number;

    /**
     * Component buffer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly byteBuffer: ArrayBuffer;
  }

  /**
   * Initialization options for pixelmap.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 8
   */
  interface InitializationOptions {
    /**
     * PixelMap size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 8
     */
    size: Size;

    /**
     * PixelMap expected format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 8
     */
    pixelFormat?: PixelMapFormat;

    /**
     * Editable or not.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 8
     */
    editable?: boolean;

    /**
     * PixelMap expected alpha type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    alphaType?: AlphaType;

    /**
     * PixelMap expected scaling effect.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    scaleMode?: ScaleMode;
  }

  /**
   * Initialization options for ImageSource.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  interface SourceOptions {
    /**
     * The density for ImageSource.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    sourceDensity: number;

    /**
     * PixelMap expected format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    sourcePixelFormat?: PixelMapFormat;

    /**
     * PixelMap size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    sourceSize?: Size;
  }

  /**
   * Create pixelmap by data buffer.
   *
   * @param { ArrayBuffer } colors
   * @param { InitializationOptions } options
   * @param { AsyncCallback<PixelMap> } callback
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 8
   */
  function createPixelMap(colors: ArrayBuffer, options: InitializationOptions, callback: AsyncCallback<PixelMap>): void;

  /**
   * Create pixelmap by data buffer.
   *
   * @param { ArrayBuffer } colors
   * @param { InitializationOptions } options
   * @returns { Promise<PixelMap> }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 8
   */
  function createPixelMap(colors: ArrayBuffer, options: InitializationOptions): Promise<PixelMap>;

  /**
   * Creates an ImageSource instance based on the URI.
   *
   * @param uri Image source URI.
   * @returns Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 6
   */
  function createImageSource(uri: string): ImageSource;

  /**
   * Creates an ImageSource instance based on the URI.
   *
   * @param uri Image source URI.
   * @param options The config of Image source.
   * @returns Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 9
   */
  function createImageSource(uri: string, options: SourceOptions): ImageSource;

  /**
   * Creates an ImageSource instance based on the file descriptor.
   *
   * @param fd ID of a file descriptor.
   * @returns Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 7
   */
  function createImageSource(fd: number): ImageSource;

  /**
   * Creates an ImageSource instance based on the file descriptor.
   *
   * @param fd ID of a file descriptor.
   * @param options The config of Image source.
   * @returns Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 9
   */
  function createImageSource(fd: number, options: SourceOptions): ImageSource;

  /**
   * Creates an ImageSource instance based on the buffer.
   *
   * @param buf The buffer of the image.
   * @returns Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 9
   */
  function createImageSource(buf: ArrayBuffer): ImageSource;

  /**
   * Creates an ImageSource instance based on the buffer.
   *
   * @param buf The buffer of the image.
   * @param options The config of Image source.
   * @returns Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 9
   */
  function createImageSource(buf: ArrayBuffer, options: SourceOptions): ImageSource;

  /**
   * Creates an ImageSource instance based on the buffer in incremental.
   *
   * @param buf The buffer of the image.
   * @returns Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 9
   */
  function CreateIncrementalSource(buf: ArrayBuffer): ImageSource;

  /**
   * Creates an ImageSource instance based on the buffer in incremental.
   *
   * @param buf The buffer of the image.
   * @param options The config of source.
   * @returns Returns the ImageSource instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 9
   */
  function CreateIncrementalSource(buf: ArrayBuffer, options?: SourceOptions): ImageSource;

  /**
   * Creates an ImagePacker instance.
   *
   * @returns Returns the ImagePacker instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @since 6
   */
  function createImagePacker(): ImagePacker;

  /**
   * Creates an ImageReceiver instance.
   *
   * @param width The default width in pixels of the Images that this receiver will produce.
   * @param height The default height in pixels of the Images that this receiver will produce.
   * @param format The format of the Image that this receiver will produce. This must be one of the
   *            {@link ImageFormat} constants.
   * @param capacity The maximum number of images the user will want to access simultaneously.
   * @returns Returns the ImageReceiver instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9
   */
  function createImageReceiver(width: number, height: number, format: number, capacity: number): ImageReceiver;

  /**
   * Creates an ImageCreator instance.
   *
   * @param width The default width in pixels of the Images that this creator will produce.
   * @param height The default height in pixels of the Images that this creator will produce.
   * @param format The format of the Image that this creator will produce. This must be one of the
   *            {@link ImageFormat} constants.
   * @param capacity The maximum number of images the user will want to access simultaneously.
   * @returns Returns the ImageCreator instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageCreator
   * @since 9
   */
  function createImageCreator(width: number, height: number, format: number, capacity: number): ImageCreator;

  /**
   * PixelMap instance.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 7
   */
  interface PixelMap {
    /**
     * Whether the image pixel map can be edited.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    readonly isEditable: boolean;

    /**
     * Reads image pixel map data and writes the data to an ArrayBuffer. This method uses
     * a promise to return the result.
     *
     * @param dst A buffer to which the image pixel map data will be written.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    readPixelsToBuffer(dst: ArrayBuffer): Promise<void>;

    /**
     * Reads image pixel map data and writes the data to an ArrayBuffer. This method uses
     * a callback to return the result.
     *
     * @param dst A buffer to which the image pixel map data will be written.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    readPixelsToBuffer(dst: ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * Reads image pixel map data in an area. This method uses a promise to return the data read.
     *
     * @param area Area from which the image pixel map data will be read.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    readPixels(area: PositionArea): Promise<void>;

    /**
     * Reads image pixel map data in an area. This method uses a callback to return the data read.
     *
     * @param area Area from which the image pixel map data will be read.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    readPixels(area: PositionArea, callback: AsyncCallback<void>): void;

    /**
     * Writes image pixel map data to the specified area. This method uses a promise to return
     * the operation result.
     *
     * @param area Area to which the image pixel map data will be written.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    writePixels(area: PositionArea): Promise<void>;

    /**
     * Writes image pixel map data to the specified area. This method uses a callback to return
     * the operation result.
     *
     * @param area Area to which the image pixel map data will be written.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    writePixels(area: PositionArea, callback: AsyncCallback<void>): void;

    /**
     * Reads image data in an ArrayBuffer and writes the data to a PixelMap object. This method
     * uses a promise to return the result.
     *
     * @param src A buffer from which the image data will be read.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    writeBufferToPixels(src: ArrayBuffer): Promise<void>;

    /**
     * Reads image data in an ArrayBuffer and writes the data to a PixelMap object. This method
     * uses a callback to return the result.
     *
     * @param src A buffer from which the image data will be read.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    writeBufferToPixels(src: ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * Obtains pixel map information about this image. This method uses a promise to return the information.
     *
     * @returns A Promise instance used to return the image pixel map information. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    getImageInfo(): Promise<ImageInfo>;

    /**
     * Obtains pixel map information about this image. This method uses a callback to return the information.
     *
     * @param callback Callback used to return the image pixel map information. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    getImageInfo(callback: AsyncCallback<ImageInfo>): void;

    /**
     * Obtains the number of bytes in each line of the image pixel map.
     *
     * @returns Number of bytes in each line.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    getBytesNumberPerRow(): number;

    /**
     * Obtains the total number of bytes of the image pixel map.
     *
     * @returns Total number of bytes.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    getPixelBytesNumber(): number;

    /**
     * Obtains the density of the image pixel map.
     *
     * @returns The number of density.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    getDensity(): number;

    /**
     * Set the transparent rate of pixel map. This method uses a callback to return the operation result.
     *
     * @param rate The value of transparent rate.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    opacity(rate: number, callback: AsyncCallback<void>): void;

    /**
     * Set the transparent rate of pixel map. This method uses a promise to return the result.
     *
     * @param rate The value of transparent rate.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    opacity(rate: number): Promise<void>;

    /**
     * Obtains new pixel map with alpha information. This method uses a promise to return the information.
     *
     * @returns A Promise instance used to return the new image pixel map. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    createAlphaPixelmap(): Promise<PixelMap>;

    /**
     * Obtains new pixel map with alpha information. This method uses a callback to return the information.
     *
     * @param callback Callback used to return the new image pixel map. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    createAlphaPixelmap(callback: AsyncCallback<PixelMap>): void;

    /**
     * Image zoom in width and height. This method uses a callback to return the operation result.
     *
     * @param x The zoom value of width.
     * @param y The zoom value of height.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    scale(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * Image zoom in width and height. This method uses a promise to return the result.
     *
     * @param x The zoom value of width.
     * @param y The zoom value of height.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    scale(x: number, y: number): Promise<void>;

    /**
     * Image position transformation. This method uses a callback to return the operation result.
     *
     * @param x The position value of width.
     * @param y The position value of height.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    translate(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * Image position transformation. This method uses a promise to return the result.
     *
     * @param x The position value of width.
     * @param y The position value of height.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    translate(x: number, y: number): Promise<void>;

    /**
     * Image rotation. This method uses a callback to return the operation result.
     *
     * @param angle The rotation angle.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    rotate(angle: number, callback: AsyncCallback<void>): void;

    /**
     * Image rotation. This method uses a promise to return the result.
     *
     * @param angle The rotation angle.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    rotate(angle: number): Promise<void>;

    /**
     * Image flipping. This method uses a callback to return the operation result.
     *
     * @param horizontal Is flip in horizontal.
     * @param vertical Is flip in vertical.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    flip(horizontal: boolean, vertical: boolean, callback: AsyncCallback<void>): void;

    /**
     * Image flipping. This method uses a promise to return the result.
     *
     * @param horizontal Is flip in horizontal.
     * @param vertical Is flip in vertical.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    flip(horizontal: boolean, vertical: boolean): Promise<void>;

    /**
     * Crop the image. This method uses a callback to return the operation result.
     *
     * @param region The region to crop.
     * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    crop(region: Region, callback: AsyncCallback<void>): void;

    /**
     * Crop the image. This method uses a promise to return the result.
     *
     * @param region The region to crop.
     * @returns A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    crop(region: Region): Promise<void>;

    /**
     * Releases this PixelMap object. This method uses a callback to return the result.
     *
     * @param callback Callback invoked for instance release. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases this PixelMap object. This method uses a promise to return the result.
     *
     * @returns A Promise instance used to return the instance release result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 7
     */
    release(): Promise<void>;
  }

  /**
   * ImageSource instance.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 6
   */
  interface ImageSource {
    /**
     * Obtains information about an image with the specified sequence number and uses a callback
     * to return the result.
     *
     * @param index Sequence number of an image.
     * @param callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    getImageInfo(index: number, callback: AsyncCallback<ImageInfo>): void;

    /**
     * Obtains information about this image and uses a callback to return the result.
     *
     * @param callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    getImageInfo(callback: AsyncCallback<ImageInfo>): void;

    /**
     * Get image information from image source.
     *
     * @param index Sequence number of an image. If this parameter is not specified, the default value 0 is used.
     * @returns A Promise instance used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    getImageInfo(index?: number): Promise<ImageInfo>;

    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param options Image decoding parameters.
     * @returns A Promise instance used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    createPixelMap(options?: DecodingOptions): Promise<PixelMap>;

    /**
     * Creates a PixelMap object. This method uses a callback to return the object.
     *
     * @param callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    createPixelMap(callback: AsyncCallback<PixelMap>): void;

    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a callback to
     * return the object.
     *
     * @param options Image decoding parameters.
     * @param callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    createPixelMap(options: DecodingOptions, callback: AsyncCallback<PixelMap>): void;

    /**
     * Creates a PixelMap array based on image decoding parameters. This method uses a promise to
     * return the array.
     *
     * @param options Image decoding parameters.
     * @returns A Promise instance used to return the PixelMap array.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 10
     */
    createPixelMapList(options?: DecodingOptions): Promise<Array<PixelMap>>;

    /**
     * Creates a PixelMap array based on image decoding parameters. This method uses a callback to
     * return the array.
     *
     * @param callback Callback used to return the PixelMap array.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 10
     */
    createPixelMapList(callback: AsyncCallback<Array<PixelMap>>): void;

    /**
     * Creates a PixelMap array based on image decoding parameters. This method uses a callback to
     * return the array.
     *
     * @param options Image decoding parameters.
     * @param callback Callback used to return the PixelMap array.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 10
     */
    createPixelMapList(options: DecodingOptions, callback: AsyncCallback<Array<PixelMap>>): void;

    /**
     * Obtains the array of delay time in an image. This method uses a promise to return the array.
     *
     * @returns A Promise instance used to return the array.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 10
     */
    getDelayTime(): Promise<Array<number>>;

    /**
     * Obtains the array of delay time in an image. This method uses a callback to to return the array.
     *
     * @param callback Callback used to return the array.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 10
     */
    getDelayTime(callback: AsyncCallback<Array<number>>): void;

    /**
     * Obtains the count of frame in an image. This method uses a promise to return the number.
     *
     * @returns A Promise instance used to return the number.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 10
     */
    getFrameCount(): Promise<number>;

    /**
     * Obtains the count of frame in an image. This method uses a callback to to return the number.
     *
     * @param callback Callback used to return the number.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 10
     */
    getFrameCount(callback: AsyncCallback<number>): void;

    /**
     * Obtains the value of a property in an image with the specified index. This method uses a
     * promise to return the property value in a string.
     *
     * @param key Name of the property whose value is to be obtained.
     * @param options Index of the image.
     * @returns A Promise instance used to return the property value. If the operation fails, the default value is returned.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    getImageProperty(key: string, options?: GetImagePropertyOptions): Promise<string>;

    /**
     * Obtains the value of a property in this image. This method uses a callback to return the
     * property value in a string.
     *
     * @param key Name of the property whose value is to be obtained.
     * @param callback Callback used to return the property value. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    getImageProperty(key: string, callback: AsyncCallback<string>): void;

    /**
     * Obtains the value of a property in an image with the specified index. This method uses
     * a callback to return the property value in a string.
     *
     * @param key Name of the property whose value is to be obtained.
     * @param options Index of the image.
     * @param callback Callback used to return the property value. If the operation fails, the default value is returned.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    getImageProperty(key: string, options: GetImagePropertyOptions, callback: AsyncCallback<string>): void;

    /**
     * Modify the value of a property in an image with the specified key. This method uses a
     * promise to return the property value in a string.
     *
     * @param key Name of the property whose value is to be modified.
     * @param value The value to be set to property.
     * @returns A Promise instance used to return the property value.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 9
     */
    modifyImageProperty(key: string, value: string): Promise<void>;

    /**
     * Modify the value of a property in an image with the specified key. This method uses a callback to return the
     * property value in a string.
     *
     * @param key Name of the property whose value is to be obtained.
     * @param value The value to be set to property.
     * @param callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 9
     */
    modifyImageProperty(key: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * Update the data in the incremental ImageSource.
     *
     * @param buf The data to be updated.
     * @param isFinished If is it finished.
     * @param value The offset of data.
     * @param length The length fo buf.
     * @returns A Promise instance used to return the property value.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 9
     */
    updateData(buf: ArrayBuffer, isFinished: boolean, value: number, length: number): Promise<void>;

    /**
     * Update the data in the incremental ImageSource.
     *
     * @param buf The data to be updated.
     * @param isFinished If is it finished.
     * @param value The offset of data.
     * @param length The length fo buf.
     * @param callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 9
     */
    updateData(
      buf: ArrayBuffer,
      isFinished: boolean,
      value: number,
      length: number,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Releases an ImageSource instance and uses a callback to return the result.
     *
     * @param callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases an ImageSource instance and uses a promise to return the result.
     *
     * @returns A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    release(): Promise<void>;

    /**
     * Supported image formats.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    readonly supportedFormats: Array<string>;
  }

  /**
   * ImagePacker instance.
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @since 6
   */
  interface ImagePacker {
    /**
     * Compresses or packs an image and uses a callback to return the result.
     *
     * @param source Image to be processed.
     * @param option Option for image packing.
     * @param callback Callback used to return the packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    packing(source: ImageSource, option: PackingOption, callback: AsyncCallback<ArrayBuffer>): void;

    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param source Image to be processed.
     * @param option Option for image packing.
     * @returns A Promise instance used to return the compressed or packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    packing(source: ImageSource, option: PackingOption): Promise<ArrayBuffer>;

    /**
     * Compresses or packs an image and uses a callback to return the result.
     *
     * @param source PixelMap to be processed.
     * @param option Option for image packing.
     * @param callback Callback used to return the packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 8
     */
    packing(source: PixelMap, option: PackingOption, callback: AsyncCallback<ArrayBuffer>): void;

    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param source PixelMap to be processed.
     * @param option Option for image packing.
     * @returns A Promise instance used to return the compressed or packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 8
     */
    packing(source: PixelMap, option: PackingOption): Promise<ArrayBuffer>;

    /**
     * Releases an ImagePacker instance and uses a callback to return the result.
     *
     * @param callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases an ImagePacker instance and uses a promise to return the result.
     *
     * @returns A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    release(): Promise<void>;

    /**
     * Supported image formats.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    readonly supportedFormats: Array<string>;
  }

  /**
   * Provides basic image operations, including obtaining image information, and reading and writing image data.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  interface Image {
    /**
     * Sets or gets the image area to crop, default is size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    clipRect: Region;

    /**
     * Image size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly size: Size;

    /**
     * Image format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    readonly format: number;

    /**
     * Get component buffer from image and uses a callback to return the result.
     *
     * @param componentType The component type of image.
     * @param callback Callback used to return the component buffer.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    getComponent(componentType: ComponentType, callback: AsyncCallback<Component>): void;

    /**
     * Get component buffer from image and uses a promise to return the result.
     *
     * @param componentType The component type of image.
     * @returns A Promise instance used to return the component buffer.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    getComponent(componentType: ComponentType): Promise<Component>;

    /**
     * Release current image to receive another and uses a callback to return the result.
     *
     * @param callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release current image to receive another and uses a promise to return the result.
     *
     * @returns A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    release(): Promise<void>;
  }

  /**
   * Image receiver object.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9
   */
  interface ImageReceiver {
    /**
     * Image size.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readonly size: Size;

    /**
     * Image capacity.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readonly capacity: number;

    /**
     * Image format.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readonly format: ImageFormat;

    /**
     * Get an id which indicates a surface and can be used to set to Camera or other component can receive a surface
     * and uses a callback to return the result.
     *
     * @param callback Callback used to return the surface id.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    getReceivingSurfaceId(callback: AsyncCallback<string>): void;

    /**
     * Get an id which indicates a surface and can be used to set to Camera or other component can receive a surface
     * and uses a promise to return the result.
     *
     * @returns A Promise instance used to return the surface id.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    getReceivingSurfaceId(): Promise<string>;

    /**
     * Get lasted image from receiver and uses a callback to return the result.
     *
     * @param callback Callback used to return the latest image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readLatestImage(callback: AsyncCallback<Image>): void;

    /**
     * Get lasted image from receiver and uses a promise to return the result.
     *
     * @returns A Promise instance used to return the latest image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readLatestImage(): Promise<Image>;

    /**
     * Get next image from receiver and uses a callback to return the result.
     *
     * @param callback Callback used to return the next image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readNextImage(callback: AsyncCallback<Image>): void;

    /**
     * Get next image from receiver and uses a promise to return the result.
     *
     * @returns A Promise instance used to return the next image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    readNextImage(): Promise<Image>;

    /**
     * Subscribe callback when receiving an image
     *
     * @param type Callback used to return the next image.
     * @param callback Callback used to return image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    on(type: 'imageArrival', callback: AsyncCallback<void>): void;

    /**
     * Release image receiver instance and uses a callback to return the result.
     *
     * @param callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release image receiver instance and uses a promise to return the result.
     *
     * @returns A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9
     */
    release(): Promise<void>;
  }

  /**
   * Image creator object.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageCreator
   * @since 9
   */
  interface ImageCreator {
    /**
     * Image capacity.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9
     */
    readonly capacity: number;

    /**
     * Image format.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9
     */
    readonly format: ImageFormat;

    /**
     * Apply for new graphic buffer from free queue and use a callback to return the result.
     *
     * @param callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9
     */
    dequeueImage(callback: AsyncCallback<Image>): void;

    /**
     * Apply for new graphic buffer from free queue and uses a promise to return the result.
     *
     * @returns A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9
     */
    dequeueImage(): Promise<Image>;

    /**
     * Queue buffer to dirty queue and uses a callback to return the result.
     *
     * @param callback Callback to return the operation result.
     * @param { AsyncCallback<void> } callback
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9
     */
    queueImage(interface: Image, callback: AsyncCallback<void>): void;

    /**
     * Queue buffer to dirty queue and uses a promise to return the result.
     *
     * @param { Image } interface
     * @returns A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9
     */
    queueImage(interface: Image): Promise<void>;

    /**
     * Subscribe callback when releasing buffer
     *
     * @param type Callback used to return the operation result.
     * @param callback Callback used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9
     */
    on(type: 'imageRelease', callback: AsyncCallback<void>): void;

    /**
     * Releases buffer in bufferqueue instance and uses a callback to return the result.
     *
     * @param callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases buffer in bufferqueue instance and uses a promise to return the result.
     *
     * @returns A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9
     */
    release(): Promise<void>;
  }
}

export default image;
