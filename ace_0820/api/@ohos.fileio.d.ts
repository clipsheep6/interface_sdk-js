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
import { AsyncCallback } from './basic'

export default fileIO;

/**
 * @devices phone, tablet, tv, wearable
 */
declare namespace fileIO {
    export { access };
    export { accessSync };
    export { chmod };
    export { chmodSync };
    export { chown };
    export { chownSync };
    export { close };
    export { closeSync };
    export { copyFile };
    export { copyFileSync };
    export { createStream };
    export { createStreamSync };
    export { createWatcher };
    export { fchmod };
    export { fchmodSync };
    export { fchown };
    export { fchownSync };
    export { fdatasync };
    export { fdatasyncSync };
    export { fdopenStream };
    export { fdopenStreamSync };
    export { fstat };
    export { fstatSync };
    export { fsync };
    export { fsyncSync };
    export { ftruncate };
    export { ftruncateSync };
    export { hash };
    export { lchown };
    export { lchownSync };
    export { lstat };
    export { lstatSync };
    export { mkdir };
    export { mkdirSync };
    export { mkdtemp };
    export { mkdtempSync };
    export { open };
    export { openSync };
    export { opendir };
    export { opendirSync };
    export { read };
    export { readSync };
    export { readText };
    export { readTextSync };
    export { rename };
    export { renameSync };
    export { rmdir };
    export { rmdirSync };
    export { stat };
    export { statSync };
    export { symlink };
    export { symlinkSync };
    export { truncate };
    export { truncateSync };
    export { unlink };
    export { unlinkSync };
    export { write };
    export { writeSync };
    export { Dir };
    export { Dirent };
    export { ReadOut };
    export { Stat };
    export { Stream };
    export { Watcher };
}

/**
 * access.
 *
 * @function access
 * @param {string} path - path.
 * @param {number} [mode = 0] - mode.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function access(path: string, mode?: number): Promise<void>;
declare function access(path: string, callback: AsyncCallback<void>): void;
declare function access(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * accessSync.
 *
 * @function accessSync
 * @param {string} path - path.
 * @param {number} [mode = 0] - mode.
 * @returns {void} access success
 * @throws {TypedError | Error} access fail
 */
declare function accessSync(path: string, mode?: number): void;
/**
 * close.
 *
 * @function close
 * @param {number} fd - fd.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function close(fd: number): Promise<void>;
declare function close(fd: number, callback: AsyncCallback<void>): void;
/**
 * closeSync.
 *
 * @function closeSync
 * @param {number} fd - fd.
 * @returns {void} close success
 * @throws {TypedError | Error} close fail
 */
declare function closeSync(fd: number): void;
/**
 * copyFile.
 *
 * @function copyFile
 * @param {string | number} src - src.
 * @param {string | number} dest - dest.
 * @param {number} [mode = 0] - mode.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function copyFile(src: string | number, dest: string | number, mode?: number): Promise<void>;
declare function copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>): void;
declare function copyFile(src: string | number, dest: string | number, mode: number, callback: AsyncCallback<void>): void;
/**
 * copyFileSync.
 *
 * @function copyFileSync
 * @param {string | number} src - src.
 * @param {string | number} dest - dest.
 * @param {number} [mode = 0] - mode.
 * @returns {void} copyFile success
 * @throws {TypedError | Error} copyFile fail
 */
declare function copyFileSync(src: string | number, dest: string | number, mode?: number): void;
/**
 * createStream.
 *
 * @function createStream
 * @param {string} path - path.
 * @param {string} mode - mode.
 * @param {AsyncCallback<Stream>} [callback] - callback.
 * @returns {void | Promise<Stream>} no callback return Promise otherwise return Stream
 * @throws {TypedError} Parameter check failed
 */
declare function createStream(path: string, mode: string): Promise<Stream>;
declare function createStream(path: string, mode: string, callback: AsyncCallback<Stream>): void;
/**
 * createStreamSync.
 *
 * @function createStreamSync
 * @param {string} path - path.
 * @param {string} mode - mode.
 * @returns {Stream} createStream
 * @throws {TypedError} Parameter check failed
 */
