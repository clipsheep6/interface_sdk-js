/*
* Copyright (C) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from "./basic";
import { Want } from './ability/want';
import Context from './application/Context';

declare namespace fileaccess {
    /**
     * Obtains the fileAccessHelper.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     * @param context Indicates the application context.
     * @param want Represents the connected data provider.
     * @return Returns the fileAccessHelper.
     * @StageModelOnly
     * @systemapi
     */
    function createFileAccessHelper(context: Context, want: Want, callback: AsyncCallback<FileAccessHelper>): void; 
    function createFileAccessHelper(context: Context, want: Want): Promise<FileAccessHelper>; 

    /**
     * Obtains the HAP Information for Registering FileAccessExtensionAbility in the System.
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     * @return Returns the want information of configuring FileAccess in the package.
     * @StageModelOnly
     * @systemapi 
     */
    function getFileAccessAbilityInfo(): Promise<Array<Want>>;
    function getFileAccessAbilityInfo(callback: AsyncCallback<Array<Want>>): void;

    /**
     * File Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     * @StageModelOnly
     * @systemapi
     */
    interface FileIterator {
        uri: string;
        fileName: string;
        mode: string;
        size: number;
        mtime: number;
        mimetype: string;
        [Symbol.iterator](): IterableIterator<FileIterator>;
        listFile(): FileIterator;
    }
   
    /**
     * Root Object
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     * @StageModelOnly
     * @systemapi
     */
    interface Root {
        deviceId: string;
        uri: string;
        displayName: string;
        flags: number;
        listFile(): FileIterator;
    }

    /**
     * flags is the parameter in openfile
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     * @StageModelOnly
     * @systemapi 
     */
    enum FLAGS {
        /** file is openFile only_read */
        READ = 0o0,
        /** file is openFile only_write */
        WRITE = 0o1,
        /** file is openFile write_read */
        WRITE_READ = 0o2
    }

    /**
     * FileAccessHelper
     * 
     * @since 9
     * @syscap SystemCapability.FileManagement.UserFileService
     * @StageModelOnly
     * @systemapi
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     */
    interface FileAccessHelper {
        /**
         * Open a file in a specified path.
         *
         * @since 9 
         * @param uri Indicates the path of the file to open. 
         * @param flags Indicate options of opening a file. The default value is read-only.
         * @param callback Indicate the callback when openfile success.
         * @return Returns the file descriptor.
         */
        openFile(uri: string, flags: FLAGS) : Promise<number>;
        openFile(uri: string, flags: FLAGS, callback: AsyncCallback<number>) : void;
      
        /**
         * Create a file in a specified path.
         * 
         * @since 9
         * @param uri Represents a specific parent directory.
         * @param displayName Indicates the new file name.
         * @return Returns the new file's URI.
         */
        createFile(uri: string, displayName: string) : Promise<string>;
        createFile(uri: string, displayName: string, callback: AsyncCallback<string>) : void;
      
        /**
         * Create a Directory in a specified path.
         * 
         * @since 9
         * @param uri parentUri Represents a specific parent directory.
         * @param displayName displayName Indicates the new file name.
         * @return Returns the new directory's URI.
         */
        mkdir(uri: string, displayName: string) : Promise<string>;
        mkdir(uri: string, displayName: string, callback: AsyncCallback<string>) : void;
      
        /**
         * Delete a file or delete a directory recursively.
         * 
         * @since 9
         * @param uri Indicates the file or directory to be deleted.
         * @return Returns Exections Success or Failure.
         * @StageModelOnly 
         */
        delete(uri: string) : Promise<number>;
        delete(uri: string, callback: AsyncCallback<string>) : void;
      
        /**
         * Move a file or move a directory recursively.
         * 
         * @since 9
         * @param sourceUri Indicates the file or directory to be moved.
         * @param destUri Represents the destonation folder.
         * @return URI of the generated new file or directory.
         */
        move(sourceUri: string, destUri: string) : Promise<string>;
        move(sourceUri: string, destUri: string, callback: AsyncCallback<string>) : void;
      
        /**
         * Rename the selected file or directory.
         * 
         * @since 9
         * @param uri Indicates the selected file or directory.
         * @param displayName Indicates the new directory or file name.
         * @return URI of the generated new file or directory.
         */
        rename(uri: string, displayName: string) : Promise<string>;
        rename(uri: string, displayName: string, callback: AsyncCallback<string>) : void;
       
        /**
         * Get root objects from all data providers.
         * 
         * @since 9
         * @return Array of root objects.
         */
        getRoots(): Promise<Array<Root>>;
        getRoots(callback:AsyncCallback<Array<Root>>) : void;
    }
}