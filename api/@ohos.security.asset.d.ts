/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit AssetStoreKit
 */

/**
 * This module provides the capabilities for life cycle management of sensitive user data (Asset) such as passwords
 * and tokens, including adding, removing, updating, and querying.
 *
 * @namespace asset
 * @syscap SystemCapability.Security.Asset
 * @since 11
 */
/**
 * This module provides the capabilities for life cycle management of sensitive user data (Asset) such as passwords
 * and tokens, including adding, removing, updating, and querying.
 *
 * @namespace asset
 * @syscap SystemCapability.Security.Asset
 * @atomicservice
 * @since 14
 */
declare namespace asset {
  /**
   * Add an Asset.
   * Permission ohos.permission.STORE_PERSISTENT_DATA is required when the Asset needs to be stored persistently
   *     by setting {@link Tag.IS_PERSISTENT} tag.
   *
   * @param { AssetMap } attributes - a map object containing attributes of the Asset to be added.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000003 - The asset already exists.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * Add an Asset.
   * Permission ohos.permission.STORE_PERSISTENT_DATA is required when the Asset needs to be stored persistently
   *     by setting {@link Tag.IS_PERSISTENT} tag.
   *
   * @param { AssetMap } attributes - a map object containing attributes of the Asset to be added.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000003 - The asset already exists.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function add(attributes: AssetMap): Promise<void>;

  /**
   * Add an Asset to a specific user space.
   * Permission ohos.permission.STORE_PERSISTENT_DATA is required when the Asset needs to be stored persistently
   *     by setting {@link Tag.IS_PERSISTENT} tag.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - the user identifier to add an Asset. The user identifier cannot be lower than 100.
   * @param { AssetMap } attributes - a map object containing attributes of the Asset to be added.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000003 - The asset already exists.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function addAsUser(userId: number, attributes: AssetMap): Promise<void>;

  /**
   * Add an Asset.
   * Permission ohos.permission.STORE_PERSISTENT_DATA is required when the Asset needs to be stored persistently
   *     by setting {@link Tag.IS_PERSISTENT} tag.
   *
   * @param { AssetMap } attributes - a map object containing attributes of the Asset to be added.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000003 - The asset already exists.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @since 12
   */
  /**
   * Add an Asset.
   * Permission ohos.permission.STORE_PERSISTENT_DATA is required when the Asset needs to be stored persistently
   *     by setting {@link Tag.IS_PERSISTENT} tag.
   *
   * @param { AssetMap } attributes - a map object containing attributes of the Asset to be added.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000003 - The asset already exists.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function addSync(attributes: AssetMap): void;

  /**
   * Remove one or more Assets that match a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be removed.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * Remove one or more Assets that match a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be removed.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function remove(query: AssetMap): Promise<void>;

  /**
   * Remove one or more Assets that match a search query from a specific user space.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - the user identifier to remove one or more Assets. The user identifier cannot be lower
   *     than 100.
   * @param { AssetMap } query - a map object containing attributes of the Asset to be removed.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function removeAsUser(userId: number, query: AssetMap): Promise<void>;

  /**
   * Remove one or more Assets that match a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be removed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @since 12
   */
  /**
   * Remove one or more Assets that match a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be removed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function removeSync(query: AssetMap): void;

  /**
   * Update an Asset that matches a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be updated.
   * @param { AssetMap } attributesToUpdate - a map object containing attributes with new values.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * Update an Asset that matches a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be updated.
   * @param { AssetMap } attributesToUpdate - a map object containing attributes with new values.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function update(query: AssetMap, attributesToUpdate: AssetMap): Promise<void>;

  /**
   * Update an Asset that matches a search query in a specific user space.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - the user identifier to update an Asset. The user identifier cannot be lower than 100.
   * @param { AssetMap } query - a map object containing attributes of the Asset to be updated.
   * @param { AssetMap } attributesToUpdate - a map object containing attributes with new values.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function updateAsUser(userId: number, query: AssetMap, attributesToUpdate: AssetMap): Promise<void>;

  /**
   * Update an Asset that matches a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be updated.
   * @param { AssetMap } attributesToUpdate - a map object containing attributes with new values.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @since 12
   */
  /**
   * Update an Asset that matches a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be updated.
   * @param { AssetMap } attributesToUpdate - a map object containing attributes with new values.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function updateSync(query: AssetMap, attributesToUpdate: AssetMap): void;

  /**
   * Preprocessing (e.g. get challenge) for querying one or more Assets that require user authentication.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Promise<Uint8Array> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000016 - The cache exceeds the limit.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * Preprocessing (e.g. get challenge) for querying one or more Assets that require user authentication.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Promise<Uint8Array> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000016 - The cache exceeds the limit.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function preQuery(query: AssetMap): Promise<Uint8Array>;

  /**
   * Preprocessing (e.g. get challenge) for querying one or more Assets
   * that require user authentication in a specific user space.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - the user identifier to pre-query one or more Assets. The user identifier cannot be
   *     lower than 100.
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Promise<Uint8Array> } the promise object returned by the function.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000016 - The cache exceeds the limit.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function preQueryAsUser(userId: number, query: AssetMap): Promise<Uint8Array>;

  /**
   * Preprocessing (e.g. get challenge) for querying one or more Assets that require user authentication.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Uint8Array } the challenge value to be used when {@link querySync} is called.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000016 - The cache exceeds the limit.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @since 12
   */
  /**
   * Preprocessing (e.g. get challenge) for querying one or more Assets that require user authentication.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Uint8Array } the challenge value to be used when {@link querySync} is called.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000016 - The cache exceeds the limit.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function preQuerySync(query: AssetMap): Uint8Array;

  /**
   * Query one or more Assets that match a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Promise<Array<AssetMap>> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000004 - Access denied.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * Query one or more Assets that match a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Promise<Array<AssetMap>> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000004 - Access denied.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function query(query: AssetMap): Promise<Array<AssetMap>>;

  /**
   * Query one or more Assets that match a search query in a specific user space.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - the user identifier to query one or more Assets. The user identifier cannot be lower
   *     than 100.
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Promise<Array<AssetMap>> } the promise object returned by the function.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000004 - Access denied.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function queryAsUser(userId: number, query: AssetMap): Promise<Array<AssetMap>>;

  /**
   * Query one or more Assets that match a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Array<AssetMap> } the query result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000004 - Access denied.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @since 12
   */
  /**
   * Query one or more Assets that match a search query.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be queried.
   * @returns { Array<AssetMap> } the query result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000004 - Access denied.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function querySync(query: AssetMap): Array<AssetMap>;

  /**
   * Post-processing (e.g. release cached resource) for querying multiple Assets that require user authentication.
   *
   * @param { AssetMap } handle - a map object containing the handle returned by {@link preQuery}.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * Post-processing (e.g. release cached resource) for querying multiple Assets that require user authentication.
   *
   * @param { AssetMap } handle - a map object containing the handle returned by {@link preQuery}.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function postQuery(handle: AssetMap): Promise<void>;

  /**
   * Post-processing (e.g. release cached resource) for querying multiple Assets that require user authentication in a
   * specific user space.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - the user identifier to post-query one or more Assets. The user identifier cannot be
   *     lower than 100.
   * @param { AssetMap } handle - a map object containing the handle returned by {@link preQueryAsUser}.
   * @returns { Promise<void> } the promise object returned by the function.
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function postQueryAsUser(userId:number, handle: AssetMap): Promise<void>;

  /**
   * Post-processing (e.g. release cached resource) for querying multiple Assets that require user authentication.
   *
   * @param { AssetMap } handle - a map object containing the handle returned by {@link preQuerySync}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @syscap SystemCapability.Security.Asset
   * @since 12
   */
  /**
   * Post-processing (e.g. release cached resource) for querying multiple Assets that require user authentication.
   *
   * @param { AssetMap } handle - a map object containing the handle returned by {@link preQuerySync}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  function postQuerySync(handle: AssetMap): void;

  /**
   * The ASSET service provides the ability to synchronize Assets between devices.
   * This function is used to query the synchronization result.
   *
   * @param { AssetMap } query - a map object containing attributes of the Asset to be synchronized.
   * @returns { Promise<SyncResult> } a promise object that can be resolved into the result of asset synchronization.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000018 - Parameter verification failed.
   * @syscap SystemCapability.Security.Asset
   * @since 20
   */
  function querySyncResult(query: AssetMap): Promise<SyncResult>;

