/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * @namespace intellVoice
 * @since 10
 */
declare namespace intellVoice {
  /**
   * Obtains an {@link IntellVoiceManager} instance.
   * @returns IntellVoiceManager object.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   * @permission ohos.permission.MANAGER_INTELL_VOICE
   */
  function getIntellVoiceManager(): IntellVoiceManager;

  /**
   * Implements intell voice management.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  interface IntellVoiceManager {
    /**
     * Obtains capability information.
     * @returns array of supported IntellVoiceEngineType.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    getCapabilityInfo(): Array<IntellVoiceEngineType>;
    /**
     * Subscribes to mark reached events. When the state of intell voice service changes,
     * the callback is invoked.
     * @param callback Callback invoked when the event is triggered.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    on(type: 'serviceChange', callback: Callback<ServiceChangeType>): void;
  }

  /**
   * Enumerates service change type.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  enum ServiceChangeType {
    /**
     * Service unused.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    SERVICE_UNUSABLE = 0,
  }

  /**
   * Enumerates intell voice engine type.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  enum IntellVoiceEngineType {
    /**
     * Enroll engine.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    ENROLL_ENGINE_TYPE = 0,
    /**
     * Wakeup engine.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    WAKEUP_ENGINE_TYPE = 1,
    /**
     * Update engine.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    UPDATE_ENGINE_TYPE = 2,
  }

  /**
   * Describes enroll intell voice engine.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  interface EnrollIntellVoiceEngineDescriptor {
    /**
     * Wakeup phrase.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    wakeupPhrase: string;
  }

  /**
   * Describes wakeup intell voice engine.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  interface WakeupIntellVoiceEngineDescriptor {
    /**
     * Need ap algorithm engine.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    needApAlgEngine: boolean;
    /**
     * Wakeup phrase.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    wakeupPhrase: string;
  }

  /**
   * Obtains an {@link EnrollIntellVoiceEngine} instance. This method uses an asynchronous callback to return the EnrollIntellVoiceEngine instance.
   * @param descriptor enroll intell voice engine descriptor.
   * @param callback Callback used to return the EnrollIntellVoiceEngine instance.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   * @permission ohos.permission.MANAGER_INTELL_VOICE
   */
  function createEnrollIntellVoiceEngine(descriptor: EnrollIntellVoiceEngineDescriptor, callback: AsyncCallback<EnrollIntellVoiceEngine>): void;

  /**
   * Obtains an {@link EnrollIntellVoiceEngine} instance. This method uses a promise to return the EnrollIntellVoiceEngine instance.
   * @param descriptor enroll intell voice engine descriptor.
   * @param Promise used to return the EnrollIntellVoiceEngine instance.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   * @permission ohos.permission.MANAGER_INTELL_VOICE
   */
  function createEnrollIntellVoiceEngine(descriptor: EnrollIntellVoiceEngineDescriptor): Promise<EnrollIntellVoiceEngine>;

  /**
   * Obtains an {@link WakeupIntellVoiceEngine} instance. This method uses an asynchronous callback to return the WakeupIntellVoiceEngine instance.
   * @param descriptor wakeup intell voice engine descriptor.
   * @param callback Callback used to return the WakeupIntellVoiceEngine instance.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   * @permission ohos.permission.MANAGER_INTELL_VOICE
   */
  function createWakeupIntellVoiceEngine(descriptor: WakeupIntellVoiceEngineDescriptor, callback: AsyncCallback<WakeupIntellVoiceEngine>): void;

  /**
   * Obtains an {@link WakeupIntellVoiceEngine} instance. This method uses a promise to return the WakeupIntellVoiceEngine instance.
   * @param descriptor wakeup intell voice engine descriptor.
   * @param Promise used to return the WakeupIntellVoiceEngine instance.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   * @permission ohos.permission.MANAGER_INTELL_VOICE
   */
  function createWakeupIntellVoiceEngine(descriptor: WakeupIntellVoiceEngineDescriptor): Promise<WakeupIntellVoiceEngine>;

