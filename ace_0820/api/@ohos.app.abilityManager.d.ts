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
import { AbilityMissionInfo } from './app/abilityMissioninfo';
import { ActiveProcessInfo } from './app/activeProcessInfo';
import { ActiveServiceAbilityInfo } from './app/activeServiceAbilityInfo';
import { ProcessErrorInfo } from './app/processErrorInfo';
import { MemoryMapInfo } from './app/memoryMapInfo';
import { SystemMemoryAttr } from './app/systemMemoryAttr';
import { SplitMissionInfo } from './app/splitMissionInfo';
import { MissionSnapshot } from './app/missionSnapshot';

/**
 * This module provides the capability to manage abilities and obtaining system task information.
 *
 * @since 7
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable
 * @import import abilityManager from '@ohos.app.abilityManager'
 * @permission N/A
 */
declare namespace abilityManager {

    enum ProcessErrCode {
        NO_ERROR = 0,
        CRASHED,
        NO_RESPONSE,
    }

   /**
    * get current user id
    * @note N/A
    * @since 7
    * @sysCap SystemCapability.Appexecfwk
    * @devices phone, tablet, tv, wearable
    * @return user id
    * @systemapi hide this for inner system use
    */
    function getCurrentUserId(): Promise<number>;
    function getCurrentUserId(callback: AsyncCallback<number>): void;

    /**
     * Get information about running processes
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @return a list of ActiveProcessInfo records describing each process.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @systemapi hide this for inner system use
     */
    function getActiveProcessInfos(): Promise<Array<ActiveProcessInfo>>;
    function getActiveProcessInfos(callback: AsyncCallback<Array<ActiveProcessInfo>>): void;

    /**
     * Get information about the running ability missions
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @param upperLimit The maximum number of mission infos to return in the array.
     * @return an array of AbilityMissionInfo records describing each active mission.
     * @permission ohos.permission.ACCESS_MISSIONS
     * @systemapi hide this for inner system use
     */
     function getActiveAbilityMissionInfos(upperLimit: number): Promise<Array<AbilityMissionInfo>>;
     function getActiveAbilityMissionInfos(upperLimit: number, callback: AsyncCallback<Array<AbilityMissionInfo>>): void;

    /**
     * Get information about recently run missions
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @param upperLimit The maximum number of previous mission infos to return in the array.
     * @return an array of AbilityMissionInfo records describing each of the previous mission.
     * @permission ohos.permission.ACCESS_MISSIONS_EXTRA
     * @systemapi hide this for inner system use
     */
    function getPreviousAbilityMissionInfos(upperLimit: number): Promise<Array<AbilityMissionInfo>>;
    function getPreviousAbilityMissionInfos(upperLimit: number, callback: AsyncCallback<Array<AbilityMissionInfo>>): void;

    /**
     * Delete the specified missions
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @param missionIds An array of missions, representing the missions that need to be deleted.
     * @permission ohos.permission.DELETE_MISSIONS
     * @systemapi hide this for inner system use
     */
    function deleteMissions(missionIds: Array<number>): Promise<void>;
    function deleteMissions(missionIds: Array<number>, callback: AsyncCallback<void>): void;

    /**
     * Returns whether the current user is a test user
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @return true A test user; false Not a test user.
     * @systemapi hide this for inner system use
     */
    function isUserATestUser(): Promise<boolean>;
    function isUserATestUser(callback: AsyncCallback<boolean>): void;

    /**
     * Get information about currently running services
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @param upperLimit The maximum number of service infos to return in the array.
     * @return an array of ActiveServiceAbilityInfo records describing each of the active service.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @systemapi hide this for inner system use
     */
    function getActiveServiceAbilityInfos(upperLimit: number): Promise<Array<ActiveServiceAbilityInfo>>;
    function getActiveServiceAbilityInfos(upperLimit: number, callback: AsyncCallback<Array<ActiveServiceAbilityInfo>>): void;

    /**
     * Get the denseness of home screen icons.
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @return The denseness number
     * @systemapi hide this for inner system use
     */
    function getHomeScreenIconDenseness(): Promise<number>;
    function getHomeScreenIconDenseness(callback: AsyncCallback<number>): void;

    /**
     * Get the size of the home screen app icon
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @return the size of the icon
     * @systemapi hide this for inner system use
     */
    function getHomeScreenIconSize(): Promise<number>;
    function getHomeScreenIconSize(callback: AsyncCallback<number>): void;

    /**
     * Whether the system supports multiple windows
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @return true Support multiwindow; false Not support multiwindow
     * @systemapi hide this for inner system use
     */
    function isMultiWindowAllowed(): Promise<boolean>;
    function isMultiWindowAllowed(callback: AsyncCallback<boolean>): void;

    /**
     * Move the specified missions to the first split screen window
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet
     * @param info The info of the mission that need to be moved to the split screen window
     * @return whether to move successfully
     * @permission ohos.permission.MANAGE_MISSION_STACKS
     * @systemapi hide this for inner system use
     */
    function moveMissionToFirstSplitScreen(info: SplitMissionInfo): Promise<void>;
    function moveMissionToFirstSplitScreen(info: SplitMissionInfo, callback: AsyncCallback<void>): void;

    /**
     * Is it a ram-constrained device
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @return whether a ram-constrained device
     * @permission N/A
     */
    function isRamConstrainedDevice(): Promise<boolean>;
    function isRamConstrainedDevice(callback: AsyncCallback<boolean>): void;

    /**
     * Get the memory size of the application
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @return  application memory size
     * @permission N/A
     */
    function getAppMemSize(): Promise<number>;
    function getAppMemSize(callback: AsyncCallback<number>): void;

    /**
     * Get process memory map infos
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @param pids An array of process ids
     * @return An array of MemoryMapInfo that describe the process map info
     * @systemapi hide this for inner system use
     */
    function getProcessMemoryMapInfos(pids: Array<number>): Promise<Array<MemoryMapInfo>>;
    function getProcessMemoryMapInfos(pids: Array<number>, callback: AsyncCallback<Array<MemoryMapInfo>>): void;

    /**
     * Get system memory attributes
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @return SystemMemoryAttr
     * @systemapi hide this for inner system use
     */
    function getSystemMemoryAttr(): Promise<SystemMemoryAttr>;
    function getSystemMemoryAttr(callback: AsyncCallback<SystemMemoryAttr>): void;


    /**
     * Get processes error information
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @return an array of ProcessErrorInfo
     * @systemapi hide this for inner system use
     */
    function getProcessErrorInfos(callback: AsyncCallback<Array<ProcessErrorInfo>>): void;
    function getProcessErrorInfos(): Promise<Array<ProcessErrorInfo>>;

    /**
     * Get a snapshot of the specified mission
     * @since 7
     * @SysCap SystemCapability.Appexecfwk
     * @devices phone, tablet, tv, wearable
     * @param missionId The specified mission id
     * @return MissionSnapshot that describe the snapshot
     * @systemapi hide this for inner system use
     */
    function getAbilityMissionSnapshot(missionId: number): Promise<MissionSnapshot>;
    function getAbilityMissionSnapshot(missionId: number, callback: AsyncCallback<MissionSnapshot>): void;

}

export default abilityManager;
