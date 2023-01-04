/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './basic';
import Context from './application/Context';
import image from './@ohos.multimedia.image';
import dataSharePredicates from './@ohos.data.dataSharePredicates';

/**
 * @name userFileManager
 * @since 9
 * @systemapi
 * @syscap SystemCapability.FileManagement.UserFileManager.Core
 */
declare namespace userFileManager {
  /**
   * Returns an instance of UserFileManager
   * @since 10
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @StageModelOnly
   * @param { Context } context - Hap context information
   * @returns Instance of UserFileManager
   */
  function getUserFileMgr(context: Context): Promise<UserFileManager>;
  /**
   * Returns an instance of UserFileManager
   * @since 10
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   * @StageModelOnly
   * @param context Hap context information
   * @param { AsyncCallback<UserFileManager> } callback - Return Instance of UserFileManager
   */
  function getUserFileMgr(context: Context, callback: AsyncCallback<UserFileManager>);

  /**
   * Enumeration types for different kinds of Files
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum FileType {
    /**
     * Image file type
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    IMAGE = 1,
    /**
     * Video file type
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    VIDEO,
    /**
     * Audio file type
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    AUDIO
  }

  /**
   * File position
   * @since 10
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum PositionType {
    /**
     * File exists only in local device
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    LOCAL = 1,
    /**
     * File exists only in cloud
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    CLOUD,
    /**
     * File exists in both local and cloud
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    BOTH
  }

  /**
   * Indicates the type of file asset member.
   * @since 9
   * @systemapi
   */
  type MemberType = number | string | boolean | PositionType;

  /**
   * Indicates the type of notify event.
   * @since 9
   * @systemapi
   */
  type ChangeEvent = 'deviceChange' | 'albumChange' | 'imageChange' | 'audioChange' | 'videoChange' | 'remoteFileChange';

