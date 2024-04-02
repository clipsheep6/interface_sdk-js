/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics 2D
 */
import type drawing from './@ohos.graphics.drawing';
import type font from './@ohos.font';
import type common2D from './@ohos.graphics.common2D';

declare namespace text {

  enum TextAlign {
    /**
     * The left text alignment is used
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    LEFT = 0,
    /**
     * The right text alignment is used
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    RIGHT = 1,
    /**
     * This text is JustifyCenter
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    CENTER = 2,
    /**
     * This text is aligned at both ends
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    JUSTIFY = 3,
    /**
     * Text start points are aligned
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    START = 4,
    /**
     * The end points of the text are aligned
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    END = 5,
  }

  enum TextDirection {
    /**
     * The text runs from right to left
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    RTL,
    /**
     * The text runs from left to right
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    LTR,
  }

  enum BreakStrategy {
    /**
     * The segmentation strategy is greedy
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    GREEDY,
    /**
     * The segmentation strategy is HIGH_QUALITY
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    HIGH_QUALITY,
    /**
     * The segmentation strategy is BALANCED
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    BALANCED,
  }

  enum WordBreakType {
    /**
     * Normal word segmentation
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    NORMAL,
    /**
     * Word segmentation at character level
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    BREAK_ALL,
    /**
     * Segmentation at the phrase level
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    BREAK_WORD,
  }

  interface Decoration {
    /**
     * Setting text decoration by line
     * @type { ?TextDecoration } it has four choice
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    textDecoration?: TextDecoration;
    /**
     * Setting text color by uint32_t data
     * @type { number } it is uint32_t type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    color?: common2D.Color;
    /**
     * Setting decorationStyle Style
     * @type { ?TextDecorationStyle } decorationStyle Style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    decorationStyle?: TextDecorationStyle;
    /**
     * Setting decoration line of thicknessScale
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    decorationThicknessScale?: number;
  }

  enum TextDecoration {
    /**
     * There are no text decorations
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    NONE,
    /**
     * The text is underlined
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    UNDERLINE,
    /**
     * Underline the text above
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    OVERLINE,
    /**
     * Underline the middle of the text
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    LINE_THROUGH,
  }

  enum TextDecorationStyle {
    /**
     * Customize text decoration
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    SOLID,
    /**
     * Customize text decoration
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    DOUBLE,
    /**
     * Customize text decoration
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    DOTTED,
    /**
     * Customize text decoration
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    DASHED,
    /**
     * Customize text decoration
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    WAVY,
  }

  enum FontWeight {
    /**
     * The font is thin
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    W100,
    /**
     * The font is thin
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    W200,
    /**
     * The font is thin
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    W300,
    /**
     * The font is normal
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    W400,
    /**
     * The font is normal
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    W500,
    /**
     * The font is normal
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    W600,
    /**
     * The font is bold
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    W700,
    /**
     * The font is bold
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    W800,
    /**
     * The font is bold
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    W900,
  }

  enum FontStyle {
    /**
     * Upright font type
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    NORMAL,
    /**
     * Slant font
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    ITALIC,
  }

  enum TextBaseline {
    /**
     * The vertical direction of the text is dominated by alphabetical order
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    ALPHABETIC,
    /**
     * The vertical direction of the text is dominated by the meaning of the text
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    IDEOGRAPHIC,
  }

  enum EllipsisModal {
    /**
     * The ellipsis is shown in the head
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    HEAD,
    /**
     * The ellipsis is shown in the middle
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    MIDDLE,
    /**
     * The ellipsis is shown in the tail
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    TAIL,
  }

  interface StrutStyle {
    /**
     * System font FontFamilies.
     * @type { Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    fontFamilies : Array<string>;
  }

  class TextStyle {
    /**
     * Setting decoration color by uint32_t data
     * @type { ?number } it is uint32_t type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    color?: number;
    /**
     * Setting text fontWegiht
     * @type { ?number } it is uint32_t type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    fontWeight?: FontWeight;
    /**
     * Setting text textBaseline
     * @type { ?number } it is uint32_t type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    textBaseline?: TextBaseline;
    /**
     * System font FontFamilies.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    fontFamilies?: Array<string>;
    /**
     * Setting text fontSize
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    fontSize?: number;
    /**
     * Setting text letterSpacing
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    letterSpacing?: number;
    /**
     * Setting text wordSpacing
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    wordSpacing?: number;
    /**
     * Setting text heightScale
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    heightScale?: number;
    /**
     * Setting text halfLeading
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    halfLeading?: boolean;
    /**
     * Setting text heightOnly
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    heightOnly?: boolean;
    /**
     * Setting text ellipsis
     * @type { ?string } it is u16string type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    ellipsis?: string;
    /**
     * Setting text ellipses mode
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    ellipsisModal?: EllipsisModal;
    /**
     * Setting the text locale
     * @type { ?string } it is string type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    locale?: string;
  }

  /**
   * The date structure that provides the basis for graphics.
   * @namespace text
   * @syscap SystemCapability.Graphics.text
   * @since 12
   */
  class FontCollection {
    /**
     * Diable system fallback font
     * @param { font.FontOptions } options - FontOptions
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    loadFont(options: font.FontOptions): void;
  }

  class ParagraphStyle {
    /**
     * Get strutStyle from paragraphStyle
     * @syscap SystemCapability.Graphics.text
     * @returns { ?StrutStyle } StrutStyle object
     * @since 12
     */
    structStyle?: StrutStyle;
    /**
     * Set text direction from paragraphstyle
     * @param { ?number } Custom textDirection 1/default mean ltr. 0 mean rtl.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    textDirection?: number;
    /**
     * Set text align from paragraphstyle
     * @param { ?TextAlign } Custom TextAlign
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    align?: TextAlign;
    /**
     * Set the text segmentation mode
     * @param { ?WordBreakType } Custom wordbreak
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    wordBreak?: WordBreakType;
    /**
     * Set the text max lines
     * @param { ?number } Current line max lines
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    maxLines?: number;
    /**
     * Text segmentation strategy properties
     * @param { ?number } The current segmentation strategy property of the text
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    breakStrategy?: BreakStrategy;
  }

  enum PlaceholderAlignment {
    /**
     * Match the baseline of the placeholder with the baseline
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    OFFSET_AT_BASELINE,
    /**
     * Align the bottom edge of the placeholder with the baseline
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    ABOVE_BASELINE,
    /**
     * Align the top edge of the placeholder with the baseline specified
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    BELOW_BASELINE,
    /**
     * Align the top edge of the placeholder with the top edge of the text
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    TOP_OF_ROW_BOX,
    /**
     * Align the bottom edge of the placeholder with the bottom edge of the text
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    BOTTOM_OF_ROW_BOX,
    /**
     * Align the middle of the placeholder with the middle of the text
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    CENTER_OF_ROW_BOX,
  }

  interface PlaceholderSpan {
    /**
     * Setting the width of the placeholder
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    width: number;
    /**
     * Setting the height of the placeholder
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    height: number;
    /**
     * Setting alignment mode of placeholder
     * @type { ?PlaceholderAlignment } Custom PlaceholderAlignment
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    align: PlaceholderAlignment;
    /**
     * Setting the textBaseline of placeholder
     * @param { ?TextBaseline } Custom TextBaseline
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    baseline: TextBaseline;
    /**
     * Setting decoration line of thicknessScale
     * @type { ?number } it is double type data
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    baselineOffset: number;
  }

  /**
   * Provides the definition of the range.
   * @typedef Range
   * @syscap SystemCapability.Graphics.text
   * @since 12
   */
  interface Range {
    /**
     * Left index
     * @type { number }
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    leftIndex: number;
    /**
     * Right index
     * @type { number }
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    rightIndex: number;
  }

  /**
   * The date structure that provides the basis of paragraph for graphics.
   * @namespace text
   * @syscap SystemCapability.provide system text data deal
   * @since 12
   */
  class Paragraph {
    /**
     * Get the start and end position of the word containing the glyphs of the given offset.
     * @param { number } offset - offset value
     * @returns { Range } (Range) returned
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getWordBoundary(offset: number): Range;

    /**
     * Get line count.
     * @returns { number } (number) returned
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getLineCount(): number;

    /**
     * Gets the line height of the specified line.
     * @param { number } line - line number
     * @returns { number } (number) returned
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getLineHeight(line: number): number;

    /**
     * Gets the line width of the specified line.
     * @param { number } line - line number
     * @returns { number } (number) returned
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getLineWidth(line: number): number;

    /**
     * Whether it exceed the maximum lines of typography
     * @returns { boolean } The true indicates exceeding, the false indicates not exceeding.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    didExceedMaxLines(): boolean;

    /**
     * Gets the max intrinsic width.
     * @returns { number } Intrinsic Width.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getMaxIntrinsicWidth(): number;

    /**
     * Gets the alphabetic baseline.
     * @returns { number } Alphabetic Baseline.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getAlphabeticBaseline(): number;

    /**
     * Gets the ideographic baseline.
     * @returns { number } Ideographic Baseline.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getIdeographicBaseline(): number;

    /**
     * Gets the rects for range.
     * @param { number } start - Start of range to set.
     * @param { number } end - End of range to set.
     * @param { RectWidthStyle } wstyle - Width style to set.
     * @param { RectHeightStyle } hstyle - Height style to set.
     * @returns { Array<TextBox> } The rects for range.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getRectsForRange(start: number, end: number, wstyle: RectWidthStyle, hstyle: RectHeightStyle): Array<TextBox>;

    /**
     * Gets the rects for placeholders.
     * @returns { Array<TextBox> } The rects for placeholders.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getRectsForPlaceholders(): Array<TextBox>;

    /**
     * Gets the glyphposition at coordinate.
     * @param { number } x - the positionX of typography to set.
     * @param { number } y - the positionY of typography to set.
     * @returns { PositionWithAffinity } TextBlob object.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity;

    /**
     * Layout calculates the positioning of all the glyphs.
     * @param { number } width - Control how wide the text is allowed to be.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    layout(width: number): void;

    /**
     * Paints the laid out text onto the supplied canvas at (x, y).
     * @param { Canvas } canvas - Object.
     * @param { number } x - Represents the X-axis position on the canvas.
     * @param { number } y - Represents the Y-axis position on the canvas.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    paint(canvas: drawing.Canvas, x: number, y: number): void;

    /**
     * Get max width of horizontal space this paragraph occupies.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { number } Max width of horizontal space.
     * @since 12
     */
    getMaxWidth(): number;

