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
 * looping function.
 * @since 7
 */
/**
 * looping function.
 * @form
 * @since 9
 */
/**
 * looping function.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ForEachInterface {
  /**
   * Set the value, array, and key.
   * @since 7
   */
  /**
   * Set the value, array, and key.
   * @form
   * @since 9
   */
  /**
   * Set the value, array, and key.
   * @param { Array<T> } arr - The value that needs to loop.
   * @param { (item: T, index?: number) => void } itemGenerator - lambda functions that generate child components.
   * @param { (item: T, index?: number) => string } keyGenerator - Used to generate a unique and stable key value for a given array item.
   * @returns { ForEachInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  <T> (
    arr: Array<T>,
    itemGenerator: (item: T, index?: number) => void,
    keyGenerator?: (item: T, index?: number) => string,
  ): ForEachInterface;
}

/**
 * Defines ForEach Component.
 * @since 7
 */
/**
 * Defines ForEach Component.
 * @form
 * @since 9
 */
/**
 * Defines ForEach Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const ForEach: ForEachInterface;
