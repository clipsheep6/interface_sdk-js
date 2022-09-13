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
import InputMethodSubtype from './@ohos.inputmethodsubtype';

/**
 * input method
 *
 * @since 6
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 */
declare namespace inputMethod {
    /**
     * the permissions check fails
     * @errorcode 12800201
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_PERMISSION: number;

    /**
     * the parameters check fails
     * @errorcode 12800401
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_PARAMCHECK: number;

    /**
     * call unsupported api
     * @errorcode 12800801
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_UNSUPPORTED: number;

    /**
     * package manager error
     * @errorcode 12800001
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_PACKAGEMANAGER: number;

    /**
     * input method engine error
     * @errorcode 12800002
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_IMENGINE: number;

    /**
     * input method client error
     * @errorcode 12800003
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_IMCLIENT: number;

    /**
     * key event processing error
     * @errorcode 12800004
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_KEYEVENT: number;

    /**
     * configuration persisting error
     * @errorcode 12800005
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_CONFPERSIST: number;

    /**
     * input method controller error
     * @errorcode 12800006
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_CONTROLLER: number;

    /**
     * input method settings extension error
     * @errorcode 12800007
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_SETTINGS: number;

    /**
     * input method manager service error
     * @errorcode 12800008
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_IMMS: number;

    /**
     * others error
     * @errorcode 12899999
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    const EXCEPTION_OTHERS: number;

    /**
     * keyboard max number
     * @since 8
     */
    const MAX_TYPE_NUM: number

    /**
     * input method setting
     * @since 8
     * @deprecated since 9
     */
    function getInputMethodSetting(): InputMethodSetting;

    /**
     * input method controller
     * @since 6
     * @deprecated since 9
     */
    function getInputMethodController(): InputMethodController;

    /**
     * input method setting
     * @since 9
     * @return :-
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_SETTINGS
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
     function getInputMethodSettingV9(): InputMethodSetting;

    /**
     * input method controller
     * @since 9
     * @return :-
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_CONTROLLER
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
    function getInputMethodControllerV9(): InputMethodController;

    /**
     * Switch input method
     * @since 9
     * @param target Indicates the input method which will replace the current one
     * @return :-
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_CONFPERSIST
     * @errorcode EXCEPTION_SETTINGS
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
    function switchInputMethod(target: InputMethodProperty, callback: AsyncCallback<boolean>): void;

    /**
     * Switch input method
     * @since 9
     * @param target Indicates the input method which will replace the current one
     * @return :-
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_CONFPERSIST
     * @errorcode EXCEPTION_SETTINGS
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
    function switchInputMethod(target: InputMethodProperty): Promise<boolean>;
    
    /**
     * Get current input method
     * @since 9
     * @return The InputMethodProperty object of the current input method
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_SETTINGS
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
    function getCurrentInputMethod(): InputMethodProperty;

    /**
     * Switch current input method subtype
     * @since 9
     * @param target Indicates the input method subtype which will replace the current one
     * @return success or fail
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_CONFPERSIST
     * @errorcode EXCEPTION_SETTINGS
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
    function switchCurrentInputMethodSubtype(target: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

    /**
     * Switch current input method subtype
     * @since 9
     * @param target Indicates the input method subtype which will replace the current one
     * @return success or fail
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_CONFPERSIST
     * @errorcode EXCEPTION_SETTINGS
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
    function switchCurrentInputMethodSubtype(target: InputMethodSubtype): Promise<boolean>;

    /**
     * Get the current input method subtype
     * @since 9
     * @return The InputMethodSubtype object of the current input method
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_SETTINGS
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
    function getCurrentInputMethodSubtype(): InputMethodSubtype;

    /**
     * Switch input method and subtype
     * @since 9
     * @param inputMethodProperty Indicates the target input method
     * @param inputMethodSubtype Indicates the target input method subtype
     * @return :-
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_CONFPERSIST
     * @errorcode EXCEPTION_SETTINGS
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
    function switchCurrentInputMethodAndSubtype(inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

    /**
     * Switch input method and subtype
     * @since 9
     * @param inputMethodProperty Indicates the target input method
     * @param inputMethodSubtype Indicates the target input method subtype
     * @return :-
     * @permission ohos.permission.MANAGE_SECURE_SETTINGS
     * @throws {BusinessError} if exception occurs
     * @errorcode EXCEPTION_PERMISSION
     * @errorcode EXCEPTION_PARAMCHECK
     * @errorcode EXCEPTION_CONFPERSIST
     * @errorcode EXCEPTION_SETTINGS
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
     */
    function switchCurrentInputMethodAndSubtype(inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype): Promise<boolean>;

