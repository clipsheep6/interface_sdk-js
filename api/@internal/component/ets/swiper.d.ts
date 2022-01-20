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
 * Provides methods for switching components.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class SwiperController {
  /**
   * constructor.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor();

  /**
   * Called when the next child component is displayed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  showNext();

  /**
   * Called when the previous subcomponent is displayed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  showPrevious();

  /**
   * Called when need to stop the swiper animation.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  finishAnimation(callback?: () => void);
}

/**
 * Declare the size of the swiper on the spindle.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum SwiperDisplayMode {
  /**
   * Carousel map extension.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  Stretch,

  /**
   * The rotation chart is self linear.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  AutoLinear,
}

/**
 * Provides an interface for sliding containers.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface SwiperInterface {
  /**
   * Called when a sliding container is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (controller?: SwiperController): SwiperAttribute;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class SwiperAttribute extends CommonMethod<SwiperAttribute> {
  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  index(value: number): SwiperAttribute;

  /**
   * Called when setting whether the subcomponent plays automatically.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  autoPlay(value: boolean): SwiperAttribute;

  /**
   * Called when the time interval for automatic playback is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  interval(value: number): SwiperAttribute;

  /**
   * Called when you set whether the navigation point indicator is enabled.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  indicator(value: boolean): SwiperAttribute;

  /**
   * Called when setting whether to turn on cyclic sliding.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  loop(value: boolean): SwiperAttribute;

  /**
   * Called when the animation duration of the switch is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  duration(value: number): SwiperAttribute;

  /**
   * Called when setting whether to slide vertically.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  vertical(value: boolean): SwiperAttribute;

  /**
   * Called when the size of the rotation chart is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  itemSpace(value: number | string): SwiperAttribute;

  /**
   * Called when setting the size of the swiper container on the spindle.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  displayMode(value: SwiperDisplayMode): SwiperAttribute;

  /**
   * Called when setting the cached count of the swiper container one side.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  cachedCount(value: number): SwiperAttribute;

  /**
   * This command is invoked when the number of subcomponents is set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  displayCount(value: number | string): SwiperAttribute;

  /**
   * Invoked when setting the sliding effect
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  effectMode(value: EdgeEffect): SwiperAttribute;

  /**
   * Called when sliding is disableSwipe
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  disableSwipe(value: boolean): SwiperAttribute;

  /**
   * Called when the index value changes.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  onChange(event: (index: number) => void): SwiperAttribute;
}

declare const Swiper: SwiperInterface;
declare const SwiperInstance: SwiperAttribute;
