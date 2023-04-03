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
import InputMethodSubtype from './@ohos.InputMethodSubtype';

/**
 * Input method
 *
 * @since 6
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 */
declare namespace inputMethod {
    /**
     * Keyboard max number
     * @since 8
     */
    const MAX_TYPE_NUM: number

    /**
     * Input method setting
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.inputMethod.getSetting
     */
    function getInputMethodSetting(): InputMethodSetting;

    /**
     * Input method controller
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.inputMethod.getController
     */
    function getInputMethodController(): InputMethodController;

    /**
     * Input method setting
     * @since 9
     * @returns { InputMethodSetting } the object of InputMethodSetting.
     * @throws {BusinessError} 12800007 - settings extension error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
     function getSetting(): InputMethodSetting;

    /**
     * Input method controller
     * @since 9
     * @returns { InputMethodController } the object of InputMethodController.
     * @throws {BusinessError} 12800006 - input method controller error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function getController(): InputMethodController;

    /**
     * Switch input method
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { InputMethodProperty } [target] - indicates the input method which will replace the current one.
     * @param { AsyncCallback<boolean> } [callback] - the callback of switchInputMethod.
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    function switchInputMethod(target: InputMethodProperty, callback: AsyncCallback<boolean>): void;

    /**
     * Switch input method
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param {InputMethodProperty} target - Indicates the input method which will replace the current one.
     * @returns {Promise<boolean>} the promise returned by the function.
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    function switchInputMethod(target: InputMethodProperty): Promise<boolean>;

    /**
     * Get current input method
     * @since 9
     * @returns { InputMethodProperty } the property of current inputmethod.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     */
    function getCurrentInputMethod(): InputMethodProperty;

    /**
     * Switch current input method subtype
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param {InputMethodSubtype} target - Indicates the input method subtype which will replace the current one.
     * @param {AsyncCallback<boolean>} callback - the callback of switchCurrentInputMethodSubtype.
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    function switchCurrentInputMethodSubtype(target: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

    /**
     * Switch current input method subtype
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param {InputMethodSubtype} target - Indicates the input method subtype which will replace the current one.
     * @returns {Promise<boolean>} the promise returned by the function.
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    function switchCurrentInputMethodSubtype(target: InputMethodSubtype): Promise<boolean>;

    /**
     * Get the current input method subtype
     * @returns {InputMethodSubtype} the subtype of the current input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    function getCurrentInputMethodSubtype(): InputMethodSubtype;

    /**
     * Switch input method and subtype
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param {InputMethodProperty} inputMethodProperty - Indicates the target input method.
     * @param {InputMethodSubtype} inputMethodSubtype - Indicates the target input method subtype.
     * @param {AsyncCallback<boolean>} callback - the callback of switchCurrentInputMethodAndSubtype.
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    function switchCurrentInputMethodAndSubtype(inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

    /**
     * Switch input method and subtype.
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param {InputMethodProperty} inputMethodProperty - Indicates the target input method.
     * @param {InputMethodSubtype} inputMethodSubtype - Indicates the target input method subtype.
     * @returns {Promise<boolean>} the promise returned by the function.
     * @throws {BusinessError} 201 - permissions check fails.
     * @throws {BusinessError} 401 - parameter error.
     * @throws {BusinessError} 12800005 - configuration persisting error.
     * @throws {BusinessError} 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    function switchCurrentInputMethodAndSubtype(inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype): Promise<boolean>;

    /**
     * @since 8
     */
    interface InputMethodSetting {
        /**
         * Subscribe input method or subtype change.
         * @param {string} type - Indicates the event type.
         * @param {(inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void} callback - the callback of 'imeChange'
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        on(type: 'imeChange', callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void): void;

        /**
         * Unsubscribe input method or subtype change.
         * @param {string} type - Indicates the event type.
         * @param {(inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void} [callback] - the callback of 'imeChange',
         *        when subscriber unsubscribes all callback functions of event 'imeChange', this parameter can be left blank.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
         off(type: 'imeChange', callback?: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void): void;

        /**
         * List subtype of the specified input method.
         * @param {InputMethodProperty} inputMethodProperty - the property of the specified inputmethod.
         * @param {AsyncCallback<Array<InputMethodSubtype>>} callback - the callback of listInputMethodSubtype.
         * @throws {BusinessError} 401 - parameter error.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        listInputMethodSubtype(inputMethodProperty: InputMethodProperty, callback: AsyncCallback<Array<InputMethodSubtype>>): void;

        /**
         * List subtype of the specified input method.
         * @param {InputMethodProperty} inputMethodProperty - Indicates the specified input method.
         * @returns {Promise<Array<InputMethodSubtype>>} the promise returned by the function.
         * @throws {BusinessError} 401 - parameter error.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        listInputMethodSubtype(inputMethodProperty: InputMethodProperty): Promise<Array<InputMethodSubtype>>;

        /**
         * List subtype of current input method
         * @param {AsyncCallback<Array<InputMethodSubtype>>} callback - the callback of listCurrentInputMethodSubtype.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void;

        /**
         * List subtype of current input method
         * @returns {Promise<Array<InputMethodSubtype>>} the promise returned by the function.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>;

        /**
         * List input methods
         * @param {boolean} enable :
         *     If true, collect enabled input methods.
         *     If false, collect disabled input methods.
         * @param {AsyncCallback<Array<InputMethodProperty>>} callback - the callback of getInputMethods.
         * @throws {BusinessError} 401 - parameter error.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>): void;

        /**
         * List input methods
         * @param {boolean} enable :
         *     If true, collect enabled input methods.
         *     If false, collect disabled input methods.
         * @returns {Promise<Array<InputMethodProperty>>} the promise returned by the function.
         * @throws {BusinessError} 401 - parameter error.
         * @throws {BusinessError} 12800001 - package manager error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        getInputMethods(enable: boolean): Promise<Array<InputMethodProperty>>;

        /**
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputMethod.InputMethodSetting.getInputMethods
         */
        listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;
        /**
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputMethod.InputMethodSetting.getInputMethods
         */
        listInputMethod(): Promise<Array<InputMethodProperty>>;

