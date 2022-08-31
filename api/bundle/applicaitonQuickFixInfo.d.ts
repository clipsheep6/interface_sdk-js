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

/**
 * Quick fix info of hap module.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
 */
 export interface HapModuleQuickFixInfo {
    /**
     * Indicates hap module name.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     */
    readonly moduleName: string;

    /**
     * Indicates sha256 of a hap.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     */
    readonly moduleSha256: string;

    /**
     * Indicates path of quick fix file.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     */
    readonly quickFixFilePath: string;
}

/**
 * Quick fix info of application.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
 */
export interface ApplicationQuickFixInfo {
    /**
     * Bundle name.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     */
    readonly bundleName: string;

    /**
     * the version number of the bundle.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     */
    readonly bundleVersionCode: number;

    /**
     * the version name of the bundle.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     */
    readonly bundleVersionName: string;

    /**
     * the version number of the quick fix.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     */
    readonly quickFixVersionCode: number;

    /**
     * the version name of the quick fix.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     */
    readonly quickFixVersionName: string;

    /**
     * hap module quick fix infos.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     */
    readonly hapModuleQuickFixInfo: Array<HapModuleQuickFixInfo>;
}