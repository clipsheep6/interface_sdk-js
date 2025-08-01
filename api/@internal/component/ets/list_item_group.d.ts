/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
import { ChildrenMainSize, CommonMethod } from './common';
import { CustomBuilder } from './builder'
import { ComponentContent } from '../ComponentContent'
import { ListDividerOptions  } from './list';
/*** endif */

/**
 * Defines the list item group style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Defines the list item group style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ListItemGroupStyle {
  /**
   * Show custom style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Show custom style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NONE = 0,

  /**
   * Show default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Show default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  CARD = 1,
}

/**
 * Defines the list item group options.
 *
 * @interface ListItemGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the list item group options.
 *
 * @interface ListItemGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the list item group options.
 *
 * @interface ListItemGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface ListItemGroupOptions {
  /**
   * Describes the ListItemGroup header.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Describes the ListItemGroup header.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Describes the ListItemGroup header.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  header?: CustomBuilder;

  /**
    * Describes the ListItemGroup headerComponent.
    *
    * @type { ?ComponentContent }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'13','1.2':'20'}
    * @arkts 1.1&1.2
    */
  headerComponent?: ComponentContent;

  /**
   * Describes the ListItemGroup footer.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Describes the ListItemGroup footer.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Describes the ListItemGroup footer.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  footer?: CustomBuilder;

  /**
    * Describes the ListItemGroup footerComponent.
    *
    * @type { ?ComponentContent }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'13','1.2':'20'}
    * @arkts 1.1&1.2
    */
  footerComponent?: ComponentContent;

  /**
   * Describes the ListItemGroup space.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Describes the ListItemGroup space.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Describes the ListItemGroup space.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  space?: number | string;

  /**
   * Describes the ListItemGroup style.
   *
   * @type { ?ListItemGroupStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Describes the ListItemGroup style.
   *
   * @type { ?ListItemGroupStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style?: ListItemGroupStyle;
}

/**
 * Defines the ListItemGroup component
 *
 * @interface ListItemGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the ListItemGroup component
 *
 * @interface ListItemGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the ListItemGroup component
 *
 * @interface ListItemGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ListItemGroupInterface {
  /**
   * Called when interface is called.
   *
   * @param { ListItemGroupOptions } options
   * @returns { ListItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when interface is called.
   *
   * @param { ListItemGroupOptions } options
   * @returns { ListItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when interface is called.
   *
   * @param { ListItemGroupOptions } options
   * @returns { ListItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options?: ListItemGroupOptions): ListItemGroupAttribute;
}

/**
 * Defines the item group attribute functions.
 *
 * @extends CommonMethod<ListItemGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the item group attribute functions.
 *
 * @extends CommonMethod<ListItemGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the item group attribute functions.
 *
 * @extends CommonMethod<ListItemGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class ListItemGroupAttribute extends CommonMethod<ListItemGroupAttribute> {
  /**
   * Called when the ListItemGroup split line style is set.
   *
   * @param { {
   *   strokeWidth: Length;
   *   color?: ResourceColor;
   *   startMargin?: Length;
   *   endMargin?: Length;
   * } | null } value
   * @returns { ListItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when the ListItemGroup split line style is set.
   *
   * @param { {
   *   strokeWidth: Length;
   *   color?: ResourceColor;
   *   startMargin?: Length;
   *   endMargin?: Length;
   * } | null } value
   * @returns { ListItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the ListItemGroup split line style is set.
   *
   * @param { {
   *   strokeWidth: Length;
   *   color?: ResourceColor;
   *   startMargin?: Length;
   *   endMargin?: Length;
   * } | null } value
   * @returns { ListItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the ListItemGroup split line style is set.
   * Anonymous Object Rectification.
   *
   * @param { ListDividerOptions | null } value
   * @returns { ListItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  divider(
    value: ListDividerOptions | null,
  ): ListItemGroupAttribute;

  /**
   * Set children main size for ListItemGroup.
   *
   * @param { ChildrenMainSize } value - children main size for ListItemGroup
   * @returns { ListItemGroupAttribute } the attribute of the ListItemGroup.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  childrenMainSize(value: ChildrenMainSize): ListItemGroupAttribute;
}

/**
 * Defines ListItemGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines ListItemGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines ListItemGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const ListItemGroupInstance: ListItemGroupAttribute;

/**
 * Defines ListItemGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines ListItemGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines ListItemGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const ListItemGroup: ListItemGroupInterface;
