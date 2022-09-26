/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import {AsyncCallback} from "./basic";

/**
 * This module provides the capability to manage web modules.
 *
 * @since 9
 * @syscap SystemCapability.Web.Webview.Core
 */
declare namespace webview {
    /**
     * Defines the Web's request/response header.
     * @since 9
     */
    interface WebHeader {
        /**
         * Gets the key of the request/response header.
         * @since 9
         */
        headerKey: string;

        /**
         * Gets the value of the request/response header.
         * @since 9
         */
        headerValue: string;
    }

    /**
     * Enum type supplied to {@link getHitTestValue} for indicating the cursor node HitTest.
     * @since 9
     */
    enum HitTestTypeV9 {
        /**
         * The edit text.
         * @since 9
         */
        EditText,

        /**
         * The email address.
         * @since 9
         */
        Email,

        /**
         * The HTML::a tag with src=http.
         * @since 9
         */
        HttpAnchor,

        /**
         * The HTML::a tag with src=http + HTML::img.
         * @since 9
         */
        HttpAnchorImg,

        /**
         * The HTML::img tag.
         * @since 9
         */
        Img,

        /**
         * The map address.
         * @since 9
         */
        Map,

        /**
         * The phone number.
         * @since 9
         */
        Phone,

        /**
         * Other unknown HitTest.
         * @since 9
         */
        Unknown,
    }

    /**
     * Defines the hit test value, related to {@link getHitTestValue} method.
     * @since 9
     */
    class HitTestValue {
        /**
         * Constructor.
         * @since 9
         */
        constructor();

        /**
         * get the hit test type.
         * @since 9
         */
        getType(): HitTestTypeV9;

        /**
         * get the hit test extra data.
         * @since 9
         */
        getExtra(): string;
    }

    /**
     * Define html5 web message port.
     * @since 9
     */
    class WebMessagePort {
        /**
         * Constructor.
         * @since 9
         */
        constructor();

        /**
         * Close port.
         * @since 9
         */
        close(): void;

        /**
         * Post a message to other port.
         * @since 9
         */
        postMessageEvent(message: WebMessageEvent): void;

        /**
         * Receive message from other port.
         * @since 9
         */
        onMessageEvent(callback: (result: string) => void): void;
    }

    /**
     * Define html5 web message, which include message and ports.
     * @since 9
     */
    class WebMessageEvent {
        /**
         * Constructor.
         * @since 9
         */
        constructor();

        /**
         * Get message.
         * @since 9
         */
        getData(): string;

        /**
         * Set message.
         * @since 9
         */
        setData(data: string): void;

        /**
         * Get ports.
         * @since 9
         */
        getPorts(): Array<WebMessagePort>;

        /**
         * Set ports.
         * @since 9
         */
        setPorts(ports: Array<WebMessagePort>): void;
    }

    /**
     * Provides basic information of web storage.
     * @name WebStorageOrigin
     * @since 9
     * @syscap SystemCapability.Web.Webview.Core
     */
    interface WebStorageOrigin {
        origin: string;
        usage: number;
        quota: number;
    }

    /**
     * Provides methods for managing web storage.
     * @name WebStorage
     * @since 9
     * @syscap SystemCapability.Web.Webview.Core
     */
    class WebStorage {
        /**
         * delete all the storage data.
         *
         * @since 9
         */
        static deleteAllData() : void;
    
        /**
         * delete the storage data with the origin.
         * @param origin the origin which to be deleted.
         * @since 9
         */
        static deleteOrigin(origin : string): void;

        /**
         * Get current all the web storage origins.
         *
         * @since 9
         */
        static getOrigins() : Promise<Array<WebStorageOrigin>>;
        static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>) : void;

        /**
         *  Get the web storage quota with the origin.
         * @param origin the origin which to be inquired.
         * @since 9
         */
        static getOriginQuota(origin : string) : Promise<number>;
        static getOriginQuota(origin : string, callback : AsyncCallback<number>) : void;

