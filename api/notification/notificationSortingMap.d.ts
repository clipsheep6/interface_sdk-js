/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Provides sorting information about the active notifications among all the notifications that have been subscribed to
 * @kit NotificationKit
 */

import { NotificationSorting } from './notificationSorting';

/**
 * Provides sorting information about the active notifications among all the notifications that have been subscribed to
 *
 * @typedef NotificationSortingMap
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since arkts {'1.1':'7', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface NotificationSortingMap {
  /**
   * An array of notification sort information.
   *
   * @type { Record<string, NotificationSorting> }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly sortings: Record<string, NotificationSorting>;

  /**
   * Notification unique identification array.
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  readonly sortedHashCode: Array<string>;
}
