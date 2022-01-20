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
 * Provides interfaces for drawing components.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ShapeInterface {
  /**
   * Use the new function to create Shape.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  new (value?: PixelMap): ShapeAttribute;

  /**
   * Called when a component is drawn.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: PixelMap): ShapeAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class ShapeAttribute extends CommonMethod<ShapeAttribute> {
  /**
   * Viewport of shape
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  viewPort(value: { x?: number | string; y?: number | string; width?: number | string; height?: number | string }): ShapeAttribute;

  /**
   * Called when the border color is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  stroke(value: ResourceColor): ShapeAttribute;

  /**
   * Called when the fill color is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fill(value: ResourceColor): ShapeAttribute;

  /**
   * Called when the offset of the starting point of border drawing is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeDashOffset(value: number | string): ShapeAttribute;

  /**
   * Called when the gap of the border is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeDashArray(value: Array<any>): ShapeAttribute;

  /**
   * Called when the path endpoint drawing style is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeLineCap(value: LineCapStyle): ShapeAttribute;

  /**
   * Called when the border corner drawing style is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeLineJoin(value: LineJoinStyle): ShapeAttribute;

  /**
   * Called when the limit value for drawing acute angles as oblique angles is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeMiterLimit(value: number | string): ShapeAttribute;

  /**
   * Called when the opacity of the border is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeOpacity(value: number | string | Resource): ShapeAttribute;

  /**
   * Called when the transparency of the border is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  fillOpacity(value: number | string | Resource): ShapeAttribute;

  /**
   * Called when the width of the border is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  strokeWidth(value: number | string): ShapeAttribute;

  /**
   * Called when setting whether anti aliasing is on.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  antiAlias(value: boolean): ShapeAttribute;
}

declare const Shape: ShapeInterface;
declare const ShapeInstance: ShapeAttribute;