  /**
   * A Map type containing tag-value pairs that describe the attributes of an Asset.
   *
   * @typedef { Map<Tag, Value> }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * A Map type containing tag-value pairs that describe the attributes of an Asset.
   *
   * @typedef { Map<Tag, Value> }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  type AssetMap = Map<Tag, Value>;

  /**
   * A type that indicates the secret or attribute value of an Asset tag.
   *
   * @typedef { boolean | number | Uint8Array }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * A type that indicates the secret or attribute value of an Asset tag.
   *
   * @typedef { boolean | number | Uint8Array }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  type Value = boolean | number | Uint8Array;

  /**
   * An enum type indicates when the Asset is accessible.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * An enum type indicates when the Asset is accessible.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  enum Accessibility {
    /**
     * The secret value in the Asset can only be accessed after the device is powered on.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The secret value in the Asset can only be accessed after the device is powered on.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DEVICE_POWERED_ON = 0,
    /**
     * The secret value in the Asset can only be accessed after the device is first unlocked.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The secret value in the Asset can only be accessed after the device is first unlocked.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DEVICE_FIRST_UNLOCKED = 1,
    /**
     * The secret value in the Asset can only be accessed while the device is unlocked.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The secret value in the Asset can only be accessed while the device is unlocked.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DEVICE_UNLOCKED = 2,
  }

  /**
   * An enum type indicates the user authentication type for Asset access control.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * An enum type indicates the user authentication type for Asset access control.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  enum AuthType {
    /**
     * The access to an Asset doesn't require user authentication.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The access to an Asset doesn't require user authentication.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    NONE = 0x00,
    /**
     * The access to an Asset requires user authentication using either PIN/pattern/password or biometric traits.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The access to an Asset requires user authentication using either PIN/pattern/password or biometric traits.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    ANY = 0xFF,
  }

  /**
   * An enum type indicates the type of Asset synchronization.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * An enum type indicates the type of Asset synchronization.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  enum SyncType {
    /**
     * An Asset with this attribute value is never allowed to be transferred out.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * An Asset with this attribute value is never allowed to be transferred out.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    NEVER = 0,
    /**
     * An Asset with this attribute value can only be restored to the device from which it was transferred out.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * An Asset with this attribute value can only be restored to the device from which it was transferred out.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    THIS_DEVICE = 1 << 0,
    /**
     * An Asset with this attribute value can only be transferred out to a trusted device (user authorized).
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * An Asset with this attribute value can only be transferred out to a trusted device (user authorized).
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    TRUSTED_DEVICE = 1 << 1,
    /**
     * An Asset with this attribute value can only be transferred out to devices logged in with trusted accounts.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    /**
     * An Asset with this attribute value can only be transferred out to devices logged in with trusted accounts.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    TRUSTED_ACCOUNT = 1 << 2,
  }

  /**
   * An enum type indicates the type of Asset encapsulation.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 18
   */
  enum WrapType {
    /**
     * An Asset with this attribute value is never allowed to be wrapped up.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 18
     */
    NEVER = 0,
    /**
     * An Asset with this attribute value can only be wrapped or unwrapped on devices logged in with trusted accounts.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 18
     */
    TRUSTED_ACCOUNT = 1,
  }

