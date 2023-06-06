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
 * @namespace intelligentVoice
 * @since 10
 */
declare namespace intelligentVoice {
  /**
   * Obtains an {@link IntelligentVoiceManager} instance.
   * @returns IntelligentVoiceManager object.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
   */
  function getIntelligentVoiceManager(): IntelligentVoiceManager;

  /**
   * Implements intelligent voice management.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  interface IntelligentVoiceManager {
    /**
     * Obtains capability information.
     * @returns array of supported IntelligentVoiceEngineType.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    getCapabilityInfo(): Array<IntelligentVoiceEngineType>;
    /**
     * Subscribes to mark reached events. When the state of intelligent voice service changes,
     * the callback is invoked.
     * @param callback Callback invoked when the event is triggered.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    on(type: 'serviceChange', callback: Callback<ServiceChangeType>): void;
  }

  /**
   * Enumerates service change type.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  enum ServiceChangeType {
    /**
     * Service unavailable.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    SERVICE_UNAVAILABLE = 0,
  }

  /**
   * Enumerates intelligent voice engine type.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  enum IntelligentVoiceEngineType {
    /**
     * Enroll engine.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    ENROLL_ENGINE_TYPE = 0,
    /**
     * Wakeup engine.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    WAKEUP_ENGINE_TYPE = 1,
    /**
     * Update engine.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    UPDATE_ENGINE_TYPE = 2,
  }

  /**
   * Describes enroll intelligent voice engine.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  interface EnrollIntelligentVoiceEngineDescriptor {
    /**
     * Wakeup phrase.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    wakeupPhrase: string;
  }

  /**
   * Describes wakeup intelligent voice engine.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  interface WakeupIntelligentVoiceEngineDescriptor {
    /**
     * Need ap algorithm engine.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    needApAlgEngine: boolean;
    /**
     * Wakeup phrase.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    wakeupPhrase: string;
  }

  /**
   * Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the EnrollIntelligentVoiceEngine instance.
   * @param descriptor enroll intelligent voice engine descriptor.
   * @param callback Callback used to return the EnrollIntelligentVoiceEngine instance.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
   */
  function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor, callback: AsyncCallback<EnrollIntelligentVoiceEngine>): void;

  /**
   * Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses a promise to return the EnrollIntelligentVoiceEngine instance.
   * @param descriptor enroll intelligent voice engine descriptor.
   * @param Promise used to return the EnrollIntelligentVoiceEngine instance.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
   */
  function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor): Promise<EnrollIntelligentVoiceEngine>;

  /**
   * Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the WakeupIntelligentVoiceEngine instance.
   * @param descriptor wakeup intelligent voice engine descriptor.
   * @param callback Callback used to return the WakeupIntelligentVoiceEngine instance.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
   */
  function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor, callback: AsyncCallback<WakeupIntelligentVoiceEngine>): void;

  /**
   * Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses a promise to return the WakeupIntelligentVoiceEngine instance.
   * @param descriptor wakeup intelligent voice engine descriptor.
   * @param Promise used to return the WakeupIntelligentVoiceEngine instance.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
   */
  function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor): Promise<WakeupIntelligentVoiceEngine>;

  /**
   * Describes enroll engine config.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  interface EnrollEngineConfig {
    /**
     * Language that enroll engine supports.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    language: string;
    /**
     * Region that enroll engine supports.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    region: string;
  }

  /**
   * Enumerates sensibility type.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  enum SensibilityType {
    /**
     * Low sensibility.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    LOW_SENSIBILITY = 1,
    /**
     * Middle sensibility.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    MIDDLE_SENSIBILITY = 2,
    /**
     * High sensibility.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    HIGH_SENSIBILITY = 3,
  }

  /**
   * Describes wakeup hap information.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  interface WakeupHapInfo {
    /**
     * Bundle name.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    bundleName: string;
    /**
     * Ability name.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    abilityName: string;
  }

  /**
   * Enumerates enroll intelligent voice event type.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  enum EnrollIntelligentVoiceEventType {
    /**
     * Enroll None.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_EVENT_ENROLL_NONE = 0,
    /**
     * Init done.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_EVENT_ENROLL_INIT_DONE = 1,
    /**
     * Enroll complete.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_EVENT_ENROLL_COMPLETE = 2,
    /**
     * Commit enroll complete.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_EVENT_COMMIT_ENROLL_COMPLETE = 3,
  }

  /**
   * Enumerates wakeup intelligent voice event type.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  enum WakeupIntelligentVoiceEventType {
    /**
     * Wakeup None.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_EVENT_WAKEUP_NONE = 0,
    /**
     * Recognize complete.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_EVENT_RECOGNIZE_COMPLETE = 1,
  }

  /**
   * Enumerates intelligent voice error code.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  enum IntelligentVoiceErrorCode {
    /**
     * Success.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_SUCCESS = 0,
    /**
     * Invalid params.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_INVALID_PARAMS = 22700101,
    /**
     * Init failed.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_INIT_FAILED = 22700102,
    /**
     * Enroll failed.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_ENROLL_FAILED = 22700103,
    /**
     * Commit enroll failed.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_COMMIT_ENROLL_FAILED = 22700104,
    /**
     * Recognize failed.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    INTELLIGENT_VOICE_RECOGNIZE_FAILED = 22700105,
  }

  /**
   * Describes enrol intelligent voice engine callback information.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  interface EnrollIntelligentVoiceEngineCallbackInfo {
    /**
     * Enroll event id.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    eventId: EnrollIntelligentVoiceEventType;
    /**
     * Error code.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    errCode: IntelligentVoiceErrorCode;
    /**
     * Describes enroll event context.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    context: string;
  }

  /**
   * Describes wakeup intelligent voice engine callback information.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  interface WakeupIntelligentVoiceEngineCallbackInfo {
    /**
     * Wakeup event id.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    eventId: WakeupIntelligentVoiceEventType;
    /**
     * Error code.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    errCode: IntelligentVoiceErrorCode;
    /**
     * Describes wakeup event context.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     */
    context: string;
  }

  /**
   * Implements enroll intelligent voice engine.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  interface EnrollIntelligentVoiceEngine {
    /**
     * Obtains the supported regions, This method uses an asynchronous callback to return the query result.
     * @param callback Callback used to return the supported regions.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    getSupportedRegions(callback: AsyncCallback<Array<string>>): void;
    /**
     * Obtains the supported regions, This method uses a promise to return the query result.
     * @returns Promise used to return the supported regions.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    getSupportedRegions(): Promise<Array<string>>;
    /**
     * Initials the engine, This method uses an asynchronous callback to return the result.
     * @param config enroll engine configuration.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    init(config: EnrollEngineConfig, callback: AsyncCallback<EnrollIntelligentVoiceEngineCallbackInfo>): void;
    /**
     * Initials the engine, This method uses a promise to return the result.
     * @param config enroll engine configuration.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    init(config: EnrollEngineConfig): Promise<EnrollIntelligentVoiceEngineCallbackInfo>;
    /**
     * Starts the engine, This method uses an asynchronous callback to return the result.
     * @param isLast indicates if it is the last time to start.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    start(isLast: boolean, callback: AsyncCallback<EnrollIntelligentVoiceEngineCallbackInfo>): void;
    /**
     * Starts the engine, This method uses a promise to return the result.
     * @param isLast indicates if it is the last time to start.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    start(isLast: boolean): Promise<EnrollIntelligentVoiceEngineCallbackInfo>;
    /**
     * Stops the engine, This method uses an asynchronous callback to return the result.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops the engine, This method uses a promise to return the result.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    stop(): Promise<void>;
    /**
     * commit enroll, This method uses an asynchronous callback to return the result.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    commit(callback: AsyncCallback<EnrollIntelligentVoiceEngineCallbackInfo>): void;
    /**
     * commit enroll, This method uses a promise to return the result.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    commit(): Promise<EnrollIntelligentVoiceEngineCallbackInfo>;
    /**
     * Sets wakeup hap information, This method uses an asynchronous callback to return the result.
     * @param info wakeup hap information.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setWakeupHapInfo(info: WakeupHapInfo, callback: AsyncCallback<void>): void;
    /**
     * Sets wakeup hap information, This method uses a promise to return the result.
     * @param info wakeup hap information.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setWakeupHapInfo(info: WakeupHapInfo): Promise<void>;
    /**
     * Sets sensibility, This method uses an asynchronous callback to return the result.
     * @param sensibility sensibility to set.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setSensibility(sensibility: SensibilityType, callback: AsyncCallback<void>): void;
    /**
     * Sets sensibility, This method uses a promise to return the result.
     * @param sensibility sensibility to set.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setSensibility(sensibility: SensibilityType): Promise<void>;
    /**
     * Sets an intelligent voice parameter. This method uses an asynchronous callback to return the result.
     * @param key Key of the intelligent voice parameter to set.
     * @param value Value of the intelligent voice parameter to set.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Sets an intelligent voice parameter. This method uses a promise to return the result.
     * @param key Key of the intelligent voice parameter to set.
     * @param value Value of the intelligent voice parameter to set.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setParameter(key: string, value: string): Promise<void>;
    /**
     * Obtains the value of an intelligent voice parameter. This method uses an asynchronous callback to return the query result.
     * @param key Key of the intelligent voice parameter whose value is to be obtained.
     * @param callback Callback used to return the value of the intelligent voice parameter.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    getParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * Obtains the value of an intelligent voice parameter. This method uses an asynchronous callback to return the query result.
     * @param key Key of the intelligent voice parameter whose value is to be obtained.
     * @returns Promise used to return the value of the intelligent voice parameter.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    getParameter(key: string): Promise<string>;
    /**
     * Releases the engine, This method uses an asynchronous callback to return the result.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the engine, This method uses a promise to return the result.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    release(): Promise<void>;
  }

  /**
   * Implements wakeup intelligent voice engine.
   * @since 10
   * @syscap SystemCapability.Ai.IntelligentVoice.Core
   */
  interface WakeupIntelligentVoiceEngine {
    /**
     * Obtains the supported regions, This method uses an asynchronous callback to return the query result.
     * @param callback Callback used to return the supported regions.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    getSupportedRegions(callback: AsyncCallback<Array<string>>): void;
    /**
     * Obtains the supported regions, This method uses a promise to return the query result.
     * @returns Promise used to return the supported regions.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    getSupportedRegions(): Promise<Array<string>>;
    /**
     * Sets wakeup hap information, This method uses an asynchronous callback to return the result.
     * @param info wakeup hap information.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setWakeupHapInfo(info: WakeupHapInfo, callback: AsyncCallback<void>): void;
    /**
     * Sets wakeup hap information, This method uses a promise to return the result.
     * @param info wakeup hap information.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setWakeupHapInfo(info: WakeupHapInfo): Promise<void>;
    /**
     * Sets sensibility, This method uses an asynchronous callback to return the result.
     * @param sensibility sensibility to set.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setSensibility(sensibility: SensibilityType, callback: AsyncCallback<void>): void;
    /**
     * Sets sensibility, This method uses a promise to return the result.
     * @param sensibility sensibility to set.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setSensibility(sensibility: SensibilityType): Promise<void>;
    /**
     * Sets an intelligent voice parameter. This method uses an asynchronous callback to return the result.
     * @param key Key of the intelligent voice parameter to set.
     * @param value Value of the intelligent voice parameter to set.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Sets an intelligent voice parameter. This method uses a promise to return the result.
     * @param key Key of the intelligent voice parameter to set.
     * @param value Value of the intelligent voice parameter to set.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    setParameter(key: string, value: string): Promise<void>;
    /**
     * Obtains the value of an intelligent voice parameter. This method uses an asynchronous callback to return the query result.
     * @param key Key of the intelligent voice parameter whose value is to be obtained.
     * @param callback Callback used to return the value of the intelligent voice parameter.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    getParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * Obtains the value of an intelligent voice parameter. This method uses an asynchronous callback to return the query result.
     * @param key Key of the intelligent voice parameter whose value is to be obtained.
     * @returns Promise used to return the value of the intelligent voice parameter.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    getParameter(key: string): Promise<string>;
    /**
     * Releases the engine, This method uses an asynchronous callback to return the result.
     * @param callback Callback used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the engine, This method uses a promise to return the result.
     * @returns Promise used to return the result.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    release(): Promise<void>;
    /**
     * Subscribes wakeup intelligent voice events. When wakeup intelligent voice events reach,
     * the callback is invoked.
     * @param callback Callback invoked when the event is triggered.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    on(type: 'wakeupIntelligentVoiceEvent', callback: Callback<WakeupIntelligentVoiceEngineCallbackInfo>): void;
    /**
     * Unsubscribes wakeup intelligent voice events.
     * @since 10
     * @syscap SystemCapability.Ai.IntelligentVoice.Core
     * @permission ohos.permission.MANAGER_INTELLIGENT_VOICE
     */
    off(type: 'wakeupIntelligentVoiceEvent');
  }
}

export default intelligentVoice;