declare function createStreamSync(path: string, mode: string): Stream;
/**
 * chown.
 *
 * @function appendFile
 * @param {string} path - path.
 * @param {number} uid - mode.
 * @param {number} gid - mode.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function chown(path: string, uid: number, gid: number): Promise<void>;
declare function chown(path: string, uid: number, gid: number, callback: AsyncCallback<void>): void;
/**
 * chownSync.
 *
 * @function appendFile
 * @param {string} path - path.
 * @param {number} uid - mode.
 * @param {number} gid - mode.
 * @returns {void} chown success
 * @throws {TypedError | Error} chown fail
 */
declare function chownSync(path: string, uid: number, gid: number): void;
/**
 * chmod.
 *
 * @function chmod
 * @param {string} path - path.
 * @param {number} mode - mode.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function chmod(path: string, mode: number): Promise<void>;
declare function chmod(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * chmodSync.
 *
 * @function chmodSync
 * @param {string} path - path.
 * @param {number} mode - mode.
 * @returns {void} chmod success
 * @throws {TypedError | Error} chmod fail
 */
declare function chmodSync(path: string, mode: number): void;
/**
 * ftruncate.
 *
 * @function ftruncate
 * @param {number} fd - fd.
 * @param {number} [len = 0] - len.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function ftruncate(fd: number, len?: number): Promise<void>;
declare function ftruncate(fd: number, callback: AsyncCallback<void>): void;
declare function ftruncate(fd: number, len: number, callback: AsyncCallback<void>): void;
/**
 * ftruncateSync.
 *
 * @function ftruncateSync
 * @param {number} fd - fd.
 * @param {number} [len = 0] - len.
 * @returns {void} ftruncate success
 * @throws {TypedError | Error} ftruncate fail
 */
declare function ftruncateSync(fd: number, len?: number): void;
/**
 * fsync.
 *
 * @function fsync
 * @param {number} fd - fd.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function fsync(fd: number): Promise<void>;
declare function fsync(fd: number, callback: AsyncCallback<void>): void;
/**
 * fsyncSync.
 *
 * @function fsyncSync
 * @param {number} fd - fd.
 * @returns {void} fsync success
 * @throws {TypedError | Error} fsync fail
 */
declare function fsyncSync(fd: number): void;
/**
 * fstat.
 *
 * @function fstat
 * @param {number} fd - fd.
 * @returns {Stat}
 * @throws {TypedError | Error} fstat fail
 */
declare function fstat(fd: number): Promise<Stat>;
declare function fstat(fd: number, callback: AsyncCallback<Stat>): void;
/**
 * fstatSync.
 *
 * @function fstatSync
 * @param {number} fd - fd.
 * @returns {Stat}
 * @throws {TypedError | Error} fstat fail
 */
declare function fstatSync(fd: number): Stat;
/**
 * fdatasync.
 *
 * @function fdatasync
 * @param {number} fd - fd.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function fdatasync(fd: number): Promise<void>;
declare function fdatasync(fd: number, callback: AsyncCallback<void>): void;
/**
 * fdatasyncSync.
 *
 * @function fdatasyncSync
 * @param {number} fd - fd.
 * @returns {void} fdatasync success
 * @throws {TypedError | Error} fdatasync fail
 */
declare function fdatasyncSync(fd: number): void;
/**
 * fchown.
 *
 * @function fchown
 * @param {number} fd - fd.
 * @param {number} uid - uid.
 * @param {number} gid - gid.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function fchown(fd: number, uid: number, gid: number): Promise<void>;
declare function fchown(fd: number, uid: number, gid: number, callback: AsyncCallback<void>): void;
/**
 * fchownSync.
 *
 * @function fchownSync
 * @param {number} fd - fd.
 * @param {number} uid - uid.
 * @param {number} gid - gid.
 * @returns {void} fchown success
 * @throws {TypedError | Error} fchown fail
 */
