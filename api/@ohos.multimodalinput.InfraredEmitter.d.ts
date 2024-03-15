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
 * @namespace InfraredEmitter
 * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
 * @since 12
 */
declare namespace InfraredEmitter {
  /**
   * Carrier frequency range supported by the IR emitter.
   *
   * @interface CarrierFrequency
   * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
   * @systemapi hide for inner use
   * @since 12
   */
  interface CarrierFrequency {
    /**
     * Maximum frequency.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @systemapi hide for inner use
     * @since 12
     */
    max: number;

    /**
     * Minimum frequency.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @systemapi hide for inner use
     * @since 12
     */
    min: number;
  }

  /**
   * Transmitted IR signal.
   *
   * @permission ohos.permission.INPUT_IREMITTE
   * @param { number} carrierFrequency IR carrier frequency, in Hz.
   * @param { Array<number>} pattern Pattern of signal transmission in alternate on/off mode, in microseconds.
   * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
   * @systemapi hide for inner use
   * @since 12
   */
  function transmitInfrared(carrierFrequency: number, pattern: Array<number>): void;

  /**
   * Queries the carrier frequency supported by the IR emitter.
   *
   * @returns { Array<CarrierFrequency> } The return value is an array of CarrierFrequency objects, indicating the carrier frequency ranges supported by the IR emitter.
   * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
   * @systemapi hide for inner use
   * @since 12
   */
  function getInfraredFrequencies(): Array<CarrierFrequency>;
}

export default InfraredEmitter;