  /**
   * An enum type indicates the strategy for conflict resolution when handling duplicated Asset alias.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * An enum type indicates the strategy for conflict resolution when handling duplicated Asset alias.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  enum ConflictResolution {
    /**
     * Directly overwrite an Asset with duplicated alias when a conflict is detected.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * Directly overwrite an Asset with duplicated alias when a conflict is detected.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    OVERWRITE = 0,
    /**
     * Throw an error so that the caller can take measures when a conflict is detected.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * Throw an error so that the caller can take measures when a conflict is detected.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    THROW_ERROR = 1,
  }

  /**
   * An enum type indicates the return type of the queried Asset.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * An enum type indicates the return type of the queried Asset.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  enum ReturnType {
    /**
     * Specify that the return data should contain both secret value and attributes.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * Specify that the return data should contain both secret value and attributes.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    ALL = 0,
    /**
     * Specify that the return data contains only attributes.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * Specify that the return data contains only attributes.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    ATTRIBUTES = 1,
  }

  /**
   * An enum type indicates the additional action to be performed during operation.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 12
   */
  enum OperationType {
    /**
     * Synchronization is required during operation.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    NEED_SYNC = 0,
    /**
     * Logout is required during operation.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    NEED_LOGOUT = 1,
  }

  /**
   * Interface of synchronization result.
   *
   * @typedef SyncResult
   * @syscap SystemCapability.Security.Asset
   * @since 20
   */
  interface SyncResult {
    /**
     * The result code of synchronization.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.Security.Asset
     * @since 20
     */
    readonly resultCode: number;
    /**
     * The total count of synchronized Assets.
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.Security.Asset
     * @since 20
     */
    readonly totalCount?: number;
    /**
     * The count of Assets that fail to synchronize.
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.Security.Asset
     * @since 20
     */
    readonly failedCount?: number;
  }

