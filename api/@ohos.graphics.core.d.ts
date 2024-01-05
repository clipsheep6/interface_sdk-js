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
 * GraphicsBase.
 *
 * @namespace GraphicsBase
 * @syscap SystemCapability.Graphics.Core
 * @since 11
 */
declare namespace GraphicsCore {
  /**
   * Provide a description in the form of color ARGB.
   * 
   * @interface Color
   * @syscap SystemCapability.Graphics.Core
   * @since 11
   */
  interface Color {
    /**
     * Alpha component of color, from 0 to 255.
     * 
     * @syscap SystemCapability.Graphics.Core
     * @since 11
     */
    alpha: number;

    /**
     * Red component of color, from 0 to 255.
     * 
     * @syscap SystemCapability.Graphics.Core
     * @since 11
     */
    red: number;

    /**
     * Green component of color, from 0 to 255.
     * 
     * @syscap SystemCapability.Graphics.Core
     * @since 11
     */
    green: number;

    /**
     * Blue component of color, from 0 to 255.
     * 
     * @syscap SystemCapability.Graphics.Core
     * @since 11
     */
    blue: number;
  }

  /**
   * Provides the definition of the rectangle.
   * 
   * @interface Rect
   * @syscap SystemCapability.Graphics.Core
   * @since 11
   */
  interface Rect {
    /**
     * Left Position of Rectangle.
     * 
     * @syscap SystemCapability.Graphics.Core
     * @since 11
     */
    left: number;

    /**
     * Top side position of the rectangle
     * 
     * @syscap SystemCapability.Graphics.Core
     * @since 11
     */
    top: number;

    /**
     * Right Position of Rectangle.
     * 
     * @syscap SystemCapability.Graphics.Core
     * @since 11
     */
    right: number;

    /**
     * Position of the bottom side of the rectangle.
     * 
     * @syscap SystemCapability.Graphics.Core
     * @since 11
     */
    bottom: number;
  }
}

export default GraphicsBase;