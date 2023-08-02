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
 * The declare of TabItemType.
 * @enum { TabItemType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum TabItemType {
  /**
   * The Text style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEXT = 0,
  /**
   * The Icon style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ICON = 1
}

/**
 * The declare of OperationOptions.Icon item on the right.
 * @typedef OperationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare type OperationOptions = {
  /**
   * The content of text or the address of icon.
   * @type { ResourceStr }.
   * @since 10
   */
  value: ResourceStr;

  /**
   * callback function when operate the text or icon.
   * @type { () => void }.
   * @since 10
   */
  action?: () => void;
};

/**
 * The declare of TabTitleBarItem.
 * @typedef TabTitleBarItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare type TabTitleBarItem = {
  /**
   * The TabItemType for tabTittleBar.
   * @type { TabItemType }.
   * @since 10
   */
  type: TabItemType;

  /**
   * The tabTitleBarItem Resource.
   * @type { ResourceStr }.
   * @since 10
   */
  value: ResourceStr;
};

/**
 * The declare of TabTitleBar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct TabTitleBar {
  /**
   * The Set of Icon item on the right.
   * @type {  Array<OperationOptions> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full  
   * @since 10
   */
  menus: Array<OperationOptions>;

  /**
   * The Tab Title Set.
   * @type {  Array<TabTitleBarItem> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full  
   * @since 10
   */	
  tabTitleBarItems: Array<TabTitleBarItem>;
  /**
   * The Tab content set. Each component corresponds to the number of tabs in sequence.
   * The builder needs to be transferred.
   * @type {  () => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full  
   * @since 10
   */
  @BuilderParam content: () => void;
}
