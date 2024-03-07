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
 * StyledString
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class StyledString {
    /**
     * constructor.
     *
     * @param { string | ImageAttachment } value - indicates the current object value of the StyledString.
     * @param { ?Partial<SpanStyle>[] } styles - indicates the SpanStyle objects.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: string | ImageAttachment, styles?:Partial<SpanStyle>[]);

    /**
    * Get the literal content of the StyledString.
    *
    * @returns { string } - the literal content of the StyledString
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 12
    */
    getString(): string;

    /**
     * Get the length of the StyledString's characters.
     *
     * @returns { number } - the length of the StyledString's characters
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getLength(): number;

    /**
     * Judge if two attribute strings are equal.
     *
     * @param { StyledString } other - another StyledString.
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    equals(other: StyledString): boolean;

    /**
     * Get the substring of the StyledString.
     *
     * @param { number } start - the start position of the subStyledString.
     * @param { number } length - the length of the subStyledString's characters.
     * @returns { StyledString }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getSubStyledString(start: number, length: number): StyledString;

    /**
     * Get the attribute objects of the subStyledString.
     *
     * @param { number } start - the start position of the subStyledString.
     * @param { number } length - the length of the subStyledString's characters.
     * @param { ?StyleStringKey } styleKey - the specified type.
     * @returns { Array<SpanStyle> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getStyles(start: number, length: number, styleKey?: StyleStringKey): Array<SpanStyle>;

    /**
     * Get the index of the subStyledString.
     *
     * @param { string } subString - the content of the subStyledString.
     * @returns { number } - the start index of the subStyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getIndex(subString: string): number;
}
/**
 * SpanStyle
 *
 * @interface SpanStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface SpanStyle {
    /**
     * The start position of the SpanStyle.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    start: number;

    /**
     * The length of the modifiedStyledString's characters.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    length: number;

    /**
     * The attribute key of the SpanStyle.
     *
     * @type { StyleStringKey }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    styleKey: StyleStringKey;

    /**
     * The attribute value of the SpanStyle.
     *
     * @type { StyleStringValue }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    styleValue: StyleStringValue;
}

/**
 * Defines TextStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class TextStyle {

    /**
     * constructor.
     *
     * @param { ?object } value - text property - color/size/weight/family/style included.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value?: {
        color?: ResourceColor; size?: Dimension; weight?: number | FontWeight | string;
        family?: ResourceStr; style?: FontStyle
    });

    /**
     * Get the fontColor of the StyledString.
     *
     * @returns { ResourceColor } - the fontColor of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getColor(): ResourceColor;

    /**
     * Get the fontSize of the StyledString.
     * The unit is px.
     *
     * @returns { number } - the fontSize of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getSize(): number;

    /**
     * Get the fontWeight of the StyledString.
     * The unit is px.
     *
     * @returns { number } - the fontWeight of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getWeight(): number;

    /**
     * Get the fontFamily of the StyledString.
     *
     * @returns { string } - the fontFamily of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getFamily(): string;

    /**
     * Get the fontStyle of the StyledString.
     *
     * @returns { FontStyle } - the fontStyle of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getStyle(): FontStyle;
}

/**
 * Defines DecorationStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class DecorationStyle {

    /**
     * constructor.
     *
     * @param { object } value - text decoration value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: { type: TextDecorationType; color?: ResourceColor });

    /**
     * Get the text decoration type of the StyledString.
     *
     * @returns { TextDecorationType } - the decoration type of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getType(): TextDecorationType;

    /**
     * Get the decorationColor of the StyledString.
     *
     * @returns { ResourceColor } - the decorationColor of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getColor(): ResourceColor;
}

/**
 * Defines BaselineOffsetStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class BaselineOffsetStyle {
    
    /**
     * constructor.
     *
     * @param { number | string } value - baseline offset value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: number | string);

    /**
     * Get the baselineOffset value of the StyledString.
     * The unit is px.
     *
     * @returns { number } - the baselineOffset value of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getOffset(): number;
}

/**
 * Defines LetterSpacingStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class LetterSpacingStyle {
   
    /**
     * constructor.
     *
     * @param { number | string } value - letter space value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: number | string);

    /**
     * Get the letterSpacing value of the StyledString.
     * The unit is px.
     * 
     * @returns { number } - the letterSpacing value of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getValue(): number;
}

/**
 * Defines TextShadowStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class TextShadowStyle {
   
    /**
     * constructor.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - text shadow value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: ShadowOptions | Array<ShadowOptions>);

    /**
     * Get the textShadow value of the StyledString.
     *
     * @returns { Array<ShadowOptions> } - the letterSpacing value of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getValue(): Array<ShadowOptions>;
}

/**
 * Defines ParagraphStyles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class ParagraphStyles {
    /**
     * 
     * @param { object } value - The text paragraph style, textAlign/textIndent/lineHeight/wordBreak/maxLines/textOverflow included.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: {
        textAlign?: TextAlign; textIndent?: Length; lineHeight?: Dimension; maxLines?: number;
        overflow?: TextOverflow;
    });

    /**
     * Get the textAlign value of the StyledString.
     *
     * @returns { TextAlign } - the textAlign value of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getTextAlignValue(): TextAlign;

    /**
     * Get the textIndent value of the StyledString.
     * The unit is px.
     *
     * @returns { number } - the textIndent value of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getTextIndentValue(): number;

    /**
     * Get the lineHeight value of the StyledString.
     * The unit is px.
     *
     * @returns { number } - the lineHeight value of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getLineHeightValue(): number;

    /**
     * Get the maxLines value of the StyledString.
     *
     * @returns { number } - the maxLines value of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getMaxLinesValue(): number;

    /**
     * Get the maxLines value of the StyledString.
     *
     * @returns { TextOverflow } - the maxLines value of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getOverflowValue(): TextOverflow;
}

/**
 * Defines BackgroundColorStyle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class BackgroundColorStyle {
    /**
     * 
     * @param { ResourceColor } value - background color value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: ResourceColor);

    /**
     * Get the backgroundColor of the StyledString.
     *
     * @returns { ResourceColor } - the backgroundColor of the StyledString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getColor(): ResourceColor;
}

/**
 * Defines GestureStyles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class GestureStyles {
    /**
     * 
     * @param { object } value - Gesture Event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: { onClick?: (event: ClickEvent) => void; onLongPress?: (event: GestureEvent) => void; });
}

/**
 * Defines the Span Type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare type StyleStringValue =
    TextStyle | DecorationStyle | BaselineOffsetStyle | LetterSpacingStyle
    | TextShadowStyle | ParagraphStyles | BackgroundColorStyle | GestureStyles;

/**
 * MutableStyledString
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class MutableStyledString extends StyledString {
    /**
     * Replace the string of the specified range.
     *
     * @param { number } start - the start position of the replacedString.
     * @param { number } length - the length of the replacedString's characters.
     * @param { string } other - must be unicode string.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    replaceString(start: number, length: number, other: string): void;

    /**
    * Insert the string at the specified location.
    *
    * @param { number } start - the start position of the insertedString.
    * @param { string } other - must be unicode string.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 12
    */
    insertString(start: number, other: string): void;

    /**
    * Remove the string of the specified range.
    *
    * @param { number } start - the start position of the removedString.
    * @param { number } length - the length of the removedString's characters.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 12
    */
    removeString(start: number, length: number): void;

    /**
     * Replace the specified range string attribute.
     *
     * @param { SpanStyle } spanStyle - the SpanStyle Object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    replaceStyle(spanStyle: SpanStyle): void;

    /**
     * Add attributes to the specified range string.
     *
     * @param { SpanStyle } spanStyle - the SpanStyle Object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    setStyle(spanStyle: SpanStyle): void;

    /**
     * Delete the specified type attributes for the specified range string.
     *
     * @param { number } start - the start position of the removedAttributeStyledString.
     * @param { number } length - the length of the removedAttributeStyledString's characters.
     * @param { StyleStringKey } styleKey - the specified attribute type's key.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    removeStyle(start: number, length: number, styleKey: StyleStringKey): void;

    /**
     * Delete all attributes for the specified range styledString.
     *
     * @param { number } start - the start position of the attributeRemovedStyledString's characters.
     * @param { number } length - the length of the attributeRemovedStyledString's characters.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    removeStyles(start: number, length: number): void;

    /**
     * Delete all attributes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    clearStyles(): void;

    /**
     * Replace the StyledString of the specified range.
     *
     * @param { number } start - the start position of the replacedStyledString.
     * @param { number } length - the length of the replacedStyledString's characters.
     * @param { StyledString } other - new StyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    replaceStyledString(start: number, length: number, other: StyledString): void;

    /**
     * Insert new StyledString at the specified location.
     *
     * @param { number } start - the start position of the insertedStyledString.
     * @param { StyledString } other - new StyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    insertStyledString(start: number, other: StyledString): void;

    /**
     * Append new StyledString at the end.
     *
     * @param { StyledString } other - new StyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    appendStyledString(other: StyledString): void;
}


/**
 * the attribute type of the StyledString
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare enum StyleStringKey {
    /**
     * Font property settings-fontColor/fontSize/fontWeight/fontFamily/fontStyle included.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    FONT = 0,

    /**
     * Text decoration.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    DECORATION = 1,

    /**
     * Text baseline offset.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    BASELINE_OFFSET = 2,

    /**
     * The letter space.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    LETTER_SPACING = 3,

    /**
     * The text shadow.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    TEXT_SHADOW = 4,

    /**
     * The text paragraph style - textAlign/textIndent/lineHeight/wordBreak/maxLines/textOverflow/leadingMargin included.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    PARAGRAPH_STYLE = 100,

    /**
     * Gesture events.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    GESTURE = 200,

    /**
     * The background color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    BACKGROUND_COLOR = 300,

}


/**
 * Defines the ImageAttachment.
 *
 * @interface ImageAttachment
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface ImageAttachment {
    /**
     * The content of the ImageAttachment.
     *
     * @type { PixelMap | ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    value: PixelMap | ResourceStr;

    /**
     * image size.
     *
     * @type { ?[Dimension, Dimension] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    size?: [Dimension, Dimension];

    /**
     * image vertical align.
     *
     * @type { ?ImageSpanAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    verticalAlign?: ImageSpanAlignment;

    /**
     * image fit.
     *
     * @type { ?ImageFit }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    objectFit?: ImageFit;

    /**
     * the Image Layout Style.
     *
     * @type { ?ImageAttachmentLayoutStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    layoutStyle?: ImageAttachmentLayoutStyle;

    /**
     * ImageAttachment gesture.
     *
     * @type { ?ImageAttachmentGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    gesture?: ImageAttachmentGesture;
}

/**
 * Defines the  ImageAttachment Layout Style.
 *
 * @interface ImageAttachmentLayoutStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface ImageAttachmentLayoutStyle {
    /**
     * Outer Margin.
     *
     * @type { ?(Dimension | Margin) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    margin?: Dimension | Margin;

    /**
     * Inner margin.
     *
     * @type { ?(Padding | Length) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    padding?: Padding | Length;

    /**
     * Border radius.
     *
     * @type { ?(Dimension | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    borderRadius?: Dimension | BorderRadiuses;
}

/**
 * Defines the ImageAttachment Gestures.
 *
 * @interface ImageAttachmentGesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface ImageAttachmentGesture {
    /**
     * Trigger a click event when a click is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    onClick?: (event: ClickEvent) => void;

    /**
     * Trigger a gesture event when long press event is complete.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    onLongPress?: (event: GestureEvent) => void;
}