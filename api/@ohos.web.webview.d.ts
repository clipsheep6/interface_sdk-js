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

/**
 * @file
 * @kit ArkWeb
 */

/*** if arkts 1.2 */
import { Resource } from './global/resource';
/*** endif */
import { AsyncCallback, BusinessError } from './@ohos.base';
import { Callback } from './@ohos.base';
/*** if arkts 1.1 */
import cert from './@ohos.security.cert';
import image from './@ohos.multimedia.image';
import type print from './@ohos.print';
import { WebNetErrorList } from './@ohos.web.netErrorList';
/*** endif */

/**
 * This module provides the capability to manage web modules.
 *
 * @namespace webview
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * This module provides the capability to manage web modules.
 *
 * @namespace webview
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * This module provides the capability to manage web modules.
 *
 * @namespace webview
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace webview {
  /**
   * Defines the Web's request/response header.
   *
   * @interface WebHeader
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Defines the Web's request/response header.
   *
   * @interface WebHeader
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the Web's request/response header.
   *
   * @interface WebHeader
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the Web's request/response header.
   *
   * @typedef WebHeader
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface WebHeader {
    /**
     * Gets the key of the request/response header.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the key of the request/response header.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the key of the request/response header.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    headerKey: string;

    /**
     * Gets the value of the request/response header.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the value of the request/response header.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the value of the request/response header.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    headerValue: string;
  }

  /**
   * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  enum WebHitTestType {
    /**
     * The edit text.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The edit text.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    EditText,

    /**
     * The email address.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The email address.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Email,

    /**
     * The HTML::a tag with src=http.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The HTML::a tag with src=http.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    HttpAnchor,

    /**
     * The HTML::a tag with src=http + HTML::img.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The HTML::a tag with src=http + HTML::img.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    HttpAnchorImg,

    /**
     * The HTML::img tag.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The HTML::img tag.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Img,

    /**
     * The map address.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The map address.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Map,

    /**
     * The phone number.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The phone number.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Phone,

    /**
     * Other unknown HitTest.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Other unknown HitTest.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Unknown
  }

  /**
   * Defines the mode for using HttpDns.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Defines the mode for using HttpDns.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  enum SecureDnsMode {
    /**
     * Do not use HttpDns, can be used to revoke previously used HttpDns configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Do not use HttpDns, can be used to revoke previously used HttpDns configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    OFF = 0,
    /**
     * By default, the user-settings of HttpDns is used for dns resolution, and if it fails,
     * the system dns is used for resolution.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * By default, the user-settings of HttpDns is used for dns resolution, and if it fails,
     * the system dns is used for resolution.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    AUTO = 1,
    /**
     * Use the user-settings of HttpDns for dns resolution. If it fails, it will not
     * fall back to the system dns, which will directly cause the page to fail to load.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Use the user-settings of HttpDns for dns resolution. If it fails, it will not
     * fall back to the system dns, which will directly cause the page to fail to load.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SECURE_ONLY = 2,
  }

  /**
   * Defines the security level for the page.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  enum SecurityLevel {
    /**
     * Unable to determine whether it is safe or not, the non-http/https protocol used.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NONE = 0,

    /**
     * Indicates the HTTPS protocol used by the page and the authentication is successful.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SECURE = 1,

    /**
     * The page is insecure. For example, the HTTP protocol is used or the HTTPS protocol
     * is used but use an legacy TLS version.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    WARNING = 2,

    /**
     * Attempted HTTPS and failed, the authentication is failed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    DANGEROUS = 3,
  }

  /**
   * The playback status of all audio and video.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  enum MediaPlaybackState {
    /**
     * No audio or video currently.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    NONE = 0,

    /**
     * The audio and video on the page are being played.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    PLAYING = 1,

    /**
     * The audio and video on the page are paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    PAUSED = 2,

    /**
     * The audio and video on the page are stopped.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    STOPPED = 3
  }

  /**
   * The memory pressure level that can be set.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14
   */
  enum PressureLevel {
    /**
     * Modules are advised to free buffers that are cheap to re-allocate and not immediately needed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    MEMORY_PRESSURE_LEVEL_MODERATE = 1,

    /**
     * At this level, modules are advised to free all possible memory.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    MEMORY_PRESSURE_LEVEL_CRITICAL = 2
  }

  /**
   * Defines the hit test value, related to {@link getHitTestValue} method.
   *
   * @interface HitTestValue
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Defines the hit test value, related to {@link getHitTestValue} method.
   *
   * @interface HitTestValue
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Provides element information of the click area. related to {@link getLastHitTest} method.
   *
   * @typedef HitTestValue
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  interface HitTestValue {

    /**
     * Get the hit test type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the hit test type.
     *
     * @type { WebHitTestType }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    type: WebHitTestType;

    /**
     * Get the hit test extra data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the hit test extra data.
     * If the clicked area is an image or a link, the additional parameter information is it's URL address.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    extra: string;
  }

  /**
   * Defines the configuration of web custom scheme, related to {@link customizeSchemes} method.
   *
   * @interface WebCustomScheme
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Defines the configuration of web custom scheme, related to {@link customizeSchemes} method.
   *
   * @interface WebCustomScheme
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the configuration of web custom scheme, related to {@link customizeSchemes} method.
   *
   * @typedef WebCustomScheme
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  interface WebCustomScheme {

    /**
     * Name of the custom scheme.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Name of the custom scheme.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    schemeName: string;

    /**
     * Whether Cross-Origin Resource Sharing is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Whether Cross-Origin Resource Sharing is supported.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    isSupportCORS: boolean;

    /**
     * Whether fetch request is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Whether fetch request is supported.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    isSupportFetch: boolean;

    /**
     * If isStandard is true, the scheme will be handled as a standard scheme. The standard
     * schemes needs to comply with the URL normalization and parsing rules defined in Section 3.1 of RFC 1738,
     * which can be found in the http://www.ietf.org/rfc/rfc1738.txt.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isStandard?: boolean;

    /**
     * If isLocal is true, the same security rules as those applied to the "file" URL will be
     * used to handle the scheme.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isLocal?: boolean;

    /**
     * If isDisplayIsolated is true, then the scheme can only be displayed from other content
     * hosted using the same scheme.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isDisplayIsolated?: boolean;

    /**
     * If isSecure is true, the same security rules as those applied to the "https" URL will be
     * used to handle the scheme.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isSecure?: boolean;

    /**
     * If isCspBypassing is true, then this scheme can bypass Content Security Policy (CSP)
     * checks. In most cases, this value should not be true when isStandard is true.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isCspBypassing?: boolean;

    /**
     * If isCodeCacheSupported is true, then the js of this scheme can generate code cache.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    isCodeCacheSupported?: boolean;
  }

  /**
   * Defines the callback of createPdf, related to {@link createPDF} method.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14
   */
  class PdfData {
    /**
     * Return the data stream generated by the webpage.
     *
     * @returns { Uint8Array } return pdf data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    pdfArrayBuffer(): Uint8Array;
  }

  /**
   * Defines the configuration of creating pdf, related to {@Link createPdf} method.
   *
   * @typedef PdfConfiguration
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14
   */
  interface PdfConfiguration {
    /**
     * Number of the width.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    width: number;

    /**
     * Number of the height.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    height: number;

    /**
     * Number of the marginTop.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    marginTop: number;

    /**
     * Number of the marginBottom.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    marginBottom: number;

    /**
     * Number of the marginRight.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    marginRight: number;

    /**
     * Number of the marginLeft.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    marginLeft: number;

    /**
     * Number of the scaling.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    scale?: number;

    /**
     * Whether background should be printed when creating pdf.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    shouldPrintBackground?: boolean;
  }

  /**
   * Provides basic information of web storage.
   *
   * @interface WebStorageOrigin
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides basic information of web storage.
   *
   * @interface WebStorageOrigin
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Provides basic information of web storage.
   *
   * @typedef WebStorageOrigin
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Provides basic information of web storage.
   *
   * @typedef WebStorageOrigin
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface WebStorageOrigin {
    /**
     * Url source.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Url source.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
	/**
     * Url source.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
	 * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    origin: string;
    /**
     * Specify the amount of storage for the source.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Specify the amount of storage for the source.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
	/**
     * Specify the amount of storage for the source.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
	 * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    usage: number;
    /**
     * the callback of getOriginUsage.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * the callback of getOriginUsage.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
	/**
     * the callback of getOriginUsage.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
	 * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    quota: number;
  }

  /**
   * Defines the Web's request info.
   *
   * @typedef RequestInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  interface RequestInfo {
    /**
     * Gets the url of the request.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    url: string;

    /**
     * Gets the method of the request.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    method: string;

    /**
     * Gets the form data of the request.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    formData: string;
  }

  /**
   * Defines the scroll offset of the webpage in view port, the unit is virtual pixel.
   * Related to {@link getScrollOffset} method.
   *
   * @typedef ScrollOffset
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 13
   */
  interface ScrollOffset {
    /**
     * Get the horizontal offset.
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13
     */
    x: number;

    /**
     * Get the vertical offset.
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13
     */
    y: number;
  }

  /**
   * Subscribe to a callback of a specified type of web event once.
   *
   * @param {string} type Types of web event.
   * @param {Callback<void>} callback Indicate callback used to receive the web event.
   *
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Subscribe to a callback of a specified type of web event once.
   *
   * @param {string} type Types of web event.
   * @param {Callback<void>} callback Indicate callback used to receive the web event.
   *
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  function once(type: string, callback: Callback<void>): void;

  /**
   * Provides methods for managing web storage.3
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides methods for managing web storage.3
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Implements a WebStorage object to manage the Web SQL database and HTML5 Web Storage APIs.
   * All Web components in an application share a WebStorage object.
   *
   * <p><strong>API Note</strong>:<br>
   * You must load the Web component before calling the APIs in WebStorage.
   * </p>
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  class WebStorage {
    /**
     * Delete all the storage data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Delete all the storage data.
     *
     * @param { boolean } incognito - {@code true} delete all the storage data in incognito mode;
     *                                {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Deletes all data in the Web SQL Database.
     *
     * @param { boolean } incognito - Whether to delete all data in the Web SQL Database in incognito mode.
     *                                {@code true} means to delete all data in the Web SQL Database in incognito mode;
     *                                {@code false} means to delete all data in the Web SQL Database in normal non-incognito mode.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    static deleteAllData(incognito?: boolean): void;

    /**
     * Delete the storage data with the origin.
     *
     * @param { string } origin - The origin which to be deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Delete the storage data with the origin.
     *
     * @param { string } origin - The origin which to be deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Deletes all data in the specified origin.
     *
     * @param { string } origin - Index of the origin, which is obtained through {@link getOrigins}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    static deleteOrigin(origin: string): void;

    /**
     * Get current all the web storage origins.
     * @returns { Promise<Array<WebStorageOrigin>> } - returns all the WebStorageOrigin.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get current all the web storage origins.
     * @returns { Promise<Array<WebStorageOrigin>> } - returns all the WebStorageOrigin.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Obtains information about all origins that are currently using the Web SQL Database.
     * This API uses a promise to return the result.
     * 
     * @returns { Promise<Array<WebStorageOrigin>> } - Promise used to return the information about the origins.
     *                                                 For details, see {@link WebStorageOrigin}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    static getOrigins(): Promise<Array<WebStorageOrigin>>;

    /**
     * Get current all the web storage origins.
     * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - callback used to return all the WebStorageOrigin.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get current all the web storage origins.
     * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - callback used to return all the WebStorageOrigin.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Obtains information about all origins that are currently using the Web SQL Database.
     * This API uses an asynchronous callback to return the result.
     * 
     * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - Callback used to return the information about the
     *                                                              origins. For details, see {@link WebStorageOrigin}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void;

    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    static getOriginQuota(origin: string): Promise<number>;

    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginQuota.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginQuota.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginQuota.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    static getOriginQuota(origin: string, callback: AsyncCallback<number>): void;

    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    static getOriginUsage(origin: string): Promise<number>;

    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginUsage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginUsage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginUsage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    static getOriginUsage(origin: string, callback: AsyncCallback<number>): void;
  }

  /**
   * Provides methods for managing web database.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Implements a WebDataBase object.
   *
   * <p><strong>API Note</strong>:<br>
   * You must load the Web component before calling the APIs in WebDataBase.
   * </p>
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  class WebDataBase {
    /**
    * Get whether instances holds any http authentication credentials.
    * @returns { boolean } true if instances saved any http authentication credentials otherwise false.
    * @syscap SystemCapability.Web.Webview.Core
    * @since 9
    */
   /**
    * Get whether instances holds any http authentication credentials.
    * @returns { boolean } true if instances saved any http authentication credentials otherwise false.
    * @syscap SystemCapability.Web.Webview.Core
    * @crossplatform
    * @atomicservice
    * @since 11
    */
    static existHttpAuthCredentials(): boolean;

    /**
     * Delete all http authentication credentials.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Deletes all HTTP authentication credentials saved in the cache. This API returns the result synchronously.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static deleteHttpAuthCredentials(): void;

    /**
     * Get http authentication credentials.
     * @param { string } host - The host to which the credentials apply.
     * @param { string } realm - The realm to which the credentials apply.
     * @returns { Array<string> } Return an array containing username and password.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get http authentication credentials.
     * @param { string } host - The host to which the credentials apply.
     * @param { string } realm - The realm to which the credentials apply.
     * @returns { Array<string> } Return an array containing username and password.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static getHttpAuthCredentials(host: string, realm: string): Array<string>;

    /**
     * Save http authentication credentials.
     * @param { string } host - The host to which the credentials apply.
     * @param { string } realm - The realm to which the credentials apply.
     * @param { string } username - The username.
     * @param { string } password - The password.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Saves HTTP authentication credentials for a given host and realm. This API returns the result synchronously.
     * @param { string } host - Host to which HTTP authentication credentials apply.
     * @param { string } realm - Realm to which HTTP authentication credentials apply.
     * @param { string } username - User name.
     * @param { string } password - Password.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static saveHttpAuthCredentials(host: string, realm: string, username: string, password: string): void;
  }

  /**
   * Provides a method for managing web geographic location permissions.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides a method for managing web geographic location permissions.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Implements a GeolocationPermissions object.
   *
   * <p><strong>API Note</strong>:<br>
   * You must load the Web component before calling the APIs in GeolocationPermissions.
   * </p>
   * 
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  class GeolocationPermissions {
    /**
     * Allow geolocation permissions for specifies source.
     * @param { string } origin - Url source.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Allow geolocation permissions for specifies source.
     * @param { string } origin - Url source.
     * @param { boolean } incognito - {@code true} Allow geolocation permissions for specifies source
     *                                in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Allows the specified origin to use the geolocation information.
     * @param { string } origin - Index of the origin.
     * @param { boolean } incognito - Whether to allow the specified origin to use the geolocation information 
     *                                in incognito mode. {@code true} means to allow the specified origin to use the
     *                                geolocation information in incognito mode; {@code false} means to allow the
     *                                specified origin to use the geolocation information in normal non-incognito mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static allowGeolocation(origin: string, incognito?: boolean): void;

    /**
     * Delete geolocation permissions for specifies source.
     * @param { string } origin - Url source.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Delete geolocation permissions for specifies source.
     * @param { string } origin - Url source.
     * @param { boolean } incognito - {@code true} delete geolocation permissions for specifies source
     *                                in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Delete geolocation permissions for specifies source.
     * @param { string } origin - Url source.
     * @param { boolean } incognito - {@code true} delete geolocation permissions for specifies source
     *                                in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static deleteGeolocation(origin: string, incognito?: boolean): void;

    /**
     * Delete all geolocation permissions.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Delete all geolocation permissions.
     *
     * @param { boolean } incognito - {@code true} delete all geolocation in incognito mode;
     *                                {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Clears the geolocation permission status of all sources.
     *
     * @param { boolean } incognito - Whether to clear the geolocation permission status of all sources in incognito
     *                                mode. {@code true} means to clear the geolocation permission status of
     *                                all sources in incognito mode; {@code false} means to clear the geolocation
     *                                permission status of all sources in normal non-incognito mode.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static deleteAllGeolocation(incognito?: boolean): void;

    /**
     * Gets the geolocation permission status of the specified source.
     * @param { string } origin - Url source.
     * @returns { Promise<boolean> } A Promise instance that obtains the permission
     *                               status of the specified source and obtains successfully,
     *                               true for authorization, false for access denial. Failed
     *                               to get, indicating that the permission status of the
     *                               specified source does not exist.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the geolocation permission status of the specified source.
     * @param { string } origin - Url source.
     * @param { boolean } incognito - {@code true} gets the geolocation permission status of the
     *                                specified source in incognito mode; {@code false} otherwise.
     * @returns { Promise<boolean> } A Promise instance that obtains the permission
     *                               status of the specified source and obtains successfully,
     *                               true for authorization, false for access denial. Failed
     *                               to get, indicating that the permission status of the
     *                               specified source does not exist.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the geolocation permission status of the specified source.
     * @param { string } origin - Url source.
     * @param { boolean } incognito - {@code true} gets the geolocation permission status of the
     *                                specified source in incognito mode; {@code false} otherwise.
     * @returns { Promise<boolean> } A Promise instance that obtains the permission
     *                               status of the specified source and obtains successfully,
     *                               true for authorization, false for access denial. Failed
     *                               to get, indicating that the permission status of the
     *                               specified source does not exist.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static getAccessibleGeolocation(origin: string, incognito?: boolean): Promise<boolean>;

    /**
     * Gets the geolocation permission status of the specified source.
     * @param { string } origin - Url source.
     * @param { AsyncCallback<boolean> } callback - Returns the geolocation permission status for
     *                                              the specified source. Successful acquisition,
     *                                              true means authorized, false means access is
     *                                              denied. Failed to get, indicating that the
     *                                              permission status of the specified source does
     *                                              not exist.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the geolocation permission status of the specified source.
     * @param { string } origin - Url source.
     * @param { AsyncCallback<boolean> } callback - Returns the geolocation permission status for
     *                                              the specified source. Successful acquisition,
     *                                              true means authorized, false means access is
     *                                              denied. Failed to get, indicating that the
     *                                              permission status of the specified source does
     *                                              not exist.
     * @param { boolean } incognito - {@code true} gets the geolocation permission status of the
     *                                specified source in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the geolocation permission status of the specified source.
     * @param { string } origin - Url source.
     * @param { AsyncCallback<boolean> } callback - Returns the geolocation permission status for
     *                                              the specified source. Successful acquisition,
     *                                              true means authorized, false means access is
     *                                              denied. Failed to get, indicating that the
     *                                              permission status of the specified source does
     *                                              not exist.
     * @param { boolean } incognito - {@code true} gets the geolocation permission status of the
     *                                specified source in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>, incognito?: boolean): void;

    /**
     * Get all stored geolocation permission url source.
     *
     * @returns { Promise<Array<string>> } A Promise instance that gets all source information about
     *                                     the stored geolocation permission state.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get all stored geolocation permission url source.
     * @param { boolean } incognito - {@code true} get all stored geolocation permission url source
     *                                in incognito mode; {@code false} otherwise.
     * @returns { Promise<Array<string>> } A Promise instance that gets all source information about
     *                                     the stored geolocation permission state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get all stored geolocation permission url source.
     * @param { boolean } incognito - {@code true} get all stored geolocation permission url source
     *                                in incognito mode; {@code false} otherwise.
     * @returns { Promise<Array<string>> } A Promise instance that gets all source information about
     *                                     the stored geolocation permission state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static getStoredGeolocation(incognito?: boolean): Promise<Array<string>>;

    /**
     * Get all stored geolocation permission url source.
     * @param { AsyncCallback<Array<string>> } callback - Returns all source information for
     *                                                    stored geolocation permission states.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get all stored geolocation permission url source.
     * @param { AsyncCallback<Array<string>> } callback - Returns all source information for
     *                                                    stored geolocation permission states.
     * @param { boolean } incognito - {@code true} gets all stored geolocation permission url
     *                                source in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get all stored geolocation permission url source.
     * @param { AsyncCallback<Array<string>> } callback - Returns all source information for
     *                                                    stored geolocation permission states.
     * @param { boolean } incognito - {@code true} gets all stored geolocation permission url
     *                                source in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static getStoredGeolocation(callback: AsyncCallback<Array<string>>, incognito?: boolean): void;
  }

  /**
   * Provides methods for managing the web cookies.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides methods for managing the web cookies.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  class WebCookieManager {
    /**
     * Gets all cookies for the given URL.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @returns { string } - The cookie value for the given URL.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#fetchCookieSync
     */
    static getCookie(url: string): string;

    /**
     * Gets all cookies for the given URL.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @param { boolean } incognito - {@code true} gets all cookies for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @returns { string } - The cookie value for the given URL.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static fetchCookieSync(url: string, incognito?: boolean): string;

    /**
     * Gets all cookies for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @returns { Promise<string> } - A promise resolved after the cookies of given URL have been gotten.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static fetchCookie(url: string): Promise<string>;

     /**
     * Gets all cookies for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @param { boolean } incognito - {@code true} gets all cookies for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @returns { Promise<string> } - A promise resolved after the cookies of given URL have been gotten.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14
     */
    static fetchCookie(url: string, incognito: boolean): Promise<string>;

    /**
     * Gets all cookies for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @param { AsyncCallback<string> } callback - Called after the cookies of given URL have been gotten.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static fetchCookie(url: string, callback: AsyncCallback<string>): void;

    /**
     * Set a single cookie (key-value pair) for the given URL.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified 
     * <br>in RFC 6265. 
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#configCookieSync
     */
    static setCookie(url: string, value: string): void;

    /**
     * Set a single cookie (key-value pair) for the given URL.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified 
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static configCookieSync(url: string, value: string, incognito?: boolean): void;

    /**
     * Set a single cookie (key-value pair) for the given URL.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @param { boolean } includeHttpOnly - {@code true} HTTP-only cookies can also be overwritten;
     *                                      {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified 
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14
     */
    static configCookieSync(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): void;

    /**
     * Set a single cookie (key-value pair) for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @returns { Promise<void> } - A promise resolved after the cookies of given URL have been set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified 
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static configCookie(url: string, value: string): Promise<void>;

    /**
     * Set a single cookie (key-value pair) for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @param { boolean } includeHttpOnly - {@code true} HTTP-only cookies can also be overwritten;
     *                                      {@code false} otherwise.
     * @returns { Promise<void> } - A promise resolved after the cookies of given URL have been set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified 
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14
     */
    static configCookie(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): Promise<void>;

    /**
     * Set a single cookie (key-value pair) for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified 
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static configCookie(url: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * Save the cookies synchronously.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    static saveCookieSync(): void;

    /**
     * Save the cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Save the cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static saveCookieAsync(): Promise<void>;

    /**
     * Save the cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Save the cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static saveCookieAsync(callback: AsyncCallback<void>): void;

    /**
     * Get whether the instance can send and accept cookies.
     *
     * @returns { boolean } True if the instance can send and accept cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get whether the instance can send and accept cookies.
     *
     * @returns { boolean } True if the instance can send and accept cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static isCookieAllowed(): boolean;

    /**
     * Set whether the instance should send and accept cookies.
     * By default this is set to be true.
     *
     * @param { boolean } accept - Whether the instance should send and accept cookies.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set whether the instance should send and accept cookies.
     * By default this is set to be true.
     *
     * @param { boolean } accept - Whether the instance should send and accept cookies.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static putAcceptCookieEnabled(accept: boolean): void;

    /**
     * Get whether the instance can send and accept thirdparty cookies.
     *
     * @returns { boolean } True if the instance can send and accept thirdparty cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get whether the instance can send and accept thirdparty cookies.
     *
     * @returns { boolean } True if the instance can send and accept thirdparty cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static isThirdPartyCookieAllowed(): boolean;

    /**
     * Set whether the instance should send and accept thirdparty cookies.
     * By default this is set to be false.
     *
     * @param { boolean } accept - Whether the instance should send and accept thirdparty cookies.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set whether the instance should send and accept thirdparty cookies.
     * By default this is set to be false.
     *
     * @param { boolean } accept - Whether the instance should send and accept thirdparty cookies.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static putAcceptThirdPartyCookieEnabled(accept: boolean): void;

    /**
     * Check whether exists any cookies.
     *
     * @returns { boolean } True if exists more than one cookie else false;
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Check whether exists any cookies.
     *
     * @param { boolean } incognito - {@code true} check whether exists any cookies.
     *                                in incognito mode; {@code false} otherwise.
     * @returns { boolean } True if exists more than one cookie else false;
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Check whether exists any cookies.
     *
     * @param { boolean } incognito - {@code true} check whether exists any cookies.
     *                                in incognito mode; {@code false} otherwise.
     * @returns { boolean } True if exists more than one cookie else false;
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static existCookie(incognito?: boolean): boolean;

    /**
     * Remove all cookies.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#clearAllCookiesSync
     */
    static deleteEntireCookie(): void;

    /**
     * Remove all cookies.
     *
     * @param { boolean } incognito - {@code true} remove all cookies in incognito mode;
     *                                {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static clearAllCookiesSync(incognito?: boolean): void;

    /**
     * Remove all cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static clearAllCookies(): Promise<void>;

    /**
     * Remove all cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    static clearAllCookies(callback: AsyncCallback<void>): void;

    /**
     * Delete the session cookies.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#clearSessionCookieSync
     */
    static deleteSessionCookie(): void;

    /**
     * Delete the session cookies.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static clearSessionCookieSync(): void;

    /**
     * Delete the session cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static clearSessionCookie(): Promise<void>;

    /**
     * Delete the session cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Delete the session cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static clearSessionCookie(callback: AsyncCallback<void>): void;
  }

  /**
   * Enum type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Enum type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Enum type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enum WebMessageType {
    /**
     * Unsupported data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Unsupported data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NOT_SUPPORT,

    /**
     * The string data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The string data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The string data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    STRING,

    /**
     * The number data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The number data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The number data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    NUMBER,

    /**
     * The boolean data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The boolean data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The boolean data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    BOOLEAN,

    /**
     * The arraybuffer data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The arraybuffer data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ARRAY_BUFFER,

    /**
     * The array data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The array data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The array data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    ARRAY,

    /**
     * The error data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The error data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The error data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    ERROR
  }

  /**
   * The message received or sent from web message port.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * The message received or sent from web message port.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The message received or sent from web message port.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  class WebMessageExt {
    /**
     * Get the type of the web message.
     * @returns { WebMessageType } - Returns data of WebMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the type of the web message.
     * @returns { WebMessageType } - Returns data of WebMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the type of the web message.
     * @returns { WebMessageType } - Returns data of WebMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getType(): WebMessageType;

    /**
     * Get the string value of the web message.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the string value of the web message.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the string value of the web message.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getString(): string;

    /**
     * Get the number value of the web message.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the number value of the web message.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the number value of the web message.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getNumber(): number;

    /**
     * Get the boolean value of the web message.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the boolean value of the web message.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the boolean value of the web message.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getBoolean(): boolean;

    /**
     * Get the array buffer value of the web message.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the array buffer value of the web message.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * Get the array value of the web message.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the array value of the web message.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the array value of the web message.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getArray(): Array<string | number | boolean>;

    /**
     * Get the error value of the web message.
     * @returns { Error } - Returns data of Error type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the error value of the web message.
     * @returns { Error } - Returns data of Error type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the error value of the web message.
     * @returns { Error } - Returns data of Error type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getError(): Error;

    /**
     * Set the type of the web message.
     * @param { WebMessageType } type - set WebMessageType type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the type of the web message.
     * @param { WebMessageType } type - set WebMessageType type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the type of the web message.
     * @param { WebMessageType } type - set WebMessageType type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    setType(type: WebMessageType): void;

    /**
     * Set the string value of the web message.
     * @param { string } message - set string type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the string value of the web message.
     * @param { string } message - set string type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the string value of the web message.
     * @param { string } message - set string type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    setString(message: string): void;

    /**
     * Set the number value of the web message.
     * @param { number } message - set number type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the number value of the web message.
     * @param { number } message - set number type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the number value of the web message.
     * @param { number } message - set number type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    setNumber(message: number): void;

    /**
     * Set the boolean value of the web message.
     * @param { boolean } message - set boolean type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the boolean value of the web message.
     * @param { boolean } message - set boolean type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the boolean value of the web message.
     * @param { boolean } message - set boolean type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    setBoolean(message: boolean): void;

    /**
     * Set the array buffer value of the web message.
     * @param { ArrayBuffer } message - set ArrayBuffer type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the array buffer value of the web message.
     * @param { ArrayBuffer } message - set ArrayBuffer type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    setArrayBuffer(message: ArrayBuffer): void;

    /**
     * Set the array value of the web message.
     * @param { Array<string | number | boolean> } message - set Array type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the array value of the web message.
     * @param { Array<string | number | boolean> } message - set Array type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the array value of the web message.
     * @param { Array<string | number | boolean> } message - set Array type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    setArray(message: Array<string | number | boolean>): void;

    /**
     * Set the error value of the web message.
     * @param { Error } message - set Error type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the error value of the web message.
     * @param { Error } message - set Error type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the error value of the web message.
     * @param { Error } message - set Error type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    setError(message: Error): void;
  }

  /**
   * WebMessage type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * WebMessage type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @typedef { ArrayBuffer | string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  type WebMessage = ArrayBuffer | string;
  /**
   * Define html web message port.
   * @interface WebMessagePort
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Define html web message port.
   * @interface WebMessagePort
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Define html web message port.
   * @typedef WebMessagePort
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  interface WebMessagePort {
    /**
     * The flag indicates whether more formats are supported than string and array buffers.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The flag indicates whether more formats are supported than string and array buffers.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    isExtentionType?: boolean;

    /**
     * Close port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Close port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    close(): void;

    /**
     * Post a message to other port.
     * @param { WebMessage } message - Message to send.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Post a message to other port.
     * @param { WebMessage } message - Message to send.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    postMessageEvent(message: WebMessage): void;

    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onMessageEvent(callback: (result: WebMessage) => void): void;

    /**
     * Post a message to other port.
     * @param { WebMessageExt } message - Message to send.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Post a message to other port.
     * @param { WebMessageExt } message - Message to send.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Post a message to other port.
     * @param { WebMessageExt } message - Message to send.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    postMessageEventExt(message: WebMessageExt): void;

    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onMessageEventExt(callback: (result: WebMessageExt) => void): void;
  }

  /**
   * Provides information for history item in BackForwardList.
   * @interface HistoryItem
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides information for history item in BackForwardList.
   * @interface HistoryItem
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Provides information for history item in BackForwardList.
   * @typedef HistoryItem
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  interface HistoryItem {
    /**
     * Pixelmap of icon.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Pixelmap of icon.
     * @type { image.PixelMap }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    icon: image.PixelMap;

    /**
     * Url of this history item.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Url of this history item.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    historyUrl: string;

    /**
     * Original request url of this history item.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Original request url of this history item.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    historyRawUrl: string;

    /**
     * Title of this history item.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Title of this history item.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    title: string;
  }

  /**
   * Provides back and forward history list information method. related to {@link HistoryItem}.
   * @interface BackForwardList
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides back and forward history list information method. related to {@link HistoryItem}.
   * @interface BackForwardList
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Provides back and forward history list information method. related to {@link HistoryItem}.
   * @typedef BackForwardList
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  interface BackForwardList {
    /**
     * Current index in BackForwardList.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Current index in BackForwardList.
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    currentIndex: number;

    /**
     * Size of in BackForwardList.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Size of in BackForwardList.
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    size: number;

    /**
     * Get history entry at given index.
     *
     * @param { number } index Index of back forward list entry.
     * @returns { HistoryItem } HistoryItem at given index in back forward list.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get history entry at given index.
     *
     * @param { number } index Index of back forward list entry.
     * @returns { HistoryItem } HistoryItem at given index in back forward list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getItemAtIndex(index: number): HistoryItem;
  }

  /**
   * Defines the snapshot info.
   *
   * @typedef SnapshotInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  interface SnapshotInfo {
    /**
     * Id of the snapshot.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    id?: string;

    /**
     * Size of the web.
     *
     * @type { ?SizeOptions }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    size?: SizeOptions;
  }

  /**
   * Defines the snapshot result.
   *
   * @typedef SnapshotResult
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  interface SnapshotResult {
    /**
     * Id of the snapshot.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    id?: string;

    /**
     * The status of the snapshot.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    status?: boolean;

    /**
     * Size of the web.
     *
     * @type { ?SizeOptions }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    size?: SizeOptions;

    /**
     * The image in PixelMap format.
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    imagePixelMap?: image.PixelMap;
  }
  /**
   * Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enum JsMessageType {
    /**
     * Unsupported data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Unsupported data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NOT_SUPPORT,

    /**
     * The string data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The string data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The string data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    STRING,

    /**
     * The number data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The number data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The number data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    NUMBER,

    /**
     * The boolean data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The boolean data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The boolean data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    BOOLEAN,

    /**
     * The arraybuffer data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The arraybuffer data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ARRAY_BUFFER,

    /**
     * The array data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The array data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The array data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    ARRAY
  }

  /**
   * The message for indicating the of result of JavaScript code execution.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * The message for indicating the of result of JavaScript code execution.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The message for indicating the of result of JavaScript code execution.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  class JsMessageExt {
    /**
     * Get the type of the JavaScript code execution result.
     * @returns { JsMessageType } - Returns data of JsMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the type of the JavaScript code execution result.
     * @returns { JsMessageType } - Returns data of JsMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the type of the JavaScript code execution result.
     * @returns { JsMessageType } - Returns data of JsMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getType(): JsMessageType;

    /**
     * Get the string value of the JavaScript code execution result.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the string value of the JavaScript code execution result.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the string value of the JavaScript code execution result.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getString(): string;

    /**
     * Get the number value of the JavaScript code execution result.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the number value of the JavaScript code execution result.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the number value of the JavaScript code execution result.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getNumber(): number;

    /**
     * Get the boolean value of the JavaScript code execution result.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the boolean value of the JavaScript code execution result.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the boolean value of the JavaScript code execution result.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getBoolean(): boolean;

    /**
     * Get the array buffer value of the JavaScript code execution result.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the array buffer value of the JavaScript code execution result.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * Get the array value of the the JavaScript code execution result.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the array value of the the JavaScript code execution result.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the array value of the the JavaScript code execution result.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getArray(): Array<string | number | boolean>;
  }

  /**
   * Defines the render process mode.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  enum RenderProcessMode {
    /**
     * ArkWeb single rendering subprocess mode. In this mode, multiple Web pages reuse a rendering subprocess.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    SINGLE = 0,

    /**
     * ArkWeb multi-rendering subprocess mode. In this mode, there is one rendering subprocess per Web.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    MULTIPLE,
  }

  /**
   * Options of generating code cache
   * @typedef CacheOptions
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12
   */
  interface CacheOptions {
    /**
     * Response headers used to configure the validation key of code cache.
     * Currently only support E-Tag and Last-Modified.
     *
     * @type { Array<WebHeader> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    responseHeaders: Array<WebHeader>;
  }

  /**
   * Enum type supplied to {@link OfflineResourceMap} for indicating the type of resource.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12
   */
  enum OfflineResourceType {
    /**
     * Resource of the image type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    IMAGE,

    /**
     * Resource of the CSS type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    CSS,

    /**
     * Javascript resource loaded through the <script src="" /> tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    CLASSIC_JS,

    /**
     * Javascript resource loaded through the <script src="" type="module" /> tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    MODULE_JS
  }

  /**
   * Define offline resource's content and info.
   * @typedef OfflineResourceMap
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12
   */
  interface OfflineResourceMap {
    /**
     * Url list of resource. Url of urlList must be HTTP/HTTPS protocol and no longer than 2048.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    urlList: Array<string>,

    /**
     * Arraybuffer of resource. Size must less than 10Mb and cannot be empty.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    resource: Uint8Array,

    /**
     * Response headers of resource.
     *
     * @type { Array<WebHeader> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    responseHeaders: Array<WebHeader>,

    /**
     * Resource type
     *
     * @type { OfflineResourceType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    type: OfflineResourceType
  }

  /**
   * Enum type supplied to {@link setScrollable} for indicating the type of scroll.
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12
   */
  enum ScrollType {
    /**
     * Indicates scrolling the web page through scroll event, include touch screen, touch pad, and mouse wheel.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    EVENT
  }

  /**
   * Enum type supplied to {@link getAttachState} for indicating the attach state of controller.
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20
   */
  enum ControllerAttachState {
    /**
     * Indicates webviewController is not attached a web component.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    UNATTACHED = 0,

    /**
     * Indicates webviewController is attached a web component.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    ATTACHED = 1
  }

  /**
   * Enumerates the error codes of blankless. For details, see {@link setBlanklessLoadingWithKey} or {@link
   * BlanklessInfo}.
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20
   */
  enum WebBlanklessErrorCode {
    /**
     * The operation is successful.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    SUCCESS = 0,

    /**
     * Unknown error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    ERR_UNKNOWN = -1,

    /**
     * Invalid parameter.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    ERR_INVALID_PARAM = -2,

    /**
     * The web controller is not bound to any component.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    ERR_CONTROLLER_NOT_INITED = -3,

    /**
     * The key value is not matched. This error code is returned when the key values of
     * setBlanklessLodingWithKey and getBlanklessInfoWithKey are not matched.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    ERR_KEY_NOT_MATCH = -4,

    /**
     * The system determines that the change is too large when the similarity is less than 0.33. As a result,
     * the setBlanklessLodingWithKey API fails to enable frame interpolation.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    ERR_SIGNIFICANT_CHANGE = -5
  }
 
  /**
   * Defines the blankless information.
   *
   * @typedef BlanklessInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20
   */
  interface BlanklessInfo {
    /**
     * Defines the error codes of blankless.
     * @type { WebBlanklessErrorCode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    errCode: WebBlanklessErrorCode;

    /**
     * Obtains the similarity of snapshots generated by the blankless loading solution based on the last
     * several snapshots. The value ranges from 0 to 1.0. The value 1.0 indicates that the snapshots are the same. A
     * value closer to 1 indicates higher similarity. This value has a certain lag, meaning that the similarity of
     * the current loading will only be reflected in the next loading. It is recommended that the frame interpolation
     * functionality be disabled when the similarity is 0.
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    similarity: number;

    /**
     * Obtains the loading time based on the historical loading time. The unit is ms and the value is greater
     * than 0.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    loadingTime: number;
  }

  /**
   * Provides methods for controlling the web controller.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides methods for controlling the web controller.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * WebviewController can control various behaviors of Web components
   * (including page navigation, declaring cycle state, JavaScript interaction and so on).
   * A WebviewController object can only control one Web component,
   * and methods on the Webviewcontroller (except static methods) can only be called
   * after the web component is bound to the WebviewController.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  class WebviewController {
    /**
     * A constructor used to create a WebviewController object.
     *
     * @param { string } [webTag] - specified the name of the web component, Empty by default.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor(webTag?: string);

    /**
     * Initialize the web engine before loading the Web components.
     * This is a global static API that must be called on the UI thread, and it will have no effect if any
     * Web components are loaded.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Initialize the web engine before loading the Web components.
     * This is a global static API that must be called on the UI thread, and it will have no effect if any
     * Web components are loaded.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    static initializeWebEngine(): void;

    /**
     * Set web engine to use HttpDns server to resolve dns.
     * @param { SecureDnsMode } secureDnsMode - using HttpDns.
     * @param { string } secureDnsConfig - The configuration of the HttpDns server.
     *                   Must be https protocol and only allow one server to be configured.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set web engine to use HttpDns server to resolve dns.
     * @param { SecureDnsMode } secureDnsMode - using HttpDns.
     * @param { string } secureDnsConfig - The configuration of the HttpDns server.
     *                   Must be https protocol and only allow one server to be configured.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static setHttpDns(secureDnsMode: SecureDnsMode, secureDnsConfig: string): void;

    /**
     * Enables debugging of web contents.
     * @param { boolean } webDebuggingAccess {@code true} enables debugging of web contents; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Enables debugging of web contents.
     * @param { boolean } webDebuggingAccess {@code true} enables debugging of web contents; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets whether to enable web debugging. By default, web debugging is disabled.
     * For details, see Debugging Frontend Pages by Using DevTools.
     * 
     * <p><strong>API Note</strong>:<br>
     * Enabling web debugging allows users to check and modify the internal status of the web page,
     * which poses security risks. Therefore, you are advised not to enable this function
     * in the officially released version of the app.
     * </p>
     *
     * @param { boolean } webDebuggingAccess - Sets whether to enable web debugging.{@code true} enable web debugging;
                                               {@code false} disable web debugging. The default value is false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean): void;

    /**
     * Enable the ability to check website security risks.
     * Illegal and fraudulent websites are mandatory enabled and can't be disabled by this function.
     * @param { boolean } enable - {@code true} enable check the website security risks; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    enableSafeBrowsing(enable: boolean): void;

    /**
     * Get whether checking website security risks is enabled.
     * @returns { boolean } True if enable the ability to check website security risks else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    isSafeBrowsingEnabled(): boolean;

    /**
     * Checks whether the web page can go forward.
     * @returns { boolean } True if the web page can go forward else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Checks whether the web page can go forward.
     * @returns { boolean } True if the web page can go forward else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    accessForward(): boolean;

    /**
     * Checks whether the web page can go back.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Checks whether the web page can go back.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    accessBackward(): boolean;

    /**
     * Checks whether the web page can go back or forward the given number of steps.
     *
     * @param { number } step - The number of steps.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Checks whether the web page can go back or forward the given number of steps.
     *
     * @param { number } step - The number of steps.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    accessStep(step: number): boolean;

    /**
     * Goes forward in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Goes forward in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    forward(): void;

    /**
     * Goes back in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Goes back in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    backward(): void;

    /**
     * Clears the history in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the history in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    clearHistory(): void;

    /**
     * Let the Web active.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Call this interface to notify the Web component to enter the foreground activation state.
     * The activation state is the state in which the application interacts with the user.
     * The application will remain in this state until something happens,
     * such as receiving an incoming call or closing the screen of the device,
     * to shift the focus away from the application.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    onActive(): void;

    /**
     * Let the Web inactive.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Call this interface to notify the Web component to enter the inactive state.
     * In this callback, the developer can realize the appropriate behavior when the application loses focus.
     * In this state, any content that can be safely paused will be paused as much as possible,
     * such as animation and geographical location. However, JavaScript will not be paused.
     * To pause JavaScript globally, please use {@link pauseAllTimers}.To reactivate the Web component, call onActive.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    onInactive(): void;

    /**
     * Refreshes the current URL.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Refreshes the current URL.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    refresh(): void;

    /**
     * Loads the data or URL.
     *
     * @param { string } data - A string encoded according to "Base64" or "URL".
     * @param { string } mimeType - Media type. For example: "text/html".
     * @param { string } encoding - Encoding type. For example: "UTF-8".
     * @param { string } [baseUrl] - A specified URL path ("http"/"https"/"data" protocol),
     *                             which is assigned to window.origin by the Web component.
     * @param { string } [historyUrl] - History URL. When it is not empty, it can be managed by
     *                                history records to realize the back and forth function.
     *                                This property is invalid when baseUrl is empty.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Loads the data or URL.
     *
     * @param { string } data - A string encoded according to "Base64" or "URL".
     * @param { string } mimeType - Media type. For example: "text/html".
     * @param { string } encoding - Encoding type. For example: "UTF-8".
     * @param { string } [baseUrl] - A specified URL path ("http"/"https"/"data" protocol),
     *                             which is assigned to window.origin by the Web component.
     * @param { string } [historyUrl] - History URL. When it is not empty, it can be managed by
     *                                history records to realize the back and forth function.
     *                                This property is invalid when baseUrl is empty.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void;

    /**
     * Loads the data or URL.
     *
     * @param { string | Resource } url - The URL to load.
     * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Loads the data or URL.
     *
     * @param { string | Resource } url - The URL to load.
     * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the data or URL.
     *
     * @param { string | Resource } url - The URL to load.
     * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    loadUrl(url: string | Resource, headers?: Array<WebHeader>): void;

    /**
     * Gets the type of HitTest.
     * @returns { WebHitTestType } The type of HitTest.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the type of HitTest.
     * @returns { WebHitTestType } The type of HitTest.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     * @deprecated since 18
     * @useinstead ohos.web.webview.WebviewController#getLastHitTest
     */
    getHitTest(): WebHitTestType;

    /**
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *                               stored by the file name of baseName. If true, the file name is
     *                               automatically generated based on the current URL and stored in the file
     *                               directory of baseName.
     * @returns { Promise<string> } a promise resolved after the web archive has been stored. The parameter
     *                              will either be the filename under which the file was stored, or empty
     *                              if storing the file failed.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *                               stored by the file name of baseName. If true, the file name is
     *                               automatically generated based on the current URL and stored in the file
     *                               directory of baseName.
     * @returns { Promise<string> } a promise resolved after the web archive has been stored. The parameter
     *                              will either be the filename under which the file was stored, or empty
     *                              if storing the file failed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    storeWebArchive(baseName: string, autoName: boolean): Promise<string>;

    /**
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *                               stored by the file name of baseName. If true, the file name is
     *                               automatically generated based on the current URL and stored in the file
     *                               directory of baseName.
     * @param { AsyncCallback<string> } callback - called after the web archive has been stored. The parameter
     *                                             will either be the filename under which the file was stored,
     *                                             or empty if storing the file failed.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *                               stored by the file name of baseName. If true, the file name is
     *                               automatically generated based on the current URL and stored in the file
     *                               directory of baseName.
     * @param { AsyncCallback<string> } callback - called after the web archive has been stored. The parameter
     *                                             will either be the filename under which the file was stored,
     *                                             or empty if storing the file failed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    storeWebArchive(baseName: string, autoName: boolean, callback: AsyncCallback<string>): void;

    /**
     * Let the Web zoom by.
     *
     * @param { number } factor - The zoom factor.
     *                            Reduced when the input parameter is less than 1. Enlarged when the input parameter is greater than 1.Value range: (0, 100].
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Let the Web zoom by.
     *
     * <p><strong>API Note</strong>:<br>
     * zoomAccess must be true.
     * </p>
     *
     * @param { number } factor - The zoom factor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    zoom(factor: number): void;

    /**
     * Let the Web zoom in.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Let the Web zoom in.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Let the Web zoom in.
     * Call this interface to enlarge the current page by 25%.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    zoomIn(): void;

    /**
     * Let the Web zoom out.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Let the Web zoom out.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Let the Web zoom out.
     * Call this interface to shrink the current page by 20%.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    zoomOut(): void;

    /**
     * Gets the hit test value of HitTest.
     * @returns { HitTestValue } Return the element information of the clicked area.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the element information of the currently clicked area.
     * @returns { HitTestValue } Return the element information of the clicked area.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     * @deprecated since 18
     * @useinstead ohos.web.webview.WebviewController#getLastHitTest
     */
    getHitTestValue(): HitTestValue;

    /**
     * Gets the id for the current Web.
     * @returns { number } Returns the index value of the current Web component.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the id for the current Web.
     * @returns { number } Returns the index value of the current Web component.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the index value of the current Web component for the management of multiple Web components.
     * @returns { number } Returns the index value of the current Web component.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    getWebId(): number;

    /**
     * Gets the default user agent.
     * @returns { string } Return user agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the default user agent.
     * @returns { string } Return user agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getUserAgent(): string;

    /**
     * Gets the title of current Web page.
     * @returns { string } Return to File Selector Title.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the title of current Web page.
     * @returns { string } Return to File Selector Title.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    getTitle(): string;

    /**
     * Gets the content height of current Web page.
     * @returns { number } Returns the page height of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Obtains the height of this web page.
     * @returns { number } Height of the current web page. Unit: vp.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    getPageHeight(): number;

    /**
     * Goes forward or back backOrForward in the history of the web page.
     *
     * @param { number } step - Steps to go forward or backward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Goes forward or back backOrForward in the history of the web page.
     *
     * @param { number } step - Steps to go forward or backward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    backOrForward(step: number): void;

    /**
     * Gets the request focus.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the request focus.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    requestFocus(): void;

    /**
     * Create web message ports
     * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
     *                                    those ports to communication with html pages.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Create web message ports
     * @param { boolean } isExtentionType - Set whether the web message port supports extention type.
     * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
     *                                    those ports to communication with html pages.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Create web message ports
     * @param { boolean } isExtentionType - Set whether the web message port supports extention type.
     * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
     *                                    those ports to communication with html pages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    createWebMessagePorts(isExtentionType?: boolean): Array<WebMessagePort>;

    /**
     * Post web message port to html
     *
     * @param { string } name - Data name information to send.
     * @param { Array<WebMessagePort> } ports - Port number array information to send.
     * @param { string } uri - URI to receive this information.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Post web message port to html
     *
     * @param { string } name - Data name information to send.
     * @param { Array<WebMessagePort> } ports - Port number array information to send.
     * @param { string } uri - URI to receive this information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    postMessage(name: string, ports: Array<WebMessagePort>, uri: string): void;

    /**
     * Stops the current load.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Stops the current load.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    stop(): void;

    /**
     * Registers the JavaScript object and method list.
     *
     * @param { object } object - Application side JavaScript objects participating in registration.
     * @param { string } name - The name of the registered object, which is consistent with the
     *                          object name called in the window.
     * @param { Array<string> } methodList - Thr method of the application side JavaScript object participating
     *                                       in the registration.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Registers the JavaScript object and method list.
     *
     * @param { object } object - Application side JavaScript objects participating in registration.
     * @param { string } name - The name of the registered object, which is consistent with the
     *                          object name called in the window.
     * @param { Array<string> } methodList - Thr method of the application side JavaScript object participating
     *                                       in the registration.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Registers the supplied ArkTS object into this Web component.
     * The object is registered into all frames of the web page, including all iframes, using the specified name.
     * This allows the methods of the ArkTS object to be accessed from JavaScript.
     * <p><strong>API Note</strong>:<br>
     * Registed objects will not appear in JavaScript until the page is next (re)load.
     * To avoid memory leaks, registerJavaScriptProxy must be used together with deleteJavaScriptProxy.
     * To avoid security risks, it is recommended that registerJavaScriptProxy be used with trusted web components.
     * If the same method is registered repeatedly in both synchronous and asynchronous list, it will default to an asynchronous method.
     * The synchronous function list and asynchronous function list cannot be empty at the same time.<br>
     * otherwise, this registration will fail.
     *  <p>
     *
     * @param { object } object - Application side JavaScript objects participating in registration.
     * @param { string } name - The name of the registered object, which is consistent with the
     *                          object name called in the window.
     * @param { Array<string> } methodList - The method of the application side JavaScript object participating
     *                                       in the registration.
     * @param { Array<string> } [asyncMethodList] - The async method of the application side JavaScript object
     *                                            participating in the registration.
     * @param { string } [permission] - permission configuration defining web page URLs that can access JavaScriptProxy methods.
     *                                The configuration can be defined at two levels, object level and method level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Registers the supplied ArkTS object into this Web component.
     * The object is registered into all frames of the web page, including all iframes, using the specified name.
     * This allows the methods of the ArkTS object to be accessed from JavaScript.
     * <p><strong>API Note</strong>:<br>
     * Registed objects will not appear in JavaScript until the page is next (re)load.
     * To avoid memory leaks, registerJavaScriptProxy must be used together with deleteJavaScriptProxy.
     * To avoid security risks, it is recommended that registerJavaScriptProxy be used with trusted web components.
     * If the same method is registered repeatedly in both synchronous and asynchronous list, it will default to an asynchronous method.
     * The synchronous function list and asynchronous function list cannot be empty at the same time.<br>
     * otherwise, this registration will fail.
     *  <p>
     *
     * @param { object } object - Application side JavaScript objects participating in registration.
     * @param { string } name - The name of the registered object, which is consistent with the
     *                          object name called in the window.
     * @param { Array<string> } methodList - The method of the application side JavaScript object participating
     *                                       in the registration.
     * @param { Array<string> } [asyncMethodList] - The async method of the application side JavaScript object
     *                                            participating in the registration.
     * @param { string } [permission] - permission configuration defining web page URLs that can access JavaScriptProxy methods.
     *                                The configuration can be defined at two levels, object level and method level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    registerJavaScriptProxy(object: object, name: string, methodList: Array<string>,
        asyncMethodList?: Array<string>, permission?: string): void;

    /**
     * Deletes a registered JavaScript object with given name.
     *
     * @param { string } name - The name of a registered JavaScript object to be deleted.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100008 - Failed to delete JavaScriptProxy because it does not exist.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Deletes a registered JavaScript object with given name.
     *
     * @param { string } name - The name of a registered JavaScript object to be deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100008 - Failed to delete JavaScriptProxy because it does not exist.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Deletes a registered JavaScript object with given name.
     *
     * @param { string } name - The name of a registered JavaScript object to be deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100008 - Failed to delete JavaScriptProxy because it does not exist.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    deleteJavaScriptRegister(name: string): void;

    /**
     * Search all instances of 'searchString' on the page and highlights them,
     * result will be notify through callback onSearchResultReceive.
     *
     * @param { string } searchString - String to be search.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                         The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Search all instances of 'searchString' on the page and highlights them,
     * result will be notify through callback onSearchResultReceive.
     *
     * @param { string } searchString - String to be search.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                         The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    searchAllAsync(searchString: string): void;

    /**
     * Clears the highlighting surrounding text matches created by searchAllAsync.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the highlighting surrounding text matches created by searchAllAsync.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    clearMatches(): void;

    /**
     * Highlights and scrolls to the next match search.
     *
     * @param { boolean } forward - Step of search is back or forward.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Highlights and scrolls to the next match search.
     *
     * @param { boolean } forward - Step of search is back or forward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    searchNext(forward: boolean): void;

    /**
     * Clears the ssl cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the ssl cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    clearSslCache(): void;

    /**
     * Clears the client authentication certificate cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the client authentication certificate cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    clearClientAuthenticationCache(): void;

    /**
     * Loads a piece of code and execute JS code in the context of the currently displayed page.
     *
     * @param { string } script - JavaScript Script.
     * @returns { Promise<string> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              null will be returned.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Asynchronously execute JavaScript in the context of the currently displayed page.
     * The result of the script execution will be returned through a via Promise.
     * This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
     * <p><strong>API Note</strong>:<br>
     * The state of JavaScript is no longer persisted across navigations like loadUrl.
     * For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.<br>
     * It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.<br>
     * If you cannot obtain the return value by executing the asynchronous method, 
     * you need to determine whether to use synchronous or asynchronous mode based on the specific situation.
     * <p>
     *
     * @param { string } script - JavaScript Script.
     * @returns { Promise<string> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              null will be returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    runJavaScript(script: string): Promise<string>;

    /**
     * Loads a piece of code and execute JS code in the context of the currently displayed page.
     *
     * @param { string } script - JavaScript Script.
     * @param { AsyncCallback<string> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Asynchronously execute JavaScript in the context of the currently displayed page.
     * The result of the script execution will be returned through an asynchronous callback.
     * This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
     * <p><strong>API Note</strong>:<br>
     * The state of JavaScript is no longer persisted across navigations like loadUrl.
     * For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.
     * It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.
     * <p>
     *
     * @param { string } script - JavaScript Script.
     * @param { AsyncCallback<string> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    runJavaScript(script: string, callback: AsyncCallback<string>): void;

    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string } script - JavaScript Script.
     * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              a none type value will be returned.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string } script - JavaScript Script.
     * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              a none type value will be returned.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string | ArrayBuffer } script - JavaScript Script.
     * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              a none type value will be returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
     /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string | ArrayBuffer } script - JavaScript Script.
     * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              a none type value will be returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    runJavaScriptExt(script: string | ArrayBuffer): Promise<JsMessageExt>;

    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string } script - JavaScript Script.
     * @param { AsyncCallback<JsMessageExt> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string } script - JavaScript Script.
     * @param { AsyncCallback<JsMessageExt> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string | ArrayBuffer } script - JavaScript Script.
     * @param { AsyncCallback<JsMessageExt> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string | ArrayBuffer } script - JavaScript Script.
     * @param { AsyncCallback<JsMessageExt> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>): void;

    /**
     * Rendering current Web page into Pdf data, return the result in async mode.
     *
     * @param { PdfConfiguration } configuration - configuration for createPdf,
     *                                             including page width and height, etc.
     *                                             {@Link PdfConfiguration}
     * @param { AsyncCallback<PdfData> } callback - Callbacks execute createPdf results.
     *                                              PdfData is pdf data stream of current web page in Uint8Array
     *                                              {@Link PdfData}.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>): void;

    /**
     * Rendering current Web page into Pdf data, return the result in promise mode.
     *
     * @param { PdfConfiguration } configuration - configuration for createPdf,
     *                                             including page width and height, etc.
     *                                             {@Link PdfConfiguration}
     * @returns { Promise<PdfData> } The promise returned by the function.
     *                               PdfData is pdf data stream of current web page in Uint8Array
     *                               {@Link PdfData}.
     *                               If createPdf fails or no return value,
     *                               a none type value will be returned.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    createPdf(configuration: PdfConfiguration): Promise<PdfData>;

    /**
     * Gets the url of current Web page.
     * @returns { string } Return the url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the url of current Web page.
     * @returns { string } Return the url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    getUrl(): string;

    /**
     * Scroll the contents of this Webview up by half the view size.
     *
     * @param { boolean } top - Whether to jump to the top of the page, if set to false,
     *                          the page content will scroll up half the size of the viewframe,
     *                          and when set to true, it will jump to the top of the page.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Scroll the contents of this Webview up by half the view size.
     *
     * @param { boolean } top - Whether to jump to the top of the page, if set to false,
     *                          the page content will scroll up half the size of the viewframe,
     *                          and when set to true, it will jump to the top of the page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Scroll the contents of this Webview up by half the view size.
     *
     * @param { boolean } top - Whether to jump to the top of the page, if set to false,
     *                          the page content will scroll up half the size of the viewframe,
     *                          and when set to true, it will jump to the top of the page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    pageUp(top: boolean): void;

    /**
     * Scroll the contents of this Webview down by half the view size.
     *
     * @param { boolean } bottom - Whether to jump to the top of the page, if set to false,
     *                             the page content will scroll up half the size of the viewframe,
     *                             and when set to true, it will jump to the top of the page.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Scroll the contents of this Webview down by half the view size.
     *
     * @param { boolean } bottom - Whether to jump to the top of the page, if set to false,
     *                             the page content will scroll up half the size of the viewframe,
     *                             and when set to true, it will jump to the top of the page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Scroll the contents of this Webview down by half the view size.
     *
     * @param { boolean } bottom - Whether to jump to the top of the page, if set to false,
     *                             the page content will scroll up half the size of the viewframe,
     *                             and when set to true, it will jump to the top of the page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    pageDown(bottom: boolean): void;

    /**
     * Gets the original url of current Web page.
     * @returns { string } Return the original url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the original url of current Web page.
     * @returns { string } Return the original url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the original url of current Web page.
     * @returns { string } Return the original url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    getOriginalUrl(): string;

    /**
     * Gets the favicon of current Web page.
     * @returns { image.PixelMap } Return the favicon bitmap of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the favicon of current Web page.
     * @returns { image.PixelMap } Return the favicon bitmap of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getFavicon(): image.PixelMap;

    /**
     * Put network state for web. Which is used to set window.navigator.onLine property in
     * JavaScript.
     * @param { boolean } enable - Whether enable window.navigator.onLine.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Put network state for web. Which is used to set window.navigator.onLine property in
     * JavaScript.
     * @param { boolean } enable - Whether enable window.navigator.onLine.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    setNetworkAvailable(enable: boolean): void;

    /**
     * Query if current document has image.
     *
     * @returns { Promise<boolean> } A promise resolved after query image has finished.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Asynchronous search for image existence on the current page through Promise method.
     *
     * @returns { Promise<boolean> } A promise resolved after query image has finished.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    hasImage(): Promise<boolean>;

    /**
     * Query if current document has image.
     *
     * @param { AsyncCallback<boolean> } callback - Called after query image has finished.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Asynchronous search for the presence of an image on the current page through callback method.
     *
     * @param { AsyncCallback<boolean> } callback - Called after query image has finished.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    hasImage(callback: AsyncCallback<boolean>): void;

    /**
     * Get back forward stack list from current webview.
     * @returns { BackForwardList } Back forward list for current webview.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get back forward stack list from current webview.
     * @returns { BackForwardList } Back forward list for current webview.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getBackForwardEntries(): BackForwardList;

    /**
     * Remove resource cache in application. So this method will remove all cache for all web components in the
     * same application.
     *
     * @param { boolean } clearRom - Remove cache in both rom and ram if true. Otherwise only clear cache
     *                               in ram.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the cache in the application. This API will clear the cache for all webviews in the same application.
     *
     * <p><strong>API Note</strong>:<br>
     * You can view the Webview cache in the data/storage/el2/base/cache/web/Cache directory.
     * </p>
     *
     * @param { boolean } clearRom - Whether to clear the cache in the ROM and RAM at the same time.
     *                               {@code true} means to clear the cache in the ROM and RAM at the same time;
     *                               {@code false} means to only clear the cache in the RAM.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    removeCache(clearRom: boolean): void;

    /**
     * Remove resource cache in application. So this method will remove all cache for all web components in the
     * same application.
     *
     * @param { boolean } clearRom - Remove cache in both rom and ram if true. Otherwise only clear cache
     *                               in ram.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18
     */
    static removeAllCache(clearRom: boolean): void;

    /**
     * Scroll to the position.
     *
     * @param { number } x - the x of the position.
     * @param { number } y - the y of the position.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Scroll to the position.
     *
     * @param { number } x - the x of the position.
     * @param { number } y - the y of the position.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Scroll to the position.
     *
     * @param { number } x - the x of the position.Unit: vp.
     * @param { number } y - the y of the position.Unit: vp.
     * @param { number } duration - the scroll animation duration. Unit: millisecond.
     *                              If the value is not passed, or is negative or 0, there is no animation.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    scrollTo(x: number, y: number, duration?: number): void;

    /**
     * Scroll by the delta position.
     *
     * @param { number } deltaX - the delta x of the position.
     * @param { number } deltaY - the delta y of the position.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Scroll by the delta position.
     *
     * @param { number } deltaX - the delta x of the position.
     * @param { number } deltaY - the delta y of the position.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Scroll by the delta position.
     *
     * <p><strong>API Note</strong>:<br>
     * In nested scroll scenarios, calling scrollBy does not trigger nested scrolling in the parent component.
     * </p>
     *
     * @param { number } deltaX - the delta x of the position.Unit: vp.
     * @param { number } deltaY - the delta y of the position.Unit: vp.
     * @param { number } duration - the scroll animation duration. Unit: millisecond.
     *                              If the value is not passed, or is negative or 0, there is no animation.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    scrollBy(deltaX: number, deltaY: number, duration?: number): void;

    /**
     * Slide by the speed.
     *
     * @param { number } vx - the x speed of the speed.
     * @param { number } vy - the y speed of the speed.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Slide by the speed.
     *
     * @param { number } vx - the x speed of the speed.
     * @param { number } vy - the y speed of the speed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    slideScroll(vx: number, vy: number): void;

    /**
     * Serialize the access stack of the web, that is, the history of access.
     * @returns { Uint8Array } Web access stack after serialization.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Serialize the access stack of the web, that is, the history of access.
     * @returns { Uint8Array } Web access stack after serialization.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    serializeWebState(): Uint8Array;

    /**
     * Restoring the web access stack, that is, the history of access.
     * @param { Uint8Array } state - Web access stack after serialization.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Restoring the web access stack, that is, the history of access.
     * @param { Uint8Array } state - Web access stack after serialization.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    restoreWebState(state: Uint8Array): void;

    /**
     * Set whether the Web custom scheme supports cross domain and fetch requests.
     * @param { Array<WebCustomScheme> } schemes - Configuration of web custom scheme.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set whether the Web custom scheme supports cross domain and fetch requests.
     * @param { Array<WebCustomScheme> } schemes - Configuration of web custom scheme.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Register Web custom schemes.
     * @param { Array<WebCustomScheme> } schemes - Configuration of web custom scheme.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100020 - Failed to register custom schemes.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static customizeSchemes(schemes: Array<WebCustomScheme>): void;

    /**
     * Get certificate for the current website.
     * @returns { Promise<Array<cert.X509Cert>> } the promise of the current website's certificate.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get certificate for the current website.
     * @returns { Promise<Array<cert.X509Cert>> } the promise of the current website's certificate.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getCertificate(): Promise<Array<cert.X509Cert>>;

    /**
     * Get certificate for the current website.
     * @param {AsyncCallback<Array<cert.X509Cert>>} callback - the callback of getCertificate.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get certificate for the current website.
     * @param {AsyncCallback<Array<cert.X509Cert>>} callback - the callback of getCertificate.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getCertificate(callback: AsyncCallback<Array<cert.X509Cert>>): void;

    /**
     * Set audio muted.
     * @param { boolean } mute - Set the audio muted or not.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set webpage mute.
     * @param { boolean } mute - Set the audio muted or not.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    setAudioMuted(mute: boolean): void;

    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    prefetchPage(url: string, additionalHeaders?: Array<WebHeader>): void;

    /**
     * Preresolve or Preconnect the url. This API can be called before loading the url to make loading faster.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { boolean } preconnectable - Indicates whether to preconnect.
     * @param { number } numSockets - If preconnectable is true, this parameter indicates the number of sockets to be preconnected.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @throws { BusinessError } 17100013 - The number of preconnect sockets is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Preresolve or Preconnect the url. This API can be called before loading the url to make loading faster.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { boolean } preconnectable - Indicates whether to preconnect.
     * @param { number } numSockets - If preconnectable is true, this parameter indicates the number of sockets to be preconnected.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @throws { BusinessError } 17100013 - The number of preconnect sockets is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static prepareForPageLoad(url: string, preconnectable: boolean, numSockets: number): void;

    /**
     * Set custom user agent.
     * @param { string } userAgent - User custom agent information.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set custom user agent.
     * @param { string } userAgent - User custom agent information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setCustomUserAgent(userAgent: string): void;

    /**
     * Get custom user agent.
     * @returns { string } Get custom User agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get custom user agent.
     * @returns { string } Get custom User agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getCustomUserAgent(): string;

    /**
     * Set web engine socket connection timeout.
     * @param { number } timeout - Socket connection timeout.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static setConnectionTimeout(timeout: number): void;

    /**
     * Set delegate for download.
     * Used to notify the progress of the download triggered from web.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from web.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set delegate for download.
     * Used to notify the progress of the download triggered from web.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from web.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    setDownloadDelegate(delegate: WebDownloadDelegate): void;

    /**
     * Start a download.
     * @param { string } url - The download url.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Start a download.
     * @param { string } url - The download url.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    startDownload(url: string): void;

    /**
     * Loads the URL use "POST" method with post data.
     *
     * @param { string } url - Request the URL use "POST" method.
     * @param { ArrayBuffer } postData - This data will passed to "POST" request.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Loads the URL use "POST" method with post data.
     *
     * @param { string } url - Request the URL use "POST" method.
     * @param { ArrayBuffer } postData - This data will passed to "POST" request.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    postUrl(url: string, postData: ArrayBuffer): void;

    /**
     * Creates a PrintDocumentAdapter instance to provide content for printing.
     * @param { string } jobName - Name of the file to print.
     * @returns { print.PrintDocumentAdapter } Return PrintDocumentAdapter instance created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 11
     */
    createWebPrintDocumentAdapter(jobName: string): print.PrintDocumentAdapter;

    /**
     * Get the security level of the current page.
     *
     * @returns { SecurityLevel } the security level of current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getSecurityLevel(): SecurityLevel;

    /**
     * Whether the incognito mode is set.
     *
     * @returns { boolean } {@code true} has been set the incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    isIncognitoMode(): boolean;

    /**
     * Set whether scroll is allowed
     *
     * @param { boolean } enable - Set whether scrolling is allowed
     *                             {@code true} means scrolling is allowed.
     *                             {@code false} means scrolling is disabled.
     * @param { ScrollType } type - Enable scrolling type
     *                              When the input parameter enable is false, it indicates that scrolling of the ScrollType type is prohibited.When ScrollType
     *                              is not specified,it indicates that all types of webpage scrolling are prohibited.
     *                              When the input parameter enable is true, regardless of whether ScrollType is specified, it indicates that all types
     *                              of webpage scrolling are allowed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setScrollable(enable: boolean, type?: ScrollType): void;

    /**
     * Get whether scrolling is allowed.
     * @returns { boolean } Get scrolling is allowed information.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    getScrollable(): boolean;

    /**
     * Set whether print web page background.
     *
     * @param { boolean } enable - Set whether print web page background
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setPrintBackground(enable: boolean): void;

    /**
     * Get whether print web page background.
     * @returns { boolean } Get whether print web page background.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getPrintBackground(): boolean;

    /**
     * Get the url of the last frame that calls the JavaScriptProxy.
     * This should be called on the UI thread.
     *
     * @returns { string } The url of the last frame that calls the JavaScriptProxy.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    getLastJavascriptProxyCallingFrameUrl(): string;

    /**
     * Start current camera, and before using the camera function, please add the permission in module.json5: ohos.permission.CAMERA.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    startCamera(): void;

    /**
     * Stop current camera.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    stopCamera(): void;

    /**
     * Close current camera.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    closeCamera(): void;

    /**
     * Pause all WebView timers.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static pauseAllTimers(): void;

    /**
     * Resume all timers suspended from the pauseAllTimers() interface.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static resumeAllTimers(): void;

    /**
     * Stop all audio and video playback on the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    stopAllMedia(): void;

    /**
     * Resumes the playback of the audio and video that are paused by the pauseAllMedia interface.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    resumeAllMedia(): void;

    /**
     * Pause all audio and video playback on the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    pauseAllMedia(): void;

    /**
     * Closes all full-screen videos on a web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    closeAllMediaPresentations(): void;

    /**
     * View the playback status of all audio and video on the web page.
     *
     * @returns { MediaPlaybackState } The playback status of all audio and video.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getMediaPlaybackState(): MediaPlaybackState;

    /**
     * Set web scheme handler for specific scheme. This is only used for related web component.
     *
     * @param { string } scheme - String value for url scheme.
     * @param { WebSchemeHandler } handler - Web scheme handler.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void;

    /**
     * Clear all web scheme handlers for related web component.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    clearWebSchemeHandler(): void;

    /**
     * Set web scheme handler for specific scheme. This is used for service worker.
     * @param { string } scheme - String value for url scheme.
     * @param { WebSchemeHandler } handler - Web scheme handler.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static setServiceWorkerWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void;

    /**
     * Clear all web service worker scheme handlers.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static clearServiceWorkerWebSchemeHandler(): void;

    /**
     * Enable the ability to use Intelligent Tracking Prevention; default is disabled.
     *
     * @param { boolean } enable {@code true} enable Intelligent Tracking Prevention; {@code false} otherwise.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Enable the ability to use Intelligent Tracking Prevention; default is disabled.
     *
     * @param { boolean } enable {@code true} enable Intelligent Tracking Prevention; {@code false} otherwise.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    enableIntelligentTrackingPrevention(enable: boolean): void;

    /**
     * Get whether Intelligent Tracking Prevention is enabled.
     *
     * @returns { boolean } True if enable the Intelligent Tracking Prevention; else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Get whether Intelligent Tracking Prevention is enabled.
     *
     * @returns { boolean } True if enable the Intelligent Tracking Prevention; else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    isIntelligentTrackingPreventionEnabled(): boolean;

    /**
     * Add bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts that bypass the Intelligent Tracking Prevention.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Add bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts that bypass the Intelligent Tracking Prevention.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static addIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;

    /**
     * Remove bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts needs to remove from bypass list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Remove bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts needs to remove from bypass list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static removeIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;

    /**
     * Clear bypassing hosts for Intelligent Tracking Prevention.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Clear bypassing hosts for Intelligent Tracking Prevention.
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static clearIntelligentTrackingPreventionBypassingList(): void;

    /**
     * Get the default user agent.
     *
     * @returns {string} The default user agent string.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14
     */
    static getDefaultUserAgent(): string;

    /**
     * Register a callback to intercept web pages playing media.
     *
     * @param { CreateNativeMediaPlayerCallback } callback - Called everytime when web pages try to play media.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onCreateNativeMediaPlayer(callback: CreateNativeMediaPlayerCallback): void;

    /**
     * Enables the full drawing capability for the web page. 
     * This API works only during Web component initialization.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static enableWholeWebPageDrawing(): void;

    /**
     * Web page snapshot.
     *
     * <p><strong>API Note</strong>:<br>
     * Only screenshots of assets on the rendering process are supported: still images and text.
     * If there is a video on the page, the placeholder image of the video will be displayed when you take a screenshot,
     * and blank if there is no placeholder.
     * </p>
     *
     * @param { SnapshotInfo } info - The snapshot info.
     * @param { AsyncCallback<SnapshotResult> } callback - the callback of snapshot.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    webPageSnapshot(info: SnapshotInfo, callback: AsyncCallback<SnapshotResult>): void;

    /**
     * Prefetches resource requests based on specified request information and additional HTTP request headers,
     * saves the requests to the memory cache, and specifies the cache key and validity period to accelerate loading.
     * Currently, only POST requests whose Content-Type is application/x-www-form-urlencoded are supported.
     * A maximum of six POST requests can be pre-obtained. To prefetch the seventh post request,
     * call API{@link clearPrefetchedResource} to clear the cache of unnecessary post requests.
     * Otherwise, the cache of the earliest prefetched POST request will be automatically cleared.
     * To use the prefetched resource cache, you need to add the key value ArkWebPostCacheKey to the header of the POST request.
     * The content of the key value is the cacheKey of the corresponding cache.
     * @param { RequestInfo } request - The information of the request.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the request.
     * @param { string } [cacheKey] - The key for memory cache. Default value is the url of the request.
     *    Only support number and letters.
     * @param { number } [cacheValidTime] - The valid time of the cache for request, ranges greater than 0.
     *    The unit is second. Default value is 300s.
     *    The value of cacheValidTime must between 1 and 2147483647.
     * @throws { BusinessError } 401 - Invalid input parameter.Possible causes: 1. Mandatory parameters are left unspecified.
     *    2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static prefetchResource(request: RequestInfo, additionalHeaders?: Array<WebHeader>, cacheKey?: string,
      cacheValidTime?: number): void;

    /**
    * Clears the cache of prefetched resources based on the specified cache key list.
    * The cache key in the input parameter must be the prefetched resource cache key specified by API{@link prefetchResource}.
    * @param { Array<string> } cacheKeyList - The keys for memory cache.
    *    The key in cacheKeyList only support number and letters.
    * @syscap SystemCapability.Web.Webview.Core
    * @atomicservice
    * @since 12
    */
    static clearPrefetchedResource(cacheKeyList: Array<string>): void;

    /**
     * Set render process mode of the ArkWeb.
     *
     * @param { RenderProcessMode } mode - The render process mode for the ArkWeb.
     *        Call {@link getRenderProcessMode} to get the ArkWeb rendering subprocess mode of the current device.
     *        The enumerated value **0** indicates the single render subprocess mode,
     *        and **1** indicates the multi-render subprocess mode.
     *        If an invalid number other than the enumerated value of **RenderProcessMode** is passed,
     *        the multi-render subprocess mode is used by default.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static setRenderProcessMode(mode: RenderProcessMode): void;

    /**
     * Get render process mode of the ArkWeb.
     *
     * @returns { RenderProcessMode } mode - The render process mode of the ArkWeb.
     *          Call {@link getRenderProcessMode} to get the ArkWeb rendering subprocess mode of the current device,
     *          with an enumeration value of 0 as a single subprocess mode and an enumeration value of 1 as a multi-subprocess mode.
     *          If the obtained value is not within the range of the RenderProcessMode enumeration value,
     *          it defaults to the multi-rendering subprocess mode.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static getRenderProcessMode(): RenderProcessMode;

    /**
     * Destroy the rendering process.
     * Calling this interface will actively destroy the associated rendering process.
     * If the rendering process has not been started or destroyed, it has no effect.
     * In addition, destroying the rendering process will also affect all other instances associated with
     * the rendering process.
     *
     * @returns { boolean } true if it was possible to terminate the render process, otherwise false.
     *         Calling this on a not yet started, or an already terminated render will have no effect.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    terminateRenderProcess(): boolean;

    /**
     * Compile javascript and generate code cache.
     * @param { string } url - Url of the javascript. Only support HTTP/HTTPS protocol and length no longer than 2048.
     * @param { string | Uint8Array } script - Javascript source code. script must not be empty.
     * @param { CacheOptions } cacheOptions - Generate code cache option.
     * @returns { Promise<number> } - The promise returned by the function.
     *    0 means generate code cache successfully, -1 means internal error.
     * @throws { BusinessError } 401 - Invalid input parameter.
     *    Possible causes: 1. Mandatory parameters are left unspecified.
     *    2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *    The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    precompileJavaScript(url: string, script: string | Uint8Array, cacheOptions: CacheOptions): Promise<number>;

    /**
     * Set IP address for host name.
     *
     * @param { string } hostName - Which host name to be resolved.
     * @param { string } address - Resolved IP address.
     * @param { number } aliveTime - The validity seconds for resolve cache.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static setHostIP(hostName: string, address: string, aliveTime: number): void;

    /**
     * Clear the host name IP address.
     *
     * @param { string } hostName - Which host name to be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static clearHostIP(hostName: string): void;

    /**
     * Warmup the registered service worker associated the url.
     * @param { string } url - The url.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    static warmupServiceWorker(url: string): void;

    /**
     * Inject offline resources into cache.
     *
     * @param { Array<OfflineResourceMap> } resourceMaps - Array of offline resource info maps.
     *    The count of array must between 1 and 30.
     * @throws { BusinessError } 401 - Invalid input parameter.
     *    Possible causes: 1. Mandatory parameters are left unspecified.
     *    2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *    The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    injectOfflineResources(resourceMaps: Array<OfflineResourceMap>): void;

    /**
     * Enable the ability to block Ads, disabled by default.
     *
     * @param { boolean } enable {@code true} Enable Ads block; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Enable the ability to block Ads, disabled by default.
     *
     * @param { boolean } enable {@code true} Enable Ads block; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    enableAdsBlock(enable: boolean): void;

    /**
     * Get whether Ads block is enabled.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled; else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Get whether Ads block is enabled.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled; else false.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    isAdsBlockEnabled(): boolean;

    /**
     * Get whether Ads block is enabled for current Webpage.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled for current Webpage; else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Get whether Ads block is enabled for current Webpage.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled for current Webpage; else false.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    isAdsBlockEnabledForCurPage(): boolean;

    /**
     * Get the ID of the surface created by ArkWeb. This ID can be used for web page screenshots.
     *
     * @returns { string } The ID of the surface created by ArkWeb.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getSurfaceId(): string;

    /**
     * Set the URL trust list for the ArkWeb.
     * When the URL trust list has been set, only the URLs in the list can be accessed.
     *
     * @param { string } urlTrustList - the URL trust list in JSON format.
     *     An empty string means that all URLs are allowed to access.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setUrlTrustList(urlTrustList: string): void;

    /**
     * Sets a path list. When a file protocol accesses resources in the path list, it can access the local files across
     * domains. In addition, when a path list is set, the file protocol can access only the resources in the path list.
     * The behavior of {@link fileAccess} will be overwritten by that of this API. 
     * 
     * The paths in the list must be any of the following(sub path and module name must be provided):
     *
     * 1. The path of subdirectory of the application file directory, like "/data/storage/el2/base/files/example"
     *    or "/data/storage/el2/base/haps/entry/files/example".
     *    The application file directory is obtained using Context.filesDir in the Ability Kit.
     * 2. The path of application resource directory or its subdirectory, like "/data/storage/el1/bundle/entry/resource/resfile"
     *    or "/data/storage/el1/bundle/entry/resource/resfile/example".
     *    The application resource directory is obtained from Context.resourceDir in the Ability Kit.
     *
     * If a path in the list is not of the preceding paths, error code 401 is reported and the path list fails
     * to be set. When the path list is set to empty, the accessible files for the file protocol are subject to
     * the behavior of the {@link fileAccess}.
     * 
     * @param { Array<string> } pathList - The path list allow universal access.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    setPathAllowingUniversalAccess(pathList: Array<string>): void;

    /**
     * Trim memory by different memory pressure level.
     *
     * @param { PressureLevel } level - The memory pressure level for the ArkWeb.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    static trimMemoryByPressureLevel(level: PressureLevel): void;

    /**
     * Enable the BackForwardCache and indicate features that are allowed to enter BackForwardCache.
     * Default is disabled.
     *
     * @param { BackForwardCacheSupportedFeatures } features - The features that supports BackForwardCache.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    static enableBackForwardCache(features: BackForwardCacheSupportedFeatures): void;

    /**
     * Configure the BackForwardCache.
     *
     * @param { BackForwardCacheOptions } options - The configuration of BackForwardCache.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    setBackForwardCacheOptions(options: BackForwardCacheOptions): void;

    /**
     * Get the scroll offset of the webpage in view port, the coordinates of the top left corner of the view port are X: 0, Y: 0.
     * And the unit is virtual pixel.
     *
     * @returns { ScrollOffset } scroll offset
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13
     */
    getScrollOffset(): ScrollOffset;

    /**
     * Scrolls by the specified delta position and returns a result indicating whether the scrolling operation was successful or not.
     *
     * @param { number } deltaX - the delta x of the position.
     * @param { number } deltaY - the delta y of the position.
     * @returns { boolean } true if the scroll operation is successful, otherwise false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    scrollByWithResult(deltaX: number, deltaY: number): boolean;

    /**
     * Gets the last hit test value of HitTest.
     * @returns { HitTestValue } Return the element information of the clicked area.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18
     */
    getLastHitTest(): HitTestValue;

    /**
     * Get the page offset of the webpage in view port, the coordinates of the top left corner of the view port are X: 0, Y: 0.  
     * And the unit is virtual pixel.
     *
     * @returns { ScrollOffset } page offset
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    getPageOffset(): ScrollOffset;

    /**
     * Set the default User-Agent for the application.
     *
     * <p><strong>API Note</strong>:<br>
     * Unlike setCustomUserAgent, which only takes effect in the current web context, the
     * priority for pages loaded in the web is as follows:
     * 1. The User-Agent set by setCustomUserAgent is used first.
     * 2. If not set, it will check whether a specific User-Agent has been
     *    assigned to the current page via setUserAgentForHosts.
     * 3. If no specific User-Agent is assigned, the application will fall back
     *    to using the User-Agent set by setAppCustomUserAgent.
     * 4. If the app's default User-Agent is also not specified, the web's default
     *    User-Agent will be used as the final fallback.
     * </p>
     *
     * @param { string } userAgent - The User-Agent string.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    static setAppCustomUserAgent(userAgent: string) : void;

    /**
     * Set the User-Agent to be used for specified hosts, with a maximum of 20,000 hosts.
     * <p><strong>API Note</strong>:<br>
     * Setting the same host list multiple times for the same User-Agent will override
     * the previous settings. That is, if you want to cancel certain hosts from using
     * the specified User-Agent, you need to reset the host list for that User-Agent.
     * </p>
     *
     * @param { string } userAgent - The User-Agent string.
     * @param { Array<string> } hosts - The hosts to which the User-Agent apply.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void;
  
    /**
     * Get whether webviewController is attached to a web component.
     * @returns { ControllerAttachState } the attach state of controller
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    getAttachState(): ControllerAttachState;

    /**
     * Register the callback for controller attach state change.
     *
     * @param { 'controllerAttachStateChange' } type the event of controller attach state change.
     * @param { Callback<ControllerAttachState> } callback Callback used to return the controller attach state.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    on(type: 'controllerAttachStateChange', callback: Callback<ControllerAttachState>): void;

    /**
     * Unregister the callback for controller attach state change.
     *
     * @param { 'controllerAttachStateChange' } type the event of controller attach state change.
     * @param { Callback<ControllerAttachState> } callback Callback used to return the controller attach state.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    off(type: 'controllerAttachStateChange', callback?: Callback<ControllerAttachState>): void;


    /**
     * Wait for the controller to attach a web component until timeout.
     *
     * @param { number } timeout - the wait timeout, if timeout reach, promise will return, the unit is millisecond.
     * @returns { Promise<ControllerAttachState> } Promise used to return the state of attach.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    waitForAttached(timeout: number): Promise<ControllerAttachState>;

    /**
     * Enables debugging of web contents.
     * <p><strong>API Note</strong>:<br>
     * The port numbers from 0 to 1024 are prohibited. Ports less than 0 or greater than 65535 are considered invalid.
     * If an attempt is made to set these disabled or invalid ports, an exception will be thrown.
     * </p>
     *
     * @param { boolean } webDebuggingAccess {@code true} enables debugging of web contents; {@code false} otherwise.
     * @param { number } port Indicates the port of the devtools server. After the port is specified, a tcp server
     * socket is created instead of a unix domain socket.
     * @throws { BusinessError } 17100023 - The port number is not within the allowed range.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean, port: number): void;

    /**
     * Gets the loading progress for the current page.
     *
     * @returns { number } The loading progress for the current page.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    getProgress() : number;

    /**
     * Sets the bottom avoidance height of the web visible viewport.
     * When setting non-zero height, the position and size of the web component remain unchanged,
     * <br>and the visible viewport upward avoids avoidHeight, as manifested by the web page content raising avoidHeight.
     * <br>This interface is generally used for customizing the bottom avoidance area, and it is not recommended for
     * <br>simultaneous use with clicking the editable area of the web page showing the keyboard.
     * <br>In this case, the keyboardAvoidMode will be OVERLAYS_CONTENT.
     * When setting zero, web page content can be restored and the keyboardAvoidMode will be the value set by keyboardAvoidMode().
     *
     * @param { number } avoidHeight - the height value of the visible viewport avoidance. Unit: vp.
     * <br>The valid interval of avoidHeight is [0, the height of web component].
     * <br>When avoidHeight is out of the valid interval, it takes the boundary value of the interval.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    avoidVisibleViewportBottom(avoidHeight: number): void;

    /**
     * Obtains the prediction information about the blankless loading solution and enables the generation of
     * the transition frame for the current loading. The application determines whether to enable the blankless
     * loading solution based on the information.
     *
     * @param { string } key  The key value that uniquely identifies the page.
     * Default value: N/A.
     * The value cannot be empty or exceed 2048 characters.
     * When an invalid value is set, this API does not take effect.
     * @returns { BlanklessInfo } The prediction information about the blankless loading solution.
     * @throws { BusinessError } 801 Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    getBlanklessInfoWithKey(key: string) : BlanklessInfo;

    /**
     * Sets whether to enable blankless page loading. This API must be used in pair with the
     * getBlanklessInfoWithKey API.
     *
     * @param { string } key  The key value that uniquely identifies the current page. It must be the same as
     * the key value of the getBlanklessInfoWithKey API.
     * Default value: N/A.
     * The value cannot be empty or exceed 2048 characters.
     * When an invalid value is set, the error code WebBlanklessErrorCode is returned, and the API does not
     * take effect.
     * @param { boolean } is_start  Whether to enable frame interpolation. The value true indicates to enable
     * frame interpolation, and the value false indicates the opposite.
     * The default value is false.
     * The value can be true or false.
     * Action for setting an invalid value: N/A.
     * @returns { WebBlanklessErrorCode } WebBlanklessErrorCode.
     * @throws { BusinessError } 801 Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    setBlanklessLoadingWithKey(key: string, is_start: boolean) : WebBlanklessErrorCode;

    /**
     * Clears the blankless loading cache of the page with a specified key value.
     *
     * @param { Array<string> } [keys]  The list of key values of pages cached in the blankless loading
     * solution. These key values are specified in getBlanklessInfoKey.
     * The default value is the list of key values of all pages cached in the blankless loading solution.
     * The key length cannot exceed 2048 characters, and the number of keys must be less than or equal to 100.
     * The URL is the same as that input to the Web component during page loading.
     * When the key length exceeds 2048 characters, the key does not take effect. When the number of keys
     * exceeds 100, the first 100 keys are used. If these parameters are left empty, the default values are used.
     * @throws { BusinessError } 801 Capability not supported.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    static clearBlanklessLoadingCache(keys?: Array<string>) : void;

    /**
     * Sets the cache capacity of the blankless loading solution and returns the value that takes effect. If
     * this API is not called, the default capacity 30 MB is used. The maximum capacity cannot exceed 100 MB.
     *
     * @param { number } capacity  Cache capacity, in MB. The maximum value is 100 MB.
     * The default value is 30 MB.
     * The value ranges from 0 to 100. If this parameter is set to 0, no cache capacity is available and the
     * functionality is disabled globally.
     * When the value is set to a number smaller than 0, the value 0 takes effect. When the value is set to a
     * number greater than 100, the value 100 takes effect.
     * @returns { number } The effective value that ranges from 0 MB to 100 MB.
     * @throws { BusinessError } 801 Capability not supported.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    static setBlanklessLoadingCacheCapacity(capacity: number) : number;

    /**
      * Get whether default error page feature is enabled.
      *
      * @returns  { boolean } -  True if enable the default error page feature; else false.
      * @throws { BusinessError } 17100001 - Init error.
      *                           The WebviewController must be associated with a Web component.
      * @syscap SystemCapability.Web.Webview.Core
      * @since 20
      */
    getErrorPageEnabled(): boolean;
  
    /**
      * Set whether enable the error page. onOverrideErrorPage will be triggered when the page error.
      *
      * @param { boolean } enable - Whether to enable the default error page feature.
      * @throws { BusinessError } 17100001 - Init error.
      *                           The WebviewController must be associated with a Web component.
      * @syscap SystemCapability.Web.Webview.Core
      * @since 20
      */
    setErrorPageEnabled(enable: boolean): void;

    /**
     * After enable PrivateNetworkAccess feature, ArkWeb will send a CORS preflight request before issuing any
     * sub-resource private network requests to request explicit permission from the target server.
     * After disable PrivateNetworkAccess, ArkWeb will no longer check whether the private network request
     * is legitimate.
     * 
     * @param {boolean} enable - {@code true} enable the private network access check; {@code false} otherwise.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    static enablePrivateNetworkAccess(enable: boolean): void;

    /**
     * Get whether PrivateNetworkAccess is enabled.
     * 
     * @returns {boolean} True is enable the ability to check private network access else false.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    static isPrivateNetworkAccessEnabled(): boolean;

    /**
     * Set web destroy mode.
     * @param { WebDestroyMode } mode web destroy mode, default NORMAL_MODE.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    static setWebDestroyMode(mode: WebDestroyMode): void;
  }

  /**
   * Defines the state for download.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the state for download.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enum WebDownloadState {
    /**
     * The web download is in progress.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download is in progress.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    IN_PROGRESS = 0,

    /**
     * The web download has been completed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download has been completed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    COMPLETED,

    /**
     * The web download was canceled.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download was canceled.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    CANCELED,

    /**
     * The web download was interrupted.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download was interrupted.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    INTERRUPTED,

    /**
     * The web download is pending.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download is pending.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    PENDING,

    /**
     * The web download has been paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download has been paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    PAUSED,

    /**
     * Unknown state.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Unknown state.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    UNKNOWN,
  }

  /**
   * Defines the error code for download.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the error code for download.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enum WebDownloadErrorCode {
    /**
     * Unknown error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ERROR_UNKNOWN = 0,

    /**
     * Generic file operation failure.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_FAILED = 1,

    /**
     * The file cannot be accessed due to certain restrictions.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_ACCESS_DENIED = 2,

    /**
     * There is not enough disk space.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_NO_SPACE = 3,

    /**
     * The file name is too long.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_NAME_TOO_LONG = 5,

    /**
     * The file is too large.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_TOO_LARGE = 6,

    /**
     * Some temporary problems occurred, such as not enough memory, files in use, and too many files open at the same time.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_TRANSIENT_ERROR = 10,

    /**
     * The file is blocked from accessing because of some local policy.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_BLOCKED = 11,

    /**
     * When trying to resume the download, Found that the file is not long enough, maybe the file no longer exists.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_TOO_SHORT = 13,

    /**
     * Hash mismatch.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_HASH_MISMATCH = 14,

    /**
     * The file already exists.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FILE_SAME_AS_SOURCE = 15,

    /**
     * Generic network error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NETWORK_FAILED = 20,

    /**
     * The network operation timed out.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NETWORK_TIMEOUT = 21,

    /**
     * The network was disconnected.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NETWORK_DISCONNECTED = 22,

    /**
     * Server down.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NETWORK_SERVER_DOWN = 23,

    /**
     * Invalid network requests，may redirect to unsupported scheme or an invalid URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NETWORK_INVALID_REQUEST = 24,

    /**
     * The server returned a generic error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SERVER_FAILED = 30,

    /**
     * The server does not support range requests.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SERVER_NO_RANGE = 31,

    /**
     * The server does not have the requested data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SERVER_BAD_CONTENT = 33,

    /**
     * The server does not allow the file to be downloaded.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SERVER_UNAUTHORIZED = 34,

    /**
     * Server certificate error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SERVER_CERT_PROBLEM = 35,

    /**
     * Server access forbidden.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SERVER_FORBIDDEN = 36,

    /**
     * Server unreachable.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SERVER_UNREACHABLE = 37,

    /**
     * The received data does not match content-length.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SERVER_CONTENT_LENGTH_MISMATCH = 38,

    /**
     * An unexpected cross-origin redirect happened.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    SERVER_CROSS_ORIGIN_REDIRECT = 39,

    /**
     * User cancel.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * User cancel.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    USER_CANCELED = 40,

    /**
     * User shut down the application.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    USER_SHUTDOWN = 41,

    /**
     * Application crash.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    CRASH = 50,
  }

  /**
   * Represents a download task, You can use this object to operate the corresponding download task.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Represents a download task, You can use this object to operate the corresponding download task.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  class WebDownloadItem {
    /**
    * Get guid.
    * @returns { string } - Returns the download's guid.
    * @syscap SystemCapability.Web.Webview.Core
    * @atomicservice
    * @since 11
    */
    /**
    * Get guid.
    * @returns { string } - Returns the download's guid.
    * @syscap SystemCapability.Web.Webview.Core
    * @crossplatform
    * @atomicservice
    * @since 18
    */
    getGuid(): string;

    /**
     * Get current speed, in bytes per second.
     * @returns { number } - Returns the current download speed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get current speed, in bytes per second.
     * @returns { number } - Returns the current download speed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getCurrentSpeed(): number;

    /**
     * Get percent complete.
     * @returns { number } - Returns -1 if progress is unknown. 100 if the download is already complete.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get percent complete.
     * @returns { number } - Returns -1 if progress is unknown. 100 if the download is already complete.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getPercentComplete(): number;

    /**
     * Get total bytes.
     * @returns { number } - Returns the total bytes received, -1 if the total size is unknown.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get total bytes.
     * @returns { number } - Returns the total bytes received, -1 if the total size is unknown.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getTotalBytes(): number;

    /**
     * Get state of the web download.
     * @returns { WebDownloadState } - Returns the current download state.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get state of the web download.
     * @returns { WebDownloadState } - Returns the current download state.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getState(): WebDownloadState;

    /**
     * Get last error code of the web download.
     * @returns { WebDownloadErrorCode } - Returns the last error code.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get last error code of the web download.
     * @returns { WebDownloadErrorCode } - Returns the last error code.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getLastErrorCode(): WebDownloadErrorCode;

    /**
     * Get http method of the web download request.
     * @returns { string } - Returns the http request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get http method of the web download request.
     * @returns { string } - Returns the http request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getMethod(): string;

    /**
     * Get mime type of the web download.
     * @returns { string } - Returns the mimetype.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get mime type of the web download.
     * @returns { string } - Returns the mimetype.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getMimeType(): string;

    /**
     * Get url of the web download request.
     * @returns { string } - Returns the url.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get url of the web download request.
     * @returns { string } - Returns the url.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    getUrl(): string;

    /**
     * Get suggested file name of the web download request.
     * @returns { string } - Returns the suggested file name.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get suggested file name of the web download request.
     * @returns { string } - Returns the suggested file name.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getSuggestedFileName(): string;

    /**
     * Start the web download.
     * Used in onBeforeDownload, If you want to start the current download, call this function.
     * @param { string } downloadPath - The content will be downloaded to this file.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Start the web download.
     * Used in onBeforeDownload, If you want to start the current download, call this function.
     * @param { string } downloadPath - The content will be downloaded to this file.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    start(downloadPath: string): void;

    /**
     * Cancel the web download.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Cancel the web download.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    cancel(): void;

    /**
     * Pause the web download.
     * @throws { BusinessError } 17100019 - The download task is not started yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Pause the web download.
     * @throws { BusinessError } 17100019 - The download task is not started yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    pause(): void;

    /**
     * Resume the web download.
     * Use WebDownloadManager.resumeDownload to resume deserialized downloads.
     * WebDownloadItem.resume is only used to resume the currently paused download.
     * @throws { BusinessError } 17100016 - The download task is not paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Resume the web download.
     * Use WebDownloadManager.resumeDownload to resume deserialized downloads.
     * WebDownloadItem.resume is only used to resume the currently paused download.
     * @throws { BusinessError } 17100016 - The download task is not paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    resume(): void;

    /**
     * Get received bytes.
     * @returns { number } - Returns the received bytes.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get received bytes.
     * @returns { number } - Returns the received bytes.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getReceivedBytes(): number;

    /**
     * Get full path of the web download.
     * @returns { string } - Returns the full path of the download.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get full path of the web download.
     * @returns { string } - Returns the full path of the download.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getFullPath(): string;

    /**
     * Serialize web download to typed array.
     * @returns { Uint8Array } - Returns the serialized data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    serialize(): Uint8Array;

    /**
     * Deserialize web download from typed array.
     * @param { Uint8Array } serializedData - The serialized data.
     * @returns { WebDownloadItem } - Deserialize the serialized data into a WebDownloadItem.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static deserialize(serializedData: Uint8Array): WebDownloadItem;
  }

  /**
   * The download state is notified through this delegate.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The download state is notified through this delegate.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  class WebDownloadDelegate {
    /**
     * Callback will be triggered before web download start.
     * @param { Callback<WebDownloadItem> } callback - The callback of download will be start.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Callback will be triggered before web download start.
     * @param { Callback<WebDownloadItem> } callback - The callback of download will be start.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onBeforeDownload(callback: Callback<WebDownloadItem>): void;

    /**
     * Callback will be triggered when web download is processing.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did update.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Callback will be triggered when web download is processing.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did update.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDownloadUpdated(callback: Callback<WebDownloadItem>): void;

    /**
     * Callback will be triggered when web download is completed.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did finish.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Callback will be triggered when web download is completed.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did finish.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDownloadFinish(callback: Callback<WebDownloadItem>): void;

    /**
     * Callback will be triggered when web download is interrupted or canceled.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did fail.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Callback will be triggered when web download is interrupted or canceled.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did fail.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDownloadFailed(callback: Callback<WebDownloadItem>): void;
  }

  /**
   * You can trigger download manually through this interface, or resume failed or canceled downloads.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * You can trigger download manually through this interface, or resume failed or canceled downloads.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  class WebDownloadManager {
    /**
     * Set a delegate used to receive the progress of the download triggered from WebDownloadManager.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from WebDownloadManager.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set a delegate used to receive the progress of the download triggered from WebDownloadManager.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from WebDownloadManager.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    static setDownloadDelegate(delegate: WebDownloadDelegate): void;

    /**
     * Resume the canceled or failed download.
     * @param { WebDownloadItem } webDownloadItem - Download that need to be resume.
     * @throws { BusinessError } 17100018 - No WebDownloadDelegate has been set yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    static resumeDownload(webDownloadItem: WebDownloadItem): void;
  }

  /**
   * The http body stream of the request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  class WebHttpBodyStream {
    /**
     * Initialize data stream.
     *
     * @returns { Promise<void> } The promise of data stream is initialized.
     * @throws { BusinessError } 17100022 - Failed to initialize the HTTP body stream.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    initialize(): Promise<void>;
    /**
     * Read the data stream to the buffer.
     *
     * @param { number } size - Read size.
     * @returns { Promise<ArrayBuffer> } Read array buffer of result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    read(size: number): Promise<ArrayBuffer>;
    /**
     * Get the total size of the data stream. When data is chunked, always return zero.
     *
     * @returns { number } Return size of data stream size.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getSize(): number;
    /**
     * Get the current position of the data stream.
     *
     * @returns { number } Return position in post data stream.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getPosition(): number;
    /**
     * Whether data stream is chunked.
     *
     * @returns { boolean } Whether data stream is chunked.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isChunked(): boolean;
    /**
     * Whether all data stream has been consumed. For chunked uploads,
     * returns false until the first read attempt.
     *
     * @returns { boolean } Whether data stream has been consumed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isEof(): boolean;
    /**
     * Returns true if the upload data in the stream is entirely in memory, and all read requests will succeed
     * synchronously. Expected to return false for chunked requests.
     *
     * @returns { boolean } Whether the data stream is in memory.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isInMemory(): boolean;
  }

  /**
   * Defines the resource type of request.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12
   */
  enum WebResourceType {
    /**
     * Top level page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    MAIN_FRAME = 0,

    /**
     * Frame or Iframe.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    SUB_FRAME = 1,

    /**
     * CSS stylesheet.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    STYLE_SHEET = 2,

    /**
     * External script.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    SCRIPT = 3,

    /**
     * Image (jpg/gif/png/etc).
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    IMAGE = 4,

    /**
     * Font.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    FONT_RESOURCE = 5,

    /**
     * Some other subresource. This is the default type if the actual type is unknown.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    SUB_RESOURCE = 6,

    /**
     * Object (or embed) tag for a plugin, or a resource that a plugin requested.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    OBJECT = 7,

    /**
     * Media resource.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    MEDIA = 8,

    /**
     * Main resource of a dedicated worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    WORKER = 9,

    /**
     * Main resource of a shared worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    SHARED_WORKER = 10,

    /**
     * Explicitly requested prefetch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    PREFETCH = 11,

    /**
     * Favicon.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    FAVICON = 12,

    /**
     * XMLHttpRequest.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    XHR = 13,

    /**
     * Ping request for <a ping>/sendBeacon.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    PING = 14,

    /**
     * The main resource of a service worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    SERVICE_WORKER = 15,

    /**
     * Report of Content Security Policy violations.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    CSP_REPORT = 16,

    /**
     * Resource that a plugin requested.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    PLUGIN_RESOURCE = 17,

    /**
     * A main-frame service worker navigation preload request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    NAVIGATION_PRELOAD_MAIN_FRAME = 19,

    /**
     * A sub-frame service worker navigation preload request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    NAVIGATION_PRELOAD_SUB_FRAME = 20,
  }

  /**
   * Defines the Web resource request used for scheme handler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  class WebSchemeHandlerRequest {
    /**
     * Gets request headers.
     *
     * @returns { Array<WebHeader> } Return the request headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getHeader(): Array<WebHeader>;
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getRequestUrl(): string;
    /**
     * Get request method.
     *
     * @returns { string } Return the request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getRequestMethod(): string;
    /**
     * Get referrer of request.
     *
     * @returns { string } Return referrer of request.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getReferrer(): string;
    /**
     * Check whether the request is for getting the main frame.
     *
     * @returns { boolean } Whether request is main frame.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isMainFrame(): boolean;
    /**
     * Check whether the request is associated with gesture.
     *
     * @returns { boolean } Whether request has user gesture.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    hasGesture(): boolean;
    /**
     * Get http body stream.
     *
     * @returns { WebHttpBodyStream | null } Return http body stream. If request has no http body stream, return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getHttpBodyStream(): WebHttpBodyStream | null;
    /**
     * Get request's resource type.
     *
     * @returns { WebResourceType } Return the request's resource type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    getRequestResourceType(): WebResourceType;
    /**
     * Gets the URL of frame which trigger this request.
     *
     * @returns { string } Return the URL of frame which trigger this request.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    getFrameUrl(): string;
  }

  /**
   * Defines the Web resource response used for scheme handler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  class WebSchemeHandlerResponse {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor();
    /**
     * Set the resolved URL after redirects or changed as a result of HSTS.
     *
     * @param { string } url - Set response url for redirects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    setUrl(url: string): void;
    /**
     * Get the resolved URL after redirects or changed as a result of HSTS.
     *
     * @returns { string } Return response url for redirects.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    getUrl(): string;
    /**
     * Set net error code.
     * @param { WebNetErrorList } code - Set net error code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setNetErrorCode(code: WebNetErrorList): void;
    /**
     * Get net error code.
     *
     * @returns { WebNetErrorList } Return response error code.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getNetErrorCode(): WebNetErrorList;
    /**
     * Set http status code.
     *
     * @param { number } code - Http status code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setStatus(code: number): void;
    /**
     * Get http status code.
     *
     * @returns { number } Return http status code.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getStatus(): number;
    /**
     * Set status text.
     *
     * @param { string } text - Status text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setStatusText(text: string): void;
    /**
     * Get status text.
     *
     * @returns { string } Return http status text.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getStatusText(): string;
    /**
     * Set mime type.
     *
     * @param { string } type - Mime type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setMimeType(type: string): void;
    /**
     * Get mime type.
     *
     * @returns { string } Return mime type of response.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getMimeType(): string;
    /**
     * Set the response encoding.
     *
     * @param { string } encoding - Encoding.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setEncoding(encoding: string): void;
    /**
     * Get the response encoding.
     *
     * @returns { string } Return encoding of response.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getEncoding(): string;
    /**
     * Set response hander value by name.
     *
     * @param { string } name - Header name.
     * @param { string } value - Header value.
     * @param { boolean } overwrite - Whether to overwrite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setHeaderByName(name: string, value: string, overwrite: boolean): void;
    /**
     * Get the header value by name from the response.
     *
     * @param { string } name - Header name.
     * @returns { string } Return header value by name.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    getHeaderByName(name: string): string
  }

  /**
   * Used to intercept url requests. Response headers and body can be sent through
   * WebResourceHandler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  class WebResourceHandler {
    /**
     * Pass response headers to intercepted requests.
     *
     * @param { WebSchemeHandlerResponse } response - Set response header to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    didReceiveResponse(response: WebSchemeHandlerResponse): void;
    /**
     * Pass response body data to intercepted requests.
     *
     * @param { ArrayBuffer } data - Set response body to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    didReceiveResponseBody(data: ArrayBuffer): void;
    /**
     * Notify that this request should be finished and there is no more data available.
     *
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    didFinish(): void;
    /**
     * Notify that this request should be failed.
     *
     * @param { WebNetErrorList } code - Set response error code to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    didFail(code: WebNetErrorList): void;
    /**
     * Notify that this request should be failed.
     *
     * @param { WebNetErrorList } code - Set response error code to intercept.
     * @param { boolean } completeIfNoResponse - If completeIfNoResponse is true, when DidFailWithError is called, if
     *                                           DidReceiveResponse has not been called, a response is automatically
     *                                           constructed and the current request is terminated.
     * @throws { BusinessError } 17100101 - The errorCode is either ARKWEB_NET_OK or outside the range of error codes
     *                                      in WebNetErrorList.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    didFail(code: WebNetErrorList, completeIfNoResponse: boolean): void;
  }

  /**
   * This class is used to intercept requests for a specified scheme.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  class WebSchemeHandler {
    /**
     * Callback for handling the request.
     *
     * @param { function } callback - Callback of handling the request. If callback return false,
     *                                it means no interception.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onRequestStart(
      callback: (request: WebSchemeHandlerRequest, handler: WebResourceHandler) => boolean): void;

    /**
     * Callback when the request is completed.
     *
     * @param { Callback<WebSchemeHandlerRequest> } callback - Callback of request is completed.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onRequestStop(callback: Callback<WebSchemeHandlerRequest>): void;
  }

  /**
   * Enum type supplied to {@link handleStatusChanged} for indicating the playback status.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  enum PlaybackStatus {
    /**
     * Player status is paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    PAUSED = 0,
    /**
     * Player status is playing.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    PLAYING,
  }

  /**
   * Enum type supplied to {@link handleNetworkStateChanged} for indicating the native player network state.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  enum NetworkState {
    /**
     * Player does not do any download tasks.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    EMPTY = 0,
    /**
     * Player downloads finished, waiting for next task.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    IDLE,
    /**
     * Player is downloading contents.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    LOADING,
    /**
     * Player downloads failed, due to network error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    NETWORK_ERROR
  }

  /**
   * Enum type supplied to {@link handleReadyStateChanged} for indicating the native player network state.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  enum ReadyState {
    /**
     * Player hasn't downloaded anything.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    HAVE_NOTHING = 0,
    /**
     * Player has downloaded metadata.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    HAVE_METADATA,
    /**
     * Player has played all downloaded media data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    HAVE_CURRENT_DATA,
    /**
     * The buffered media data is not enough, and will cause jank.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    HAVE_FUTURE_DATA,
    /**
     * The buffered media data is enough.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    HAVE_ENOUGH_DATA,
  }

  /**
   * Enum type supplied to {@link handleError} for indicating the error type of native media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  enum MediaError {
    /**
     * Network error
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    NETWORK_ERROR = 1,
    /**
     * Media format error, such as not a valid file.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    FORMAT_ERROR,
    /**
     * Decode error, such as decoder doesn't support this format.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    DECODE_ERROR
  }

  /**
   * The native media player status handler.
   * Apps should use this class to handle native media player's status.
   *
   * @typedef NativeMediaPlayerHandler
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  interface NativeMediaPlayerHandler {

    /**
     * Handle native media player playback status.
     *
     * @param { PlaybackStatus } status - Playback status of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleStatusChanged(status: PlaybackStatus): void

    /**
     * Handle native media player volume.
     *  volume: float
     *   value range: [0 - 1.0]
     *
     * @param { number } volume - Current volume of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleVolumeChanged(volume: number): void

    /**
     * Handle native media player muted status.
     *
     * @param { boolean } muted - Current mute status of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleMutedChanged(muted: boolean): void

    /**
     * Handle playback rate of native media player.
     *  playbackRate: float
     *   value range: [0 - infinity]
     *
     * @param { number } playbackRate - Current playback rate of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handlePlaybackRateChanged(playbackRate: number): void

    /**
     * Handle duration time of media.
     *  duration: float
     *   value range: [0 - infinity]
     *
     * @param { number } duration - Duration time (in seconds) of media.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleDurationChanged(duration: number): void

    /**
     * Handle current playing time of media.
     *  currentPlayTime: float
     *   value range: [0 - duration]
     *
     * @param { number } currentPlayTime - Current playing time (in seconds) of media.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleTimeUpdate(currentPlayTime: number): void

    /**
     * Handle buffered end time of media.
     *  bufferedEndTime: float
     *   value range: [0 - duration]
     *
     * @param { number } bufferedEndTime - Buffered end time (in seconds) of media.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleBufferedEndTimeChanged(bufferedEndTime: number): void

    /**
     * Handle native player ended event.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleEnded(): void

    /**
     * Handle network state of native media player.
     *
     * @param { NetworkState } state - Network state of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleNetworkStateChanged(state: NetworkState): void

    /**
     * Handle ready state of native media player.
     *
     * @param { ReadyState } state - Ready state of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleReadyStateChanged(state: ReadyState): void

    /**
     * Handle native media player fullscreen state changed event.
     *
     * @param { boolean } fullscreen - Fullscreen state of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleFullscreenChanged(fullscreen: boolean): void

    /**
     * Handle native media player seeking state.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleSeeking(): void

    /**
     * Handle native media player seek finished state.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleSeekFinished(): void

    /**
     * Handle native media player error event.
     *
     * @param { MediaError } error - Error type of native media player.
     * @param { string } errorMessage - Description of current error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleError(error: MediaError, errorMessage: string): void

    /**
     * Handle size of video.
     *
     * @param { number } width - Width of video.
     * @param { number } height - Height of video.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handleVideoSizeChanged(width: number, height: number): void
  }

  /**
   * The scenarios for suspending the media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12
   */
  enum SuspendType {
    /**
     * Page enters the BackForwardCache.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    ENTER_BACK_FORWARD_CACHE = 0,

    /**
     * Page enters background.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    ENTER_BACKGROUND,

    /**
     * Cleanup when the number of paused media player over limit.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    AUTO_CLEANUP
  }

  /**
   * The bridge between web core and native media player.
   * Apps should implements this interface, and pass an instance to web core.
   * Then web core can control native media player by this bridge.
   *
   * @typedef NativeMediaPlayerBridge
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  interface NativeMediaPlayerBridge {
    /**
     * Notify native media player that the rect of video tag has changed.
     *
     * @param { number } x - The x position of video tag in web component.
     * @param { number } y - The y position of video tag in web component.
     * @param { number } width - The width of video tag.
     * @param { number } height - The height of video tag.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    updateRect(x: number, y: number, width: number, height: number): void

    /**
     * Request to play.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    play(): void

    /**
     * Request to pause.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    pause(): void

    /**
     * Request to fast forward / back forward to targetTime.
     *  targetTime: float
     *   value range: [0 - duration]
     *
     * @param { number } targetTime - The target time (in seconds) to FF/BF to.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    seek(targetTime: number): void

    /**
     * Request to change volume of native media player.
     *  volume: float
     *   value range: [0 - 1.0]
     *
     * @param { number } volume - The volume of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setVolume(volume: number): void

    /**
     * Request to mute native media player.
     *
     * @param { boolean } muted - Should mute native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setMuted(muted: boolean): void

    /**
     * Request to change playback rate of native media player.
     *  playbackRate: float
     *   value range: [0 - 10.0]
     *
     * @param { number } playbackRate - The playback rate of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setPlaybackRate(playbackRate: number): void

    /**
     * Request to release native media player.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    release(): void

    /**
     * Request to enter fullscreen.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    enterFullscreen(): void

    /**
     * Request to exit fullscreen.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    exitFullscreen(): void

    /**
     * Resume the native media player.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    resumePlayer?(): void

    /**
     * Suspend to release native media player, not the NativeMediaPlayerBridge. The
     * embedder should save the status of player when release the native media player
     * through NativeMediaPlayerBridge.
     *
     * @param { SuspendType } type - The scenario for suspending the media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    suspendPlayer?(type: SuspendType): void
  }

  /**
   * Enum type for indicating the media type of native media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  enum MediaType {
    /**
     * Media type is video.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    VIDEO = 0,
    /**
     * Media type is audio.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    AUDIO
  }

  /**
   * Enum type for indicating the media source type of native media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  enum SourceType {
    /**
     * The type of media source is URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    URL = 0,
    /**
     * The type of media source is blob.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    MSE
  }

  /**
   * Media source information. Uri and format.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  class MediaSourceInfo {
    /**
     * Source type, most time is URL.
     * @type { SourceType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    type: SourceType;

    /**
     * Media source, most time is Uri.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    source: string;

    /**
     * Media format, such as mp4, webm, m3u8 etc.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    format: string;
  }

  /**
   * Rectangle definition.
   *
   * @typedef RectEvent
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12
   */
  interface RectEvent {
    /**
     * X coordinator of top left point.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    x: number;
    /**
     * Y coordinator of top left point.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    y: number;
    /**
     * Width of this rectangle.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    width: number;
    /**
     * Height of this rectangle.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    height: number;
  }

  /**
   * Surface information.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  class NativeMediaPlayerSurfaceInfo {
    /**
     * Id of surface.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    id: string;

    /**
     * Surface rect info.
     * @type { RectEvent }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    rect: RectEvent;
  }

  /**
   * Enum type for indicating the preload type.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  enum Preload {
    /**
     * Doesn't do preload.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    NONE = 0,
    /**
     * Only preload metadata.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    METADATA,
    /**
     * Preload enough data to ensure playing is smooth.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    AUTO
  }

  /**
   * Media information.
   *
   * @typedef MediaInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  interface MediaInfo {
    /**
     * Id of media element.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    embedID: string,
    /**
     * Media type : Video or Audio.
     * @type { MediaType }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    mediaType: MediaType,
    /**
     * Media source list, player should choose an appropriate one to play.
     * @type { MediaSourceInfo[] }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    mediaSrcList: MediaSourceInfo[],
    /**
     * Surface to render media content on.
     * @type { NativeMediaPlayerSurfaceInfo }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    surfaceInfo: NativeMediaPlayerSurfaceInfo,
    /**
     * Should show media controls.
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    controlsShown: boolean,
    /**
     * Limit media controls items.
     *  Such as 'nodownload', 'nofullscreen', 'noremoteplayback'
     * @type { string[] }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    controlList: string[],
    /**
     * Player should be muted;
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    muted: boolean,
    /**
     * Player should show poster before media first frame shown.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    posterUrl: string,
    /**
     * Preload type.
     * @type { Preload }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    preload: Preload,
    /**
     * Header information of a media network request.
     * @type { Record<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    headers: Record<string, string>,
    /**
     * The information list of attributes of media tag.
     * @type { Record<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    attributes: Record<string, string>,
  }

  /**
   * The callback of creating a native media player.
   *
   * @typedef { function }
   * @param { NativeMediaPlayerHandler } handler - callback information of onCreateNativeMediaPlayer.
   * @param { MediaInfo } mediaInfo - callback information of onCreateNativeMediaPlayer.
   * @returns { NativeMediaPlayerBridge } Returns whether the app takes over the media.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  type CreateNativeMediaPlayerCallback =
      (handler: NativeMediaPlayerHandler, mediaInfo: MediaInfo) => NativeMediaPlayerBridge;

  /**
   * This class is used to set adblock config.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  class AdsBlockManager {
    /**
     * set Ads Block ruleset file, containing easylist rules.
     * @param {string} rulesFile - absolute file path contains app customized ads block rules.
     * @param {boolean} replace - (@code true)replace internal rules;(@code false) add to internal rules.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * set Ads Block ruleset file, containing easylist rules.
     * @param {string} rulesFile - absolute file path contains app customized ads block rules.
     * @param {boolean} replace - (@code true)replace internal rules;(@code false) add to internal rules.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static setAdsBlockRules(rulesFile: string, replace: boolean): void;

    /**
     * Add items to Ads Block Disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     * Ads Block will be disallowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Add items to Ads Block Disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     * Ads Block will be disallowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static addAdsBlockDisallowedList(domainSuffixes: Array<string>): void;

    /**
     * Add items to Ads Block Allow list.
     * By default, ads block is allowed for all pages unless they are added to the
     * disallow list. The priority of allowlist is higher than the disallowlist. It is
     * used to re-enable ads block on the page that matches disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     * Ads Block will be allowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Add items to Ads Block Allow list.
     * By default, ads block is allowed for all pages unless they are added to the
     * disallow list. The priority of allowlist is higher than the disallowlist. It is
     * used to re-enable ads block on the page that matches disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     * Ads Block will be allowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static addAdsBlockAllowedList(domainSuffixes: Array<string>): void;

    /**
     * remove items from Ads Block Disallowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from disallow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * remove items from Ads Block Disallowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from disallow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static removeAdsBlockDisallowedList(domainSuffixes: Array<string>): void;

    /**
     * remove items from Ads Block Allowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from allow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * remove items from Ads Block Allowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from allow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static removeAdsBlockAllowedList(domainSuffixes: Array<string>): void;

    /**
     * clear Ads Block Disallowed list.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * clear Ads Block Disallowed list.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static clearAdsBlockDisallowedList(): void;

    /**
     * clear Ads Block Allowed list.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * clear Ads Block Allowed list.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18
     */
    static clearAdsBlockAllowedList(): void;
  }

  /**
   * This class is used to enable back forward cache supported features.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12
   */
  class BackForwardCacheSupportedFeatures {
    /**
     * Whether cache the pages that use native embed.
     * Default is false;
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    nativeEmbed: boolean;

    /**
     * Whether cache the pages that use media take over.
     * Default is false;
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    mediaTakeOver: boolean;

    /**
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    constructor();
  }

  /**
   * This class is used to set back forward cache options.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12
   */
  class BackForwardCacheOptions {
    /**
     * Set the maximum size of pages that can cache.
     * Default is 1, max is 50.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    size: number;

    /**
     * Set the lifetime in seconds in the BackForwardCache.
     * Default is 600.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    timeToLive: number;

    /**
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    constructor();
  }

  /**
   * Enum type supplied to {@link insertProxyRule} for indicating the scheme filter for proxy.
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * Enum type supplied to {@link insertProxyRule} for indicating the scheme filter for proxy.
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19
   */
  enum ProxySchemeFilter {
    /**
     * This indicates all the schemes will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * This indicates all the schemes will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    MATCH_ALL_SCHEMES = 0,
    /**
     * This indicates only the HTTP requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * This indicates only the HTTP requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    MATCH_HTTP = 1,
    /**
     * This indicates only the HTTPS requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * This indicates only the HTTPS requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    MATCH_HTTPS = 2,
  }

  /**
   * The ProxyConfig used by applyProxyOverride.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * The ProxyConfig used by applyProxyOverride.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19
   */
  class ProxyConfig {
    /**
     * Insert a bypass rule that indicates URLs that should skip the override proxy and connect the server directly instead.
     * These maybe URLs or IP addresses and wildcards are supported. e.g. "*.example.com" means that requests to
     * "https://www.example.com" and "http://test.example.com" will connect the server directly.
     *
     * @param { string } bypassRule - The bypass rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Insert a bypass rule that indicates URLs that should skip the override proxy and connect the server directly instead.
     * These maybe URLs or IP addresses and wildcards are supported. e.g. "*.example.com" means that requests to
     * "https://www.example.com" and "http://test.example.com" will connect the server directly.
     *
     * @param { string } bypassRule - The bypass rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    insertBypassRule(bypassRule: string): void;

    /**
     * Insert a proxy rule that indicates URLs that match the schemeFilter will connect the server directly.
     *
     * @param { ProxySchemeFilter } schemeFilter - The scheme filter for this rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Insert a proxy rule that indicates URLs that match the schemeFilter will connect the server directly.
     *
     * @param { ProxySchemeFilter } schemeFilter - The scheme filter for this rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    insertDirectRule(schemeFilter?: ProxySchemeFilter): void;

    /**
     * Insert a proxy rule which indicates that requests matching the schemeFilter should use an override proxy, all requests will
     * use the proxy rule if schemeFilter is null.
     *
     * The format for proxy is [scheme://]host[:port]. Scheme is optional and must be HTTP, HTTPS, or SOCKS if present. Scheme defaults to HTTP.
     * Host is an IPv6 literal with brackets, an IPv4 literal or one or more labels seperated by a period. Port number is optional and defaults
     * to 80 for HTTP, 443 for HTTPS and 1080 for SOCKS.
     *
     * e.g. example.com host: example.com
     *      https://example.com  scheme: https  host: example.com
     *      example.com:8888     host: example.com  port: 8888
     *      https://example.com:8888  scheme:https  host: example.com  port:8888
     *      192.168.1.1  host: 192.168.1.1
     *      192.168.1.1:8888  host:192.168.1.1 port: 8888
     *      [10:20:30:40:50:60:70:80]
     *
     * @param { string } proxyRule - The proxy rule.
     * @param { ProxySchemeFilter } schemeFilter - The scheme filter for this rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Insert a proxy rule which indicates that requests matching the schemeFilter should use an override proxy, all requests will
     * use the proxy rule if schemeFilter is null.
     *
     * The format for proxy is [scheme://]host[:port]. Scheme is optional and must be HTTP, HTTPS, or SOCKS if present. Scheme defaults to HTTP.
     * Host is an IPv6 literal with brackets, an IPv4 literal or one or more labels seperated by a period. Port number is optional and defaults
     * to 80 for HTTP, 443 for HTTPS and 1080 for SOCKS.
     *
     * e.g. example.com host: example.com
     *      https://example.com  scheme: https  host: example.com
     *      example.com:8888     host: example.com  port: 8888
     *      https://example.com:8888  scheme:https  host: example.com  port:8888
     *      192.168.1.1  host: 192.168.1.1
     *      192.168.1.1:8888  host:192.168.1.1 port: 8888
     *      [10:20:30:40:50:60:70:80]
     *
     * @param { string } proxyRule - The proxy rule.
     * @param { ProxySchemeFilter } schemeFilter - The scheme filter for this rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void;

    /**
     * Hostnames without a period in them (and that are not IP literals) will skip the proxy and connect the server directly.
     * Examples: "abc", "local", "some-domain".
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Hostnames without a period in them (and that are not IP literals) will skip the proxy and connect the server directly.
     * Examples: "abc", "local", "some-domain".
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    bypassHostnamesWithoutPeriod(): void;

    /**
     * By default, certain hostnames implicitly bypass the proxy if they are link-local IPs, or localhost addresses. For instance
     * hostnames matching any of (non-exhaustive list): localhost *.localhost [::1] 127.0.0.1/8 169.254/16 [FE80::]/10
     * Call this function to override the default behavior and force localhost and link-local URLs to be sent through the proxy.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * By default, certain hostnames implicitly bypass the proxy if they are link-local IPs, or localhost addresses. For instance
     * hostnames matching any of (non-exhaustive list): localhost *.localhost [::1] 127.0.0.1/8 169.254/16 [FE80::]/10
     * Call this function to override the default behavior and force localhost and link-local URLs to be sent through the proxy.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    clearImplicitRules(): void;

    /**
     * Reverse the bypass rules.
     *
     * If false all URLs will use proxy settings except URLs match the bypass rules.
     * If true only URLs in the bypass list will use proxy, and all other URLs will be connected to directly.
     *
     * @param { boolean } reverse - If reverse the bypass rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Reverse the bypass rules.
     *
     * If false all URLs will use proxy settings except URLs match the bypass rules.
     * If true only URLs in the bypass list will use proxy, and all other URLs will be connected to directly.
     *
     * @param { boolean } reverse - If reverse the bypass rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    enableReverseBypass(reverse: boolean): void;

    /**
     * Returns the bypass rules.
     *
     * @returns { Array<string> } The bypass rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns the bypass rules.
     *
     * @returns { Array<string> } The bypass rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    getBypassRules(): Array<string>;

    /**
     * Returns the proxy rules.
     *
     * @returns { Array<ProxyRule> } The proxy rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns the proxy rules.
     *
     * @returns { Array<ProxyRule> } The proxy rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    getProxyRules(): Array<ProxyRule>;

    /**
     * Returns if reverse bypass rules.
     *
     * @returns { boolean } If reverse bypass enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns if reverse bypass rules.
     *
     * @returns { boolean } If reverse bypass enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    isReverseBypassEnabled(): boolean;
  }

  /**
   * The ProxyRule used by insertProxyRule.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * The ProxyRule used by insertProxyRule.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19
   */
  class ProxyRule {
    /**
     * Returns the scheme filter used for this rule.
     *
     * @returns { ProxySchemeFilter } The scheme filter used for this rule.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns the scheme filter used for this rule.
     *
     * @returns { ProxySchemeFilter } The scheme filter used for this rule.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    getSchemeFilter(): ProxySchemeFilter;

    /**
     * Returns the proxy URL.
     *
     * @returns { string } The proxy URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns the proxy URL.
     *
     * @returns { string } The proxy URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    getUrl(): string;
  }

  /**
   * The callback for proxy changed.
   *
   * @typedef { function }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * The callback for proxy changed.
   *
   * @typedef { function }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19
   */
  type OnProxyConfigChangeCallback = () => void;

  /**
   * This class is used for set proxy for ArkWeb.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * This class is used for set proxy for ArkWeb.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19
   */
  class ProxyController {
    /**
     * Sets ProxyConfig which will be used by all Webs in the app. URLs that match patterns in the bypass list will connect the server directly.
     * Instead, the request will use the proxy specified by the config. Requests are not guaranteed to use the new proxy immediately; wait for
     * the listener before loading a page. This listener will be called on the UI thread.
     * Note: calling applyProxyOverride will cause any existing system wide setting to be ignored.
     *
     * @param { ProxyConfig } proxyConfig - The proxy config.
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Sets ProxyConfig which will be used by all Webs in the app. URLs that match patterns in the bypass list will connect the server directly.
     * Instead, the request will use the proxy specified by the config. Requests are not guaranteed to use the new proxy immediately; wait for
     * the listener before loading a page. This listener will be called on the UI thread.
     * Note: calling applyProxyOverride will cause any existing system wide setting to be ignored.
     *
     * @param { ProxyConfig } proxyConfig - The proxy config.
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    static applyProxyOverride(proxyConfig: ProxyConfig, callback: OnProxyConfigChangeCallback): void;

    /**
     * Remove the proxy config. Requests are not guaranteed to not use the proxy; Wait for the listener before loading a page. This listener
     * will be called on the UI thread.
     *
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Remove the proxy config. Requests are not guaranteed to not use the proxy; Wait for the listener before loading a page. This listener
     * will be called on the UI thread.
     *
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19
     */
    static removeProxyOverride(callback: OnProxyConfigChangeCallback): void;
  }

  /**
   * Enum type supplied to {@link SetWebDestroyMode} for indicating the web component destroy mode.
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20
   */
  enum WebDestroyMode {  
    /**
     * The normal destroy mode, when the web component triggers destroy,
     * the resources will be released at the appropriate time.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    NORMAL_MODE = 0,

    /**
     * The fast destroy mode, when the web component triggers destroy, the resources will be immediately released.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    FAST_MODE = 1
  }

}

export default webview;
