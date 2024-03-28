/*
* Copyright (C) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit UserAuthenticationKit
 */

import userAuth from '@ohos.userIAM.userAuth';

/**
 * Declare struct UserAuthIcon.
 * @struct { UserAuthIcon }
 * @atomicservice
 * @since 12
 */
@Component
export default struct UserAuthIcon {

    /**
     * Auth parameter.
     *
     * @typedef AuthParam
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    authParam: userAuth.AuthParam;

    /**
     * Auth widget parameter.
     *
     * @typedef WidgetParam
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    widgetParam: userAuth.WidgetParam;

    /**
     * Icon size.
     *
     * @param { Dimension } value - Set the height of the icon, aspect ratio is 1:1, default size is 64 * 64.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12
     */
    iconHeight?: Dimension;

    /**
     * Icon color.
     *
     * @param { ResourceColor } value - Set the icon color,default value is {sys.color.ohos_id_color_activated}.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12
     */
    iconColor?: ResourceColor;

    /**
     * Provides business callback interface, will be called after the business is completed.
     *
     * @param { userAuth.UserAuthResult }
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    onAuthResult: (result: userAuth.UserAuthResult) => void;

    /**
     * This method will be called after user click icon.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 12
     */
    onIconClick?: () => void;
}