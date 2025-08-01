/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * The result of requestPermissionsFromUser with asynchronous callback.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @since 9
 */
/**
 * The result of requestPermissionsFromUser with asynchronous callback.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * The result of requestPermissionsFromUser with asynchronous callback.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class PermissionRequestResult {
  /**
   * The permissions passed in by the user.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @since 9
   */
  /**
   * The permissions passed in by the user.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * The permissions passed in by the user.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  permissions: Array<string>;

  /**
   * The results for the corresponding request permissions. The value 0 indicates that a
   * permission is granted, the value -1 indicates not, and the value 2 indicates the request is invalid.
   *
   * @type { Array<int> }
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @since 9
   */
  /**
   * The results for the corresponding request permissions. The value 0 indicates that a
   * permission is granted, the value -1 indicates not, and the value 2 indicates the request is invalid.
   *
   * @type { Array<int> }
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * The results for the corresponding request permissions. The value 0 indicates that a
   * permission is granted, the value -1 indicates not, and the value 2 indicates the request is invalid.
   *
   * @type { Array<int> }
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  authResults: Array<int>;

  /**
   * Specifies whether a dialog box is shown for each requested permission.
   * The value true means that a dialog box is shown, and false means the opposite.
   *
   * @type { ?Array<boolean> }
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  dialogShownResults?: Array<boolean>;

  /**
   * Enumerates the return values of the permission request operation.
   *   0  The operation is successful.
   *   1  The permission name is invalid.
   *   2  The requested permission has not been declared.
   *   3  The conditions for requesting the permission are not met.
   *   4  The user does not agree to the Privacy Statement.
   *   5  The permission cannot be requested in a pop-up window.
   *   12 The service is abnormal.
   *
   * @type { ?Array<int> }
   * @syscap SystemCapability.Security.AccessToken
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  errorReasons?: Array<int>;
}

export default PermissionRequestResult;
