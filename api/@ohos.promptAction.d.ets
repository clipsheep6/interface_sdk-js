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


import { ResourceColor, Offset, Dimension, EdgeStyles, EdgeColors } from './arkui/component/units';
import { AsyncCallback,Callback } from './@ohos.base';
import { BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, Rectangle, TransitionEffect, KeyboardAvoidMode, CustomBuilder, DismissReason } from './arkui/component/common';
import { BorderStyle,Alignment } from './arkui/component/enums';
import { EdgeWidths, BorderRadiuses} from './arkui/component/units'
import { Resource } from './global/resource'



/**
 * @namespace promptAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare namespace promptAction {
  
  
  /**
   * @typedef ShowToastOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export interface ShowToastOptions {

    
    
    /**
     * Text to display.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    message: string | Resource;

    
    
    /**
     * Duration of toast dialog box. The default value is 1500.
     * The recommended value ranges from 1500ms to 10000ms.
     * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000ms.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    duration?: number;

    
    
    /**
     * The distance between toast dialog box and the bottom of screen.
     *
     * @type { ?(string | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    bottom?: string | number;

    
    /**
     * Determine the show mode of the toast.
     *
     * @type { ?ToastShowMode }
     * @default ToastShowMode.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    showMode?: ToastShowMode;
    /**
     * Defines the toast alignment of the screen.
     *
     * @type { ?Alignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    alignment?: Alignment;
    /**
     * Defines the toast offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    offset?: Offset;
    /**
     * Background color of toast.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor?: ResourceColor;
    /**
     * Text color of toast.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textColor?: ResourceColor;
    /**
     * Background blur Style of toast.
     *
     * @type { ?BlurStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Shadow of toast.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;

    /**
     * Define whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    enableHoverMode?: boolean;
  
    /**
     * Defines the toast's diaplay area in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    hoverModeArea?: HoverModeAreaType;
  }

  
  /**
   * Enum for the toast showMode.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  export enum ToastShowMode {
    
    /**
     * Toast shows in app.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    DEFAULT = 0,

    
    /**
     * Toast shows at the top.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TOP_MOST = 1,

    /**
     * Toast shows in SYSTEM_TOAST window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 12
     */
    SYSTEM_TOP_MOST = 2
  }

  
  
  /**
   * @typedef Button
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export interface Button {

    
    
    /**
     * The text displayed in the button.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    text: string | Resource;

    
    
    /**
     * The foreground color of button.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    color: string | Resource;
    /**
     * Define whether the button responds to Enter/Space key by default.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    primary?: boolean;
  }

  
  
  /**
   * @typedef ShowDialogSuccessResponse
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export interface ShowDialogSuccessResponse {

    
    
    /**
     * Index of the selected button, starting from 0.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    index: number;
  }

  
  
  /**
   * @typedef ShowDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export interface ShowDialogOptions {

    
    
    /**
     * Title of the text to display.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    title?: string | Resource;

    
    
    /**
     * Text body.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    message?: string | Resource;

    
    
    /**
     * Array of buttons in the dialog box.
     * The array structure is {text:'button', color: '#666666'}.
     * More than one buttons are supported.
     *
     * @type { ?Array<Button> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    buttons?: Array<Button>;

    
    /**
     * Mask Region of dialog. The size can't exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    maskRect?: Rectangle;

    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    offset?: Offset;

    
    /**
     * Whether to display in the sub window.
     * 
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    showInSubWindow?: boolean;
    
    
    /**
     * Whether it is a modal dialog
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isModal?: boolean;

    /**
     * Defines the dialog's background color.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor?: ResourceColor;

    /**
     * Defines the dialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundBlurStyle?: BlurStyle;

    /**
     * Defines the dialog's shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;

    /**
     * Defines whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    enableHoverMode?: boolean;

    /**
     * Defines the dialog's display area in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    hoverModeArea?: HoverModeAreaType;
  }

  
  /**
   * Dialog base options
   *
   * @typedef BaseDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  export interface BaseDialogOptions {
    
    /**
     * Mask Region of dialog. The size can't exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    maskRect?: Rectangle;



    
    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    offset?: Offset;

    
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    showInSubWindow?: boolean;

    
    /**
     * Whether it is a modal dialog
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isModal?: boolean;

    /**
     * Allows users to click the mask layer to exit.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    autoCancel?: boolean;

    /**
     * Transition parameters of opening/closing custom dialog.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    transition?: TransitionEffect;

    /**
     * Defines custom dialog maskColor
     * 
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    maskColor?: ResourceColor;
    
    /**
    * Callback function when the CustomDialog interactive dismiss.
    *
    * @type { ?Callback<DismissDialogAction> }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    onWillDismiss?: Callback<DismissDialogAction>;

    /**
     * Callback function when the dialog appears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDidAppear?: () => void;

    /**
     * Callback function when the dialog disappears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDidDisappear?: () => void;

    /**
     * Callback function before the dialog openAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillAppear?: () => void;

    /**
     * Callback function before the dialog closeAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillDisappear?: () => void;

    /**
     * Defines the customDialog's keyboard avoid mode
     *
     * @type { ?KeyboardAvoidMode }
     * @default KeyboardAvoidMode.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    keyboardAvoidMode?: KeyboardAvoidMode;

    /**
     * Defines whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    enableHoverMode?: boolean;

    /**
     * Defines the customDialog's display area in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    hoverModeArea?: HoverModeAreaType;
  }

  
  /**
   * Dialog's custom content options
   *
   * @interface CustomDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  export interface CustomDialogOptions extends BaseDialogOptions {
    
    /**
     * Allow developer custom dialog's content.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    builder: CustomBuilder;

    /**
     * Defines the custom dialog's background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor?: ResourceColor;

    /**
     * Defines the custom dialog's corner radius.
     *
     * @type { ?(Dimension | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    cornerRadius?: Dimension | BorderRadiuses;

    /**
     * Defines the custom dialog's width.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width?: Dimension;

    /**
     * Defines the custom dialog's height.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    height?: Dimension;

    /**
     * Defines the custom dialog's border width.
     *
     * @type { ?(Dimension | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    borderWidth?: Dimension | EdgeWidths;

    /**
     * Defines the custom dialog's border color.
     *
     * @type { ?(ResourceColor | EdgeColors) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    borderColor?: ResourceColor | EdgeColors;

    /**
     * Defines the custom dialog's border style.
     *
     * @type { ?(BorderStyle | EdgeStyles) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    borderStyle?: BorderStyle | EdgeStyles;

    /**
     * Defines the custom dialog's shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;

    /**
     * Defines the customDialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundBlurStyle?: BlurStyle;
  }

  
  
  /**
   * @typedef ActionMenuSuccessResponse
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export interface ActionMenuSuccessResponse {
    
    
    /**
     * Index of the selected button, starting from 0.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    index: number;
  }

  
  
  /**
   * @typedef ActionMenuOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export interface ActionMenuOptions {
    
    
    /**
     * Title of the text to display.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    title?: string | Resource;

    
    
    /**
     * Array of buttons in the dialog box.
     * The array structure is {text:'button', color: '#666666'}.
     * One to six buttons are supported.
     *
     * @type { [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined, Button | undefined] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    buttons: [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined, Button | undefined];

    
    /**
     * Whether to display in the sub window.
     * 
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    showInSubWindow?: boolean;

    
    /**
     * Whether it is a modal dialog
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isModal?: boolean;         
  }

  
  
  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export function showToast(options: ShowToastOptions): void;

  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @returns { Promise<number> } return the toast id that will be used by closeToast.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  export function openToast(options: ShowToastOptions): Promise<number>;

  /**
   * Close the notification text.
   *
   * @param { number } toastId - the toast id that returned by openToast.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  export function closeToast(toastId: number): void;

  
  
  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @param { AsyncCallback<ShowDialogSuccessResponse> } callback - the callback of showDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export function showDialog(options: ShowDialogOptions, callback: AsyncCallback<ShowDialogSuccessResponse>): void;

  
  
  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @returns { Promise<ShowDialogSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export function showDialog(options: ShowDialogOptions): Promise<ShowDialogSuccessResponse>;

  
  /**
   * Open the custom dialog.
   *
   * @param { CustomDialogOptions } options - Options.
   * @returns { Promise<number> } return the dialog id that will be used by closeCustomDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  export function openCustomDialog(options: CustomDialogOptions): Promise<number>;

  
  /**
   * Close the custom dialog.
   *
   * @param { number } dialogId - the dialog id that returned by openCustomDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  export function closeCustomDialog(dialogId: number): void;

  
  
  /**
   * Displays the menu.
   *
   * @param { ActionMenuOptions } options - Options.
   * @param { AsyncCallback<ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void;

  
  
  /**
   * Displays the dialog box.
   *
   * @param { ActionMenuOptions } options - Options.
   * @returns { Promise<ActionMenuSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>;
}

/**
 * Component dialog dismiss action.
 *
 * @interface DismissDialogAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface DismissDialogAction {
  /**
   * Defines dialog dismiss function.
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  dismiss: Callback<void>;
    
  /**
   * Dismiss reason type.
   *
   * @type { DismissReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  reason: DismissReason;
}
export default  promptAction;