  /**
   * Provides methods to encapsulate file attributes.
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface FileAsset {
    /**
     * URI of the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly uri: string;
    /**
     * File type, for example, IMAGE, VIDEO, AUDIO
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly fileType: FileType;
    /**
     * Display name (with a file name extension) of the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    displayName: string;
    /**
     * Return the fileAsset member parameter.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param member the name of the parameter. for example : get(ImageVideoKey.URI)
     */
    get(member: string): MemberType;
    /**
     * Set the fileAsset member parameter.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param member The name of the parameter. only TITLE can be changed
     * @param string The value of the parameter.
     * @example : Set(ImageVideoKey.TITLE, "newTitle"), call commitModify after set value
     */
    set(member: string, value: string): void;
    /**
     * Modify meta data where the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param callback No value will be returned.
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify meta data where the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     */
    commitModify(): Promise<void>;
    /**
     * Open the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param mode Mode for open, for example: rw, r, w.
     * @param callback Callback return the fd of the file.
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * Open the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO or ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param mode Mode for open, for example: rw, r, w.
     */
    open(mode: string): Promise<number>;
    /**
     * Close the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param fd Fd of the file which had been opened
     * @param callback No value will be returned.
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * Close the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param fd Fd of the file which had been opened
     */
    close(fd: number): Promise<void>;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param callback Callback used to return the thumbnail's pixelMap.
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param size Thumbnail's size
     * @param callback Callback used to return the thumbnail's pixelMap.
     */
    getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * Get thumbnail of the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.READ_AUDIO
     * @param size Thumbnail's size
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * Set favorite for the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param isFavorite True is favorite file, false is not favorite file
     * @param callback Callback used to return, No value is returned.
     */
    favorite(isFavorite: boolean, callback: AsyncCallback<void>): void;
    /**
     * Set favorite for the file when the file is located.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.WRITE_AUDIO
     * @param isFavorite True is favorite file, false is not favorite file
     */
    favorite(isFavorite: boolean): Promise<void>;
  }

  /**
   * Describes AUDIO TYPE FetchOptions's predicate
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum AudioKey {
    /**
     * File uri
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI,
    /**
     * File name
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DISPLAY_NAME,
    /**
     * Date of the file creation
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_ADDED,
    /**
     * Modify date of the file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_MODIFIED,
    /**
     * Title of the file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TITLE,
    /**
     * Artist of the audio file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    ARTIST,
    /**
     * Audio album of the audio file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    AUDIOALBUM,
    /**
     * Duration of the audio file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DURATION,
    /**
     * Favorite state of the file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    FAVORITE
  }

  /**
    * Describes Image, Video TYPE FetchOptions's predicate
    * @since 9
    * @systemapi
    * @syscap SystemCapability.FileManagement.UserFileManager.Core
    */
  enum ImageVideoKey {
    /**
     * File uri
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI,
    /**
     * File type of the Asset
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    FILE_TYPE,
    /**
     * File name
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DISPLAY_NAME,
    /**
     * Date of the file creation
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_ADDED,
    /**
     * Modify date of the file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_MODIFIED,
    /**
     * Trashed date of the file
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_TRASHED,
    /**
     * Title of the file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TITLE,
    /**
     * Duration of the audio and video file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DURATION,
    /**
     * Width of the image file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    WIDTH,
    /**
     * Height of the image file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    HEIGHT,
    /**
     * Date taken of the file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DATE_TAKEN,
    /**
     * Orientation of the image file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    ORIENTATION,
    /**
     * Favorite state of the file
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    FAVORITE,
    /**
     * File position
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    POSITION
  }

  /**
   * Describes Album TYPE predicate
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum AlbumKey {
    /**
     * Album uri
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    URI,
    /**
     * Album name
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    ALBUM_NAME,
  }

  /**
   * Fetch parameters
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface FetchOptions {
    /**
     * Indicates the columns to query.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param fetchColumns Indicates the columns to query. If this parameter is null, only uri, name, fileType will query.
     */
    fetchColumns: Array<string>;
    /**
     * Predicate to query
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param predicates Indicates filter criteria.
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * Implements file retrieval.
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface FetchResult<T> {
    /**
     * Obtains the total number of files in the file retrieval result.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns Total number of files.
     */
    getCount(): number;
    /**
     * Checks whether the result set points to the last row.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns Whether the file is the last one.
     * You need to check whether the file is the last one before calling getNextObject,
     * which returns the next file only when False is returned for this method.
     */
    isAfterLast(): boolean;
    /**
     * Releases the FetchResult instance and invalidates it. Other methods cannot be called.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    close(): void;
    /**
     * Obtains the first FileAsset in the file retrieval result. This method uses a callback to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return the file in the format of a FileAsset instance.
     */
    getFirstObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the first T in the file retrieval result. This method uses a promise to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns A Promise instance used to return the file in the format of a T instance.
     */
    getFirstObject(): Promise<T>;
    /**
     * Obtains the next T in the file retrieval result.
     * This method uses a callback to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when False is returned for isAfterLast().
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return the file in the format of a T instance.
     */
    getNextObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the next T in the file retrieval result.
     * This method uses a promise to return the file.
     * Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
     * This method returns the next file only when False is returned for isAfterLast().
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns A Promise instance used to return the file in the format of a T instance.
     */
    getNextObject(): Promise<T>;
    /**
     * Obtains the last T in the file retrieval result. This method uses a callback to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback Callback used to return the file in the format of a T instance.
     */
    getLastObject(callback: AsyncCallback<T>): void;
    /**
     * Obtains the last T in the file retrieval result. This method uses a promise to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @returns A Promise instance used to return the file in the format of a T instance.
     */
    getLastObject(): Promise<T>;
    /**
     * Obtains the T with the specified index in the file retrieval result.
     * This method uses a callback to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param index Index of the file to obtain.
     * @param callback Callback used to return the file in the format of a T instance.
     * @throws {BusinessError} 13900020 - if type index is not number
     */
    getPositionObject(index: number, callback: AsyncCallback<T>): void;
    /**
     * Obtains the T with the specified index in the file retrieval result.
     * This method uses a promise to return the file.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param index Index of the file to obtain.
     * @throws {BusinessError} 13900020 - if type index is not number
     * @returns A Promise instance used to return the file in the format of a T instance.
     */
    getPositionObject(index: number): Promise<T>;
  }

  /**
   * Album type.
   * @since 10
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum AlbumType {
    /**
     * Album created by user.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    USER,
    /**
     * Album created by system, which metadata cannot be modified by user.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    SYSTEM,
  }

  /**
   * Album subtype
   * @since 10
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum AlbumSubType {
    /**
     * Generic user-created albums.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    USER_GENERIC,
    /**
     * Video album, which contains all video assets.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    VIDEO,
    /**
     * Favorite album, which assets are marked as favorite.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    FAVORITE,
    /**
     * Hidden album, which assets are marked as hidden.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    HIDDEN,
    /**
     * Trash album, which assets are deleted.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    TRASH,
    /**
     * Any album
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    ANY,
  }

  /**
   * Album operations
   * @since 10
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  enum AlbumOperations {
    /**
     * The album can be deleted.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    DELETE,
    /**
     * The album can be renamed.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    UPDATE,
    /**
     * Assets can be added to the album.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    ADD_ASSETS,
    /**
     * Assets can be removed from the album.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    REMOVE_ASSETS
  }

  /**
   * Defines the Album.
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface Album {
    /**
     * Album type
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly albumType: AlbumType;
    /**
     * Album subtype
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly albumSubType: AlbumSubType;
    /**
     * Album name.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    albumName: string;
    /**
     * CoverUri for the album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    coverUri: string;
    /**
     * Album uri.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly albumUri: string;
    /**
     * File count for the album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    readonly count: number;
    /**
     * Obtains files in an album. This method uses an asynchronous callback to return the files.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param type Determined which kinds of asset to retrive.
     * @param options Retrieval options.
     * @param callback Callback used to return the files in the format of a FetchResult instance.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     */
    getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Obtains files in an album. This method uses a promise to return the files.
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param type Determined which kinds of asset to retrive.
     * @param options Retrieval options.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     * @returns A Promise instance used to return the files in the format of a FetchResult instance.
     */
    getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
    /**
     * Modify the meta data for the album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param callback No value will be returned.
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * Modify the meta data for the album
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     */
    commitModify(): Promise<void>;
    /**
     * Add assets to TYPE_USER album, only for generic user-created albums
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of FileAsset
     * @param { AsyncCallback<void> } callback - Returns void
     */
    addAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Add assets to TYPE_USER album, only for generic user-created albums
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of FileAsset
     * @returns { Promise<void> } Returns the promise
     */
    addAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Remove assets to TYPE_USER album, only for generic user-created albums
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of FileAsset
     * @param { AsyncCallback<void> } callback - Returns void
     */
    removeAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Remove assets to TYPE_USER album, only for generic user-created albums
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of FileAsset
     * @returns { Promise<void> } Returns the promise
     */
    removeAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Recover assets from  trash album
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of FileAsset
     * @param { AsyncCallback<void> } callback - Returns void
     */
    recoverAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Recover assets from  trash album
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of FileAsset
     * @returns { Promise<void> } Returns void
     */
    recoverAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Recover assets from  trash album
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of FileAsset
     * @param { AsyncCallback<void> } callback - Returns void
     */
    deleteAssets(assets: Array<FileAsset>, callback: AsyncCallback<void>): void;
    /**
     * Recover assets from  trash album
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<FileAsset> } assets - Array of FileAsset
     * @returns { Promise<void> } Returns the promise
     */
    deleteAssets(assets: Array<FileAsset>): Promise<void>;
    /**
     * Check album operation support
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param { AlbumOperations } op - The album operation to check
     * @returns { boolean } Returns true if the operation is supported, otherwise return false.
     */
    canPerform(op: AlbumOperations): boolean;
  }

  /**
   * Defines the UserFileManager class and provides functions to access the data in user file storage. 
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.Core
   */
  interface UserFileManager {
    /**
     * Query photo, video assets
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param options retrieval options.
     * @param callback Callback return the FetchResult.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     */
    getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Query photo, video assets
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param type Determined which kinds of asset to retrive.
     * @param options Retrieval options.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     * @returns A promise instance used to return the files in the format of a FetchResult instance
     */
    getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
    /**
     * Create Photo Asset
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param displayName File name
     * @param albumUri Asset will put into the album.
     * @param callback Callback used to return the FileAsset
     * @throws {BusinessError} 13900020 - if type displayName or albumUri is not string
     * @throws {BusinessError} 14000001 - if type displayName invalid
     */
    createPhotoAsset(displayName: string, albumUri: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Photo Asset
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param displayName File name
     * @param callback Callback used to return the FileAsset
     * @throws {BusinessError} 13900020 - if type displayName is not string
     * @throws {BusinessError} 14000001 - if type displayName invalid
     */
    createPhotoAsset(displayName: string, callback: AsyncCallback<FileAsset>): void;
    /**
     * Create Photo Asset
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param displayName File name
     * @param albumUri Album uri is optional, asset will put into the default album without albumUri
     * @throws {BusinessError} 13900020 - if type displayName or albumUri is not string
     * @returns A Promise instance used to return the FileAsset
     */
    createPhotoAsset(displayName: string, albumUri?: string): Promise<FileAsset>;
    /**
     * Create a TYPE_USER_GENERIC user album.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Album name to be created.
     * @param { AsyncCallback<Album> } callback - Returns the instance of newly created Album
     */
    createAlbum(name: string, callback: AsyncCallback<Album>): void;
    /**
     * Create a TYPE_USER_GENERIC user album.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Album name to be created.
     * @returns { Promise<Album> } Returns the instance of newly created Album
     */
    createAlbum(name: string): Promise<Album>;
    /**
     * Delete a TYPE_USER_GENERIC generic user-created album.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Specify which album to delete
     * @param { AsyncCallback<void> } callback - Returns void
     */
    deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void;
    /**
     * Delete a TYPE_USER_GENERIC generic user-created album.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Specify which album to delete
     * @returns { Promise<void> } Returns the promise
     */
    deleteAlbums(albums: Array<Album>): Promise<void>;
    /**
     * Obtains albums based on the retrieval options.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubType } subType - Album subtype.
     * @param { FetchOptions } options - options to fetch albums
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws {BusinessError} 13900020 - if type options is not FetchOption
     */
    getAlbums(type: AlbumType, subType: AlbumSubType, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the retrieval options.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubType } subType - Album subtype.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws {BusinessError} 13900020 - if type options is not FetchOption
     */
    getAlbums(type: AlbumType, subType: AlbumSubType, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the retrieval options.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Album type.
     * @param { AlbumSubType } subType - Album subtype.
     * @param { FetchOptions } [options] -options to fetch albums
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result of the albums
     * @throws {BusinessError} 13900020 - if type options is not FetchOption
     */
    getAlbums(type: AlbumType, subType: AlbumSubType, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Obtains albums based on the retrieval options.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - options to fetch albums
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws {BusinessError} 13900020 - if type options is not FetchOption
     */
    getAlbums(options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the retrieval options.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result of the albums
     * @throws {BusinessError} 13900020 - if type options is not FetchOption
     */
    getAlbums(callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains albums based on the retrieval options.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } [options] - Callback used to return an album array.
     * @returns { Promise<FetchResult<Album>> } - Returns the fetch result of the albums
     * @throws {BusinessError} 13900020 - if type options is not FetchOption
     */
    getAlbums(options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * Query audio assets
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_AUDIO
     * @param options Retrieval options.
     * @param callback Callback return the FetchResult.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     */
    getAudioAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void;
    /**
     * Query audio assets
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_AUDIO
     * @param type Determined which kinds of asset to retrive.
     * @param options Retrieval options.
     * @throws {BusinessError} 13900020 - if type options is not FetchOptions
     * @returns A promise instance used to return the files in the format of a FetchResult instance
     */
    getAudioAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>;
    /**
    * Delete Asset
    * @since 9
    * @systemapi
    * @syscap SystemCapability.FileManagement.UserFileManager.Core
    * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
    * @param uri Uri of asset
    * @param callback No value returned
    * @throws {BusinessError} 13900020 - if type uri is not string
    */
    delete(uri: string, callback: AsyncCallback<void>): void;
    /**
     * Delete Asset
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.WRITE_IMAGEVIDEO or ohos.permission.READ_AUDIO and ohos.permission.WRITE_AUDIO
     * @param uri Uri of asset
     * @throws {BusinessError} 13900020 - if type uri is not string
     * @returns A Promise instance, no value returned
     */
    delete(uri: string): Promise<void>;
    /**
     * Turn on monitor the data changes
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param type One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange'
     * @param callback No value returned
     */
    on(type: ChangeEvent, callback: Callback<void>): void;
    /**
     * Turn off monitor the data changes
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param type One of 'deviceChange','albumChange','imageChange','audioChange','videoChange','remoteFileChange'
     * @param callback No value returned
     */
    off(type: ChangeEvent, callback?: Callback<void>): void;
    /**
     * Get Active Peer device information
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @param callback, Callback return the list of the active peer devices' information
     */
    getActivePeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get Active Peer device information
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @returns Promise used to return the list of the active peer devices' information
     */
    getActivePeers(): Promise<Array<PeerInfo>>;
    /**
     * Get all the peer devices' information
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @param callback Callback return the list of the all the peer devices' information
     */
    getAllPeers(callback: AsyncCallback<Array<PeerInfo>>): void;
    /**
     * Get all the peer devices' information
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     * @returns Promise used to return the list of the all the peer devices' information
     */
    getAllPeers(): Promise<Array<PeerInfo>>;
    /**
     * Release UserFileManager instance
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     * @param callback no value returned
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Release UserFileManager instance
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.Core
     */
    release(): Promise<void>;
  }

  /**
   * Peer devices' information
   * @since 9
   * @systemapi
   * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
   */
  interface PeerInfo {
    /**
     * Peer device name
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     */
    readonly deviceName: string;
    /**
     * Peer device network id
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     */
    readonly networkId: string;
    /**
     * Peer device online status
     * @since 9
     * @systemapi
     * @syscap SystemCapability.FileManagement.UserFileManager.DistributedCore
     */
    readonly isOnline: boolean;
  }
}

export default userFileManager;