        /**
         * Show input method setting extension dialog
         * @since 9
         * @param {AsyncCallback<boolean>} callback - the callback of showOptionalInputMethods.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        showOptionalInputMethods(callback: AsyncCallback<boolean>): void;

        /**
         * Show input method setting extension dialog
         * @since 9
         * @returns { Promise<boolean> } the promise returned by the function.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        showOptionalInputMethods(): Promise<boolean>;

        /**
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputMethod.InputMethodSetting.showOptionalInputMethods
         */
        displayOptionalInputMethod(callback: AsyncCallback<void>): void;

        /**
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputMethod.InputMethodSetting.showOptionalInputMethods
         */
        displayOptionalInputMethod(): Promise<void>;
    }

    /**
     * @since 6
     */
    interface InputMethodController {
        /**
         * Let the application can attach to the input method service.
         * @param { AsyncCallback<void> } callback - the callback of attach.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        attach(callback: AsyncCallback<void>): void;

        /**
         * Let the application can attach to the input method service.
         * @param { boolean } showkeyboard - show the key board or not when attach the input method.
         * @param { AsyncCallback<void> } callback - the callback of attach.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        attach(showkeyboard: boolean, callback: AsyncCallback<void>): void;

        /**
         * Let the application can attach to the input method service.
         * @param { boolean } showkeyboard - show the key board or not when attach the input method.
         * @param { InputAttribute } attribute - indicates the extra attribute information of the textInput.
         * @param { AsyncCallback<void> } callback - the callback of attach.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        attach(showkeyboard: boolean, attribute: InputAttribute, callback: AsyncCallback<void>): void;

        /**
         * Let the application can attach to the input method service.
         * @param { boolean } showkeyboard - show the key board or not when attach the input method.
         * @param { InputAttribute } attribute - indicates the extra attribute information of the textInput.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @returns { Promise<void> } the promise returned by the function.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        attach(showkeyboard?: boolean, attribute?: InputAttribute): Promise<void>;

        /**
         * Show the text input and start typing.
         * @param { AsyncCallback<void> } callback - the callback of showTextInput.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        showTextInput(callback: AsyncCallback<void>): void;

        /**
         * Show the text input and start typing.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @returns { Promise<void> } the promise returned by the function.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        showTextInput(): Promise<void>;

        /**
         * Hide the text input and stop typing.
         * @param {AsyncCallback<void>} callback - the callback of hideTextInput.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        hideTextInput(callback: AsyncCallback<void>): void;

        /**
         * Hide the text input and stop typing.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @returns { Promise<void> } the promise returned by the function.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        hideTextInput(): Promise<void>;

        /**
         * Let applications can detach from the input method manager service.
         * @param { AsyncCallback<void> } callback - the callback of detach.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        detach(callback: AsyncCallback<void>): void;

        /**
         * Let applications can detach from the input method manager service.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @returns { Promise<void> } the promise returned by the function.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        detach(): Promise<void>;

        /**
         * Inform the system of the window ID of the application currently bound to the input method.
         * After the correct setting, the window where the client is located can avoid the input method window.
         * @param { number } windowId - the window ID of the application currently bound to the input method.
         * @param { AsyncCallback<void> } callback - the callback of setCallingWindow.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        setCallingWindow(windowId: number, callback: AsyncCallback<void>): void;

        /**
         * Inform the system of the window ID of the application currently bound to the input method.
         * After the correct setting, the window where the client is located can avoid the input method window.
         * @param { number } windowId - the window ID of the application currently bound to the input method.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @returns { Promise<void> } the promise returned by the function.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        setCallingWindow(windowId: number): Promise<void>;

        /**
         * Notify the input method that the current application cursor has changed.
         * @param { CursorInfo } cursorInfo - the CursorInfo object.
         * @param { AsyncCallback<void> } callback - the callback of updateCursor.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        updateCursor(cursorInfo: CursorInfo, callback: AsyncCallback<void>): void;

        /**
         * Notify the input method that the current application cursor has changed.
         * @param { CursorInfo } cursorInfo - the CursorInfo object.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @returns { Promise<void> } the promise returned by the function.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        updateCursor(cursorInfo: CursorInfo): Promise<void>;

        /**
         * Notify the input method that the selection range of the current application text has changed.
         * @param { string } text - the whole input text.
         * @param { number } start - start position of selected text.
         * @param { number } end - end position of selected text.
         * @param { AsyncCallback<void> } callback - the callback of changeSelection.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        changeSelection(text: string, start: number, end: number, callback: AsyncCallback<void>): void;

        /**
         * Notify the input method that the selection range of the current application text has changed.
         * @param { string } text - the selected text.
         * @param { number } start - start position of selected text.
         * @param { number } end - end position of selected text.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @returns { Promise<void> } the promise returned by the function.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        changeSelection(text: string, start: number, end: number): Promise<void>;

        /**
         * Update InputAttribute information of input text.
         * @param { InputAttribute } attribute - the InputAttribute object.
         * @param { AsyncCallback<void> } callback - the callback of updateAttribute.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        updateAttribute(attribute: InputAttribute, callback: AsyncCallback<void>): void;

        /**
         * Update InputAttribute information of input text.
         * @param { InputAttribute } attribute - the InputAttribute object.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800003 - input method client error.
         * @throws { BusinessError } 12800008 - input method manager service error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @returns { Promise<void> } the promise returned by the function.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        updateAttribute(attribute: InputAttribute): Promise<void>;

        /**
         * Stop input session
         * @param {AsyncCallback<boolean>} callback - the callback of stopInputSession.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        stopInputSession(callback: AsyncCallback<boolean>): void;

        /**
         * Stop input session
         * @returns {Promise<boolean>} the promise returned by the function.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        stopInputSession(): Promise<boolean>;

        /**
         * Stop input
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.inputMethod.InputMethodController.stopInputSession
         * @syscap SystemCapability.MiscServices.InputMethodFramework
        */
        stopInput(callback: AsyncCallback<boolean>): void;

