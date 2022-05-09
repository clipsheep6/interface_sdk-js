/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * Window AnimationManager.
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 */
declare namespace windowAnimationManager {
  function setController(controller: WindowAnimationController): void;

  export enum WindowAnimationTargetType {
    NORMAL_APP = 0,
    LAUNCHER,
    SCREEN_LOCK,
    SYSTEM_UI,
  }

  export interface RRect {
    left: number;

    top: number;

    width: number;

    height: number;

    radius: number;
  }

  export interface WindowAnimationTarget {
    readonly type: WindowAnimationTargetType;

    readonly bundleName: string;

    readonly abilityName: string;

    readonly windowBounds: RRect;

    readonly windowId: number;
  }

  export interface WindowAnimationFinishedCallback {
    onAnimationFinish(): void;
  }

  export interface WindowAnimationController {
    onTransition(fromWindow: WindowAnimationTarget, toWindow: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    onMinimizeWindow(minimizingWindow: WindowAnimationTarget, finishCallback: WindowAnimationFinishedCallback): void;

    onCloseWindow(closingWindow: WindowAnimationTarget, finishCallback: WindowAnimationFinishedCallback): void
  }
}

export default windowAnimationManager;
