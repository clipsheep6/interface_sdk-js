/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { CommonMethod } from './common';
import { LengthMetrics } from '../Graphics';
/*** endif */

/**
 * Defines the lazy vertical grid layout component.
 *
 * @interface LazyVGridLayoutInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'19','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface LazyVGridLayoutInterface {
  /**
   * Construct the lazy vertical grid attribute.
   *
   * @returns { LazyVGridLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (): LazyVGridLayoutAttribute;
}

/**
 * Defines the lazy grid layout attribute.
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'19','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class LazyGridLayoutAttribute<T> extends CommonMethod<T> {
  /**
   * The spacing between rows.
   *
   * @param { LengthMetrics } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
  rowsGap(value: LengthMetrics): T;

  /**
   * The spacing between columns.
   *
   * @param { LengthMetrics } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
  columnsGap(value: LengthMetrics): T;
}

/**
 * Defines the lazy vertical grid layout attribute.
 *
 * @extends LazyGridLayoutAttribute<LazyVGridLayoutAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'19','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class LazyVGridLayoutAttribute extends LazyGridLayoutAttribute<LazyVGridLayoutAttribute> {
  /**
   * This parameter specifies the number of columns in the current grid layout.
   *
   * @param { string } value
   * @returns { LazyVGridLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'19','1.2':'20'}
   * @arkts 1.1&1.2
   */
  columnsTemplate(value: string): LazyVGridLayoutAttribute;
}

/**
 * Defines the lazy vertical grid layout component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare const LazyVGridLayout: LazyVGridLayoutInterface;

/**
 * Defines the lazy vertical grid layout component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare const LazyVGridLayoutInstance: LazyVGridLayoutAttribute;
  