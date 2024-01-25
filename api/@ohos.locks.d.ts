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

/**
 * @typedef LockManager
 * Provides methods for requesting a new Lock object and querying for an existing Lock object.
 */
// FIXME: throws types
export interface LockManager {
  /**
   * Returns a Promise that resolves with an object containing information about held and pending locks.
   *
   * @returns {Promise<LockManagerSnapshot>} - A Promise that resolves with an object containing a snapshot of the LockManager state.
   */
  query(): Promise<LockManagerSnapshot>;
  /**
   * Requests a Lock object with parameters specifying its name and characteristics.
   *
   * @param {string} name - An identifier for the lock you want to request.
   * @param {LockGrantedCallback} callback - Method called when the lock is granted.
   * @returns {Promise<any>} - A Promise that resolves (or rejects) with the result of the callback after the lock is released, or rejects if the request is aborted.
   */
  request(name: string, callback: LockGrantedCallback): Promise<any>;
  /**
   * Requests a Lock object with parameters specifying its name and characteristics.
   *
   * @param {string} name - An identifier for the lock you want to request.
   * @param {LockOptions} options - An object describing characteristics of the lock you want to create.
   * @param {LockGrantedCallback} callback - Method called when the lock is granted.
   * @returns {Promise<any>} - A Promise that resolves (or rejects) with the result of the callback after the lock is released, or rejects if the request is aborted.
   */
  request(name: string, options: LockOptions, callback: LockGrantedCallback): Promise<any>;
}

/**
 * @typedef LockManagerSnapshot
 * An object containing a snapshot of the LockManager state.
 */
interface LockManagerSnapshot {
  /**
   * An array of LockInfo objects for held locks.
   */
  held?: LockInfo[];
  /**
   * An array of LockInfo objects for pending lock requests.
   */
  pending?: LockInfo[];
}

/**
 * @typedef LockInfo
 * An object containing information about a held or pending lock.
 */
interface LockInfo {
  /**
   * Corresponds to a unique context (frame or worker), and is the same value returned by Client's id attribute.
   */
  clientId?: string;
  /**
   * The access mode passed to LockManager.request() when the lock was requested.
   */
  mode?: LockMode;
  /**
   * The name passed to LockManager.request() when the lock was requested.
   */
  name?: string;
}

/**
 * Access Mode of Lock, either "exclusive" (the default) or "shared".
 */
type LockMode = 'exclusive' | 'shared';

/**
 * @typedef LockGrantedCallback
 * Method called when the lock is granted.
 */
interface LockGrantedCallback {
  /**
   * Usually the callback is an async function, which causes the lock to be released only when the async function has completely finished.
   *
   * @param {Lock | null} lock - The Lock object that was granted.
   * @returns {any} - The result of the callback.
   */
  (lock: Lock | null): any;
}

/**
 * @typedef Lock
 * Provides the name and mode of a lock.
 */
interface Lock {
  /**
   * Returns the access mode passed to LockManager.request() when the lock was requested. The mode is either "exclusive" (the default) or "shared".
   */
  readonly mode: LockMode;
  /**
   * Returns the name passed to LockManager.request() when the lock was requested.
   */
  readonly name: string;
}

/**
 * @typedef LockOptions
 * An object describing characteristics of the lock you want to create.
 */
interface LockOptions {
  /**
   * If true, the lock request will only be granted if it is not already held. If it cannot be granted, the callback will be invoked with null instead of a Lock instance. The default value is false.
   */
  ifAvailable?: boolean;
  /**
   * Either "exclusive" or "shared". The default value is "exclusive".
   */
  mode?: LockMode;
  /**
   * An AbortSignal (the signal property of an AbortController); if specified and the AbortController is aborted, the lock request is dropped if it was not already granted.
   */
  // FIXME
  signal?: AbortSignal;
  /**
   * If true, then any held locks with the same name will be released, and the request will be granted, preempting any queued requests for it. The default value is false.
   */
  steal?: boolean;
}

/**
 * An instance of LockManager.
 */
declare const locks: LockManager;

export default locks;
