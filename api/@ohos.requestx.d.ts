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
 * More details, please see the architecture documents of the request subsystem.
 * @since 10
 * @syscap SystemCapability.RequestAgent;
 */
 export declare namespace agent {
    /**
     * The configurations for a task.
     * Using a flexible configuration for clear upload and download functions.
     * @since 10
     * @syscap SystemCapability.RequestAgent;
     */
    class Conf {
        /**
         * Creates configuration for upload or download.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         * @permission ohos.permission.INTERNET
         * @param background background or not.
         * @param action indicates "upload" or "download", case insensitive, but it will be normalized to lowercase in records.
         * @param url the uniform resource locator, using raw text, case sensitivity or not according to system.
         * @param paths data source for upload or data target for download, upload supports multiple paths, but download needs only one path, using raw text, case sensitivity or not according to system.
         * @throws {BusinessError} 201 - Permission denied.
         * @throws {BusinessError} 401 - Parameter error.
         */
        constructor(background: boolean, action: string, url: string, paths: Array<string>);
        /**
         * Indicates a background task or not.
         * For background task, there will be more options below.
         * If without emphasis, the option is for any task.
         * The background task will be scheduled by request manager service.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        background: boolean;
        /**
         * The task action, "upload" or "download", case insensitive.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        action: string;
        /**
         * The name for a task, give a meaningful title please.
         * The maximum length is 256 characters.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        name: string;
        /**
         * The Universal Resource Locator for a task.
         * The maximum length is 2048 characters.
         * Using raw `url` option, even url parameters in it.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        url: string;
        /**
         * The file paths for a task.
         * For upload task, it supports multiple tasks per task.
         * For download task, only one file in a task.
         * Each file path length complies system's requirements.
         * But there is a 4K bytes limit in total.
         * Currently support:
         * 1, relative path, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", under caller's cache folder.
         * 2, uri path, like "datashare://bundle/xxx/yyy/zzz.html", the data provider must allow the caller's access.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        paths: Array<string>;
        /**
         * The solution choice when path already exists during download.
         * Currently support:
         * true, rewrite the existed file.
         * false, go to fail.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        cover?: boolean;
        /**
         * The HTTP standard method for upload or download: GET/POST/PUT.
         * Case insensitive.
         * For upload, the default is PUT.
         * For download, the default is GET.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        method?: string;
        /**
         * The HTTP headers.
         * For upload request, the default `Content-Type` is `application/octet-stream`.
         * For download request, the default `Content-Type` is `application/json`.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        headers?: JSON;
        /**
         * The HTTP parameters.
         * Do not cut and parse url parameters into here.
         * The default is empty.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        parameters?: JSON;
        /**
         * The HTTP body.
         * The default is empty.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        body?: string;
        /**
         * The network type.
         * Currently support:
         * 0: any, the default.
         * 1: Wi-Fi.
         * 2: mobile.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        network?: number;
        /**
         * Allows work in metered network or not.
         * The default is false.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        metered?: boolean;
        /**
         * Allows work in roaming network or not.
         * The default is true.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        roaming?: boolean;
        /**
         * The timeout for a task.
         * The default is no timeout, but died task which stays on a status more than 30 days will be cleared.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        timeout?: number;
        /**
         * The proxies for HTTP/HTTPS.
         * Currently support:
         * .httpProxy: http://user:password@proxy-domain:proxy-port/proxy-path?proxy-parameters
         * .httpsProxy: http://user:password@proxy-domain:proxy-port/proxy-path?proxy-parameters
         * .noProxy: domainx;domainy;domainz;...
         * Each filed with a 4096 bytes limit.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        proxy?: JSON;
        /**
         * Allows redirect or not.
         * The default is not.
         * But it is true or a background task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        redirect?: boolean;
        /**
         * The index of paths for a task.
         * Usually used for a continuous job.
         * The default is 0.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        index?: number;
        /**
         * The start point of a file.
         * Usually used for a continous job.
         * It will set the "Range" header in download.
         * It will start read at the point in upload.
         * The default is 0.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        begins?: number;
        /**
         * The end point of a file.
         * Usually used for a continous job.
         * It will set The "Range" header in download.
         * It will end read at the point in upload.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        ends?: number;
        /**
         * The policy of notification.
         * Currently support:
         * "non-progress": only completed or failed.
         * If not set, emits every progress, completed or failed.
         * Only for tasks with `background` is true.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        silence?: "non-progress";
        /**
         * Breaks when fail to fetch filesize before upload/download or not.
         * The default is not, set size as -1 indicating the case.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        filesize?: boolean;
        /**
         * Associates ability of want in notification.
         * The ability must be one of the application which creates the task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
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
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        token?: string;
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
     * @since 10
     * @syscap SystemCapability.RequestAgent;
     */
    class Progress {
        /**
         * The current state of the task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        state: string;
        /**
         * The current processing file index in a task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        counter: number;
        /**
         * The processed data size for the current file in a task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        processed: number;
        /**
         * The sizes of files in a task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        sizes: Array<number>;
        /**
         * The extras for an interaction.
         * Such as headers and body of response from server.
         * {"headers": {"key": v}, "body": "contents"}
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        extras?: JSON;
    }
    /**
     * The task information data structure for query results.
     * Provides common query and advanced query, visible range of fields is different.
     * @since 10
     * @syscap SystemCapability.RequestAgent;
     */
    interface TaskInfo {
        /**
         * The UID of an application.
         * For system query only.
         * @systemapi
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly uid?: string;
        /**
         * The bundle name.
         * For system query only.
         * @systemapi
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly bundle?: string;
        /**
         * The url of a task.
         * For normal query only, empty as system.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly url?: string;
        /**
         * The paths of a task.
         * For normal query only, empty as system.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly paths?: Array<string>;
        /**
         * The task id.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly tid: string;
        /**
         * The task name.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly name: string;
        /**
         * The task action, must be "upload" or "download", lowercase normalized.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly action: string;
        /**
         * The MiMEType of a task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly mimetype: Array<string>;
        /**
         * An instance of `Progress` for a task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly progress: Progress;
        /**
         * The notification policy of a task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly notification: string;
        /**
         * The creating date and time of a task in "yyyy-MM-dd HH:mm:SS.nanosecond" pattern.
         * It is generted by system of current device.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly ctime: string
        /**
         * The modified date and time of a task in "yyyy-MM-dd HH:mm:SS.nanosecond" pattern.
         * It is generted by system of current device.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly mtime: string;
        /**
         * The tried times of a task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly tries: number;
        /**
         * The broken case of a task.
         * Currently support:
         * undefined, accidently.
         * 0, others, not categorized.
         * 1, network disconnect.
         * 2, task timeout.
         * 3, storage capacity not enough.
         * 4, protocol error.
         * 5, filesystem io error.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly broken?: number;
        /**
         * The reason of a waiting/failed/stopped/paused task.
         * undefined, accidently.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly reason?: string;
        /**
         * The extras of a task.
         * For background, the last response from server.
         * For frontend, nothing now.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly extras?: JSON;
    }
    /**
     * The task object prototype.
     * New task' status is "initialized".
     * For background, no callback.
     * Can `start` a initialized/failed/completed/stopped task.
     * Can `pause` a running/waiting/retrying task.
     * Can `resume` a paused task.
     * Can `stop` a running/waiting/retrying task.
     * @since 10
     * @syscap SystemCapability.RequestAgent;
     */
    class Task {
        /**
         * Creates a task for upload or download.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         * @permission ohos.permission.INTERNET
         * @param context context of the caller.
         * @param conf an instance of `Conf`.
         * @param callback callback function with a `Task` argument.
         * @throws {BusinessError} 201 - Permission denied.
         * @throws {BusinessError} 401 - Parameter error.
         */
        constructor(conf: Conf);
        /**
         * The task id, unique on system.
         * Generated automatically by system.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        readonly tid: string;
        /**
         * The configurations for the task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        conf: Conf;
        /**
         * The progress callback for the frontend tasks.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        progress?: (pg: Progress) => void;
        /**
         * The completed callback for the frontend tasks.
         * The completed is treated as a special progress.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        completed?: (pg: Progress) => void;
        /**
         * The failed callback for the frontend tasks.
         * The "failed" is treated as a special progress.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        failed?: (pg: Progress) => void;
        /**
         * Starts the task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         * @permission ohos.permission.INTERNET
         * @param callback callback function with a boolean argument.
         * @throws {BusinessError} 201 - Permission denied.
         */
        start(callback: AsyncCallback<boolean>): void;
        /**
         * Pauses the task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         * @param callback callback function with a boolean argument.
         */
        pause(callback: AsyncCallback<boolean>): void;
        /**
         * Resumes the task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         * @permission ohos.permission.INTERNET
         * @param callback callback function with a boolean argument.
         * @throws {BusinessError} 201 - Permission denied.
         */
        resume(callback: AsyncCallback<boolean>): void;
        /**
         * Stops the task.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         * @param callback callback function with a boolean argument.
         */
        stop(callback: AsyncCallback<boolean>): void;
    }
    /**
     * The filter data structure.
     * Used for search, given fields works as **LOGICAL AND**.
     * Invalid value may cause a parameter error.
     * @since 10
     */
    class Filter {
        /**
         * Specifys the package name of an application.
         * Only for advanced search, common search will be fixed to the caller.
         * A "*" means any bundle.
         * @systemapi
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        bundle?: string;
        /**
         * Specifys a end date and time in "yyyy-MM-dd HH:mm:SS" pattern.
         * The default is the moment of calling.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        before?: string;
        /**
         * Specifys a start date and time in "yyyy-MM-dd HH:mm:SS" pattern.
         * The default is "`before` and 24 hours".
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        after?: string;
        /**
         * Specifys the state of tasks.
         * The default is any state.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        state?: string;
        /**
         * Specifys the action of tasks, "upload" or "download", case insensitive.
         * The default is upload and download.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        action?: string;
        /**
         * Specifys background taks or not.
         * The default is frontend and background.
         * @since 10
         * @syscap SystemCapability.RequestAgent;
         */
        background?: boolean;
    }
    /**
     * Removes specifed task belongs to the caller.
     * @since 10
     * @syscap SystemCapability.RequestAgent;
     * @param context context of the caller.
     * @param id the task id.
     * @param callback callback function with a boolean argument indicating sucess or not.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function remove(context: BaseContext, id: string, callback: AsyncCallback<boolean>): void;
    /**
     * Shows specified task details belongs to the caller.
     * @since 10
     * @syscap SystemCapability.RequestAgent;
     * @param context context of the caller.
     * @param id the task id.
     * @param callback callback function with a `TaskInfo` argument.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function show(context: BaseContext, id: string, callback: AsyncCallback<TaskInfo>): void;
    /**
     * Touches specified task with token.
     * @since 10
     * @syscap SystemCapability.RequestAgent;
     * @param context context of the caller.
     * @param id the task id.
     * @param token the in-application isolation key.
     * @param callback callback function with a `TaskInfo` argument.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function touch(context: BaseContext, id: string, token: string, callback: AsyncCallback<TaskInfo>): void;
    /**
     * Searches tasks, for system.
     * @since 10
     * @syscap SystemCapability.RequestAgent;
     * @param context context of the caller.
     * @param filter an instance of `Filter`.
     * @param callback callback function with a `Array<string>` argument contains task ids match filter.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function search(context: BaseContext, filter: Filter, callback: AsyncCallback<Array<string>>): void;
    /**
     * Queries specified task details.
     * @since 10
     * @systemapi
     * @syscap SystemCapability.RequestAgent;
     * @param context context of the caller.
     * @param id the task id.
     * @param callback callback function with a `TaskInfo` argument.
     * @throws {BusinessError} 202 - System API is not allowed called by third HAP.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function query(context: BaseContext, id: string, callback: AsyncCallback<TaskInfo>): void;
    /**
     * Deletes specifed tasks.
     * @systemapi
     * @since 10
     * @syscap SystemCapability.RequestAgent;
     * @param context context of the caller.
     * @param id the task id.
     * @param callback callback function with a `Array<string>` argument contains task ids had cleared.
     * @throws {BusinessError} 202 - System API is not allowed called by third HAP.
     * @throws {BusinessError} 401 - Parameter error.
     */
    function clear(context: BaseContext, ids: Array<string>, callback: AsyncCallback<Array<string>>): void;
  }