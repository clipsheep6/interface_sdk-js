/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */
import { AsyncCallback, Callback } from './@ohos.base';
import { Permissions } from './permissions';
import type _Context from './application/Context';
import type _PermissionRequestResult from './security/PermissionRequestResult';

/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare namespace abilityAccessCtrl {
    /**
     * Obtains the AtManager instance.
     *
     * @returns { AtManager } returns the instance of the AtManager.
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    function createAtManager(): AtManager;
    
    /**
     * Provides methods for managing access_token.
     *
     * @interface AtManager
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 20
     */
    interface AtManager {
        /**
         * Checks whether a specified application has been granted the given permission synchronously.
         *
         * @param { int } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified.
         * @returns { GrantStatus } Returns permission verify result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
         * @syscap SystemCapability.Security.AccessToken
         * @since 20
         */
        verifyAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus;   
        
        /**
         * Checks whether a specified application has been granted the given permission.
         * On the cross-platform, this function can be used to check the permission grant status for the current application only.
         *
         * @param { int } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified.
         * @returns { Promise<GrantStatus> } Returns permission verify result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        checkAccessToken(tokenID: int, permissionName: Permissions): Promise<GrantStatus>;

        /**
         * Checks whether a specified application has been granted the given permission.
         * On the cross-platform, this function can be used to check the permission grant status for the current application only.
         *
         * @param { int } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified.
         * @returns { GrantStatus } Returns permission verify result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        checkAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus;      
        
        /**
         * Requests certain permissions from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
         * @param { AsyncCallback<PermissionRequestResult> } requestCallback Callback for the result from requesting permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>, requestCallback: AsyncCallback<PermissionRequestResult>): void;
        
        /**
         * Requests certain permissions from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
         * @returns { Promise<PermissionRequestResult> } Returns result of requesting permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>): Promise<PermissionRequestResult>;
    }
    
    /**
     * GrantStatus.
     *
     * @enum { int }
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    export enum GrantStatus {      
        /**
         * access_token permission check fail
         *
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        PERMISSION_DENIED = -1,

        /**
         * access_token permission check success
         *
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        PERMISSION_GRANTED = 0
    }
}
export default abilityAccessCtrl;
export { Permissions };

/**
 * PermissionRequestResult interface.
 *
 * @typedef { _PermissionRequestResult }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type PermissionRequestResult = _PermissionRequestResult;

/**
 * Context interface.
 *
 * @typedef { _Context }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type Context = _Context;
