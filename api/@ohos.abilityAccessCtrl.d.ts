/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @syscap SystemCapability.Security.AccessToken
 */
 declare namespace abilityAccessCtrl {
    /**
     * Obtains the AtManager instance.
     * @return returns the instance of the AtManager.
     * @since 8
     */
    function createAtManager(): AtManager;
  
  
  
    /**
     * GrantStatus.
     * @since 8
     */
    export enum GrantStatus {
        /**
         * access_token permission check fail
         */
        PERMISSION_DENIED = -1,
        /**
         * access_token permission check success
         */
        PERMISSION_GRANTED = 0,
    }

    /**
     * Enum for permision state change type.
     * @since 9
     */
    export enum PermissionStateChangeType {
        /**
         * A granted user_grant permission is revoked.
         */
        PERMISSION_REVOKED_OPER = 0,
        /**
         * A user_grant permission is granted.
         */
        PERMISSION_GRANTED_OPER = 1,
    }

    /**
     * Indicates the information of permission state change.
     *
     * @name PermissionStateChangeInfo
     * @since 9
     */
    interface PermissionStateChangeInfo {
        /**
         * Indicates the permission state change type.
         */
        change: PermissionStateChangeType;

        /**
         * Indicates the application whose permission state has been changed.
         */
        tokenID: number;

        /**
         * Indicates the permission whose state has been changed.
         */
        permissionName: string;
    }
 }

 export default abilityAccessCtrl;
