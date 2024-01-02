/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * The class for BreadcrumbLabel array.
 *
 * @extends Array<BreadcrumbLabel>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
@Observed
declare class BreadcrumbLabels extends Array<BreadcrumbLabel> {
  /**
   * The constructor used to create a BreadcrumbLabels object.
   *
   * @param { Array<BreadcrumbLabel> } [labels] - The BreadcrumbLabel items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor(labels?: Array<BreadcrumbLabel>);
}

/**
 * Defines the label info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
@Observed
declare class BreadcrumbLabel {
  /**
   * Label text.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  text: ResourceStr;

  /**
   * Label icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  icon?: ResourceStr;

  /**
   * The constructor used to create a BreadcrumbLabel object.
   *
   * @param { ResourceStr } text - Label text.
   * @param { ResourceStr } [icon] - Label icon.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor(text: ResourceStr, icon?: ResourceStr);
}

/**
 * View of Breadcrumb.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
@Component
declare struct Breadcrumb {
  /**
   * Labels of Breadcrumb.
   *
   * @type { BreadcrumbLabels }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  @ObjectLink
  labels: BreadcrumbLabels;

  /**
   * Called when the label is clicked.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onLabelClick?: (index: number, event: ClickEvent) => void;

  /**
   * Called when the label begins to be dragged.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onLabelDragStart?: (index: number, event: DragEvent) => DragItemInfo;

  /**
   * Called when a component is dragged to the range of the label.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onLabelDragEnter?: (index: number, event: DragEvent) => void;

  /**
   * Called when a component is dragged out of the label range.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onLabelDragLeave?: (index: number, event: DragEvent) => void;

  /**
   * Called when the drag behavior is stopped within the scope of the label.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onLabelDrop?: (index: number, event: DragEvent) => void;

  /**
   * Called when the drag behavior is finished.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onLabelDragEnd?: (index: number, event: DragEvent) => void;
}

export { BreadcrumbLabels, BreadcrumbLabel, Breadcrumb };
