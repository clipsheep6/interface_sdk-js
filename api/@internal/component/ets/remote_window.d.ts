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
import {windowAnimationManager.WindowAnimationTarget as WindowAnimationTarget} from "../../@ohos.animation.windowAnimationManager";
/**
 * Create RemoteWindow.
 * @since 7
 */
interface RemoteWindowInterface {
  /**
   * Window Animation Target.
   * @since 7
   */
  (target?: WindowAnimationTarget): RemoteWindowAttribute;
}

/**
 * Inheritance CommonMethod Set Styles
 * @since 7
 */
declare class RemoteWindowAttribute extends CommonMethod<RemoteWindowAttribute> {}

declare const RemoteWindow: RemoteWindowInterface;
declare const RemoteWindowInstance: RemoteWindowAttribute;
