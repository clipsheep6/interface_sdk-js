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
 * Defines the basic callback.
 * @typedef Callback
 * @syscap SystemCapability.Base
 * @since 6
 */
/**
 * Defines the basic callback.
 * @typedef Callback
 * @syscap SystemCapability.Base
 * @crossplatform
 * @since 10
 */
/**
 * Defines the basic callback.
 * @typedef Callback
 * @syscap SystemCapability.Base
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface Callback<T> {
  /**
   * Defines the callback info.
   * @param { T } data
   * @syscap SystemCapability.Base
   * @since 6
   */
  /**
   * Defines the callback info.
   * @param { T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the callback info.
   * @param { T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (data: T): void;
}

/**
 * Defines the basic error callback.
 * @typedef ErrorCallback 
 * @syscap SystemCapability.Base
 * @since 6
 */
/**
 * Defines the basic error callback.
 * @typedef ErrorCallback
 * @syscap SystemCapability.Base
 * @crossplatform
 * @since 10
 */
/**
 * Defines the basic error callback.
 * @typedef ErrorCallback
 * @syscap SystemCapability.Base
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface ErrorCallback<T extends Error = BusinessError> {
  /**
   * Defines the basic error callback.
   * @param { T } err
   * @syscap SystemCapability.Base
   * @since 6
   */
  /**
   * Defines the basic error callback.
   * @param { T } err
   * @syscap SystemCapability.Base
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the basic error callback.
   * @param { T } err
   * @syscap SystemCapability.Base
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (err: T): void;
}

/**
 * Defines the basic async callback.
 * @typedef AsyncCallback
 * @syscap SystemCapability.Base
 * @since 6
 */
/**
 * Defines the basic async callback.
 * @typedef AsyncCallback
 * @syscap SystemCapability.Base
 * @crossplatform
 * @since 10
 */
/**
 * Defines the basic async callback.
 * @typedef AsyncCallback
 * @syscap SystemCapability.Base
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface AsyncCallback<T, E = void> {
  /**
   * Defines the callback data.
   * @param { BusinessError<E> } err
   * @param { T } data
   * @syscap SystemCapability.Base
   * @since 6
   */
  /**
   * Defines the callback data.
   * @param { BusinessError<E> } err
   * @param { T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the callback data.
   * @param { BusinessError<E> } err
   * @param { T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (err: BusinessError<E>, data: T): void;
}

/**
 * Defines the error interface.
 * @typedef BusinessError
 * @syscap SystemCapability.Base
 * @since 6
 */
/**
 * Defines the error interface.
 * @typedef BusinessError
 * @syscap SystemCapability.Base
 * @crossplatform
 * @since 10
 */
/**
 * Defines the error interface.
 * @typedef BusinessError
 * @syscap SystemCapability.Base
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface BusinessError<T = void> extends Error {
  /**
   * Defines the basic error code.
   * @type { number } code
   * @syscap SystemCapability.Base
   * @since 6
   */
  /**
   * Defines the basic error code.
   * @type { number } code
   * @syscap SystemCapability.Base
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the basic error code.
   * @type { number } code
   * @syscap SystemCapability.Base
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  code: number;
  /**
   * Defines the additional information for business
   * @type { ?T } data
   * @syscap SystemCapability.Base
   * @since 9
   */
  /**
   * Defines the additional information for business
   * @type { ?T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the additional information for business
   * @type { ?T } data
   * @syscap SystemCapability.Base
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  data?: T;
}

 /**
  * Defines the basic size interface.
  * @interface Size
  * @syscap SystemCapability.Base
  * @atomicservice
  * @since 11
  */
 export interface Size {
  /**
  * Defines the width property.
  * @type { number }
  * @syscap SystemCapability.Base
  * @atomicservice
  * @since 11
  */
  width: number
  /**
  * Defines the height property.
  * @type { number }
  * @syscap SystemCapability.Base
  * @atomicservice
  * @since 11
  */
  height: number
}

 /**
  * Defines the basic range interface.
  * @interface Range
  * @syscap SystemCapability.Base
  * @atomicservice
  * @since 11
  */
export interface Range {
  /**
   * Indicates the index of the first character of the selected text.
   *
   * @type { number }
   * @syscap SystemCapability.Base
   * @atomicservice
   * @since 11
   */
  start: number;
  /**
   * Indicates the index of the last character of the selected text.
   *
   * @type { number }
   * @syscap SystemCapability.Base
   * @atomicservice
   * @since 11
   */
  end: number;
  /**
   * A Boolean value that indicates whether the range of text represented by the receiver is zero-length.
   *
   * @type { boolean }
   * @syscap SystemCapability.Base
   * @atomicservice
   * @since 11
   */
  isEmpty: boolean;
}

/**
 * Defines the basic rectangle interface.
 *
 * @interface Rect
 * @syscap SystemCapability.Base
 * @since 11
 */
export interface Rect {
  /**
   * The X-axis coordinate of the upper left vertex of the rectangle, in pixels.
   * @type { number }
   * @syscap SystemCapability.Base
   * @since 11
   */
  left: number;
  /**
   * The Y-axis coordinate of the upper left vertex of the rectangle, in pixels.
   * @type { number }
   * @syscap SystemCapability.Base
   * @since 11
   */
  top: number;
  /**
   * Width of the rectangle, in pixels.
   * @type { number }
   * @syscap SystemCapability.Base
   * @since 11
   */
  width: number;
  /**
   * Height of the rectangle, in pixels.
   * @type { number }
   * @syscap SystemCapability.Base
   * @since 11
   */
  height: number;
}

/**
 * Defines the basic Point interface.
 *
 * @interface Point
 * @syscap SystemCapability.Base
 * @since 11
 */
export interface Point {
  /**
   * x co-ordinate
   *
   * @type { number }
   * @syscap SystemCapability.Base
   * @since 11
   */
  x: number;
  /**
   * y co-ordinate
   *
   * @type { number }
   * @syscap SystemCapability.Base
   * @since 11
   */
  y: number;
}