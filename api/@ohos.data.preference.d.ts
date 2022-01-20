/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { AsyncCallback, Callback } from './basic';

/**
 * Provides interfaces to obtain and modify preference data.
 *
 * @name preference
 * @since 8
 * @sysCap SystemCapability.Data#DATA_APPDATAMGR
 * @devices phone, tablet
 */
declare namespace preference {
    /**
     * Obtains a {@link Preference} instance matching a specified preference file name.
     *
     * <p>The {@link references} instance loads all data of the preference file and
     * resides in the memory. You can use removePreferenceFromCache to remove the instance from the memory.
     *
     * @param path Indicates the path of preference file stored.
     * @return Returns the {@link Preference} instance matching the specified preference file name.
     * @throws BusinessError if invoked failed
     * @since 8
     */
    function getPreferenceSync(path: string): Preference;
    function getPreference(path: string, callback: AsyncCallback<Preference>): void;
    function getPreference(path: string): Promise<Preference>;

    /**
     * Deletes a {@link Preference} instance matching a specified preference file name
     * from the cache which is performed by removePreferenceFromCache and deletes the
     * preference file.
     *
     * <p>When deleting the {@link Preference} instance, you must release all references
     * of the instance. In addition, do not use the instance to perform data operations. Otherwise, data inconsistency
     * will occur.
     *
     * @param path Indicates the path of preference file
     * @throws BusinessError if invoked failed
     * @since 8
     */
    function deletePreferenceSync(path: string): void;
    function deletePreference(path: string, callback: AsyncCallback<void>): void;
    function deletePreference(path: string): Promise<void>;

    /**
     * Deletes a {@link Preference} instance matching a specified preference file name
     * from the cache.
     *
     * <p>When deleting the {@link Preference} instance, you must release all references
     * of the instance. In addition, do not use the instance to perform data operations. Otherwise, data inconsistency
     * will occur.
     *
     * @param path Indicates the path of preference file.
     * @throws BusinessError if invoked failed
     * @since 8
     */
    function removePreferenceFromCacheSync(path: string): void;
    function removePreferenceFromCache(path: string, callback: AsyncCallback<void>): void;
    function removePreferenceFromCache(path: string): Promise<void>;

    /**
     * Provides interfaces to obtain and modify preference data.
     *
     * <p>The preference data is stored in a file, which matches only one {@link Preference} instance in the memory.
     * You can use getPreference to obtain the {@link Preference} instance matching
     * the file that stores preference data, and use emovePreferenceFromCache
     * to remove the {@link Preference} instance from the memory.
     *
     * @sysCap SystemCapability.Data#DATA_APPDATAMGR
     * @devices phone, tablet
     * @since 8
     */
    interface Preference {
        /**
        * Obtains the value of a preference in the int format.
        *
        * <p>If the value is {@code null} or not in the int format, the default value is returned.
        *
        * @param key Indicates the key of the preference. It cannot be {@code null} or empty.
        * @param defValue Indicates the default value to return.
        * @return Returns the value matching the specified key if it is found; returns the default value otherwise.
        * @throws BusinessError if invoked failed
        * @since 8
        */
        getSync(key: string, defValue: ValueType): ValueType;
        get(key: string, defValue: ValueType, callback: AsyncCallback<ValueType>): void;
        get(key: string, defValue: ValueType): Promise<ValueType>;

        /**
         * Checks whether the {@link Preference} object has a preference matching a specified key.
         *
         * @param key Indicates the key of the preference to check for.
         * @return Returns {@code true} if the {@link Preference} object has a preference with the specified key;
         * returns {@code false} otherwise.
         * @throws BusinessError if invoked failed
         * @since 8
         */
        hasSync(key: string): boolean;
        has(key: string, callback: AsyncCallback<boolean>): boolean;
        has(key: string): Promise<boolean>;

        /**
         * Sets an int value for the key in the {@link Preference} object.
         *
         * <p>You can call the {@link #flush} or {@link #flushSync} method to save the {@link Preference} object to the
         * file.
         *
         * @param key Indicates the key of the preference to modify. It cannot be {@code null} or empty.
         * @param value Indicates the value of the preference.
         * <tt>MAX_KEY_LENGTH</tt>.
         * @throws BusinessError if invoked failed
         * @since 8
         */
        putSync(key: string, value: ValueType): void;
        put(key: string, value: ValueType, callback: AsyncCallback<void>): void;
        put(key: string, value: ValueType): Promise<void>;

        /**
         * Deletes the preference with a specified key from the {@link Preference} object.
         *
         * <p>You can call the {@link #flush} method to save the {@link Preference} object to the
         * file.
         *
         * @param key Indicates the key of the preference to delete. It cannot be {@code null} or empty.
         * <tt>MAX_KEY_LENGTH</tt>.
         * @throws BusinessError if invoked failed
         * @since 8
         */
        deleteSync(key: string): void;
        delete(key: string, callback: AsyncCallback<void>): void;
        delete(key: string): Promise<void>;

        /**
         * Clears all preference from the {@link Preference} object.
         *
         * <p>You can call the {@link #flush} method to save the {@link Preference} object to the
         * file.
         *
         * @throws BusinessError if invoked failed
         * @since 8
         */
        clearSync(): void;
        clear(callback: AsyncCallback<void>): void;
        clear(): Promise<void>;

        /**
         * Saves the {@link Preference} object to the file.
         *
         * @throws BusinessError if invoked failed
         * @since 8
         */
        flushSync(): void;
        flush(callback: AsyncCallback<void>): void;
        flush(): Promise<void>;

        /**
         * Registers an observer to listen for the change of a {@link Preference} object.
         *
         * @param callback Indicates the callback when preference changes.
         * @throws BusinessError if invoked failed
         * @since 8
         */
        on(type: 'change', callback: Callback<PreferenceObserver>): void;

        /**
         * Unregisters an existing observer.
         *
         * @param callback Indicates the registered callback.
         * @throws BusinessError if invoked failed
         * @since 8
         */
        off(type: 'change', callback: Callback<PreferenceObserver>): void;
    }

    /**
     * Indicates possible value types
     */
    type ValueType = number | string | boolean;

    /**
     * Define the change data information object.
     *
     * @sysCap SystemCapability.Data#DATA_APPDATAMGR
     * @devices phone, tablet
     * @since 8
     */
    interface PreferenceObserver {
        /**
         * Indicates which key changes
         */
        key: string;
    }

    /**
     * Indicates the maximum length of a key (80 characters).
     */
    const MAX_KEY_LENGTH: 80;

    /**
     * Indicates the maximum length of a string (8192 characters).
     */
    const MAX_VALUE_LENGTH: 8192;
}

export default preference;