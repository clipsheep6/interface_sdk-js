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
 * Defines the size type.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum SizeType {
  /**
   * Select a value based on the device type.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Auto,

  /**
   * Select a value based on the device type.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  XS,

  /**
   * Small width type device.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  SM,

  /**
   * Medium width type device.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  MD,

  /**
   * Large width type device.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LG,
}

/**
 * Defines the option of GridContainer.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface GridContainerOption {
  /**
   * Sets the total number of columns in the current layout.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  columns?: number | "auto";

  /**
   * Select the device width type.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  sizeType?: SizeType;

  /**
   * Grid layout column spacing.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  gutter?: number | string;

  /**
   * Spacing on both sides of the grid layout.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  margin?: number | string;
}

/**
 * Defines the GridContainer component.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface GridContainerInterface {
  /**
   * Defines the constructor of GridContainer.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (value?: GridContainerOption): GridContainerAttribute;
}

/**
 * Defines the grid container attribute from inheritance Column
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class GridContainerAttribute extends ColumnAttribute {}

declare const GridContainer: GridContainerInterface
declare const GridContainerInstance: GridContainerAttribute;
