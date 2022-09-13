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

import {AsyncCallback} from './basic';
import InputMethodSubtype from './@ohos.inputMethodSubtype';

/**
 * input method engine
 *
 * @since 8
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 */
declare namespace inputMethodEngine {
    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const ENTER_KEY_TYPE_UNSPECIFIED: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const ENTER_KEY_TYPE_GO: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const ENTER_KEY_TYPE_SEARCH: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const ENTER_KEY_TYPE_SEND: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const ENTER_KEY_TYPE_NEXT: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const ENTER_KEY_TYPE_DONE: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const ENTER_KEY_TYPE_PREVIOUS: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const PATTERN_NULL: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const PATTERN_TEXT: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const PATTERN_NUMBER: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const PATTERN_PHONE: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const PATTERN_DATETIME: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const PATTERN_EMAIL: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const PATTERN_URI: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const PATTERN_PASSWORD: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const FLAG_SELECTING: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const FLAG_SINGLE_LINE: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const DISPLAY_MODE_PART: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const DISPLAY_MODE_FULL: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const OPTION_ASCII: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const OPTION_NONE: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const OPTION_AUTO_CAP_CHARACTERS: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const OPTION_AUTO_CAP_SENTENCES: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const OPTION_AUTO_WORDS: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const OPTION_MULTI_LINE: number;

    /**
     * @since 8
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const OPTION_NO_FULLSCREEN: number;

    /**
     * The move direction of cursor: UP
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const CURSOR_UP: number;

    /**
     * The move direction of cursor: DOWN
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const CURSOR_DOWN: number;

    /**
     * The move direction of cursor: LEFT
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const CURSOR_LEFT: number;

    /**
     * The move direction of cursor: RIGHT
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const CURSOR_RIGHT: number;

    /**
     * The window styles for input method ability.
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    const WINDOW_TYPE_INPUT_METHOD_FLOAT: number;

    /**
     * @since 9
     * @return InputMethodEngine object of the current input method
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_UNSUPPORTED
     * @errorcode EXCEPTION_IMENGINE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function getInputMethodEngineV9(): InputMethodEngine;

    /**
     * @since 8
     * @deprecated since 9
     */
    function getInputMethodEngine(): InputMethodEngine;

    /**
     * @since 9
     * @return KeyboardDelegate object of the current input method
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_IMENGINE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function createKeyboardDelegateV9(): KeyboardDelegate;

    /**
     * @since 8
     * @deprecated since 9
     */
    function createKeyboardDelegate(): KeyboardDelegate;

    /**
     * @since 8
     */
    interface KeyboardController {
        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMENGINE
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        hide(callback: AsyncCallback<void>): void;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMENGINE
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        hide(): Promise<void>;

        /**
         * @since 8
         * @deprecated since 9
         */
        hideKeyboard(callback: AsyncCallback<void>): void;

        /**
         * @since 8
         * @deprecated since 9
         */
        hideKeyboard(): Promise<void>;
    }

    /**
     * @since 8
     */
    interface InputMethodEngine {
        /**
         * Subscribe 'inputStart'
         * @since 8
         * @param type inputStart
         * @param callback give keyboard controller and text input client
         * @return :-
         */
        on(type: 'inputStart', callback: (kbController: KeyboardController, textInputClient: TextInputClient|TextInputClientV9) => void): void;

        /**
         * Unsubscribe 'inputStart'
         * @since 8
         * @param type inputStart
         * @param callback optional, give keyboard controller and text input client
         * @return :-
         */
        off(type: 'inputStart', callback?: (kbController: KeyboardController, textInputClient: TextInputClient|TextInputClientV9) => void): void;

        /**
         * Subscribe 'inputStop'.
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @param type inputStop
         * @return :-
         */
        on(type: 'inputStop', callback: () => void): void;

        /**
         * Unsubscribe 'inputStop'.
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @param type inputStop
         * @return :-
         */
        off(type: 'inputStop', callback: () => void): void;

        /**
         * Subscribe 'setCallingWindow'.
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @param type setCallingWindow
         * @return :-
         */
        on(type: 'setCallingWindow', callback: (wid:number) => void): void;

        /**
         * Unsubscribe 'setCallingWindow'.
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @param type setCallingWindow
         * @return :-
         */
        off(type: 'setCallingWindow', callback: (wid:number) => void): void;

        /**
         * Subscribe 'keyboardShow'|'keyboardHide'
         * @since 8
         * @param type keyboardShow|keyboardHide
         * @return :-
         */
        on(type: 'keyboardShow'|'keyboardHide', callback: () => void): void;

        /**
         * Unsubscribe 'keyboardShow'|'keyboardHide'
         * @since 8
         * @param type keyboardShow|keyboardHide
         * @return :-
         */
        off(type: 'keyboardShow'|'keyboardHide', callback?: () => void): void;

