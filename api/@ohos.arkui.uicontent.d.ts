/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/// <reference path="../component/units.d.ts" />

import font from "./@ohos.font"
import mediaquery from './@ohos.mediaquery'
import promptAction from './@ohos.promptAction'
import router from './@ohos.router'
import { AnimatorOptions, AnimatorResult} from './@ohos.animator'
import { AsyncCallback } from './@ohos.base'
import { Resource } from 'GlobalResource';

/**
 * The alignment of dialog,
 * @since 10
 */
declare enum DialogAlignment {
  /**
   * Vertical top alignment.
   * @since 10
   */
  Top,

  /**
   * Align vertically to the center.
   * @since 10
   */
  Center,

  /**
   * Vertical bottom alignment.
   * @since 10
   */
  Bottom,

  /**
   * Default alignment.
   * @since 10
   */
  Default,

  /**
   * Align the upper left corner.
   * @since 10
   */
  TopStart,

  /**
   * Align the upper right corner.
   * @since 10
   */
  TopEnd,

  /**
   * Left center alignment.
   * @since 10
   */
  CenterStart,

  /**
   * Right center alignment.
   * @since 10
   */
  CenterEnd,

  /**
   * Align the lower left corner.
   * @since 10
   */
  BottomStart,

  /**
   * Align the lower right corner.
   * @since 10
   */
  BottomEnd,
}

/**
 * The information of sheet.
 * @since 10
 */
declare interface SheetInfo {
  /**
   * Title Properties
   * @since 10
   */
  title: string | Resource;

  /**
   * Icon Properties.
   * @since 10
   */
  icon?: string | Resource;

  /**
   * Callback method after the operation.
   * @since 10
   */
  action: () => void;
}

/**
 * The value of ActionSheet,
 * @since 10
 */
declare interface ActionSheetValue {
  /**
   * Title Properties
   * @since 10
   */
  title: string | Resource;
  
  /**
   * message Properties
   * @since 10
   */
  message: string | Resource;
  
  /**
   * Invoke the commit function.
   * @since 10
   */
  confirm?: {
    /**
     * Text content of the confirmation button.
     * @since 10
     */
    value: string | Resource;
    
    /**
     * Method executed by the callback.
     * @since 10
     */
    action: () => void;
  };
  
  /**
   * Execute Cancel Function.
   * @since 10
   */
  cancel?: () => void;
  
  /**
   * The Array of sheets
   * @since 10
   */
  sheets: Array<SheetInfo>;
  
  /**
   * Allows users to click the mask layer to exit.
   * @since 10
   */
  autoCancel?: boolean;
  
  /**
   * Alignment in the vertical direction.
   * @since 10
   */
  alignment?: DialogAlignment;
  
  /**
   * Offset of the pop-up window relative to the alignment position.
   * @since 10
   */
  offset?: { dx: number | string | Resource; dy: number | string | Resource };
}

/**
 * Interface for curve object.
 * @form
 * @since 10
 */
declare interface ICurve {
  /**
   * Get curve value by fraction.
   * @form
   * @since 10
   */
  interpolate(fraction: number): number;
}

/**
 * Sets the animation playback mode. By default, the animation starts to play again after the playback is complete.
 * @form
 * @since 10
 */
declare enum Curve {
  /**
   * Indicates that the speed of the animation is the same from start to finish.
   * @form
   * @since 10
   */
  Linear,

  /**
   * Indicates that the animation starts at a low speed, then accelerates, and then slows down before it ends, CubicBezier(0.25, 0.1, 0.25, 1.0).
   * @form
   * @since 10
   */
  Ease,

  /**
   * Indicates that the animation starts at a low speed, CubicBezier(0.42, 0.0, 1.0, 1.0).
   * @form
   * @since 10
   */
  EaseIn,

  /**
   * Indicates that the animation ends at a low speed, CubicBezier(0.0, 0.0, 0.78, 1.0).
   * @form
   * @since 10
   */
  EaseOut,

  /**
   * Indicates that the animation starts and ends at a slow speed, CubicBezier(0.42, 0.0, 0.78, 1.0).
   * @form
   * @since 10
   */
  EaseInOut,

  /**
   * Slow-in, fast-out
   * @form
   * @since 10
   */
  FastOutSlowIn,

  /**
   * Linear Out Slow In
   * @form
   * @since 10
   */
  LinearOutSlowIn,

