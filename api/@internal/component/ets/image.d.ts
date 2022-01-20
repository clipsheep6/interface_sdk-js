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

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ImageRenderMode {
  /**
   * Render according to the original image, including colors.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Original,

  /**
   * Render the image as a template image, ignoring the color information of the image.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Template,
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ImageInterpolation {
  /**
   * Do not use interpolated image data.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,

  /**
   * Low usage of interpolated image data.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Low,

  /**
   * Interpolated image data is used moderately.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Medium,

  /**
   * High usage of interpolated image data may affect the speed of image rendering.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  High,
}


/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ImageInterface {
  /**
   * Set src to obtain images.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (src: string | PixelMap | Resource): ImageAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class ImageAttribute extends CommonMethod<ImageAttribute> {
  /**
   * Placeholder displayed on load
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  alt(value: string | Resource): ImageAttribute;

  /**match Text Direction
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  matchTextDirection(value: boolean): ImageAttribute;

  /**
   * Indicates whether the image follows the text direction.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fitOriginalSize(value: boolean): ImageAttribute;

  /**
   * fill Color
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fillColor(value: ResourceColor): ImageAttribute;

  /**
   * Sets the zoom type of an image.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  objectFit(value: ImageFit): ImageAttribute;

  /**
   * Set the repeat style of the picture
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  objectRepeat(value: ImageRepeat): ImageAttribute;

  /**
   * Set the auto style of the picture
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  autoResize(value: boolean): ImageAttribute;

  /**
   * Sets the image rendering mode.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  renderMode(value: ImageRenderMode): ImageAttribute;

  /**
   * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  interpolation(value: ImageInterpolation): ImageAttribute;

  /**
   * Specifies the picture decoding size.
   * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  sourceSize(value: { width: number; height: number }): ImageAttribute;

  /**
   * Sets the synchronous or asynchronous mode for image loading.
   * The default parameter type is bool, and the default value is false.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  syncLoad(value: boolean): ImageAttribute;

  /**
   * This callback is triggered when an image is successfully loaded.
   * The size of the image source that is successfully loaded is returned, in pixels.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onComplete(
    callback: (event?: {
      width: number;
      height: number;
      componentWidth: number;
      componentHeight: number;
      loadingStatus: number;
    }) => void,
  ): ImageAttribute;

  /**
   * This callback is triggered when an exception occurs during image loading.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onError(callback: (event?: { componentWidth: number; componentHeight: number }) => void): ImageAttribute;

  /**
   * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
   * If the svg image is a wireless loop image, this callback is not triggered.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onFinish(event: () => void): ImageAttribute;
}

/**
 * @devices phone, tablet, car
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const Image: ImageInterface;
/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const ImageInstance: ImageAttribute;
