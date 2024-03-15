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
 * Declares the APIs for configuring attributes of the IR emitter.
 *
 * @namespace IrEmitter
 * @syscap
 * @since 12
 */
declare namespace IrEmitter {
  /**
   * Carrier frequency range supported by the IR emitter.
   *
   * @interface CarrierFrequency
   * @syscap
   * @systemapi
   * @since 12
   */
  interface CarrierFrequency {
    /**
     * Maximum frequency.
     *
     * @type { number }
     * @syscap
     * @systemapi
     * @since 12
     */
    max: number;

    /**
     * Minimum frequency.
     *
     * @type { number }
     * @syscap
     * @systemapi
     * @since 12
     */
    min: number;
  }

  /**
   * Transmitted IR signal.
   *
   * @param { number} carrierFrequency IR carrier frequency, in Hz.
   * @param { Array<number>} pattern Pattern of signal transmission in alternate on/off mode, in microseconds.
   * @syscap
   * @systemapi
   * @since 12
   */
  function transmit(carrierFrequency: number, pattern: Array<number>): void;

  /**
   * Queries the carrier frequency supported by the IR emitter.
   *
   * The return value is an array of ConsumerIrManager.CarrierFrequencyRange objects, indicating the carrier frequency ranges supported by the IR emitter.
   * @syscap
   * @systemapi
   * @since 12
   */
  function getCarrierFrequencies(): Array<CarrierFrequency>;
}

export default IrEmitter;