    /**
     * Get height of horizontal space this paragraph occupies.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { number } Height of horizontal space this paragraph occupies.
     * @since 12
     */
    getHeight(): number;

    /**
     * Get the longest line of horizontal space this paragraph occupies.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { number } The longest line of horizontal space this paragraph occupies.
     * @since 12
     */
    getLongestLine(): number;

    /**
     * Get the min intrinsic width of horizontal space this paragraph occupies.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { number } The min intrinsic width of horizontal space this paragraph occupies.
     * @since 12
     */
    getMinIntrinsicWidth(): number;

    /**
     * Get the text lines of paragraph.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { Array<TextLine> } the tuple of TextLine.
     * @since 12
     */
    getTextLines(): Array<TextLine>;
  }

  /**
   * Box that contain text.
   * @typedef TextBox
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface TextBox{
    /**
     * Rect of text box.
     * @type { common2D.Rect }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    rect: common2D.Rect;
    /**
     * Text direction.
     * @type { TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    direction: TextDirection;
  }

  /**
   * Position and affinity.
   * @typedef PositionWithAffinity
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface PositionWithAffinity {
    /**
     * Position of text.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    pos: number;
    /**
     * Affinity of text.
     * @type { Affinity }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    affinity: Affinity;
  }

  /**
   * Enumerates rect width style.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  enum RectWidthStyle {
    /**
     * Tight style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    TIGHT,
    /**
     * Max style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    MAX,
  }

  /**
   * Enumerates rect height style.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  enum RectHeightStyle {
    /**
     * Tight style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    TIGHT,
    /**
     * Max style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    MAX,
    /**
     * Includelinespacemiddle style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    INCLUDELINESPACEMIDDLE,
    /**
     * Includelinespacetop style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    INCLUDELINESPACETOP,
    /**
     * Includelinespacebottom style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    INCLUDELINESPACEBOTTOM,
    /**
     * Struct style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    STRUCT,
  }

  /**
   * Text affinity.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  enum Affinity {
    /**
     * The position has affinity for the upstream side of the text position
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    UPSTREAM,
    /**
     * The position has affinity for the downstream side of the text position
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    DOWNSTREAM,
  }

  /**
   * ParagraphBuilder object.
   * @namespace text
   * @syscap SystemCapability.Graphics.text
   * @since 12
   */
  class ParagraphBuilder {
    /**
     * Constructor ParagraphBuilder
     * @param { ParagraphStyle } paragraphStyle - Paragraph style {@link ParagraphStyle}
     * @param { FontCollection } fontCollection - Font Clollection {@link FontCollection}
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    constructor(paragraphStyle: ParagraphStyle, fontCollection: FontCollection);

    /**
     * Push text style
     * @param { TextStyle } textStyle - Text style {@link TextStyle}
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    pushStyle(textStyle: TextStyle): void;

    /**
     * Pop text style
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    popStyle(): void;

    /**
     * Add text
     * @param { string } text - Text string
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    addText(text: string): void;

    /**
     * Add placeholder
     * @param { PlaceholderSpan } placeholderSpan - Placeholder Span {@link PlaceholderSpan}
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    addPlaceholder(placeholderSpan: PlaceholderSpan): void;

    /**
     * Create paragraph
     * @returns { Paragraph } (Paragraph) returned
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    build(): Paragraph;
  }

  /**
   * The date structure that provides the basis of paragraph for graphics.
   * @namespace text
   * @syscap SystemCapability.provide system text data deal
   * @since 12
   */
  class TextLine {
    /**
     * Getting the count of glyphs
     * @returns { number } The counts of glyphs.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getGlyphCount(): number;
    /**
     * Getting the range of text
     * @returns { Range } The range of text.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getTextRange(): Range;
    /**
     * Getting the glyph runs of text
     * @returns { Run } The tuple of glyph runs of text.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    getGlyphRuns(): Array<Run>;
    /**
     * Getting the range of text
     * @param { drawing.Canvas } canvas - Canvas.
     * @param { number } x - Represents the X-axis position on the canvas.
     * @param { number } y - Represents the Y-axis position on the canvas.
     * @returns { Range } The range of text.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    paint(canvas: drawing.Canvas, x: number, y: number): void;
  }

  /**
   * Coordinates in the font layout.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  class Point {
    /**
     * X-axis coordinate.
     * @param { ?number } x_ X-axis coordinate.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
    x_?: number;

    /**
     * Y-axis coordinate.
     * @param { ?number } y_ Y-axis coordinate.
     * @syscap SystemCapability.Graphics.text
     * @since 12
     */
     y_?: number;
  }

  class Run {
    /**
     * Gets the number of glyph.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { number } The number of glyph.
     * @since 12
     */
    getGlyphCount(): number;
    /**
     * Gets the glyph identifier for each character.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { Array<number> } Glyph identifier.
     * @since 12
     */
    getGlyphs(): Array<number>;
    /**
     * Gets the font position offset.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { Array<Point> } The position of the font in the layout.
     * @since 12
     */
    getPositions(): Array<Point>;
	/**
     * Gets the font position offset array.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { Array<Point> } The position offset of the font in the layout.
     * @since 12
     */
    getOffsets(): Array<Point>;
    /**
     * Gets the font object instance.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @returns { Font } The font object instance.
     * @since 12
     */
    getFont(): drawing.Font;
    /**
     * Paints the laid out text onto the supplied canvas at (x, y).
     * @param { Canvas } canvas - Object.
     * @param { number } x - Represents the X-axis position on the canvas.
     * @param { number } y - Represents the Y-axis position on the canvas.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    paint(canvas: drawing.Canvas, x: number, y: number): void;
  }
}
export default text;