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

import { Callback } from './basic';

/**
 * Provides methods for sending and processing in-process events.
 *
 * @since 7
 * @import inputmethod from '@ohos.events.emitter';
 * @devices phone, tablet, tv, wearable
 */
declare namespace emitter {
  /**
   * Continuously subscribe to the eventId event and callback after receiving the eventId event.
   *
   * @since 7
   */
  function on(event: InnerEvent, callback: Callback<EventData>): void;

  /**
   * A single subscription event. After receiving the event,
   * callback is called back and the current subscription is canceled.
   *
   * @since 7
   */
  function once(event: InnerEvent, callback: Callback<EventData>): void;

  /**
   * Unsubscribe the events based on the given event ID.
   *
   * @since 7
   */
  function off(eventId: number): void;

  /**
   * Sends an event to the event queue.
   *
   * @since 7
   */
  function emit(event: InnerEvent, data?: EventData): void;

  /**
   * Data carried in an event.
   *
   * @since 7
   */
  export interface EventData {
    /**
     * Data carried in an event.
     *
     * @since 7
     */
    data?: {[key: string]: any};
  }

  /**
   * Data carried in an event.
   *
   * @since 7
   */
  export interface InnerEvent {
    /**
     * Data carried in an event.
     *
     * @since 7
     */
    eventId: number;

    /**
     * Indicates the event priority. The default priority is {@link EventPriority.LOW}.
     *
     * @since 7
     */
    priority?: EventPriority;
  }

  /**
   * Defines the priority of an {@link InnerEvent}.
   *
   * @since 7
   */
  export enum EventPriority {
    /**
     * Events with this priority are dispatched immediately.
     *
     * @since 7
     */
    IMMEDIATE = 0,

    /**
     * Events with this priority are dispatched before low-priority events.
     *
     * @since 7
     */
    HIGH,

    /**
     * Default priority of an event; events with this priority are dispatched after high-priority events.
     *
     * @since 7
     */
    LOW,

    /**
     * Events with this priority are dispatched only when there are no other events to dispatch.
     *
     * @since 7
     */
    IDLE,
  }
}

export default emitter;