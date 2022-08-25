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
 * @since 9
 */
declare class Matrix2D {
  /**
   * Horizontal Zoom
   * @since 9
   */
  scaleX?: number;

  /**
   * Vertical Tilt
   * @since 9
   */
  rotateY?: number;

  /**
   * Horizontal Tilt
   * @since 9
   */
  rotateX?: number;

  /**
   * Vertical Zoom
   * @since 9
   */
  scaleY?: number;

  /**
   * Horizontal movement
   * @since 9
   */
  translateX?: number;

  /**
   * Vertical movement
   * @since 9
   */
  translateY?: number;
}
