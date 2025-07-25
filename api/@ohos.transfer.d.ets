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
 * @kit ArkTS
 * @arkts 1.2
 */

/**
 * The transfer module provides transfer ability for subsystem class or interface.
 *
 * @namespace transfer
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare namespace transfer {

    /**
     * Any is used for the parameter type and return type of the transfer methods
     * 
     * @typedef {Object | undefined | null}
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type Any = Object | undefined | null;

    /**
     * Converting the 1.0 object to a 1.2 object.
     *
     * @param { Any } input The 1.0 object that needs to be converted
     * @param { string } inputName name registered by the subsystem.
     * @returns { Object } Object
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    function transferStatic(input: Any, inputName: string): Object;

    /**
     * Converting the 1.2 object to a 1.0 object.
     *
     * @param { Object } input The 1.2 object that needs to be converted
     * @param { string } inputName name registered by the subsystem.
     * @returns { Any } Object
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    function transferDynamic(input: Object, inputName: string): Any;

} export default transfer;
