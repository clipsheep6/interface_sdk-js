/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * Provides interfaces to trace a task for performance measure, the logs can be capture by the
 * perfmonitor cmdline available on the device.
 *
 * <p>This interfaces trace the start, end, and value changes of key processes that last for at least 3 ms.
 *
 * <p>Example:
 * import "@ohos.perfMonitor.d.ts"
 * To start a scene monitor that is expected to complete within 5 ms:
 * <pre>{@code
 * performanceMonitor.start(string, ActionType, string);
 * //scene finished
 * performanceMonitor.end(string);
 * }</pre>
 *
 * <p>Each {@code start} matches one {@code finishTrace}, and they must have the same sceneid
 * and taskId.
 *
 * @useinstead ohos.hiPerfMonitor 
 * @since 10
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 */
declare namespace performanceMonitor {
  /**
   * Declares inputevent type.
   *
   * @enum { number }
   * @since 10
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   */
  export enum ActionType {
    /**
     * InputEvent type user pointer down.
     * @since 10
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     */
    LAST_DOWN = 0,

    /**
     * InputEvent type user pointer up.
     * @since 10
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     */
    LAST_UP = 1,

    /**
     * InputEvent type user firt move after down event.
     * @since 10
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     */
    FIRST_MOVE = 2
  }

  /**
   * Start monitor app scene marking it as the start of a scene, can with the expected completion time between
   * start and end.
   *
   * @since 10
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @param scene Indicates the scene name.
   * @param startInputType Indicates the scene input event type.
   * @param notes Indicates the app expected info delivered.
   */
  function start(scene: string, startInputType: ActionType, notes?: string): void;   

  /**
   * End monitor app scene and marks it as the end of a scene.
   *
   * @since 10
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @param scene Indicates the scene name. It must be the same with the {@code scene} of start.
   */
  function end(scene: string): void;
}
export default performanceMonitor;