  /**
   * Fast Out Linear In.
   * @form
   * @since 10
   */
  FastOutLinearIn,

  /**
   * Extreme Deceleration.
   * @form
   * @since 10
   */
  ExtremeDeceleration,

  /**
   * Sharp.
   * @form
   * @since 10
   */
  Sharp,

  /**
   * Rhythm.
   * @form
   * @since 10
   */
  Rhythm,

  /**
   * Smooth.
   * @form
   * @since 10
   */
  Smooth,

  /**
   * Damping curve, CubicBezier(0.2, 0.0, 0.2, 1.0).
   * @form
   * @since 10
   */
  Friction,
}

/**
 * Play Mode
 * @form
 * @since 10
 */
declare enum PlayMode {
  /**
   * The animation plays normally.
   * @form
   * @since 10
   */
  Normal,

  /**
   * The animation plays backwards.
   * @form
   * @since 10
   */
  Reverse,

  /**
   * The animation plays forward on odd numbers (1, 3, 7...) and backward on even numbers (2, 4, 6...).
   * @form
   * @since 10
   */
  Alternate,

  /**
   * The animation plays backwards on odd numbers (1, 3, 7...) and forwards on even numbers (2, 4, 6...)..
   * @form
   * @since 10
   */
  AlternateReverse,
}

/**
 * common enum of color
 * @form
 * @since 10
 */
declare enum Color {
  /**
   * White.
   * @form
   * @since 10
   */
  White,

  /**
   * Black.
   * @form
   * @since 10
   */
  Black,

  /**
   * Blue.
   * @form
   * @since 10
   */
  Blue,

  /**
   * Brown.
   * @form
   * @since 10
   */
  Brown,

  /**
   * Gray.
   * @form
   * @since 10
   */
  Gray,

  /**
   * Green.
   * @form
   * @since 10
   */
  Green,

  /**
   * Grey.
   * @form
   * @since 10
   */
  Grey,

  /**
   * Orange.
   * @form
   * @since 10
   */
  Orange,

  /**
   * color.
   * @form
   * @since 10
   */
  Pink,

  /**
   * Red.
   * @form
   * @since 10
   */
  Red,

  /**
   * Yellow.
   * @form
   * @since 10
   */
  Yellow,

  /**
   * Transparent.
   * @form
   * @since 10
   */
  Transparent,
}

/**
 * Defines the animate function params.
 * @form
 * @since 10
 */
declare interface AnimateParam {
  /**
   * Animation duration, in ms.
   * @form
   * @since 10
   */
  duration?: number;

  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   * @since 10
   */
  tempo?: number;

  /**
   * Animation curve.
   * @type { string | Curve | ICurve}
   * @form
   * @since 10
   */
  curve?: Curve | string | ICurve;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 10
   */
  delay?: number;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @since 10
   */
  iterations?: number;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   * @form
   * @since 10
   */
  playMode?: PlayMode;

  /**
   * Callback invoked when the animation playback is complete.
   * @form
   * @since 10
   */
  onFinish?: () => void;
}

/**
 * Defines the offset property.
 * @since 10
 */
declare type Offset = {
  /**
   * dx property.
   */
  dx: Length;

  /**
   * dy property.
   */
  dy: Length;
};

/**
 * Defines the length property with string, number and resource unit.
 * @since 10
 */
declare type Length = string | number | Resource;

/**
 * Defines the string which can use resource.
 * @since 10
 */
declare type ResourceStr = string | Resource;

/**
 * Defines the color which can use resource.
 * @since 10
 */
declare type ResourceColor = Color | number | string | Resource;

/**
 * Base param used for AlertDialog.show method.
 * @since 10
 */
declare interface AlertDialogParam {
  /**
   * Title Properties
   * @since 10
   */
  title?: ResourceStr;

  /**
   * message Properties
   * @since 10
   */
  message: ResourceStr;

  /**
   * Allows users to click the mask layer to exit.
   * @since 10
   */
  autoCancel?: boolean;

  /**
   * Execute Cancel Function.
   * @since 10
   */
  cancel?: () => void;

  /**
   * Alignment in the vertical direction.
   * @since 10
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the pop-up window relative to the alignment position.
   * @since 10
   */
  offset?: Offset;

  /**
   * Grid count of dialog.
   * @since 10
   */
  gridCount?: number;
}

