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
 * 2D transformation matrix, supporting rotation, translation, and scaling of the X-axis and Y-axis
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class Matrix2D {
  /**
   * Horizontal Zoom
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  scaleX?: number;

  /**
   * Vertical Tilt
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  rotateY?: number;

  /**
   * Horizontal Tilt
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  rotateX?: number;

  /**
   * Vertical Zoom
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  scaleY?: number;

  /**
   * Horizontal movement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  translateX?: number;

  /**
   * Vertical movement
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  translateY?: number;

  /**
   * Transforms the current 2D matrix back to the identity matrix (i.e., without any rotational
   * translation scaling effect)
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  identity(): Matrix2D;

  /**
   * Transform the current 2D matrix into an inverse matrix (that is, the transformation effect
   * is the opposite effect of the original)
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  invert(): Matrix2D;

  /**
   * The matrix is superimposed in right multiplication mode. When the input parameter is empty,
   * the matrix is superimposed.
   * @param other Matrix to be superimposed
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  multiply(other?: Matrix2D): Matrix2D;

  /**
   * Adds the rotation effect of the X and Y axes to the current matrix.
   * @param rx Rotation effect of the X axis
   * @param ry Rotation effect of the Y-axis
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  rotate(rx?: number, ry?: number): Matrix2D;

  /**
   * Adds the translation effect of the X and Y axes to the current matrix.
   * @param tx X-axis translation effect
   * @param ty Y-axis translation effect
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  translate(tx?: number, ty?: number): Matrix2D;

  /**
   * Adds the scaling effect of the X and Y axes to the current matrix.
   * @param sx X-axis scaling effect
   * @param sy Y-axis scaling effect
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  scale(sx?: number, sy?: number): Matrix2D;

  /**
   * Constructs a 2D change matrix object. The default value is the unit matrix.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor();
}
