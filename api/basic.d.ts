/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @since 6
 */
export interface Callback<T> {
  /**
   * Defines the callback info.
   * @since 6
   */
  (data: T): void;
}

/**
 * Defines the basic error callback.
 * @since 6
 */
export interface ErrorCallback<T extends Error = BusinessError> {
  /**
   * Defines the basic error callback.
   * @since 6
   */
  (err: T): void;
}

/**
 * Defines the basic async callback.
 * @since 6
 */
export interface AsyncCallback<T> {
  /**
   * Defines the callback data.
   * @since 6
   */
  (err: BusinessError, data: T): void;
}

/**
 * Defines the error interface.
 * @since 6
 */
export interface BusinessError extends Error {
  /**
   * Defines the basic error code.
   * @since 6
   */
  code: number;
}

/**
 * Defines the basic ohos error callback.
 * @interface
 * @since 9
 */
export interface OHErrorCallback<T extends Error = OHBusinessError> {
  /**
   * Defines the OHErrorCallback info.
   * @param { T } err - the error info.
   * @since 9
   */
  (err: T): void; 
}

/**
 * Defines the basic ohos async callback.
 * @interface
 * @since 9
 */
export interface OHAsyncCallback<T, E = void> {
  /**
   * Defines the basic ohos async callback info.
   * @param { OHBusinessError } err - the error info.
   * @param { T } data - the callback result.
   * @since 9
   */
  (err: OHBusinessError<E>, data: T) : void;
}

/**
 * Defines the basic ohos error interface.
 * @interface
 * @since 9
 */
export interface OHBusinessError<T = void> extends Error {
  /**
   * Defines the ohos error number.
   * @type { number }
   * @since 9
   */
  errorNumber: number;
  /**
   * Defines the extra error info.
   * @type { T } [errorData]
   * @since 9
   */
  errorData?: T;
}
