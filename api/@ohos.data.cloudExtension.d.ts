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
import {AsyncCallback, Callback} from './@ohos.base';
import Context from './application/BaseContext';
import relationalStore from "./@ohos.data.relationalStore";
import rpc from './@ohos.rpc'

declare namespace cloudExtension {
    import ValueType = relationalStore.ValueType;
    import ValuesBucket = relationalStore.ValuesBucket;
    enum CloudStatus {
        UNKNOWN = "UNKNOWN",
        LOGOUT = "LOGOUT",
        LOGIN_AND_ENABLE = "ENABLE_CLOUD_SYNC",
        LOGIN_AND_DISABLE = "DISABLE_CLOUD_SYNC",
    }

    export interface CloudAsset extends relationalStore.Asset {
        assetId: string;
        hash: string;
    }

    export interface CloudInfo {
        /* the sha256(id) of the could account */
        accountId: string;
        status: CloudStatus;
        /* the cloud space size(kb) of the current account.*/
        totalSpace: number;
        /* the cloud space remained size(kb) of the current account.*/
        remainSpace: number;
    }

    export interface AppBriefInfo {
        bundleName: string;
        appId: string;
        version: number;
        /* the switch of cloud sync action, true is enabled cloud sync, false is disabled.*/
        switch: boolean;
    }

    export enum FieldType {
        TEXT= "TEXT",
        NUMBER = "NUMBER",
        REAL = "REAL",
        BLOB = "BLOB",
        ASSET = "ASSET",
        ASSETS = "ASSETS",
    }

    export interface Field {
        colName: string;
        cloudName: string;
        type: FieldType;
        primary?: boolean;
        nullable?: boolean;
    }

    export interface Table {
        name : string;
        cloudName : string;
        fields : Field[];
    }

    export interface Database {
        name : string;
        cloudName : string;
        tables : Table[];
    }

    export interface AppSchema {
        version: number;
        bundleName: string;
        databases: Array<Database>;
    }

    interface Result<T> {
        code : number;
        value: T;
    }

    export class CloudService extends rpc.RemoteObject{
        getServiceInfo(): Result<CloudInfo>;

        getAppBriefInfo(): Result<Array<AppBriefInfo>>;

        getAppSchema(bundleName: string): Result<AppSchema>;

        subscribe(subInfo: { [bundleName: string]: Array<Database> }): number;

        unsubscribe(subInfo: { [bundleName: string]: Array<Database> }): number;

        connectDB(bundleName: string, dbInfo: Database): Result<CloudDB>;

        connectAssetLoader(bundleName: string, dbInfo: Database): Result<AssetLoader>;
    }

    interface CloudData {
        nextCursor: string;
        hasMore: boolean;
        values: Array<ValuesBucket>;
    }

    export class CloudDB extends rpc.RemoteObject {
        generateId(count: number): Result<Array<string>>;

        getTopCursor(): Result<string>;

        insert(table: string, values, ext: Array<ValuesBucket>): Result<Array<ValuesBucket>>;

        update(table: string, values, ext: Array<ValuesBucket>): Result<Array<ValuesBucket>>;

        delete(table: string, ext: Array<ValuesBucket>): Result<Array<ValuesBucket>>;

        query(table, cursor: string, field: Array<string>): Result<CloudData>;

        lock():Result<Date>;

        heartbeat():Result<Date>;

        unlock():Result<void>;

        close():Result<void>;

        watch();

        unwatch();
    }

    export class AssetLoader extends rpc.RemoteObject {
        context: Context;

        download(table: string, gid: string, priKey: ValueType, assets: ValuesBucket);

        upload(table: string, gid: string, priKey: ValueType, assets: ValuesBucket);
    }
}

export default cloudExtension;