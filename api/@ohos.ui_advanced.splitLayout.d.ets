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
 * Declare SplitLayout.The SplitLayout is used for upper and lower graphic layouts.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
declare struct SplitLayout {
  /**
   * Image in the layout.
   * @type { Resource }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @State mainImage: Resource;

  /**
   * Title text in the layout.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop primaryText: string;

  /**
   * Description text in the layout.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop secondaryText: string;

  /**
   * Auxiliary text in the layout.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop tertiaryText: string;
}
export { SplitLayout };