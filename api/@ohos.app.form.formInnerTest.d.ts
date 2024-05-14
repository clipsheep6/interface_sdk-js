/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit FormKit
 */

/**
 * Interface of formInnerTest.
 *
 * @namespace formInnerTest
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @since 12
 */
declare namespace formInnerTest {

  /**
   * Query whether has visible form by tokenId.
   *
   * @permission ohos.permission.AGENT_REQUIRE_FORM
   * @param { number } tokenId - Token ID of the application.
   * @returns { Promise<boolean> } Returns true if has visible form, false otherwise.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 12
   */
  function hasFormVisible(tokenId: number): Promise<boolean>;

  /**
   * Update form with formRefreshType, send to form manager service.
   *
   * @permission ohos.permission.AGENT_REQUIRE_FORM
   * @param { number } refreshFormType - The want of the form to publish.
   * @returns { Promise<void> } Returns the result.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 12
   */
  function batchRefreshForms(refreshFormType: number): Promise<void>;
}
export default formInnerTest;