/**
 * Defines the AlertDialog with confirm button.
 * @since 10
 */
declare interface AlertDialogParamWithConfirm extends AlertDialogParam {
  /**
   * Invoke the commit function.
   * @since 10
   */
  confirm?: {
    /**
     * Text content of the confirmation button.
     * @since 10
     */
    value: ResourceStr;

    /**
     * Text color of the confirmation button.
     * @since 10
     */
    fontColor?: ResourceColor;

    /**
     * Background color of the confirmation button.
     * @since 10
     */
    backgroundColor?: ResourceColor;

    /**
     * Method executed by the callback.
     * @since 10
     */
    action: () => void;
  };
}

/**
 * Defines the dialog param with buttons.
 * @since 10
 */
declare interface AlertDialogParamWithButtons extends AlertDialogParam {
  /**
   * First button.
   * @since 10
   */
  primaryButton: {
      /**
       * Text content of the confirmation button.
       * @since 10
       */
      value: ResourceStr;

      /**
       * Text color of the confirmation button.
       * @since 10
       */
      fontColor?: ResourceColor;

      /**
       * Background color of the confirmation button.
       * @since 10
       */
      backgroundColor?: ResourceColor;

      /**
       * Method executed by the callback.
       * @since 10
       */
      action: () => void;
  };

  /**
   * Second button.
   * @since 10
   */
  secondaryButton: {
    /**
     * Text content of the confirmation button.
     * @since 10
     */
    value: ResourceStr;

    /**
     * Text color of the confirmation button.
     * @since 10
     */
    fontColor?: ResourceColor;

    /**
     * Background color of the confirmation button.
     * @since 10
     */
    backgroundColor?: ResourceColor;

    /**
     * Method executed by the callback.
     * @since 10
     */
    action: () => void;
  };
}

/**
 * Defines the struct of DatePickerResult.
 * @since 10
 */
declare interface DatePickerResult {
  /**
   * Application year
   * @since 10
   */
  year?: number;

  /**
   * Application month
   * @since 10
   */
  month?: number;

  /**
   * Application day
   * @since 10
   */
  day?: number;
}

/**
 * Provide an interface for the text style of picker
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface PickerTextStyle {
  /**
   * Define the text color of picker.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  color?: ResourceColor;

  /**
   * Define the text font of picker.
   * Only support size and weight.
   * @type { Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  font?: Font;
}

/**
 * Defines the options of DatePicker.
 * @since 10
 */
declare interface DatePickerOptions {
  /**
   * Specifies the start date of the date selector.
   * @since 10
   */
  start?: Date;

  /**
   * Specifies the end date for the date selector.
   * @since 10
   */
  end?: Date;

  /**
   * Specifies the date selector check date or time selector check time.
   * @since 10
   */
  selected?: Date;
}

/**
 * Defines the DatePickerDialogOptions for Data Picker Dialog.
 * @since 10
 */
declare interface DatePickerDialogOptions extends DatePickerOptions {
  /**
   * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
   * @since 10
   */
  lunar?: boolean;

  /**
   * Indicates whether to show the time selector.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showTime?: boolean;

  /**
   * Indicates whether to display the 24-hour clock.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  useMilitaryTime?: boolean;

  /**
   * Text style of disappearing items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * Text style of normal items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textStyle?: PickerTextStyle;

  /**
   * Text style of selected items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * Called when the OK button in the dialog is clicked.
   * @since 10
   */
  onAccept?: (value: DatePickerResult) => void;

  /**
   * Called when the Cancel button in the dialog is clicked.
   * @since 10
   */
  onCancel?: () => void;

  /**
   * This event is triggered when a DatePicker date or time is selected in dialog.
   * @since 10
   */
  onChange?: (value: DatePickerResult) => void;
}

/**
 * Defines the struct of TimePickerResult.
 * @since 10
 */
declare interface TimePickerResult {
  /**
   * Application hour
   * @since 10
   */
  hour?: number;

  /**
   * Application minute
   * @since 10
   */
  minute?: number;
}

/**
 * Defines the options of TimePicker.
 * @since 10
 */
declare interface TimePickerOptions {
  /**
   * Specifies the time selector check time.
   */
  selected?: Date;
}

/**
 * Defines the TimePickerDialogOptions for Data Picker Dialog.
 * @since 10
 */
