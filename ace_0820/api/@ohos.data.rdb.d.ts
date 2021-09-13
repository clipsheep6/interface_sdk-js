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
import { ResultSet } from './data/rdb/rdbResultSet';

declare namespace rdb {
    /**
    * Obtains an RDB store.
    *
    * You can set parameters of the RDB store as required. In general, this method is recommended
    * to obtain a rdb store.
    *
    * @param config Indicates the configuration of the database related to this RDB store. The configurations include
    * the database path, storage mode, and whether the database is read-only.
    * @param version Indicates the database version for upgrade or downgrade.
    * @return Returns an RDB store {@link ohos.data.rdb.RdbStore}.
    * @since 7
    */
    function getRdbStore(config: StoreConfig, version: number, callback: AsyncCallback<RdbStore>): void;
    function getRdbStore(config: StoreConfig, version: number): Promise<RdbStore>;

    /**
    * Deletes the database with a specified name.
    *
    * @param name Indicates the database name.
    * @return Returns true if the database is deleted; returns false  otherwise.
    * @since 7
    */
    function deleteRdbStore(name: string, callback: AsyncCallback<void>): void;
    function deleteRdbStore(name: string): Promise<void>;

    /**
     * Provides methods for managing the relational database (RDB).
     *
     * This class provides methods for creating, querying, updating, and deleting RDBs.
     *
     * @devices phone, tablet, tv, wearable, car
     * @Syscap SystemCapability.Data.DATA_APPDATAMGR
     * @version 7
     */
    interface RdbStore {
        /**
         * Inserts a row of data into the target table.
         *
         * @param name Indicates the target table.
         * @param values Indicates the row of data to be inserted into the table.
         * @return Returns the row ID if the operation is successful; returns {@code -1} otherwise.
         * @since 7
         */
        insert(name: string, values: ValuesBucket, callback: AsyncCallback<number>): void;
        insert(name: string, values: ValuesBucket): Promise<number>;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicates.
         *
         * @param values Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param rdbPredicates Indicates the specified delete condition by the instance object of RdbPredicates.
         * @return Returns the number of affected rows.
         * @since 7
         */
        update(values: ValuesBucket, rdbPredicates: RdbPredicates, callback: AsyncCallback<number>): void;
        update(values: ValuesBucket, rdbPredicates: RdbPredicates): Promise<number>;

        /**
         * Deletes data from the database based on a specified instance object of rdbPredicates
         *
         * @param rdbPredicates Indicates the specified delete condition by the instance object of RdbPredicates.
         * @return Returns the number of affected rows.
         * @since 7
         */
        delete(rdbPredicates: RdbPredicates, callback: AsyncCallback<number>): void;
        delete(rdbPredicates: RdbPredicates): Promise<number>;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param rdbPredicates Indicates the specified query condition by the instance object of RdbPredicates.
         * @param columns Indicates the columns to query. If the value is null, the query applies to all columns.
         * @return Returns a ResultSet object if the operation is successful;
         * @since 7
         */
        query(rdbPredicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;
        query(rdbPredicates: RdbPredicates, columns: Array<string>): Promise<ResultSet>;

        /**
         * Executes an SQL statement that contains specified parameters but returns no value.
         *
         * Do not use this method to change the <b>journal_mode</b> of a database connection by the
         * "PRAGMA journal_mode'value'" statement.
         *
         * @param sql Indicates the SQL statement to execute.
         * @param bindArgs Indicates the values of the parameters in the SQL statement. The values are strings.
         * @since 7
         */
        executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void;
        executeSql(sql: string, bindArgs: Array<ValueType>): Promise<void>;
    }

    /**
     * Indicates possible value types
     */
    type ValueType = number | string | boolean | Uint8Array | null;

    /**
     * Values in buckets are stored in key-value pairs
     */
    type ValuesBucket = {
        [key: string]: ValueType;
    }

    /**
     * Manages relational database configurations.
     *
     * @devices phone, tablet, tv, wearable, car
     * @Syscap SystemCapability.Data.DATA_APPDATAMGR
     * @version 7
     */
    interface StoreConfig {
        /**
         * Indicates the name of the database file
         */
        name: string;

