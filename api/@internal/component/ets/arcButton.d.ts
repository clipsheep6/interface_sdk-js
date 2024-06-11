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
 * @file
 * @kit ArkUI
 */

/**
 * Provides a arc button component.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 * @form
 */

declare enum ArcButtonType {
    /**
     * The upper arc button is located above the circular screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @form
     */
    UPARCBUTTON,
  
    /**
     * The bottom arc button is located below the circular screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @form
     */
    DOWNARCBUTTON,
  }

  /**
 * Provides a arc button style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 * @form
 */
declare enum ArcButtonStyleMode {
    /**
     * Emphasis status, used to emphasize the current action.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @form
     */
    EMPHASIZED,
  
    /**
     * Normal button 02, general interface operation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @form
     */
    NORMAL01,

    /**
     * Normal button 01, general interface operation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @form
     */
    NORMAL02,

     /**
     * Emphasis status warning, used to highlight and warn the current action.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @form
     */
     EMPHASIZEWARN,
  }

    /**
 * Provides a arc button status.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 * @form
 */
declare enum ArcButtonStatus {
    /**
     * Normal state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @form
     */
    NORMAL,
  
    /**
     * Pressed state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @form
     */
    PRESSED,

    /**
     * Unavailable state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @form
     */
    UNAVAILABLE,
  }

/**
 * Defines the arc button options.
 *
 * @interface ArcButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface ArcButtonOptions {
  /**
   * Describes Upper and Down arc button type.
   *
   * @type { ?ArcButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  type?: ArcButtonType;

  /**
   * Describes the controller for scrollable container.
   *
   * @type { ?Scroller }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  styleMode?: ArcButtonStyleMode;

  /**
   * Describes the arc button status.
   *
   * @type { ?ArcButtonStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  status?: ArcButtonStatus;

  /**
   * Describes the arc button displays text.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  resourceText?: ResourceStr;

  /**
   * Describes the arc button dynamic effect switch.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  effectStatus?: boolean;

   /**
   * Describes the arc button Rebound effect dynamic effect.
   *
   * @type { ?ClickEffectLevel }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
   touchEffect?: ClickEffectLevel;
}

/**
 * The arc list interface is extended.
 *
 * @interface ArcListInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface ArcButtonInterface {
  /**
   * Called when interface data is called.
   *
   * @param { ArcButtonOptions } options
   * @returns { ArcButtonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (options?: ArcButtonOptions): ArcButtonAttribute;
}

/**
 * 
 * 
  * Defines the arc list attribute functions.
 * 
 * @extends CommonMethod<ArcButtonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Arc
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ArcButtonAttribute extends CommonMethod<ArcButtonAttribute> {
    /**
     * Supports setting of the upper and down arc buttons.
     *
     * @param { ArcButtonType } type
     * @returns { ArcButtonType }
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setType(type: ArcButtonType):ArcButtonAttribute;
  
    /**
     * Supports setting of arc button style
     *
     * @param { ArcButtonStyleMode } style
     * @returns { ArcButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setStyle(style: ArcButtonStyleMode):ArcButtonAttribute;
  
    /**
     * Supports setting of arc button status.
     *
     * @param { Optional<BarState> } status
     * @returns { ArcButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setStatus(status: ArcButtonStatus):ArcButtonAttribute;
  
    /**
     * Supports setting of text display on the arc button.
     *
     * @param { ResourceStr } text
     * @returns { ArcButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setText(text: ResourceStr):ArcButtonAttribute;
  
    /**
     * Supports setting the callback of arc button touch event.
     *
     * @param { function } event.
     * @returns { ArcButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onTouchEvent(event: (event:TouchEvent)=>void):ArcButtonAttribute;
  
    /**
     * Supports setting the callback of arc button click event.
     *
     * @param { function } event
     * @returns { ArcButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onClickEvent(event: (event:ClickEvent)=>void):ArcButtonAttribute;
  
    /**
     * Support setting arc button dynamic effect curve.
     *
     * @param { ClickEffectLevel } level
     * @returns { ArcButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setEffect(level: ClickEffectLevel):ArcButtonAttribute;
  
    /**
     * Supports the setting of callbacks triggered when gaining focus and losing focus.
     *
     * @param { function } callback
     * @returns { ArcButtonAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onFocusChange(callback: (isFocus:boolean) => void):ArcButtonAttribute
  
    /**
     * Support to set the button background color.
     *
     * @param { ResourceColor } color
     * @returns { ArcButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor(color: ResourceColor):ArcButtonAttribute;
  
    /**
     * Supports setting font colors.
     *
     * @param { ResourceColor } color
     * @returns { ArcButtonAttribute } the attribute of the list.
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fontColor(color: ResourceColor): ArcButtonAttribute;
  
    /**
     * Supports setting the press font color.
     *
     * @param { ResourceColor } color
     * @returns { ArcButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Arc
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pressedFontColor(color: ResourceColor): ArcButtonAttribute;
  }
  
  /**
   * Defines ArcButton Component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  declare const ArcButton: ArcButtonInterface;
  
  /**
   * Defines ArcButton Component instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Arc
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  declare const ArcButtonInterface: ArcButtonAttribute;