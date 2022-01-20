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
 * The information of sheet.
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
interface SheetInfo {
  /**
   * Title Properties
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  title: string | Resource;

  /**
   * Icon Properties.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  icon?: string | Resource;

  /**
   * Callback method after the operation.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  action: () => void;
}

/**
 * Declare the ActionSheet
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class ActionSheet {
  /**
   * Invoking method display.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  static show(value: {
    /**
     * Title Properties
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    title: string | Resource;

    /**
     * message Properties
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    message: string | Resource;

    /**
     * Invoke the commit function.
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    confirm?: {
      /**
       * Text content of the confirmation button.
       * @since 8
* @Syscap SystemCapability.ArkUI.Standard
       */
      value: string | Resource;

      /**
       * Method executed by the callback.
       * @since 8
* @Syscap SystemCapability.ArkUI.Standard
       */
      action: () => void;
    };

    /**
     * Execute Cancel Function.
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    cancel?: () => void;

    /**
     * The Array of sheets
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    sheets: Array<SheetInfo>;

    /**
     * Allows users to click the mask layer to exit.
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    autoCancel?: boolean;

    /**
     * Alignment in the vertical direction.
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    alignment?: DialogAlignment;

    /**
     * Offset of the pop-up window relative to the alignment position.
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    offset?: { dx: number | string | Resource; dy: number | string | Resource };
  });
}
