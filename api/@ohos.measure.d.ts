/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * Defines the options of MeasureText.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
export interface MeasureOptions {

    /**
     * Text to display.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    textContent: string;

    /**
     * the font Size.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    fontSize?: number|string|Resource;

    /**
     * the font style of a font.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    fontStyle?: FontStyle;

    /**
     * the font weight.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    fontWeight?: number|string|FontWeight;

    /**
     * the font list of text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    fontFamily?: string|Resource;

    /**
     * the distance between text fonts.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    letterSpacing?: number|string;
}

/**
 * Defines the Measure interface.
 * since 9
 */
export default class Measure {
    
    /**
     * Displays the textWidth.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @param options Options.
     * @since 9 
     */
    static measureText(options: MeasureOptions): double;
}