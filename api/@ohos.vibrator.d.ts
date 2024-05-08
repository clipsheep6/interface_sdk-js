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
 * @file
 * @kit SensorServiceKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * This module provides the capability to control motor vibration.
 *
 * @namespace vibrator
 * @syscap SystemCapability.Sensors.MiscDevice
 * @since 8
 */
/**
 * This module provides the capability to control motor vibration.
 *
 * @namespace vibrator
 * @syscap SystemCapability.Sensors.MiscDevice
 * @atomicservice
 * @since 11
 */
declare namespace vibrator {
  /**
   * The trigger motor vibrates for a specified length of time.
   *
   * @permission ohos.permission.VIBRATE
   * @param { number } duration Indicate the duration of the motor vibration.
   * @param { AsyncCallback<void> } callback The callback of vibrate.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   * @deprecated since 9
   * @useinstead vibrator#startVibration
   */
  function vibrate(duration: number, callback?: AsyncCallback<void>): void;

  /**
   * The trigger motor vibrates for a specified length of time.
   *
   * @permission ohos.permission.VIBRATE
   * @param { number } duration Indicate the duration of the motor vibration.
   * @returns { Promise<void> } Promise used to return the result.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   * @deprecated since 9
   * @useinstead vibrator#startVibration
   */
  function vibrate(duration: number): Promise<void>;

  /**
   * The trigger motor vibrates for the specified effect of the preset.
   *
   * @permission ohos.permission.VIBRATE
   * @param { EffectId } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @returns { Promise<void> } Promise used to return the result.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   * @deprecated since 9
   * @useinstead vibrator#startVibration
   */
  function vibrate(effectId: EffectId): Promise<void>;

