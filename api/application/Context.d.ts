/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { ApplicationInfo } from "../bundle/applicationInfo";
import resmgr from "../@ohos.resourceManager";
import BaseContext from "./BaseContext";
import EventHub from "./EventHub";
import AbilityStageContext from "./AbilityStageContext";
import ApplicationContext from "./ApplicationContext";

/**
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 * @StageModelOnly
 */
export default class Context extends BaseContext {
    /**
     * Indicates the capability of accessing application resources.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    resourceManager: resmgr.ResourceManager;

    /**
     * Indicates configuration information about an application.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    applicationInfo: ApplicationInfo;

    /**
     * Indicates application cache dir.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    cacheDir: string;

    /**
     * Indicates application temp dir.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    tempDir: string;

    /**
     * Indicates application files dir.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    filesDir : string;

    /**
     * Indicates application database dir.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    databaseDir : string;

    /**
     * Indicates application preferences dir.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    preferencesDir : string;

    /**
     * Indicates application bundle code dir.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    bundleCodeDir : string;

    /**
     * Indicates application distributed files dir.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    distributedFilesDir: string;

    /**
     * Indicates event hub.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    eventHub: EventHub;

    /**
     * Indicates file area.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     */
    area: AreaMode;

    /**
     * Create an application context of the bundle name
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @param bundleName Indicates the bundle name.
     * @return application context
     * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
     * @StageModelOnly
     */
    createBundleContext(bundleName: string): ApplicationContext;

    /**
     * Create an ability stage context
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param moduleName Indicates the module name.
     * @return ability stage context
     * @StageModelOnly
     */
    createAbilityStageContext(moduleName: string): AbilityStageContext;

    /**
     * Create an ability stage context
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @param bundleName Indicates the bundle name.
     * @param moduleName Indicates the module name.
     * @return ability stage context
     * @StageModelOnly
     */
    createAbilityStageContext(bundleName: string, moduleName: string): AbilityStageContext;

    /**
     * Get application context
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @return application context
     * @StageModelOnly
     */
    getApplicationContext(): ApplicationContext;
}

/**
 * File area mode
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 */
export enum AreaMode {
    /**
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    EL1 = 0,
    /**
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    EL2 = 1
}