declare function fchownSync(fd: number, uid: number, gid: number): void;
/**
 * fchmod.
 *
 * @function fchmod
 * @param {number} fd - fd.
 * @param {number} mode - mode.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function fchmod(fd: number, mode: number): Promise<void>;
declare function fchmod(fd: number, mode: number, callback: AsyncCallback<void>): void;
/**
 * fchmodSync.
 *
 * @function fchmodSync
 * @param {number} fd - fd.
 * @param {number} mode - mode.
 * @returns {void} fchmod success
 * @throws {TypedError | Error} fchmod fail
 */
declare function fchmodSync(fd: number, mode: number): void;
/**
 * fdopenStream.
 *
 * @param {number} fd - fd.
 * @param {string} mode - mode.
 * @param {AsyncCallback<Stream>} [callback] - callback.
 * @returns {void | Promise<Stream>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function fdopenStream(fd: number, mode: string): Promise<Stream>;
declare function fdopenStream(fd: number, mode: string, callback: AsyncCallback<Stream>): void;
/**
 * fdopenStreamSync.
 *
 * @param {number} fd - fd.
 * @param {string} mode - mode.
 * @returns {Stream} open stream from fd
 * @throws {TypedError | Error} open fail
 */
declare function fdopenStreamSync(fd: number, mode: string): Stream;
 /**
 * hash.
 * @static
 * @param {string} path - path.
 * @param {string} algorithm - algorithm md5 sha1 sha256.
 * @param {AsyncCallback<string>} [callback] - callback.
 * @returns {void | Promise<string>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function hash(path: string, algorithm: string): Promise<string>;
declare function hash(path: string, algorithm: string, callback: AsyncCallback<string>): void;
/**
 * lchown.
 *
 * @function lchown
 * @param {string} path - path.
 * @param {number} uid - uid.
 * @param {number} gid - gid.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function lchown(path: string, uid: number, gid: number): Promise<void>;
declare function lchown(path: string, uid: number, gid: number, callback: AsyncCallback<void>): void;
/**
 * lchownSync.
 *
 * @function lchownSync
 * @param {string} path - path.
 * @param {number} uid - uid.
 * @param {number} gid - gid.
 * @returns {void} lchown success
 * @throws {TypedError | Error} lchown fail
 */
declare function lchownSync(path: string, uid: number, gid: number): void;
/**
 * lstat.
 *
 * @function lstat
 * @param {string} path - path.
 * @param {AsyncCallback<Stat>} [callback] - callback.
 * @returns {void | Promise<Stat>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function lstat(path: string): Promise<Stat>;
declare function lstat(path: string, callback: AsyncCallback<Stat>): void;
/**
 * lstatSync.
 *
 * @function lstatSync
 * @param {string} path - path.
 * @returns {Stat} lstat success
 * @throws {TypedError | Error} lstat fail
 */
declare function lstatSync(path: string): Stat;
/**
 * mkdir.
 *
 * @function mkdir
 * @param {string} path - path.
 * @param {number} [mode = 0o775] - path.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function mkdir(path: string, mode?: number): Promise<void>;
declare function mkdir(path: string, callback: AsyncCallback<void>): void;
declare function mkdir(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * mkdirSync.
 *
 * @function mkdirSync
 * @param {string} path - path.
 * @param {number} [mode = 0o775] - path.
 * @returns {void} mkdir success
 * @throws {TypedError | Error} mkdir fail
 */
declare function mkdirSync(path: string, mode?: number): void;
/**
 * mkdtemp.
 *
 * @function mkdtemp
 * @param {string} prefix - dir prefix.
 * @param {AsyncCallback<string>} [callback] - callback.
 * @returns {void | Promise<string>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function mkdtemp(prefix: string): Promise<string>;
declare function mkdtemp(prefix: string, callback: AsyncCallback<string>): void;
/**
 * mkdtempSync.
 *
 * @function mkdtempSync
 * @param {string} prefix - dir prefix.
 * @returns {string} directory name
 * @throws {TypedError | Error} mkdtemp fail
 */