  /**
   * The trigger motor vibrates for the specified effect of the preset.
   *
   * @permission ohos.permission.VIBRATE
   * @param { EffectId } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @param { AsyncCallback<void> } callback The callback of vibrate.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   * @deprecated since 9
   * @useinstead vibrator#startVibration
   */
  function vibrate(effectId: EffectId, callback?: AsyncCallback<void>): void;

  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
   * @param { AsyncCallback<void> } callback - The callback of startVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}
   * @param { AsyncCallback<void> } callback - The callback of startVibration
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 801 - Capability not supported
   * @throws { BusinessError } 14600101 - Device operation failed
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
  function startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>): void;

  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
  function startVibration(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>;

  /**
   * Stop the vibrator from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  function stopVibration(stopMode: VibratorStopMode): Promise<void>;

  /**
   * Stop the vibrator from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode - Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @param { AsyncCallback<void> } callback - The callback of stopVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  function stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>): void;

  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { AsyncCallback<void> } callback - The callback of stopVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { AsyncCallback<void> } callback - The callback of stopVibration.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
  function stopVibration(callback: AsyncCallback<void>): void;

  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  /**
   * Stop any type of vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
  function stopVibration(): Promise<void>;

  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @param { AsyncCallback<boolean> } callback The callback of isSupportEffect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  function isSupportEffect(effectId: string, callback: AsyncCallback<boolean>): void;

  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @returns { Promise<boolean> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  function isSupportEffect(effectId: string): Promise<boolean>;

  /**
   * Stop the motor from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @returns { Promise<void> } Promise used to return the result.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   * @deprecated since 9
   * @useinstead vibrator#stopVibration
   */
  function stop(stopMode: VibratorStopMode): Promise<void>;

  /**
   * Stop the motor from vibrating.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibratorStopMode } stopMode Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
   * @param { AsyncCallback<void> } callback The callback of stop.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   * @deprecated since 9
   * @useinstead vibrator#stopVibration
   */
  function stop(stopMode: VibratorStopMode, callback?: AsyncCallback<void>): void;

  /**
   * Preset vibration effect string.
   * 
   * @enum { string }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   */
  enum EffectId {
  /**
   * Describes the vibration effect of the vibrator when a user adjusts the timer.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   */
    EFFECT_CLOCK_TIMER = 'haptic.clock.timer'
  }

  /**
   * Vibrator vibration stop mode.
   *
   * @enum { string }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   */
  enum VibratorStopMode {
  /**
   * Indicates the mode of stopping a one-shot vibration effect.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   */
    VIBRATOR_STOP_MODE_TIME = 'time',

  /**
   * Indicates the mode of stopping a preset vibration effect.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 8
   */
    VIBRATOR_STOP_MODE_PRESET = 'preset'
  }

  /**
   * The use of vibration.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * The use of vibration.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
  type Usage = 'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' |
  'touch' | 'media' | 'physicalFeedback' | 'simulateReality';

  /**
   * The attribute of vibration.
   *
   * @interface VibrateAttribute
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * The attribute of vibration.
   *
   * @interface VibrateAttribute
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
  interface VibrateAttribute {
  /**
   * Vibrator id, default is 0.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * Vibrator id, default is 0.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
    id?: number;

  /**
   * The use of vibration.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * The use of vibration.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
    usage: Usage;
  }

  /**
   * Describes the effect of vibration.
   *
   * @type { VibrateTime | VibratePreset }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * Describes the effect of vibration.
   *
   * @type { VibrateTime | VibratePreset | VibrateFromFile }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  /**
   * Describes the effect of vibration.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
  type VibrateEffect = VibrateTime | VibratePreset | VibrateFromFile | VibratePattern;

  /**
   * Vibrate continuously for a period of time at the default intensity of the system.
   *
   * @interface VibrateTime
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  /**
   * Vibrate continuously for a period of time at the default intensity of the system.
   *
   * @interface VibrateTime
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 11
   */
  interface VibrateTime {
    /**
     * The value is "time", which triggers the motor vibration according to the specified duration.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    /**
     * The value is "time", which triggers the motor vibration according to the specified duration.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @atomicservice
     * @since 11
     */
    type: 'time';

    /**
     * The duration of the vibration, in ms.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    /**
     * The duration of the vibration, in ms.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @atomicservice
     * @since 11
     */
    duration: number; /** The duration of the vibration, in ms */
  }

  /**
   * Preset vibration type vibration effect.
   *
   * @interface VibratePreset
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 9
   */
  interface VibratePreset {
    /**
     * The value is "preset", which triggers motor vibration according to preset vibration effect.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    type: 'preset';

    /**
     * Preset type vibration.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    effectId: string;

    /**
     * The number of vibration repetitions.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    count: number;
  }

  /**
   * Custom vibration, vibrate the effect from a haptic file.
   *
   * @interface VibrateFromFile
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  interface VibrateFromFile {
  /**
   * The value is "file", which triggers motor vibration according to the vibration profile.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
    type: 'file';

  /**
   * Haptic file descriptor, some formats are supported.
   *
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
    hapticFd: HapticFileDescriptor;
  }

  /**
   * Haptic file descriptor. The caller needs to ensure that the fd is valid and
   * the offset and length are correct.
   *
   * @interface HapticFileDescriptor
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  interface HapticFileDescriptor {
    /**
     * The file descriptor of haptic effect source from file system. The caller
     * is responsible to close the file descriptor.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    fd: number;

    /**
     * The offset into the file where the data to be read, in bytes. By default,
     * the offset is zero.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    offset?: number;

    /**
     * The length in bytes of the data to be read. By default, the length is the
     * rest of bytes in the file from the offset.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    length?: number;
  }

  /**
   * 振动曲线，当振动事件类型为"continuous"时有效.
   *
   * @interface VibratorCurvePoint
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 12
   */
  interface VibratorCurvePoint {
    /**
     * 相对事件起始时间的偏移.
     *
     * @type { number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    time: number;

    /**
     * 相对事件振动强度的增益.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    intensity?: number;

    /**
     * 相对事件振动频率的变化.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    frequency?: number;
  }

  /**
   * 表示一个振动事件.
   *
   * @interface VibratorEvent
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 12
   */
  interface VibratorEvent {
    /**
     * 振动事件类型.
     *
     * @type { number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    eventType: number;

    /**
     * 振动的起始时间.
     *
     * @type { number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    time: number;

    /**
     * 振动的持续时间.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    duration?: number;

    /**
     * 振动事件强度.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    intensity?: number;

    /**
     * 振动事件频率.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    frequency?: number;

    /**
     * 表示通道编号.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    index?: number;

    /**
     * 表示振动曲线数组.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    points?: Array<VibratorCurvePoint>;
  }

  /**
   * 表示马达振动序列，每个"events"属性代表1个振动事件.
   *
   * @interface VibratorPattern
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 12
   */
  interface VibratorPattern {
    /**
     * 表示振动的相对起始时间.
     *
     * @type { Array<> }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    time: number;

    /**
     * 表示振动事件数组，每个"events"属性代表1个振动事件.
     *
     * @type { Array<> }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    events: Array<VibratorEvent>;
  }

  /**
   * 提供添加长振或短振事件的方法，并生成VibratorPattern对象.
   *
   * @interface VibratorPatternBuilder
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 12
   * @deprecated since 9
   * @useinstead vibrator#startVibration
   */
  interface VibratorPatternBuilder {
    /**
     * 添加长振事件的方法.
     *
     * @param { number } time 长振事件的起始时间.
     * @param { number } duration 长振事件的持续时间.
     * @param { number } intensity 长振事件的振动强度.
     * @param { number } frequency 长振事件的振动频率.
     * @param { VibratorCurvePoint[] } points 长振事件的振动曲线数组.
     * @returns { VibratorPatternBuilder } 返回当前VibratorPatternBuilder对象.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    addContinuousEvent(time: number,duration: number, options?:{ points?:VibratorCurvePoint[],intensity?: number,frequency?: number }):VibratorPatternBuilder;

    /**
     * 添加短振事件的方法.
     *
     * @param { number } time 短振事件的起始时间.
     * @param { number } frequency 短振事件的振动频率.
     * @param { number } intensity 短振事件的振动强度.
     * @returns { VibratorPatternBuilder } 返回当前VibratorPatternBuilder对象.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    addTransientEvent(time: number, frequency: number, intensity?: number): VibratorPatternBuilder;

    /**
     * 构建组合短振或长振事件振动序列的方法.
     *
     * @returns { VibratorPattern } 返回VibratorPattern对象.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    build(): VibratorPattern;

    /**
     * 释放相关资源的方法.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    release(): void;
  }

  /**
   * 以自定义振动效果触发马达振动.
   *
   * @interface VibratePattern
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 12
   */
  interface VibratePattern {
    /**
     * 取值为"pattern", 根据自定义振动模式触发马达振动.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    type: 'pattern';

    /**
     * 自定义马达振动事件序列，build()方法返回的VibratorPattern对象.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 12
     */
    patternBuilder: VibratorPattern;
  }
}

export default vibrator;
