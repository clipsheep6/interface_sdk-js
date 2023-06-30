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
 * This module provides the function of sceneManager
 * 
 * @namespace sceneManager
 * @syscap SystemCapability.BundleManager.EcologicalRuleManager
 * @since 10
 */
declare namespace sceneManager {
  /**
   * get scene code by bundle name
   *
   * @permission ohos.permission.GET_SCENE_CODE
   * @param bundleName bundle name
   * @returns { string } scene code of bundle
   * @throws { BusinessError } 201 - Permission denied.
   * @since 10
   */
  function getSceneCode(bundleName: string): string;

  /**
   * get original scene code by bundle name
   *
   * @permission ohos.permission.GET_SCENE_CODE
   * @param bundleName bundle name
   * @returns { string } original scene code of bundle
   * @throws { BusinessError } 201 - Permission denied.
   * @since 10
   */
  function getOriginalSceneCode(bundleName: string): string;

  /**
   * get self scene code
   *
   * @returns { string } scene code string of caller
   * @since 10
   */
  function getSelfSceneCode(): string;

  /**
   * get current ads verification version of ecological rule manager
   *
   * @returns { string } version string of ads verification
   * @since 10
   */
  function getAdsVerificationVersion(): string;
}

export default sceneManager;
