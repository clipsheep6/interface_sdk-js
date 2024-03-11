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
 * Defines the attribute base span.
 *
 * @interface AttributeBaseSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface AttributeBaseSpan {}

/**
 * Defines FontSpan interface.
 *
 * @interface FontSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface FontSpan extends AttributeBaseSpan{
    /**
      *
      * @type { ?ResourceColor }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    fontColor?: ResourceColor;

    /**
      *
      * @type { ?Dimension }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    fontSize?: Dimension;

    /**
      *
      * @type { ?number | FontWeight | string }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    fontWeight?: number | FontWeight | string;

    /**
      *
      * @type { ?ResourceStr }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    fontFamily?: ResourceStr;

    /**
      *
      * @type { ?FontStyle }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    fontStyle?: FontStyle;
}

/**
 * Defines DecorationSpan interface.
 *
 * @interface DecorationSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface DecorationSpan extends AttributeBaseSpan {
    /**
      *
      * @type { TextDecorationType }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    type: TextDecorationType;

    /**
      *
      * @type { ?ResourceColor }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    decorationColor?: ResourceColor;
}

/**
 * Defines BaselineOffsetSpan interface.
 *
 * @interface BaselineOffsetSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface BaselineOffsetSpan extends AttributeBaseSpan {
   
    /**
      *
      * @type { number | string }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    baselineOffset: number | string;
}

/**
 * Defines LetterSpacingSpan interface.
 *
 * @interface LetterSpacingSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface LetterSpacingSpan extends AttributeBaseSpan {
    /**
      *
      * @type { number | string }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    letterSpace: number | string;
}

/**
 * Defines TextShadowSpan interface.
 *
 * @interface TextShadowSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface TextShadowSpan extends AttributeBaseSpan {
    /**
      *
      * @type { ShadowOptions | Array<ShadowOptions> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    textShadow: ShadowOptions | Array<ShadowOptions>;
}

/**
 * Defines ParagraphStyleSpan interface.
 *
 * @interface ParagraphStyleSpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface ParagraphStyleSpan extends AttributeBaseSpan {
    /**
      *
      * @type { ?TextAlign }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    textAlign?: TextAlign;

    /**
      *
      * @type { ?Length }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    textIndent?: Length;

    /**
      *
      * @type { ?Dimension }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    lineHeight?: Dimension;

    /**
      *
      * @type { ?number }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    maxLines?: number;

    /**
      *
      * @type { ?TextOverflow }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    overflow?: TextOverflow;
}

/**
 * Defines BackgroundColorSpan interface.
 *
 * @interface BackgroundColorSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface BackgroundColorSpan extends AttributeBaseSpan {

    /**
      *
      * @type { ResourceColor }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    backgroundColor: ResourceColor;
}

/**
 * Defines GestureSpan interface.
 *
 * @interface GestureSpan
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface GestureSpan extends AttributeBaseSpan {

    /**
      *
      * @type { ?object }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    onClick?: (event: ClickEvent) => void ;

    /**
      *
      * @type { ?object }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    onLongPress?: (event: GestureEvent) => void;
}

/**
 * SpanString
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class SpanString<T extends AttributeBaseSpan> {
    /**
     * constructor.
     *
     * @param { ?string } text - indicates the current value of the spanString.
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
     * @param { SpanString<T> } other - another SpanString.
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    isEqualToSpanString(other: SpanString<T>): boolean;

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
    getSubSpanString(start: number, length: number): SpanString<T>;

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
    getSpans(start: number, length: number): Array<SpanItem<T>>;

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
    getSpan(start: number, length: number, spanKey: SpanStringKey): SpanItem<T>;

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
      * @param { Array<{ spanKey: SpanStringKey, type: T }> } spans - span objects.
      * @param { ?number } start - the start index of the content with styles.
      * @param { ?number } length - the length of the content with styles.
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 12
      */
    bindWithSpans(content: string, spans: Array<{ spanKey: SpanStringKey, type: T }>, start?: number, length?: number): void;
}
/**
 * SpanItem
 *
 * @interface SpanItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface SpanItem<T extends AttributeBaseSpan> {
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
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    value: T;
}

/**
 * MutableSpanString
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare class MutableSpanString<T extends AttributeBaseSpan> extends SpanString<AttributeBaseSpan> {
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
     * @param { T } SpanObjectType - the specified attribute type object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    replaceSpan(start: number, length: number, spanKey: SpanStringKey, SpanObjectType: T): void;

    /**
     * Add attributes to the specified range string.
     *
     * @param { number } start - the start position of the addedAttributeSpanString.
     * @param { number } length - the length of the addedAttributeSpanString.
     * @param { SpanStringKey } spanKey - the specified attribute type's key.
     * @param { T } spanType - the specified attribute type object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    addSpan(start: number, length: number, spanKey: SpanStringKey, spanType: T): void;

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
    replaceSpanString(start: number, length: number, other: SpanString<T>): void;

    /**
     * Insert new spanString at the specified location.
     *
     * @param { number } start - the start position of the insertedSpanString.
     * @param { SpanString } other - new SpanString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    insertSpanString(start: number, other: SpanString<T>): void;

    /**
     * Append new spanString at the end.
     *
     * @param { number } start - the start position of the insertedSpanString.
     * @param { SpanString } other - new SpanString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    appendSpanString(other: SpanString<T>): void;
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
 * @interface AttachmentImage
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