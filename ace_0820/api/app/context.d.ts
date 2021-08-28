/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './../basic';

/**
 * The context of anability or an application.  It allows access to
 * application-specific resources, request and verification permissions.
 * Can only be obtained through the ability.
 *
 * @since 6
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable
 * @import import abilityManager from 'app/context'
 * @permission N/A
 */
export interface Context {

   /**
    * Get app cache dir.
    * @note If in the context of the ability, return the cache dir of
    * the ability; if in the context of the application, return the
    * cache dir of the application.
    * @since 6
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    * @return the cache dir
    */
    getCacheDir(callback: AsyncCallback<string>): void;
    getCacheDir(): Promise<string>;

    /**
    * Get app files dir.
    * @note If in the context of the ability, return the files dir of
    * the ability; if in the context of the application, return the
    * files dir of the application.
    * @since 6
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    * @return the files dir
    */
    getFilesDir(callback: AsyncCallback<string>): void;
    getFilesDir(): Promise<string>;

    /**
    * Get app external cache dir.
    * @since 6
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    * @return the cache dir
    * @deprecated In the new version, storage no longer distinguishes
    * between internal and external
    */
    getExternalCacheDir(callback: AsyncCallback<string>): void;
    getExternalCacheDir(): Promise<string>;

    /**
    * Get the local root dir of an app. If it is the first call, the dir
    * will be created.
    * @note If in the context of the ability, return the root dir of
    * the ability; if in the context of the application, return the
    * root dir of the application.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    * @return the root dir
    */
    getOrCreateLocalDir(): Promise<string>;
    getOrCreateLocalDir(callback: AsyncCallback<string>): void;

    /**
    * Get the local root dir of an app. If it is the first call, the dir
    * will be created.
    * @note If in the context of the ability, return the root dir of
    * the ability; if in the context of the application, return the
    * root dir of the application.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    * @return the root dir
    */
    getOrCreateDistributedDir(): Promise<string>;
    getOrCceateDistributedDir(callback: AsyncCallback<string>): void;

    /**
    * Verify whether the specified permission is allowed for a particular
    * pid and uid running in the system.
    * @param permission The name of the specified permission
    * @param pid process id
    * @param uid user id
    * @note Pid and uid are optional. If you do not pass in pid and uid,
    * it will check your own permission.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    * @return asynchronous callback with {@code 0} if the PID
    *         and UID have the permission; callback with {@code -1} otherwise.
    */
    verifyPermission(permission: string, pid?: number, uid?: number): Promise<number>;
    verifyPermission(permission: string, pid: number, uid: number, callback: AsyncCallback<number>): void;
    verifyPermission(permission: string, callback: AsyncCallback<number>): void;

    /**
    * Checks whether a specified permission has been granted to the process identified by
    *  {@code pid} and {@code uid}, and throws a {@link SecurityException} if the permission is not granted.
    * @param permission The name of the specified permission
    * @param pid process id
    * @param uid user id
    * @note Pid and uid are optional. If you do not pass in pid and uid,
    * it will check your own permission.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    */
    compelVerifyPermission(permission: string, message: string, pid?: number, uid?: number): Promise<void>;
    compelVerifyPermission(permission: string, message: string, pid: number, uid: number, callback: AsyncCallback<void>): void;
    compelVerifyPermission(permission: string, callback: AsyncCallback<void>): void;

    /**
    * Auth permission to access a specific Uri to another bundle
    *
    * @param targetBundleName The name of the bundle you want to access
    * @param Uri The Uri you want to access to.
    * @param accessMode The access mode.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    * @systemapi hide this for inner system use
    */
    authUriAccessPermission(targetBundleName: string, Uri:string, accessMode: number): Promise<void>;
    authUriAccessPermission(targetBundleName: string, Uri:string, accessMode: number, callback: AsyncCallback<void>): void;

    /**
    * revoke the access permission that you have authed
    *
    * @param targetBundleName The name of the bundle you have auth permission
    * @param Uri The Uri you want revoke the permission.
    * @param accessMode The access mode.
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    * @systemapi hide this for inner system use
    */
    unauthUriAccessPermission(targetBundleName: string, Uri:string, accessMode: number): Promise<void>;
    unauthUriAccessPermission(targetBundleName: string, Uri:string, accessMode: number, callback: AsyncCallback<void>): void;

    /**
    * Requests certain permissions from the system.
    * @param permissions Indicates the list of permissions to be requested. This parameter cannot be null.
    * @param requestCode Indicates the request code to be passed to the PermissionRequestResult
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    */
    requestPermissionsFromUser(permissions: Array<string>, requestCode: number, resultCallback: AsyncCallback<PermissionRequestResult>): void;
    requestPermissionsFromUser(permissions: Array<string>, requestCode: number): Promise<PermissionRequestResult>;

}

/**
 * @name the result of requestPermissionsFromUser with asynchronous callback
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @permission N/A
 * @devices phone, tablet, tv, wearable
 */
interface PermissionRequestResult {
    /**
    * @default The request code passed in by the user
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
    requestCode: number;

    /**
    * @default The permissions passed in by the user
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
    permissions: Array<string>;

    /**
    * @default The results for the corresponding request permissions
    * @since 7
    * @SysCap SystemCapability.Appexecfwk
    */
    authResults: Array<number>;
}
