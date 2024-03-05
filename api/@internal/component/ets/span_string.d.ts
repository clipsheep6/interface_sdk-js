/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * SpanString
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class SpanString {
    /**
     * constructor.
     *
     * @param { string } text - indicates the current value of the spanString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(text?: string);

    /**
    * Get the literal content of the spanString.
    *
    * @returns { string } - the literal content of the spanString
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 12
    */
    getString(): string;

    /**
     * Get the length of the spanString.
     *
     * @returns { number } - the length of the spanString
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getLength(): number;

    /**
     * Judge if two attribute strings are equal.
     *
     * @param { SpanString } other - another SpanString.
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    isEqualToSpanString(other: SpanString): boolean;

    /**
     * Get the substring of the spanString.
     *
     * @param { number } start - the start position of the subSpanString.
     * @param { number } length - the length of the subSpanString.
     * @returns { SpanString }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getSubSpanString(start: number, length: number): SpanString;

    /**
     * Get the attribute object of the subSpanString.
     *
     * @param { number } start - the start position of the subSpanString.
     * @param { number } length - the length of the subSpanString.
     * @returns { Array<SpanItem> } - all spanKeys SpanItem list.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getSpans(start: number, length: number): Array<SpanItem>;

    /**
     * Get the attribute object of the subSpanString.
     *
     * @param { number } start - the start position of the subSpanString.
     * @param { number } length - the length of the subSpanString.
     * @param { SpanStringKey } spanKey - the specified type.
     * @returns { SpanItem }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getSpan(start: number, length: number, spanKey: SpanStringKey): SpanItem;

    /**
     * Get the index of the subSpanString.
     *
     * @param { string } subString - the content of the subSpanString.
     * @returns { number } - the start index of the subSpanString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    getIndex(subString: string): number;

    /**
      * the spanString bind new object.
      *
      * @param { AttachmentImage } value - Attached objects.
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    bindAttachment(value: AttachmentImage): void;

    /**
      * the spanString init with style objects.
      *
      * @param { string } content - init style content.
      * @param { Array<{ spanKey: SpanStringKey, type: SpanObjectType }> } spans - span objects.
      * @param { ?number } start - the start index of the content with styles.
      * @param { ?number } length - the length of the content with styles.
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    bindWithSpans(content: string, spans: Array<{ spanKey: SpanStringKey, type: SpanObjectType }>, start?: number, length?: number): void;
}
/**
 * SpanItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface SpanItem {
    /**
     * The start position of the SpanItem.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    start: number;

    /**
     * The length of the SpanItem's string.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    length: number;

    /**
     * The attribute key of the SpanItem.
     *
     * @type { SpanStringKey }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    spanKey: SpanStringKey;

    /**
     * The literal content of the spanItem.
     *
     * @type { SpanObjectType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    value: SpanObjectType;
}

/**
 * Defines FontSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class FontSpan {

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
}

/**
 * Defines DecorationSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class DecorationSpan {

    /**
     * constructor.
     *
     * @param { object } value - text decoration value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: { type: TextDecorationType; color?: ResourceColor });
}

/**
 * Defines BaselineOffsetSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class BaselineOffsetSpan {
    
    /**
     * constructor.
     *
     * @param { number | string } value - baseline offset value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: number | string);
}

/**
 * Defines LetterSpacingSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class LetterSpacingSpan {
   
    /**
     * constructor.
     *
     * @param { number | string } value - letter space value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: number | string);
}

/**
 * Defines TextShadowSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class TextShadowSpan {
   
    /**
     * constructor.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - text shadow value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: ShadowOptions | Array<ShadowOptions>);
}

/**
 * Defines ParagraphStyleSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class ParagraphStyleSpan {
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
}

/**
 * Defines BackgroundColorSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class BackgroundColorSpan {
    /**
     * 
     * @param { ResourceColor } value - background color value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    constructor(value: ResourceColor);
}

/**
 * Defines GestureSpan.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class GestureSpan {
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
declare type SpanObjectType =
    FontSpan | DecorationSpan | BaselineOffsetSpan | LetterSpacingSpan
    | TextShadowSpan | ParagraphStyleSpan | BackgroundColorSpan | GestureSpan;

/**
 * MutableSpanString
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class MutableSpanString extends SpanString {
    /**
     * Replace the string of the specified range.
     *
     * @param { number } start - the start position of the replacedString.
     * @param { number } length - the length of the replacedString.
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
    * @param { number } length - the length of the removedString.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 12
    */
    removeString(start: number, length: number): void;

    /**
     * Replace the specified range string attribute.
     *
     * @param { number } start - the start position of the replacedAttributeSpanString.
     * @param { number } length - the length of the replacedAttributeSpanString.
     * @param { SpanStringKey } spanKey - the specified attribute type.
     * @param { SpanObjectType } SpanObjectType - the specified attribute type object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    replaceSpan(start: number, length: number, spanKey: SpanStringKey, SpanObjectType: SpanObjectType): void;

    /**
     * Add attributes to the specified range string.
     *
     * @param { number } start - the start position of the addedAttributeSpanString.
     * @param { number } length - the length of the addedAttributeSpanString.
     * @param { SpanStringKey } spanKey - the specified attribute type's key.
     * @param { SpanObjectType } spanType - the specified attribute type object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    addSpan(start: number, length: number, spanKey: SpanStringKey, spanType: SpanObjectType): void;

    /**
     * Delete the specified type attributes for the specified range string.
     *
     * @param { number } start - the start position of the removedAttributeSpanString.
     * @param { number } length - the length of the removedAttributeSpanString.
     * @param { SpanStringKey } spanKey - the specified attribute type's key.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    removeSpan(start: number, length: number, spanKey: SpanStringKey): void;

    /**
     * Delete all attributes for the specified range string.
     *
     * @param { number } start - the start position of the removedAttributeSpans.
     * @param { number } length - the length of the removedAttributeSpans.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    removeSpans(start: number, length: number): void;

    /**
     * Delete all attributes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    clearSpans(): void;

    /**
     * Replace the spanString of the specified range.
     *
     * @param { number } start - the start position of the replacedSpanString.
     * @param { number } length - the length of the replacedSpanString.
     * @param { SpanString } other - new SpanString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    replaceSpanString(start: number, length: number, other: SpanString): void;

    /**
     * Insert new spanString at the specified location.
     *
     * @param { number } start - the start position of the insertedSpanString.
     * @param { SpanString } other - new SpanString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    insertSpanString(start: number, other: SpanString): void;

    /**
     * Append new spanString at the end.
     *
     * @param { number } start - the start position of the insertedSpanString.
     * @param { SpanString } other - new SpanString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    appendSpanString(other: SpanString): void;
}


/**
 * the attribute type of the SpanString
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare enum SpanStringKey {
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
    PARAGRAPH_STYLE = 5,

    /**
     * The background color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    BACKGROUND_COLOR = 6,

    /**
     * Gesture events.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    GESTURE = 7,
}


/**
 * Defines the AttachmentImage.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface AttachmentImage {
    /**
     * The content of the AttachmentImage.
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
     * @type { ?AttachmentImageLayoutStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    layoutStyle?: AttachmentImageLayoutStyle;

    /**
     * AttachmentImage gesture.
     *
     * @type { ?AttachmentImageGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    gesture?: AttachmentImageGesture;
}

/**
 * Defines the  AttachmentImage Layout Style.
 *
 * @interface AttachmentImageLayoutStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface AttachmentImageLayoutStyle {
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
 * Defines the AttachmentImage Gestures.
 *
 * @interface AttachmentImageGesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface AttachmentImageGesture {
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