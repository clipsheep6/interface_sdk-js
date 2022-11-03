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
import { AsyncCallback } from './basic';
import List from "./@ohos.util.List"

/**
 * This module provides the capability to control motor vibration.
 *
 * @since 8
 * @syscap SystemCapability.Sensors.MiscDevice
 * @import import vibrator from '@ohos.vibrator'
 */
declare namespace vibrator {
    /**
     * The trigger motor vibrates for a specified length of time.
     * @param duration Indicate the duration of the motor vibration.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.vibrator.startVibration
     */
    function vibrate(duration: number, callback?: AsyncCallback<void>): void;
    function vibrate(duration: number): Promise<void>;

    /**
     * The trigger motor vibrates for the specified effect of the preset.
     * @param effectId Indicate the specified effect of the preset, {@code EffectId}.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.vibrator.startVibration
     */
    function vibrate(effectId: EffectId): Promise<void>;
    function vibrate(effectId: EffectId, callback?: AsyncCallback<void>): void;

    /**
     * Trigger vibrator vibration.
     * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
     * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
     * @param { AsyncCallback<void> } callback - The callback of startVibration.
     * @returns {void | Promise<void>} no callback return Promise otherwise return void.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14600101 - Device operation failed.
     * @permission ohos.permission.VIBRATE
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    function startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>): void;
    function startVibration(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>;

    /**
     * Stop the vibrator from vibrating.
     * @param { VibratorStopMode } stopMode - Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
     * @param { AsyncCallback<void> } callback - The callback of stopVibration.
     * @returns { void | Promise<void> } no callback return Promise otherwise return void.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 9
     */
    function stopVibration(stopMode: VibratorStopMode): Promise<void>;
    function stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>): void;

    /**
     * Stop the motor from vibrating.
     * @param stopMode Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.vibrator.stopVibration
     */
    function stop(stopMode: VibratorStopMode): Promise<void>;
    function stop(stopMode: VibratorStopMode, callback?: AsyncCallback<void>): void;

    /**
     * Preset vibration effect string.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     */
    enum EffectId {
        /* Describes the vibration effect of the vibrator when a user adjusts the timer.*/
        EFFECT_CLOCK_TIMER = "haptic.clock.timer",
    }

    /**
     * Vibrator vibration stop mode.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     */
    enum VibratorStopMode {
        /* Indicates the mode of stopping a one-shot vibration effect.*/
        VIBRATOR_STOP_MODE_TIME = "time",
        /* Indicates the mode of stopping a preset vibration effect.*/
        VIBRATOR_STOP_MODE_PRESET = "preset",
    }

    /**
     * The use of vibration.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    type Usage = "unknown" | "alarm" | "ring" | "notification" | "communication" |
        "touch" | "media" | "physicalFeedback" | "simulateReality";

    /**
     * The attribute of vibration.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    interface VibrateAttribute {
        id?: number, /** Vibrator id, default is 0. */
        usage: Usage, /** The use of vibration. */
    }

    /**
     * Describes the effect of vibration.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
     type VibrateEffect = VibrateTime | VibratePreset | VibrateWaveform;

    /**
     * Specifies the duration of the vibration effect.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    interface VibrateTime {
        type: "time";
        duration: number; /** The duration of the vibration, in ms */
    }

    /**
     * Preset vibration type vibration effect.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    interface VibratePreset {
        type: "preset";
        effectId: string; /** Preset type vibration */
        count: number; /** The number of vibration repetitions */
    }

    
    /**
     * Specifies the time slice.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    interface TimeSlice {
        type: "timeSlice";
        duration: number; /** The duration of the vibration, in ms */
        intensity?: number; /**  Indicates the intensity of the slice. */
        frequency?: number /**  Indicates the frequency of the slice. */
    }
    
    /**
     * Specifies the meta effect slice.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    interface MetaEffectSlice {
        type: "metaEffect";
        metaEffect: string; /** Indicates the metaEffectId provided by the system to add. */
        scale?: number; /** Indicates the scale to apply to the intensity of the metaEffect. */
    }

    /**
     * The slice of customized vibration effect.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
     type WaveformSlice = TimeSlice | MetaEffectSlice;

    /**
     * Customized vibration type vibration effect.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
     interface VibrateWaveform {
        type: "customized";
        waveformSequence: List<WaveformSlice>;
    }

    /**
     * A builder for vibrate waveform.
     * For example:
     * step1:
     * WaveformBuilder builder = new WaveformBuilder();
     * VibrateWaveform waveform = builder.addMetaEffect("meta_effect_test2", 100, 0.5)
     *        .addTimeSlice(200, 100, 75, 80)
     *        .addMetaEffect("meta_effect_test2", 50)
     *        .addTimeSlice(150, 200)
     *        .addMetaEffect("primitive_effect_test3", 150, 0.75)
     *        .build();
     *
     * step2:
     * vibrator.startVibration(sequence, {usage: "alarm"}, (error) => {
     *      if (error) {
     *          console.error("vibrate fail");
     *      }
     * });
     * @name WaveformBuilder
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
     class WaveformBuilder {
        vibrateWaveform: List<WaveformSlice>;
        /**
         * Add vibration meta effect to the waveform sequence.
         * @param metaEffectId Indicates the metaEffectId provided by the system to add.
         * @param delay Indicates the amount of time to wait, in milliseconds, before playing the metaEffectId,
         * starting at the time the previous element in the composition is complete.
         * @param scale Indicates the scale to apply to the intensity of the metaEffectId.
         * @returns WaveformBuilder.
         * @since 10
         */
         addMetaEffect(metaEffectId: string, delay: number, scale?: number): WaveformBuilder;

        /**
         * Add vibration time slice to the waveform sequence.
         * @param duration Indicates the duration of time slice to add.
         * @param delay Indicates the amount of time to wait, in milliseconds, before playing the slice,
         * starting at the time the previous element in the composition is complete.
         * @param intensity Indicates the intensity of the slice.
         * @param frequency Indicates the frequency of the slice.
         * @returns WaveformBuilder.
         * @since 10
         */
         addTimeSlice(duration: number, delay: number, intensity?: number, frequency?: number): WaveformBuilder;

        /**
         * Build the waveform as a single.
         * @returns VibrateWaveform.
         * @since 10
         */
         build(): VibrateWaveform;
     }
}

export default vibrator;