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

/**
 * This module provides the capability to control motor vibration.
 *
 * @since 8
 * @syscap SystemCapability.Sensors.MiscDevice
 */
declare namespace vibrator {
    /**
     * The trigger motor vibrates for a specified length of time.
     * @param duration Indicate the duration of the motor vibration.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 8
     * @deprecated since 9
     * @useinstead vibrator#startVibration
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
     * @useinstead vibrator#startVibration
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
     * Cancel the vibrator from vibrating.
     * @param { void | AsyncCallback<void> } - Void or the callback of cancelVibration.
     * @returns { void | Promise<void> } no callback return Promise otherwise return void.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 10
     */
    function cancelVibration(): Promise<void>;
    function cancelVibration(callback: AsyncCallback<void>): void;

    /**
     * Stop the motor from vibrating.
     * @param stopMode Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 8
     * @deprecated since 9
     * @useinstead vibrator#stopVibration
     */
    function stop(stopMode: VibratorStopMode): Promise<void>;
    function stop(stopMode: VibratorStopMode, callback?: AsyncCallback<void>): void;

    /**
     * Obtain information of vibrator.
     * @returns { VibratorInfo } Returns the relevant properties of the vibrator, {@code VibratorInfo}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 10
     */
    function getVibratorInfo(): VibratorInfo;

    /**
     * Obtain information of preset effect.
     * @param effectId Indicate the specified effect of the preset, {@code EffectId}.
     * @returns { EffectInfo } Returns whether this effect is supported and the vibration duration, {@code EffectInfo}.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 10
     */
    function getEffectInfo(effectId: EffectId): EffectInfo;

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
        /* Indicates the mode of stopping a custom vibration.*/
        VIBRATOR_STOP_MODE_CUSTOM = "custom",
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
     type VibrateEffect = VibrateTime | VibratePreset | VibrateCustom;

    /**
     * Specifies the duration of the vibration effect, the intensity and frequency are bound to the system default values.
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
     * Custom vibration type vibration effect.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    interface VibrateCustom {
        type: "custom";
        fd: number; /** File descriptor of vibration config file. */
    }

    /**
     * Information about preset vibration type.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    interface EffectInfo {
        isSupportEffect: boolean;  /** Whether a preset vibration is supported. */
        duration: number;   /** If support returns the duration of this effect */
    }

    /**
     * Information about the vibrator.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    interface VibratorInfo {
        isSupportVibrator: boolean;    /** Whether the vibration is supported. */
        isSupportIntensity: boolean;   /** Whether vibration intensity adjustment is supported. */
        isSupportFrequency: boolean;   /** Whether vibration frequency adjustment is supported. */
    }
}

export default vibrator;