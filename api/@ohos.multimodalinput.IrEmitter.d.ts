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
 * 声明与红外发射器属性相关的接口。
 *
 * @namespace IrEmitter
 * @syscap
 * @since 12
 */
declare namespace IrEmitter {
  /**
   * 表示红外发射器可以发射的载波频率范围。
   *
   * @interface CarrierFrequency
   * @syscap
   * @systemapi
   * @since 12
   */
  interface CarrierFrequency {
    /**
     * 最大频率。
     *
     * @type { number }
     * @syscap
     * @systemapi
     * @since 12
     */
    max: number;

    /**
     * 最小频率。
     *
     * @type { number }
     * @syscap
     * @systemapi
     * @since 12
     */
    min: number;
  }

  /**
   * 传输红外信号。
   *
   * @param { number } carrierFrequency - 红外载波频率（以赫兹为单位）
   * @param { Array<number> } pattern - 以微秒为单位的交替开/关模式进行传输
   * @syscap
   * @systemapi
   * @since 12
   */
  function transmit(carrierFrequency: number, pattern: Array<number>): void;

  /**
   * 查询红外发射器支持的载波频率。
   *
   * 返回值：ConsumerIrManager.CarrierFrequencyRange 对象的数组，表示发射器可以支持的范围
   * @syscap
   * @systemapi
   * @since 12
   */
  function getCarrierFrequencies(): Array<CarrierFrequency>;
}

export default IrEmitter;