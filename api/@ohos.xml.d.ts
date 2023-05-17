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
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 *
 * @namespace xml
 * @permission N/A
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 8
 */
declare namespace xml {
  /**
   * The XmlSerializer interface is used to generate an xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   * @name XmlSerializer
   */
  class XmlSerializer {
    /**
     * A parameterized constructor used to create a new XmlSerializer instance.
     * As the input parameter of the constructor function, init supports three types.
     * The input parameter is an Arrarybuffer.
     * The input parameter is a DataView.
     * The input parameter is an encoding format of string type.
     *
     * @param { ArrayBuffer | DataView } buffer
     * @param { string } encoding
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     */
    constructor(buffer: ArrayBuffer | DataView, encoding?: string);

    /**
     * Write an attribute.
     *
     * @param name Key name of the attribute.
     * @param value Values of attribute.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    setAttributes(name: string, value: string): void;

    /**
     * Add an empty element.
     *
     * @param name Key name of the attribute.
     * @param value Values of element.
     * @throws { BusinessError } 401 - The type of name must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    addEmptyElement(name: string): void;

    /**
     * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    setDeclaration(): void;

    /**
     * Writes a element start tag with the given name.
     *
     * @param name Name of the element.
     * @throws { BusinessError } 401 - The type of name must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    startElement(name: string): void;

    /**
     * Writes end tag of the element.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    endElement(): void;

    /**
     * Writes the namespace of the current element tag.
     *
     * @param prefix Values name of the prefix.
     * @param namespace Values of namespace.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    setNamespace(prefix: string, namespace: string): void;

    /**
     * Writes the comment.
     *
     * @param text Values of comment.
     * @throws { BusinessError } 401 - The type of text must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    setComment(text: string): void;

    /**
     * Writes the CDATA.
     *
     * @param text Values of CDATA.
     * @throws { BusinessError } 401 - The type of text must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    setCDATA(text: string): void;

    /**
     * Writes the text.
     *
     * @param text Values of text.
     * @throws { BusinessError } 401 - The type of text must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    setText(text: string): void;

    /**
     * Writes the DOCTYPE.
     *
     * @param text Values of docType.
     * @throws { BusinessError } 401 - The type of text must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    setDocType(text: string): void;
  }

  enum EventType {
    /**
     * Start a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    START_DOCUMENT,
    /**
     * End a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    END_DOCUMENT,
    /**
     * Start a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    START_TAG,
    /**
     * End a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    END_TAG,
    /**
     * Character data.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    TEXT,
    /**
     * A CDATA sections.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    CDSECT,
    /**
     * An XML comment.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    COMMENT,
    /**
     * An XML document type declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    DOCDECL,
    /**
     * An XML processing instruction declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    INSTRUCTION,
    /**
     * An entity reference.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    ENTITY_REFERENCE,
    /**
     * A whitespace.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    WHITESPACE
  }

  /** The current parse info.  */
  interface ParseInfo {
    /**
     * The current column number, starting from 1.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    getColumnNumber(): number;
    /**
     * The current depth of the element.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    getDepth(): number;
    /**
     * The current line number, starting from 1.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    getLineNumber(): number;
    /**
     * The current element's name.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    getName(): string;
    /**
     * The current element's namespace.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    getNamespace(): string;
    /**
     * The current element's prefix.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    getPrefix(): string;
    /**
     * The text content of the current event as String.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    getText(): string;
    /**
     * Returns true if the current element is empty.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    isEmptyElementTag(): boolean;
    /**
     * Checks whether the current TEXT event contains only whitespace characters.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    isWhitespace(): boolean;
    /**
     * Returns the number of attributes of the current start tag.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    getAttributeCount(): number;
  }

  /** Parse options for XmlPullParser. */
  interface ParseOptions {
    /**
     * Whether to parsing Doctype of the elements.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    supportDoctype?: boolean;

    /**
     * Whether to ignore parsing texts of the elements.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    ignoreNameSpace?: boolean;

    /**
     * Tag value callback function.
     *
     * @param name The current tag name.
     * @param value The current tag value.
     * @returns Returns a Boolean variable for whether parse continually.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    tagValueCallbackFunction?: (name: string, value: string) => boolean;

    /**
     * Attribute value callback function.
     *
     * @param name The current attribute name.
     * @param value The current attribute value.
     * @returns Returns a Boolean variable for whether parse continually.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    attributeValueCallbackFunction?: (name: string, value: string) => boolean;

    /**
     * Token value callback function.
     *
     * @param eventType The current token eventtype.
     * @param value The current token parseinfo.
     * @returns Returns a Boolean variable for whether parse continually.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    tokenValueCallbackFunction?: (eventType: EventType, value: ParseInfo) => boolean;
  }

  /**
   * The XmlPullParser interface is used to parse the existing xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 8
   * @name XmlPullParser
   */
  class XmlPullParser {
    /**
     * A constructor used to create a new XmlPullParser instance.
     *
     * @param { ArrayBuffer | DataView } buffer
     * @param { string } encoding
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     */
    constructor(buffer: ArrayBuffer | DataView, encoding?: string);

    /**
     * Starts parsing the XML file.
     *
     * @param option parse options for XmlPullParser, the interface including two Boolean variables and three callback functions.
     * @throws { BusinessError } 401 - The type of option must be ParseOptions.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 8
     */
    parse(option: ParseOptions): void;
  }
}
export default xml;
