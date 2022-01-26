/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from "../basic";

/**
 * The management class for uri of file.
 *
 * @since 8
 * @sysCap appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 */
export default class UriPermissionManager {
    /**
     * Check whether the application corresponding to the accesstokenID has access rights to the URI.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 8
     * @sysCap appexecfwk
     * @param uri File URI.
     * @param accessTokenId Indicates the access token of the application.
     * @return -
     */
    verifyUriPermission(uri: string, accessTokenId: number, callback: AsyncCallback<number>): void;
    verifyUriPermission(uri: string, accessTokenId: number): Promise<number>;
}