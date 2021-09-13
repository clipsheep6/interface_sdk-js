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

import { AsyncCallback } from './basic';

declare namespace i18n {
/**
 * Obtains the country or region name localized for display in a given locale.
 *
 * @param locale Indicates the locale whose country or region name will be displayed.
 * @param displayLocale Indicates the locale for which to display the country or region name.
 * @return Returns the localized country or region name.
 * @since 7
 */
export function getDisplayCountry(locale: string, displayLocale: string): Promise<string>;

/**
 * Obtains the country or region name localized for display in a given locale.
 *
 * @param locale Indicates the locale whose country or region name will be displayed.
 * @param displayLocale Indicates the locale for which to display the country or region name.
 * @param callback Indicates the callback containing the localized country or region name.
 * @since 7
 */
export function getDisplayCountry(locale: string, displayLocale: string, callback: AsyncCallback<string>);

/**
 * Obtains the language name localized for display in a given locale.
 *
 * @param locale Indicates the locale whose language name will be displayed.
 * @param displayLocale Indicates the locale for which to display the language name.
 * @param sentenceCase  Specifies whether the language name is displayed in
 *                      sentence case. The value {@code true} indicates the
 *                      sentence case, and {@code false} indicates another case style.
 * @return Returns the localized language name.
 * @since 7
 */
export function getDisplayLanguage(locale: string, displayLocale: string,
        sentenceCase: boolean): Promise<string>;

/**
 * Obtains the language name localized for display in a given locale.
 *
 * @param locale Indicates the locale whose language name will be displayed.
 * @param displayLocale Indicates the locale for which to display the language name.
 * @param sentenceCase  Specifies whether the language name is displayed in
 *                      sentence case. The value {@code true} indicates the
 *                      sentence case, and {@code false} indicates another case style.
 * @param callback Indicates the callback containing the localized language name.
 * @since 7
 */
export function getDisplayLanguage(locale: string, displayLocale: string,
        sentenceCase: boolean, callback: AsyncCallback<string>);

/**
 * Check whether the locale is an RTL locale.
 *
 * @param locale Indicates the locale to use.
 * @param callback Indicates the callback containing whether the locale is an RTL locale.
 * @since 7
 */
export function isRTL(locale: string, callback: AsyncCallback<boolean>);

/**
 * Check whether the locale is an RTL locale.
 *
 * @param locale Indicates the locale to use.
 * @return Returns true if the locale is an RTL locale and vice versa.
 */
export function isRTL(locale: string): Promise<boolean>;
}
export default i18n;
