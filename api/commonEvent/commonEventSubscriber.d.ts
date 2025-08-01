/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file The subscriber of common event
 * @kit BasicServicesKit
 */

/*** if arkts 1.1 */
import { AsyncCallback } from './../@ohos.base';
import { CommonEventSubscribeInfo } from './commonEventSubscribeInfo';
/*** endif */
/*** if arkts 1.2 */
import { AsyncCallback } from './../@ohos.base';
import { CommonEventSubscribeInfo } from './commonEventSubscribeInfo';
/*** endif */

/**
 * The CommonEventSubscriber module provides APIs for describing the common event subscriber.
 *
 * @interface CommonEventSubscriber
 * @syscap SystemCapability.Notification.CommonEvent
 * @since 7
 */
/**
 * The CommonEventSubscriber module provides APIs for describing the common event subscriber.
 *
 * @interface CommonEventSubscriber
 * @syscap SystemCapability.Notification.CommonEvent
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface CommonEventSubscriber {
  /**
   * Obtains the result code of an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the result code of an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCode(callback: AsyncCallback<number>): void;

  /**
   * Obtains the result code of an ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<number> } Promise used to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the result code of an ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<number> } Promise used to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCode(): Promise<number>;

  /**
   * Obtains the result code of an ordered common event.
   *
   * @returns { number } Common event code.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Obtains the result code of an ordered common event.
   *
   * @returns { number } Common event code.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getCodeSync(): number;

  /**
   * Sets the result code of an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { number } code - Common event code.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result code of an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { number } code - Common event code.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCode(code: number, callback: AsyncCallback<void>): void;

  /**
   * Sets the result code of an ordered common event. This API uses a promise to return the result.
   *
   * @param { number } code - Common event code.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result code of an ordered common event. This API uses a promise to return the result.
   *
   * @param { number } code - Common event code.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCode(code: number): Promise<void>;

  /**
   * Sets the result code of an ordered common event.
   *
   * @param { number } code - Common event code.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Sets the result code of an ordered common event.
   *
   * @param { number } code - Common event code.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCodeSync(code: number): void;

  /**
   * Obtains the result data of an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the result data of an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getData(callback: AsyncCallback<string>): void;

  /**
   * Obtains the result data of an ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the result data of an ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getData(): Promise<string>;

  /**
   * Obtains the result data of an ordered common event.
   *
   * @returns { string } Common event data.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Obtains the result data of an ordered common event.
   *
   * @returns { string } Common event data.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getDataSync(): string;

  /**
   * Sets the result data for an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } data - Common event data.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result data for an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { string } data - Common event data.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setData(data: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the result data for an ordered common event. This API uses a promise to return the result.
   *
   * @param { string } data - Common event data.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result data for an ordered common event. This API uses a promise to return the result.
   *
   * @param { string } data - Common event data.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setData(data: string): Promise<void>;

  /**
   * Sets the result data for an ordered common event.
   *
   * @param { string } data - Common event data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Sets the result data for an ordered common event.
   *
   * @param { string } data - Common event data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setDataSync(data: string): void;

  /**
   * Sets the result code and data of an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { number } code - Common event code.
   * @param { string } data - Common event data.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result code and data of an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { number } code - Common event code.
   * @param { string } data - Common event data.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCodeAndData(code: number, data: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the result code and data of an ordered common event. This API uses a promise to return the result.
   *
   * @param { number } code - Common event code.
   * @param { string } data - Common event data.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Sets the result code and data of an ordered common event. This API uses a promise to return the result.
   *
   * @param { number } code - Common event code.
   * @param { string } data - Common event data.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCodeAndData(code: number, data: string): Promise<void>;

  /**
   * Sets the result code and data of an ordered common event.
   *
   * @param { number } code - Common event code.
   * @param { string } data - Common event data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Sets the result code and data of an ordered common event.
   *
   * @param { number } code - Common event code.
   * @param { string } data - Common event data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  setCodeAndDataSync(code: number, data: string): void;

  /**
   * Checks whether the current common event is an ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. Returns true if the common event is an ordered one;
   *                                              returns false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isOrderedCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current common event is an ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. Returns true if the common event is an ordered one; returns false otherwise.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isOrderedCommonEvent(): Promise<boolean>;

  /**
   * Checks whether the current common event is an ordered common event.
   *
   * @returns { boolean } Returns true if the common event is an ordered one; returns false otherwise.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isOrderedCommonEventSync(): boolean;

  /**
   * Checks whether a common event is a sticky one. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. Returns true if the common event is a sticky one; returns false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isStickyCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a common event is a sticky one. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. Returns true if the common event is a sticky one; returns false otherwise.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isStickyCommonEvent(): Promise<boolean>;

  /**
   * Checks whether a common event is a sticky one.
   *
   * @returns { boolean } Returns true if the common event is a sticky one; returns false otherwise.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  isStickyCommonEventSync(): boolean;

  /**
   * Aborts an ordered common event when used with finishCommonEvent. After the abort, the common event is not sent to the
   * next subscriber. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  abortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Aborts an ordered common event when used with finishCommonEvent. After the abort, the common event is not sent to the
   * next subscriber. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  abortCommonEvent(): Promise<void>;

  /**
   * Aborts an ordered common event when used with finishCommonEvent. After the abort, the common event is not sent to the next subscriber.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  abortCommonEventSync(): void;

  /**
   * Clears the aborted state of an ordered common event when used with finishCommonEvent.
   * After the clearance, the common event is sent to the next subscriber. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  clearAbortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Clears the aborted state of an ordered common event when used with finishCommonEvent.
   * After the clearance, the common event is sent to the next subscriber. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  clearAbortCommonEvent(): Promise<void>;

  /**
   * Clears the aborted state of an ordered common event when used with finishCommonEvent.After the clearance, the common event is sent to the next subscriber.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  clearAbortCommonEventSync(): void;

  /**
   * Checks whether this ordered common event should be aborted. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. Returns true if the ordered common event
   *                                              is in the aborted state; returns false otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getAbortCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether this ordered common event should be aborted. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Checks whether this ordered common event should be aborted. This API uses a promise to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getAbortCommonEvent(): Promise<boolean>;

  /**
   * Checks whether this ordered common event should be aborted.
   *
   * @returns { boolean } Returns true if the ordered common event is in the aborted state; returns false otherwise.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getAbortCommonEventSync(): boolean;

  /**
   * Obtains the subscriber information. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<CommonEventSubscribeInfo> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the subscriber information. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<CommonEventSubscribeInfo> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void;

  /**
   * Obtains the subscriber information. This API uses a promise to return the result.
   *
   * @returns { Promise<CommonEventSubscribeInfo> } Promise used to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   */
  /**
   * Obtains the subscriber information. This API uses a promise to return the result.
   *
   * @returns { Promise<CommonEventSubscribeInfo> } Promise used to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getSubscribeInfo(): Promise<CommonEventSubscribeInfo>;

  /**
   * Obtains the subscriber information.
   *
   * @returns { CommonEventSubscribeInfo } Subscriber information.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10
   */
  /**
   * Obtains the subscriber information.
   *
   * @returns { CommonEventSubscribeInfo } Subscriber information.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  getSubscribeInfoSync(): CommonEventSubscribeInfo;

  /**
   * Finishes this ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  finishCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Finishes this ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  finishCommonEvent(): Promise<void>;
}