        /**
         * Stop input
         * @since 6
         * @returns { Promise<boolean> } the promise returned by the function.
         * @deprecated since 9
         * @useinstead ohos.inputMethod.InputMethodController.stopInputSession
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        stopInput(): Promise<boolean>;

        /**
         * Show soft keyboard
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @param {AsyncCallback<void>} callback - the callback of showSoftKeyboard.
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
        */
        showSoftKeyboard(callback: AsyncCallback<void>): void;

        /**
         * Show soft keyboard
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @returns {Promise<boolean>} the promise returned by the function.
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        showSoftKeyboard():Promise<void>;

        /**
         * Hide soft keyboard
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @param {AsyncCallback<void>} callback - the callback of hideSoftKeyboard.
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        hideSoftKeyboard(callback: AsyncCallback<void>): void;

        /**
         * Hide soft keyboard
         * @permission ohos.permission.CONNECT_IME_ABILITY
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 201 - permissions check fails.
         * @throws {BusinessError} 12800003 - input method client error.
         * @throws {BusinessError} 12800008 - input method manager service error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 9
         */
        hideSoftKeyboard():Promise<void>;

        /**
         * Register a callback and when IME sends select event with range of selection,
         * the callback will be invoked.
         * @param {string} type - event type, fixed as 'selectByRange'.
         * @param {Callback<Range>} callback - processes selectByRange command. The range of selection is provided for
         *        this callback, and subscribers are expected to select corresponding text in callback according to
         *        the range.
         * @throws {BusinessError} 401 - parameter error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        on(type: 'selectByRange', callback: Callback<Range>): void;

        /**
         * Register a callback and when IME sends select event witch movement of cursor,
         * the callback will be invoked.
         * @param {string} type - event type, fixed as 'selectByMovement'.
         * @param {Callback<Movement>} callback - processes selectByMovement command. The movement of cursor is provided
         *        for this callback, and subscribers are expected to select corresponding text in callback according to
         *        the movement.
         * @throws {BusinessError} 401 - parameter error.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        on(type: 'selectByMovement', callback: Callback<Movement>): void;

        /**
         * Unregister the callback of selectedByRange.
         * @param {string} type - event type, fixed as 'selectByRange'.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        off(type: 'selectByRange'): void;

        /**
         * Unregister the callback of selectedByMovement.
         * @param {string} type - event type, fixed as 'selectByMovement'.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        off(type: 'selectByMovement'): void;

        /**
         * Register a callback and when IME sends insert text event, the callback will be invoked.
         * @param { string } type - event type, fixed as 'insertText'.
         * @param { (text: string) => void } callback - processes insertText command. The text of insert is provided for
         *     this callback. It must update selected text and cursor info if they are changed.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        on(type: 'insertText', callback: (text: string) => void): void;

        /**
         * Unregister the callback of insertText.
         * @param { string } type - event type, fixed as 'insertText'.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        off(type: 'insertText'): void;

        /**
         * Register a callback and when IME sends delete left or delete right event with length,
         * the callback will be invoked.
         * @param { string } type - event type, fixed as 'deleteLeft' or 'deleteRight'.
         * @param { (length: number) => void } callback - processes deleteLeft/deleteRight command. The length of
         *     delete is provided for this callback. It must update selected text and cursor info if they are changed.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        on(type: 'deleteLeft' | 'deleteRight', callback: (length: number) => void): void;

        /**
         * Unregister the callback of deleteLeft/deleteRight.
         * @param { string } type - event type, fixed as 'deleteLeft'/'deleteRight'.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        off(type: 'deleteLeft' | 'deleteRight'): void;

        /**
         * Register a callback and when IME sends keyboard status, the callback will be invoked.
         * @param { string } type - event type, fixed as 'sendKeyboardStatus'.
         * @param { (keyBoardStatus: KeyboardStatus) => void } callback - processes sendKeyboardStatus command.
         *     The keyBoardStatus is provided for this callback.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        on(type: 'sendKeyboardStatus', callback: (keyBoardStatus: KeyboardStatus) => void): void;

        /**
         * Unregister the callback of sendKeyboardStatus.
         * @param { string } type - event type, fixed as 'sendKeyboardStatus'.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        off(type: 'sendKeyboardStatus'): void;

        /**
         * Register a callback and when IME sends functionKey, the callback will be invoked.
         * @param { string } type - event type, fixed as 'sendFunctionKey'.
         * @param { (functionKey: FunctionKey) => void } callback - processes sendFunctionKey command.
         *     The functionKey is provided for this callback.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        on(type: 'sendFunctionKey', callback: (functionKey: FunctionKey) => void): void;

        /**
         * Unregister the callback of sendFunctionKey.
         * @param { string } type - event type, fixed as 'sendFunctionKey'.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        off(type: 'sendFunctionKey'): void;

        /**
         * Register a callback and when IME sends move cursor, the callback will be invoked.
         * @param { string } type - event type, fixed as 'moveCursor'.
         * @param { (direction: Direction) => void } callback - processes moveCursor command. The direction of
         *     cursor is provided for this callback. It must update selected text and cursor info if they are changed.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        on(type: 'moveCursor', callback: (direction: Direction) => void): void;

        /**
         * Unregister the callback of moveCursor.
         * @param { string } type - event type, fixed as 'moveCursor'.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        off(type: 'moveCursor'): void;

        /**
         * Register a callback and when IME sends extend action code, the callback will be invoked.
         * @param { string } type - event type, fixed as 'handleExtendAction'.
         * @param { (action: ExtendAction) => void } callback - processes handleExtendAction command. The action code
         *     is provided for this callback.
         * @throws { BusinessError } 401 - parameter error.
         * @throws { BusinessError } 12800009 - input method client is detached.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        on(type: 'handleExtendAction', callback: (action: ExtendAction) => void): void;

        /**
         * Unregister the callback of handleExtendAction.
         * @param { string } type - event type, fixed as 'handleExtendAction'.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @since 10
         */
        off(type: 'handleExtendAction'): void;
    }

    /**
     * input method property
     * @since 8
     */
    interface InputMethodProperty {
        /**
         * The name of input method
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputMethod.InputMethodProperty.name
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly packageName: string;

        /**
         * The id of input method
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.inputMethod.InputMethodProperty.id
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly methodId: string;

        /**
         * The name of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
         readonly name: string;

         /**
          * The id of input method
          * @since 9
          * @syscap SystemCapability.MiscServices.InputMethodFramework
          */
         readonly id: string;

        /**
         * The label of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly label?: string;

        /**
         * The icon of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly icon?: string;

        /**
         * The icon id of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly iconId?: number;

        /**
         * The extra info of input method
         * @since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        extra: object;
    }

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
     * @typedef Range
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
     * @typedef Movement
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
}

export default inputMethod;
