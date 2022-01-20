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
 * DataPanelType enum
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum DataPanelType {
  /**
   * Line Type
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Line,

  /**
   * Line Rainbow
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Circle,
}

/**
 * Defines the option of DataPanel.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare interface DataPanelOption {
  /**
   * Current data value. the max length is 9.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  values: number[];

  /**
   * Maximum value of the current data.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  max?: number;

  /**
   * DataPanel Type
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  type?: DataPanelType;
}

/**
 * Defines the DataPanel component.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface DataPanelInterface {
  /**
   * Return a DataPanel.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  (options: DataPanelOption): DataPanelAttribute;
}

/**
 * Defines the DataPanel attribute functions.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class DataPanelAttribute extends CommonMethod<DataPanelAttribute> {
  /**
   * Disable the special effect of the data ratio chart.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  closeEffect(value: boolean): DataPanelAttribute;
}

declare const DataPanel: DataPanelInterface
declare const DataPanelInstance: DataPanelAttribute;
