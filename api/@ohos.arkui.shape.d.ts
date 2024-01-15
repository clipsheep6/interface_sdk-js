/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

/**
 * Interface for shape size properties.
 *
 * @interface ShapeSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
interface ShapeSize {
  /**
   * Defines the width of Shape.
   * @type { ? (number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  width?: number | string;

  /**
   * Defines the height of Shape.
   * @type { ? (number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  height?: number | string;
}

/**
 * Interface for RectShape constructor parameters.
 *
 * @interface RectShapeOptions
 * @extends ShapeSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
interface RectShapeOptions extends ShapeSize {
  /**
   * Defines the corner radius of the RectShape.
   * @type { ? (number | string | Array<number | string>) } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  radius?: number | string | Array<number | string>;
}

/**
 * Interface for RectShape constructor parameters with separate radius values.
 *
 * @interface RectShapeRadiusOptions
 * @extends ShapeSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
interface RectShapeRadiusOptions extends ShapeSize {
  /**
   * Defines the width of the corner radius for RectShape.
   * @type { ? (number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  radiusWidth?: number | string;

  /**
   * Defines the height of the corner radius for RectShape.
   * @type { ? (number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  radiusHeight?: number | string;
}

/**
 * Interface for PathShape constructor parameters.
 *
 * @interface PathShapeOptions
 * @extends ShapeSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
interface PathShapeOptions extends ShapeSize {
  /**
   * Defines the commands for drawing the PathShape.
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  commands?: string;
}

/**
 * Defines a rect drawing class.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class RectShape {
  /**
   * Constructor.
   *
   * @param { RectShapeOptions | RectShapeRadiusOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor(options?: RectShapeOptions | RectShapeRadiusOptions);
}

/**
 * Defines a cicle drawing class.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class CircleShape {
  /**
   * Constructor.
   *
   * @param { ShapeSize } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor(options?: ShapeSize);
}

/**
 * Defines a ellipse drawing class.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class EllipseShape {
  /**
   * Constructor.
   *
   * @param { ShapeSize } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor(options?: ShapeSize);
}

/**
 * Defines a path drawing class.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class PathShape {
  /**
   * Constructor.
   *
   * @param { PathShapeOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor(options?: PathShapeOptions);
}