  /**
   * An enum type containing the data type definitions for Asset attribute value.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * An enum type containing the data type definitions for Asset attribute value.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  enum TagType {
    /**
     * The data type of Asset attribute value is bool.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The data type of Asset attribute value is bool.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    BOOL = 0x01 << 28,
    /**
     * The data type of Asset attribute value is uint32.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The data type of Asset attribute value is uint32.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    NUMBER = 0x02 << 28,
    /**
     * The data type of Asset attribute value is byte array.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The data type of Asset attribute value is byte array.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    BYTES = 0x03 << 28,
  }

  /**
   * An enum type containing the Asset attribute tags.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * An enum type containing the Asset attribute tags.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  enum Tag {
    /**
     * A tag whose value is a byte array indicating the sensitive user data such as passwords and tokens.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the sensitive user data such as passwords and tokens.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    SECRET = TagType.BYTES | 0x01,
    /**
     * A tag whose value is a byte array identifying an Asset.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array identifying an Asset.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    ALIAS = TagType.BYTES | 0x02,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating when the Asset can be accessed.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a 32-bit unsigned integer indicating when the Asset can be accessed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    ACCESSIBILITY = TagType.NUMBER | 0x03,
    /**
     * A tag whose value is a bool indicating whether a screen lock password is required for the device.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a bool indicating whether a screen lock password is required for the device.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    REQUIRE_PASSWORD_SET = TagType.BOOL | 0x04,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the user authentication type for Asset access control.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the user authentication type for Asset access control.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    AUTH_TYPE = TagType.NUMBER | 0x05,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the validity period in seconds of user authentication.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the validity period in seconds of user authentication.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    AUTH_VALIDITY_PERIOD = TagType.NUMBER | 0x06,
    /**
     * A tag whose value is a byte array indicating the authentication challenge for anti-replay protection.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the authentication challenge for anti-replay protection.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    AUTH_CHALLENGE = TagType.BYTES | 0x07,
    /**
     * A tag whose value is a byte array indicating the authentication token after a user is verified.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the authentication token after a user is verified.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    AUTH_TOKEN = TagType.BYTES | 0x08,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the type of Asset synchronization.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the type of Asset synchronization.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    SYNC_TYPE = TagType.NUMBER | 0x10,
    /**
     * A tag whose value is a bool indicating whether Asset is stored persistently.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    IS_PERSISTENT = TagType.BOOL | 0x11,
    /**
     * A tag whose value is a byte array indicating the first user-defined Asset data label (not allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the first user-defined Asset data label (not allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_CRITICAL_1 = TagType.BYTES | 0x20,
    /**
     * A tag whose value is a byte array indicating the second user-defined Asset data label (not allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the second user-defined Asset data label (not allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_CRITICAL_2 = TagType.BYTES | 0x21,
    /**
     * A tag whose value is a byte array indicating the third user-defined Asset data label (not allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the third user-defined Asset data label (not allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_CRITICAL_3 = TagType.BYTES | 0x22,
    /**
     * A tag whose value is a byte array indicating the fourth user-defined Asset data label (not allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the fourth user-defined Asset data label (not allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_CRITICAL_4 = TagType.BYTES | 0x23,
    /**
     * A tag whose value is a byte array indicating the first user-defined Asset data label (allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the first user-defined Asset data label (allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_NORMAL_1 = TagType.BYTES | 0x30,
    /**
     * A tag whose value is a byte array indicating the second user-defined Asset data label (allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the second user-defined Asset data label (allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_NORMAL_2 = TagType.BYTES | 0x31,
    /**
     * A tag whose value is a byte array indicating the third user-defined Asset data label (allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the third user-defined Asset data label (allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_NORMAL_3 = TagType.BYTES | 0x32,
    /**
     * A tag whose value is a byte array indicating the fourth user-defined Asset data label (allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a byte array indicating the fourth user-defined Asset data label (allow to update).
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_NORMAL_4 = TagType.BYTES | 0x33,
    /**
     * A local tag whose value is a byte array indicating the first user-defined Asset data label (allow to update).
     * The information of a local tag will not be synchronized.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    /**
     * A local tag whose value is a byte array indicating the first user-defined Asset data label (allow to update).
     * The information of a local tag will not be synchronized.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_NORMAL_LOCAL_1 = TagType.BYTES | 0x34,
    /**
     * A local tag whose value is a byte array indicating the second user-defined Asset data label (allow to update).
     * The information of a local tag will not be synchronized.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    /**
     * A local tag whose value is a byte array indicating the second user-defined Asset data label (allow to update).
     * The information of a local tag will not be synchronized.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_NORMAL_LOCAL_2 = TagType.BYTES | 0x35,
    /**
     * A local tag whose value is a byte array indicating the third user-defined Asset data label (allow to update).
     * The information of a local tag will not be synchronized.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    /**
     * A local tag whose value is a byte array indicating the third user-defined Asset data label (allow to update).
     * The information of a local tag will not be synchronized.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_NORMAL_LOCAL_3 = TagType.BYTES | 0x36,
    /**
     * A local tag whose value is a byte array indicating the fourth user-defined Asset data label (allow to update).
     * The information of a local tag will not be synchronized.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    /**
     * A local tag whose value is a byte array indicating the fourth user-defined Asset data label (allow to update).
     * The information of a local tag will not be synchronized.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_LABEL_NORMAL_LOCAL_4 = TagType.BYTES | 0x37,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the return type of the queried Asset.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the return type of the queried Asset.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    RETURN_TYPE = TagType.NUMBER | 0x40,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the maximum number of returned Assets in one query.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the maximum number of returned Assets in one query.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    RETURN_LIMIT = TagType.NUMBER | 0x41,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the offset of return data in batch query.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the offset of return data in batch query.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    RETURN_OFFSET = TagType.NUMBER | 0x42,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating how the query results are sorted.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a 32-bit unsigned integer indicating how the query results are sorted.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    RETURN_ORDERED_BY = TagType.NUMBER | 0x43,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the strategy for resolving Asset conflicts.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the strategy for resolving Asset conflicts.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    CONFLICT_RESOLUTION = TagType.NUMBER | 0x44,
    /**
     * A tag whose value is a byte array indicating the update time of an Asset.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    /**
     * A tag whose value is a byte array indicating the update time of an Asset.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    UPDATE_TIME = TagType.BYTES | 0x45,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the additional action to be performed during operation.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    OPERATION_TYPE = TagType.NUMBER | 0x46,
    /**
     * A tag whose value is a bool indicating whether the attributes of an asset are required to be encrypted.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    REQUIRE_ATTR_ENCRYPTED = TagType.BOOL | 0x47,
    /**
     * A tag whose value is a byte array indicating the group id an asset belongs to.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 18
     */
    GROUP_ID = TagType.BYTES | 0x48,
    /**
     * A tag whose value is a 32-bit unsigned integer indicating the type of Asset encapsulation.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 18
     */
    WRAP_TYPE = TagType.NUMBER | 0x49,
  }

