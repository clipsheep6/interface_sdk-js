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
 * @syscap SystemCapability.Graphics.Base
 * @since 11
 */
declare namespace GraphicsBase {
  /**
   * Provide a description in the form of color ARGB.
   * 
   * @interface Color
   * @syscap SystemCapability.Graphics.Base
   * @since 11
   */
  interface Color {
    /**
     * Alpha component of color, from 0 to 255.
     * 
     * @syscap SystemCapability.Graphics.Base
     * @since 11
     */
    alpha: number;

    /**
     * Red component of color, from 0 to 255.
     * 
     * @syscap SystemCapability.Graphics.Base
     * @since 11
     */
    red: number;

    /**
     * Green component of color, from 0 to 255.
     * 
     * @syscap SystemCapability.Graphics.Base
     * @since 11
     */
    green: number;

    /**
     * Blue component of color, from 0 to 255.
     * 
     * @syscap SystemCapability.Graphics.Base
     * @since 11
     */
    blue: number;
  }

  /**
   * Provides the definition of the rectangle.
   * 
   * @interface Rect
   * @syscap SystemCapability.Graphics.Base
   * @since 11
   */
  interface Rect {
    /**
     * Left Position of Rectangle.
     * 
     * @syscap SystemCapability.Graphics.Base
     * @since 11
     */
    left: number;

    /**
     * Right Position of Rectangle.
     * 
     * @syscap SystemCapability.Graphics.Base
     * @since 11
     */
    right: number;

    /**
     * Top side position of the rectangle
     * 
     * @syscap SystemCapability.Graphics.Base
     * @since 11
     */
    top: number;

    /**
     * Position of the bottom side of the rectangle.
     * 
     * @syscap SystemCapability.Graphics.Base
     * @since 11
     */
    bottom: number;
  }
}

export default GraphicsBase;