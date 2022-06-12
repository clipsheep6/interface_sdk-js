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

/**
 * inputmethod
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 */
declare namespace inputMethod {
    /**
     * keyboard max number
     * @since 8
     */
    const MAX_TYPE_NUM: number

    /**
     * input method setting
     * @since 8
     */
    function getInputMethodSetting(): InputMethodSetting;

    /**
     * input method controller
     * @since 6
     */
    function getInputMethodController(): InputMethodController;

    /**
<<<<<<< HEAD
     * Switch input method
     * @since 9
     * @param target Indicates the input method which will replace the curren one
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @StageModelOnly
=======
     * Switch iput method-
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
>>>>>>> c4da1fe59f536084df55bf8d043edf0cb6b7b82b
     */
    function switchInputMethod(target: InputMethodProperty, callback: AsyncCallback<void>): void;
    function switchInputMethod(target: InputMethodProperty): Promise<void>;

    /**
     * Get current input method
     * @since 9
     * @syscap SystemCapability.MiscServices.InputMethodFramework
<<<<<<< HEAD
     * @StageModelOnly
=======
>>>>>>> c4da1fe59f536084df55bf8d043edf0cb6b7b82b
     */
    function getCurrentInputMethod(): InputMethodProperty;

    /**
     * @since 8
     */
    interface InputMethodSetting {
<<<<<<< HEAD
        /**
         * List input methods
         * @since 9
         * @param enable A three-state flag:
         *     if true, collect active input methods.
         *     if false, collect inactive input methods.
         *     if not given, collect all input methods.
         * @syscap SystemCapability.MiscServices.InputMethodFramework
         * @StageModelOnly
         */
        listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>, enable?: boolean): void;
        listInputMethod(enable?: boolean): Promise<Array<InputMethodProperty>>;

        listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;
=======
        listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>, enable?: boolean): void;
>>>>>>> c4da1fe59f536084df55bf8d043edf0cb6b7b82b

        listInputMethod(enable?: boolean): Promise<Array<InputMethodProperty>>;

        displayOptionalInputMethod(callback: AsyncCallback<void>): void;

        displayOptionalInputMethod(): Promise<void>;
    }

    /**
     * @since 6
     */
    interface InputMethodController {
        stopInput(callback: AsyncCallback<boolean>): void;

        stopInput(): Promise<boolean>;
    }

    /**
     * input method info
     * @since 8
     */
    interface InputMethodProperty {
        readonly packageName: string;
        readonly methodId: string;
    }
}

export default inputMethod;
