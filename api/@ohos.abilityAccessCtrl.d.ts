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
     * Provides methods for managing access_token.
     * @name AtManager
     */
    interface AtManager {
        /**
         * Checks whether a specified application has been granted the given permission.
         * @param tokenID The tokenId of specified application.
         * @param permissionName The permission name to be verified.
         * @return Returns permission verify result.
         * @since 8
         */
        verifyAccessToken(tokenID: number, permissionName: string): Promise<GrantStatus>;

        /**
         * Grants a specified user_grant permission to the given application.
         * @param tokenID The tokenId of specified application.
         * @param permissionName The permission name to be granted.
         * @param permissionFlag Flag of permission state.
         * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS.
         * @systemapi hide this for inner system use.
         * @since 8
         */
        grantUserGrantedPermission(tokenID: number, permissionName: string, permissionFlag: number): Promise<number>;
        grantUserGrantedPermission(tokenID: number, permissionName: string, permissionFlag: number, callback: AsyncCallback<number>): void;

        /**
         * Revokes a specified user_grant permission to the given application.
         * @param tokenID The tokenId of specified application.
         * @param permissionName The permission name to be revoked.
         * @param permissionFlag Flag of permission state.
         * @permission ohos.permission.REVOKE_SENSITIVE_PERMISSIONS.
         * @systemapi hide this for inner system use.
         * @since 8
         */
        revokeUserGrantedPermission(tokenID: number, permissionName: string, permissionFlag: number): Promise<number>;
        revokeUserGrantedPermission(tokenID: number, permissionName: string, permissionFlag: number, callback: AsyncCallback<number>): void;

        /**
         * Queries specified permission flag of the given application.
         * @param tokenID The tokenId of specified application.
         * @param permissionName The permission name to be granted.
         * @return Return permission flag.
         * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or ohos.permission.REVOKE_SENSITIVE_PERMISSIONS.
         * @systemapi hide this for inner system use.
         * @since 8
         */
        getPermissionFlags(tokenID: number, permissionName: string): Promise<number>;

        /**
         * Queries permission management version.
         * @return Return permission version.
         * @systemapi hide this for inner system use.
         * @since 9
         */
         getVersion(): Promise<number>;

        /**
         * Registeres a permission state callback so that the application can be notified upon specified permission state of specified applications changes.
         * @param tokenIDList A list of tokenids that specify the applications to be listened on. The value in the list can be:
         *        <ul>
         *        <li>{@code empty} - Indicates that the application can be notified if the specified permission state of any applications changes.
         *        </li>
         *        <li>{@code non-empty} - Indicates that the application can only be notified if the specified permission state of the specified applications change.
         *        </li>
         *        </ul>
         * @param permissionNameList A list of permissions that specify the permissions to be listened on. The value in the list can be:
         *        <ul>
         *        <li>{@code empty} - Indicates that the application can be notified if any permission state of the specified applications changes.
         *        </li>
         *        <li>{@code non-empty} - Indicates that the application can only be notified if the specified permission state of the specified applications changes.
         *        </li>
         *        </ul>
         * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS.
         * @param callback Indicates the permission state callback to register.
         * @systemapi hide this for inner system use.
         * @since 9
         */
         on(type: 'permissionStateChange', tokenIDList: Array<number>, permissionNameList: Array<string>, callback: Callback<{change: PermStateChange, tokenID: number, permissionName: string}>): void;

        /**
         * Unregisteres a permission state callback so that the specified applications cannot be notified upon specified permissions state changes anymore.
         * @param tokenIDList A list of tokenids that specify the applications being listened on. it should correspond to the value registerd by function of addPermissionStateListener.
         * @param permissionNameList A list of permissions that specify the permissions being listened on. it should correspond to the value registerd by function of addPermissionStateListener.
         * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS.
         * @systemapi hide this for inner system use.
         * @since 9
         */
         off(type: 'permissionStateChange', tokenIDList: Array<number>, permissionNameList: Array<string>): void;
    }
  
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
     * PermStateChange.
     * @since 9
     */
         export enum PermStateChange {
            /**
             * a granted user_grant permission is revoked.
             */
            PERMISSION_REVOKE_OPER = 0,
            /**
             * a user_grant permission is granted.
             */
            PERMISSION_GRANT_OPER = 1,
    }
  }

  export default abilityAccessCtrl;
