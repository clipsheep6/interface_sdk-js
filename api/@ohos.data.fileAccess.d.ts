/*
*Copyright (c) 2022 Huawei Device Context., Ltd.
*Licensed under the Apache License, Version 2.0 (the "License");
*you may not use this file except in compliance with the License.
*You may obtain a copy of the License at
*
*http://www.apache.org/licenses/LICENSE-2.0
*
*Unless required by applicable law or agreed to in writing, software
*distributed under the License is distibuted on an "AS IS " BASIS,
*WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*See the License for the specific language governing permissions and
*limitations under the License
*/

import {AsyncCallback , Callback} from "./basic";
import {Want } from './ability/want';
import Context from './application/Context';

declare namespace fileaccess {
    /**
     * Obtains the fileAccessHelper.
     * @since 9
     * @syscap SystemCapability.FileAccessExtensionAbility.FileAccessFramework
     * @param context Indicates the application context.
     * @param want 
     * @return Returns the fileAccessHelper.
     * @StageModelOnly
     * @systemapi
     */
    function createFileAccessHelper(context: Context, want: Want, callback: AsyncCallback<FileAccessHelper>): void; 
    function createFileAccessHelper(context: Context, want: Want): Promise<FileAccessHelper>; 

    /**
     * File Object
     * @since 9
     * @syscap SystemCapability.FileAccessExtensionAbility.FileAccessFramework
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
     * @syscap SystemCapability.FileAccessExtensionAbility.FileAccessFramework
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
     * FileAccessHelper
     * @since 9
     * @syscap SystemCapability.FileAccessExtensionAbility.FileAccessFramework
     * @StageModelOnly
	  * @systemapi
	  * @permission ohos.permission.FILE_ACCESS_MANAGER
     */
    interface FileAccessHelper {
        /**
         * Opens a file in a specified path.
         *
         * @since 9 
         * @param uri Indicates the path of the file to open. 
         * @param flags Indicate options of opening a file. The default value is read-only.
         * @param callback Indicate the callback when openfile success
         * @return Returns the file descriptor
         */
        openFile(uri: string, flags: number) : Promise<number>;
        openFile(uri: string, flags: number, callback: AsyncCallback<number>) : void;
      
        /**
         * Create a file in a specified path
         * 
         * @since 9
         * @param parentUri Represents a specific parent directory.
         * @param displayName Indicates the new file name
         * @return Returns the new file's URI
         */
        createFile(parentUri: string, displayName: string) : Promise<string>;
        createFile(parentUri: string, displayName: string ,callback: AsyncCallback<string>) : void;
      
        /**
         * 
         * @since 9
         * @param parentUri parentUri Represents a specific parent directory.
         * @param displayName displayName Indicates the new file name 
         * @return Returns the new directory's URI
         */
        mkdir(parentUri: string , displayName: string) : Promise<string>;
        mkdir(parentUri: string , displayName: string , callback: AsyncCallback<string>) : void;
      
        /**
         * Delete a file or delete a directory recursively
         * 
         * @since 9
         * @param selectFileUri Indicates the file or directory to be deleted.
         * @return Returns Exections Success or Failure.
         * @StageModelOnly 
         */
        delete(selectFileUri: string) : Promise<number>;
        delete(selectFileUri: string , callback: AsyncCallback<string>) : void;
      
        /**
         * Move a file or move a directory recursively
         * 
         * @since 9
         * @param sourceFileUri Indicates the file or directory to be moved.
         * @param targetParentUri Represents the destonation folder.
         * @return URI of the generated new file or directory.
         */
        move(sourceFileUri: string, targetParentUri: string) : Promise<string>;
        move(sourceFileUri: string, targetParentUri: string , callback: AsyncCallback<string>) : void;
      
        /**
         * Rname the selected file ot directory.
         * 
         * @since 9
         * @param sourceFileUri Indicates the selected file or directory
         * @param displayName Indicates the new directory or file name.
         * @return URI of the generated new file or directory
         */
        rename(sourceFileUri: string , displayName: string) : Promise<string>;
        rename(sourceFileUri: string , displayName: string , callback: AsyncCallback<string>) : void;
       
        /**
         * Get root object from all data providers
         * 
         * @since 9
         * @return Array of root objects
         */
        getRoots(): Promise<Array<Root>>;
        getRoots(callback:AsyncCallback<Array<Root>>) : void;
    }
}