declare function mkdtempSync(prefix: string): string;
/**
 * open.
 *
 * @function open
 * @param {string} path - path.
 * @param {number} [flags = 0] - flags.
 * @param {number} [mode = 0o666] - mode.
 * @param {AsyncCallback<number>} [callback] - callback.
 * @returns {void | Promise<number>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function open(path: string, flags?: number, mode?: number): Promise<number>;
declare function open(path: string, callback: AsyncCallback<number>): void;
declare function open(path: string, flags: number, callback: AsyncCallback<number>): void;
declare function open(path: string, flags: number, mode: number, callback: AsyncCallback<number>): void;
/**
 * openSync.
 *
 * @function openSync
 * @param {string} path - path.
 * @param {number} [flags = 0] - flags.
 * @param {number} [mode = 0o666] - mode.
 * @returns {number} open fd
 * @throws {TypedError | Error} open fail
 */
declare function openSync(path: string, flags?: number, mode?: number): number;
/**
 * opendir.
 *
 * @param {string} path - directory name.
 * @param {AsyncCallback<Dir>} [callback] - callback.
 * @returns {void | Promise<Dir>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function opendir(path: string): Promise<Dir>;
declare function opendir(path: string, callback: AsyncCallback<Dir>): void;
/**
 * opendirSync.
 *
 * @param {string} path - directory name.
 * @returns {Dir} opendir Dir Object
 * @throws {TypedError | Error} opendir fail
 */
declare function opendirSync(path: string): Dir;
/**
 * readText.
 *
 * @function readText
 * @param {string} filePath - file path.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset in bytes.
 * @param {number} [options.length = -1] - length in bytes.
 * @param {number} [options.encoding = 'utf-8'] - encoding.
 * @param {AsyncCallback<string>} [callback] - callback.
 * @returns {void | Promise<string>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function readText(filePath: string, options?: {
    position?: number;
    length?: number;
    encoding?: string;
}): Promise<string>;
declare function readText(filePath: string, options: {
    position?: number;
    length?: number;
    encoding?: string;
}, callback: AsyncCallback<string>): void;

/**
 * readTextSync.
 *
 * @function readTextSync
 * @param {string} filePath - file path.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset in bytes.
 * @param {number} [options.length = -1] - length in bytes.
 * @param {number} [options.encoding = 'utf-8'] - encoding.
 * @returns {string} readout result
 * @throws {TypedError} Parameter check failed
 */
declare function readTextSync(filePath: string, options?: {
    position?: number;
    length?: number;
    encoding?: string;
}): string;

/**
 * read.
 *
 * @function read
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset.
 * @param {number} [options.length = -1] - length.
 * @param {number} [options.position = -1] - position.
 * @param {AsyncCallback<ReadOut>} [callback] - callback.
 * @returns {void | Promise<ReadOut>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function read(fd: number, buffer: ArrayBuffer, options?: {
    offset?: number;
    length?: number;
    position?: number;
}): Promise<ReadOut>
declare function read(fd: number, buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void;
declare function read(fd: number, buffer: ArrayBuffer, options: {
    offset?: number;
    length?: number;
    position?: number;
}, callback: AsyncCallback<ReadOut>): void;
/**
 * readSync.
 *
 * @function readSync
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset.
 * @param {number} [options.length = -1] - length.
 * @param {number} [options.position = -1] - position.
 * @returns {number} number of bytesRead
 * @throws {TypedError | Error} read fail
 */
declare function readSync(fd: number, buffer: ArrayBuffer, options?: {
    offset?: number;
    length?: number;
    position?: number;
}): number;
/**
 * rename.
 *
 * @function rename
 * @param {string} oldPath - oldPath.
 * @param {string} newPath - newPath.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function rename(oldPath: string, newPath: string): Promise<void>;
declare function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void;
/**
 * renameSync.
 *
 * @function renameSync
 * @param {string} oldPath - oldPath.
 * @param {string} newPath - newPath.
 * @returns {void} rename success
 * @throws {TypedError | Error} rename fail
 */
