/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import type PageStateData from './PageStateData';

/**
 * The page state observer.
 * 
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 11
 */
export default class PageStateObserver {
  /**
   * Will be called when page show.
   * 
   * @param { PageStateData } pageStateData - State changed page info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11
   */
  onPageShow(pageStateData: PageStateData): void;

  /**
   * Will be called when page hide.
   * 
   * @param { PageStateData } pageStateData - State changed page info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11
   */
  onPageHide(pageStateData: PageStateData): void;
}