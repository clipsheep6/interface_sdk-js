/*
 * Copyright (C) 2021-2022 Huawei Device Co., Ltd.
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

import {AsyncCallback, Callback} from "./basic";

/**
 * Provides methods related to call management.
 *
 * @since 6
 * @syscap SystemCapability.Telephony.CallManager
 */
declare namespace call {
  /**
   * Makes a call.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for getting the result of the dial.
   * Returns {@code true} if the call request is successful; returns {@code false} otherwise.
   * Note that the value {@code true} indicates only the successful processing of the request; it does not mean
   * that the call is or can be connected.
   * @permission ohos.permission.PLACE_CALL
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, callback: AsyncCallback<boolean>): void;

  /**
   * Makes a call.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { DialOptions } options - Indicates additional information carried in the call.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for getting the result of the dial.
   * Returns {@code true} if the call request is successful; returns {@code false} otherwise.
   * Note that the value {@code true} indicates only the successful processing of the request; it does not mean
   * that the call is or can be connected.
   * @permission ohos.permission.PLACE_CALL
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, options: DialOptions, callback: AsyncCallback<boolean>): void;

  /**
   * Makes a call.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { DialOptions } options - Indicates additional information carried in the call.
   * @returns { Promise<boolean> } Returns the result of the dial.
   * Returns {@code true} if the call request is successful; returns {@code false} otherwise.
   * Note that the value {@code true} indicates only the successful processing of the request; it does not mean
   * that the call is or can be connected.
   * @permission ohos.permission.PLACE_CALL
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, options?: DialOptions): Promise<boolean>;

  /**
   * Makes a call.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { AsyncCallback<void> } callback - The callback of dialCall.
   * @permission ohos.permission.PLACE_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
   function dialCall(phoneNumber: string, callback: AsyncCallback<void>): void;

  /**
   * Makes a call.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { DialCallOptions } options - Indicates additional information carried in the call.
   * @param { AsyncCallback<void> } callback - The callback of dialCall.
   * @permission ohos.permission.PLACE_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
   function dialCall(phoneNumber: string, options: DialCallOptions, callback: AsyncCallback<void>): void;

  /**
   * Makes a call.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { DialCallOptions } options - Indicates additional information carried in the call.
   * @returns { Promise<void> } The promise returned by the dialCall.
   * @permission ohos.permission.PLACE_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
   function dialCall(phoneNumber: string, options?: DialCallOptions): Promise<void>;

  /**
   * Go to the dial screen and the called number is displayed.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { AsyncCallback<void> } callback - The callback of makeCall.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @since 7
   */
  function makeCall(phoneNumber: string, callback: AsyncCallback<void>): void;

  /**
   * Go to the dial screen and the called number is displayed.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @returns { Promise<void> } The promise returned by the makeCall.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @since 7
   */
  function makeCall(phoneNumber: string): Promise<void>;

