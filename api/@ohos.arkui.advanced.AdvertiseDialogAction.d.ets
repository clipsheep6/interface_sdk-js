/* 
 * Copyright (C) 2024 Huawei Device Co., Ltd
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * you may obtain a copy of the License at
 *
 * http://www/apache.org/license/LICENSE-2.0
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

 /// <reference path="../component/units.d.ts" />
 import { ResourceStr, Resource }  from 'GlobalResource';
 import { UIContext } from '@ohos.arkui.UIContext';
 impoer { ComponentContent } from "@ohos.arkui.node";
/**
 * IconStyle enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare enum IconStyle {
    /**
     * Sets the button icon to dark.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    Dark = 0,
    /**
     * Sets the button icon to light.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    Light = 0
}
/**
 * TitlePosition enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare enum TitlePosition {
    /**
     * The main title is above the text content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    Top = 0,
    /**
     * The main title is below the text content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    Bottom = 1
}
/**
 * Defines the properties required by the dialog.
 *
 * @interface DialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare interface DialogOptions {
    /**
     * The UIContext required by the dialog.
     *
     * @type { UIContext }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    uiContext: UIContext;
    /**
     * The title of the dialog.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    title?: ResourceStr;
    /**
     * The subtitle of the dialog.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    subtitle?: ResourceStr;
    /**
     * The background of the dialog.
     *
     * @type { ?Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    backgroundImage?: Resource;
    /**
     * The foreground of the dialog.
     *
     * @type { ?Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    foregroundImage?: Resource;
    /**
     * The style of the close button.
     *
     * @type { ?IconStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    iconStyle: IconStyle;
    /**
     * The relative position of the title and subtitle.
     *
     * @type { ?TitlePosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    titlePosition: TitlePosition;
    /**
     * The action after clicking dialog.
     *
     * @type { ?() => void }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    onDialogClick?: () => void;
    /**
     * The action after clicking close button.
     *
     * @type { ?() => void }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    onDialogClose?: () => void;
}
/**
 * Declare dialog action.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare class AdvertiseDialogAction {
    /**
     * The constructor transfers parameter settings.
     *
     * @param { DialogOptions } value - Creates a new dialog action object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    constructor(value: DialogOptions);
    /**
     * Execute a dialog open event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    openAdvertiseDialog(): void;
    /**
     * Execute a dialog close event.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    closeAdvertiseDialog(): void;
}