  /**
   * An enum type containing the Asset error codes.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @since 11
   */
  /**
   * An enum type containing the Asset error codes.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.Asset
   * @atomicservice
   * @since 14
   */
  enum ErrorCode {
    /**
     * The error code indicates that the caller doesn't have the permission.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    PERMISSION_DENIED = 201,
    /**
     * The error code indicates that the caller is not a system application.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    NOT_SYSTEM_APPLICATION = 202,
    /**
     * The error code indicates that the argument is invalid.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the argument is invalid.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    INVALID_ARGUMENT = 401,
    /**
     * The error code indicates that the ASSET service is unavailable.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the ASSET service is unavailable.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    SERVICE_UNAVAILABLE = 24000001,
    /**
     * The error code indicates that the asset is not found.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the asset is not found.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    NOT_FOUND = 24000002,
    /**
     * The error code indicates that the asset already exists.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the asset already exists.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DUPLICATED = 24000003,
    /**
     * The error code indicates that access to the asset is denied.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that access to the asset is denied.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    ACCESS_DENIED = 24000004,
    /**
     * The error code indicates that the screen lock status does not match.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the screen lock status does not match.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    STATUS_MISMATCH = 24000005,
    /**
     * The error code indicates insufficient memory.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates insufficient memory.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    OUT_OF_MEMORY = 24000006,
    /**
     * The error code indicates that the asset is corrupted.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the asset is corrupted.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATA_CORRUPTED = 24000007,
    /**
     * The error code indicates that the database operation failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the database operation failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    DATABASE_ERROR = 24000008,
    /**
     * The error code indicates that the cryptography operation failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the cryptography operation failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    CRYPTO_ERROR = 24000009,
    /**
     * The error code indicates that the ipc failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the ipc failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    IPC_ERROR = 24000010,
    /**
     * The error code indicates that calling the Bundle Manager service failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that calling the Bundle Manager service failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    BMS_ERROR = 24000011,
    /**
     * The error code indicates that calling the OS Account service failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that calling the OS Account service failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    ACCOUNT_ERROR = 24000012,
    /**
     * The error code indicates that calling the Access Token service failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that calling the Access Token service failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    ACCESS_TOKEN_ERROR = 24000013,
    /**
     * The error code indicates that the file operation failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the file operation failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    FILE_OPERATION_ERROR = 24000014,
    /**
     * The error code indicates that getting the system time failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that getting the system time failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    GET_SYSTEM_TIME_ERROR = 24000015,
    /**
     * The error code indicates that the cache exceeds the limit.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the cache exceeds the limit.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    LIMIT_EXCEEDED = 24000016,
    /**
     * The error code indicates that the capability is not supported.
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    /**
     * The error code indicates that the capability is not supported.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    UNSUPPORTED = 24000017,
    /**
     * The error code indicates that verifying the parameter failed.
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 20
     */
    PARAM_VERIFICATION_FAILED = 24000018,
  }
}

export default asset;
