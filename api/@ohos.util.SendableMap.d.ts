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
 * SendableMap is a sendable object which extends Map
 * 
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 11
 */
declare class SendableMap<K, V> {
  /**
   * A constructor used to create a SendableMap object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  constructor();
  /**
   * A constructor used to create a SendableMap object.
   *
   * @param { readonly (readonly [K, V])[] | null } - entries
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  constructor(entries?: readonly (readonly [K, V])[] | null)
  /**
   * Returns an iterable of entries in the map.
   *
   * @returns { IterableIterator<[K, V]> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  [Symbol.iterator](): IterableIterator<[K, V]>;
  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   *
   * @returns { IterableIterator<[K, V]> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  entries(): IterableIterator<[K, V]>;
  /**
   * Returns an iterable of keys in the map.
   *
   * @returns { IterableIterator<K> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  keys(): IterableIterator<K>;
  /**
   * Returns an iterable of values in the map.
   *
   * @returns { IterableIterator<V> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  values(): IterableIterator<V>;
  /**
   * Clears the map.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  clear(): void;
  /**
   * Deletes an element if existed.
   *
   * @param { K } - key
   * @returns { boolean } the boolean type
   * true if an element in the Map existed and has been removed,
   * or false if the element does not exist.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  delete(key: K): boolean;
  /**
   * Executes a provided function once per each key/value pair in the Map, in insertion order.
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
  forEach(callbackfn: (value: V, key: K, map: SendableMap<K, V>) => void, thisArg?: Object): void;
  /**
   * Gets a specified element from the Map object.
   *
   * @param { K } - key
   * @returns { V | undefined } the boolean type
   * the element associated with the specified key. If no element is associated with
   * the specified key, undefined is returned.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  get(key: K): V | undefined;
  /**
   * Checks the existence of an element with the specified key.
   *
   * @param { K } - key
   * @returns { boolean } the boolean type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  has(key: K): boolean;
  /**
   * Adds a new element with a specified key and value to the Map.
   *
   * @param { K } - key
   * @param { V } - value
   * @returns { SendableMap<K, V> } this
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  set(key: K, value: V): SendableMap<K, V>;
  /**
   * Gets the number of elements in the Map
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  readonly size: number;
}