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
    constructor(values?: readonly T[] | null);

  /**
   * Iterates over values in the set.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
    /**  */
  [Symbol.iterator](): IterableIterator<T>;
  /**
   * Returns an iterable of [v,v] pairs for every value `v` in the set.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  entries(): IterableIterator<[T, T]>;
  /**
   * Returns an iterable of the values in the set.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  keys(): IterableIterator<T>;
  /**
   * Returns an iterable of values in the set.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  values(): IterableIterator<T>;
  /**
   * Appends a new element with a specified value to the end of the Set.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
   add(value: T): this;
  /**
   * Clears the Set.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  clear(): void;
  /**
   * Returns true if an element in the Set existed and has been removed, or false if the element does not exist..
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  delete(value: T): boolean;
  /**
   * Executes a provided function once per each value in the Set object, in insertion order.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
  /**
   * a boolean indicating whether an element with the specified value exists in the Set or not.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  has(value: T): boolean;
  /**
   * Returns the number of elements in the Set.
   * @type { number }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  readonly size: number;
}
