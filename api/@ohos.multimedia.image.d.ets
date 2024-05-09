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

  type ISendable = lang.ISendable;

  /**
   * PixelMap instance.
   *
   * @typedef PixelMap
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  interface SendablePixelMap extends ISendable {
    /**
     * Whether the image pixel map can be edited.
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
     * Reads image pixel map data and writes the data to an ArrayBuffer. This method uses
     * a promise to return the result.
     *
     * @param { ArrayBuffer } dst A buffer to which the image pixel map data will be written.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readPixelsToBuffer(dst: ArrayBuffer): Promise<void>;

    /**
     * Reads image pixel map data and writes the data to an ArrayBuffer. This method uses
     * a callback to return the result.
     *
     * @param { ArrayBuffer } dst A buffer to which the image pixel map data will be written.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readPixelsToBuffer(dst: ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * Reads image pixel map data and writes the data to an ArrayBuffer.
     *
     * @param { ArrayBuffer } dst A buffer to which the image pixel map data will be written.
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
     * Reads image pixel map data in an area. This method uses a promise to return the data read.
     *
     * @param { PositionArea } area Area from which the image pixel map data will be read.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readPixels(area: image.PositionArea): Promise<void>;

    /**
     * Reads image pixel map data in an area. This method uses a callback to return the data read.
     *
     * @param { PositionArea } area Area from which the image pixel map data will be read.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    readPixels(area: image.PositionArea, callback: AsyncCallback<void>): void;

    /**
     * Reads image pixel map data in an area.
     *
     * @param { PositionArea } area Area from which the image pixel map data will be read.
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
     * Writes image pixel map data to the specified area. This method uses a promise to return
     * the operation result.
     *
     * @param { PositionArea } area Area to which the image pixel map data will be written.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    writePixels(area: image.PositionArea): Promise<void>;

    /**
     * Writes image pixel map data to the specified area. This method uses a callback to return
     * the operation result.
     *
     * @param { PositionArea } area Area to which the image pixel map data will be written.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    writePixels(area: image.PositionArea, callback: AsyncCallback<void>): void;

    /**
     * Writes image pixel map data to the specified area.
     *
     * @param { PositionArea } area Area to which the image pixel map data will be written.
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
     * Reads image data in an ArrayBuffer and writes the data to a PixelMap object. This method
     * uses a promise to return the result.
     *
     * @param { ArrayBuffer } src A buffer from which the image data will be read.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    writeBufferToPixels(src: ArrayBuffer): Promise<void>;

    /**
     * Reads image data in an ArrayBuffer and writes the data to a PixelMap object. This method
     * uses a callback to return the result.
     *
     * @param { ArrayBuffer } src A buffer from which the image data will be read.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    writeBufferToPixels(src: ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * Reads image data in an ArrayBuffer and writes the data to a PixelMap object.
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
     * Obtains pixel map information about this image. This method uses a promise to return the information.
     *
     * @returns { Promise<ImageInfo> } A Promise instance used to return the image pixel map information. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    getImageInfo(): Promise<image.ImageInfo>;

    /**
     * Obtains pixel map information about this image. This method uses a callback to return the information.
     *
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image pixel map information.
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
     * Obtains the number of bytes in each line of the image pixel map.
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
     * Obtains the total number of bytes of the image pixel map.
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
     * Obtains the density of the image pixel map.
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
     * Set the transparent rate of pixel map. This method uses a callback to return the operation result.
     *
     * @param { number } rate The value of transparent rate.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    opacity(rate: number, callback: AsyncCallback<void>): void;

    /**
     * Set the transparent rate of pixel map. This method uses a promise to return the result.
     *
     * @param { number } rate The value of transparent rate.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    opacity(rate: number): Promise<void>;

    /**
     * Set the transparent rate of pixel map.
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
     * Obtains new pixel map with alpha information. This method uses a promise to return the information.
     *
     * @returns { Promise<PixelMap> } A Promise instance used to return the new image pixel map. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    createAlphaPixelmap(): Promise<SendablePixelMap>;

    /**
     * Obtains new pixel map with alpha information. This method uses a callback to return the information.
     *
     * @param { AsyncCallback<PixelMap> } callback Callback used to return the new image pixel map. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    createAlphaPixelmap(callback: AsyncCallback<SendablePixelMap>): void;

    /**
     * Obtains new pixel map with alpha information.
     *
     * @returns { PixelMap } return the new image pixel map. If the operation fails, an error message is returned.
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
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
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
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
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
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
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
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
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
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
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
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
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
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
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
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
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
     * @param { AsyncCallback<void> } callback Callback used to return the operation result. If the operation fails, an error message is returned.
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
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
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
     * Get color space of pixel map.
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
     * Marshalling pixelmap and write into MessageSequence.
     *
     * @param { rpc.MessageSequence } sequence rpc.MessageSequence parameter.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    marshalling(sequence: rpc.MessageSequence): void;

    /**
     * Creates a PixelMap object based on MessageSequence parameter.
     *
     * @param { rpc.MessageSequence } sequence rpc.MessageSequence parameter.
     * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error.
     * @throws { BusinessError } 62980096 - The operation failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    unmarshalling(sequence: rpc.MessageSequence): Promise<SendablePixelMap>;

    /**
     * Set color space of pixel map.
     * 
     * This method is only used to set the colorspace property of pixelmap, while all pixel data remains the same after calling this method.
     * If you want to change colorspace for all pixels, use method {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager)} or
     * {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager, AsyncCallback<void>)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } colorSpace The color space for pixel map.
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
     * Apply color space of pixel map, the pixels will be changed by input color space. This method uses a callback to return the operation result.
     * 
     * This method is used to change color space of pixelmap. Pixel data will be changed by calling this method.
     * If you want to set the colorspace property of pixelmap only, use method {@Link #setColorSpace(colorSpaceManager.ColorSpaceManager)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } targetColorSpace - The color space for pixel map.
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
     * Apply color space of pixel map, the pixels will be changed by input color space. This method uses a promise to return the result.
     * 
     * This method is used to change color space of pixelmap. Pixel data will be changed by calling this method.
     * If you want to set the colorspace property of pixelmap only, use method {@Link #setColorSpace(colorSpaceManager.ColorSpaceManager)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } targetColorSpace - The color space for pixel map.
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
     * Releases this PixelMap object. This method uses a callback to return the result.
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
     * Releases this PixelMap object. This method uses a promise to return the result.
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
}

export default SendableImage;