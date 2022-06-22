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

import {AsyncCallback, Callback} from "./basic";
import { Want } from './ability/want';
import Context from './application/Context';

declare namespace fileaccess {
   /**
    * Obtains the fileAccessHelper.
    * @since 9
    * @syscap SystemCapability.FileExtension.FileAccessFramework
    * @param context Indicates the application context.
    * @param want 
    * @return Returns the fileAccessHelper.
    * @systemapi
    * @permission
    */
   function createFileAccessHelper(context: Context, want: Want, callback: AsyncCallback<FileAccessHelper>): void; 
   function createFileAccessHelper(context: Context, want: Want): Promise<FileAccessHelper>; 

   /**
    * File
    * @since 9
    * @syscap SystemCapability.FileExtension.FileAccessFramework
    * @StageModelOnly
    */
   class File {
      uri : string;      
      fileName : string;      
      mode : string;      
      size : number;      
      mtime : number;      
      mimitype : string;  
      next(): File;
      listfile() : Array<File>
   }
   
   /**
    * Root
    * @since 9
    * @syscap SystemCapability.FileExtension.FileAccessFramework
    * @StageModelOnly
    */
   class Root {      
      deviceId : string;      
      uri : string;      
      displayName : string;      
      flags : number;      
      listFile() : Array<File>
   }

   /**
    * FileAccessHelper
    * @since 9
    * @syscap SystemCapability.FileExtension.FileAccessFramework
    * @StageModelOnly
    */
   interface FileAccessHelper {
      /**
      * Opens a file in a specified remote path.
      *
      * @since 9
      * @syscap SystemCapability.FileExtension.FileAccessFramework
      * @param uri Indicates the path of the file to open.
      * @param flags             
      * @param callback Indicates the callback when openfile success
      * @return Returns the file descriptor.
      * @StageModelOnly
      */     
      openFile(uri: string, flags: number): Promise<number>;
      openFile(uri: string, flags: number, callback: AsyncCallback<number>): void;
      
      /**
      *
      *
      * @since 9
      * @syscap SystemCapability.FileExtension.FileAccessFramework
      * @param
      * @param             
      * @param
      * @return
      * @StageModelOnly
      */ 
      createFile(parentUri: string, displayName: string): Promise<string>;
      createFile(parentUri: string, displayName: string, callback: AsyncCallback<string>): void;
      
      /**
      *
      *
      * @since 9
      * @syscap SystemCapability.FileExtension.FileAccessFramework
      * @param
      * @param             
      * @param
      * @return
      * @StageModelOnly
      */
      mkdir(parentUri: string, displayName: string): Promise<string>;
      mkdir(parentUri: string, displayName: string, callback: AsyncCallback<string>): void;
      
      /**
      *
      *
      * @since 9
      * @syscap SystemCapability.FileExtension.FileAccessFramework
      * @param
      * @param             
      * @param
      * @return
      * @StageModelOnly
      */
      delete(selectFileUri: string): Promise<number>;
      delete(selectFileUri: string, callback: AsyncCallback<number>): void;
      
      /**
      *
      *
      * @since 9
      * @syscap SystemCapability.FileExtension.FileAccessFramework
      * @param
      * @param
      * @return
      * @StageModelOnly
      */
      move(sourceFileUri: string, targetParentUri: string): Promise<string>;
      move(sourceFileUri: string, targetParentUri: string, callback: AsyncCallback<string>): void;
      
      /**
      *
      *
      * @since 9
      * @syscap SystemCapability.FileExtension.FileAccessFramework
      * @param
      * @param
      * @return
      * @StageModelOnly
      */
      rename(sourceFileUri: string, displayName: string): Promise<string>;
      rename(sourceFileUri: string, displayName: string, callback: AsyncCallback<string>): void;
      
      /**
      *
      *
      * @since 9
      * @syscap SystemCapability.FileExtension.FileAccessFramework
      * @return
      * @StageModelOnly
      */
      getRoots(): Promise<Array<Root>>;
      getRoots(callback: AsyncCallback<Array<Root>>): void;
   }
}