declare function renameSync(oldPath: string, newPath: string): void;
/**
 * rmdir.
 *
 * @function rmdir
 * @param {string} path - path.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function rmdir(path: string): Promise<void>;
declare function rmdir(path: string, callback: AsyncCallback<void>): void;
/**
 * rmdirSync.
 *
 * @function rmdirSync
 * @param {string} path - path.
 * @returns {void} rmdir success
 * @throws {TypedError | Error} rmdir fail
 */
declare function rmdirSync(path: string): void;
/**
 * stat.
 * @static
 * @param {string} path - path.
 * @param {AsyncCallback<number>} [callback] - callback.
 * @returns {void | Promise<Stat>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function stat(path: string): Promise<Stat>;
declare function stat(path: string, callback: AsyncCallback<Stat>): void;
/**
 * statSync.
 * @static
 * @param {string} path - path.
 * @returns {Stat} stat success
 * @throws {TypedError | Error} stat fail
 */
declare function statSync(path: string): Stat;
/**
 * symlink.
 *
 * @function symlink
 * @param {string} target - target.
 * @param {string} srcPath - srcPath.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function symlink(target: string, srcPath: string): Promise<void>;
declare function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void;
/**
 * symlinkSync.
 *
 * @function symlinkSync
 * @param {string} target - target.
 * @param {string} srcPath - srcPath.
 * @returns {void} symlink success
 * @throws {TypedError | Error} symlink fail
 */
 declare function symlinkSync(target: string, srcPath: string): void;
 /**
 * truncate.
 *
 * @function truncate
 * @param {string} path - path.
 * @param {number} [len = 0] - len.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function truncate(path: string, len?: number): Promise<void>;
declare function truncate(path: string, callback: AsyncCallback<void>): void;
declare function truncate(path: string, len: number, callback: AsyncCallback<void>): void;
/**
 * truncateSync.
 *
 * @function truncateSync
 * @param {string} path - path.
 * @param {number} [len = 0] - len.
 * @returns {void} truncate success
 * @throws {TypedError | Error} truncate fail
 */
declare function truncateSync(path: string, len?: number): void;
/**
 * unlink.
 *
 * @function unlink
 * @param {string} path - path.
 * @param {AsyncCallback<void>} [callback] - callback.
 * @returns {void | Promise<void>} no callback return Promise otherwise return void
 * @throws {TypedError} Parameter check failed
 */
declare function unlink(path: string): Promise<void>;
declare function unlink(path: string, callback: AsyncCallback<void>): void;
/**
 * unlinkSync.
 *
 * @function unlinkSync
 * @param {string} path - path.
 * @returns {void} unlink success
 * @throws {TypedError | Error} unlink fail
 */
declare function unlinkSync(path: string): void;
/**
 * write.
 *
 * @function write
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer | string} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset(bytes) ignored when buffer is string.
 * @param {number} [options.length = -1] - length(bytes) ignored when buffer is string.
 * @param {number} [options.position = -1] - position(bytes) where start to write < 0 use read, else use pread.
 * @param {string} [options.encoding = 'utf-8'] - encoding.
 * @param {AsyncCallback<number>} [callback] - callback.
 * @returns {void | Promise<number>} no callback return Promise otherwise return void
 * @throws {TypedError | RangeError} Parameter check failed
 */
declare function write(fd: number, buffer: ArrayBuffer | string, options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
}): Promise<number>;
declare function write(fd: number, buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;
declare function write(fd: number, buffer: ArrayBuffer | string, options: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
}, callback: AsyncCallback<number>): void;
/**
 * writeSync.
 *
 * @function writeSync
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer | string} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset(bytes) ignored when buffer is string.
 * @param {number} [options.length = -1] - length(bytes) ignored when buffer is string.
 * @param {number} [options.position = -1] - position(bytes) where start to write < 0 use read, else use pread.
 * @param {string} [options.encoding = 'utf-8'] -  encoding.
 * @returns {number} on success number of bytesRead
 * @throws {TypedError | RangeError | Error} write fail
 */
declare function writeSync(fd: number, buffer: ArrayBuffer | string, options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
}): number;