declare interface TimePickerDialogOptions extends TimePickerOptions {
  /**
   * Time Selector: indicates whether to display the 24-hour clock.
   * @since 10
   */
  useMilitaryTime?: boolean;

  /**
   * Text style of disappearing items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * Text style of normal items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textStyle?: PickerTextStyle;

  /**
   * Text style of selected items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * Called when the OK button in the dialog is clicked.
   * @since 10
   */
  onAccept?: (value: TimePickerResult) => void;

  /**
   * Called when the Cancel button in the dialog is clicked.
   * @since 10
   */
  onCancel?: () => void;

  /**
   * This event is triggered when a TimePicker Time or time is selected in dialog.
   * @since 10
   */
  onChange?: (value: TimePickerResult) => void;
}

/**
 * Defines the struct of TextPickerResult.
 * @since 10
 */
declare interface TextPickerResult {
  /**
   * The currently selected value.
   * Only valid when only text is displayed.When picture or picture plus text is displayed, the value of value is "".
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: string;

  /**
   * The subscript of the current selection.
   * @since 10
   */
  index: number;
}

/**
 * Define the contents of each selector item.
 * @interface TextPickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface TextPickerRangeContent {
  /**
   * Specifies the icon content.
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon: string | Resource;

  /**
   * Specifies the text content.
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  text?: string | Resource;
}

/**
 * Defines the options of TextPicker.
 * @since 10
 */
declare interface TextPickerOptions {
  /**
   * Specifies the range of the selector.
   * Support the display of pictures, text and pictures plus text
   * @type { string[] | Resource | TextPickerRangeContent[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  range: string[] | Resource | TextPickerRangeContent[];

  /**
   * Value of the current selection.
   * Only valid when only text is displayed.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value?: string;

  /**
   * Current selected subscript.
   */
  selected?: number;
}

/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 * @since 10
 */
declare interface TextPickerDialogOptions extends TextPickerOptions {
  /**
   * Called when the default height of the selected element is set.
   * @since 10
   */
  defaultPickerItemHeight?: number | string;

  /**
   * Text style of disappearing items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * Text style of normal items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textStyle?: PickerTextStyle;

  /**
   * Text style of selected items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * Called when the OK button in the dialog is clicked.
   * @since 10
   */
  onAccept?: (value: TextPickerResult) => void;

  /**
   * Called when the Cancel button in the dialog is clicked.
   * @since 10
   */
  onCancel?: () => void;

  /**
   * This event is triggered when a TextPicker text is selected in dialog.
   * @since 10
   */
  onChange?: (value: TextPickerResult) => void;
}

