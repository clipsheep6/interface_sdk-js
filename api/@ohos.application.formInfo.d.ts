/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import Want from './@ohos.application.Want';

/**
 * interface of formInfo.
 *
 * @name formInfo
 * @since 8
 * @syscap SystemCapability.Ability.Form
 */
declare namespace formInfo {
    /**
     * Provides information about a form.
     *
     * @name FormInfo
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    interface FormInfo {
        /**
         * Indicates the bundle name of the application to which this form belongs.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        bundleName: string;

        /**
         * Indicates the bundle name of the application to which this form belongs.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        bundleName?: string;

        /**
         * Indicates the name of the application module to which this form belongs.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        moduleName: string;

        /**
         * Indicates the class name of the ability to which this form belongs.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        abilityName: string;

        /**
         * Indicates the name of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        name: string;

        /**
         * Indicates the description of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        description: string;

        /**
         * Indicates the description of this form.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        description?: string;

        /**
         * Indicates the type of this form. Currently, JS forms are supported.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        type: FormType;

        /**
         * Indicates the JS component name of this JS form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        jsComponentName: string;

        /**
         * Indicates the JS component name of this JS form.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        jsComponentName?: string;

        /**
         * Indicates the color mode of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        colorMode: ColorMode;

        /**
         * Indicates the color mode of this form.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        colorMode?: ColorMode;

        /**
         * Indicates whether this form is default.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        isDefault: boolean;

        /**
         * Indicates whether this form supports scheduled refresh.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        updateEnabled: boolean;

        /**
         * Indicates whether this form is allowed to use visibility notifications.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        formVisibleNotify: boolean;

        /**
         * Indicates whether this form is allowed to use visibility notifications.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        formVisibleNotify?: boolean;

        /**
         * Indicates the bundle relatedBundleName of the application to which this form belongs.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        relatedBundleName: string;

        /**
         * Indicates the bundle relatedBundleName of the application to which this form belongs.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        relatedBundleName?: string;

        /**
         * Indicates the time when this form is refreshed at a fixed time.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        scheduledUpdateTime: string;

        /**
         * Indicates the time when this form is refreshed at a fixed time.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        scheduledUpdateTime?: string;

        /**
         * Indicates the name of the ability for form adjustment.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        formConfigAbility: string;

        /**
         * Indicates the name of the ability for form adjustment.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        formConfigAbility?: string;

        /**
         * Indicates the update frequency of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        updateDuration: number;

        /**
         * Indicates the update frequency of this form.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        updateDuration?: number;

        /**
         * Indicates the default grid style of this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        defaultDimension: number;

        /**
         * Indicates the grid styles supported by this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        supportDimensions: Array<number>;

        /**
         * Indicates the custom data defined in this form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        customizeData: {[key: string]: [value: string]};

        /**
         * Indicates the custom data defined in this form.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        customizeData?: {[key: string]: [value: string]};

        /**
         * Indicates the window-related configurations for this form.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        window?: Window;

        /**
         * Indicates whether this form is static.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        isStatic?: boolean;
    }

    /**
     * Type of form.
     *
     * @name FormType
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    enum FormType {
        /**
         * JS form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        JS = 1
    }

    /**
     * Color mode.
     *
     * @name ColorMode
     * @since 8
     * @syscap SystemCapability.Ability.Form
    */
    enum ColorMode {
        /**
         * Automatic mode.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        MODE_AUTO = -1,

        /**
         * Dark mode.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        MODE_DARK = 0,

        /**
         * Light mode.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        MODE_LIGHT = 1
    }

    /**
     * Window-related configurations.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     */
    interface Window {
        /**
         * Indicates the baseline width for form design, in pixels.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        designWidth?: number;

        /**
         * Whether to automatically calculate the baseline width for form design.
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         */
        autoDesignWidth?: boolean;
    }

    /**
     * Provides state information about a form.
     *
     * @name FormStateInfo
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    interface FormStateInfo {
        /**
         * Obtains the form state.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        formState: FormState;

        /**
         * Obtains the want form .
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        want: Want;
    }

    /**
     * Provides state about a form.
     *
     * @name FormState
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    enum FormState {
        /**
         * Indicates that the form status is unknown due to an internal error.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        UNKNOWN = -1,

        /**
         * Indicates that the form is in the default state.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        DEFAULT = 0,

        /**
         * Indicates that the form is ready.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        READY = 1,
    }

    /**
     * Parameter of form.
     *
     * @name FormParam
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    enum FormParam {
        /**
         * Indicates the key specifying the ID of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       IDENTITY_KEY: 1L
         *    }
         * }.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         * @systemapi hide for inner use.
         */
        IDENTITY_KEY = "ohos.extra.param.key.form_identity",

        /**
         * Indicates the key specifying the grid style of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       DIMENSION_KEY: 1
         *    }
         * }.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        DIMENSION_KEY = "ohos.extra.param.key.form_dimension",

        /**
         * Indicates the key specifying the name of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       NAME_KEY: "formName"
         *    }
         * }.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        NAME_KEY = "ohos.extra.param.key.form_name",

        /**
         * Indicates the key specifying the name of the module to which the form to be obtained belongs, which is
         * represented as
         * want: {
         *   "parameters": {
         *       MODULE_NAME_KEY: "formEntry"
         *    }
         * }
         * This constant is mandatory.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        MODULE_NAME_KEY = "ohos.extra.param.key.module_name",

        /**
         * Indicates the key specifying the width of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       WIDTH_KEY: 800
         *    }
         * }
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        WIDTH_KEY = "ohos.extra.param.key.form_width",

        /**
         * Indicates the key specifying the height of the form to be obtained, which is represented as
         * want: {
         *   "parameters": {
         *       HEIGHT_KEY: 400
         *    }
         * }
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        HEIGHT_KEY = "ohos.extra.param.key.form_height",

        /**
         * Indicates the key specifying whether a form is temporary, which is represented as
         * want: {
         *   "parameters": {
         *       TEMPORARY_KEY: true
         *    }
         * }
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        TEMPORARY_KEY = "ohos.extra.param.key.form_temporary"
    }
}
export default formInfo;