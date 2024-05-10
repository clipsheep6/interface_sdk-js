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
 * @kit ArkUI
 */
/**
 * Defines the struct of Theme.
 *
 * @interface Theme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare interface Theme {
    /**
    *  Define tokens associated with color resources.
    *
    * @type { Colors }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    colors: Colors;
}

/**
 * Defines the struct of Colors.
 *
 * @interface Colors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare interface Colors {

    /**
    * System brand Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    brand: ResourceColor;

    /**
    * system warning Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    warning: ResourceColor;

    /**
    * system alert Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    alert: ResourceColor;

    /**
    * system confirm Color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    confirm: ResourceColor;

    /**
    * First level text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    fontPrimary: ResourceColor;

    /**
    * Secondary text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    fontSecondary: ResourceColor;

    /**
    * tertiary text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    fontTertiary: ResourceColor;

    /**
    * fourth text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    fontFourth: ResourceColor;

    /**
    * emphasize text color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    fontEmphasize: ResourceColor;

    /**
    * first level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    fontOnPrimary: ResourceColor;

    /**
    * secondary level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    fontOnSecondary: ResourceColor;

    /**
    * tertiary level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    fontOnTertiary: ResourceColor;

    /**
    * fourth level text inversion, used on colored backgrounds.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    fontOnFourth: ResourceColor;

    /**
    * first level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconPrimary: ResourceColor;

    /**
    * secondary level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconSecondary: ResourceColor;

    /**
    * tertiary level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconTertiary: ResourceColor;

    /**
    * fourth level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconFourth: ResourceColor;

    /**
    * emphasize level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconEmphasize: ResourceColor;

    /**
    * secondary emphasize level icon color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconSubEmphasize: ResourceColor;

    /**
    * first level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconOnPrimary: ResourceColor;

    /**
    * secondary level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconOnSecondary: ResourceColor;

    /**
    * tertiary level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconOnTertiary: ResourceColor;

    /**
    * fourth level icon reversed, used on a colored background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    iconOnFourth: ResourceColor;

    /**
    * system Primary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    backgroundPrimary: ResourceColor;

    /**
    * system Secondary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    backgroundSecondary: ResourceColor;

    /**
    * system tertiary level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    backgroundTertiary: ResourceColor;

    /**
    * system fourth level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    backgroundFourth: ResourceColor;

    /**
    * system emphasize level background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    backgroundEmphasize: ResourceColor;

    /**
    * CompForegroundPrimary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compForegroundPrimary: ResourceColor;

    /**
    * compBackgroundPrimary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compBackgroundPrimary: ResourceColor;

    /**
    * CompBackgroundPrimaryTran color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compBackgroundPrimaryTran: ResourceColor;

    /**
    * compBackgroundPrimaryContrary color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compBackgroundPrimaryContrary: ResourceColor;

    /**
    * compBackgroundGray color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compBackgroundGray: ResourceColor;

    /**
    * 10% black universal control background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compBackgroundSecondary: ResourceColor;

    /**
    * 5% black universal control background.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compBackgroundTertiary: ResourceColor;

    /**
    * 100% bright brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compBackgroundEmphasize: ResourceColor;

    /**
    * Black neutral high gloss color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compBackgroundNeutral: ResourceColor;

    /**
    * 20% High gloss brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compEmphasizeSecondary: ResourceColor;

    /**
    * 10% High gloss brand background color.
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compEmphasizeTertiary: ResourceColor;

    /**
    * Universal Division Line Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compDivider: ResourceColor;

    /**
    * compCommonContrary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compCommonContrary: ResourceColor;

    /**
    * CompBackgroundFocus Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compBackgroundFocus: ResourceColor;

    /**
    * CompFocusedPrimary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compFocusedPrimary: ResourceColor;

    /**
    * CompFocusedSecondary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compFocusedSecondary: ResourceColor;

    /**
    * CompFocusedTertiary Color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    compFocusedTertiary: ResourceColor;

    /**
    *  hover interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    interactiveHover: ResourceColor;

    /**
    * pressed interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    interactivePressed: ResourceColor;

    /**
    * focus interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    interactiveFocus: ResourceColor;

    /**
    * active interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    interactiveActive: ResourceColor;

    /**
    * select interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    interactiveSelect: ResourceColor;

    /**
    * click interactive color
    *
    * @type { ResourceColor }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    interactiveClick: ResourceColor;
}

/**
 * Defines the struct of CustomTheme.
 *
 * @interface CustomTheme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare interface CustomTheme {
    /**
    * Define tokens associated with color resources..
    *
    * @type { ?CustomColors }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    colors?: CustomColors;
}

/**
 * Defines the struct of CustomColors.
 *
 * @interface CustomColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare type CustomColors = Partial<Colors>

/**
 * Class ThemeControl provides the Theme management for whole Ability and pages.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 * @form
 */
export declare class ThemeControl {
    /**
     * Sets the default Theme:
     * - for whole Ability when invoked from the Ability level code.
     * - for the ArkUI page and for later opened pages when invoked at the ArkUI page level.
     *
     * @param theme - the CustomTheme for settings
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static setDefaultTheme(theme: CustomTheme): void;
}
