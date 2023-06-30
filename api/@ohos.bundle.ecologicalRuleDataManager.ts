/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * This module provides the function of ecological rule data manager
 * 
 * @namespace ecologicalRuleDataManager
 * @syscap SystemCapability.BundleManager.EcologicalRuleManager
 * @systemapi
 * @since 10
 */
declare namespace ecologicalRuleDataManager {

  /**
   * Set rule infomations into ecological rule manager.
   *
   * @permission ohos.permission.MANAGE_ECOLOGICAL_RULE
   * @param { string } ruleInfo - rule infomation string.
   * @returns { number } Returns the result code of this operation.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.EcologicalRuleManager
   * @systemapi
   * @since 10
   */
  function setRuleInfos(ruleInfo: string): number;

  /**
   * Set scene experience and rule config into ecological rule manager.
   *
   * @permission ohos.permission.MANAGE_ECOLOGICAL_RULE
   * @param { string } ruleConfig - rule config string.
   * @param { string } sceneExperience - scene experience string.
   * @returns { number } Returns the result code of this operation.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.EcologicalRuleManager
   * @systemapi
   * @since 10
   */
  function setSceneExperience(ruleConfig: string, sceneExperience: string): number;

  /**
   * Exempt experience for target bundle, in timestamp this bundle will allowed by ecological rule manager.
   *
   * @permission ohos.permission.MANAGE_ECOLOGICAL_RULE
   * @param { string } targetBundleName - target bundle name.
   * @param { number } rule - rule will be exempted.
   * @param { number } timestamp - timestamp.
   * @returns { number } Returns the result code of this operation.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.EcologicalRuleManager
   * @systemapi
   * @since 10
   */
  function exemptExperience(targetBundleName: string, rule: number, timestamp: number): number;

  /**
   * Get version of ecological rule manager in json string format.
   *
   * @permission ohos.permission.MANAGE_ECOLOGICAL_RULE
   * @returns { string } Returns the engine version string.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.EcologicalRuleManager
   * @systemapi
   * @since 10
   */
  function getVersion(): string;

  /**
   * Set scene experience and rule config into ecological rule manager.
   *
   * @permission ohos.permission.MANAGE_ECOLOGICAL_RULE
   * @param { number } operType - operation type, -1: delete data, 0: full replace, 1:append data.
   * @param { string } appData - scene experience string.
   * @returns { number } Returns the result code of this operation.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.EcologicalRuleManager
   * @systemapi
   * @since 10
   */
  function setAppEnhancedDatas(operType: number, appData: string): number;
}

export default ecologicalRuleDataManager;
