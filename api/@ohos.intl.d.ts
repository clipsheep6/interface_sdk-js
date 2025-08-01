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

/**
 * @file
 * @kit LocalizationKit
 */

/**
 * Provides internationalization related APIs.
 *
 * @namespace intl
 * @syscap SystemCapability.Global.I18n
 * @since 6
 */
/**
 * Provides internationalization related APIs.
 *
 * @namespace intl
 * @syscap SystemCapability.Global.I18n
 * @crossplatform
 * @since 10
 */
/**
 * Provides internationalization related APIs.
 *
 * @namespace intl
 * @syscap SystemCapability.Global.I18n
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Provides internationalization related APIs.
 *
 * @namespace intl
 * @syscap SystemCapability.Global.I18n
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace intl {
  /**
   * Provides the options of Locale.
   *
   * @interface LocaleOptions
   * @syscap SystemCapability.Global.I18n
   * @since 6
   */
  /**
   * Provides the options of Locale.
   *
   * @interface LocaleOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the options of Locale.
   *
   * @interface LocaleOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Provides the options of Locale.
   *
   * @interface LocaleOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   * @useinstead Intl.LocaleOptions
   */
  export interface LocaleOptions {
    /**
     * Indicates the calendar.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the calendar.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the calendar.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the calendar.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Calendar parameter. The value can be: "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic",
     * "gregory", "hebrew", "indian", "islamic", "islamic-umalqura", "islamic-tbla", "islamic-civil",
     * "islamic-rgsa", "iso8601", "japanese", "persian", "roc", or "islamicc".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.LocaleOptions.calendar
     */
    calendar?: string;

    /**
     * Indicates the collation.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the collation.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the collation.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the collation.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Collation parameter. The value can be: "big5han", "compat", "dict", "direct", "ducet", "emoji", "eor", "gb2312",
     * "phonebk", "phonetic", "pinyin", "reformed, "search", "searchjl", "standard", "stroke", "trad", "unihan", "zhuyin"
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.LocaleOptions.collation
     */
    collation?: string;

    /**
     * Indicates the hourCycle.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the hourCycle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the hourCycle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the hourCycle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Hour cycle. The value can be: "h11", "h12", "h23", or "h24".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.LocaleOptions.hourCycle
     */
    hourCycle?: string;

    /**
     * Indicates the numberingSystem.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the numberingSystem.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the numberingSystem.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the numberingSystem.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Numbering system. The value can be: "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks", "brah", "cakm",
     * "cham", "deva", "diak", "fullwide", "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp", "java", "kali",
     * "khmr", "knda", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono",
     * "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo",
     * "olck", "orya*", "osma", "rohg", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "takr", "talu",
     * "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "wara", or "wcho".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.LocaleOptions.numberingSystem
     */
    numberingSystem?: string;

    /**
     * Indicates the numeric.
     *
     * @type { boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the numeric.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the numeric.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the numeric.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Wether to use special sorting rules for digits. The value "true" means to use special sorting rules for digits,
     * and the value "false" means the opposite. The default value is "false".
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.LocaleOptions.numeric
     */
    numeric?: boolean;

    /**
     * Indicates the caseFirst.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the caseFirst.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the caseFirst.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the caseFirst.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Whether upper case or lower case is sorted first. The value can be "upper", "lower", or "false".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.LocaleOptions.caseFirst
     */
    caseFirst?: string;
  }

  /**
   * Provides APIs for obtaining locale information.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 6
   */
  /**
   * Provides APIs for obtaining locale information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides APIs for obtaining locale information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Provides APIs for obtaining locale information.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   * @deprecated since 20
   * @useinstead Intl.Locale
   */
  export class Locale {
    /**
     * A constructor used to create a Locale object.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create a Locale object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * A constructor used to create a Locale object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Creates a Locale object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead i18n.System.getSystemLocaleInstance
     */
    constructor();

    /**
     * A constructor used to create a Locale object.
     *
     * @param { string } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region.
     * @param { LocaleOptions } options - Indicates Locale option object use to initialize the Locale object.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * A constructor used to create a Locale object.
     *
     * @param { string } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region.
     * @param { LocaleOptions } options - Indicates Locale option object use to initialize the Locale object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * A constructor used to create a Locale object.
     *
     * @param { string } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region.
     * @param { LocaleOptions } options - Indicates Locale option object use to initialize the Locale object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Creates a Locale object.
     *
     * @param { string } locale - Locale information, which consists of the language, script, and country/region.
     * @param { LocaleOptions } [options] -  Options for creating the Locale object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.constructor
     */
    constructor(locale: string, options?: LocaleOptions);

    /**
     * Indicates the language of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the language of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the language of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Language associated with the locale, for example, "zh". The value complies with the ISO 639 standard.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.language
     */
    language: string;

    /**
     * Indicates the script of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the script of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the script of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Script type of the language, for example, "Hans". The value complies with the Unicode ISO 15924 standard.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.script
     */
    script: string;

    /**
     * Indicates the region of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the region of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the region of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Country/region associated with the locale, for example, "CN". The value complies with the ISO 3166 standard.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.region
     */
    region: string;

    /**
     * Indicates the basic locale information, which is returned as a substring of
     * a complete locale string.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the basic locale information, which is returned as a substring of
     * a complete locale string.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the basic locale information, which is returned as a substring of
     * a complete locale string.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Locale information, which consists of the language, script, and country/region, for example, "zh-Hans-CN".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.baseName
     */
    baseName: string;

    /**
     * Indicates the case first style of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the case first style of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the case first style of the locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Whether case is taken into account for the locale's collation rules. The value can be: "upper", "lower", or
     * "false".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.caseFirst
     */
    caseFirst: string;

    /**
     * Indicates the calendar.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the calendar.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the calendar.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Calendar for the locale. The value can be: "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic",
     * "gregory", "hebrew", "indian", "islamic", "islamic-umalqura", "islamic-tbla", "islamic-civil", "islamic-rgsa",
     * "iso8601", "japanese", "persian", "roc", or "islamicc".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.calendar
     */
    calendar: string;

    /**
     * Indicates the collation.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the collation.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the collation.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Collation rules for the locale. The value can be: "big5han", "compat", "dict", "direct", "ducet", "eor",
     * "gb2312", "phonebk", "phonetic", "pinyin", "reformed", "searchjl", "stroke", "trad", "unihan", or "zhuyin".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.collation
     */
    collation: string;

    /**
     * Indicates the hour cycle.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the hour cycle.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the hour cycle.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Time system for the locale. The value can be: "h11", "h12", "h23", or "h24".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.hourCycle
     */
    hourCycle: string;

    /**
     * Indicates the numbering system.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the numbering system.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the numbering system.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Numbering system for the locale. The value can be: "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks",
     * "brah", "cakm", "cham", "deva", "diak", "fullwide", "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp",
     * "java", "kali", "khmr", "knda", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl",
     * "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng",
     * "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund",
     * "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "wara", or "wcho".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.numberingSystem
     */
    numberingSystem: string;

    /**
     * Indicates whether it is numeric.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates whether it is numeric.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates whether it is numeric.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Wether to use special sorting rules for digits. The value "true" means to use special sorting rules for digits,
     * and the value "false" means the opposite. The default value is "false".
     *
     * @type { boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.numeric
     */
    numeric: boolean;

    /**
     * Convert the locale information to string.
     *
     * @returns { string } locale information in string form.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Convert the locale information to string.
     *
     * @returns { string } locale information in string form.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Convert the locale information to string.
     *
     * @returns { string } locale information in string form.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Obtains the string that represents a Locale object.
     *
     * @returns { string } String that represents the Locale object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.toString
     */
    toString(): string;

    /**
     * Maximize the locale's base information.
     *
     * @returns { Locale } maximized locale.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Maximize the locale's base information.
     *
     * @returns { Locale } maximized locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Maximize the locale's base information.
     *
     * @returns { Locale } maximized locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Maximizes locale information by supplementing the missing script and country/region information.
     *
     * @returns { Locale } Locale object with the script and country/region information.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.maximize
     */
    maximize(): Locale;

    /**
     * Minimize the locale's base information.
     *
     * @returns { Locale } minimized locale.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Minimize the locale's base information.
     *
     * @returns { Locale } minimized locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Minimize the locale's base information.
     *
     * @returns { Locale } minimized locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Minimizes locale information by removing the script and country/region information.
     *
     * @returns { Locale } Locale object without the script and country/region information.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.Locale.minimize
     */
    minimize(): Locale;
  }

  /**
   * Provides the options of date time format.
   *
   * @interface DateTimeOptions
   * @syscap SystemCapability.Global.I18n
   * @since 6
   */
  /**
   * Provides the options of date time format.
   *
   * @interface DateTimeOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the options of date time format.
   *
   * @interface DateTimeOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the options for a DateTimeOptions object. Since API version 9, the DateTimeOptions attribute is changed
   * from mandatory to optional.
   *
   * @interface DateTimeOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @deprecated since 20
   * @useinstead Intl.DateTimeFormatOptions
   * @arkts 1.1&1.2
   */
  export interface DateTimeOptions {
    /**
     * Indicates the locale.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the locale.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the locale.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the locale.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Valid locale ID, for example, "zh-Hans-CN". The default value is the current system locale.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @arkts 1.1&1.2
     */
    locale?: string;

    /**
     * Indicates the dateStyle.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the dateStyle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the dateStyle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the dateStyle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Date display format. The value can be: "long", "short", "medium", "full", or "auto".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.dateStyle
     * @arkts 1.1&1.2
     */
    dateStyle?: string;

    /**
     * Indicates the timeStyle.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the timeStyle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the timeStyle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the timeStyle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Time display format. The value can be: "long", "short", "medium", "full", or "auto".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.timeStyle
     * @arkts 1.1&1.2
     */
    timeStyle?: string;

    /**
     * Indicates the hourCycle.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the hourCycle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the hourCycle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the hourCycle.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Hour cycle. The value can be: "h11", "h12", "h23", or "h24".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.hourCycle
     * @arkts 1.1&1.2
     */
    hourCycle?: string;

    /**
     * Indicates the timeZone.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the timeZone.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the timeZone.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the timeZone.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Time zone in use. The value is a valid IANA time zone ID.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.timeZone
     * @arkts 1.1&1.2
     */
    timeZone?: string;

    /**
     * Indicates the numberingSystem.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the numberingSystem.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the numberingSystem.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the numberingSystem.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Numbering system. The value can be: "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks",
     * "brah", "cakm", "cham", "deva", "diak", "fullwide", "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp",
     * "java", "kali", "khmr", "knda", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl",
     * "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng",
     * "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund",
     * "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "wara", or "wcho".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.numberingSystem
     * @arkts 1.1&1.2
     */
    numberingSystem?: string;

    /**
     * Indicates the hour12.
     *
     * @type { boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the hour12.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the hour12.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the hour12.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Whether to use the 12-hour clock. The value true means to use the 12-hour clock, and the value false means the
     * opposite. If both hour12 and hourCycle are set, hourCycle does not take effect. If hour12 and hourCycle are not
     * set and the 24-hour clock is turned on, the default value of hour12 is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.hour12
     * @arkts 1.1&1.2
     */
    hour12?: boolean;

    /**
     * Indicates the weekday.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the weekday.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the weekday.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the weekday.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Week display format. The value can be: "long", "short", "narrow", or "auto".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.weekday
     * @arkts 1.1&1.2
     */
    weekday?: string;

    /**
     * Indicates the era.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the era.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the era.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the era.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Epoch display format. The value can be: "long", "short", "narrow", or "auto".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.era
     * @arkts 1.1&1.2
     */
    era?: string;

    /**
     * Indicates the year.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the year.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the year.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the year.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Year display format. The value can be: "numeric" or "2-digit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.year
     * @arkts 1.1&1.2
     */
    year?: string;

    /**
     * Indicates the month.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the month.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the month.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the month.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Month display format. The value can be: "numeric", "2-digit", "long", "short", "narrow", or "auto".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.month
     * @arkts 1.1&1.2
     */
    month?: string;

    /**
     * Indicates the day.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the day.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the day.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the day.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Day display format. The value can be: "numeric" or "2-digit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.day
     * @arkts 1.1&1.2
     */
    day?: string;

    /**
     * Indicates the hour.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the hour.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the hour.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the hour.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Hour display format. The value can be: "numeric" or "2-digit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.hour
     * @arkts 1.1&1.2
     */
    hour?: string;

    /**
     * Indicates the minute.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the minute.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the minute.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the minute.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Minute display format. The value can be: "numeric" or "2-digit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.minute
     * @arkts 1.1&1.2
     */
    minute?: string;

    /**
     * Indicates the second.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the second.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the second.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the second.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Second display format. The value can be: "numeric" or "2-digit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.second
     * @arkts 1.1&1.2
     */
    second?: string;

    /**
     * Indicates the timeZoneName.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the timeZoneName.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the timeZoneName.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the timeZoneName.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Localized representation of a time zone name. The value can be: "long", "short", or "auto".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.timeZoneName
     * @arkts 1.1&1.2
     */
    timeZoneName?: string;

    /**
     * Indicates the dayPeriod.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the dayPeriod.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the dayPeriod.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the dayPeriod.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Time period display format. The value can be: "long", "short", "narrow", or "auto".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.dayPeriod
     * @arkts 1.1&1.2
     */
    dayPeriod?: string;

    /**
     * Indicates the localeMatcher.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the localeMatcher.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the localeMatcher.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the localeMatcher.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Locale matching algorithm. The value can be:
     * "lookup": exact match.
     * "best fit": best match.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.localeMatcher
     * @arkts 1.1&1.2
     */
    localeMatcher?: string;

    /**
     * Indicates the formatMatcher.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the formatMatcher.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the formatMatcher.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the formatMatcher.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Format matching algorithm. The value can be:
     * "basic": exact match.
     * "best fit": best match.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormatOptions.formatMatcher
     * @arkts 1.1&1.2
     */
    formatMatcher?: string;
  }

  /**
   * Provides the API for formatting date strings.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 6
   */
  /**
   * Provides the API for formatting date strings.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the API for formatting date strings.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Provides the API for formatting date strings.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @deprecated since 20
   * @useinstead Intl.DateTimeFormat
   * @arkts 1.1&1.2
   */
  export class DateTimeFormat {
    /**
     * A constructor used to create a DateTimeFormat object.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create a DateTimeFormat object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * A constructor used to create a DateTimeFormat object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Creates a DateTimeOptions object for the specified locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormat.constructor
     * @arkts 1.1&1.2
     */
    constructor();

    /**
     * A constructor used to create a DateTimeFormat object.
     *
     * @param { string | Array<string> } locale - Indicates character string containing the locale information, including
     *               the language and optionally the script and region, for the DateTimeFormat object.
     * @param { DateTimeOptions } [options] - Indicates the options used to format the date.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * A constructor used to create a DateTimeFormat object.
     *
     * @param { string | Array<string> } locale - Indicates character string containing the locale information, including
     *               the language and optionally the script and region, for the DateTimeFormat object.
     * @param { DateTimeOptions } [options] - Indicates the options used to format the date.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * A constructor used to create a DateTimeFormat object.
     *
     * @param { string | Array<string> } locale - Indicates character string containing the locale information, including
     *               the language and optionally the script and region, for the DateTimeFormat object.
     * @param { DateTimeOptions } [options] - Indicates the options used to format the date.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Creates a DateTimeOptions object for the specified locale.
     *
     * @param { string | Array<string> } locale - Locale ID or locale ID array. If the input is a locale ID array, the
     *                                            first valid locale ID is used.
     * @param { DateTimeOptions } [options] - Options for creating the DateTimeOptions object.<br>If no options are
     *                                        set, the default values of year, month, and day are numeric.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormat.constructor
     * @arkts 1.1&1.2
     */
    constructor(locale: string | Array<string>, options?: DateTimeOptions);

    /**
     * Obtains the formatted date strings.
     *
     * @param { Date } date - Indicates the Date object to be formatted.
     * @returns { string } a date string formatted based on the specified locale.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Obtains the formatted date strings.
     *
     * @param { Date } date - Indicates the Date object to be formatted.
     * @returns { string } a date string formatted based on the specified locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the formatted date strings.
     *
     * @param { Date } date - Indicates the Date object to be formatted.
     * @returns { string } a date string formatted based on the specified locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Formats the date and time.
     *
     * @param { Date } date - Date and time. Note: The month starts from 0. For example, 0 indicates January.
     * @returns { string } A string containing the formatted date and time.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormat.format
     * @arkts 1.1&1.2
     */
    format(date: Date): string;

    /**
     * Obtains the formatted date strings of a date range.
     *
     * @param { Date } startDate - Indicates the start date of the date range.
     * @param { Date } endDate - Indicates the end date of the date range.
     * @returns { string } a date string formatted based on the specified locale.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Obtains the formatted date strings of a date range.
     *
     * @param { Date } startDate - Indicates the start date of the date range.
     * @param { Date } endDate - Indicates the end date of the date range.
     * @returns { string } a date string formatted based on the specified locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the formatted date strings of a date range.
     *
     * @param { Date } startDate - Indicates the start date of the date range.
     * @param { Date } endDate - Indicates the end date of the date range.
     * @returns { string } a date string formatted based on the specified locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Formats date and time ranges.
     *
     * @param { Date } startDate - Start date and time. Note: The month starts from 0. For example, 0 indicates
     *                             January.
     * @param { Date } endDate - End date and time. Note: The month starts from 0. For example, 0 indicates January.
     * @returns { string } a date string formatted based on the specified locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormat.formatRange
     * @arkts 1.1&1.2
     */
    formatRange(startDate: Date, endDate: Date): string;

    /**
     * Obtains the options of the DateTimeFormat object.
     *
     * @returns { DateTimeOptions } the options of the DateTimeFormat object.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Obtains the options of the DateTimeFormat object.
     *
     * @returns { DateTimeOptions } the options of the DateTimeFormat object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the options of the DateTimeFormat object.
     *
     * @returns { DateTimeOptions } the options of the DateTimeFormat object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Obtains the options for creating a DateTimeOptions object.
     *
     * @returns { DateTimeOptions } Options for the DateTimeOptions object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @deprecated since 20
     * @useinstead Intl.DateTimeFormat.resolvedOptions
     * @arkts 1.1&1.2
     */
    resolvedOptions(): DateTimeOptions;
  }

  /**
   * Provides the options of number format.
   *
   * @interface NumberOptions
   * @syscap SystemCapability.Global.I18n
   * @since 6
   */
  /**
   * Provides the options of number format.
   *
   * @interface NumberOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Options for creating the NumberFormat object. Since API version 9, the NumberOptions attribute is changed from
   * mandatory to optional.
   *
   * @interface NumberOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface NumberOptions {
    /**
     * Indicates the locale.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the locale.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the locale.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Valid locale ID, for example, "zh-Hans-CN". The default value is the current system locale.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    locale?: string;

    /**
     * Indicates the currency.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the currency.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the currency.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Currency unit. The value must comply with the [ISO-4217 standard](https://www.iso.org/iso-4217-currency-codes.html),
     * for example, "EUR", "CNY", and "USD". From API version 12, a three-digit number is supported, for example, "978",
     * "156", or "840".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    currency?: string;

    /**
     * Indicates the currencySign.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the currencySign.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the currencySign.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * urrency unit symbol. The value can be "standard" or "accounting". The default value is "standard".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    currencySign?: string;

    /**
     * Indicates the currencyDisplay.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the currencyDisplay.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the currencyDisplay.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Currency display mode. The value can be "symbol", "narrowSymbol", "code", or "name".
     * The default value is "symbol".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    currencyDisplay?: string;

    /**
     * Indicates the unit.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the unit.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the unit.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Unit name, for example, "meter", "inch", or "hectare". The combination units supported since API version 18 are
     * as follows: "beat-per-minute", "body-weight-per-second", "breath-per-minute", "foot-per-hour",
     * "jump-rope-per-minute", "meter-per-hour", "milliliter-per-minute-per-kilogram", "rotation-per-minute",
     * "step-per-minute", and "stroke-per-minute".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    unit?: string;

    /**
     * Indicates the unitDisplay.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the unitDisplay.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the unitDisplay.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Display format of units. The value can be "long", "short", or "narrow". The default value is "short".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    unitDisplay?: string;

    /**
     * Indicates the unitUsage.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Indicates the unitUsage.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the unitUsage.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Application scenario of units. The value can be any of the following: "default", "area-land-agricult",
     * "area-land-commercl", "area-land-residntl", "length-person", "length-person-small", "length-rainfall",
     * "length-road", "length-road-small", "length-snowfall", "length-vehicle", "length-visiblty",
     * "length-visiblty-small", "length-person-informal", "length-person-small-informal", "length-road-informal",
     * "speed-road-travel", "speed-wind", "temperature-person", "temperature-weather", "volume-vehicle-fuel",
     * "elapsed-time-second", "size-file-byte", or "size-shortfile-byte". The default value is "default".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    unitUsage?: string;

    /**
     * Indicates the signDisplay.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the signDisplay.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the signDisplay.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Number sign display format. The value can be:
     * "auto": automatically determines whether to display the plus or minus sign.
     * "never": do not display the plus or minus sign.
     * "always": always displays the plus or minus sign.
     * "exceptZero": displays the plus or minus sign for all values except 0.
     * Default value: "auto".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    signDisplay?: string;

    /**
     * Indicates the compactDisplay.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the compactDisplay.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the compactDisplay.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Compact display format. The value can be "long" or "short". The default value is "short".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    compactDisplay?: string;

    /**
     * Indicates the notation.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the notation.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the notation.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Number notation. The value can be: "standard", "scientific", "engineering", or "compact".
     * The default value is "standard".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    notation?: string;

    /**
     * Indicates the localeMatcher.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the localeMatcher.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the localeMatcher.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Locale matching algorithm. The value can be "lookup" or "best fit". The default value is "best fit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    localeMatcher?: string;

    /**
     * Indicates the style.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the style.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the style.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Number display format. The value can be "decimal", "currency", "percent", or "unit".
     * The default value is "decimal".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    style?: string;

    /**
     * Indicates the numberingSystem.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the numberingSystem.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the numberingSystem.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Numbering system. The value can be: "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks",
     * "brah", "cakm", "cham", "deva", "diak", "fullwide", "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp",
     * "java", "kali", "khmr", "knda", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl",
     * "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng",
     * "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund",
     * "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "wara", or "wcho".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    numberingSystem?: string;

    /**
     * Indicates the useGrouping.
     *
     * @type { boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the useGrouping.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the useGrouping.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to enable grouping for display. The value "true" means to enable grouping for display, and the value
     * "false" means the opposite. The default value is "true".
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    useGrouping?: boolean;

    /**
     * Indicates the minimumIntegerDigits.
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the minimumIntegerDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the minimumIntegerDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Minimum number of digits allowed in the integer part of a number. The value ranges from 1 to 21.
     * The default value is 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    minimumIntegerDigits?: number;

    /**
     * Indicates the minimumFractionDigits.
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the minimumFractionDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the minimumFractionDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Minimum number of digits in the fraction part of a number. The value ranges from 0 to 20.
     * The default value is 0.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    minimumFractionDigits?: number;

    /**
     * Indicates the maximumFractionDigits.
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the maximumFractionDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the maximumFractionDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Maximum number of digits in the fraction part of a number. The value ranges from 1 to 21.
     * The default value is 3.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    maximumFractionDigits?: number;

    /**
     * Indicates the minimumSignificantDigits.
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the minimumSignificantDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the minimumSignificantDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Minimum number of the least significant digits. The value ranges from 1 to 21. The default value is 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    minimumSignificantDigits?: number;

    /**
     * Indicates the maximumSignificantDigits.
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Indicates the maximumSignificantDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Indicates the maximumSignificantDigits.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Maximum number of the least significant digits. The value ranges from 1 to 21. The default value is 21.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    maximumSignificantDigits?: number;

    /**
     * Rounding priority used when both the maximum number of fraction digits and the maximum number of valid digits
     * are set. The value can be: "auto", "morePrecision", or "lessPrecision". The value "morePrecision" indicates that
     * the maximum number of fraction digits is used. The value "lessPrecision" indicates that the maximum number of
     * valid digits is used. The default value is "auto".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    roundingPriority?: string;

    /**
     * Rounding increment. The value can be: 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, or 5000.
     * The default value is 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    roundingIncrement?: number;

    /**
     * Rounding mode. The value can be:
     * "ceil": rounding up.
     * "floor": rounding down.
     * "expand": rounding away from 0.
     * "trunc": rounding toward 0.
     * "halfCeil": half-rounding up; that is, rounding up when the decimal number is greater than or equal to half of
     *             the increment, and rounding down otherwise.
     * "halfFloor": half-rounding down; that is, rounding up when the decimal number is greater than half of the
     *              increment, and rounding down otherwise.
     * "halfExpand": half-rounding away from 0; that is, rounding away from 0 when the decimal number is greater than
     *               or equal to half of the increment, and rounding toward 0 otherwise.
     * "halfTrunc": half-rounding toward 0; that is, rounding away from 0 when the decimal number is greater than half
     *              of the increment, and rounding toward 0 otherwise.
     * "halfEven": half-rounding to the nearest even number; that is, rounding away from 0 when the decimal number is
     *             greater than half of the increment, rounding toward 0 when the decimal number is less than half of
     *             the increment, and rounding to the nearest even number when the decimal number is exactly half of
     *             the increment.
     * The default value is "halfExpand".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    roundingMode?: string;
  }

  /**
   * Provides the API for formatting number strings.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 6
   */
  /**
   * Provides the API for formatting number strings.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the API for formatting number strings.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export class NumberFormat {
    /**
     * A constructor used to create a NumberFormat object.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create a NumberFormat object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a NumberFormat object for the specified locale.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor();

    /**
     * A constructor used to create a NumberFormat object.
     *
     * @param { string | Array<string> } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the NumberFormat object.
     * @param { NumberOptions } [options] - Indicates the options used to format the number.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * A constructor used to create a NumberFormat object.
     *
     * @param { string | Array<string> } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the NumberFormat object.
     * @param { NumberOptions } [options] - Indicates the options used to format the number.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a NumberFormat object for the specified locale.
     *
     * @param { string | Array<string> } locale - Locale ID or locale ID array. If the input is a locale ID array,
     *                                            the first valid locale ID is used.
     * @param { NumberOptions } [options] - Options for creating the NumberFormat object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor(locale: string | Array<string>, options?: NumberOptions);

    /**
     * Obtains the formatted number string.
     *
     * @param { number } number Indicates the number to be formatted.
     * @returns { string } a number string formatted based on the specified locale.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Obtains the formatted number string.
     *
     * @param { number } number Indicates the number to be formatted.
     * @returns { string } a number string formatted based on the specified locale.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Formats a number.
     *
     * @param { number } num - Number to be formatted.
     * @returns { string } Formatted number.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    format(num: number): string;

    /**
     * Formats a number range.
     *
     * @param { number } startRange - Start number.
     * @param { number } endRange - End number.
     * @returns { string } Formatted number range.
     * @syscap SystemCapability.Global.I18n
     * @atomicservice
     * @since arkts {'1.1':'18', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    formatRange(startRange: number, endRange: number): string;

    /**
     * Obtains the options of the NumberFormat object.
     *
     * @returns { NumberOptions } the options of the NumberFormat object.
     * @syscap SystemCapability.Global.I18n
     * @since 6
     */
    /**
     * Obtains the options of the NumberFormat object.
     *
     * @returns { NumberOptions } the options of the NumberFormat object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the options for creating a NumberFormat object.
     *
     * @returns { NumberOptions } Options for creating the NumberFormat object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    resolvedOptions(): NumberOptions;
  }

  /**
   * Provides the options of Collator
   *
   * @interface CollatorOptions
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Provides the options of Collator
   *
   * @interface CollatorOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the options for creating a Collator object.
   *
   * @interface CollatorOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface CollatorOptions {
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Locale matching algorithm. The value can be "lookup" or "best fit". The default value is "best fit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    localeMatcher?: string;

    /**
     * Whether the comparison is for sorting or for searching for matching strings.
     * Possible values are "sort" and "search"; the default is "sort".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Whether the comparison is for sorting or for searching for matching strings.
     * Possible values are "sort" and "search"; the default is "sort".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Whether the comparison is for sorting or for searching for matching strings.
     * Possible values are "sort" and "search"; the default is "sort".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Whether the comparison is for sorting or for searching. The value can be "sort" or "search".
     * The default value is "sort".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    usage?: string;

    /**
     * Which differences in the strings should lead to non-zero result values.
     * Possible values are "base", "accent", "case", "variant".
     * "base" are used when only strings that differ in base letters compare as unequal.
     * "accent" are used when only strings that differ in base letters or accents and
     *  other diacritic marks compare as unequal.
     * "case" are used when only strings that differ in base letters or case compare as unequal.
     * "variant" are used when Strings that differ in base letters, accents and other diacritic marks,
     *  or case compare as unequal.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Which differences in the strings should lead to non-zero result values.
     * Possible values are "base", "accent", "case", "variant".
     * "base" are used when only strings that differ in base letters compare as unequal.
     * "accent" are used when only strings that differ in base letters or accents and
     *  other diacritic marks compare as unequal.
     * "case" are used when only strings that differ in base letters or case compare as unequal.
     * "variant" are used when Strings that differ in base letters, accents and other diacritic marks,
     *  or case compare as unequal.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Which differences in the strings should lead to non-zero result values.
     * Possible values are "base", "accent", "case", "variant".
     * "base" are used when only strings that differ in base letters compare as unequal.
     * "accent" are used when only strings that differ in base letters or accents and
     *  other diacritic marks compare as unequal.
     * "case" are used when only strings that differ in base letters or case compare as unequal.
     * "variant" are used when Strings that differ in base letters, accents and other diacritic marks,
     *  or case compare as unequal.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Differences in the strings that lead to non-zero return values. The value can be "base", "accent", "case", or
     * "letiant". The default value is "variant".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    sensitivity?: string;

    /**
     * Whether punctuation should be ignored. default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Whether punctuation should be ignored. Default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Whether punctuation should be ignored. Default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to ignore punctuation. The value "true" means to ignore punctuation, and the value "false" means the
     * opposite. The default value is "false".
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    ignorePunctuation?: boolean;
    /**
     * Variant collations for certain locales.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Variant collations for certain locales.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Variant collations for certain locales.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Collation rule. The value can be any of the following: "big5han", "compat", "dict", "direct", "ducet", "eor",
     * "gb2312", "phonebk", "phonetic", "pinyin", "reformed", "searchjl", "stroke", "trad", "unihan", or "zhuyin".
     * The default value is "default".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    collation?: string;

    /**
     * Whether numeric collation should be used. Default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Whether numeric collation should be used. Default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Whether numeric collation should be used. Default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to use numeric collation. The value "true" means to use numeric collation, and the value "false" means
     * the opposite. The default value is "false".
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    numeric?: boolean;

    /**
     * Whether upper case or lower case should sort first.
     * Possible values are "upper", "lower", or "false" (use the locale's default).
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Whether upper case or lower case should sort first.
     * Possible values are "upper", "lower", or "false" (use the locale's default).
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * Whether upper case or lower case should sort first.
     * Possible values are "upper", "lower", or "false" (use the locale's default).
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Whether upper case or lower case is sorted first. The value can be "upper", "lower", or "false".
     * The default value is "false".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    caseFirst?: string;
  }

  /**
   * Enable language-sensitive string comparison.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Enable language-sensitive string comparison.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Enable language-sensitive string comparison.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export class Collator {
    /**
     * A constructor used to create Collator object.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create Collator object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a Collator object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor();
    /**
     * A constructor used to create Collator Object;
     *
     * @param { string | Array<string> } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the Collator object.
     * @param { CollatorOptions } [options] - Indicates the options used to initialize Collator object.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create Collator Object;
     *
     * @param { string | Array<string> } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the Collator object.
     * @param { CollatorOptions } [options] - Indicates the options used to initialize Collator object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a Collator object.
     *
     * @param { string | Array<string> } locale - Locale ID or locale ID array. If the input is a locale ID array,
     *                                            the first valid locale ID is used.
     * @param { CollatorOptions } [options] - Options for creating a Collator object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor(locale: string | Array<string>, options?: CollatorOptions);

    /**
     * compares two strings according to the sort order of this Collator object
     *
     * @param { string } first - The first string to compare.
     * @param { string } second - The second string to compare.
     * @returns { number } a number indicating how first compare to second:
     *         a negative value if string1 comes before string2;
     *         a positive value if string1 comes after string2;
     *         0 if they are considered equal.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * compares two strings according to the sort order of this Collator object
     *
     * @param { string } first - The first string to compare.
     * @param { string } second - The second string to compare.
     * @returns { number } a number indicating how first compare to second:
     *         a negative value if string1 comes before string2;
     *         a positive value if string1 comes after string2;
     *         0 if they are considered equal.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Compares two strings based on the specified collation rules.
     *
     * @param { string } first - First string to compare.
     * @param { string } second - Second string to compare.
     * @returns { number } Comparison result. If the value is a negative number, the first string comes before the
     *                     second string. If the value is 0, the first and second strings are in the same sequence.
     *                     If the value is a positive number, the first string is comes after the second string.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    compare(first: string, second: string): number;

    /**
     * Returns a new object with properties that reflect the locale and collation options computed
     * during initialization of the object.
     *
     * @returns { CollatorOptions } a CollatorOptions object with properties that reflect the properties of this object.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Returns a new object with properties that reflect the locale and collation options computed
     * during initialization of the object.
     *
     * @returns { CollatorOptions } a CollatorOptions object with properties that reflect the properties of this object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the options for creating a Collator object.
     *
     * @returns { CollatorOptions } Options for creating a Collator object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    resolvedOptions(): CollatorOptions;
  }

  /**
   * Provides the options of PluralRules
   *
   * @interface PluralRulesOptions
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Provides the options of PluralRules
   *
   * @interface PluralRulesOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the options of PluralRules
   *
   * @interface PluralRulesOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   * @useinstead Intl.PluralRulesOptions
   */
  export interface PluralRulesOptions {
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Locale matching algorithm. The value can be "lookup" or "best fit". The default value is "best fit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRulesOptions.localeMatcher
     */
    localeMatcher?: string;

    /**
     * The type to use. Possible values are: "cardinal", "ordinal"
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The type to use. Possible values are: "cardinal", "ordinal"
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The type to use. Possible values are: "cardinal", "ordinal"
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Collation type. The value can be "cardinal" or "ordinal". The default value is "cardinal". The value "cardinal"
     * indicates a cardinal number and the value "ordinal" indicates an ordinal number.
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRulesOptions.type
     */
    type?: string;

    /**
     * The minimum number of integer digits to use.
     * Possible values are from 1 to 21; the default is 1.
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The minimum number of integer digits to use.
     * Possible values are from 1 to 21; the default is 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The minimum number of integer digits to use.
     * Possible values are from 1 to 21; the default is 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Minimum number of digits allowed in the integer part of a number. The value ranges from 1 to 21.
     * The default value is 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRulesOptions.minimumIntegerDigits
     */
    minimumIntegerDigits?: number;

    /**
     * The minimum number of fraction digits to use.
     * Possible values are from 0 to 20; the default for plain number and percent formatting is 0;
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The minimum number of fraction digits to use.
     * Possible values are from 0 to 20; the default for plain number and percent formatting is 0;
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The minimum number of fraction digits to use.
     * Possible values are from 0 to 20; the default for plain number and percent formatting is 0;
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Minimum number of digits in the fraction part of a number. The value ranges from 0 to 20.
     * The default value is 0.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRulesOptions.minimumFractionDigits
     */
    minimumFractionDigits?: number;

    /**
     * The maximum number of fraction digits to use.
     * Possible values are from 0 to 20;
     * the default for plain number formatting is the larger of minimumFractionDigits and 3;
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The maximum number of fraction digits to use.
     * Possible values are from 0 to 20;
     * the default for plain number formatting is the larger of minimumFractionDigits and 3;
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The maximum number of fraction digits to use.
     * Possible values are from 0 to 20;
     * the default for plain number formatting is the larger of minimumFractionDigits and 3;
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Maximum number of digits in the fraction part of a number. The value ranges from 1 to 21.
     * The default value is 3.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRulesOptions.maximumFractionDigits
     */
    maximumFractionDigits?: number;

    /**
     * The minimum number of significant digits to use.
     * Possible values are from 1 to 21; the default is 1.
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The minimum number of significant digits to use.
     * Possible values are from 1 to 21; the default is 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The minimum number of significant digits to use.
     * Possible values are from 1 to 21; the default is 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Minimum number of the least significant digits. The value ranges from 1 to 21. The default value is 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRulesOptions.minimumSignificantDigits
     */
    minimumSignificantDigits?: number;

    /**
     * The maximum number of significant digits to use.
     * Possible values are from 1 to 21; the default is 21.
     *
     * @type { number }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The maximum number of significant digits to use.
     * Possible values are from 1 to 21; the default is 21.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The maximum number of significant digits to use.
     * Possible values are from 1 to 21; the default is 21.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Maximum number of the least significant digits. The value ranges from 1 to 21. The default value is 21.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRulesOptions.maximumSignificantDigits
     */
    maximumSignificantDigits?: number;
  }

  /**
   * Enables plural-sensitive formatting and plural-related language rules.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Enables plural-sensitive formatting and plural-related language rules.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Enables plural-sensitive formatting and plural-related language rules.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   * @useinstead Intl.PluralRules
   */
  export class PluralRules {
    /**
     * A constructor used to create PluralRules object.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create PluralRules object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a PluralRules object to obtain the singular-plural type of numbers.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRules.constructor
     */
    constructor();

    /**
     * A constructor used to create PluralRules object.
     *
     * @param { string | Array<string> } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the PluralRules object.
     * @param { PluralRulesOptions } [options] - Indicates the options used to initialize PluralRules object.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create PluralRules object.
     *
     * @param { string | Array<string> } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the PluralRules object.
     * @param { PluralRulesOptions } [options] - Indicates the options used to initialize PluralRules object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a PluralRules object to obtain the singular-plural type of numbers.
     *
     * @param { string | Array<string> } locale - Locale ID or locale ID array. If the input is a locale ID array,
     *                                            the first valid locale ID is used.
     * @param { PluralRulesOptions } [options] - Options for creating a PluralRules object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRules.constructor
     */
    constructor(locale: string | Array<string>, options?: PluralRulesOptions);

    /**
     * Returns a string indicating which plural rule to use for locale-aware formatting.
     *
     * @param { number } n - The number to get a plural rule for.
     * @returns { string } A string representing the pluralization category of the number,
     *         can be one of zero, one, two, few, many or other.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Returns a string indicating which plural rule to use for locale-aware formatting.
     *
     * @param { number } n - The number to get a plural rule for.
     * @returns { string } A string representing the pluralization category of the number,
     *         can be one of zero, one, two, few, many or other.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the singular-plural type of the specified number.
     *
     * @param { number } n - Number for which the singular-plural type is to be obtained.
     * @returns { string } Singular-plural type. The value can be any of the following: "zero", "one", "two", "few",
     *                     "many", "others". For details about the meanings of different values, see
     *                     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.PluralRules.select
     */
    select(n: number): string;
  }

  /**
   * Provides the input options of RelativeTimeFormat.
   *
   * @interface RelativeTimeFormatInputOptions
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Provides the input options of RelativeTimeFormat.
   *
   * @interface RelativeTimeFormatInputOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the input options of RelativeTimeFormat.
   *
   * @interface RelativeTimeFormatInputOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   * @useinstead Intl.RelativeTimeFormatOptions
   */
  export interface RelativeTimeFormatInputOptions {
    /**
     * The locale matching algorithm to use.
     * Possible values are: lookup, best fit
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The locale matching algorithm to use.
     * Possible values are: lookup, best fit
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The locale matching algorithm to use.
     * Possible values are: lookup, best fit
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Locale matching algorithm. The value can be "lookup" or "best fit". The default value is "best fit".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.RelativeTimeFormatOptions.localeMatcher
     */
    localeMatcher?: string;

    /**
     * The format of output message.
     * Possible values are: always, auto
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The format of output message.
     * Possible values are: always, auto
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The format of output message.
     * Possible values are: always, auto
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Format of the output message. The value can be "always" or "auto". The default value is "always".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.RelativeTimeFormatOptions.numeric
     */
    numeric?: string;

    /**
     * The length of the internationalized message.
     * Possible values are: long, short, narrow
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The length of the internationalized message.
     * Possible values are: long, short, narrow
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @since 9
     */
    /**
     * The length of the internationalized message.
     * Possible values are: long, short, narrow
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Length of an internationalized message. The value can be "long", "short", or "narrow".
     * The default value is "long".
     *
     * @type { ?string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.RelativeTimeFormatOptions.style
     */
    style?: string;
  }

  /**
   * Provides the resolved options of RelativeTimeFormat.
   *
   * @interface RelativeTimeFormatResolvedOptions
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Provides the resolved options of RelativeTimeFormat.
   *
   * @interface RelativeTimeFormatResolvedOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the resolved options of RelativeTimeFormat.
   *
   * @interface RelativeTimeFormatResolvedOptions
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   * @useinstead Intl.ResolvedRelativeTimeFormatOptions
   */
  export interface RelativeTimeFormatResolvedOptions {
    /**
     * The BCP 47 language tag for the locale actually used.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The BCP 47 language tag for the locale actually used.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Locale ID, including the language, script, and region.
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.ResolvedRelativeTimeFormatOptions.locale
     */
    locale: string;

    /**
     * The length of the internationalized message.
     * Possible values are: long, short, narrow
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The length of the internationalized message.
     * Possible values are: long, short, narrow
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Length of an internationalized message. The value can be "long", "short", or "narrow".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.ResolvedRelativeTimeFormatOptions.style
     */
    style: string;

    /**
     * The format of output message.
     * Possible values are: always, auto
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The format of output message.
     * Possible values are: always, auto
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Format of the output message. The value can be "always" or "auto".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.ResolvedRelativeTimeFormatOptions.numeric
     */
    numeric: string;

    /**
     * The value requested using the Unicode extension key "nu" or filled in as a default.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * The value requested using the Unicode extension key "nu" or filled in as a default.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Numbering system. The value can be: "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks",
     * "brah", "cakm", "cham", "deva", "diak", "fullwide", "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp",
     * "java", "kali", "khmr", "knda", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl",
     * "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng",
     * "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund",
     * "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "wara", or "wcho".
     *
     * @type { string }
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.ResolvedRelativeTimeFormatOptions.numberingSystem
     */
    numberingSystem: string;
  }

  /**
   * Given a Time period length value and a unit, RelativeTimeFormat object enables
   * language-sensitive relative time formatting.
   *
   * @syscap SystemCapability.Global.I18n
   * @since 8
   */
  /**
   * Given a Time period length value and a unit, RelativeTimeFormat object enables
   * language-sensitive relative time formatting.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @since 10
   */
  /**
   * Given a Time period length value and a unit, RelativeTimeFormat object enables
   * language-sensitive relative time formatting.
   *
   * @syscap SystemCapability.Global.I18n
   * @crossplatform
   * @atomicservice
   * @since 12
   * @deprecated since 20
   * @useinstead Intl.RelativeTimeFormat
   */
  export class RelativeTimeFormat {
    /**
     * A constructor used to create RelativeTimeFormat object.
     *
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create RelativeTimeFormat object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a RelativeTimeFormat object.
     *
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.RelativeTimeFormat.constructor
     */
    constructor();

    /**
     * A constructor used to create RelativeTimeFormat object.
     *
     * @param { string | Array<string> } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the RelativeTimeFormat object.
     * @param { RelativeTimeFormatInputOptions } [options] - Indicates the options used to initialize RelativeTimeFormat object.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * A constructor used to create RelativeTimeFormat object.
     *
     * @param { string | Array<string> } locale - Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the RelativeTimeFormat object.
     * @param { RelativeTimeFormatInputOptions } [options] - Indicates the options used to initialize RelativeTimeFormat object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a RelativeTimeFormat object.
     *
     * @param { string | Array<string> } locale - Locale ID or locale ID array. If the input is a locale ID array,
     *                                            the first valid locale ID is used.
     * @param { RelativeTimeFormatInputOptions } [options] - Options for creating a RelativeTimeFormat object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.RelativeTimeFormat.constructor
     */
    constructor(locale: string | Array<string>, options?: RelativeTimeFormatInputOptions);

    /**
     * formats a value and unit according to the locale and formatting options of this object.
     *
     * @param { number } value - Numeric value to use in the internationalized relative time message.
     * @param { string } unit - Unit to use in the relative time internationalized message.
     *             Possible values are: year, quarter, month, week, day, hour, minute, second.
     * @returns { string } formatted language-sensitive relative time.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * formats a value and unit according to the locale and formatting options of this object.
     *
     * @param { number } value - Numeric value to use in the internationalized relative time message.
     * @param { string } unit - Unit to use in the relative time internationalized message.
     *             Possible values are: year, quarter, month, week, day, hour, minute, second.
     * @returns { string } formatted language-sensitive relative time.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Formats a relative time.
     *
     * @param { number } value - Value to format.
     * @param { string } unit - Unit of the relative time.<br>The value can be any of the following: "year", "quarter",
     * "month", "week", "day", "hour", "minute", or "second".
     * @returns { string } Relative time after formatting.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.RelativeTimeFormat.format
     */
    format(value: number, unit: string): string;

    /**
     * returns an Array of objects representing the relative time format in parts that can be used for
     * custom locale-aware formatting
     *
     * @param { number } value - Numeric value to use in the internationalized relative time message.
     * @param { string } unit - to use in the relative time internationalized message.
     *             Possible values are: year, quarter, month, week, day, hour, minute, second.
     * @returns { Array<object> } an Array of objects representing the relative time format in parts
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * returns an Array of objects representing the relative time format in parts that can be used for
     * custom locale-aware formatting
     *
     * @param { number } value - Numeric value to use in the internationalized relative time message.
     * @param { string } unit - to use in the relative time internationalized message.
     *             Possible values are: year, quarter, month, week, day, hour, minute, second.
     * @returns { Array<object> } an Array of objects representing the relative time format in parts
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Formats the relative time.
     *
     * @param { number } value - Value to format.
     * @param { string } unit - Unit of the relative time.<br>The value can be any of the following: "year", "quarter",
     * "month", "week", "day", "hour", "minute", or "second".
     * @returns { Array<object> } to parts.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.RelativeTimeFormat.formatToParts
     */
    formatToParts(value: number, unit: string): Array<object>;

    /**
     * Returns a new object with properties that reflect the locale and formatting options computed during
     * initialization of the object.
     *
     * @returns { RelativeTimeFormatResolvedOptions } RelativeTimeFormatOptions which reflect the locale and formatting options of the object.
     * @syscap SystemCapability.Global.I18n
     * @since 8
     */
    /**
     * Returns a new object with properties that reflect the locale and formatting options computed during
     * initialization of the object.
     *
     * @returns { RelativeTimeFormatResolvedOptions } RelativeTimeFormatOptions which reflect the locale and formatting options of the object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the formatting options for a RelativeTimeFormat object.
     *
     * @returns { RelativeTimeFormatResolvedOptions } Options for the RelativeTimeFormat object.
     * @syscap SystemCapability.Global.I18n
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 20
     * @useinstead Intl.RelativeTimeFormat.resolvedOptions
     */
    resolvedOptions(): RelativeTimeFormatResolvedOptions;
  }
}
export default intl;
