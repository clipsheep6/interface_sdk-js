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





declare namespace CloudData {
     /**
     * Provides methods to set CloudSync config.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @since 10
     */
     class CloudConfig {
         /**
         * opens the CloudSync function.
         * @param {string} cloudId - Indicates the cloud ID. The cloud ID is requried by hashing the information of specific open cloud.
         * @param {{[bundle:string]:boolean}} switches - Indicates switches information of all applications.
         * switches will overwrite the saved application switch information.If the specific app switch changes, 
         * the {@link changeAppSwitch(cloudId:string,bundle:string,switch:boolean)} method needs to notify the data manager service.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        enableCloud(cloudId: string, switches: {[bundle: string]: boolean}): void;

        /**
         * closes the CloudSync function.
         * @param {string} cloudId - Indicates the cloud ID. The cloud ID is requried by hashing the information of specific open cloud.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 10
         */
        disableCloud(cloudId: string): void;

        /**
         * Changes the CloudSync switch of a single application.
         * @param {string} cloudId - Indicates the cloud ID. The cloud ID is requried by hashing the information of specific open cloud.
         * @param {string} bundle -  Indicates the name of application.
         * @param {boolean} switch - Indicates the condition of switch.true means the switch is on,false means switch is off. 
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        changeAppSwitch(cloudId: string, bundle: string, switch :boolean): void;

        /**
         * deletes cloud information from local data.
         * @param {string} cloudId - Indicates the cloud ID. The cloud ID is requried by hashing the information of specific open cloud.
         * @param {[bundle:string]Action} appActions - Indicates information about the application whose data need to clear.
         * bundle is the name of application.
         * Action is the action of clearing data,which includes CLEAN_CLOUD_ID,CLEAN_DATA and CLEAN_ALL.
         * CLEAN_CLOUD_ID indicates deleting the identification information related to the cloud ID.
         * CLEAN_DATA indicates deleting data downloaded from the cloud(including the cloud ID).
         * CLEAN_ALL indicates deleting all cloud data and lacal data,which means CloudSync table.
         * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
         * @since 10
         */
        clean(cloudId: string, appActions: [bundle: string]Action): void;
     }
}