  /**
   * Describes enroll engine config.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  interface EnrollEngineConfig {
    /**
     * Language that enroll engine supports.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    language: string;
    /**
     * Region that enroll engine supports.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    region: string;
  }

  /**
   * Enumerates sensibility type.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  enum SensibilityType {
    /**
     * Low sensibility.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    LOW_SENSIBILITY = 1,
    /**
     * Middle sensibility.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    MIDDLE_SENSIBILITY = 2,
    /**
     * High sensibility.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    HIGH_SENSIBILITY = 3,
  }

  /**
   * Describes wakeup hap information.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  interface WakeupHapInfo {
    /**
     * Bundle name.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    bundleName: string;
    /**
     * Ability name.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    abilityName: string;
  }

  /**
   * Enumerates enroll intell voice event type.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  enum EnrollIntellVoiceEventType {
    /**
     * Enroll None.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    INTELL_VOICE_EVENT_ENROLL_NONE = 0,
    /**
     * Init done.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    INTELL_VOICE_EVENT_ENROLL_INIT_DONE = 1,
    /**
     * Enroll complete.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    INTELL_VOICE_EVENT_ENROLL_COMPLETE = 2,
    /**
     * Commit enroll complete.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    INTELL_VOICE_EVENT_COMMIT_ENROLL_COMPLETE = 3,
  }

  /**
   * Enumerates wakeup intell voice event type.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  enum WakeupIntellVoiceEventType {
    /**
     * Wakeup None.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    INTELL_VOICE_EVENT_WAKEUP_NONE = 0,
    /**
     * Recognize complete.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    INTELL_VOICE_EVENT_RECOGNIZE_COMPLETE = 1,
  }

  /**
   * Enumerates intell voice error code.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  enum IntellVoiceErrorCode {
    /**
     * Success.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    INTELL_VOICE_SUCCESS = 0,
    /**
     * Init failed.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    INTELL_VOICE_INIT_FAILED = 22700101,
    /**
     * Invalid params.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    INTELL_VOICE_INVALID_PARAMS = 22700102,
  }

  /**
   * Describes enrol intell voice engine callback information.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  interface EnrollIntellVoiceEnginepCallbackInfo {
    /**
     * Enroll event id.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    eventId: EnrollIntellVoiceEventType;
    /**
     * Error code.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    errCode: IntellVoiceErrorCode;
    /**
     * Describes enroll event context.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    context: string;
  }

  /**
   * Describes wakeup intell voice engine callback information.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  interface WakeupIntellVoiceEnginepCallbackInfo {
    /**
     * Wakeup event id.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    eventId: WakeupIntellVoiceEventType;
    /**
     * Error code.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    errCode: IntellVoiceErrorCode;
    /**
     * Describes wakeup event context.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     */
    context: string;
  }

  /**
   * Implements enroll intell voice engine.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  interface EnrollIntellVoiceEngine {
    /**
     * Obtains the supported region, This method uses an asynchronous callback to return the query result.
     * @param callback Callback used to return the supported region.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    getSupportedRegion(callback: AsyncCallback<Array<string>>): void;
    /**
     * Obtains the supported region, This method uses a promise to return the query result.
     * @returns Promise used to return the supported region.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    getSupportedRegion(): Promise<Array<string>>;
    /**
     * Initials the engine, This method uses an asynchronous callback to return the result.
     * @param config enroll engine configuration.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    init(config: EnrollEngineConfig, callback: AsyncCallback<EnrollIntellVoiceEnginepCallbackInfo>): void;
    /**
     * Initials the engine, This method uses a promise to return the result.
     * @param config enroll engine configuration.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    init(config: EnrollEngineConfig): Promise<EnrollIntellVoiceEnginepCallbackInfo>;
    /**
     * Starts the engine, This method uses an asynchronous callback to return the result.
     * @param isLast indicates if it is the last time to start.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    start(isLast: boolean, callback: AsyncCallback<EnrollIntellVoiceEnginepCallbackInfo>): void;
    /**
     * Starts the engine, This method uses a promise to return the result.
     * @param isLast indicates if it is the last time to start.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    start(isLast: boolean): Promise<EnrollIntellVoiceEnginepCallbackInfo>;
    /**
     * Stops the engine, This method uses an asynchronous callback to return the result.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops the engine, This method uses a promise to return the result.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    stop(): Promise<void>;
    /**
     * commit enroll, This method uses an asynchronous callback to return the result.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    commit(callback: AsyncCallback<EnrollIntellVoiceEnginepCallbackInfo>): void;
    /**
     * commit enroll, This method uses a promise to return the result.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    commit(): Promise<EnrollIntellVoiceEnginepCallbackInfo>;
    /**
     * Sets wakeup hap information, This method uses an asynchronous callback to return the result.
     * @param info wakeup hap information.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setWakeupHapInfo(info: WakeupHapInfo, callback: AsyncCallback<void>): void;
    /**
     * Sets wakeup hap information, This method uses a promise to return the result.
     * @param info wakeup hap information.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setWakeupHapInfo(info: WakeupHapInfo): Promise<void>;
    /**
     * Sets sensibility, This method uses an asynchronous callback to return the result.
     * @param sensibility sensibility to set.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setSensibility(sensibility: SensibilityType, callback: AsyncCallback<void>): void;
    /**
     * Sets sensibility, This method uses a promise to return the result.
     * @param sensibility sensibility to set.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setSensibility(sensibility: SensibilityType): Promise<void>;
    /**
     * Sets an intell voice parameter. This method uses an asynchronous callback to return the result.
     * @param key Key of the intell voice parameter to set.
     * @param value Value of the intell voice parameter to set.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Sets an intell voice parameter. This method uses a promise to return the result.
     * @param key Key of the intell voice parameter to set.
     * @param value Value of the intell voice parameter to set.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setParameter(key: string, value: string): Promise<void>;
    /**
     * Obtains the value of an intell voice parameter. This method uses an asynchronous callback to return the query result.
     * @param key Key of the intell voice parameter whose value is to be obtained.
     * @param callback Callback used to return the value of the intell voice parameter.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    getParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * Obtains the value of an intell voice parameter. This method uses an asynchronous callback to return the query result.
     * @param key Key of the intell voice parameter whose value is to be obtained.
     * @returns Promise used to return the value of the intell voice parameter.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    getParameter(key: string): Promise<string>;
    /**
     * Releases engine, This method uses an asynchronous callback to return the result.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases engine, This method uses a promise to return the result.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    release(): Promise<void>;
  }

  /**
   * Implements wakeup intell voice engine.
   * @since 10
   * @syscap SystemCapability.Multimedia.IntellVoice.Core
   */
  interface WakeupIntellVoiceEngine {
    /**
     * Obtains the supported region, This method uses an asynchronous callback to return the query result.
     * @param callback Callback used to return the supported region.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    getSupportedRegion(callback: AsyncCallback<Array<string>>): void;
    /**
     * Obtains the supported region, This method uses a promise to return the query result.
     * @returns Promise used to return the supported region.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    getSupportedRegion(): Promise<Array<string>>;
    /**
     * Sets wakeup hap information, This method uses an asynchronous callback to return the result.
     * @param info wakeup hap information.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setWakeupHapInfo(info: WakeupHapInfo, callback: AsyncCallback<void>): void;
    /**
     * Sets wakeup hap information, This method uses a promise to return the result.
     * @param info wakeup hap information.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setWakeupHapInfo(info: WakeupHapInfo): Promise<void>;
    /**
     * Sets sensibility, This method uses an asynchronous callback to return the result.
     * @param sensibility sensibility to set.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setSensibility(sensibility: SensibilityType, callback: AsyncCallback<void>): void;
    /**
     * Sets sensibility, This method uses a promise to return the result.
     * @param sensibility sensibility to set.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setSensibility(sensibility: SensibilityType): Promise<void>;
    /**
     * Sets an intell voice parameter. This method uses an asynchronous callback to return the result.
     * @param key Key of the intell voice parameter to set.
     * @param value Value of the intell voice parameter to set.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Sets an intell voice parameter. This method uses a promise to return the result.
     * @param key Key of the intell voice parameter to set.
     * @param value Value of the intell voice parameter to set.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    setParameter(key: string, value: string): Promise<void>;
    /**
     * Obtains the value of an intell voice parameter. This method uses an asynchronous callback to return the query result.
     * @param key Key of the intell voice parameter whose value is to be obtained.
     * @param callback Callback used to return the value of the intell voice parameter.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    getParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * Obtains the value of an intell voice parameter. This method uses an asynchronous callback to return the query result.
     * @param key Key of the intell voice parameter whose value is to be obtained.
     * @returns Promise used to return the value of the intell voice parameter.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    getParameter(key: string): Promise<string>;
    /**
     * Releases engine, This method uses an asynchronous callback to return the result.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases engine, This method uses a promise to return the result.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    release(): Promise<void>;
    /**
     * Subscribes wakeup intell voice events. When wakeup intell voice events reach,
     * the callback is invoked.
     * @param callback Callback invoked when the event is triggered.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    on(type: 'wakeupIntellVoiceEvent', callback: Callback<WakeupIntellVoiceEnginepCallbackInfo>): void;
    /**
     * Unsubscribes wakeup intell voice events.
     * @since 10
     * @syscap SystemCapability.Multimedia.IntellVoice.Core
     * @permission ohos.permission.MANAGER_INTELL_VOICE
     */
    off(type: 'wakeupIntellVoiceEvent');
  }
}

export default intellVoice;