/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import {AsyncCallback, ErrorCallback} from "./@ohos.base";

/**
 * Provides WebSocket APIs.
 *
 * @since 6
 * @syscap SystemCapability.Communication.NetStack
 */
declare namespace webSocket {
  /**
   * Creates a web socket connection.
   * @crossplatform
   */
  /**
   * Creates a web socket connection.
   * @crossplatform
   * @since 10
   */
  function createWebSocket(): WebSocket;

  export interface WebSocketRequestOptions {
    /**
     * HTTP request header.
     * @crossplatform
     */
    /**
     * HTTP request header.
     * @crossplatform
     * @since 10
     */
    header?: Object;
  }

  export interface WebSocketCloseOptions {
    /**
     * Error code.
     * @crossplatform
     */
    /**
     * Error code.
     * @crossplatform
     * @since 10
     */
    code?: number;
    /**
     * Error cause.
     * @crossplatform
     */
    /**
     * Error cause.
     * @crossplatform
     * @since 10
     */
    reason?: string;
  }

  export interface WebSocket {
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     *
     * @param url URL for establishing a WebSocket connection.
     * @param options Optional parameters {@link WebSocketRequestOptions}.
     * @param callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    /**
     * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
     *
     * @param url URL for establishing a WebSocket connection.
     * @param options Optional parameters {@link WebSocketRequestOptions}.
     * @param callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     * @since 10
     */
    connect(url: string, callback: AsyncCallback<boolean>): void;
    connect(url: string, options: WebSocketRequestOptions, callback: AsyncCallback<boolean>): void;
    connect(url: string, options?: WebSocketRequestOptions): Promise<boolean>;

    /**
     * Sends data through a WebSocket connection.
     *
     * @param data Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @param callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    /**
     * Sends data through a WebSocket connection.
     *
     * @param data Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
     * @param callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     * @since 10
     */
    send(data: string | ArrayBuffer, callback: AsyncCallback<boolean>): void;
    send(data: string | ArrayBuffer): Promise<boolean>;

    /**
     * Closes a WebSocket connection.
     *
     * @param options Optional parameters {@link WebSocketCloseOptions}.
     * @param callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     */
    /**
     * Closes a WebSocket connection.
     *
     * @param options Optional parameters {@link WebSocketCloseOptions}.
     * @param callback Returns callback used to return the execution result.
     * @permission ohos.permission.INTERNET
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 201 - Permission denied.
     * @crossplatform
     * @since 10
     */
    close(callback: AsyncCallback<boolean>): void;
    close(options: WebSocketCloseOptions, callback: AsyncCallback<boolean>): void;
    close(options?: WebSocketCloseOptions): Promise<boolean>;

    /**
     * Enables listening for the open events of a WebSocket connection.
     * @crossplatform
     */
    /**
     * Enables listening for the open events of a WebSocket connection.
     * @crossplatform
     * @since 10
     */
    on(type: 'open', callback: AsyncCallback<Object>): void;

    /**
     * Cancels listening for the open events of a WebSocket connection.
     * @crossplatform
     */
    /**
     * Cancels listening for the open events of a WebSocket connection.
     * @crossplatform
     * @since 10
     */
    off(type: 'open', callback?: AsyncCallback<Object>): void;

    /**
     * Enables listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @crossplatform
     */
    /**
     * Enables listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @crossplatform
     * @since 10
     */
    on(type: 'message', callback: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * Cancels listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @crossplatform
     */
    /**
     * Cancels listening for the message events of a WebSocket connection.
     * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
     * @crossplatform
     * @since 10
     */
    off(type: 'message', callback?: AsyncCallback<string | ArrayBuffer>): void;

    /**
     * Enables listening for the close events of a WebSocket connection.
     * @crossplatform
     */
    /**
     * Enables listening for the close events of a WebSocket connection.
     * @crossplatform
     * @since 10
     */
    on(type: 'close', callback: AsyncCallback<{ code: number, reason: string }>): void;

    /**
     * Cancels listening for the close events of a WebSocket connection.
     * @crossplatform
     */
    /**
     * Cancels listening for the close events of a WebSocket connection.
     * @crossplatform
     * @since 10
     */
    off(type: 'close', callback?: AsyncCallback<{ code: number, reason: string }>): void;

    /**
     * Enables listening for the error events of a WebSocket connection.
     * @crossplatform
     */
    /**
     * Enables listening for the error events of a WebSocket connection.
     * @crossplatform
     * @since 10
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Cancels listening for the error events of a WebSocket connection.
     * @crossplatform
     */
    /**
     * Cancels listening for the error events of a WebSocket connection.
     * @crossplatform
     * @since 10
     */
    off(type: 'error', callback?: ErrorCallback): void;
  }
}

export default webSocket;