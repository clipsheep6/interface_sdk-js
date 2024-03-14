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
 * Declares interfaces related to ir emitter attributes.
 *
 * @namespace IrEmitter
 * @syscap
 * @since 11
 */
declare namespace IrEmitter {
  /**
   * Carrier frequency.
   *
   * @interface CarrierFrequency
   * @syscap
   * @systemapi hide for inner use
   * @since 11
   */
  interface CarrierFrequency {
    /**
     * Max.
     *
     * @type { number }
     * @syscap
     * @systemapi hide for inner use
     * @since 11
     */
    max: number;

    /**
     * Min.
     *
     * @type { number }
     * @syscap
     * @systemapi hide for inner use
     * @since 11
     */
    min: number;
  }

  /**
   * Transmit ir emitter.
   *
   * @param { number } carrierFrequency
   * @param { Array<number> } pattern
   * @syscap
   * @systemapi hide for inner use
   * @since 11
   */
  function transmit(carrierFrequency: number, pattern: Array<number>): void;

  /**
   * Get carrier frequencies.
   *
   * @syscap
   * @systemapi hide for inner use
   * @since 11
   */
  function getCarrierFrequencies(): Array<CarrierFrequency>;
}

export default IrEmitter;