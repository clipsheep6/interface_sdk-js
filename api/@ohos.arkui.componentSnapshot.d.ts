/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/*** if arkts 1.2 */
import { CustomBuilder } from './arkui/component/builder';
/*** endif */

import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';

/**
 * This module allows developers to export snapshot image from a component or a custom builder.
 *
 * @namespace componentSnapshot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * This module allows developers to export snapshot image from a component or a custom builder.
 *
 * @namespace componentSnapshot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace componentSnapshot {
  /**
   * Defines the extra options for snapshot taking.
   *
   * @typedef SnapshotRegion
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface SnapshotRegion {
    /**
     * Left side position of rectangle, in PX.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    left: number;

    /**
     * Right side position of Rectangle, in PX.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    right: number;

    /**
     * Top side position of Rectangle, in PX.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    top: number;

    /**
     * Bottom side position of Rectangle, in PX.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    bottom: number;
  }

  /**
   * Defines the extra options for snapshot taking, if this is used, the start and end will
   * be assigned to left and right value according to the layout direction of node automaticlly.
   *
   * @typedef LocalizedSnapshotRegion
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface LocalizedSnapshotRegion {
    /**
     * Left/Right side position of rectangle, in PX
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    start: number;

    /**
     * End side position of Rectangle, in PX.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    end: number;

    /**
     * Left/Right side position of rectangle, in PX
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    top: number;

    /**
     * Bottom side position of Rectangle, in PX.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    bottom: number;
  }
  
  /**
   * Defines the snapshot region rect type.
   *
   * @typedef { SnapshotRegion | LocalizedSnapshotRegion } SnapshotRegionType
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export type SnapshotRegionType = SnapshotRegion | LocalizedSnapshotRegion;

  /**
   * Defines the extra options for snapshot taking.
   *
   * @typedef SnapshotOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface SnapshotOptions {
    /**
     * Defines the scale property to render the snapshot.
     *
     * @type {?number}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    scale?: number

    /**
     * Whether to wait the rendering is finished.
     *
     * @type {?boolean}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    waitUntilRenderFinished?: boolean

    /**
     * Defines the rect reigon type of the snapshot.
     *
     * @type {?SnapshotRegionType}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'15','1.2':'20'}
     * @arkts 1.1&1.2
     */
    region?: SnapshotRegionType
  }

  /**
   * Take a snapshot of the target component.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Take a snapshot of the target component.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @param { SnapshotOptions } [options] - Define the snapshot options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentSnapshot#get
   * @arkts 1.1&1.2
   */
  function get(id: string, callback: AsyncCallback<image.PixelMap>, options?: SnapshotOptions): void;

  /**
   * Take a snapshot of the target component.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Take a snapshot of the target component.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { SnapshotOptions } [options] - Define the snapshot options.
  * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentSnapshot#get
   * @arkts 1.1&1.2
   */
  function get(id: string, options?: SnapshotOptions): Promise<image.PixelMap>;

  /**
   * Generate a snapshot from a custom component builder.
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Generate a snapshot from a custom component builder.
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @param { number } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { SnapshotOptions } [options] - Define the snapshot options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   * the ready state is required when the checkImageStatus option is enabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentSnapshot#createFromBuilder
   * @arkts 1.1&1.2
   */
  function createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>,
    delay?: number, checkImageStatus?: boolean, options?: SnapshotOptions): void;

  /**
   * Generate a snapshot from a custom component builder.
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Generate a snapshot from a custom component builder.
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { number } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   * the ready state is required when the checkImageStatus option is enabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentSnapshot#createFromBuilder
   * @arkts 1.1&1.2
   */
  function createFromBuilder(builder: CustomBuilder, delay?: number,
    checkImageStatus?: boolean, options?: SnapshotOptions): Promise<image.PixelMap>;

  /**
   * Take a screenshot of the specified component in synchronous mode,
   * this mode will block the main thread, please use it with caution, the maximum
   * waiting time of the interface is 3s, if it does not return after 3s, an exception will be thrown.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { SnapshotOptions } [options] - Define the snapshot options.
   * @returns { image.PixelMap } The snapshot result in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  export function getSync(id: string, options?: SnapshotOptions): image.PixelMap;
}

export default componentSnapshot;
