/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit TestKit
 */

/*** if arkts 1.1&1.2 */
import abilityDelegatorRegistry from '@ohos.app.ability.abilityDelegatorRegistry';
import TestRunner from '@ohos.application.testRunner';
import {
  Component, DisplayRotation, Driver, MatchPattern, MouseButton, ON, On, PointerMatrix, ResizeDirection,
  UIElementInfo, UIEventObserver, UiDirection, UiWindow, WindowMode, Point, WindowFilter, 
  Rect, TouchPadSwipeOptions, InputTextMode
} from '@ohos.UiTest';
/*** endif */

import {PerfMetric, PerfTestStrategy, PerfMeasureResult, PerfTest} from '@ohos.test.PerfTest';

import {
  UiComponent, UiDriver, BY, By
} from '@ohos.UiTest';
export {
  BY, By, Component, DisplayRotation, Driver, MatchPattern, MouseButton, ON, On, PointerMatrix, ResizeDirection,
  TestRunner, UIElementInfo, UIEventObserver, UiComponent, UiDirection, UiDriver, UiWindow,
  WindowMode, abilityDelegatorRegistry, Point, WindowFilter, Rect, TouchPadSwipeOptions, InputTextMode,
  PerfMetric, PerfTestStrategy, PerfMeasureResult, PerfTest
};

/*** if arkts 1.2 */
export {
  Component, DisplayRotation, Driver, MatchPattern, MouseButton, ON, On, PointerMatrix, ResizeDirection,
  TestRunner, UIElementInfo, UIEventObserver, UiDirection, UiWindow, InputTextMode,
  WindowMode, abilityDelegatorRegistry, Point, WindowFilter, Rect, TouchPadSwipeOptions
};
/*** endif */
