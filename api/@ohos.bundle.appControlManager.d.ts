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

import { AsyncCallback } from './basic';
import Want from './@ohos.application.want';

declare namespace appControlManager {
  function setDisposedStatus(appId: string, want: Want) : Promise<boolean>;
  function setDisposedStatus(appId: string, want: Want, callback: AsyncCallback<boolean>) : void;

  function deleteDisposedStatus(appId: string) : Promise<boolean>;
  function deleteDisposedStatus(appId: string, callback: AsyncCallback<boolean>) : void;

  function getDisposedStatus(appId: string) : Promise<Want>;
  function getDisposedStatus(appId: string, callback: AsyncCallback<Want>): void;
}

export default appControlManager;