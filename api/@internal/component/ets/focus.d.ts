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
 * @file Provide some common interface for focus.
 * @kit ArkUI
 */

/*** if arkts 1.2 */
import { LengthMetrics , ColorMetrics } from '../Graphics';
/*** endif */

/**
 * Focus box style.
 *
 * @interface FocusBoxStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface FocusBoxStyle {
  /**
   * Describes the focus-box margin.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  margin?: LengthMetrics;
  /**
   * Describes the focus-box color.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  strokeColor?: ColorMetrics;
  /**
   * Describes the focus-box stroke width.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  strokeWidth?: LengthMetrics;
}

/**
 * Focus Priority
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum FocusPriority {
  /**
   * Default priority.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  AUTO = 0,

  /**
   * Prior priority.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PRIOR = 2000,

  /**
   * Previous focus priority.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PREVIOUS = 3000,
}

/**
 * Key processing mode.
 * Determines the priority of key event processing when component cannot handle the key event.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'15','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum KeyProcessingMode {
  /**
   * Key events are used to move focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  FOCUS_NAVIGATION = 0,

  /**
   * Key events bubble up to ancestors.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ANCESTOR_EVENT = 1,
}