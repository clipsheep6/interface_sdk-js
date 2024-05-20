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
 * Declare enum DownloadIconStyle
 * @enum { DownloadIconStyle }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare enum DownloadIconStyle {
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    FULL_FILLED = 0,

    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    LINES = 1
}

/**
 * Declare enum DownloadDescription
 * @enum { DownloadDescription }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare enum DownloadDescription {
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    DOWNLOAD = 0,
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    DOWNLOAD_FILE = 1,
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    SAVE = 2,
    SAVE_IMAGE = 3,
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    SAVE_FILE = 4,
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    DOWNLOAD_AND_SHARE = 5,
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    RECEIVE = 6,
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    CONTINUE_TO_RECEIVE = 7
}
/**
 * Declare enum DownloadLayoutDirection
 * @enum { DownloadLayoutDirection }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export declare enum DownloadLayoutDirection {
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    HORIZONTAL = 0,
    /**
     * Enable type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    VERTICAL = 1
}

/**
 * Defines text only item of DownloadContentOption.
 *
 * @interface DownloadContentOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface DownloadContentOption {
    /**
     * The icon of icon only item.
     *
     * @type { DownloadIconStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    icon?: DownloadIconStyle;
    /**
     * The text of text only item.
     *
     * @type { DownloadDescription }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    text?: DownloadDescription;
}
/**
 * Defines text only item of DownloadStyleOption.
 *
 * @interface DownloadStyleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface DownloadStyleOption {
    /**
     * The iconSize of iconSize only item.
     *
     * @type { Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    iconSize?: Dimension;
    /**
     * The layoutDirection of layoutDirection only item.
     *
     * @type { DownloadLayoutDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    layoutDirection?: DownloadLayoutDirection;
    /**
     * The fontSize of fontSize only item.
     *
     * @type { Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    fontSize?: Dimension;
    /**
     * The fontStyle of fontStyle only item.
     *
     * @type { FontStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    fontStyle?: FontStyle;
    /**
     * The fontWeight of fontWeight only item.
     *
     * @type { number | FontWeight | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    fontWeight?: number | FontWeight | string;
    /**
     * The fontFamily of fontFamily only item.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    fontFamily?: string | Resource;
    /**
     * The fontColor of fontColor only item.
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    fontColor?: ResourceColor;
    /**
     * The iconColor of iconColor only item.
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    iconColor?: ResourceColor;
    /**
     * The textIconSpace of textIconSpace only item.
     *
     * @type { Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    textIconSpace?: Dimension;
}

/**
 * Declare Component DownloadFileButton
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
@Component
export declare struct DownloadFileButton {
    /**
     * The contentOption.
     *
     * @type { DownloadContentOption }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @State
    contentOption: DownloadContentOption;
    /**
     * The styleOption.
     *
     * @type { DownloadStyleOption }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @State
    styleOption: DownloadStyleOption;
    /**
     * The build.
     *
     * Register a function to complete initialization
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    build(): void;
    /**
     * The downloadImage.
     *
     * Register view image
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Builder
    downloadImage(): void;
    /**
     * The downloadText.
     *
     * Register view text
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    @Builder
    downloadText(): void;
}
