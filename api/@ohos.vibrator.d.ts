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
 * @import import vibrator from '@ohos.vibrator'
 * @permission ohos.permission.VIBRATE
 */
declare namespace vibrator {
    /**
     * The trigger motor vibrates for a specified length of time.
     * @param duration Indicate the duration of the motor vibration.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 8
     */
    function vibrate(duration: number, callback?: AsyncCallback<void>): void;
    function vibrate(duration: number): Promise<void>;

    /**
     * The trigger motor vibrates for the specified effect of the preset.
     * @param effectId Indicate the specified effect of the preset, {@code EffectId}.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 8
     */
    function vibrate(effectId: EffectId): Promise<void>;
    function vibrate(effectId: EffectId, callback?: AsyncCallback<void>): void;

    /**
     * Stop the motor from vibrating.
     * @param stopMode Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 8
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
     * 振动用途
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    type Usage = "unknown" | "alarm" | "ring" | "notification" | "communication" |
                 "touch" | "media" | "physical_feedback" | "simulate_reality";

    /**
     * 振动属性
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    interface VibrateAttribute {
        id?: number, /** 马达id，默认为0 */
        usage: Usage, /** 振动用途 */
    }

    /**
     * 固定时长振动效果
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    interface VibrateTime {
        type: "time",
        duration: number /** 单位ms */
    }

    /**
     * 预置振动类型振动效果
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    interface VibratePreset {
        type: "preset";
        effectId: string, /** 预置类型振动 */
        count: number /** 重复次数 */
    }

    /**
     * 振动效果
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    type VibrateEffect = VibrateTime | VibratePreset;

    /**
     * 触发振动
     * @syscap SystemCapability.Sensors.MiscDevice
     * @permission ohos.permission.VIBRATE
     * @since 9
     */
    function vibrate(effect: VibrateEffect, attribute: VibrateAttribute, callback?: AsyncCallback<void>): void;
    function vibrate(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>;

    /**
     * 是否支持马达振动
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    function isSupportvibrate(callback: AsyncCallback<boolean>): void;
    function isSupportvibrate(): Promise<boolean>;

    /**
     * 是否支持effectId
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    function isSupportEffectId(effectId: string, callback?: AsyncCallback<boolean>): void;
    function isSupportEffectId(effectId: string): Promise<boolean>;
}

export default vibrator;