        /**
         *  Get the web storage quota with the origin.
         * @param origin the origin which to be inquired.
         * @since 9
         */
        static getOriginUsage(origin : string) : Promise<number> ;
        static getOriginUsage(origin : string, callback : AsyncCallback<number>) : void;
    }

    /**
     * Provides methods for managing web database.
     * @name WebDataBase
     * @since 9
     * @syscap SystemCapability.Web.Webview.Core
     */
    class WebDataBase {
        /**
        * Get whether instances holds any http authentication credentials.
        * @return true if instances saved any http authentication credentials otherwise false.
        *
        * @since 9
        */
        static existHttpAuthCredentials(): boolean;
      
        /**
         * delete all http authentication credentials.
         *
         * @since 9
         */
        static deleteHttpAuthCredentials(): void;
      
        /**
         * get http authentication credentials.
         * @param host the host to which the credentials apply.
         * @param realm the realm to which the credentials apply.
         * @return Return an array containing username and password.
         * @since 9
         */
        static getHttpAuthCredentials(host: string, realm: string): Array<string>;
      
        /**
         * save http authentication credentials.
         * @param host the host to which the credentials apply.
         * @param realm the realm to which the credentials apply.
         * @param username the username.
         * @param password the password.
         *
         * @since 9
         */
        static saveHttpAuthCredentials(host: string, realm: string, username: string, password: string): void;
      }

      /**
       * Defines the webview controller.
       *
       * @since 9
       */
      class WebviewController {
        /**
         * Constructor.
         * @since 9
         */
        constructor();

        /**
         * Let the Web inactive.
         * @since 9
         */
        onInactive(): void;

        /**
         * Let the Web active.
         * @since 9
         */
        onActive(): void;

        /**
         * Let the Web zoom by.
         * @param factor The zoom factor.
         * @throws {BusinessError} if factor is not a valid number.
         * @throws {BusinessError} if {@link zoomAccess} set false.
         *
         * @since 9
         */
        zoom(factor: number): void;

        /**
         * Let the Web zoom in.
         * @throws {BusinessError} if {@link zoomAccess} set false.
         * @since 9
         */
        zoomIn(): void;

        /**
         * Let the Web zoom out.
         * @throws {BusinessError} if {@link zoomAccess} set false.
         * @since 9
         */
        zoomOut(): void;

        /**
         * Clears the history in the Web.
         * @since 9
         */
        clearHistory(): void;

        /**
         * Loads a piece of code and execute JS code in the context of the currently displayed page.
         * @param options The options with a piece of code and a callback.
         * @throws {BusinessError} if script is not a valid string.
         *
         * @since 9
         */
        runJavaScript(options: { script: string, callback?: (result: string) => void });

        /**
         * Create web message ports
         *
         * @since 9
         */
        createWebMessagePorts(): Array<WebMessagePort>;

        /**
         * Post web message port to html5
         * @param options The options with a message event and a uri.
         * @throws {BusinessError} if message is not a WebMessageEvent type.
         * @throws {BusinessError} if uri is not a string type.
         *
         * @since 9
         */
        postMessage(options: { message: WebMessageEvent, uri: string}): void;

        /**
         * Loads the data or URL.
         * @param options The options with the data or URL and other information.
         * @throws {BusinessError} if data is not a string type or not a valid format.
         * @throws {BusinessError} if mimeType is not a string type or not a valid format.
         * @throws {BusinessError} if encoding is not a string type or not a valid format.
         *
         * @since 9
         */
        loadData(options: { data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string });

        /**
         * Loads the given URL.
         * @param options The options with the URL and other information.
         * @throws {BusinessError} if url is not a string type or not a valid format.
         * @throws {BusinessError} if Header is not Array type or not a valid format.
         *
         * @since 9
         */
        loadUrl(options: { url: string | Resource, headers?: Array<WebHeader> });

        /**
         * refreshes the current URL.
         * @since 9
         */
        refresh();

        /**
         * Stops the current load.
         * @since 9
         */
        stop();

        /**
         * Registers the JavaScript object and method list.
         * @param options The option with the JavaScript object and method list.
         * @throws {BusinessError} if name is not a string type or not a valid format.
         *
         * @since 9
         */
        registerJavaScriptProxy(options: { object: object, name: string, methodList: Array<string> });

        /**
         * Deletes a registered JavaScript object with given name.
         * @param name The name of a registered JavaScript object to be deleted.
         * @throws {BusinessError} if name is not a string type or not a valid format.
         *
         * @since 9
         */
        deleteJavaScriptRegister(name: string);

        /**
         * Gets the hit test value of HitTest.
         * @since 9
         */
        getHitTestValue(): HitTestValue;

        /**
         * Gets the id for the current Web.
         * @since 9
         */
        getWebId(): number;

        /**
         * Gets the default user agent.
         * @since 9
         */
        getDefaultUserAgent(): string;

        /**
         * Gets the title of current Web page.
         * @since 9
         */
        getTitle(): string;

        /**
         * Gets the content height of current Web page.
         * @since 9
         */
        getPageHeight(): number;

        /**
         * Gets the request focus.
         * @since 9
         */
        requestFocus();

        /**
         * Checks whether the web page can go back.
         * @since 9
         */
        accessBackward(): boolean;

        /**
         * Checks whether the web page can go forward.
         * @since 9
         */
        accessForward(): boolean;

        /**
         * Checks whether the web page can go back or forward the given number of steps.
         * @param step The number of steps.
         * @throw {BusinessError} if step is not a valid number.
         *
         * @since 9
         */
        accessStep(step: number): boolean;

        /**
         * Goes back in the history of the web page.
         * @throw {BusinessError} if can't backward anymore.
         * @since 9
         */
        backward(): void;

        /**
         * Goes forward in the history of the web page.
         * @throw {BusinessError} if can't forward anymore.
         * @since 9
         */
        forward(): void;

        /**
         * Goes forward or back backOrForward in the history of the web page.
         * @throw {BusinessError} if step is not a valid number.
         * @throw {BusinessError} if can't backward or forward anymore.
         * @since 9
         */
        backOrForward(step: number): void;

        /**
         * Search all instances of 'searchString' on the page and highlights them,
         * result will be notify through callback onSearchResultReceive.
         * @param searchString string to be search.
         * @throws {BusinessError} if searchString is not a string type or not a valid format.
         * @since 9
         */
        searchAllAsync(searchString: string): void;

        /**
         * Clears the highlighting surrounding text matches created by searchAllAsync.
         * @since 9
         */
        clearMatches(): void;

        /**
         * Highlights and scrolls to the next match search.
         * @param forward step of search is back or forward.
         * @throws {BusinessError} if forward is not a boolean type.
         * @since 9
         */
        searchNext(forward: boolean): void;

        /**
         * Clears the ssl cache in the Web.
         * @since 9
         */
        clearSslCache(): void;

        /**
         * Clears the client authentication certificate cache in the Web.
         * @since 9
         */
        clearClientAuthenticationCache(): void;

          /**
           * Stores the current page as a web archive.
           *
           * @param baseName Where the generated offline webpage is stored, This value cannot be null.
           * @param autoName If it is false, the filename will be automatically generated according to
           *                 the url and the generated offline webpage will be stored in the directory
           *                 specified by baseName. If it is true, the offline webpage will be directly
           *                 stored in the path specified by baseName.
           * @throws {BusinessError} if baseName is not a string type or not a valid format.
           * @returns a promise resolved after the web archive has been stored. The parameter will either
           *          be the filename under which the file was stored, or empty if storing the file failed.
           *
           * @since 9
           */
          storeWebArchive(baseName: string, autoName: boolean): Promise<string>;

          /**
           * Stores the current page as a web archive.
           *
           * @param baseName Where the generated offline webpage is stored, This value cannot be null.
           * @param autoName If it is false, the filename will be automatically generated according to
           *                 the url and the generated offline webpage will be stored in the directory
           *                 specified by baseName. If it is true, the offline webpage will be directly
           *                 stored in the path specified by baseName.
           * @param callback called after the web archive has been stored. The parameter will either be
           *                 the filename under which the file was stored, or empty if storing
           *                 the file failed.
           * @throws {BusinessError} if baseName is not a string type or not a valid format.
           *
           * @since 9
           */
          storeWebArchive(baseName: string, autoName: boolean, callback : AsyncCallback<string>): void;
      }

    /**
     * Provides a method for managing web geographic location permissions.
     * @name GeolocationPermissions
     * @since 9
     * @syscap SystemCapability.Web.Webview.Core
     */
    class GeolocationPermissions {
        /**
         * Allow geolocation permissions for specifies source.
         * @param origin url source.
         *
         * @since 9
         */
        static allowGeolocation(origin: string): void;

        /**
         * Delete geolocation permissions for specifies source.
         * @param origin url source.
         *
         * @since 9
         */
        static deleteGeolocation(origin: string): void;

        /**
         * Delete all geolocation permissions.
         *
         * @since 9
         */
         static deleteAllGeolocation(): void;

        /**
         * Gets the geolocation permission status of the specified source.
         * @param origin url source.
         * @return Return whether there is a saved result.
         *
         * @since 9
         */
        static getAccessibleGeolocation(origin: string): Promise<boolean>;
        static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>): void;

        /**
         * Get all stored geolocation permission url source.
         * @return Return whether there is a saved result.
         *
         * @since 9
         */
        static getStoredGeolocation() : Promise<Array<string>>;
        static getStoredGeolocation(callback : AsyncCallback<Array<string>>): void;
    }

      /**
       * Provides methods for managing the web cookies.
       *
       * @since 9
       */
       class WebCookieManager {
        /**
         * Gets all cookies for the given URL.
         *
         * @param url The URL for which the cookies are requested.
         * @returns The cookie value for the given URL.
         *
         * @since 9
         */
        static getCookie(url: string): string;

        /**
         * Set a single cookie (key-value pair) for the given URL.
         *
         * @param url The URL for which the cookie is to be set.
         * @param value The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
         * @returns True if the cookie was successfully set else false.
         *
         * @since 9
         */
        static setCookie(url: string, value: string): boolean;

        /**
         * Save the cookies Synchronously .
         * 
         * @return True if the cookies have been successfully saved else false.
         * 
         * @since 9
         */
        static saveCookieSync(): boolean;

        /**
         * Save the cookies Asynchronously.
         * 
         * @return A promise resolved after the cookies have been saved.The parameter will either
         *         be true if the cookies have been successfully saved, or false if failed.
         * 
         * @since 9
         */
        static saveCookieAsync(): Promise<boolean>;

        /**
         * Save the cookies Asynchronously.
         * 
         * @param callback Called after the cookies have been saved. The parameter will either be
         *                 true if the cookies have been successfully saved, or false if failed.
         * 
         * @since 9
         */
        static saveCookieAsync(callback: AsyncCallback<boolean>): void;

        /**
         * Get whether the instance can send and accept cookies.
         *
         * @returns True if the instance can send and accept cookies else false.
         *
         * @since 9
         */
        static isCookieAllowed(): boolean;

        /**
         * Set whether the instance should send and accept cookies.
         * By default this is set to be true.
         * 
         * @param accept Whether the instance should send and accept cookies.
         *
         * @since 9
         */
        static putAcceptCookieEnabled(accept: boolean): void;

        /**
         * Get whether the instance can send and accept thirdparty cookies.
         *
         * @returns True if the instance can send and accept thirdparty cookies else false.
         *
         * @since 9
         */
        static isThirdPartyCookieAllowed(): boolean;

        /**
         * Set whether the instance should send and accept thirdparty cookies.
         * By default this is set to be true.
         * 
         * @param accept Whether the instance should send and accept thirdparty cookies.
         *
         * @since 9
         */
        static putAcceptThirdPartyCookieEnabled(accept: boolean): void;

        /**
         * Check whether exists any cookies.
         *
         * @returns True if exists more than one cookie else false;
         *
         * @since 9
         */
        static existCookie(): boolean;

        /**
         * Remove all cookies.
         *
         * @since 9
         */
        static deleteEntireCookie(): void;

        /**
         * Delete the session cookies.
         * 
         * @since 9
         */
        static deleteSessionCookie(): void;
    }
}

export default webview;
