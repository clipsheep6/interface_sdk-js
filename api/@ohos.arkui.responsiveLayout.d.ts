/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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

import mediaQuery from './@ohos.mediaquery';

/**
 * Indicates the breakpoint type.
 *
 * value range:{'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
 */
type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/**
 * Interface for breakpoint properties.
 *
 * @interface Breakpoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface Breakpoint {
  /**
   * Defines the name of Breakpoint.
   * @type { BreakpointType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  name: BreakpointType;

  /**
   * Defines the size of Breakpoint.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  size: number;

  /**
   * Defines the size of Breakpoint.
   * @type { ?mediaQuery.MediaQueryListener }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  mediaQueryListener?: mediaQuery.MediaQueryListener;
}

/**
 * Interface for breakpoint options.
 *
 * @interface BreakpointOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface BreakpointOptions<T> {
  /**
   * Option of breakpoint xs.
   * @type { ?T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  xs?: T;

  /**
   * Option of breakpoint sm.
   * @type { ?T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  sm?: T;

  /**
   * Option of breakpoint md.
   * @type { ?T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  md?: T;

  /**
   * Option of breakpoint lg.
   * @type { ?T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  lg?: T;

  /**
   * Option of breakpoint xl.
   * @type { ?T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  xl?: T;

  /**
   * Option of breakpoint xxl.
   * @type { ?T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 12
   */
  xxl?: T;
}

/**
 * Breakpoint system class
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class BreakpointSystem {
  /**
   * Gets instance of BreakpointSystem.
   *
   * @returns { BreakpointSystem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getInstance(): BreakpointSystem;

  /**
   * Adds breakpointState to states set.
   *
   * @param { BreakpointState<Object> } state
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  attach(state: BreakpointState<Object>): void;

  /**
   * Deletes breakpointState from states set.
   *
   * @param { BreakpointState<Object> } state
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  detach(state: BreakpointState<Object>): void;

  /**
   * Starts BreakpointSystem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  start(): void;

  /**
   * Stops BreakpointSystem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  stop(): void;
}

/**
 * BreakpointState class
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class BreakpointState<T extends Object> {
  /**
   * Constructor.
   *
   * @param { BreakpointOptions<T> } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor(options: BreakpointOptions<T>);

  /**
   * Gets a new BreakpointState.
   *
   * @param { BreakpointOptions<T> } options
   * @returns { BreakpointState<T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  of<T extends Object>(options: BreakpointOptions<T>): BreakpointState<T>;

  /**
   * Updates the value of BreakpointState.
   *
   * @param { BreakpointType } type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  update(type: BreakpointType): void;

  /**
   * Gets the value of BreakpointState.
   *
   * @returns { T | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getValue<T>(): T | undefined; 
}