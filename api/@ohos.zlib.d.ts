/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * @file
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * @namespace zlib
 * @syscap SystemCapability.BundleManager.Zlib
 * @since 7
 */
/**
 * @namespace zlib
 * @syscap SystemCapability.BundleManager.Zlib
 * @atomicservice
 * @since 11
 */
declare namespace zlib {
  /**
   * ErrorCode
   *
   * @enum { number }
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7
   * @deprecated since 9
   */
  export enum ErrorCode {
    /**
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     * @deprecated since 9
     */
    ERROR_CODE_OK = 0,
    /**
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     * @deprecated since 9
     */
    ERROR_CODE_ERRNO = -1
  }

  /**
   * CompressLevel
   *
   * @enum { number }
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7
   */
  /**
   * CompressLevel
   *
   * @enum { number }
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export enum CompressLevel {
    /**
     * Indicates the no compression mode.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the no compression mode.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COMPRESS_LEVEL_NO_COMPRESSION = 0,
    /**
     * Indicates the best speed mode.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the best speed mode.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COMPRESS_LEVEL_BEST_SPEED = 1,
    /**
     * Indicates the best compression mode.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the best compression mode.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COMPRESS_LEVEL_BEST_COMPRESSION = 9,
    /**
     * Indicates the default compression mode.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the default compression mode.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COMPRESS_LEVEL_DEFAULT_COMPRESSION = -1
  }

  /**
   * CompressStrategy
   *
   * @enum { number }
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7
   */
  /**
   * CompressStrategy
   *
   * @enum { number }
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export enum CompressStrategy {
    /**
     * Indicates the default strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the default strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COMPRESS_STRATEGY_DEFAULT_STRATEGY = 0,
    /**
     * Indicates the filtered strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the filtered strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COMPRESS_STRATEGY_FILTERED = 1,
    /**
     * Indicates the huffman-only strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the huffman-only strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COMPRESS_STRATEGY_HUFFMAN_ONLY = 2,
    /**
     * Indicates the RLE strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the RLE strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COMPRESS_STRATEGY_RLE = 3,
    /**
     * Indicates the fixed strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the fixed strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COMPRESS_STRATEGY_FIXED = 4
  }

  /**
   * MemLevel
   *
   * @enum { number }
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7
   */
  /**
   * MemLevel
   *
   * @enum { number }
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  export enum MemLevel {
    /**
     * Uses the least amount of memory.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Uses the least amount of memory.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    MEM_LEVEL_MIN = 1,
    /**
     * Uses the maximum amount of memory.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Uses the maximum amount of memory.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    MEM_LEVEL_MAX = 9,
    /**
     * Uses the default amount of memory.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Uses the default amount of memory.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    MEM_LEVEL_DEFAULT = 8
  }

  /**
   * Defines compress or decompress options.
   *
   * @typedef Options
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7
   */
  /**
   * Defines compress or decompress options.
   *
   * @typedef Options
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  interface Options {
    /**
     * Indicates the compress level.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the compress level.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    level?: CompressLevel;
    /**
     * Indicates the memory level.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the memory level.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    memLevel?: MemLevel;
    /**
     * Indicates the compress strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7
     */
    /**
     * Indicates the compress strategy.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    strategy?: CompressStrategy;
  }

  /**
   * GzFile structure definition.
   *
   * @typedef GzFile
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12
   */
  interface GzFile {
    /**
     * The remaining number of readable data bytes in the current read buffer.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    have: number;

    /**
     * Next pending data.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    next: string;

    /**
     * The current offset for reading and writing.
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    pos: number;
  }

  /**
   * Compress the specified file.
   *
   * @param { string } inFile Indicates the path of the file to be compressed.
   * @param { string } outFile Indicates the path of the output compressed file.
   * @param { Options } options
   * @returns { Promise<void> }
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.zlib#compressFile
   */
  function zipFile(inFile: string, outFile: string, options: Options): Promise<void>;

  /**
   * Decompress the specified file.
   *
   * @param { string } inFile Indicates the path of the file to be decompressed.
   * @param { string } outFile Indicates the path of the decompressed file.
   * @param { Options } options
   * @returns { Promise<void> }
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.zlib#decompressFile
   */
  function unzipFile(inFile: string, outFile: string, options: Options): Promise<void>;

