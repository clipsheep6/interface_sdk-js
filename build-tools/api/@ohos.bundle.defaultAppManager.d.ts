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
import { AsyncCallback } from './basic';
/**
 * default application manager.
 * @name defaultAppManager
 * @since 9
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @permission NA
 */
declare namespace defaultAppManager {
    /**
     * the constant for application type.
     * @name ApplicationType
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @permission N/A
     */
    export enum ApplicationType {
        /**
         * default browser identifier.
         *
         * @since 9
         */
        BROWSER = "BROWSER",
        /**
         * default image identifier.
         *
         * @since 9
         */
        IMAGE = "IMAGE",
        /**
         * default audio identifier.
         *
         * @since 9
         */
        AUDIO = "AUDIO",
        /**
         * default video identifier.
         *
         * @since 9
         */
        VIDEO = "VIDEO",
        /**
         * default pdf identifier.
         *
         * @since 9
         */
        PDF = "PDF",
        /**
         * default word identifier.
         *
         * @since 9
         */
        WORD = "WORD",
        /**
         * default excel identifier.
         *
         * @since 9
         */
        EXCEL = "EXCEL",
        /**
         * default ppt identifier.
         *
         * @since 9
         */
        PPT = "PPT"
    }
    /**
     * query whether the caller is default application based on type.
     *
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @param type application type or file type.
     * @return return true if caller is default application; return false otherwise.
     * @permission N/A
     */
    function isDefaultApplication(type: string): Promise<boolean>;
    function isDefaultApplication(type: string, callback: AsyncCallback<boolean>): void;
}
export default defaultAppManager;
