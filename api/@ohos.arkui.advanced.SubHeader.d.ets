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
 * Control style of content element
 * @enum { TitleStyle }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum TitleStyle {
  /**
   * The listMode style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LIST_STYLE = 0,

  /**
   * The contentMode style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CONTENT_STYLE = 1
}

/**
 * Control style of operation element
 * @enum { OperationStyle }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum OperationStyle {
  /**
   * The TextArrow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEXT_ARROW = 0,

  /**
   * The Button style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  BUTTON = 1,

  /**
   * The IconGroup style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ICON_GROUP = 2,

  /**
   * The LoadingProgress style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LOADING_PROGRESS = 3
}

/**
 * Declare type OperationOption
 * @typedef OperationOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare type OperationOption = {
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
 * Declare type SelectOption
 * @typedef SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare type SelectOptions = {
  /**
   * SubOption array of the select.
   * @type { Array<SelectSubOption> }.
   * @since 10
   */
  options: Array<SelectOption>;

  /**
   * The default selected index.
   * @type { number }.
   * @since 10
   */
  selected?: number;
  
  /**
   * The default text value.
   * @type { ResourceStr }.
   * @since 10
   */
  value?: ResourceStr;

 /**
  * Callback when the select is selected.
  * @type { (index: number, value?: string) => void }.
  * @since 10
  */
  onSelect?: (index: number, value?: string) => void;
};

/**
 * Declare struct SubHeader
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct SubHeader {
  /**
   * Content style of SubHeader.
   * @type { TitleStyle }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full  
   * @since 10
   */
  @Prop titleStyle: TitleStyle;

  /**
   * Icon resource of content area.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  iconItem: ResourceStr;

  /**
   * The first line text of content area.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop primaryText: ResourceStr;

  /**
   * The secondary line text of content area.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop secondaryText: ResourceStr;

  /**
   * Select option of content area.
   * @type { SelectOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  select: SelectOptions;

  /**
   * Operation style of SubHeader.
   * @type { OperationStyle }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop operationStyle: OperationStyle;

  /**
   * Content of operation area.
   * @type { OperationOption }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop content: OperationOption;

  /**
   * IconGroup of operation area.
   * @type { Array<OperationOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  iconGroup: Array<OperationOption>;
}