/**
 * createWatcher.
 *
 * @param {string} filename - filename.
 * @param {number} events - events(depends on OS & filesystem) events = 1 rename events =2 change.
 * @param {AsyncCallback<number>} [callback] - callback.
 * @returns {Watcher} watch success
 * @throws {TypedError | Error} watch fail
 */
declare function createWatcher(filename: string, events: number, callback: AsyncCallback<number>): Watcher;
/**
 * @devices phone, tablet, tv, wearable
 */
declare interface Dir {
    /**
     * read.
     *
     * @param {AsyncCallback<Dirent>} [callback] - callback.
     * @returns {void | Promise<Dirent>} no callback return Promise otherwise return void
     * @throws {TypedError} Parameter check failed if read to end, Error.msg = "NoMore"
     */
    read(): Promise<Dirent>;
    read(callback: AsyncCallback<Dirent>): void;
    /**
     * readSync.
     *
     * @returns {Dirent} Dirent Object
     * @throws {TypedError | Error} read fail if read to end, Error.msg = "NoMore"
     */
    readSync(): Dirent;
    /**
     * close.
     *
     * @param {AsyncCallback<void>} [callback] - callback.
     * @returns {void | Promise<void>} close success
     * @throws {TypedError | Error} close fail
     */
    close(): Promise<void>;
    close(callback: AsyncCallback<void>): void;
    /**
     * closeSync.
     *
     * @returns {void} close success
     * @throws {TypedError | Error} close fail
     */
    closeSync(): void;
}

/**
 * @devices phone, tablet, tv, wearable
 */
declare interface Dirent {
    /**
     * @type {string}
     * @readonly
     */
    readonly name: string;
    /**
     * isBlockDevice.
     * @returns {boolean} is or not
     */
    isBlockDevice(): boolean;
    /**
     * isCharacterDevice.
     * @returns {boolean} is or not
     */
    isCharacterDevice(): boolean;
    /**
     * isDirectory.
     * @returns {boolean} is or not
     */
    isDirectory(): boolean;
    /**
     * isFIFO.
     * @returns {boolean} is or not
     */
    isFIFO(): boolean;
    /**
     * isFile.
     * @returns {boolean} is or not
     */
    isFile(): boolean;
    /**
     * isSocket.
     * @returns {boolean} is or not
     */
    isSocket(): boolean;
    /**
     * isSymbolicLink.
     * @returns {boolean} is or not
     */
    isSymbolicLink(): boolean;
}

/**
 * @devices phone, tablet, tv, wearable
 */
