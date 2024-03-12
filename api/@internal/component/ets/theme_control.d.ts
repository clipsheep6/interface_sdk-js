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

declare class ThemeControl {
    /**
     * Sets whether the system can apply Theme to the Basic Components
     *
     * @param enable - set 'true' to switch on the Theme supporting for the Basic Components. Default value is 'false'
     */
    static enableTheme(enable: boolean): void;

    /**
     * Sets the default Theme for the ArkUI page and for later opened pages.
     * @param theme - the Theme for settings
     */
    // @ts-ignore
    static setDefaultTheme(theme: CustomTheme): void;

    /**
     * Sets the Theme base data at the UI Ability level.
     * @param colors 
     */
    // @ts-ignore
    static setThemeBasis(colors: CustomColors): void;
}
