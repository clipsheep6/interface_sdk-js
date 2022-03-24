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

/**
 * interface of formBindingData.
 *
 * @name formBindingData
 * @since 8
 * @syscap SystemCapability.Ability.Form
 */
declare namespace formBindingData {
    /**
     * Create an FormBindingData instance.
     *
     * @since 8
     * @syscap SystemCapability.Ability.Form
     * @param obj Indicates the FormBindingData instance data.
     * @return Returns the {@link FormBindingData} instance.
     */
    function createFormBindingData(obj?: Object | string): FormBindingData;

    /**
     * add image field to the special FormBindingData instance.
     *
     * @since 8
     * @syscap SystemCapability.Ability.Form
     * @param obj Indicates the FormBindingData instance image. This Parameter should be passed in as
     * {key1: fileDescriptor1, key2: fileDescriptor2}.
     * @return -
     */
    function addFormBindingImage(obj: Object, formBindingData: FormBindingData): void;

    /**
     * Defines the createFormBindingData result interface.
     * @syscap SystemCapability.Ability.Form
     * @since 8
     */
    interface FormBindingData {
        data: Object
        image: Object
    }
}
export default formBindingData;