        /**
         * Indicates the storage mode
         * @see StorageMode
         */
        storageMode?: StorageMode;

        /**
         * Indicates whether the database is read-only
         */
        readOnly?: boolean;

        /**
         * Indicates the file type
         */
        fileType?: DatabaseFileType;

        /**
         * Indicates the encrypt key
         */
        encryptKey?: Uint8Array;

        /**
         * Indicates the journal mode to set
         * @see JournalMode
         */
        journalMode?: JournalMode;

        /**
         * Indicates the sync mode to set
         * @see SyncMode
         */
        syncMode?: SyncMode;
    }

    export enum JournalMode {
        MODE_DELETE,
        MODE_TRUNCATE,
        MODE_PERSIST,
        MODE_MEMORY,
        MODE_WAL,
        MODE_OFF,
    }

    export enum StorageMode {
        MODE_MEMORY = 101,
        MODE_DISK = 0
    }

    export enum SyncMode {
        MODE_OFF,
        MODE_NORMAL,
        MODE_FULL,
        MODE_EXTRA,
    }

    export enum DatabaseFileType {
        NORMAL,
        BACKUP,
        CORRUPT,
    }

    /**
     * Manages relational database configurations.
     *
     * @devices phone, tablet, tv, wearable, car
     * @Syscap SystemCapability.Data.DATA_APPDATAMGR
     * @version 7
     */
    class RdbPredicates {
        /**
         * A parameterized constructor used to create an RdbPredicates instance.
         * name Indicates the table name of the database.
         */
        constructor(name: string)

        /**
         * Configures the predicates to match the field whose data type is byte and value is equal
         * to a specified value.
         *
         * This method is similar to = of the SQL statement.
         *
         * @param field Indicates the column name in the database table.
         * @param value Indicates the value to match with the predicates.
         * @return Returns the predicates that match the specified field.
         */
        equalTo(field: string, value: ValueType, callback: AsyncCallback<RdbPredicates>): void;
        equalTo(field: string, value: ValueType): Promise<RdbPredicates>;

        /**
         * Adds a left parenthesis to the predicate.
         *
         * This method is similar to ( of the SQL statement and needs to be used together
         * with  endWrap().
         *
         * @return Returns the predicate with the left parenthesis.
         */
        beginWrap(callback: AsyncCallback<RdbPredicates>): void;
        beginWrap(): Promise<RdbPredicates>;

        /**
         * Adds a right parenthesis to the predicate.
         *
         * This method is similar to ) of the SQL statement and needs to be used together
         * with beginWrap(.
         *
         * @return Returns the predicate with the right parenthesis.
         */
        endWrap(callback: AsyncCallback<RdbPredicates>): void;
        endWrap(): Promise<RdbPredicates>;

        /**
         * Adds an or condition to the predicate.
         *
         * This method is similar to or of the SQL statement.
         *
         * @return Returns the predicate with the or condition.
         */
        or(callback: AsyncCallback<RdbPredicates>): void;
        or(): Promise<RdbPredicates>;

        /**
         * Adds an and condition to the predicate.
         *
         * This method is similar to and of the SQL statement.
         *
         * @return Returns the predicate with the and condition.
         */
        and(callback: AsyncCallback<RdbPredicates>): void;
        and(): Promise<RdbPredicates>;

        /**
         * Configures the predicates to match the fields whose value is null.
         *
         * This method is similar to is null of the SQL statement.
         *
         * @param field Indicates the column name in the database table.
         * @return Returns the predicates that match the specified field.
         */
        isNull(field: string, callback: AsyncCallback<RdbPredicates>): void;
        isNull(field: string): Promise<RdbPredicates>;

        /**
         * Configures the predicates to match the fields whose data type is String and value is
         * similar to a specified string.
         *
         * This method is similar to like of the SQL statement.
         *
         * @param field Indicates the column name in the database table.
         * @param value Indicates the value to match with the predicates. The percent sign ( % ) in the value
         * is a wildcard (like * in a regular expression).
         * @return Returns the predicates that match the specified field.
         */
        like(field: string, value: string, callback: AsyncCallback<RdbPredicates>): void;
        like(field: string, value: string): Promise<RdbPredicates>;
    }
}

export default rdb;
