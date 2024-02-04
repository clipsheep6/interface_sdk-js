/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * SendableSet is a sendable object which extends Set
 * 
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 11
 */
declare class SendableSet<T> {
  /**
   * A constructor used to create a SendableSet object.
   *
   * @param { readonly T[] | null } - values
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  constructor(values?: readonly T[] | null);
  /**
   * Returns an iterable of entries in the set.
   *
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  [Symbol.iterator](): IterableIterator<T>;
  /**
   * Returns an iterable of [v,v] pairs for every value `v` in the set.
   *
   * @returns { IterableIterator<[T, T]> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * Returns an iterable of the values in the set.
   *
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  keys(): IterableIterator<T>;
  /**
   * Returns an iterable of values in the set.
   *
   * @returns { IterableIterator<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  values(): IterableIterator<T>;
  /**
   * Appends a new element with a specified value to the end of the Set.
   *
   * @param { T } - value
   * @returns { SendableSet<T> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  add(value: T): SendableSet<T>;
  /**
   * Clears the set.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  clear(): void;
  /**
   * Deletes a specified value from the Set.
   *
   * @param { T } - value
   * @returns { boolean } the boolean type
   * true if an element in the Set existed and has been removed,
   * or false if the element does not exist.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  delete(value: T): boolean;
  /**
   * Executes a provided function once per each key/value pair in the Set, in insertion order.
   *
   * @param { function } callbackFn - callbackFn
   * callbackFn (required) A function that accepts up to three arguments.
   * The function to be called for each element.
   * @param { Object } [thisArg] - thisArg
   * thisArg (Optional) The value to be used as this value for when callbackFn is called.
   * If thisArg is omitted, undefined is used as the this value.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  forEach(callbackfn: (value: T, value2: T, set: SendableSet<T>) => void, thisArg?: Object): void;
  /**
   * Checks the existence of an element with the specified key.
   *
   * @param { T } - value
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  has(value: T): boolean;
  /**
   * Gets the number of elements in the Set.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  readonly size: number;
}
