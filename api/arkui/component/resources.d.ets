/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */

import { Resource } from './../../../api/global/resource'

/**
 * Obtain the resource in resources, used by plugin.
 * 
 * @param { string } bundleName
 * @param { string } moduleName
 * @param { string } name
 * @param { Object[] } params
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export declare function _r(bundleName: string, moduleName: string, name: string, ...params: Object[]): Resource;

/**
 * Obtain the resource in resources, used by plugin.
 * 
 * @param { number } id - Indicates the id of resource.
 * @param { number } type - Indicates the type of resource.
 * @param { string } bundleName - Indicates the name of bundle.
 * @param { string } moduleName - Indicates the name of module.
 * @param { Object[] } params - Custom parameters.
 * @returns { Resource } Returns the resource instance.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export declare function _r(
    id: number, type: number, bundleName: string, moduleName: string, ...params: Object[]): Resource;

/**
 * Obtain the resource in resources/rawfile, used by plugin.
 * 
 * @param { string } bundleName
 * @param { string } moduleName
 * @param { string } name
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export declare function _rawfile(bundleName: string, moduleName: string, name: string): Resource;

/**
 * Obtain the resource in resources/rawfile, used by plugin.
 * 
 * @param { number } id - Indicates the id of resource.
 * @param { number } type - Indicates the type of resource.
 * @param { string } bundleName - Indicates the name of bundle.
 * @param { string } moduleName - Indicates the name of module.
 * @param { Object[] } params - Custom parameters.
 * @returns { Resource } Returns the resource instance.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export declare function _rawfile(
    id: number, type: number, bundleName: string, moduleName: string, ...params: Object[]): Resource;
