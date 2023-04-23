/**
 * The request agent api.
 * Supports "background" and "frontend" tasks as while.
 * Though "background" and "frontend" here do not the same with process's concept.
 * All tasks will be executed at request manager service and recorded.
 * Background tasks is for nonurgent transfer, such as caching videos for a later play.
 * Frontend tasks is for instant transfer, such as submitting forms for a consumption bill.
 * Background tasks use notification to tell user tasks' status information.
 * Frontend tasks use callback to tell caller tasks' status information.
 * Background has some automatically restore mechanism.
 * Frontend tasks controlled by caller.
 * Uses `mutipart/form-data` in client request for upload.
 * A `Content-Disposition: attachment; filename=<filename>` response from server leads to download.
 * More details, please see the architecture documents of the request subsystem.
 * @namespace agent
 * @syscap SystemCapability.Request.FileTransferAgent
 * @since 10
 */
export declare namespace agent {
    /**
     * The action options.
     * @enum { number }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    enum Action {
        /**
         * Indicates upload task.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        UPLOAD = 1,
        /**
         * Indicates download task.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        DOWNLOAD = 0,
    }
    /**
     * The mode options.
     * @enum { number }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    enum Mode {
        /**
         * Indicates frontend task.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        FRONTEND = 1,
        /**
         * Indicates background task.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        BACKGROUND = 0,
    }
    /**
     * The network options.
     * @enum { number }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    enum Network {
        /**
         * Indicates unrestrictedly.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        ANY = 0,
        /**
         * Indicates Wi-Fi only.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        WIFI = 1,
        /**
         * Indicates cellular only.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        CELLULAR = 2,
    }
    /**
     * The file item information for a task.
     * @typedef FileItem
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    interface FileItem {
        /**
         * Currently support:
         * 1, relative path, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", under caller's cache folder.
         * 2, uri path, like "datashare://bundle/xxx/yyy/zzz.html", the data provider must allow the caller's access.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        path: string;
        /**
         * The MIME type of the file.
         * For upload, the default is obtained by the suffix of the filename or uri.
         * For download, the default if the `Content-Type` of response.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        mimetype?: string;
        /**
         * The filename, the default is obtained by path.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        filename?: string;
    }
    /**
     * The configurations for a task.
     * Using a flexible configuration for clear upload and download functions.
     * If without emphasis, an option is for any task.
     * @typedef Conf
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    interface Conf {
        /**
         * The task action, upload or download.
         * @type { Action }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        action: Action;
        /**
         * The Universal Resource Locator for a task.
         * The maximum length is 2048 characters.
         * Using raw `url` option, even url parameters in it.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        url: string;
        /**
         * The files for a task.
         * For upload task, it supports multiple files per task.
         * For download task, only one file in a task.
         * Each path length complies system's requirements.
         * But there is a 4K bytes limit in total.
         * @type { Array<FileItem> }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        fileset: Array<FileItem>;
        /**
         * The title for a task, give a meaningful title please.
         * The maximum length is 256 characters.
         * The default is the same with its action.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        title?: string;
        /**
         * Indicates task's mode.
         * The default is background.
         * For frontend task, it has callbacks.
         * For background task, it has notifications and failback.
         * @type { Mode }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        mode?: Mode;
        /**
         * The solution choice when path already exists during download.
         * Currently support:
         * true, rewrite the existed file.
         * false, go to fail.
         * @type { boolean }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        cover?: boolean;
        /**
         * The HTTP standard method for upload or download: GET/POST/PUT.
         * Case insensitive.
         * For upload, use PUT/POST, the default is PUT.
         * For download, use GET/POST, the default is GET.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        method?: string;
        /**
         * The HTTP headers.
         * For upload request, the `Content-Type` is forced to `multipart/form-data`.
         * For download request, the default `Content-Type` is `application/json`.
         * @type { JSON }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        headers?: JSON;
        /**
         * The arguments, it can be any text, uses json usually.
         * For download, it is the raw body.
         * For upload, it is the others form items besides files.
         * The default is "{}".
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        data?: string;
        /**
         * The network.
         * @type { Network }
         * @default Network.ANY
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        network?: Network;
        /**
         * Allows work in metered network or not.
         * The default is false.
         * @type { boolean }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        metered?: boolean;
        /**
         * Allows work in roaming network or not.
         * The default is true.
         * @type { boolean }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        roaming?: boolean;
        /**
         * Enable automatic retry or not for the background task.
         * The frontend task is always fast-fail.
         * @type { boolean }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        retry?: boolean;
        /**
         * Allows redirect or not.
         * The default is yes.
         * @type { boolean }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        redirect?: boolean;
        /**
         * The index of paths for a task.
         * Usually used for a continuous job.
         * The default is 0.
         * @type { number }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        index?: number;
        /**
         * The start point of a file.
         * Usually used for a continuous job.
         * It will set the "Range" header in download.
         * It will start read at the point in upload.
         * The default is 0.
         * @type { number }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        begins?: number;
        /**
         * The end point of a file.
         * Usually used for a continuous job.
         * It will set The "Range" header in download.
         * It will end read at the point in upload.
         * The default is -1 indicating the end of the data for upload or download.
         * @type { number }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        ends?: number;
        /**
         * The policy of the progress notification for background task.
         * If false: only completed or failed notification, the default.
         * If true, emits every progress, completed or failed notifications.
         * @type { boolean }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        gauge?: boolean;
        /**
         * Breaks when fail to fetch filesize before upload/download or not.
         * Uses filesize for a precise gauge.
         * The default is not, set size as -1 indicating the case.
         * @type { boolean }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        precise?: boolean;
        /**
         * Associates ability of want in notification.
         * The ability must be one of the application which creates the task.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        ability?: string;
        /**
         * For in-application layer isolation.
         * If given:
         *   the minimum is 8 bytes.
         *   the maximum is 2048 bytes.
         * Creates a task with token, then must provide it during normal query.
         * So saves the token carefully, it can not be retrieved by query.
         * Or leave it empty.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        token?: string;
        /**
         * The extras for the configuration.
         * @type { JSON }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        extras?: JSON;
    }
    /**
     * @enum { number }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    enum State {
        /**
         * Indicates a task created by `new Task(conf)`.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        INITIALIZED = 0x00,
        /**
         * Indicates a task lack of resources or conditions to run or retry.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        WAITING = 0x10,
        /**
         * Indicates a task in processing now.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        RUNNING = 0x20,
        /**
         * Indicates a task failed once at least and in processing again now.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        RETRYING = 0x21,
        /**
         * Indicates a task tends to be resumed for continuous work.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        PAUSED = 0x30,
        /**
         * Indicates a task must be started again.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        STOPPED = 0x31,
        /**
         * Indicates a task finish its data transfer.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        COMPLETED = 0X40,
        /**
         * Indicates a task interrupted by some error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        FAILED = 0X41,
        /**
         * Indicates a task can not be processed again.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        REMOVED = 0x50,
    }
    /**
     * The progress data structure.
     * Upload allows multiple files per upload task.
     * Only one file in a download task.
     * So using a unified data structure for progress.
     * Generally:
     * 1, sum(sizes) is total files size of the task.
     * 2, float(processed)/sizes[counter] is the progress for the current processing file.
     * 3, float(sum(sizes[:index])+processed)/sum(sizes) is the summary progress for a task.
     * If fetch file size in failure, the size of the file in sizes will be set as -1.
     * @typedef Progress
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    interface Progress {
        /**
         * The current state of the task.
         * @type { State }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        state: State;
        /**
         * The current processing file index in a task.
         * @type { number }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        index: number;
        /**
         * The processed data size for the current file in a task.
         * @type { number }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        processed: number;
        /**
         * The sizes of files in a task.
         * @type { Array<number> }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        sizes: Array<number>;
        /**
         * The extras for an interaction.
         * Such as headers and body of response from server.
         * But when the Content-Disposition header responsed, the body will be into the uri of its attachment only, the body here is empty.
         * {"headers": {"key": v}, "body": "contents"}
         * @type { JSON }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        extras?: JSON;
    }
    /**
     * @enum { number }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    enum Broken {
        /**
         * Indicates others failure.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        OTHERS = 0xFF,
        /**
         * Indicates network disconnection.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        DISCONNECT = 0x00,
        /**
         * Indicates task timeout.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        TIMEOUT = 0x10,
        /**
         * Indicates protocol error, such as 5xx respose from server.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        PROTOCOL = 0x20,
        /**
         * Indicates filesystem io error, such as open/seek/read/write/close.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        FSIO = 0x40,
    }
    /**
     * The task information data structure for query results.
     * Provides common query and advanced query, visible range of fields is different.
     * @typedef TaskInfo
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    interface TaskInfo {
        /**
         * The UID of an application.
         * For system query only.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @systemapi
         * @since 10
         */
        readonly uid?: string;
        /**
         * The bundle name.
         * For system query only.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @systemapi
         * @since 10
         */
        readonly bundle?: string;
        /**
         * The url of a task.
         * For normal query only, empty as system.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly url?: string;
        /**
         * The files of a task.
         * For normal query only, empty as system.
         * @type { Array<FileItem> }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly fileset?: Array<FileItem>;
        /**
         * The arguments.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly data?: string;
        /**
         * The task id.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly tid: string;
        /**
         * The task title.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly title: string;
        /**
         * The task action.
         * @type { Action }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly action: Action;
        /**
         * Specifys task mode.
         * The default is frontend and background.
         * @type { Mode }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly mode: Mode;
        /**
         * The MiME type in the configuration of the task.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly mimetype: string;
        /**
         * An instance of `Progress` for a task.
         * @type { Progress }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly progress: Progress;
        /**
         * The progress notification policy of a background task.
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly gauge: boolean;
        /**
         * The creating date and time of a task in UTC pattern.
         * It is generted by system of current device.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly ctime: string
        /**
         * The modified date and time of a task in UTC pattern.
         * It is generted by system of current device.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly mtime: string;
        /**
         * The retry switch of a task.
         * Just for background, frontend always disabled.
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly retry: boolean;
        /**
         * The tried times of a task.
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly tries: number;
        /**
         * The broken case of a task.
         * @type { Broken }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly broken: Broken;
        /**
         * The reason of a waiting/failed/stopped/paused task.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly reason: string;
        /**
         * The extras of a task.
         * For background, the last response from server.
         * For frontend, nothing now.
         * @type { JSON }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly extras?: JSON;
    }
    /**
     * The task entry.
     * New task' status is "initialized" and enqueued.
     * For background, no callbacks.
     * Can `start` a initialized task.
     * Can `pause` a waiting/running/retrying background task.
     * Can `resume` a paused background task.
     * Can `stop` a running/waiting/retrying task and dequeue it.
     * @since 10
     * @syscap SystemCapability.Request.FileTransferAgent
     */
    interface Task {
        /**
         * The task id, unique on system.
         * Generated automatically by system.
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        readonly tid: string;
        /**
         * The configurations for the task.
         * @type { Conf }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        conf: Conf;
        /**
         * Enable the specified callback for a frontend task.
         * @param { "progress"|"completed"|"failed" } evt event types.
         * @param { (pg: Progress) => void } callback callback function with a `Progress` argument.
         * @throws {BusinessError} 401 - Parameter error.
         * @throws {BusinessError} 21900005 - task mode error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        on(evt: "progress" | "completed" | "failed", callback: (pg: Progress) => void): void;
        /**
         * Disable the specified callback for a frontend task.
         * @param { "progress"|"completed"|"failed" } evt event types.
         * @param { (pg: Progress) => void } callback callback function with a `Progress` argument.
         * @throws {BusinessError} 401 - Parameter error.
         * @throws {BusinessError} 21900005 - task mode error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        off(evt: "progress" | "completed" | "failed", callback?: (pg: Progress) => void): void;
        /**
         * Starts the task.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
         * @throws {BusinessError} 201 - Permission denied.
         * @throws {BusinessError} 13400003 - task service ability error.
         * @throws {BusinessError} 21900007 - task state error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        start(callback: AsyncCallback<void>): void;
        /**
         * Starts the task.
         * @permission ohos.permission.INTERNET
         * @throws {BusinessError} 201 - Permission denied.
         * @throws {BusinessError} 13400003 - task service ability error.
         * @throws {BusinessError} 21900007 - task state error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @returns { Promise<void> } the promise returned by the function.
         * @since 10
         */
        start(): Promise<void>;
        /**
         * Pauses the background task.
         * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
         * @throws {BusinessError} 13400003 - task service ability error.
         * @throws {BusinessError} 21900005 - task mode error.
         * @throws {BusinessError} 21900007 - task state error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        pause(callback: AsyncCallback<void>): void;
        /**
         * Pauses the background task.
         * @throws {BusinessError} 13400003 - task service ability error.
         * @throws {BusinessError} 21900005 - task mode error.
         * @throws {BusinessError} 21900007 - task state error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @returns { Promise<void> } the promise returned by the function.
         * @since 10
         */
        pause(): Promise<void>;
        /**
         * Resumes the background task.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
         * @throws {BusinessError} 201 - Permission denied.
         * @throws {BusinessError} 13400003 - task service ability error.
         * @throws {BusinessError} 21900005 - task mode error.
         * @throws {BusinessError} 21900007 - task state error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        resume(callback: AsyncCallback<void>): void;
        /**
         * Resumes the background task.
         * @permission ohos.permission.INTERNET
         * @throws {BusinessError} 201 - Permission denied.
         * @throws {BusinessError} 13400003 - task service ability error.
         * @throws {BusinessError} 21900005 - task mode error.
         * @throws {BusinessError} 21900007 - task state error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @returns { Promise<void> } the promise returned by the function.
         * @since 10
         */
        resume(): Promise<void>;
        /**
         * Stops the task.
         * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
         * @throws {BusinessError} 13400003 - task service ability error.
         * @throws {BusinessError} 21900007 - task state error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Stops the task.
         * @throws {BusinessError} 13400003 - task service ability error.
         * @throws {BusinessError} 21900007 - task state error.
         * @syscap SystemCapability.Request.FileTransferAgent
         * @returns { Promise<void> } the promise returned by the function.
         * @since 10
         */
        stop(): Promise<void>;
    }
    /**
     * The filter data structure.
     * Used for search, given fields works as **LOGICAL AND**.
     * Invalid value may cause a parameter error.
     * @typedef Filter
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    interface Filter {
        /**
         * Specifys the package name of an application.
         * Only for advanced search, common search will be fixed to the caller.
         * A "*" means any bundle.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @systemapi
         * @since 10
         */
        bundle?: string;
        /**
         * Specifys a end date and time in UTC pattern.
         * The default is the moment of calling.
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        before?: string;
        /**
         * Specifys a start date and time in UTC pattern.
         * The default is "`before` and 24 hours".
         * @type { string }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        after?: string;
        /**
         * Specifys the state of tasks.
         * The default is any state.
         * @type { State }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        state?: State;
        /**
         * Specifys the action of tasks, "upload" or "download", case insensitive.
         * The default is upload and download.
         * @type { Action }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        action?: Action;
        /**
         * Specifys taks's mode.
         * The default is frontend and background.
         * @type { Mode }
         * @syscap SystemCapability.Request.FileTransferAgent
         * @since 10
         */
        mode?: Mode;
    }
    /**
     * Creates a task for upload or download and enqueue it.
     * Only foreground application can create the frontend task.
     * It can deal only one frontend task at a time.
     * A in processing frontend task will be forced to stop when its application had switched to background.
     * A new frontend task will interrupt a existed in processing frontend task.
     * The background task is highly recommended.
     * @permission ohos.permission.INTERNET
     * @param { Conf } conf configurations for a task.
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400001 - file operation error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900004 - application task queue full error.
     * @throws {BusinessError} 21900005 - task mode error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    function create(conf: Conf, callback: AsyncCallback<Task>): void;
    /**
     * Creates a task for upload or download and enqueue it.
     * Only foreground application can create the frontend task.
     * It can deal only one frontend task at a time.
     * A in processing frontend task will be forced to stop when its application had switched to background.
     * A new frontend task will interrupt a existed in processing frontend task.
     * The background task is highly recommended.
     * @permission ohos.permission.INTERNET
     * @param { Conf } conf configurations for a task.
     * @throws {BusinessError} 201 - Permission denied.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400001 - file operation error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900004 - application task queue full error.
     * @throws {BusinessError} 21900005 - task mode error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @returns { Promise<Task> } the promise returned by the function.
     * @since 10
     */
    function create(conf: Conf): Promise<Task>;
    /**
     * Removes specifed task belongs to the caller.
     * The task will be forced to stop if in processing.
     * @param { BaseContext } context context of the caller.
     * @param { string } id the task id.
     * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating sucess or not.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900006 - task not found error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    function remove(context: BaseContext, id: string, callback: AsyncCallback<void>): void;
    /**
     * Removes specifed task belongs to the caller.
     * The task will be forced to stop if in processing.
     * @param { BaseContext } context context of the caller.
     * @param { string } id the task id.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900006 - task not found error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @returns { Promise<void> } the promise returned by the function.
     * @since 10
     */
    function remove(context: BaseContext, id: string): Promise<void>;
    /**
     * Shows specified task details belongs to the caller.
     * @param { BaseContext } context context of the caller.
     * @param { string } id the task id.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the current task.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900006 - task not found error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    function show(context: BaseContext, id: string, callback: AsyncCallback<TaskInfo>): void;
    /**
     * Shows specified task details belongs to the caller.
     * @param { BaseContext } context context of the caller.
     * @param { string } id the task id.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900006 - task not found error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @since 10
     */
    function show(context: BaseContext, id: string): Promise<TaskInfo>;
    /**
     * Touches specified task with token.
     * @param { BaseContext } context context of the caller.
     * @param { string } id the task id.
     * @param { string } token the in-application isolation key.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the current task.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900006 - task not found error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    function touch(context: BaseContext, id: string, token: string, callback: AsyncCallback<TaskInfo>): void;
    /**
     * Touches specified task with token.
     * @param { BaseContext } context context of the caller.
     * @param { string } id the task id.
     * @param { string } token the in-application isolation key.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900006 - task not found error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @since 10
     */
    function touch(context: BaseContext, id: string, token: string): Promise<TaskInfo>;
    /**
     * Searches tasks, for system.
     * @param { BaseContext } context context of the caller.
     * @param { string } filter an instance of `Filter`.
     * @param { AsyncCallback<Array<string>> } callback callback function with a `Array<string>` argument contains task ids match filter.
     * @throws {BusinessError} 202 - System API is not allowed called by third HAP.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 10
     */
    function search(context: BaseContext, filter: Filter, callback: AsyncCallback<Array<string>>): void;
    /**
     * Searches tasks, for system.
     * @param { BaseContext } context context of the caller.
     * @param { string } filter an instance of `Filter`.
     * @throws {BusinessError} 202 - System API is not allowed called by third HAP.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @returns { Promise<Array<string>> } the promise returned by the function.
     * @since 10
     */
    function search(context: BaseContext, filter: Filter): Promise<Array<string>>;
    /**
     * Queries specified task details.
     * @param { BaseContext } context context of the caller.
     * @param { string } id the task id.
     * @param { AsyncCallback<TaskInfo> } callback callback function with a `TaskInfo` argument for informations of the current task.
     * @throws {BusinessError} 202 - System API is not allowed called by third HAP.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900006 - task not found error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @systemapi
     * @since 10
     */
    function query(context: BaseContext, id: string, callback: AsyncCallback<TaskInfo>): void;
    /**
     * Queries specified task details.
     * @param { BaseContext } context context of the caller.
     * @param { string } id the task id.
     * @throws {BusinessError} 202 - System API is not allowed called by third HAP.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @throws {BusinessError} 21900006 - task not found error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @returns { Promise<TaskInfo> } the promise returned by the function.
     * @systemapi
     * @since 10
     */
    function query(context: BaseContext, id: string): Promise<TaskInfo>;
    /**
     * Deletes specifed tasks.
     * The task will be forced to stop if in processing.
     * @param { BaseContext } context context of the caller.
     * @param { Array<string> } ids the task id.
     * @param { AsyncCallback<Array<string>> } callback callback function with a `Array<string>` argument contains task ids had cleared.
     * @throws {BusinessError} 202 - System API is not allowed called by third HAP.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @systemapi
     * @since 10
     */
    function clear(context: BaseContext, ids: Array<string>, callback: AsyncCallback<Array<string>>): void;
    /**
     * Deletes specifed tasks.
     * The task will be forced to stop if in processing.
     * @param { BaseContext } context context of the caller.
     * @param { Array<string> } ids the task id.
     * @throws {BusinessError} 202 - System API is not allowed called by third HAP.
     * @throws {BusinessError} 401 - Parameter error.
     * @throws {BusinessError} 13400003 - task service ability error.
     * @returns { Promise<Array<string>> } the promise returned by the function.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @systemapi
     * @since 10
     */
    function clear(context: BaseContext, ids: Array<string>): Promise<Array<string>>;
}