declare interface Stat {
    /**
     * @type {number}
     * @readonly
     */
    readonly dev: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly ino: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly mode: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly nlink: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly uid: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly gid: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly rdev: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly size: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly blocks: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly atime: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly mtime: number;
    /**
     * @type {number}
     * @readonly
     */
    readonly ctime: number;
    /**
     * isBlockDevice.
     * @returns {boolean} is or not
     */
    isBlockDevice(): boolean;
    /**
     * isCharacterDevice.
     * @returns {boolean} is or not
     */
    isCharacterDevice(): boolean;
    /**
     * isDirectory.
     * @returns {boolean} is or not
     */
    isDirectory(): boolean;
    /**
     * isFIFO.
     * @returns {boolean} is or not
     */
    isFIFO(): boolean;
    /**
     * isFile.
     * @returns {boolean} is or not
     */
    isFile(): boolean;
    /**
     * isSocket.
     * @returns {boolean} is or not
     */
    isSocket(): boolean;
    /**
     * isSymbolicLink.
     * @returns {boolean} is or not
     */
    isSymbolicLink(): boolean;
}
declare interface Stream {
    /**
     * close.
     *
     * @param {AsyncCallback<void>} [callback] - callback.
     * @returns {void | Promise<void>} close success
     * @throws {TypedError | Error} close fail
     */
    close(): Promise<void>;
    close(callback: AsyncCallback<void>): void;
    /**
     * closeSync.
     *
     * @returns {void} close success
     * @throws {TypedError | Error} close fail
     */
    closeSync(): void;
    /**
     * flush.
     *
     * @param {AsyncCallback<void>} [callback] - callback.
     * @returns {void | Promise<void>} no callback return Promise otherwise return void
     * @throws {TypedError} Parameter check failed
     */
    flush(): Promise<void>;
    flush(callback: AsyncCallback<void>): void;
    /**
     * flushSync.
     *
     * @returns {void} flush success
     * @throws {Error} flush fail
     */
    flushSync(): void;
    /**
     * write.
     *
     * @param {ArrayBuffer | string} buffer - file description.
     * @param {Object} [options] - options.
     * @param {number} [options.offset = 0] - offset(bytes) ignored when buffer is string.
     * @param {number} [options.length = -1] - length(bytes) ignored when buffer is string.
     * @param {number} [options.position = -1] - position(bytes) where start to write < 0 use read, else use pread.
     * @param {string} [options.encoding = 'utf-8'] -  encoding.
     * @param {AsyncCallback<number>} [callback] - callback.
     * @returns {void | Promise<number>} no callback return Promise otherwise return void
     * @throws {TypedError} Parameter check failed
     */
    write(buffer: ArrayBuffer | string, options?: {
        offset?: number;
        length?: number;
        position?: number;
        encoding?: string;
    }): Promise<number>;
    write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;
    write(buffer: ArrayBuffer | string, options: {
        offset?: number;
        length?: number;
        position?: number;
        encoding?: string;
    }, callback: AsyncCallback<number>): void;
    /**
     * writeSync.
     *
     * @param {ArrayBuffer | string} buffer - file description.
     * @param {Object} [options] - options.
     * @param {number} [options.offset = 0] - offset(bytes) ignored when buffer is string.
     * @param {number} [options.length = -1] - length(bytes) ignored when buffer is string.
     * @param {number} [options.position = -1] - position(bytes) where start to write < 0 use read, else use pread.
     * @param {string} [options.encoding = 'utf-8'] -  encoding.
     * @returns {number} on success number of bytes written
     * @throws {TypedError | Error} write fail
     */
    writeSync(buffer: ArrayBuffer | string, options?: {
        offset?: number;
        length?: number;
        position?: number;
        encoding?: string;
    }): number;
    /**
     * read.
     *
     * @param {ArrayBuffer} buffer - file description.
     * @param {Object} [options] - options.
     * @param {number} [options.offset = 0] - offset.
     * @param {number} [options.length = -1] - length.
     * @param {AsyncCallback<number>} [callback] - callback.
     * @returns {void | Promise<ReadOut>} no callback return Promise otherwise return void
     * @throws {TypedError} Parameter check failed
     */
    read(buffer: ArrayBuffer, options?: {
        position?: number;
        offset?: number;
        length?: number;
    }): Promise<ReadOut>;
    read(buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void;
    read(buffer: ArrayBuffer, options: {
        position?: number;
        offset?: number;
        length?: number;
    }, callback: AsyncCallback<ReadOut>): void;
    /**
     * readSync.
     *
     * @param {ArrayBuffer} buffer - file description.
     * @param {Object} [options] - options.
     * @param {number} [options.offset = 0] - offset.
     * @param {number} [options.length = -1] - length.
     * @returns {number} number of bytesRead
     * @throws {TypedError | Error} read fail
     */
    readSync(buffer: ArrayBuffer, options?: {
        position?: number;
        offset?: number;
        length?: number;
    }): number;
}

/**
 * @devices phone, tablet, tv, wearable
 */
declare interface ReadOut {
    /**
     * @type {number}
     * @readonly
     */
    bytesRead: number;
    /**
     * @type {number}
     * @readonly
     */
    offset: number;
    /**
     * @type {ArrayBuffer}
     * @readonly
     */
    buffer: ArrayBuffer;
}

declare interface Watcher {
    /**
     * stop.
     *
     * @param {AsyncCallback<void>} [callback] - callback.
     * @returns {void | Promise<void>} stop success
     * @throws {TypedError | Error} stop fail
     */
    stop(): Promise<void>;
    stop(callback: AsyncCallback<void>): void;
}