  /**
   * Compress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be compressed.
   * @param { string } outFile - Indicates the path of the output compressed file.
   * @param { Options } options - Indicates the options of compressing file.
   * @param { AsyncCallback<void> } callback - The callback of compressing file result.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 9
   */
  /**
   * Compress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be compressed.
   * @param { string } outFile - Indicates the path of the output compressed file.
   * @param { Options } options - Indicates the options of compressing file.
   * @param { AsyncCallback<void> } callback - The callback of compressing file result.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function compressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>): void;

  /**
   * Compress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be compressed.
   * @param { string } outFile - Indicates the path of the output compressed file.
   * @param { Options } options - Indicates the options of compressing file.
   * @returns { Promise<void> } Returns the result of compressFile file.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 9
   */
  /**
   * Compress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be compressed.
   * @param { string } outFile - Indicates the path of the output compressed file.
   * @param { Options } options - Indicates the options of compressing file.
   * @returns { Promise<void> } Returns the result of compressFile file.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function compressFile(inFile: string, outFile: string, options: Options): Promise<void>;

  /**
   * Decompress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be decompressed.
   * @param { string } outFile - Indicates the path of the output decompressed file.
   * @param { Options } options - Indicates the options of decompressing file.
   * @param { AsyncCallback<void> } callback - The callback of decompressing file result.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 9
   */
  /**
   * Decompress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be decompressed.
   * @param { string } outFile - Indicates the path of the output decompressed file.
   * @param { Options } options - Indicates the options of decompressing file.
   * @param { AsyncCallback<void> } callback - The callback of decompressing file result.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not ZIP format or damaged.
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 10
   */
  /**
   * Decompress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be decompressed.
   * @param { string } outFile - Indicates the path of the output decompressed file.
   * @param { Options } options - Indicates the options of decompressing file.
   * @param { AsyncCallback<void> } callback - The callback of decompressing file result.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not ZIP format or damaged.
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function decompressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>): void;

  /**
   * Decompress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be decompressed.
   * @param { string } outFile - Indicates the path of the output decompressed file.
   * @param { AsyncCallback<void> } callback - The callback of decompressing file result.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not ZIP format or damaged.
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 10
   */
  /**
   * Decompress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be decompressed.
   * @param { string } outFile - Indicates the path of the output decompressed file.
   * @param { AsyncCallback<void> } callback - The callback of decompressing file result.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not ZIP format or damaged.
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function decompressFile(inFile: string, outFile: string, callback: AsyncCallback<void>): void;

  /**
   * Decompress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be decompressed.
   * @param { string } outFile - Indicates the path of the output decompressing file.
   * @param { Options } options - Indicates the options of decompressing file.
   * @returns { Promise<void> } Returns the result of decompressing file.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 9
   */
  /**
   * Decompress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be decompressed.
   * @param { string } outFile - Indicates the path of the output decompressing file.
   * @param { Options } options - Indicates the options of decompressing file.
   * @returns { Promise<void> } Returns the result of decompressing file.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not ZIP format or damaged.
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 10
   */
  /**
   * Decompress the specified file.
   *
   * @param { string } inFile - Indicates the path of the file to be decompressed.
   * @param { string } outFile - Indicates the path of the output decompressing file.
   * @param { Options } options - Indicates the options of decompressing file.
   * @returns { Promise<void> } Returns the result of decompressing file.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not ZIP format or damaged.
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function decompressFile(inFile: string, outFile: string, options?: Options): Promise<void>;

  /**
   * Synchronize creation of gzip objects.
   *
   * @returns { Promise<GZip> } Returns zip objects.
   * @throws { TypedError } Parameter check failed.
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12
   */
  function createGZip(): Promise<GZip>;

  /**
   * Synchronize creation of gzip objects.
   *
   * @returns { GZip } Returns zip objects.
   * @throws { TypedError } Parameter check failed.
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12
   */
  function createGZipSync(): GZip;

