/*
* Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */


import { ChipSize, ChipSymbolGlyphOptions, CloseOptions, ChipSuffixSymbolGlyphOptions } from '@ohos.arkui.advanced.Chip';
import { SymbolGlyphModifier } from './@ohos.arkui.modifier';

/**
 * Defines icon options.
 *
 * @interface IconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface IconOptions {

    /**
     * Image resource.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    src: ResourceStr;

    /**
     * Image size option.
     *
     * @type { ?SizeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    size?: SizeOptions;
}

/**
 * Defines suffix icon options.
 *
 * @interface SuffixImageIconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
export interface SuffixImageIconOptions extends IconOptions {
    /**
     * Called when the suffix image icon is clicked.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    action?: VoidCallback;

    /**
     * Set accessibility text for icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityText?: ResourceStr;

    /**
     * Set accessibility description for icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for icon.
     *
     * @type { ?string }
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityLevel?: string;
}

/**
 * Defines label options.
 *
 * @interface LabelOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface LabelOptions {

    /**
     * Text content.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    text: string;
}


/**
 * Defines chipItem options.
 *
 * @interface ChipGroupItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface ChipGroupItemOptions {

    /**
     * Prefix icon.
     *
     * @type { ?IconOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    prefixIcon?: IconOptions;

    /**
     * Prefix symbol.
     *
     * @type { ?ChipSymbolGlyphOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    prefixSymbol?: ChipSymbolGlyphOptions;

    /**
     * Chip label.
     *
     * @type { LabelOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    label: LabelOptions;

    /**
     * Suffix icon.
     *
     * @type { ?IconOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 14
     * @useinstead ChipGroupItemOptions#suffixImageIcon
     */
    suffixIcon?: IconOptions;

    /**
     * Suffix icon.
     *
     * @type { ?SuffixImageIconOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    suffixImageIcon?: SuffixImageIconOptions;

    /**
     * suffix symbol.
     *
     * @type { ?ChipSymbolGlyphOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    suffixSymbol?: ChipSymbolGlyphOptions;

    /**
     * Set options for suffix symbol.
     *
     * @type { ?ChipSuffixSymbolGlyphOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    suffixSymbolOptions?: ChipSuffixSymbolGlyphOptions;

    /**
     * Allow close.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    allowClose?: boolean;

    /**
     * Set options for default close icon when 'allowaClose' is true.
     *
     * @type { ?CloseOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    closeOptions?: CloseOptions;

    /**
     * Set accessibility description for ChipGroup item.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for ChipGroup item.
     *
     * @type { ?string }
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityLevel?: string;
}


/**
 * Defines ChipItemStyle.
 *
 * @interface ChipItemStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface ChipItemStyle {

    /**
     * Chip size.
     *
     * @type { ?(ChipSize | SizeOptions) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    size?: ChipSize | SizeOptions;

    /**
     * ChipItem background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor?: ResourceColor;

    /**
     * Text font color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fontColor?: ResourceColor;

    /**
     * Selected Text font color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    selectedFontColor?: ResourceColor;

    /**
     * Selected chip item background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    selectedBackgroundColor?: ResourceColor;
}


/**
 * Defines chip group space.
 *
 * @interface ChipGroupSpaceOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface ChipGroupSpaceOptions {

    /**
     * Space between items.
     *
     * @type { ?(string | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    itemSpace?: string | number;

    /**
     * Start space.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    startSpace?: Length;

    /**
     * End space.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    endSpace?: Length;
}

/**
 * Defines IconItemOptions.
 *
 * @interface IconItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface IconItemOptions {
    /**
     * IconOptions.
     *
     * @type { IconOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    icon: IconOptions;

    /**
     * Icon Action.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    action: Callback<void>;

    /**
     * Set accessibility text for icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityText?: ResourceStr;

    /**
     * Set accessibility description for icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for icon.
     *
     * @type { ?string }
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityLevel?: string;
}

/**
 * Defines symbol item options.
 *
 * @interface SymbolItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 14
 */
export interface SymbolItemOptions {
    /**
     * Set symbol.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    symbol: SymbolGlyphModifier;

    /**
     * Called when the symbol item is clicked.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    action: VoidCallback;

    /**
     * Set accessibility text for symbol.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityText?: ResourceStr;

    /**
     * Set accessibility description for symbol.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for symbol.
     *
     * @type { ?string }
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    accessibilityLevel?: string;
}

/**
 * Defines ChipGroupPaddingOptions.
 *
 * @interface ChipGroupPaddingOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface ChipGroupPaddingOptions {
    /**
     * Top of chip group padding.
     *
     * @type { Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    top: Length;

    /**
     * Bottom of chip group padding.
     *
     * @type { Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bottom: Length;
}

/**
 * Defines IconGroupSuffix.
 *
 * @interface IconGroupSuffix
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
@Component
export declare struct IconGroupSuffix {
    /**
     * Suffix item.
     *
     * @type { Array<IconItemOptions | SymbolGlyphModifier> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Suffix item.
     *
     * @type { Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    @Require @Prop
    items: Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions>;
}


/**
 * Defines chipGroup.
 *
 * @struct ChipGroup
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
@Component
export declare struct ChipGroup {

    /**
     * Chip item.
     *
     * @type { ChipGroupItemOptions[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Require @Prop
    items: ChipGroupItemOptions[];

    /**
     * Chip item style.
     *
     * @type { ?ChipItemStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Prop
    itemStyle?: ChipItemStyle;

    /**
     * Default selected chip item indexes.
     *
     * @type { ?Array<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Prop
    selectedIndexes?: Array<number>;

    /**
     * Support multiple chip item selection.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Prop
    multiple?: boolean;

    /**
     * Chip group space.
     *
     * @type { ?ChipGroupSpaceOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Prop
    chipGroupSpace?: ChipGroupSpaceOptions;

     /**
     * Chip group padding (only support top and bottom).
     *
     * @type { ?ChipGroupPaddingOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Prop
    chipGroupPadding?: ChipGroupPaddingOptions;

    /**
     * Chip group callback. when chip status is changed, this onChange is called.
     *
     * @type { ?Callback<Array<number>> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onChange?: Callback<Array<number>>;

    /**
     * The builder function which will be rendered in the suffix of ChipGroup.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @BuilderParam
    suffix?: Callback<void>;
}