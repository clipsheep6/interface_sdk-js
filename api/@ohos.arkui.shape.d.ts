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

/// <reference path="../component/units.d.ts" />

/**
 * Interface for shape size properties.
 *
 * @interface ShapeSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
interface ShapeSize {
  /**
   * Defines the width of Shape.
   * @type { ? (number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  width?: number | string;

  /**
   * Defines the height of Shape.
   * @type { ? (number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  height?: number | string;
}

/**
 * Interface for RectShape constructor parameters.
 *
 * @interface RectShapeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
interface RectShapeOptions extends ShapeSize {
  /**
   * Defines the corner radius of the RectShape.
   * @type { ? (number | string | Array<number | string>) } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  radius?: number | string | Array<number | string>;
}

/**
 * Interface for RectShape constructor parameters with separate radius values.
 *
 * @interface RoundRectShapeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
interface RoundRectShapeOptions extends ShapeSize {
  /**
   * Defines the width of the corner radius for RectShape.
   * @type { ? (number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  radiusWidth?: number | string;

  /**
   * Defines the height of the corner radius for RectShape.
   * @type { ? (number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  radiusHeight?: number | string;
}

/**
 * Interface for PathShape constructor parameters.
 *
 * @interface PathShapeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
interface PathShapeOptions extends ShapeSize {
  /**
   * Defines the commands for drawing the PathShape.
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   * @form
   */
  commands?: string;
}

/**
 * Common shape method class
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare class CommonShapeMethod<T> {
  /**
   * Sets coordinate offset relative to the layout completion position.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  offset(value: Position): T;

  /**
   * Sets the fill color of the shape.
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  fill(value: ResourceColor): T;

  /**
   * Sets the position of the shape.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  position(value: Position): T;
}

/**
 * Base shape class
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
declare class BaseShape<T> extends CommonShapeMethod<T> {
  /**
   * Sets the width of the shape.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  width(value: Length): T;

  /**
   * Sets the height of the shape.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  height(value: Length): T;

  /**
   * Sets the size of the shape.
   *
   * @param { SizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  size(value: SizeOptions): T;
}

/**
 * Defines a rect drawing class.
 * 
 * @extends BaseShape<RectShape>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
export declare class RectShape extends BaseShape<RectShape> {
  /**
   * Constructor.
   *
   * @param { RectShapeOptions | RoundRectShapeOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  constructor(options?: RectShapeOptions | RoundRectShapeOptions);

  /**
   * Sets the width of the corner radius for RectShape.
   *
   * @param { number | string } value
   * @returns { RectShape }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  radiusWidth(value: number | string): RectShape;

  /**
   * Sets the height of the corner radius for RectShape.
   *
   * @param { number | string } value
   * @returns { RectShape }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  radiusHeight(value: number | string): RectShape;

  /**
   * Sets the corner radius for RectShape.
   *
   * @param { number | string | Array<number | string> } value
   * @returns { RectShape }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  radius(value: number | string | Array<number | string>): RectShape;
}

/**
 * Defines a circle drawing class.
 * 
 * @extends BaseShape<CircleShape>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
export declare class CircleShape extends BaseShape<CircleShape> {
  /**
   * Constructor.
   *
   * @param { ShapeSize } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  constructor(options?: ShapeSize);
}

/**
 * Defines an ellipse drawing class.
 * 
 * @extends BaseShape<EllipseShape>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
export declare class EllipseShape extends BaseShape<EllipseShape> {
  /**
   * Constructor.
   *
   * @param { ShapeSize } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  constructor(options?: ShapeSize);
}

/**
 * Defines a path drawing class.
 * 
 * @extends CommonShapeMethod<PathShape>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 * @form
 */
export declare class PathShape extends CommonShapeMethod<PathShape> {
  /**
   * Constructor.
   *
   * @param { PathShapeOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  constructor(options?: PathShapeOptions);

  /**
   * Sets the commands for drawing the PathShape.
   *
   * @param { string } value
   * @returns { PathShape }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  commands(value: string): PathShape;
}