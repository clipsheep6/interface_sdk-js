/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
import { ResourceStr } from './arkui/component/units';
import { Prop } from './arkui/stateManagement/decorator';
import { Component } from './arkui/component/customComponent';
import { Builder } from './arkui/component/builder';
/*** endif */

/**
 * Declare component SwipeRefresher
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declare component SwipeRefresher
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Declare component SwipeRefresher
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
@Component
export declare struct SwipeRefresher {
  /**
   * Sets the content when loading.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Sets the content when loading.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the content when loading.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  @Prop content?: ResourceStr;

  /**
   * Whether the component is loading.
   * type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Whether the component is loading.
   * type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Whether the component is loading.
   * type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  @Prop isLoading: boolean;

  /**
   * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  @Builder build(): void;
}
