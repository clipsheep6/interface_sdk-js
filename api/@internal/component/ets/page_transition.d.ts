/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
import { ICurve, TranslateOptions, ScaleOptions } from './common';
import { Curve } from './enums';
/*** endif */

/**
 * Declare the jump method.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare the jump method.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Declare the jump method.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum RouteType {
  /**
   * The page is not redirected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The page is not redirected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The page is not redirected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  None,

  /**
   * Go to the next page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Go to the next page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Go to the next page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Push,

  /**
   * Redirect to a specified page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Redirect to a specified page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Redirect to a specified page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Pop,
}

/**
 * Declare the sliding effect of transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare the sliding effect of transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Declare the sliding effect of transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum SlideEffect {
  /**
   * Swipe left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Swipe left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Swipe left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Left,

  /**
   * Swipe right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Swipe right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Swipe right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Right,

  /**
   * Swipe top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Swipe top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Swipe top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Top,

  /**
   * Swipe bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Swipe bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Swipe bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Bottom,

  /**
   * Swipe start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  START = 5,

  /**
   * Swipe end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  END = 6,
}

/**
 * Provides interfaces for common transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides interfaces for common transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides interfaces for common transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class CommonTransition<T> {
  /**
   * Called when a transition method is required.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a transition method is required.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when a transition method is required.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  constructor();

  /**
   * Called when the slide in effect of the transition is set.
   *
   * @param { SlideEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the slide in effect of the transition is set.
   *
   * @param { SlideEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the slide in effect of the transition is set.
   *
   * @param { SlideEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  slide(value: SlideEffect): T;

  /**
   * Called when the translation effect of page transition is set.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the translation effect of page transition is set.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the translation effect of page transition is set.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the translation effect of page transition is set.
   *
   * Anonymous Object Rectification.
   * @param { TranslateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  translate(value: TranslateOptions): T;

  /**
   * Called when setting the zoom effect of page transition.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when setting the zoom effect of page transition.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when setting the zoom effect of page transition.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when setting the zoom effect of page transition.
   *
   * Anonymous Object Rectification.
   * @param { ScaleOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  scale(value: ScaleOptions): T;

  /**
   * Called when the transparency value of the starting point of entry or the ending point of exit is set.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the transparency value of the starting point of entry or the ending point of exit is set.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the transparency value of the starting point of entry or the ending point of exit is set.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  opacity(value: number): T;
}

/**
 * Provides interfaces for common transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare class CommonTransition {
  /**
   * Called when the slide in effect of the transition is set.
   *
   * @param { SlideEffect } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  slide(value: SlideEffect): this;

  /**
   * Called when the translation effect of page transition is set.
   *
   * @param { TranslateOptions } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  translate(value: TranslateOptions): this;

  /**
   * Called when setting the zoom effect of page transition.
   *
   * @param { ScaleOptions } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  scale(value: ScaleOptions): this;

  /**
   * Called when the transparency value of the starting point of entry or the ending point of exit is set.
   *
   * @param { number } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  opacity(value: number): this;
}

/**
 * Defines pageTransition constructor parameters.
 *
 * @interface PageTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines pageTransition constructor parameters.
 *
 * @interface PageTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines pageTransition constructor parameters.
 *
 * @interface PageTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface PageTransitionOptions {
  /**
   * RouteType in which the pageTransition can work.
   * @type { ?RouteType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * RouteType in which the pageTransition can work.
   * @type { ?RouteType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * RouteType in which the pageTransition can work.
   * @type { ?RouteType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type?: RouteType;
  /**
   * PageTransition animation duration, in ms.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * PageTransition animation duration, in ms.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * PageTransition animation duration, in ms.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  duration?: number;
  /**
   * PageTransition animation curve.
   * @type { ?(Curve | string) }
   * @default Curve.Linear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * PageTransition animation curve.
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.Linear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * PageTransition animation curve.
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.Linear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  curve?: Curve | string | ICurve;
  /**
   * PageTransition animation delay time, in ms.
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * PageTransition animation delay time, in ms.
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * PageTransition animation delay time, in ms.
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  delay?: number;
}

/**
 * Callback used to report page trasition events.
 *
 * @typedef { function } PageTransitionCallback
 * @param { RouteType } type - transition route type
 * @param { number } progress - transition progess
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type PageTransitionCallback = (type: RouteType, progress: number) => void;

/**
 * Provides an interface for page rotation mode.
 *
 * @extends CommonTransition<PageTransitionEnterInterface>
 * @interface PageTransitionEnterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface to set transition style when a page enters.
 *
 * @extends CommonTransition<PageTransitionEnterInterface>
 * @interface PageTransitionEnterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides an interface to set transition style when a page enters.
 *
 * @extends CommonTransition<PageTransitionEnterInterface>
 * @interface PageTransitionEnterInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface PageTransitionEnterInterface extends CommonTransition<PageTransitionEnterInterface> {
  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (value: PageTransitionOptions): PageTransitionEnterInterface;

  /**
   * Called when the incoming parameter is the normalized progress of the current incoming animation.
   *
   * @param { function } event
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called frame by frame to customize pageTransition animation when the page enters.
   * The incoming parameter is the normalized progress of the current incoming animation.
   *
   * @param { function } event - animation callback frame by frame
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called frame by frame to customize pageTransition animation when the page enters.
   * The incoming parameter is the normalized progress of the current incoming animation.
   *
   * @param { function } event - animation callback frame by frame
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called frame by frame to customize pageTransition animation when the page enters.
   * The incoming parameter is the normalized progress of the current incoming animation.
   *
   * Anonymous Object Rectification.
   * @param { PageTransitionCallback } event - animation callback frame by frame
   * @returns { PageTransitionEnterInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onEnter(event: PageTransitionCallback): PageTransitionEnterInterface;
}

/**
 * Provides an interface to set transition style when a page enters.
 *
 * @extends CommonTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare class PageTransitionEnter extends CommonTransition {

  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionEnter }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static $_invoke(value: PageTransitionOptions): PageTransitionEnter;

  /**
   * Called frame by frame to customize pageTransition animation when the page enters.
   * The incoming parameter is the normalized progress of the current incoming animation.
   *
   * @param { PageTransitionCallback } event - animation callback frame by frame
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onEnter(event: PageTransitionCallback): this;
}

/**
 * Provide an interface to exit the transition.
 *
 * @extends CommonTransition<PageTransitionExitInterface>
 * @interface PageTransitionExitInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provide an interface to set transition style when a page exits.
 *
 * @extends CommonTransition<PageTransitionExitInterface>
 * @interface PageTransitionExitInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provide an interface to set transition style when a page exits.
 *
 * @extends CommonTransition<PageTransitionExitInterface>
 * @interface PageTransitionExitInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface PageTransitionExitInterface extends CommonTransition<PageTransitionExitInterface> {
  /**
   * Called when the transition is delayed.
   *
   * @param { PageTransitionOptions } value
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (value: PageTransitionOptions): PageTransitionExitInterface;

  /**
   * Called when the input parameter is the normalized progress of the current exit animation.
   *
   * @param { function } event
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called frame by frame to customize pageTransition animation when the page exits.
   * The input parameter is the normalized progress of the current exit animation.
   *
   * @param { function } event
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called frame by frame to customize pageTransition animation when the page exits.
   * The input parameter is the normalized progress of the current exit animation.
   *
   * @param { function } event
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called frame by frame to customize pageTransition animation when the page exits.
   * The input parameter is the normalized progress of the current exit animation.
   *
   * Anonymous Object Rectification.
   * @param { PageTransitionCallback } event
   * @returns { PageTransitionExitInterface }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onExit(event: PageTransitionCallback): PageTransitionExitInterface;
}

/**
 * Provide an interface to set transition style when a page exits.
 *
 * @extends CommonTransition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20 
 * @arkts 1.2
 */
declare class PageTransitionExit extends CommonTransition {
  /**
   * Called when page Jump animation is used.
   *
   * @param { PageTransitionOptions } value - pageTransition options
   * @returns { PageTransitionExit }
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  static $_invoke(value: PageTransitionOptions): PageTransitionExit;

  /**
   * Called frame by frame to customize pageTransition animation when the page exits.
   * The input parameter is the normalized progress of the current exit animation.
   *
   * @param { PageTransitionCallback } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onExit(event: PageTransitionCallback): this;
}

/**
 * Defines PageTransitionEnter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines PageTransitionEnter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines PageTransitionEnter Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const PageTransitionEnter: PageTransitionEnterInterface;

/**
 * Defines PageTransitionExit Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines PageTransitionExit Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines PageTransitionExit Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const PageTransitionExit: PageTransitionExitInterface;
