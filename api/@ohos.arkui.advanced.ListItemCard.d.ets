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
   * Badge type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  BADGE = 1,
  /**
   * Normal icon type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NORMAL_ICON = 2,
  /**
   * System icon type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SYSTEM_ICON = 3,
  /**
   * Headsculpture type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  HEADSCULPTURE = 4,
  /**
   * App icon type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  APP_ICON = 5,
  /**
   * Preview type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  PREVIEW = 6,
  /**
   * Longitudinal type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LONGITUDINAL = 7,
  /**
   * Vertical type.
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
   * Button type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  BUTTON = 1,
  /**
   * Image type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  IMAGE = 2,
  /**
   * Icon type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ICON = 3,
  /**
   * Text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEXT = 4,
  /**
   * Icon text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ICON_TEXT = 5,
  /**
   * Arrow type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ARROW = 6,
  /**
   * Arrow text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ARROW_TEXT = 7,
  /**
   * Radio type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  RADIO = 8,
  /**
   * CheckBox type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CHECKBOX = 9,
  /**
   * Switch type.
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
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop icon: ResourceStr;

  /**
   * Sets the title.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop title: ResourceStr;

  /**
   * Sets the subtitle.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop subtitle: ResourceStr;

  /**
   * Sets the description.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop description: ResourceStr;
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
  @Prop checkbox: OperateCheck;
  
  /**
   * Sets the radio.
   * type { OperateCheck }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop radio: OperateCheck;

  /**
   * Sets the image.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop image: ResourceStr;

  /**
   * The type of OperateItem.
   * type { OperateItemType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop type: OperateItemType;

  /**
   * Sets the text.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop text: ResourceStr;
}

/**
 * Declare ListItemCard
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct ListItemCard {
  /**
   * Default BuilderParam.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @BuilderParam container: () => void;
}