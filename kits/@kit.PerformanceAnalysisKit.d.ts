/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit PerformanceAnalysisKit
 */

/*** if arkts 1.1&1.2 */
import FaultLogger from '@ohos.faultLogger';
import hiAppEvent from '@ohos.hiviewdfx.hiAppEvent';
import hichecker from '@ohos.hichecker';
import hidebug from '@ohos.hidebug';
import hilog from '@ohos.hilog';
import hiSysEvent from '@ohos.hiSysEvent';
import hiTraceChain from '@ohos.hiTraceChain';
import hiTraceMeter from '@ohos.hiTraceMeter';
import logLibrary from '@ohos.logLibrary';
import jsLeakWatcher from '@ohos.hiviewdfx.jsLeakWatcher';

export {
  FaultLogger, hiAppEvent, hiSysEvent, hiTraceChain, hiTraceMeter, hichecker, hidebug, hilog,
  logLibrary, jsLeakWatcher
};
/*** endif */
