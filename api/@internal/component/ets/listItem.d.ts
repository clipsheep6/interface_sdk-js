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
 * Declare item ceiling attribute.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum Sticky {
  /**
   * No sticky.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,

  /**
   * Normal mode
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Normal,

  /**
   * Set opacity.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Opacity,
}

/**
 * Declare whether the ListItem element is editable.
 * @devices phone, tablet
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum EditMode {
  /**
   * Unrestricted operations.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  None,

  /**
   * Deleteable.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Deletable,

  /**
   * Movable.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Movable,
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */

/**
 * Values in the list
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ListItemInterface {
  /**
   * Called when an interface is used.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: string): ListItemAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class ListItemAttribute extends CommonMethod<ListItemAttribute> {
  /**
   * Called when setting whether item is ceiling effect.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  sticky(value: Sticky): ListItemAttribute;

  /**
   * Called when judging whether it is editable.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  editable(value: boolean | EditMode): ListItemAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const ListItemInstance: ListItemAttribute;
declare const ListItem: ListItemInterface;

