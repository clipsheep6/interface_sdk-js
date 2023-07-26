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
 * Defines the crumb item info.
 *
 * @interface CrumbItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface CrumbItem {
  /**
   * Item name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  text: string;

  /**
   * Item icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon?: ResourceStr;

  /**
   * Extra parameters.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
   extraParams?: string;
}

/**
 * Defines the option of breadcrumb.
 *
 * @interface BreadcrumbOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface BreadcrumbOptions {
  /**
   * The unique identification of a crumb item.
   *
   * @type { Array<CrumbItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  items: Array<CrumbItem>;

  /**
   * Called when a crumb item is clicked.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onItemClick: (index?: number, event?: DragEvent, extraParams?: string) => void;

  /**
   * Called when a crumb item begins to be dragged.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onItemDragStart: (index?: number, event?: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo;

  /**
   * Called when a component is dragged to the range of the crumb item.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onItemDragEnter: (index?: number, event?: DragEvent, extraParams?: string) => void;

  /**
   * Called when a component is dragged out of the crumb item range.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onItemDragLeave: (index?: number, event?: DragEvent, extraParams?: string) => void;

  /**
   * Called when the drag behavior is stopped within the scope of the crumb item.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onItemDrop: (index?: number, event?: DragEvent, extraParams?: string) => void;

  /**
   * Called when the drag behavior is canceled.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onItemDragCancel: (event?: DragEvent, extraParams?: string) => void;
}

/**
 * Provides the breadcrumb interface.
 *
 * @interface BreadcrumbInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
interface BreadcrumbInterface {
  /**
   * Called when the breadcrumb is set.
   *
   * @param { BreadcrumbOptions } options
   * @returns { BreadcrumbAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (options: BreadcrumbOptions): BreadcrumbAttribute;
}

/**
 * Defines the breadcrumb attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class BreadcrumbAttribute extends CommonMethod<BreadcrumbAttribute> {}

/**
 * Defines Breadcrumb Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const Breadcrumb: BreadcrumbInterface;

/**
 * Defines Breadcrumb Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const BreadcrumbInterface: BreadcrumbAttribute;
