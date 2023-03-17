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
 * Enumerates the text input type.
 * @enum { number }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export enum TextInputType {
    /**
     * The text input type is NONE.
     */
    NONE = -1,

    /**
     * The text input type is TEXT.
     */
    TEXT = 0,

    /**
     * The text input type is MULTILINE.
     */
    MULTILINE,

    /**
     * The text input type is NUMBER.
     */
    NUMBER,

    /**
     * The text input type is PHONE.
     */
    PHONE,

    /**
     * The text input type is DATETIME.
     */
    DATETIME,

    /**
     * The text input type is EMAIL_ADDRESS.
     */
    EMAIL_ADDRESS,

    /**
     * The text input type is URL.
     */
    URL,

    /**
     * The text input type is VISIBLE_PASSWORD.
     */
    VISIBLE_PASSWORD,
}

/**
 * Enumerates the enter key type.
 * @enum { number }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export enum EnterKeyType {
    /**
     * The enter key type is UNSPECIFIED.
     */
    UNSPECIFIED = 0,

    /**
     * The enter key type is NONE.
     */
    NONE,

    /**
     * The enter key type is GO.
     */
    GO,

    /**
     * The enter key type is SEARCH.
     */
    SEARCH,

    /**
     * The enter key type is SEND.
     */
    SEND,

    /**
     * The enter key type is NEXT.
     */
    NEXT,

    /**
     * The enter key type is DONE.
     */
    DONE,

    /**
     * The enter key type is PREVIOUS.
     */
    PREVIOUS,
}

/**
 * Enumerates the keyboard status.
 * @enum { number }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export enum KeyboardStatus {
    /**
     * The keyboard status is none.
     */
    NONE = 0,

    /**
     * The keyboard status is hide.
     */
    HIDE = 1,

    /**
     * The keyboard status is show.
     */
    SHOW = 2
}

/**
 * Enumerates the extend action.
 * @enum { number }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export enum ExtendAction {
    /**
     * Select all text.
     */
    SELECT_ALL = 0,

    /**
     * Cut selecting text.
     */
    CUT = 3,

    /**
     * Copy selecting text.
     */
    COPY = 4,

    /**
     * Paste from paste board.
     */
    PASTE = 5,
}

/**
 * Information of Cursor.
 * @typedef CursorInfo
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface CursorInfo {
    /**
     * Indicates the left point of the cursor info and must be absolute coordinate of the physical screen.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    left: number;

    /**
     * Indicates the top point of the cursor info and must be absolute coordinate of the physical screen.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    top: number;

    /**
     * Indicates the width point of the cursor info.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    width: number;

    /**
     * Indicates the height point of the cursor info.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    height: number;
}

/**
 * Attribute of Input.
 * @typedef InputAttribute
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface InputAttribute {
    /**
     * Indicates the text input type of the input method.
     * @type { TextInputType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    textInputType: TextInputType;

    /**
     * Indicates the enter key type of the input method.
     * @type { EnterKeyType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    enterKeyType: EnterKeyType;
}

/**
 * FunctionKey of Input.
 * @typedef FunctionKey
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface FunctionKey {
    /**
     * Indicates the enter key type of the input method.
     * @type { EnterKeyType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    enterKeyType: EnterKeyType;
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