  /**
   * Checks whether a call is ongoing.
   *
   * @param { AsyncCallback<boolean> } callback - The callback of hasCall.
   * Returns {@code true} if at least one call is not in the {@link CallState#CALL_STATE_IDLE} state; returns {@code false} otherwise.
   */
  function hasCall(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a call is ongoing.
   *
   * @returns { Promise<boolean> } Returns {@code true} if at least one call is not in the {@link CallState#CALL_STATE_IDLE}
   * state; returns {@code false} otherwise.
   */
  function hasCall(): Promise<boolean>;

  /**
   * Obtains the call state.
   *
   * <p>If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.
   * If at least one call is in the active, hold, or dialing state, the system returns
   * {@code CallState#CALL_STATE_OFFHOOK}.
   * In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.
   *
   * @param { AsyncCallback<CallState> } callback - Indicates the callback for getting the call state.
   */
  function getCallState(callback: AsyncCallback<CallState>): void;

  /**
   * Obtains the call state.
   *
   * <p>If an incoming call is ringing or waiting, the system returns {@code CallState#CALL_STATE_RINGING}.
   * If at least one call is in the active, hold, or dialing state, the system returns
   * {@code CallState#CALL_STATE_OFFHOOK}.
   * In other cases, the system returns {@code CallState#CALL_STATE_IDLE}.
   *
   * @returns { Promise<CallState> } Returns the call state.
   */
  function getCallState(): Promise<CallState>;

  /**
   * Stops the ringtone.
   *
   * <p>If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function.
   *
   * @param { AsyncCallback<void> } callback - The callback of muteRinger.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function muteRinger(callback: AsyncCallback<void>): void;

  /**
   * Stops the ringtone.
   *
   * <p>If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function.
   *
   * @returns { Promise<void> } The promise returned by the muteRinger.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function muteRinger(): Promise<void>;

  /**
   * Checks whether a device supports voice calls.
   *
   * <p>The system checks whether the device has the capability to initiate a circuit switching (CS) or IP multimedia
   * subsystem domain (IMS) call on a telephone service network. If the device supports only packet switching
   * (even if the device supports OTT calls), {@code false} is returned.
   *
   * @returns { boolean } Returns {@code true} if the device supports voice calls; returns {@code false} otherwise.
   * @since 7
   */
  function hasVoiceCapability(): boolean;

  /**
   * Checks whether a phone number is on the emergency number list.
   *
   * @param { string } phoneNumber - Indicates the phone number to check.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for isEmergencyPhoneNumber.
   * Returns {@code true} if the phone number is on the emergency number list. Returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @since 7
   */
  function isEmergencyPhoneNumber(phoneNumber: string, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a phone number is on the emergency number list.
   *
   * @param { string } phoneNumber - Indicates the phone number to check.
   * @param { EmergencyNumberOptions } options - Indicates the additional information for emergency numbers.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for isEmergencyPhoneNumber. 
   * Returns {@code true} if the phone number is on the emergency number list. Returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @since 7
   */
  function isEmergencyPhoneNumber(phoneNumber: string, options: EmergencyNumberOptions, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a phone number is on the emergency number list.
   *
   * @param { string } phoneNumber - Indicates the phone number to check.
   * @param { EmergencyNumberOptions } options - Indicates the additional information for emergency numbers.
   * @returns { Promise<boolean> } Returns {@code true} if the phone number is on the emergency number list.
   * Returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @since 7
   */
  function isEmergencyPhoneNumber(phoneNumber: string, options?: EmergencyNumberOptions): Promise<boolean>;

  /**
   * Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,
   * a phone number is in the format of country code (if any) + 3-digit service provider code
   * + 4-digit area code + 4-digit subscriber number. After the formatting,
   * each part is separated by a space.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { AsyncCallback<string> } callback - Indicates the callback to obtain a formatted phone number; returns an empty string if the input phone number is invalid.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @since 7
   */
  function formatPhoneNumber(phoneNumber: string, callback: AsyncCallback<string>): void;

  /**
   * Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,
   * a phone number is in the format of country code (if any) + 3-digit service provider code
   * + 4-digit area code + 4-digit subscriber number. After the formatting,
   * each part is separated by a space.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { NumberFormatOptions } options - Indicates the countryCode option.
   * @param { AsyncCallback<string> } callback - Indicates the callback to obtain a formatted phone number; returns an empty string if the input phone number is invalid.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @since 7
   */
  function formatPhoneNumber(phoneNumber: string, options: NumberFormatOptions, callback: AsyncCallback<string>): void;

  /**
   * Formats a phone number according to the Chinese Telephone Code Plan. Before the formatting,
   * a phone number is in the format of country code (if any) + 3-digit service provider code
   * + 4-digit area code + 4-digit subscriber number. After the formatting,
   * each part is separated by a space.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { NumberFormatOptions } options - Indicates the countryCode option.
   * @returns { Promise<string> } Returns the phone number after being formatted.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @since 7
   */
  function formatPhoneNumber(phoneNumber: string, options?: NumberFormatOptions): Promise<string>;

  /**
   * Formats a phone number into an E.164 representation.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { string } countryCode - Indicates a two-digit country code defined in ISO 3166-1.
   * @param { AsyncCallback<string> } callback - Returns an E.164 number; returns an empty string if the input phone number is invalid.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @since 7
   */
  function formatPhoneNumberToE164(phoneNumber: string, countryCode: string, callback: AsyncCallback<string>): void;

  /**
   * Formats a phone number into an E.164 representation.
   *
   * @param { string } phoneNumber - Indicates the phone number to format.
   * @param { string } countryCode - Indicates a two-digit country code defined in ISO 3166-1.
   * @returns { Promise<string> } Returns an E.164 number; returns an empty string if the input phone number is invalid.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @since 7
   */
  function formatPhoneNumberToE164(phoneNumber: string, countryCode: string): Promise<string>;

  /**
   * Answers the incoming call.
   *
   * @param { number } callId - Indicates the identifier of the call to answer.
   * @param { AsyncCallback<void> } callback - The callback of answerCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function answerCall(callId: number, callback: AsyncCallback<void>): void;

  /**
   * Answers the incoming call.
   *
   * @param { number } callId - Indicates the identifier of the call to answer.
   * @returns { Promise<void> } The promise returned by the answerCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function answerCall(callId?: number): Promise<void>;

  /**
   * Answers the incoming call without callId.
   *
   * @param { AsyncCallback<void> } callback - The callback of answerCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function answerCall(callback: AsyncCallback<void>): void;

  /**
   * Hang up the foreground call.
   *
   * @param { number } callId - Indicates the identifier of the call to hangup.
   * @param { AsyncCallback<void> } callback - The callback of hangUpCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function hangUpCall(callId: number, callback: AsyncCallback<void>): void;

  /**
   * Hang up the foreground call.
   *
   * @param { number } callId - Indicates the identifier of the call to hangup.
   * @returns { Promise<void> } The promise returned by the hangUpCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function hangUpCall(callId?: number): Promise<void>;

  /**
   * Hang up the foreground call without callId.
   *
   * @param { AsyncCallback<void> } callback - The callback of hangUpCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function hangUpCall(callback: AsyncCallback<void>): void;

  /**
   * Reject the incoming call.
   *
   * @param { number } callId - Indicates the identifier of the call to reject.
   * @param { AsyncCallback<void> } callback - The callback of rejectCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function rejectCall(callId: number, callback: AsyncCallback<void>): void;

    /**
   * Reject the incoming call.
   *
   * @param { number } callId - Indicates the identifier of the call to reject.
   * @param { RejectMessageOptions } options - Indicates the text message to reject.
   * @param { AsyncCallback<void> } callback - The callback of rejectCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function rejectCall(callId: number, options: RejectMessageOptions, callback: AsyncCallback<void>): void;

    /**
   * Reject the incoming call.
   *
   * @param { number } callId - Indicates the identifier of the call to reject.
   * @param { RejectMessageOptions } options - Indicates the text message to reject.
   * @returns { Promise<void> } The promise returned by the rejectCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function rejectCall(callId?: number, options?: RejectMessageOptions): Promise<void>;

  /**
   * Reject the incoming call without callId.
   *
   * @param { AsyncCallback<void> } callback - The callback of rejectCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function rejectCall(callback: AsyncCallback<void>): void;

  /**
   * Reject the incoming call without callId.
   *
   * @param { RejectMessageOptions } options - Indicates the text message to reject.
   * @param { AsyncCallback<void> } callback - The callback of rejectCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function rejectCall(options: RejectMessageOptions, callback: AsyncCallback<void>): void;

  /**
   * Keep a call on hold.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of holdCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function holdCall(callId: number, callback: AsyncCallback<void>): void;

  /**
   * Keep a call on hold.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the holdCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function holdCall(callId: number): Promise<void>;

  /**
   * Cancel call hold status.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of unHoldCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function unHoldCall(callId: number, callback: AsyncCallback<void>): void;

  /**
   * Keep a call on hold.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the unHoldCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function unHoldCall(callId: number): Promise<void>;

  /**
   * Switch call.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of switchCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function switchCall(callId: number, callback: AsyncCallback<void>): void;

  /**
   * Switch call.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the switchCall.
   * @permission ohos.permission.ANSWER_CALL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function switchCall(callId: number): Promise<void>;

  /**
   * Merge calls, merge two calls into conference calls.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of combineConference.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function combineConference(callId: number, callback: AsyncCallback<void>): void;

  /**
   * Merge calls, merge two calls into conference calls.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the combineConference.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function combineConference(callId: number): Promise<void>;

  /**
   * Get the main call Id.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<number> } callback - Indicates the callback for getting the main call id.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function getMainCallId(callId: number, callback: AsyncCallback<number>): void;

  /**
   * Get the main call Id.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @returns { Promise<number> } Returns the main call id.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function getMainCallId(callId: number): Promise<number>;

  /**
   * Get the list of sub-call Ids.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<Array<string>> } callback - Indicates the callback for getting the list of sub call ids.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function getSubCallIdList(callId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get the list of sub-call Ids.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @returns { Promise<Array<string>> } Returns the list of sub call ids.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function getSubCallIdList(callId: number): Promise<Array<string>>;

  /**
   * Get the call Id list of the conference.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<Array<string>> } callback - Indicates the callback for getting the call id list of conference calls.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function getCallIdListForConference(callId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get the call Id list of the conference.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @returns { Promise<Array<string>> } Returns the call id list of conference calls.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function getCallIdListForConference(callId: number): Promise<Array<string>>;

  /**
   * Get call waiting status.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<CallWaitingStatus> } callback - Indicates the callback for getting the call waiting status.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function getCallWaitingStatus(slotId: number, callback: AsyncCallback<CallWaitingStatus>): void;

  /**
   * Get call waiting status.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<CallWaitingStatus> } Returns the callback for getting the call waiting status.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function getCallWaitingStatus(slotId: number): Promise<CallWaitingStatus>;

  /**
   * Set call waiting.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { boolean } activate - Indicates whether to activate or call wait.
   * @param { AsyncCallback<void> } callback - The callback of setCallWaiting.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function setCallWaiting(slotId: number, activate: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set call waiting.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { boolean } activate - Indicates whether to activate or call wait.
   * @returns { Promise<void> } The promise returned by the setCallWaiting.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function setCallWaiting(slotId: number, activate: boolean): Promise<void>;

  /**
   * Start DTMF(Dual Tone Multi Frequency).
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { string } character - Indicates the characters sent.
   * @param { AsyncCallback<void> } callback - The callback of startDTMF.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function startDTMF(callId: number, character: string, callback: AsyncCallback<void>): void;

  /**
   * Start DTMF(Dual Tone Multi Frequency).
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { string } character - Indicates the characters sent.
   * @returns { Promise<void> } The promise returned by the startDTMF.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function startDTMF(callId: number, character: string): Promise<void>;

  /**
   * Stop DTMF(Dual Tone Multi Frequency).
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of stopDTMF.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function stopDTMF(callId: number, callback: AsyncCallback<void>): void;

  /**
   * Stop DTMF(Dual Tone Multi Frequency).
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the stopDTMF.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function stopDTMF(callId: number): Promise<void>;

  /**
   * Judge whether the emergency call is in progress.
   *
   * @param { AsyncCallback<boolean> } callback - The callback of isInEmergencyCall.
   * Returns {@code true} if the call is in emergency; returns {@code false} otherwise.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function isInEmergencyCall(callback: AsyncCallback<boolean>): void;

  /**
   * Judge whether the emergency call is in progress.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the call is in emergency; returns {@code false} otherwise.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function isInEmergencyCall(): Promise<boolean>;

  /**
   * Subscribe to the callDetailsChange event.
   *
   * @param { string } type - callDetailsChange.
   * @param { Callback<CallAttributeOptions> } callback - Indicates the callback for getting the result of call details.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function on(type: 'callDetailsChange', callback: Callback<CallAttributeOptions>): void;

  /**
   * Unsubscribe from the callDetailsChange event.
   *
   * @param { string } type - callDetailsChange.
   * @param { Callback<CallAttributeOptions> } callback - Indicates the callback to unsubscribe from the callDetailsChange event.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  function off(type: 'callDetailsChange', callback?: Callback<CallAttributeOptions>): void;

  /**
   * Subscribe to the callEventChange event.
   *
   * @param { string } type - callEventChange.
   * @param { Callback<CallEventOptions> } callback - Indicates the callback for getting the call event id.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function on(type: 'callEventChange', callback: Callback<CallEventOptions>): void;

  /**
   * Unsubscribe from the callEventChange event.
   *
   * @param { string } type - callEventChange.
   * @param { Callback<CallEventOptions> } callback - Indicates the callback to unsubscribe from the callEventChange event.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function off(type: 'callEventChange', callback?: Callback<CallEventOptions>): void;

  /**
   * Subscribe to the callDisconnectedCause event.
   *
   * @param { string } type - callDisconnectedCause.
   * @param { Callback<MmiCodeResults> } callback - Indicates the callback for getting the call disconnection reason.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function on(type: 'callDisconnectedCause', callback: Callback<DisconnectedDetails>): void;

  /**
   * Unsubscribe from the callDisconnectedCause event.
   *
   * @param { string } type - callDisconnectedCause.
   * @param { Callback<MmiCodeResults> } callback - Indicates the callback used to cancel the registration monitoring for obtaining the call end reason.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function off(type: 'callDisconnectedCause', callback?: Callback<DisconnectedDetails>): void;

  /**
   * Subscribe to the mmiCodeResult event.
   *
   * @param { string } type - mmiCodeResult.
   * @param { Callback<MmiCodeResults> } callback - Indicates the callback for getting the result of MMI code.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function on(type: 'mmiCodeResult', callback: Callback<MmiCodeResults>): void;

  /**
   * Unsubscribe from the mmiCodeResult event.
   *
   * @param { string } type - mmiCodeResult.
   * @param { Callback<MmiCodeResults> } callback - Indicates the callback used to cancel getting mmicode registered listening.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function off(type: 'mmiCodeResult', callback?: Callback<MmiCodeResults>): void;

  /**
   * Judge whether to allow another new call.
   *
   * @param { AsyncCallback<boolean> } callback - The callback of isNewCallAllowed.
   * Returns {@code true} If the device currently allows new calls; returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function isNewCallAllowed(callback: AsyncCallback<boolean>): void;

  /**
   * Judge whether to allow another new call.
   *
   * @returns { Promise<boolean> } Returns {@code true} If the device currently allows new calls; returns {@code false} otherwise.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function isNewCallAllowed(): Promise<boolean>;

  /**
   * Split conference call.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { AsyncCallback<void> } callback - The callback of separateConference.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function separateConference(callId: number, callback: AsyncCallback<void>): void;

  /**
   * Split conference call.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @returns { Promise<void> } The promise returned by the separateConference.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function separateConference(callId: number): Promise<void>;

  /**
   * Get call barring status.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallRestrictionType } type - Indicates which type of call restriction to obtain.
   * @param { AsyncCallback<RestrictionStatus> } callback - Indicates the callback for getting the call restriction status.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function getCallRestrictionStatus(slotId: number, type: CallRestrictionType, callback: AsyncCallback<RestrictionStatus>): void;

  /**
   * Get call barring status.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallRestrictionType } type - Indicates which type of call restriction to obtain.
   * @returns { Promise<RestrictionStatus> } Returns the call restriction status.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function getCallRestrictionStatus(slotId: number, type: CallRestrictionType): Promise<RestrictionStatus>;

  /**
   * Set call barring status.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallRestrictionInfo } info - Indicates the set call restriction information.
   * @param { AsyncCallback<void> } callback - The callback of setCallRestriction.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function setCallRestriction(slotId: number, info: CallRestrictionInfo, callback: AsyncCallback<void>): void;

  /**
   * Set call barring status.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallRestrictionInfo } info - Indicates the set call restriction information.
   * @returns { Promise<void> } The promise returned by the setCallRestriction.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function setCallRestriction(slotId: number, info: CallRestrictionInfo): Promise<void>;

  /**
   * Get call forwarding information.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallTransferType } type - Indicates which type of call forwarding to obtain.
   * @param { AsyncCallback<CallTransferResult> } callback - Indicates the callback for getting the call forwarding status.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function getCallTransferInfo(slotId: number, type: CallTransferType, callback: AsyncCallback<CallTransferResult>): void;

  /**
   * Get call forwarding information.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallTransferType } type - Indicates which type of call forwarding to obtain.
   * @returns { Promise<CallTransferResult> } Returns the call forwarding status.
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function getCallTransferInfo(slotId: number, type: CallTransferType): Promise<CallTransferResult>;

  /**
   * Set call forwarding information.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallTransferInfo } info - Indicates the set call forwarding information.
   * @param { AsyncCallback<void> } callback - The callback of setCallTransfer.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function setCallTransfer(slotId: number, info: CallTransferInfo, callback: AsyncCallback<void>): void;

  /**
   * Set call forwarding information.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { CallTransferInfo } info - Indicates the set call forwarding information.
   * @returns { Promise<void> } The promise returned by the setCallTransfer.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function setCallTransfer(slotId: number, info: CallTransferInfo): Promise<void>;

  /**
   * Judge whether there is a ringing call.
   *
   * @param { AsyncCallback<boolean> } callback - The callback of isRinging.
   * Returns {@code true} if the device is ringing; returns {@code false} otherwise.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function isRinging(callback: AsyncCallback<boolean>): void;

  /**
   * Judge whether there is a ringing call.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the device is ringing; returns {@code false} otherwise.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function isRinging(): Promise<boolean>;

  /**
   * Set mute during a call.
   *
   * @param { AsyncCallback<void> } callback - The callback of setMuted.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function setMuted(callback: AsyncCallback<void>): void;

  /**
   * Set mute during a call.
   *
   * @returns { Promise<void> } The promise returned by the setMuted.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function setMuted(): Promise<void>;

  /**
   * Unmute during a call.
   *
   * @param { AsyncCallback<void> } callback - The callback of cancelMuted.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function cancelMuted(callback: AsyncCallback<void>): void;

  /**
   * Unmute during a call.
   *
   * @returns { Promise<void> } The promise returned by the cancelMuted.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function cancelMuted(): Promise<void>;

  /**
   * Set the audio device.
   *
   * @param { AudioDevice } device - Indicates the device of audio.
   * @param { AsyncCallback<void> } callback - The callback of setAudioDevice.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function setAudioDevice(device: AudioDevice, callback: AsyncCallback<void>): void;

  /**
   * Set the audio device with options.
   *
   * @param { AudioDevice } device - Indicates the device of audio.
   * @param { AudioDeviceOptions } options - Indicates additional information, such as address of bluetooth.
   * @param { AsyncCallback<void> } callback - The callback of setAudioDevice.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setAudioDevice(device: AudioDevice, options: AudioDeviceOptions, callback: AsyncCallback<void>): void;

  /**
   * Set the audio device with options.
   *
   * @param { AudioDevice } device - Indicates the device of audio.
   * @param { AudioDeviceOptions } options - Indicates additional information, such as address of bluetooth.
   * @returns { Promise<void> } The promise returned by the setAudioDevice.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setAudioDevice(device: AudioDevice, options?: AudioDeviceOptions): Promise<void>;

  /**
   * Join the conference call.
   *
   * @param { number } mainCallId - Indicates the identifier of the main call.
   * @param { Array<string> } callNumberList - Indicates a call list.
   * @param { AsyncCallback<void> } callback - The callback of joinConference.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function joinConference(mainCallId: number, callNumberList: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Join the conference call.
   *
   * @param { number } mainCallId - Indicates the identifier of the main call.
   * @param { Array<string> } callNumberList - Indicates a call list.
   * @returns { Promise<void> } The promise returned by the joinConference.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function joinConference(mainCallId: number, callNumberList: Array<string>): Promise<void>;

  /**
   * Update Ims call mode.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { ImsCallMode } mode - Indicates the mode of the ims call.
   * @param { AsyncCallback<void> } callback - The callback of updateImsCallMode.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function updateImsCallMode(callId: number, mode: ImsCallMode, callback: AsyncCallback<void>): void;

  /**
   * Update Ims call mode.
   *
   * @param { number } callId - Indicates the identifier of the call.
   * @param { ImsCallMode } mode - Indicates the mode of the ims call.
   * @returns { Promise<void> } The promise returned by the updateImsCallMode.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function updateImsCallMode(callId: number, mode: ImsCallMode): Promise<void>;

  /**
   * Turn on Ims switch.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of enableImsSwitch.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function enableImsSwitch(slotId: number, callback: AsyncCallback<void>): void;

  /**
   * Turn on Ims switch.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the enableImsSwitch.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function enableImsSwitch(slotId: number): Promise<void>;

  /**
   * Turn off Ims switch.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of disableImsSwitch.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function disableImsSwitch(slotId: number, callback: AsyncCallback<void>): void;

  /**
   * Turn off Ims switch.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the disableImsSwitch.
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function disableImsSwitch(slotId: number): Promise<void>;

  /**
   * Judge whether the Ims switch is enabled.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<boolean> } callback - The callback of isImsSwitchEnabled.
   * Returns {@code true} If the ims switch is on; returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function isImsSwitchEnabled(slotId: number, callback: AsyncCallback<boolean>): void;

  /**
   * Judge whether the Ims switch is enabled.
   *
   * @param { number } slotId - Indicates the card slot index number,
   * ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<boolean> } Returns {@code true} If the ims switch is on; returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function isImsSwitchEnabled(slotId: number): Promise<boolean>;

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum ImsCallMode {
    CALL_MODE_AUDIO_ONLY = 0,
    CALL_MODE_SEND_ONLY,
    CALL_MODE_RECEIVE_ONLY,
    CALL_MODE_SEND_RECEIVE,
    CALL_MODE_VIDEO_PAUSED,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum AudioDevice {
    DEVICE_EARPIECE,
    DEVICE_SPEAKER,
    DEVICE_WIRED_HEADSET,
    DEVICE_BLUETOOTH_SCO,
    DEVICE_MIC,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum CallRestrictionType {
    RESTRICTION_TYPE_ALL_INCOMING = 0,
    RESTRICTION_TYPE_ALL_OUTGOING,
    RESTRICTION_TYPE_INTERNATIONAL,
    RESTRICTION_TYPE_INTERNATIONAL_EXCLUDING_HOME,
    RESTRICTION_TYPE_ROAMING_INCOMING,
    RESTRICTION_TYPE_ALL_CALLS,
    RESTRICTION_TYPE_OUTGOING_SERVICES,
    RESTRICTION_TYPE_INCOMING_SERVICES,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export interface CallTransferInfo {
    /**
     * Phone number.
     *
     * @since 8
     */
    transferNum: string;

    /**
     * Call forwarding type.
     *
     * @since 8
     */
    type: CallTransferType;

    /**
     * Call forwarding setting type.
     *
     * @since 8
     */
    settingType: CallTransferSettingType;

    /**
     * Start time hours.
     *
     * @since 9
     */
    startHour?: number;

    /**
     * Start time minutes.
     *
     * @since 9
     */
    startMinute?: number;

    /**
     * End time hours.
     *
     * @since 9
     */
    endHour?: number;

    /**
     * End time minutes.
     *
     * @since 9
     */
    endMinute?: number;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum CallTransferType {
    TRANSFER_TYPE_UNCONDITIONAL = 0,
    TRANSFER_TYPE_BUSY,
    TRANSFER_TYPE_NO_REPLY,
    TRANSFER_TYPE_NOT_REACHABLE,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum CallTransferSettingType {
    CALL_TRANSFER_DISABLE = 0,
    CALL_TRANSFER_ENABLE = 1,
    CALL_TRANSFER_REGISTRATION = 3,
    CALL_TRANSFER_ERASURE = 4,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  export interface CallAttributeOptions {
    accountNumber: string;
    speakerphoneOn: boolean;
    accountId: number;
    videoState: VideoStateType;
    startTime: number;
    isEcc: boolean;
    callType: CallType;
    callId: number;
    callState: DetailedCallState;
    conferenceState: ConferenceState;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  export enum ConferenceState {
    TEL_CONFERENCE_IDLE = 0,
    TEL_CONFERENCE_ACTIVE,
    TEL_CONFERENCE_DISCONNECTING,
    TEL_CONFERENCE_DISCONNECTED,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  export enum CallType {
    TYPE_CS = 0, // CS
    TYPE_IMS = 1, // IMS
    TYPE_OTT = 2, // OTT
    TYPE_ERR_CALL = 3, // OTHER
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  export enum VideoStateType {
    TYPE_VOICE = 0, // Voice
    TYPE_VIDEO, // Video
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  export enum DetailedCallState {
    CALL_STATUS_ACTIVE = 0,
    CALL_STATUS_HOLDING,
    CALL_STATUS_DIALING,
    CALL_STATUS_ALERTING,
    CALL_STATUS_INCOMING,
    CALL_STATUS_WAITING,
    CALL_STATUS_DISCONNECTED,
    CALL_STATUS_DISCONNECTING,
    CALL_STATUS_IDLE,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export interface CallRestrictionInfo {
    type: CallRestrictionType;
    password: string;
    mode: CallRestrictionMode;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum CallRestrictionMode {
    RESTRICTION_MODE_DEACTIVATION = 0,
    RESTRICTION_MODE_ACTIVATION,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export interface CallEventOptions {
    eventId: CallAbilityEventId,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum CallAbilityEventId {
    EVENT_DIAL_NO_CARRIER = 1,
    EVENT_INVALID_FDN_NUMBER,
  }

  export enum CallState {
    /**
     * Indicates an invalid state, which is used when the call state fails to be obtained.
     */
    CALL_STATE_UNKNOWN = -1,

    /**
     * Indicates that there is no ongoing call.
     */
    CALL_STATE_IDLE = 0,

    /**
     * Indicates that an incoming call is ringing or waiting.
     */
    CALL_STATE_RINGING = 1,

    /**
     * Indicates that a least one call is in the dialing, active, or hold state, and there is no new incoming call
     * ringing or waiting.
     */
    CALL_STATE_OFFHOOK = 2
  }

  export interface DialOptions {
    /**
     * boolean means whether the call to be made is a video call. The value {@code false} indicates a voice call.
     */
    extras?: boolean;

    /**
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    accountId?: number;

    /**
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    videoState?: VideoStateType;

    /**
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    dialScene?: DialScene;

    /**
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    dialType?: DialType;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 9
   */
   export interface DialCallOptions {
    /**
     * @systemapi Hide this for inner system use.
     */
    accountId?: number;
    /**
     * @systemapi Hide this for inner system use.
     */
    videoState?: VideoStateType;
    /**
     * @systemapi Hide this for inner system use.
     */
    dialScene?: DialScene;
    /**
     * @systemapi Hide this for inner system use.
     */
    dialType?: DialType;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum DialScene {
    CALL_NORMAL = 0,
    CALL_PRIVILEGED = 1,
    CALL_EMERGENCY = 2,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum DialType {
    DIAL_CARRIER_TYPE = 0,
    DIAL_VOICE_MAIL_TYPE = 1,
    DIAL_OTT_TYPE = 2,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  export interface RejectMessageOptions {
    messageContent: string;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export interface CallTransferResult {
    /**
     * Call forwarding status.
     *
     * @since 8
     */
    status: TransferStatus;

    /**
     * Call forwarding phone number.
     *
     * @since 8
     */
    number: string;

    /**
     * Start time hours.
     *
     * @since 9
     */
    startHour: number;

    /**
     * Start time minutes.
     *
     * @since 9
     */
    startMinute: number;

    /**
     * End time hours.
     *
     * @since 9
     */
    endHour: number;

    /**
     * End time minutes.
     *
     * @since 9
     */
    endMinute: number;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  export enum CallWaitingStatus {
    /**
     * Indicates that call waiting is not enabled.
     *
     * @since 7
     */
    CALL_WAITING_DISABLE = 0,

    /**
     * Indicates that call waiting is enabled.
     *
     * @since 7
     */
    CALL_WAITING_ENABLE = 1
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum RestrictionStatus {
    /**
     * Indicates that call barring is not enabled.
     *
     * @since 8
     */
    RESTRICTION_DISABLE = 0,

    /**
     * Indicates that call barring is enabled.
     *
     * @since 8
     */
    RESTRICTION_ENABLE = 1
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum TransferStatus {
    /**
     * Indicates that call forwarding is not enabled.
     *
     * @since 8
     */
    TRANSFER_DISABLE = 0,

    /**
     * Indicates that call forwarding is enabled.
     *
     * @since 8
     */
    TRANSFER_ENABLE = 1
  }

  /**
   * @since 7
   */
  export interface EmergencyNumberOptions {
    /**
     * Indicates sim card slot number.
     *
     * @since 7
     */
    slotId?: number;
  }

  /**
   * @since 7
   */
  export interface NumberFormatOptions {
    /**
     * Indicates the country code.
     *
     * @since 7
     */
    countryCode?: string;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export interface AudioDeviceOptions {
    /**
     * Indicates the bluetooth device address.
     *
     * @since 9
     */
    bluetoothAddress?: string;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export interface MmiCodeResults {
    /**
     * Indicates the result of MMI code.
     *
     * @since 9
     */
    result: MmiCodeResult;

    /**
     * Indicates the message of MMI code.
     *
     * @since 9
     */
    message: string;
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export enum MmiCodeResult {
    /** Indicates the result of MMI code with successfully.
     *
     * @since 9
     */
    MMI_CODE_SUCCESS = 0,

    /** Indicates the result of MMI code with failed.
     *
     * @since 9
     */
    MMI_CODE_FAILED = 1
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  export enum DisconnectedReason {
    /**
     * Unassigned number.
     *
     * @since 8
     */
    UNASSIGNED_NUMBER = 1,

    /**
     * No route to destination.
     *
     * @since 8
     */
    NO_ROUTE_TO_DESTINATION = 3,

    /**
     * Channel unacceptable.
     *
     * @since 8
     */
    CHANNEL_UNACCEPTABLE = 6,

    /**
     * Operator determined barring.
     *
     * @since 8
     */
    OPERATOR_DETERMINED_BARRING = 8,

    /**
     * Call completed elsewhere.
     *
     * @since 9
     */
    CALL_COMPLETED_ELSEWHERE = 13,

    /**
     * Normal call clearing.
     *
     * @since 8
     */
    NORMAL_CALL_CLEARING = 16,

    /**
     * User busy.
     *
     * @since 8
     */
    USER_BUSY = 17,

    /**
     * No user responding.
     *
     * @since 8
     */
    NO_USER_RESPONDING = 18,

    /**
     * User alerting, no answer.
     *
     * @since 8
     */
    USER_ALERTING_NO_ANSWER = 19,

    /**
     * Call rejected.
     *
     * @since 8
     */
    CALL_REJECTED = 21,

    /**
     * Number changed.
     *
     * @since 8
     */
    NUMBER_CHANGED = 22,

    /**
     * Call rejected due to feature at the destination.
     *
     * @since 9
     */
    CALL_REJECTED_DUE_TO_FEATURE_AT_THE_DESTINATION = 24,

    /**
     * Pre-emption.
     *
     * @since 9
     */
    FAILED_PRE_EMPTION = 25,

    /**
     * Non selected user clearing.
     *
     * @since 9
     */
    NON_SELECTED_USER_CLEARING = 26,

    /**
     * Destination out of order.
     *
     * @since 8
     */
    DESTINATION_OUT_OF_ORDER = 27,

    /**
     * Invalid number format.
     *
     * @since 8
     */
    INVALID_NUMBER_FORMAT = 28,

    /**
     * Facility rejected.
     *
     * @since 9
     */
    FACILITY_REJECTED = 29,

    /**
     * Response to status enquiry.
     *
     * @since 9
     */
    RESPONSE_TO_STATUS_ENQUIRY = 30,

    /**
     * Normal, unspecified.
     *
     * @since 9
     */
    NORMAL_UNSPECIFIED = 31,

    /**
     * No circuit/channel available.
     *
     * @since 9
     */
    NO_CIRCUIT_CHANNEL_AVAILABLE = 34,

    /**
     * Network out of order.
     *
     * @since 8
     */
    NETWORK_OUT_OF_ORDER = 38,

    /**
     * Temporary failure.
     *
     * @since 8
     */
    TEMPORARY_FAILURE = 41,

    /**
     * Switching equipment congestion.
     *
     * @since 9
     */
    SWITCHING_EQUIPMENT_CONGESTION = 42,

    /**
     * Access information discarded.
     *
     * @since 9
     */
    ACCESS_INFORMATION_DISCARDED = 43,

    /**
     * Requested circuit/channel not available.
     *
     * @since 9
     */
    REQUEST_CIRCUIT_CHANNEL_NOT_AVAILABLE = 44,

    /**
     * Resources unavailable unspecified.
     *
     * @since 9
     */
    RESOURCES_UNAVAILABLE_UNSPECIFIED = 47,

    /**
     * Quality of service unavailable.
     *
     * @since 9
     */
    QUALITY_OF_SERVICE_UNAVAILABLE = 49,

    /**
     * Requested facility not subscribed.
     *
     * @since 9
     */
    REQUESTED_FACILITY_NOT_SUBSCRIBED = 50,

    /**
     * Incoming calls barred within the CUG.
     *
     * @since 9
     */
    INCOMING_CALLS_BARRED_WITHIN_THE_CUG = 55,

    /**
     * Bearer capability not authorized.
     *
     * @since 9
     */
    BEARER_CAPABILITY_NOT_AUTHORIZED = 57,

    /**
     * Bearer capability not presently available.
     *
     * @since 9
     */
    BEARER_CAPABILITY_NOT_PRESENTLY_AVAILABLE = 58,

    /**
     * Service or option not available, unspecified.
     *
     * @since 9
     */
    SERVICE_OR_OPTION_NOT_AVAILABLE_UNSPECIFIED = 63,

    /**
     * Bearer service not implemented.
     *
     * @since 9
     */
    BEARER_SERVICE_NOT_IMPLEMENTED = 65,

    /**
     * ACM equal to or greater than the maximum value.
     *
     * @since 9
     */
     ACM_EQUALTO_OR_GREATER_THAN_THE_MAXIMUM_VALUE = 68,

    /**
     * Requested facility not implemented.
     *
     * @since 9
     */
    REQUESTED_FACILITY_NOT_IMPLEMENTED = 69,

    /**
     * Only restricted digital info BC available.
     *
     * @since 9
     */
    ONLY_RESTRICTED_DIGITAL_INFO_BEARER_CAPABILITY_IS_AVAILABLE = 70,

    /**
     * Service or option not implemented, unspecified.
     *
     * @since 9
     */
    SERVICE_OR_OPTION_NOT_IMPLEMENTED_UNSPECIFIED = 79,

    /**
     * Invalid transaction identifier value.
     *
     * @since 9
     */
    INVALID_TRANSACTION_IDENTIFIER_VALUE = 81,

    /**
     * User not member of CUG.
     *
     * @since 9
     */
    USER_NOT_MEMBER_OF_CUG = 87,

    /**
     * Incompatible destination.
     *
     * @since 9
     */
    INCOMPATIBLE_DESTINATION = 88,

    /**
     * Invalid transit network selection.
     *
     * @since 9
     */
    INVALID_TRANSIT_NETWORK_SELECTION = 91,

    /**
     * Semantically incorrect message.
     *
     * @since 9
     */
    SEMANTICALLY_INCORRECT_MESSAGE = 95,

    /**
     * Invalid mandatory information.
     *
     * @since 9
     */
    INVALID_MANDATORY_INFORMATION = 96,

    /**
     * Msg type non-existent or not implemented.
     *
     * @since 9
     */
    MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED = 97,

    /**
     * Msg type not compatible with protocol state.
     *
     * @since 9
     */
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 98,

    /**
     * IE non-existent or not implemented.
     *
     * @since 9
     */
    INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED = 99,

    /**
     * Conditional IE error.
     *
     * @since 9
     */
    CONDITIONAL_IE_ERROR = 100,

    /**
     * Message not compatible with protocol state.
     *
     * @since 9
     */
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 101,

    /**
     * Recovery on timer expiry timer number.
     *
     * @since 9
     */
    RECOVERY_ON_TIMER_EXPIRED = 102,

    /**
     * Protocol error, unspecified.
     *
     * @since 9
     */
    PROTOCOL_ERROR_UNSPECIFIED = 111,

    /**
     * Interworking, unspecified.
     *
     * @since 9
     */
    INTERWORKING_UNSPECIFIED = 127,

    /**
     * Call barred.
     *
     * @since 9
     */
    CALL_BARRED = 240,

    /**
     * FDN blocked.
     *
     * @since 9
     */
    FDN_BLOCKED = 241,

    /**
     * IMSI in VLR is unknown.
     *
     * @since 9
     */
    IMSI_UNKNOWN_IN_VLR = 242,

    /**
     * IMEI not accepted.
     *
     * @since 9
     */
    IMEI_NOT_ACCEPTED = 243,

    /**
     * Dial modified to USSD.
     *
     * @since 9
     */
    DIAL_MODIFIED_TO_USSD = 244,

    /**
     * Dial modified to SS.
     *
     * @since 9
     */
    DIAL_MODIFIED_TO_SS = 245,

    /**
     * Dial modified to dial.
     *
     * @since 9
     */
    DIAL_MODIFIED_TO_DIAL = 246,

    /**
     * Radio off.
     *
     * @since 9
     */
    RADIO_OFF = 247,

    /**
     * Out of service.
     *
     * @since 9
     */
    OUT_OF_SERVICE = 248,

    /**
     * Invalid SIM.
     *
     * @since 9
     */
    NO_VALID_SIM = 249,

    /**
     * Radio internal error.
     *
     * @since 9
     */
    RADIO_INTERNAL_ERROR = 250,

    /**
     * Network response timeout.
     *
     * @since 9
     */
    NETWORK_RESP_TIMEOUT = 251,

    /**
     * Network reject.
     *
     * @since 9
     */
    NETWORK_REJECT = 252,

    /**
     * Radio access failure.
     *
     * @since 9
     */
    RADIO_ACCESS_FAILURE = 253,

    /**
     * Radio link failure.
     *
     * @since 9
     */
    RADIO_LINK_FAILURE = 254,

    /**
     * Radio link lost.
     *
     * @since 9
     */
    RADIO_LINK_LOST = 255,

    /**
     * Radio uplink failure.
     *
     * @since 9
     */
    RADIO_UPLINK_FAILURE = 256,

    /**
     * Radio setup failure.
     *
     * @since 9
     */
    RADIO_SETUP_FAILURE = 257,

    /**
     * Radio release normal.
     *
     * @since 9
     */
    RADIO_RELEASE_NORMAL = 258,

    /**
     * Radio release abnormal.
     *
     * @since 9
     */
    RADIO_RELEASE_ABNORMAL = 259,

    /**
     * Access class blocked.
     *
     * @since 9
     */
    ACCESS_CLASS_BLOCKED = 260,

    /**
     * Network detach.
     *
     * @since 9
     */
    NETWORK_DETACH = 261,

    /**
     * Invalid parameter.
     *
     * @since 8
     */
    INVALID_PARAMETER = 1025,

    /**
     * Sim not exit.
     *
     * @since 8
     */
    SIM_NOT_EXIT = 1026,

    /**
     * Sim pin need.
     *
     * @since 8
     */
    SIM_PIN_NEED = 1027,

    /**
     * Call Not allow.
     *
     * @since 8
     */
    CALL_NOT_ALLOW = 1029,

    /**
     * Sim invalid.
     *
     * @since 8
     */
    SIM_INVALID = 1045,

    /**
     * Unknown error.
     *
     * @since 8
     */
    UNKNOWN = 1279,
  }

  /**
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export interface DisconnectedDetails {
    /**
     * Indicates the reason for ending the call.
     */
    reason: DisconnectedReason;
    /**
     * Indicates the message for ending the call.
     */
    message: string;
  }
}

export default call;