/**
 * class Font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export class Font {
  /**
   * Register a customized font in the FontManager.
   * @param options FontOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  registerFont(options: font.FontOptions): void
}

/**
 * class Mediaquery
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export class Mediaquery {
  /**
   * Sets the media query criteria and returns the corresponding listening handle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  matchMediaSync(condition: string): mediaquery.MediaQueryListener
}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export class Router{
  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   * @param { RouterOptions } options - Options.
   * @param { AsyncCallback<void> } callback - the callback of pushUrl.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - if UI execution context not found.
   * @throws { BusinessError } 100002 - if the uri is not exist.
   * @throws { BusinessError } 100003 - if the pages are pushed too much.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   * @param { RouterOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - if UI execution context not found.
   * @throws { BusinessError } 100002 - if the uri is not exist.
   * @throws { BusinessError } 100003 - if the pages are pushed too much.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  pushUrl(options: router.RouterOptions): Promise<void>;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   * @param { RouterOptions } options - Options.
   * @param { RouterMode } mode - RouterMode.
   * @param { AsyncCallback<void> } callback - the callback of pushUrl.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - if UI execution context not found.
   * @throws { BusinessError } 100002 - if the uri is not exist.
   * @throws { BusinessError } 100003 - if the pages are pushed too much.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application based on the page URL and parameters.
   * @param { RouterOptions } options - Options.
   * @param { RouterMode } mode - RouterMode.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - if UI execution context not found.
   * @throws { BusinessError } 100002 - if the uri is not exist.
   * @throws { BusinessError } 100003 - if the pages are pushed too much.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  pushUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   * @param { RouterOptions } options - Options.
   * @param { AsyncCallback<void> } callback - the callback of replaceUrl.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - if UI execution context not found, only throw in standard system.
   * @throws { BusinessError } 200002 - if the uri is not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   * @param { RouterOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - if UI execution context not found, only throw in standard system.
   * @throws { BusinessError } 200002 - if the uri is not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  replaceUrl(options: router.RouterOptions): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   * @param { RouterOptions } options - Options.
   * @param { RouterMode } mode - RouterMode.
   * @param { AsyncCallback<void> } callback - the callback of replaceUrl.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - if UI execution context not found, only throw in standard system.
   * @throws { BusinessError } 200002 - if the uri is not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   * @param { RouterOptions } options - Options.
   * @param { RouterMode } mode - RouterMode.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - if can not get the delegate, only throw in standard system.
   * @throws { BusinessError } 200002 - if the uri is not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  replaceUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * Returns to the previous page or a specified page.
   * @param { RouterOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  back(options: router.RouterOptions): void;

  /**
   * Clears all historical pages and retains only the current page at the top of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  clear(): void;

  /**
   * Obtains the number of pages in the current stack.
   * @returns { string } Number of pages in the stack. The maximum value is 32.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getLength(): string;

  /**
   * Obtains information about the current page state.
   * @returns { RouterState }Page state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getState(): router.RouterState;

  /**
   * Pop up alert dialog to ask whether to back
   * @param { EnableAlertOptions } options - Options.
   * @throws { BusinessError } 401 - if the type of the parameter is not object or the type of the message is not string.
   * @throws { BusinessError } 100001 - if UI execution context not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showAlertBeforeBackPage(options: router.EnableAlertOptions): void;

  /**
   * Hide alert before back page
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  hideAlertBeforeBackPage(): void;

  /**
   * Obtains information about the current page params.
   * @returns { Object }Page params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  getParams(): Object;
}

/**
 * class Animator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export class Animator{
  /**
   * Create an animator object for custom animation.
   * @param { AnimatorOptions } options - Options.
   * @throws { BusinessError } 401 - if parameter error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  create(options: AnimatorOptions): AnimatorResult;
}

/**
 * class PromptAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export class PromptAction{
  /**
   * Displays the notification text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showToast(options: promptAction.ShowToastOptions): void;

  /**
   * Displays the dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showDialog(options: promptAction.ShowDialogOptions, callback: AsyncCallback<promptAction.ShowDialogSuccessResponse>): void;

  /**
   * Displays the dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showDialog(options: promptAction.ShowDialogOptions): Promise<promptAction.ShowDialogSuccessResponse>;

  /**
   * Displays the menu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showActionMenu(options: promptAction.ActionMenuOptions, callback: promptAction.ActionMenuSuccessResponse): void;

  /**
   * Displays the menu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showActionMenu(options: promptAction.ActionMenuOptions): Promise<promptAction.ActionMenuSuccessResponse>;
}

/**
 * class UIContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export class UIContent {
  /**
   * get object font
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @return object Font
   * @since 10
   */
  getFont(): Font;

  /**
   * get object mediaquery
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @return object Mediaquery
   * @since 10
   */
  getMediaquery(): Mediaquery;

  /**
   * get object router
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @return object Router
   * @since 10
   */
  getRouter(): Router;

  /**
   * get object animator
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @return object Animator
   * @since 10
   */
  getAnimator(): Animator;

  /**
   * get object PromptAction
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @return object PromptAction
   * @since 10
   */
  getPromptAction(): PromptAction;

  /**
   * Defining animation function.
   * Defining animation function
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  animateTo(value: AnimateParam, event: () => void): void;

  /**
   * alertDialog display
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showAlertDialog(options: AlertDialogParamWithConfirm | AlertDialogParamWithButtons): void;

  /**
   * actionsheet display
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showActionSheet(value: ActionSheetValue): void;

  /**
   * datepickerDialog display
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showDatePickerDialog(options: DatePickerDialogOptions): void;

  /**
   * timepickerDialog display
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showTimePickerDialog(options: TimePickerDialogOptions): void;

  /**
   * textpickerDialog display
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showTextPickerDialog(options: TextPickerDialogOptions): void;

  /**
   * before use uiContent needed
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  enterScope(): void;

  /**
   * after use uiContent needed
   * @syscap SystemCapability.ArkUI.ArkUI.Ful
   * @since 10
   */
  exitScope(): void;
}