        /**
         * Subscribe 'setSubtype'
         * @since 9
         * @return :-
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        on(type: 'setSubtype', callback: (inputMethodSubtype: InputMethodSubtype) => void): void;

        /**
         * Unsubscribe 'setSubtype'
         * @since 9
         * @return :-
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        off(ype: 'setSubtype', callback?: (inputMethodSubtype: InputMethodSubtype) => void): void;
    }

    /**
     * @since 8
     * @deprecated since 9
     */
    interface TextInputClient {
        /**
         * @since 8
         * @deprecated since 9
         */
        sendKeyFunction(action: number, callback: AsyncCallback<boolean>): void;

        /**
         * @since 8
         * @deprecated since 9
         */
        sendKeyFunction(action: number): Promise<boolean>;

        /**
         * @since 8
         * @deprecated since 9
         */
        deleteForward(length: number, callback: AsyncCallback<boolean>): void;

        /**
         * @since 8
         * @deprecated since 9
         */
        deleteForward(length: number): Promise<boolean>;

        /**
         * @since 8
         * @deprecated since 9
         */
        deleteBackward(length: number, callback: AsyncCallback<boolean>): void;

        /**
         * @since 8
         * @deprecated since 9
         */
        deleteBackward(length: number): Promise<boolean>;

        /**
         * @since 8
         * @deprecated since 9
         */
        insertText(text: string, callback: AsyncCallback<boolean>): void;

        /**
         * @since 8
         * @deprecated since 9
         */
        insertText(text: string): Promise<boolean>;

        /**
         * @since 8
         * @deprecated since 9
         */
        getForward(length: number, callback: AsyncCallback<string>): void;

        /**
         * @since 8
         * @deprecated since 9
         */
        getForward(length: number): Promise<string>;

        /**
         * @since 8
         * @deprecated since 9
         */
        getBackward(length: number, callback: AsyncCallback<string>): void;

        /**
         * @since 8
         * @deprecated since 9
         */
        getBackward(length: number): Promise<string>;

        /**
         * @since 8
         * @deprecated since 9
         */
        getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void;

        /**
         * @since 8
         * @deprecated since 9
         */
        getEditorAttribute(): Promise<EditorAttribute>;
    }

    /**
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @permission ohos.permission.CONNECT_IME_ABILITY
     */
     interface TextInputClientV9 {
        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        sendKeyFunction(action: number, callback: AsyncCallback<boolean>): void;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        sendKeyFunction(action: number): Promise<boolean>;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        deleteForward(length: number, callback: AsyncCallback<boolean>): void;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        deleteForward(length: number): Promise<boolean>;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        deleteBackward(length: number, callback: AsyncCallback<boolean>): void;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        deleteBackward(length: number): Promise<boolean>;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        insertText(text: string, callback: AsyncCallback<boolean>): void;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        insertText(text: string): Promise<boolean>;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        getForward(length: number, callback: AsyncCallback<string>): void;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        getForward(length: number): Promise<string>;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        getBackward(length: number, callback: AsyncCallback<string>): void;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        getBackward(length: number): Promise<string>;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void;

        /**
         * @since 9
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        getEditorAttribute(): Promise<EditorAttribute>;

        /**
         * Move cursor from input method.
         *
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @param direction Indicates the distance of cursor to be moved.
         * @return -
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @StageModelOnly
         */
        moveCursor(direction: number, callback: AsyncCallback<void>): void;

        /**
         * Move curosr from input method.
         *
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @param direction Indicates the distance of cursor to be moved.
         * @return -
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMCLIENT
         * @StageModelOnly
         */
        moveCursor(direction: number): Promise<void>;
    }

    /**
     * @since 8
     */
    interface KeyboardDelegate {
        /**
         * @since 8
         */
        on(type: 'keyDown'|'keyUp', callback: (event: KeyEvent) => boolean): void;

        /**
         * @since 8
         */
        off(type: 'keyDown'|'keyUp', callback?: (event: KeyEvent) => boolean): void;

        /**
         * @since 8
         */
        on(type: 'cursorContextChange', callback: (x: number, y: number, height: number) => void): void;

        /**
         * @since 8
         */
        off(type: 'cursorContextChange', callback?: (x: number, y: number, height: number) => void): void;

        /**
         * @since 8
         */
        on(type: 'selectionChange', callback: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void): void;

        /**
         * @since 8
         */
        off(type: 'selectionChange', callback?: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void): void;

        /**
         * @since 8
         */
        on(type: 'textChange', callback: (text: string) => void): void;

        /**
         * @since 8
         */
        off(type: 'textChange', callback?: (text: string) => void): void;
    }

    /**
     * @since 8
     */
    interface EditorAttribute {
        /**
         * @since 8
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly inputPattern: number;

        /**
         * @since 8
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly enterKeyType: number;
    }

    /**
     * @since 8
     */
    interface KeyEvent {
        /**
         * @since 8
         */
        readonly keyCode: number;

        /**
         * @since 8
         */
        readonly keyAction: number;
    }
}

export default inputMethodEngine;
