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

/**
 * Enumerates the moving direction of cursor
 * @enum { number }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export enum Direction {
    /**
     * Cursor moves up
     */
    CURSOR_UP = 1,

    /**
     * Cursor moves down
     */
    CURSOR_DOWN,

    /**
     * Cursor moves left
     */
    CURSOR_LEFT,

    /**
     * Cursor moves right
     */
    CURSOR_RIGHT,
}

/**
 * Range of selected text.
 * @interface Range
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface Range {
    /**
     * Indicates the index of the first character of the selected text.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    start: number;

    /**
     * Indicates the index of the last character of the selected text.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    end: number;
}

/**
 * Movement of cursor.
 * @interface Movement
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface Movement {
    /**
     * Indicates the direction of cursor movement
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    direction: Direction;
}

/**
 * Panel information.
 * @typedef PanelInfo
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @StageModelOnly
 * @since 10
 */
export interface PanelInfo {

    /**
     * Panel type.
     * @type { PanelType }
     * @default SOFT_KEYBOARD
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     * @since 10
     */
    type: PanelType;

    /**
     * Flag of Panel.
     * <p>When the panel type is not SOFT_KEYBOARD, the default value { FLG_FIXED_AT_BOTTOM }
     * will be ignore while creating panel.</p>
     * @type { PanelFlags }
     * @default FLG_FIXED_AT_BOTTOM
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     * @since 10
     */
    flag?: PanelFlag;
}

/**
 * Enumerates the flags of panel
 * @enum { number }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export enum PanelFlag {

    /**
     * <p>A flag provided for the SOFT_KEYBOARD panel.
     * When the flag is set, the soft keyboard is fixed at the bottom of the screen.</p>
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    FLG_FIXED_AT_BOTTOM = 0,

    /**
     * <p>A flag provided for the SOFT_KEYBOARD panel.
     * When the flag is set, the soft keyboard is floating.</p>
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    FLG_FLOATING,
}

/**
 * Panel types provided for input method applications.
 * <p>Input method application developers should select the appropriate
 * panel type according to the user scenario.</p>
 * @enum { number }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @StageModelOnly
 * @since 10
 */
export enum PanelType {

    /**
     * Panel for displaying a virtual software keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    SOFT_KEYBOARD = 0,

    /**
     * Panel for displaying a virtual software keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    CANDIDATE_BAR,

    /**
     * Panel for displaying input method status.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    STATUS_BAR,
}
