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

import { AsyncCallback } from './basic';
import ApplicationStateObserver from './application/ApplicationStateObserver';
import AppStateData from './application/AppStateData';
import { ProcessRunningInfo } from './application/ProcessRunningInfo';

/**
 * This module provides the function of app manager service.
 *
 * @since 9
 * @SysCap appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import appManager from '@ohos.application.appManager'
 * @permission N/A
 * @StageModelOnly
 */
declare namespace appManager {
    /**
     * Register application state observer.
     *
     * @default -
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @SysCap appexecfwk
     * @param observer The application state observer.
     * @return Returns the number code of the observer.
     * @StageModelOnly
     */
    function registerApplicationStateObserver(observer: ApplicationStateObserver): number;

    /**
     * Unregister application state observer.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @SysCap appexecfwk
     * @param observerId Indicates the number code of the observer.
     * @return -
     * @StageModelOnly
     */
    function unregisterApplicationStateObserver(observerId: number,  callback: AsyncCallback<void>): void;
    function unregisterApplicationStateObserver(observerId: number): Promise<void>;

    /**
     * getForegroundApplications.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @SysCap appexecfwk
     * @return Returns the list of AppStateData.
     * @StageModelOnly
     */
     function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void;
     function getForegroundApplications(): Promise<Array<AppStateData>>;

    /**
     * Kill process with account.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @SysCap appexecfwk
     * @param bundleName The process bundle name.
     * @param accountId The account id.
     * @systemapi hide this for inner system use
     * @return -
     * @StageModelOnly
     */
    function killProcessWithAccount(bundleName: string, accountId: number): Promise<void>;
    function killProcessWithAccount(bundleName: string, accountId: number, callback: AsyncCallback<void>): void;

     /**
     * Is user running in stability test.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @SysCap appexecfwk
     * @return Returns true if user is running stability test.
     * @StageModelOnly
     */
      function isRunningInStabilityTest(callback: AsyncCallback<boolean>): void;
      function isRunningInStabilityTest(): Promise<boolean>;

    /**
    * Get information about running processes
    *
    * @devices phone, tablet, tv, wearable, car
    * @since 9
    * @SysCap appexecfwk
    * @systemapi Hide this for inner system use.
    * @return -
    * @StageModelOnly
    */
    function getProcessRunningInfos(): Promise<Array<ProcessRunningInfo>>;
    function getProcessRunningInfos(callback: AsyncCallback<Array<ProcessRunningInfo>>): void;

    /**
    * Kill process by bundleName
    *
    * @devices phone, tablet, tv, wearable, car
    * @since 9
    * @SysCap appexecfwk
    * @param bundleName The process bundle name.
    * @systemapi Hide this for inner system use.
    * @StageModelOnly
    */
    function killProcesses(bundleName: string): Promise<void>;
    function killProcesses(bundleName: string, callback: AsyncCallback<void>): void;

    /**
    * clear Application Data
    *
    * @devices phone, tablet, tv, wearable, car
    * @since 9
    * @SysCap appexecfwk
    * @systemapi Hide this for inner system use.
    * @param bundleName The process bundle name.
    * @StageModelOnly
    */
    function clearUpApplicationData(bundleName: string): Promise<void>;
    function clearUpApplicationData(bundleName: string, callback: AsyncCallback<void>): void;
}

export default appManager;
