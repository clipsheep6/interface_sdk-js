/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @name  effectKit
 * @since 8
 * @import  effectKit from '@ohos.effectKit';
 */
declare namespace effectKit {

  /**
   * The Filter of FilterChain.
   * @since 8
   * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
   */
  interface Filter {

    /**
    * A blur effect is added to the image.
    * @since 8
    * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
    * @param radius  The blur effect is proportional to the value.
    * @return Filters for the current effect have been added.
    */
    blur(radius:number): Filter;

    /**
    * A Brightness effect is added to the image.
    * @since 8
    * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
    * @param bright  Degree of light and darkness,the value range is 0 to 1.
    * @return Filters for the current effect have been added.
    */
    brightness(bright:number): Filter;

    /**
    * A Grayscale effect is added to the image.
    * @since 8
    * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
    * @return Filters for the current effect have been added.
    */
    grayscale(): Filter;

    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @since 8
    * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
    * @return image.PixelMap.
    */
    getPixelMap(): image.PixelMap;
  }

  /**
   * The color picker of an image.
   * @since 8
   * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
   */
  interface ColorPicker {

    /**
     * get main color of an image
     * @since 8
     * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
     */
    getMainColor(): Promise<Color>;

    /**
     * get main color of an image
     * @since 8
     * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
     */
    getMainColorSync(): Color;
  }

  /**
   * The color param.
   * @since 8
   * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
   */
  interface Color {

    /**
     * Red
     * @since 8
     * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
     */
    red: number;

    /**
     * Green
     * @since 8
     * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
     */
    green: number;

    /**
     * Blue
     * @since 8
     * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
     */
    blue: number;

    /**
     * Alpha
     * @since 8
     * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
     */
    alpha: number;
  }

  /**
   * Create a FilterChain to add multiple effects to an image.
   * @since 8
   * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
   * @param image.PixelMap.
   * @return Returns the head node of FilterChain.
   */
  function createEffect(source: image.PixelMap): Filter;

  /**
   * Create a color picker to get color of an image.
   * @since 8
   * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
   * @param image.PixelMap.
   * @return Returns the ColorPicker.
   */
  function createColorPicker(source: image.PixelMap): Promise<ColorPicker>;

  /**
   * Create a color picker to get color of an image.
   * @since 8
   * @syscap SystemCapability.Graphic.Graphic2D.Effectkit
   * @param image.PixelMap.
   * @return Returns the ColorPicker.
   */
  function createColorPicker(source: image.PixelMap, callback: AsyncCallback<ColorPicker>): void;
}

export default  effectKit;