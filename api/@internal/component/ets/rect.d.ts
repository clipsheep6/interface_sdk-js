/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/*** if arkts 1.2 */
import { CommonShapeMethod } from './common';
import { Length } from './units';
/*** endif */

/**
 * Defines the RadiusItem, the first element is the width of the rounded corner, the second is the height of the rounded corner.
 * 
 * @typedef { [Length, Length] } RadiusItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type RadiusItem = [Length, Length];

/**
 * Define options used to construct a rectangle.
 *
 * @interface RectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RectOptions {
  /**
   * Rectangle width.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Rectangle width.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Rectangle width.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Rectangle width.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Rectangle width.
   * Anonymous Object Rectification.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Rectangle width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  width?: Length;

  /**
   * Rectangle height.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Rectangle height.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Rectangle height.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Rectangle height.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Rectangle height.
   * Anonymous Object Rectification.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Rectangle height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  height?: Length;

  /**
   * Corner radius of the rectangle.
   *
   * @type { ?(number | string | Array<any>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Corner radius of the rectangle.
   *
   * @type { ?(number | string | Array<any>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Corner radius of the rectangle.
   *
   * @type { ?(number | string | Array<any>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Corner radius of the rectangle.
   *
   * @type { ?(number | string | Array<any>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Corner radius of the rectangle.
   * Anonymous Object Rectification.
   *
   * @type { ?(number | string | Array<any>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Corner radius of the rectangle.
   *
   * @type { ?(Length | Array<any>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  radius?: Length | Array<any>;
  
  /**
   * Corner radius of the rectangle.
   *
   * @type { ?(Length | Array<RadiusItem>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  radius?: Length | Array<RadiusItem>;
}

/**
 * Define options used to construct a rectangle with rounded corners.
 *
 * @interface RoundedRectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface RoundedRectOptions {
  /**
   * Rectangle width.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Rectangle width.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Rectangle width.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Rectangle width.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Rectangle width.
   * Anonymous Object Rectification.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Rectangle width.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  width?: Length;

  /**
   * Rectangle height.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Rectangle height.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Rectangle height.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Rectangle height.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Rectangle height.
   * Anonymous Object Rectification.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Rectangle height.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  height?: Length;

  /**
   * Width of the corner radius.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Width of the corner radius.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Width of the corner radius.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Width of the corner radius.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Width of the corner radius.
   * Anonymous Object Rectification.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Width of the corner radius.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  radiusWidth?: Length;

  /**
   * Height of the corner radius.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Height of the corner radius.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Height of the corner radius.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Height of the corner radius.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Height of the corner radius.
   * Anonymous Object Rectification.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Height of the corner radius.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  radiusHeight?: Length;
}

/**
 * Provides an interface for drawing rectangles.
 *
 * @interface RectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for drawing rectangles.
 *
 * @interface RectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides an interface for drawing rectangles.
 *
 * @interface RectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for drawing rectangles.
 *
 * @interface RectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface RectInterface {
  /**
   * Use new function to create Rect.
   *
   * @param { object } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Use new function to create Rect.
   *
   * @param { object } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Use new function to create Rect.
   *
   * @param { object } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Use new function to create Rect.
   *
   * @param { object } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Use new function to create Rect.
   * Anonymous Object Rectification.
   *
   * @param { RectOptions | RoundedRectOptions } [options] - Rect options
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  new (
    options?: RectOptions | RoundedRectOptions,
  ): RectAttribute;

  /**
   * Called when a rectangle is created.
   *
   * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
  *  {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;} } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a rectangle is created.
   *
   * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
  *  {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;} } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when a rectangle is created.
   *
   * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
   *  {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;} } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when a rectangle is created.
   *
   * @param { {width?: number | string;height?: number | string;radius?: number | string | Array<any>;} |
   *  {width?: number | string;height?: number | string;radiusWidth?: number | string;radiusHeight?: number | string;} } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when a rectangle is created.
   * Anonymous Object Rectification.
   *
   * @param { RectOptions | RoundedRectOptions } [options] - Rect options
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  (
    options?: RectOptions | RoundedRectOptions,
  ): RectAttribute;
}

/**
 * rect attribute declaration.
 *
 * @extends CommonShapeMethod<RectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * rect attribute declaration.
 *
 * @extends CommonShapeMethod<RectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * rect attribute declaration.
 *
 * @extends CommonShapeMethod<RectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * rect attribute declaration.
 *
 * @extends CommonShapeMethod<RectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class RectAttribute extends CommonShapeMethod<RectAttribute> {
  /**
   * Called when the fillet width is set.
   *
   * @param { number | string } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the fillet width is set.
   *
   * @param { number | string } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the fillet width is set.
   *
   * @param { number | string } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the fillet width is set.
   *
   * @param { number | string } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the fillet width is set.
   *
   * @param { Length } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  radiusWidth(value: Length): RectAttribute;

  /**
   * Called when the fillet height is set.
   *
   * @param { number | string } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the fillet height is set.
   *
   * @param { number | string } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the fillet height is set.
   *
   * @param { number | string } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the fillet height is set.
   *
   * @param { number | string } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the fillet height is set.
   *
   * @param { Length } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  radiusHeight(value: Length): RectAttribute;

  /**
   * Called when the fillet size is set.
   *
   * @param { number | string | Array<any> } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the fillet size is set.
   *
   * @param { number | string | Array<any> } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the fillet size is set.
   *
   * @param { number | string | Array<any> } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the fillet size is set.
   *
   * @param { number | string | Array<any> } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the fillet size is set.
   *
   * @param { Length | Array<any> } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  radius(value: Length | Array<any>): RectAttribute;

  /**
   * Called when the fillet size is set.
   *
   * @param { number | string | Array<number | string> } value
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  radius(value: number | string | Array<number | string>): RectAttribute;
}

/**
 * Defines Rect Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Rect Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Rect Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Rect: RectInterface;

/**
 * Rect attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 * @deprecated since 9
 */
declare const RectInStance: RectAttribute;

/**
 * Rect attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const RectInstance: RectAttribute;

/**
 * Provides an interface for drawing rectangles.
 *
 * @interface RectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface RectInterface {
  /**
   * Called when a rectangle is created.
   *
   * @param { RectOptions | RoundedRectOptions } [options] - Rect options
   * @returns { RectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  (
    options?: RectOptions | RoundedRectOptions,
  ): RectAttribute;
}