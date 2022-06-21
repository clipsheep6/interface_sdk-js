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
 * @import  effectKit from '@ohos.effectkit';
 */
declare namespace effectKit {

  /**
   * The Filter of FilterChain.
   * @since 8
   * @syscap SystemCapability.Effectkit.Core
   */
  interface Filter {

    /**
    * A blur effect is added to the image.
    * @since 8
    * @syscap SystemCapability.Effectkit.Filter.
    * @param radius  The blur effect is proportional to the value.
    * @return Filters for the current effect have been added.
    */
    blur(radius:number): Filter;

    /**
    * A Brightness effect is added to the image.
    * @since 8
    * @syscap SystemCapability.Effectkit.Filter.
    * @param bright  Degree of light and darkness,the value range is 0 to 1.
    * @return Filters for the current effect have been added.
    */
    brightness(bright:number): Filter;

    /**
    * A Grayscale effect is added to the image.
    * @since 8
    * @syscap SystemCapability.Effectkit.Filter.
    * @return Filters for the current effect have been added.
    */
    grayscale(): Filter;

    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @since 8
    * @syscap SystemCapability.Effectkit.Filter.
    * @return image.PixelMap.
    */
    getPixelMap(): image.PixelMap;
  }

  interface ColorPicker {
    getMainColor(): Promise<Color>;
    getMainColorSync(): Color;
  }

  interface Color {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  }

  /**
   * Create a FilterChain to add multiple effects to an image.
   * @since 8
   * @syscap SystemCapability.Effectkit.FilterChain
   * @param image.PixelMap.
   * @return Returns the head node of FilterChain.
   */
  function createFilterChain(source: image.PixelMap): Filter;

  function createColorPicker(source: image.PixelMap): Promise<ColorPicker>;

  function createColorPicker(source: image.PixelMap, callback: AsyncCallback<ColorPicker>): void;
}

export default  effectKit;