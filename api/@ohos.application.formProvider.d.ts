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

import { AsyncCallback } from "./basic";
import formBindingData from "./@ohos.application.formBindingData";
import formInfo from "./@ohos.application.formInfo";
import Want from './@ohos.application.Want';

/**
 * interface of formProvider.
 *
 * @name formProvider
 * @since 8
 * @syscap SystemCapability.Ability.Form
 */
declare namespace formProvider {
    /**
     * Set next update time for a specified form.
     *
     * @since 8
     * @syscap SystemCapability.Ability.Form
     * @param formId Indicates the form ID.
     * @param minute Indicates duration minute before next update.
     * @return -
     */
    function setFormNextRefreshTime(formId: string, minute: number, callback: AsyncCallback<void>): void;
    function setFormNextRefreshTime(formId: string, minute: number): Promise<void>;

    /**
     * Update a specified form.
     *
     * Client to communication with FormManagerService.
     *
     * @since 8
     * @syscap SystemCapability.Ability.Form
     * @param formId Indicates the form ID
     * @param formBindingData Indicates the form data
     * @return -
     */
    function updateForm(formId: string, formBindingData: formBindingData.FormBindingData,
        callback: AsyncCallback<void>): void;
    function updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>;

    /**
     * Request to publish a form to the form host.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     * @param want The want of the form to publish
     * @param formBindingData Indicates the form data
     * @systemapi hide for inner use.
     * @return Returns form id
     */
    function requestPublishForm(want: Want, callback: AsyncCallback<number>): void;
    function requestPublishForm(want: Want, formBindingData: formBindingData.FormBindingData,
        callback: AsyncCallback<number>): void;
    function requestPublishForm(want: Want, formBindingData?: formBindingData.FormBindingData): Promise<number>;

    /**
     * Add the form info.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     * @param formInfo Indicates the form info to be added
     * @systemapi hide for inner use.
     * @return -
     */
    function addFormInfo(formInfo: formInfo.FormInfo, callback: AsyncCallback<void>);
    function addFormInfo(formInfo: formInfo.FormInfo): Promise<void>;

    /**
     * Remove the specified form info.
     *
     * @since 9
     * @syscap SystemCapability.Ability.Form
     * @param moduleName Indicates the module name of the dynamic form info to be removed
     * @param formName Indicates the form name of the dynamic form info to be removed
     * @systemapi hide for inner use.
     * @return -
     */
    function removeFormInfo(moduleName: string, formName: string, callback: AsyncCallback<void>);
    function removeFormInfo(moduleName: string, formName: string): Promise<void>;
}
export default formProvider;