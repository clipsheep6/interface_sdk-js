/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * Declare enum IconType
 * @enum { IconType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum IconType {
    /**
     * badge type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    BADGE = 1,
    /**
     * small icon type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    SMALL_ICON = 2,
    /**
     * system icon type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    SYSTEM_ICON = 3,
    /**
     * headsculpture type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    HEADSCULPTURE = 4,
    /**
     * app icon type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    APP_ICON = 5,
    /**
     * preview type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    PREVIEW = 6,
    /**
     * longitudinal type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    LONGITUDINAL = 7,
    /**
     * vertical type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    VERTICAL = 8
}

/**
 * Declare enum OperateItemType
 * @enum { OperateItemType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum OperateItemType {
    /**
     * button type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    BUTTON = 1,
    /**
     * image type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    IMAGE = 2,
    /**
     * icon type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    ICON = 3,
    /**
     * text type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    TEXT = 4,
    /**
     * icon text type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    ICON_TEXT = 5,
    /**
     * arrow type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    ARROW = 6,
    /**
     * arrow text type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    ARROW_TEXT = 7,
    /**
     * radio type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    RADIO = 8,
    /**
     * checkBox type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    CHECKBOX = 9,
    /**
     * switch type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    SWITCH = 10
}

/**
 * Declare ContentItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct ContentItem {
    /**
     * The type of icon.
     * type { IconType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop iconStyle: IconType;

    /**
     * Sets the icon.
     * type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop icon: Resource;

    /**
     * Sets the title.
     * type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop title: string;

    /**
     * Sets the subtitle.
     * type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop subtitle: string;

    /**
     * Sets the description.
     * type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop description: string;
}

/**
 * Declare OperateItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct OperateItem {
    /**
     * Sets the icon.
     * type { OperateIcon }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop icon: OperateIcon;

    /**
     * Sets the subIcon.
     * type { OperateIcon }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop subIcon: OperateIcon;

    /**
     * Sets the button.
     * type { OperateButton }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop button: OperateButton;

    /**
     * Sets the switch.
     * type { OperateCheck }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop switch: OperateCheck;

    /**
     * Sets the checkBox.
     * type { OperateCheck }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop checkBox: OperateCheck;
    
    /**
     * Sets the radio.
     * type { OperateCheck }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop radio: OperateCheck;

    /**
     * Sets the image.
     * type { Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop image: Resource;

    /**
     * The type of OperateItem.
     * type { OperateItemType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop type: OperateItemType;

    /**
     * Sets the text.
     * type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop text: string;

    /**
     * The state of switch button.
     * type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @State switchState: boolean;
}

/**
 * Declare ListItemCard
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct ListItemCard {
    @BuilderParam container: () => void;

    /**
     * The frontColor.
     * type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @State frontColor: string;
}