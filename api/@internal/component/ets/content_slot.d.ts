/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

declare type Content = import('../api/arkui/Content').Content;

/**
 * Provides placeholder component for NodeContent and ComponentContent.
 *
 * @interface ContentSlotInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface ContentSlotInterface {

  /**
   * Constructor
   *
   * @param { Content} content - Indicates the class object of ComponentContent or NodeContent.
   * @returns { ContentSlotInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  (content: Content): ContentSlotInterface;
}

/**
 * Defines the ContentSlot Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare const ContentSlot: ContentSlotInterface;