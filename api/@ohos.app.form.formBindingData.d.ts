/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { BusinessError } from './@ohos.base';

/**
 * Interface of formBindingData.
 *
 * @namespace formBindingData
 * @syscap SystemCapability.Ability.Form
 * @since 9
 */
declare namespace formBindingData {
  /**
   * Create an FormBindingData instance.
   *
   * @param { Object | string } [obj] - Indicates the FormBindingData instance data.
   * @returns { FormBindingData } Returns the FormBindingData.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  function createFormBindingData(obj?: Object | string): FormBindingData;

  /**
   * Defines the createFormBindingData result interface.
   *
   * @typedef FormBindingData
   * @syscap SystemCapability.Ability.Form
   * @since 9
   */
  interface FormBindingData {
    /**
     * Data for updating.
     *
     * @type { Object }
     * @syscap SystemCapability.Ability.Form
     * @since 9
     */
    data: Object;

    /**
     * Param for proxy.
     *
     * @type { ?FormProxy }
     * @syscap SystemCapability.Ability.Form
     * @StageModelOnly
     * @since 10
     */
    proxy?: FormProxy;
  }

  /**
   * Defines the form proxy param.
   * @typedef FormProxy
   * @syscap SystemCapability.Ability.Form
   * @StageModelOnly
   * @since 10
   */
  interface FormProxy {
    /**
     * Key for proxy. The value dependent data publisher.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.Form
     * @StageModelOnly
     * @since 10
     */
    key: string;

    /**
     * SubscriberId. The value dependent data publisher. The default value is current formId.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.Form
     * @StageModelOnly
     * @since 10
     */
    subscriberId?: string;
  }
}
export default formBindingData;
