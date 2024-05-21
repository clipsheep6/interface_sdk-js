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
 * Mesh container for static fixed-size layout scenarios.
 * @since 10
 */
interface GridItemGroupInterface {
  /**
   * Return to get GridItemGroup.
   * @param { number | string } space - The distance between two GridItemGroups
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (space?: number | string): GridItemGroupAttribute;
}

/**
 * Defines the GridItemGroup attribute functions.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class GridItemGroupAttribute extends CommonMethod<GridItemGroupAttribute> {}

/**
 * Defines GridItemGroup Component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const GridItemGroup: GridItemGroupInterface

/**
 * Defines GridItemGroup Component instance.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const GridItemGroupInstance: GridItemGroupAttribute;
