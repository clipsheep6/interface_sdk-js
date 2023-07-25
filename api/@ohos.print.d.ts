/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';

/**
 * System print
 * @syscap SystemCapability.Print.PrintFramework
 * @since 10
 */
declare namespace print {

    /**
     * interface PrintTask provide event callback
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 
     */
    interface PrintTask {
        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { block } type - Indicates the print task has been blocked.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework		 		 		 
         * @since 10
         */
        on(type: 'block', callback: Callback<void>): void;

        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { succeed }type - Indicates the print task succeed.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework		 		 		 
         * @since 10
         */
        on(type: 'succeed', callback: Callback<void>): void;

        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT		 
         * @param { fail } type - Indicates the print task has completed with failure.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework		 		 		 
         * @since 10
         */
        on(type: 'fail', callback: Callback<void>): void;

        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT		 
         * @param { cancel } type - Indicates the print task has been cancelled.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework		 		 		 
         * @since 10
         */
        on(type: 'cancel', callback: Callback<void>): void;

        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT		 
         * @param { block } type - Indicates the print task has been blocked.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework		 		 
         * @since 10
         */
        off(type: 'block', callback?: Callback<void>): void;

        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT		 
         * @param { succeed } type - Indicates the print task succeed.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework		 		 
         * @since 10
         */
        off(type: 'succeed', callback?: Callback<void>): void;

        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { fail } type - Indicates the print task has completed with failure.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework		 		 
         * @since 10
         */
        off(type: 'fail', callback?: Callback<void>): void;

        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT		 
         * @param { cancel } type - Indicates the print task has been cancelled.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework		 
         * @since 10
         */
        off(type: 'cancel', callback?: Callback<void>): void;        
    }

    /**
     * Start new print task for App.
     * @permission ohos.permission.PRINT	 
     * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @param { AsyncCallback<PrintTask> } callback - The callback function for print task.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @syscap SystemCapability.Print.PrintFramework	 
     * @since 10
     */
    function print(files: Array<string>, callback: AsyncCallback<PrintTask>): void;

    /**
     * Start new print task for App.
     * @permission ohos.permission.PRINT	 
     * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @returns { Promise<PrintTask> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @since 10
     */
    function print(files: Array<string>): Promise<PrintTask>;

    /**
     * Defineds print margin.
     * @typedef PrintMargin
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    interface PrintMargin {
        top?: number;  // top margin
        bottom?: number;  // bottom margin
        left?: number;  // left side margin
        right?: number;  // right side margin
    }

    /**
     * Defineds print range.
     * @typedef PrinterRange
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    interface PrinterRange {
        startPage?: number;  // start page of sequence
        endPage?: number;  // end page of sequence
        pages?: Array<number>;  // discrete page of sequence
    }

    /**
     * Defineds print preview attribute.
     * @typedef PreviewAttribute
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    interface PreviewAttribute {
        previewRange: PrinterRange;  // preview page range
        result?: number;        // preview file
    }

    /**
     * Defineds print resolution.
     * @typedef PrintResolution
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */ 
    interface PrintResolution {
        id: string;          // resolution id
        horizontalDpi: number    // horizontal DPI
        verticalDpi: number;    // vertical DPI
    }

