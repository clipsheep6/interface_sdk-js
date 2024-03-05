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
  constructor();
  constructor(entries?: readonly (readonly [K, V])[] | null)
  /**
   * Returns an iterable of entries in the map.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  [Symbol.iterator](): IterableIterator<[K, V]>;
  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  entries(): IterableIterator<[K, V]>;
  /**
   * Returns an iterable of keys in the map.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  keys(): IterableIterator<K>;
  /**
   * Returns an iterable of values in the map.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  values(): IterableIterator<V>;
  /**
   * Clears the map.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  clear(): void;
  /**
   * Returns true if an element in the Map existed and has been removed, or false if the element does not exist..
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  delete(key: K): boolean;
  /**
   * Executes the provided callback once for each key of the map which actually exist.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
  /**
   * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  get(key: K): V | undefined;
  /**
   * Returns boolean indicating whether an element with the specified key exists or not.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  has(key: K): boolean;
  /**
   * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
   * @type { function }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  set(key: K, value: V): this;
  /**
   * Returns the number of elements in the Map.
   * @type { number }.
   * @syscap SystemCapability.Utils.Lang
   * @since 11
   */
  readonly size: number;
}