/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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

/**
 * Provides methods for switching components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare class IndicatorComponentController {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 12
   */
  constructor();

  /**
   * Called when the next child component is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  showNext():void;

  /**
   * Called when the previous subcomponent is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  showPrevious():void;

   /**
   * Controlling IndicatorComponent to change to the specified subcomponent.
   *
   * @param { number } index - The index of item to be redirected.
   * @param { boolean } [useAnimation] - If true, swipe to index item with animation. If false, swipe to index item without animation. 
   *      The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  changeIndex(index: number, useAnimation?: boolean):void;
}

/**
 * Provides an interface for indicator.
 *
 * @interface IndicatorComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface IndicatorComponentInterface {
   
  /**
   * Called when a indicator is set.
   *
   * @param { IndicatorComponentController } value - indicator component controller.
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  (controller?: IndicatorComponentController): IndicatorComponentAttribute;
}

/**
 * Defines the IndicatorComponent attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare class IndicatorComponentAttribute extends CommonMethod<IndicatorComponentAttribute> {
 /**
   * Called when the index value of the displayed subcomponent is set in the container.
   *
   * @param { number } value
   * @default 0
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  initialIndex(value: number): IndicatorComponentAttribute;

  /**
   * Sets the total number of indicator.
   *
   * @param { number } value
   * @default 2
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  count(value: number): IndicatorComponentAttribute;

  /**
   * Sets the indicator style.
   *
   * @param { DotIndicator | DigitIndicator } value - the style value
   * @default DotIndicatorComponent
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  style(value: DotIndicator | DigitIndicator): IndicatorComponentAttribute;

  /**
   * Called when setting whether to turn on cyclic sliding.
   *
   * @param { boolean } value
   * @default true
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  loop(value: boolean): IndicatorComponentAttribute;

  /**
   * Called when setting whether to slide vertically.
   *
   * @param { boolean } value
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  vertical(value: boolean): IndicatorComponentAttribute;

  /**
   * Called when the index value changes.
   *
   * @param { Callback<number> } event
   * @returns { IndicatorComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  onChange(event: Callback<number>): IndicatorComponentAttribute;
}

/**
 * Defines IndicatorComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const IndicatorComponent: IndicatorComponentInterface;

/**
 * Defines IndicatorComponent instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const IndicatorComponentInstance: IndicatorComponentAttribute;