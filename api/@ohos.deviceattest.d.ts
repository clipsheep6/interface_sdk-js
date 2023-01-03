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
import { AsyncCallback, Callback } from './basic';

 /**
 * xts_device_attest authResult information
 *
 * @since 9
 * @syscap SystemCapability.XTS.DeviceAttest
 * @import import deviceattest from '@ohos.deviceattest'
 */
declare namespace deviceattest {
    /**
     * Obtains the AttestResultInfo object.
     *
     * @param callback Indicates the callback containing the AttestResultInfo object.
     * @since 9
     * @systemapi
     */
    function GetAttestStatus(callback: AsyncCallback<AttestResultInfo>) : void;

    /**
     * Obtains the AttestResultInfo object.
     *
     * @return Returns that the AttestResultInfo object is returned in Promise mode.
     * @since 9
     * @systemapi
     */
    function GetAttestStatus() : Promise<AttestResultInfo>;

    /**
     * Deviceattest result information.
     * @typedef AttestResultInfo
     * @syscap SystemCapability.XTS.DeviceAttest
     * @since 9
     */
    export interface AttestResultInfo {

        /**
         * Number of authResult.
         * @type { number }
         * @since 9
         */
        authResult : number;

        /**
         * Number of softwareResult.
         * @type { number }
         * @since 9
         */
        softwareResult : number;

        /**
         * Software result detail array.
         * @type { Array<number> }
         * @since 9
         */
        softwareResultDetail : Array<number>;

        /**
         * String of ticket.
         * @type { string }
         * @since 9
         */
        ticket : string;
    }
}

export default deviceattest;
