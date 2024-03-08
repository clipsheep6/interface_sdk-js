/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit InputKit
 */

/**
 * 提供红外能力
 *
 * @namespace irEmitter
 * @syscap SystemCapability.MultimodalInput.Input.IrEmitter
 * @since 12
 */
declare namespace irEmitter {
  /**
   * 红外频率数据
   *
   * @interface CarrierFrequency
   * @syscap SystemCapability.MultimodalInput.Input.IrEmitter
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface CarrierFrequency {
    /**
     * 红外频率数据最大值.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.IrEmitter
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    max: number;

    /**
     * 红外频率数据最小值.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.IrEmitter
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    min: number;
  }

  /**
   * 获取设备支持的红外频率数据
   *
   * @permission ohos.permission.INPUT_IREMITTER
   * @returns { Array<CarrierFrequency> } 红外频率数据集合.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.IrEmitter
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function getCarrierFrequencies(): Array<CarrierFrequency>;

  /**
   * 设备是否有红外设备
   *
   * @permission ohos.permission.INPUT_IREMITTER
   * @returns { boolean } 是否有红外设备.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.IrEmitter
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function hasIrEmitter(): boolean;

  /**
   * 发送红外信号
   *
   * @permission ohos.permission.INPUT_IREMITTER
   * @param { number } carrierFrequency - 红外频率数据数据
   * @param { Array<number> } pattern - 
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.IrEmitter
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function transmit(carrierFrequency: number, pattern: Array<number>): void;
}

export default irEmitter;