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
 * Provide APIs to set system uimode.
 * @syscap SystemCapability.MiscServices.UiMode
 * @import import uimode from '@ohos.uimode';
 * @since 9
 */
declare namespace uimode {
    /**
     * Set the system uimode to dark-mode or light-mode.
     * @param isDarkMode Indicates whether to set dark-mode.
     */
    function setDarkMode(isDarkMode: boolean, callback: AsyncCallback<void>): void;
    function setDarkMode(isDarkMode: boolean): Promise<void>;
}
export default uimode;