    /**
     * @since 8
     */
    interface InputMethodSetting {
        /**
         * Ntify input method or subtype change
         * @since 9
         * @param type Indicates the event type
         * @return :-
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        on(type: 'imeChange', callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void): void;

        /**
         * List subtype of the specified input method
         * @since 9
         * @param inputMethodProperty Indicates the specified input method
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_PACKAGEMANAGER
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @StageModelOnly
         */
        listInputMethodSubtype(inputMethodProperty: InputMethodProperty, callback: AsyncCallback<Array<InputMethodSubtype>>): void;

        /**
         * List subtype of the specified input method
         * @since 9
         * @param inputMethodProperty Indicates the specified input method
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_PACKAGEMANAGER
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @StageModelOnly
         */
        listInputMethodSubtype(inputMethodProperty: InputMethodProperty): Promise<Array<InputMethodSubtype>>;

        /**
         * List subtype of current input method
         * @since 9
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_PACKAGEMANAGER
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @StageModelOnly
         */
        listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void;

        /**
         * List subtype of current input method
         * @since 9
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_PACKAGEMANAGER
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @StageModelOnly
         */
        listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>;

        /**
         * List input methods
         * @since 9
         * @param enable :
         *     if true, collect enabled input methods.
         *     if false, collect disabled input methods.
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_PACKAGEMANAGER
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @StageModelOnly
         */
        listInputMethodV9(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>): void;

        /**
         * List input methods
         * @since 9
         * @param enable :
         *     if true, collect enabled input methods.
         *     if false, collect disabled input methods.
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_PACKAGEMANAGER
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @StageModelOnly
         */
        listInputMethodV9(enable: boolean): Promise<Array<InputMethodProperty>>;

        /**
         * @since 8
         * @deprecated since 9
         */
        listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;
        /**
         * @since 8
         * @deprecated since 9
         */
        listInputMethod(): Promise<Array<InputMethodProperty>>;

        /**
         * show input method setting extension dialog
         * @since 9
         * @return :-
         * @permission ohos.permission.MANAGE_SECURE_SETTINGS
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_PACKAGEMANAGER
         * @errorcode EXCEPTION_CONFPERSIST
         * @errorcode EXCEPTION_SETTINGS
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @StageModelOnly
         */
        displayOptionalInputMethodV9(callback: AsyncCallback<boolean>): void;

        /**
         * show input method setting extension dialog
         * @since 9
         * @return -
         * @permission ohos.permission.MANAGE_SECURE_SETTINGS
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_PACKAGEMANAGER
         * @errorcode EXCEPTION_CONFPERSIST
         * @errorcode EXCEPTION_SETTINGS
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @StageModelOnly
         */
        displayOptionalInputMethodV9(): Promise<boolean>;

        /**
         * @since 8
         * @deprecated since 9
         */
        displayOptionalInputMethod(callback: AsyncCallback<void>): void;

        /**
         * @since 8
         * @deprecated since 9
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        displayOptionalInputMethod(): Promise<void>;
    }

    /**
     * @since 6
     */
    interface InputMethodController {
        /**
         * Stop input method
         * @since 9
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMEENGINE
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        stopInputV9(callback: AsyncCallback<boolean>): void;

        /**
         * Stop input method
         * @since 9
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMEENGINE
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        stopInputV9(): Promise<boolean>;

        /**
         * Stop input method
         * @since 6
         * @deprecated since 9
         * @return :-
         * @syscap SystemCapability.MiscServices.InputMethodFramework
        */
        stopInput(callback: AsyncCallback<boolean>): void;

        /**
         * Stop input method
         * @since 6
         * @deprecated since 9
         * @return :-
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        stopInput(): Promise<boolean>;

        /**
         * Show soft keyboard
         * @since 9
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMEENGINE
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
        */
        showSoftKeyboard(callback: AsyncCallback<void>): void;

        /**
         * Show soft keyboard
         * @since 9
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMEENGINE
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        showSoftKeyboard():Promise<void>;
         
        /**
         * Hide soft keyboard
         * @since 9
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMEENGINE
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        hideSoftKeyboard(callback: AsyncCallback<void>): void;
         
        /**
         * Hide soft keyboard
         * @since 9
         * @return :-
         * @throws {BusinessError} if exception occurs
         * @errorcode EXCEPTION_PERMISSION
         * @errorcode EXCEPTION_PARAMCHECK
         * @errorcode EXCEPTION_IMEENGINE
         * @errorcode EXCEPTION_IMMS
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        hideSoftKeyboard():Promise<void>;
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
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         */
        readonly packageName: string;

        /**
         * The id of input method
         * @since 8
         * @deprecated since 9
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
}

export default inputMethod;