  /**
   * Gzip related interfaces.
   *
   * @typedef GZip
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12
   */
  interface GZip {
    /**
     * Associate a gzFile with the file descriptor fd.
     *
     * @param { number } fd - The file descriptor. Usually this is obtained through system calls to 'open' or other methods.
     * @param { string } mode - Used to specify access mode.
     * @returns { Promise<GzFile> } Successfully returned object of GzFile type, failed returned null.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzdopen(fd: number, mode: string): Promise<GzFile>;

    /**
     * Set the internal buffer size used by this library's functions for file to size.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { number } size - The internal buffer size to be set.
     * @returns { Promise<number> } Returns 0 on success, or -1 on failure.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzbuffer(file: GzFile, size: number): Promise<number>;

    /**
     * Open the gzip (.gz) file at path for reading and decompressing, or compressing and writing.
     *
     * @param { string } path - The file path to be opened.
     * @param { string } mode - Specify the file opening method.
     * @returns { Promise<GzFile> } Return a Object to the gzFile structure.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzopen(path: string, mode: string): Promise<GzFile>;

    /**
     * Check if the reading position of the gzip compressed file has reached the end of the file.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<number> } Return 1 (true) if the end-of-file indicator for file has been set while reading, 0 (false) otherwise.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzeof(file: GzFile): Promise<number>;

    /**
     * Check if the specified gzip file handle file directly accesses the original uncompressed data.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<number> } returns 1 (true) if transparent writing was requested, or 0 (false) otherwise.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzdirect(file: GzFile): Promise<number>;

    /**
     * Flush all pending output for file, if necessary, close file and deallocate the (de)compression state.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<ReturnCode> } Return ReturnCode the specific meaning is defined as enum.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzclose(file: GzFile): Promise<ReturnCode>;

    /**
     * Clear the error and end-of-file flags for file.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<void> }
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzclearerr (file: GzFile): Promise<void>;

    /**
     * The error message for the last error which occurred on file.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<{errmsg: string, errno: number}> } {errmsg}: Return the error message for the last error which occurred on file.
     *                                                       {errno}: Return Zlib error number.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzerror(file: GzFile): Promise<{errmsg: string, errno: number}>;

    /**
     * Read and decompress one byte from file.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<number> } returns this byte or -1 in case of end of file or error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzgetc(file: GzFile): Promise<number>;

    /**
     * Flush all pending output to file.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { CompressFlush } flush - Control the behavior of refresh operations.
     * @returns { Promise<number> } The return value is the zlib error number.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzflush(file: GzFile, flush: CompressFlush): Promise<number>;

    /**
     * Compress and write nitems items of size size from buf to file.
     *
     * @param { ArrayBuffer } buf - The buffer to write data to.
     * @param { number } size - The number of bytes in a single data block.
     * @param { number } nitems - Number of data blocks to be written.
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<number> } Return the number of full items written of size size, or zero if there was an error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzfwrite(buf: ArrayBuffer, size: number, nitems: number, file: GzFile): Promise<number>;

    /**
     * Read and decompress data from gzip compressed files.
     *
     * @param { ArrayBuffer } buf - Target buffer for storing read results.
     * @param { number } size - The number of bytes in a single data block.
     * @param { number } nitems - Number of data blocks to be read.
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<number> } Return the number of full items read of size size,
     * or zero if the end of the file was reached and a full item could not be read, or if there was an error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzfread(buf: ArrayBuffer, size: number, nitems: number, file: GzFile): Promise<number>;

    /**
     * Same as gzclose(), gzclosew() only for use when writing or appending.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<ReturnCode> } Return ReturnCode the specific meaning is defined as enum.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzclosew(file: GzFile): Promise<number>;

    /**
     * Same as gzclose(), gzcloser() is only for use when reading.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<ReturnCode> } Return ReturnCode the specific meaning is defined as enum.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzcloser(file: GzFile): Promise<number>;

    /**
     * Compress and write the len uncompressed bytes at buf to file.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { ArrayBuffer } buffer - Object to the data buffer to be written.
     * @returns { Promise<number> } Return the number of uncompressed bytes written or 0 in case of error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzwrite(file: GzFile, buffer: ArrayBuffer): Promise<number>;

    /**
     * Unread one character before the read pointer of the gzip compressed file.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { string } format - Contains format descriptors and regular text.
     * @param { string } args - variable argument lists.
     * @returns { Promise<number> } Returns the actual number of bytes written to the gzip file.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzvprintf(file: GzFile, format: string, args: string): Promise<number>;

    /**
     * Push c back onto the stream for file to be read as the first character on the next read.
     *
     * @param { string } c - To fall back to the character before the input stream.
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<number> } Return the character pushed, or -1 on failure.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzungetc(c: string, file: GzFile): Promise<number>;

    /**
     * Return the starting position for the next gzread or gzwrite on file.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<number> } Return the starting position for the next gzread or gzwrite on file.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gztell64(file: GzFile): Promise<number>;

    /**
     * Return the starting position for the next gzread or gzwrite on file.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<number> } Return the starting position for the next gzread or gzwrite on file.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gztell(file: GzFile): Promise<number>;

    /**
     * Dynamically update the compression level and strategy for file.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { CompressLevel } level - Compression level.
     * @param { number } strategy - Compression strategy.
     * @returns { Promise<ReturnCode> } Return ReturnCode the specific meaning is defined as enum.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzsetparams(file: GzFile, level: CompressLevel, strategy: number): Promise<ReturnCode>;

    /**
     * Set the starting position to offset relative to whence for the next gzread or gzwrite on file.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { number } offset - Specify the new offset to move to.
     * @param { number } whence - Define the reference point for offset.
     * @returns { Promise<number> } Return the resulting offset location as measured in bytes from the beginning of the uncompressed stream, or -1 in case of error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzseek64(file: GzFile, offset: number, whence: number): Promise<number>;

    /**
     * Set the starting position to offset relative to whence for the next gzread or gzwrite on file.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { number } offset - Specify the new offset to move to.
     * @param { number } whence - Define the reference point for offset.
     * @returns { Promise<number> } Return the resulting offset location as measured in bytes from the beginning of the uncompressed stream, or -1 in case of error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzseek(file: GzFile, offset: number, whence: number): Promise<number>;

    /**
     * Rewind file. This function is supported only for reading.
     *
     * @param { GzFile } file - GzFile type object.
     * @returns { Promise<ReturnCode> } returns the resulting offset location as measured in bytes from the beginning of the uncompressed stream, or -1 in case of error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzrewind(file: GzFile): Promise<ReturnCode>;

    /**
     * Read and decompress up to len uncompressed bytes from file into buf.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { ArrayBuffer } buffer - User provided buffer address.
     * @returns { Promise<number> } Return the number of uncompressed bytes actually read, less than len for end of file, or -1 for error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzread(file: GzFile, buffer: ArrayBuffer): Promise<number>;

    /**
     * Compress and write the given null-terminated string s to file, excluding the terminating null character.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { string } str - Format descriptors and plain text.
     * @returns { Promise<number> } Return the number of characters written, or -1 in case of error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzputs(file: GzFile, str: string): Promise<number>;

    /**
     * Compress and write c, converted to an unsigned char, into file.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { string } char - Characters to be written.
     * @returns { Promise<number> } Return the value that was written, or -1 in case of error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzputc(file: GzFile, char: string): Promise<number>;

    /**
     * Convert, format, compress, and write the arguments to file under control of the string format, as in fprintf.
     *
     * @param { GzFile } file - GzFile type object.
     * @param { string } format - Format descriptors and plain text.
     * @param { string } args - variable argument lists.
     * @returns { Promise<number> } Return the number of uncompressed bytes actually written, or a negative zlib error code in case of error.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzprintf(file: GzFile, format: string, args: string): Promise<number>;

    /**
     * Open gzip compressed file with wide character path name and mode.
     *
     * @param { string } widePath - A wide character path name.
     * @param { string } mode - Specify the file opening method.
     * @returns { Promise<GzFile> } Return a Object to the gzFile structure.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzopenw(widePath: string, mode: string): Promise<GzFile>;

    /**
     * Open the gzip (.gz) file at path for reading and decompressing, or compressing and writing.
     *
     * @param { string } path - The file path to be opened.
     * @param { string } mode - Specify the file opening method.
     * @returns { Promise<GzFile> } Return a Object to the gzFile structure.
     * @throws { TypedError } Parameter check failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12
     */
    gzopen64(filePath: string, mode: string): Promise<GzFile>;
  }

}
export default zlib;