    /**
     * Defineds print page size.
     * @typedef PrintPageSize
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    interface PrintPageSize {
        id: string;    // page size id
        name: string;  // page size name
        width: number;  // unit: millimeter
        height: number;  // unit: millimeter
    }

    /**
     * Defineds print capability.
     * @typedef PrinterCapability
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    interface PrinterCapability {
        /* Printer Capability */
        colorMode: number;            // color mode
        duplexMode: number;            // duplex mode
        pageSize: Array<PrintPageSize>;    // the page size list supported by the printer
        resolution?: Array<PrintResolution>;  // the resolution list supported by the printer
        minMargin?: PrintMargin;  // min margin of printer
    }

    /**
     * Defineds print info.
     * @typedef PrinterInfo
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */ 
    interface PrinterInfo {
        printerId: string;      // printer id
        printerName: string;    // printer name
        printerState: PrinterState;  // current printer state
        printerIcon?: number;    // resource id of printer icon
        description?: string;    // printer description
        capability?: PrinterCapability;  // printer capability
        
        /**
        * JSON object string.
        * @type {Object}
        * @syscap SystemCapability.Print.PrintFramework
        * @since 10
        */
        options? :Object;
    }

    /**
     * Defineds print job.
     * @typedef PrintJob
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    interface PrintJob {
        fdList: Array<number>;       // document fd list to be printed
        jobId: string;               // job id
        printerId: string;           // printer id to take charge of printing
        jobState: PrintJobState;     // current print job state
        copyNumber: number;          // copies of document list
        pageRange: PrinterRange;     // range size to be printed
        isSequential: boolean;       // sequential print
        pageSize: PrintPageSize;     // the selected page size
        isLandscape: boolean;        // vertical printing
        colorMode: number;           // color mode
        duplexMode: number;          // duplex mode
        margin?: PrintMargin;        // current margin setting
        preview?: PreviewAttribute;  // preview setting
		
        /**
        * JSON object string.
        * @type {Object}
        * @syscap SystemCapability.Print.PrintFramework
        * @since 10
        */
        options? :Object;
    }

    /**
     * Enumeration of Printer State.
     * @enum { number } PrinterState
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    enum PrinterState {
        PRINTER_ADDED = 0,          // new printers arrival
        PRINTER_REMOVED = 1,        // printers lost
        PRINTER_CAPABILITY_UPDATED = 2,     // printers update
        PRINTER_CONNECTED = 3,      // printer has been connected
        PRINTER_DISCONNECTED = 4,   // printer has been disconnected
        PRINTER_RUNNING = 5,        // printer is working
    }

    /**
     * Enumeration of  Print Job State.
     * @enum { number } PrintJobState
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    enum PrintJobState {
        PRINT_JOB_PREPARE = 0,      // initial state of print job
        PRINT_JOB_QUEUED = 1,       // deliver print job to the printer
        PRINT_JOB_RUNNING = 2,      // executing print job
        PRINT_JOB_BLOCKED = 3,      // print job has been blocked
        PRINT_JOB_COMPLETED = 4,    // print job completed
    }

    /**
     * Enumeration of  Print Job Sub State.
     * @enum { number } PrintJobSubState
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    enum PrintJobSubState {
        PRINT_JOB_COMPLETED_SUCCESS = 0,        // print job succeed
        PRINT_JOB_COMPLETED_FAILED = 1,         // print job fail
        PRINT_JOB_COMPLETED_CANCELLED = 2,      // print job has been cancelled
        PRINT_JOB_COMPLETED_FILE_CORRUPTED = 3,   // print job has been corrupted
        PRINT_JOB_BLOCK_OFFLINE = 4,            // printer is offline
        PRINT_JOB_BLOCK_BUSY = 5,               // printer is occupied by other process
        PRINT_JOB_BLOCK_CANCELLED = 6,          // print job has been cancelled
        PRINT_JOB_BLOCK_OUT_OF_PAPER = 7,       // out of paper
        PRINT_JOB_BLOCK_OUT_OF_INK = 8,         // out of ink
        PRINT_JOB_BLOCK_OUT_OF_TONER = 9,       // out of toner
        PRINT_JOB_BLOCK_JAMMED = 10,            // paper jam
        PRINT_JOB_BLOCK_DOOR_OPEN = 11,         // cover open
        PRINT_JOB_BLOCK_SERVICE_REQUEST = 12,   // service request
        PRINT_JOB_BLOCK_LOW_ON_INK = 13,        // low on ink
        PRINT_JOB_BLOCK_LOW_ON_TONER = 14,      // low on toner
        PRINT_JOB_BLOCK_REALLY_LOW_ON_INK = 15, // really low on ink
        PRINT_JOB_BLOCK_BAD_CERTIFICATE = 16,   // bad certification
        PRINT_JOB_BLOCK_UNKNOWN = 17,           // unknown issue
    }

    /**
     * Enumeration of  Print error Code.
     * @enum { number } PrintErrorCode
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */
    enum PrintErrorCode {
        E_PRINT_NONE = 0,                       // no error
        E_PRINT_NO_PERMISSION = 201,            // no permission
        E_PRINT_INVALID_PARAMETER = 401,        // invalid parameter
        E_PRINT_GENERIC_FAILURE = 13100001,     // generic failure of print
        E_PRINT_RPC_FAILURE = 13100002,         // RPC failure
        E_PRINT_SERVER_FAILURE = 13100003,      // failure of print service
        E_PRINT_INVALID_EXTENSION = 13100004,   // invalid print extension
        E_PRINT_INVALID_PRINTER = 13100005,     // invalid printer
        E_PRINT_INVALID_PRINT_JOB = 13100006,    // invalid print job
        E_PRINT_FILE_IO = 13100007,             // file i/o error
    }

    /**
     * Defineds print ExtensionInfo.
     * @typedef PrinterExtensionInfo
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 	 
     * @since 10 
     */	 
    interface PrinterExtensionInfo {
        extensionId: string;    // extension id of printer extension
        vendorId: string;       // vendor id of extension
        vendorName: string;     // vendor name
        vendorIcon: number;     // resource id of vendor
        version: string;        // version of current printer extension
    }

    /**
     * Get all printer extension installed.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { AsyncCallback<Array<PrinterExtensionInfo>> } callback - The callback function for handling the extension list found.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function queryAllPrinterExtensionInfos(callback: AsyncCallback<Array<PrinterExtensionInfo>>): void;

    /**
     * Get all printer extension installed.
     * @permission ohos.permission.MANAGE_PRINT_JOB     
     * @returns { Promise<Array<PrinterExtensionInfo>> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function queryAllPrinterExtensionInfos(): Promise<Array<PrinterExtensionInfo>>;

    /**
     * Load the specific printer extension and start to discover printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Array<string> } extensionList - Indicates the list of printer extension.
     *        empty list of extensionList Indicates to find printer with all installed extension.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function startDiscoverPrinter(extensionList: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * Load the specific printer extension and start to discover printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Array<string> } extensionList - Indicates the list of printer extension.
     *        empty list of extensionList Indicates to find printer with all installed extension.
     * @returns { Promise<boolean> } the promise returned by the function.	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function startDiscoverPrinter(extensionList: Array<string>): Promise<boolean>;

    /**
     * Stop discovering the printer with specific printer extension.
     * @permission ohos.permission.MANAGE_PRINT_JOB     
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
     function stopDiscoverPrinter(callback: AsyncCallback<void>): void;

    /**
     * Stop discovering the printer with specific printer extension.
     * @permission ohos.permission.MANAGE_PRINT_JOB     
     * @returns { Promise<boolean> } the promise returned by the function.	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
     function stopDiscoverPrinter(): Promise<boolean>;

     /**
     * Connect the specific printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } printerId - Indicates id of the printer.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
     function connectPrinter(printerId: string, callback: AsyncCallback<void>): void;

     /**
     * Connect the specific printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } printerId - Indicates id of the printer.
     * @returns { Promise<boolean> } the promise returned by the function.	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
      function connectPrinter(printerId: string): Promise<boolean>;
	 
     /**
     * Disconnect the specific printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } printerId - Indicates id of the printer.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
      function disconnectPrinter(printerId: string, callback: AsyncCallback<void>): void;

     /**
     * Disconnect the specific printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } printerId - Indicates id of the printer.
     * @returns { Promise<boolean> } the promise returned by the function.	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */  
      function disconnectPrinter(printerId: string): Promise<boolean>;

    /**
     * Query capability for the specific printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } printerId - Indicates id of the printer.
     * @param { AsyncCallback<void> } callback - The callback function for capability from printer.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
     function queryPrinterCapability(printerId: string, callback: AsyncCallback<void>): void;

    /**
     * Query capability for the specific printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } printerId - Indicates id of the printer.
     * @returns { Promise<boolean> } the promise returned by the function.	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
     function queryPrinterCapability(printerId: string): Promise<boolean>

    /**
     * Start print job.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { PrintJob } jobInfo - Indicates the information of print job.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function startPrintJob(jobInfo: PrintJob, callback: AsyncCallback<void>): void;

    /**
     * Start print job.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { PrintJob } jobInfo - Indicates the information of print job.
     * @returns { Promise<boolean> } the promise returned by the function.	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function startPrintJob(jobInfo: PrintJob): Promise<boolean>;

    /**
     * Cancel the print job has been sent to printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } jobId - Indicates the specific print job.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function cancelPrintJob(jobId: string, callback: AsyncCallback<void>): void;

    /**
     * Cancel the print job has been sent to printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } jobId - Indicates the specific print job.
     * @returns { Promise<boolean> } the promise returned by the function.	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function cancelPrintJob(jobId: string): Promise<boolean>;
	 
    /**
     * Request preview of the print job.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { PrintJob } jobInfo - Indicates the information of print job.
     * @param { Callback<number> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function requestPrintPreview(jobInfo: PrintJob, callback: Callback<number>): void;

    /**
     * Request preview of the print job.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { PrintJob } jobInfo - Indicates the information of print job.
     * @returns { Promise<number> } the promise returned by the function.	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function requestPrintPreview(jobInfo: PrintJob): Promise<number>;

    /**
     * Register event callback for the state change of printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { printerStateChange } type - Indicates state change of printer.
     * @param { Callback<printerState, printerInfo> } callback - The callback function for state change of printer.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function on(type: 'printerStateChange', callback: Callback<printerState, printerInfo>): void;

    /**
     * Unregister event callback for the state change of printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { printerStateChange } type - Indicates state change of printer.
     * @param { Callback<boolean> } callback - The callback function for state change of printer.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function off(type: 'printerStateChange', callback?: Callback<boolean>): void;

    /**
     * Register event callback for the state change of print job.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { jobStateChange } type - Indicates state change of printer.
     * @param { Callback<printJobState, printJob> } callback - The callback function for state change of printer.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function on(type: 'jobStateChange', callback: Callback<printJobState, printJob>): void;
	 
    /**
     * Unregister event callback for the state change of print job.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { jobStateChange } type - Indicates state change of printer.
     * @param { Callback<boolean> } callback - The callback function for state change of printer.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function off(type: 'jobStateChange', callback?: Callback<boolean>): void;

    /**
     * Register event callback for the information change of print extension.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { extInfoChange } type - Indicates information change of print extension.
     * @param { Callback<extensionId, info> } callback - The callback function for information change of print extension.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function on(type: 'extInfoChange', callback: Callback<extensionId, info>): void;

    /**
     * Unregister event callback for the information change of print extension.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { extInfoChange } type - Indicates state change of printer.
     * @param { Callback<boolean> } callback - The callback function for state change of printer.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */ 
    function off(type: 'extInfoChange', callback?: Callback<boolean>): void;

    /**
     * New printers have been found and notify Print SA.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Array<PrinterInfo> } printers - Indicates new arrived printer lists.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function addPrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<void>): void;

    /**
     * New printers have been found and notify Print SA.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Array<PrinterInfo> } printers - Indicates new arrived printer lists.
     * @returns { Promise<boolean> } the promise returned by the function.	 	 	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function addPrinters(printers: Array<PrinterInfo>): Promise<boolean>;

    /**
     * Printers have been lost and notify Print SA.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Array<string> } printerIds - Indicates the lost printer lists.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function removePrinters(printerIds: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * Printers have been lost and notify Print SA.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Array<string> } printerIds - Indicates the lost printer lists.
     * @returns { Promise<boolean> } the promise returned by the function.	 	 	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function removePrinters(printerIds: Array<string>): Promise<boolean>;

    /**
     * Update the information of the specific printers.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Array<PrinterInfo> } printers - Indicates to be updated printer lists.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function updatePrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<void>): void;

    /**
     * Update the information of the specific printers.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { Array<PrinterInfo> } printers - Indicates to be updated printer lists.
     * @returns { Promise<boolean> } the promise returned by the function.	 	 	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function updatePrinters(printers: Array<PrinterInfo>): Promise<boolean>;
	
    /**
     * Notify Print SA the state of printer has been changed.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } printerId - Indicates id of the printer.
     * @param { PrinterState } state - Indicates state of the printer.	 
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function updatePrinterState(printerId: string, state: PrinterState, callback: AsyncCallback<void>): void;

    /**
     * Notify Print SA the state of printer has been changed.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } printerId - Indicates id of the printer.
     * @param { PrinterState } state - Indicates state of the printer.	 
     * @returns { Promise<boolean> } the promise returned by the function.	 	 	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function updatePrinterState(printerId: string, state: PrinterState): Promise<boolean>;

    /**
     * Notify Print SA the state of print job has been changed.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string} jobId - Indicates id of the print job.
     * @param { PrintJobState } state - Indicates new state of print job.
     * @param { PrintJobSubState } subState - Indicates sub state of print job.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState, callback: AsyncCallback<void>): void;

    /**
     * Notify Print SA the state of print job has been changed.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string} jobId - Indicates id of the print job.
     * @param { PrintJobState } state - Indicates new state of print job.
     * @param { PrintJobSubState } subState - Indicates sub state of print job.
     * @returns { Promise<boolean> } the promise returned by the function.	 	 	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState): Promise<boolean>;

    /**
     * Notify Print SA the state of print extension has been changed.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } info - Indicates changed information of print extension.
     * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function updateExtensionInfo(info: string, callback: AsyncCallback<void>): void;

    /**
     * Notify Print SA the state of print extension has been changed.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { string } info - Indicates changed information of print extension.
     * @returns { Promise<boolean> } the promise returned by the function.	 	 	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function updateExtensionInfo(info: string): Promise<boolean>;

    /**
     * Get all the printJobs in the queue.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @param { AsyncCallback<void> } callback - The callback function for handling the printJob list found.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function queryAllPrintJobs(callback: AsyncCallback<void>): void;

    /**
     * Get all the printJobs in the queue.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @returns { Promise<boolean> } the promise returned by the function.	 	 	 	 
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 202 - not system application	 
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi Hide this for inner system use.	 
     * @since 10
     */
    function queryAllPrintJobs(): Promise<boolean>
}

export default print;