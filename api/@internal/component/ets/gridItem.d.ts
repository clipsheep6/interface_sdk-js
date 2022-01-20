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
 * Mesh container for static fixed-size layout scenarios.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface GridItemInterface {
  /**
   * Return to get GridItem.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (): GridItemAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class GridItemAttribute extends CommonMethod<GridItemAttribute> {
  /**
   * This parameter specifies the start line number of the current element.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  rowStart(value: number): GridItemAttribute;

  /**
   * Specifies the end line number of the current element.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  rowEnd(value: number): GridItemAttribute;

  /**
   * This parameter specifies the start column number of the current element.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  columnStart(value: number): GridItemAttribute;

  /**
   * This parameter specifies the end column number of the current element.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  columnEnd(value: number): GridItemAttribute;

  /**
   * This parameter specifies whether to recreate the node when the component build is triggered.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  forceRebuild(value: boolean): GridItemAttribute;
}

declare const GridItem: GridItemInterface
declare const GridItemInstance: GridItemAttribute;
