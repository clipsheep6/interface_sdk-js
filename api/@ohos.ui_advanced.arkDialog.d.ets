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
 * Declare ButtonOptions
 * @typedef ButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare type ButtonOptions = {
  /**
   * Sets the Display Content of a Button.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: ResourceStr;
  /**
   * Sets the Button Callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  action?: () => void;
  /**
   * Sets the background color of a button.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  background?: ResourceColor;
  /**
   * Sets the Button Text Color.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor?: ResourceColor;
};
/**
 * Declare CustomDialog ImageDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct ImageDialog {
  /**
   * Sets the ImageDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageController: CustomDialogController;
  /**
   * Sets the ImageDialog imageRes.
   * @type { Resource }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageRes: Resource;
  /**
   * Sets the ImageDialog image size.
   * @type { SizeOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageSize: SizeOptions;
  /**
   * Sets the ImageDialog title.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  title: ResourceStr;
  /**
   * Sets the ImageDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: ResourceStr;
  /**
   * Sets the ImageDialog checkbox tips.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  checkTips?: ResourceStr;
  /**
   * Sets the ImageDialog checkbox check state.
   * @type { boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @State isChecked?: boolean;
  /**
   * Sets the ImageDialog checkbox callback.
   * @param isChecked whether the checkbox is checked.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onCheckChange: (isChecked: boolean) => void;
  /**
   * Sets the ImageDialog primary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  primaryButton?: ButtonOptions;
  /**
   * Sets the ImageDialog secondary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  secondaryButton?: ButtonOptions;
}
/**
 * Declare CustomDialog ListDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct ListDialog {
  /**
   * Sets the ListDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  listController: CustomDialogController;
  /**
   * Sets the ListDialog title.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  title: ResourceStr;
  /**
   * Sets the ListDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: ResourceStr;
  /**
   * Sets the ListDialog selected index.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedIndex?: number;
  /**
   * Sets the ListDialog confirm button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  confirm?: ButtonOptions;
  /**
   * Sets the ListDialog sheets.
   * @type { Array<SheetInfo> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  sheets: Array<SheetInfo>;
}
/**
 * Declare CustomDialog CheckBoxDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct CheckBoxDialog {
  /**
   * Sets the CheckBoxDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  checkBoxController: CustomDialogController;
  /**
   * Sets the CheckBoxDialog title.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  title: ResourceStr;
  /**
   * Sets the CheckBoxDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: ResourceStr;
  /**
   * Sets the CheckBoxDialog checkbox tips.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  checkTips?: ResourceStr;
  /**
   * Sets the CheckBoxDialog checkbox state.
   * @type { boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @State
  isChecked?: boolean;
  /**
   * Sets the CheckBoxDialog check callback.
   * @param isChecked whether the checkbox is checked.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onCheckChange: (isChecked: boolean) => void;
  /**
   * Sets the CheckBoxDialog primary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  primaryButton?: ButtonOptions;
  /**
   * Sets the CheckBoxDialog secondary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  secondaryButton?: ButtonOptions;
}
/**
 * Declare CustomDialog ConfirmDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct ConfirmDialog {
  /**
   * Sets the ConfirmDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  confirmController: CustomDialogController;
  /**
   * Sets the ConfirmDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content: ResourceStr;
  /**
   * Sets the ConfirmDialog primary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  primaryButton?: ButtonOptions;
  /**
   * Sets the ConfirmDialog secondary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  secondaryButton?: ButtonOptions;
}
/**
 * Declare CustomDialog ProgressDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct ProgressDialog {
  /**
   * Sets the ProgressDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  progressController: CustomDialogController;
  /**
   * Sets the ProgressDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: ResourceStr;
}
