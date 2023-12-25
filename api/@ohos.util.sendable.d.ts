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
 * lib for sendable.
 *
 * @namespace sendable
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 11
 */
declare namespace sendable {
  /**
   * The JSON interface provides functions to convert sendable JavaScript values to and from the JavaScript Object Notation (JSON) format.<br/>
   * Do not support array now.
   * @typedef SendableJSON
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  export interface SendableJSON extends JSON {
    /**
     * Query whether a sendable JavaScript value has a specified key
     * @param { Object } obj A sendable JavaScript value to be queried
     * @param { string } key Key to be queried
     * @returns { boolean } whether a sendable JavaScript value has a specified key
     * @throws { BusinessError } 401 - The parameter check failed. 
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 11
     */
    has(obj: Object, key: string): boolean;
  }

  /**
   * An intrinsic object that provides functions to convert sendable JavaScript values to and from the JavaScript Object Notation (JSON) format.<br/>
   * Do not support array now.
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 11
   */
  const JSON: SendableJSON;
}

export default sendable;
