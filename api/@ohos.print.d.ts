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
         * @since 10
         * @param type block Indicates the print task has been blocked.
         * @param callback The callback function for print task change event
         * @permission ohos.permission.PRINT
         */
        on(type: 'block', callback: () => void): void;

        /**
         * Register event callback when the current print task is in process.
         * @since 10
         * @param type succeed Indicates the print task succeed.
         * @param callback The callback function for print task change event
         * @permission ohos.permission.PRINT
         */
        on(type: 'succeed', callback: () => void): void;

        /**
         * Register event callback when the current print task is in process.
         * @since 10
         * @param type fail Indicates the print task has completed with failure.
         * @param callback The callback function for print task change event
         * @permission ohos.permission.PRINT
         */
        on(type: 'fail', callback: () => void): void;

        /**
         * Register event callback when the current print task is in process.
         * @since 10
         * @param type cancel Indicates the print task has been cancelled.
         * @param callback The callback function for print task change event
         * @permission ohos.permission.PRINT
         */
        on(type: 'cancel', callback: () => void): void;

        /**
         * Unregister event callback when the current print task is in process.
         * @since 10
         * @param type block Indicates the print task has been blocked.
         * @param callback The callback function for print task change event
         * @permission ohos.permission.PRINT
         */
        off(type: 'block', callback?: (boolean) => void): void;

        /**
         * Unregister event callback when the current print task is in process.
         * @since 10
         * @param type succeed Indicates the print task succeed.
         * @param callback The callback function for print task change event
         * @permission ohos.permission.PRINT
         */
        on(type: 'succeed', callback: (boolean) => void): void;

        /**
         * Unregister event callback when the current print task is in process.
         * @since 10
         * @param type fail Indicates the print task has completed with failure.
         * @param callback The callback function for print task change event
         * @permission ohos.permission.PRINT
         */
        on(type: 'fail', callback: (boolean) => void): void;

        /**
         * Unregister event callback when the current print task is in process.
         * @since 10
         * @param type cancel Indicates the print task has been cancelled.
         * @param callback The callback function for print task change event
         * @permission ohos.permission.PRINT
         */
        on(type: 'cancel', callback: (boolean) => void): void;        
    }

    /**
     * Start new print task for App.
     * @since 10
     * @param files Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @param callback The callback function for print task.
     * @permission ohos.permission.PRINT
     */
    function print(files: Array<string>, callback: AsyncCallback<PrintTask>): void;

    /**
     * Start new print task for App.
     * @since 10
     * @param files Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @param callback The callback function for print task.
     * @permission ohos.permission.PRINT
     */
    function print(files: Array<string>): Promise<PrintTask>;

    interface PrintMargin {
        top?: number;  // top margin
        bottom?: number;  // bottom margin
        left?: number;  // left side margin
        right?: number;  // right side margin
    }

    interface PrinterRange {
        startPage?: number;  // start page of sequence
        endPage?: number;  // end page of sequence
        pages?: Array<number>;  // discrete page of sequence
    }

    interface PreviewAttribute {
        previewRange: PrinterRange;  // preview page range
        result?: number;        // preview file
    }

    interface PrintResolution {
        id: string;          // resolution id
        horizontalDpi: number    // horizontal DPI
        verticalDpi: number;    // vertical DPI
    }

    interface PrintPageSize {
        id: string;    // page size id
        name: string;  // page size name
        width: number;  // unit: millimeter
        height: number;  // unit: millimeter
    }

    interface PrinterCapability {
        /* Printer Capability */
        colorMode: number;            // color mode
        duplexMode: number;            // duplex mode
        pageSize: Array<PrintPageSize>;    // the page size list supported by the printer
        resolution?: Array<PrintResolution>;  // the resolution list supported by the printer
        minMargin?: PrintMargin;  // min margin of printer
    }

    interface PrinterInfo {
        printerId: string;      // printer id
        printerName: string;    // printer name
        printerState: PrinterState;  // current printer state
        printerIcon?: number;    // resource id of printer icon
        description?: string;    // printer description
        capability?: PrinterCapability;  // printer capability
        options? :string;    // json object string
    }

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
        options? :string;              // json object string
    }

    enum PrinterState {
        PRINTER_ADDED = 0,          // new printers arrival
        PRINTER_REMOVED = 1,        // printers lost
        PRINTER_CAPABILITY_UPDATED = 2,     // printers update
        PRINTER_CONNECTED = 3,      // printer has been connected
        PRINTER_DISCONNECTED = 4,   // printer has been disconnected
        PRINTER_RUNNING = 5,        // printer is working
    }

    enum PrintJobState {
        PRINT_JOB_PREPARE = 0,      // initial state of print job
        PRINT_JOB_QUEUED = 1,       // deliver print job to the printer
        PRINT_JOB_RUNNING = 2,      // executing print job
        PRINT_JOB_BLOCKED = 3,      // print job has been blocked
        PRINT_JOB_COMPLETED = 4,    // print job completed
    }

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

    interface PrinterExtensionInfo {
        extensionId: string;    // extension id of printer extension
        vendorId: string;       // vendor id of extension
        vendorName: string;     // vendor name
        vendorIcon: number;     // resource id of vendor
        version: string;        // version of current printer extension
    }

    /**
     * Get all printer extension installed.
     *
     * @since 10
     * @param callback The callback function for handling the extension list found.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function queryAllPrinterExtensionInfos(callback: AsyncCallback<Array<PrinterExtensionInfo>>): void;

    /**
     * Get all printer extension installed.
     *
     * @since 10
     * @param callback The callback function for handling the extension list found.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function queryAllPrinterExtensionInfos(): Promise<Array<PrinterExtensionInfo>>;

    /**
     * Load the specific printer extension and start to discover printer.
     *
     * @since 10
     * @param extensionList Indicates the list of printer extension.
     *        empty list of extensionList Indicates to find printer with all installed extension.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function startDiscoverPrinter(extensionList: Array<string>, callback: AsyncCallback<boolean>): void;

    /**
     * Load the specific printer extension and start to discover printer.
     *
     * @since 10
     * @param extensionList Indicates the list of printer extension.
     *        empty list of extensionList Indicates to find printer with all installed extension.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function startDiscoverPrinter(extensionList: Array<string>): Promise<boolean>;

    /**
     * Stop discovering the printer with specific printer extension.
     *
     * @since 10
     * @param extensionList Indicates the list of printer extension.
     *        empty list of extensionList Indicates to find printer with all installed extension.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
     function stopDiscoverPrinter(callback: AsyncCallback<boolean>): void;

    /**
     * Stop discovering the printer with specific printer extension.
     *
     * @since 10
     * @param extensionList Indicates the list of printer extension.
     *        empty list of extensionList Indicates to find printer with all installed extension.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
     function stopDiscoverPrinter(): Promise<boolean>;

     /**
     * Connect the specific printer.
     *
     * @since 10
     * @param printerId Indicates id of the printer.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
      function connectPrinter(printerId: string, callback: AsyncCallback<boolean>): void;

     /**
     * Connect the specific printer.
     *
     * @since 10
     * @param printerId Indicates id of the printer.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
      function connectPrinter(printerId: string): Promise<boolean>;

     /**
     * Disconnect the specific printer.
     *
     * @since 10
     * @param printerId Indicates id of the printer.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
      function disconnectPrinter(printerId: string, callback: AsyncCallback<boolean>): void;

     /**
     * Disconnect the specific printer.
     *
     * @since 10
     * @param printerId Indicates id of the printer.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
      function disconnectPrinter(printerId: string): Promise<boolean>;

    /**
     * Query capability for the specific printer.
     *
     * @since 10
     * @param printerId Indicates id of the printer.
     * @param callback The callback function for capability from printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
     function queryPrinterCapability(printerId: string, callback: AsyncCallback<boolean>): void;

    /**
     * Query capability for the specific printer.
     *
     * @since 10
     * @param printerId Indicates id of the printer.
     * @param callback The callback function for capability from printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
     function queryPrinterCapability(printerId: string): Promise<boolean>

    /**
     * Start print job.
     *
     * @since 10
     * @param jobInfo Indicates the information of print job.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function startPrintJob(jobInfo: PrintJob, callback: AsyncCallback<boolean>): void;

    /**
     * Start print job.
     *
     * @since 10
     * @param jobInfo Indicates the information of print job.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function startPrintJob(jobInfo: PrintJob): Promise<boolean>;

    /**
     * Cancel the print job has been sent to printer.
     *
     * @since 10
     * @param jobId Indicates the specific print job.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function cancelPrintJob(jobId: string, callback: AsyncCallback<boolean>): void;

    /**
     * Cancel the print job has been sent to printer.
     *
     * @since 10
     * @param jobId Indicates the specific print job.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function cancelPrintJob(jobId: string): Promise<boolean>;

    /**
     * Request preview of the print job.
     *
     * @since 10
     * @param jobInfo Indicates the information of print job.
     * @param callback The callback function for preview result from printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function requestPrintPreview(jobInfo: PrintJob, callback: (result: number) => void): void;

    /**
     * Request preview of the print job.
     *
     * @since 10
     * @param jobInfo Indicates the information of print job.
     * @param callback The callback function for preview result from printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function requestPrintPreview(jobInfo: PrintJob): Promise<number>;

    /**
     * Register event callback for the state change of printer.
     *
     * @since 10
     * @param printerStateChange Indicates state change of printer.
     * @param callback The callback function for state change of printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function on(type: 'printerStateChange', callback: (state: PrinterState, info: PrinterInfo) => void): void;

    /**
     * Unregister event callback for the state change of printer.
     *
     * @since 10
     * @param printerStateChange Indicates state change of printer.
     * @param callback The callback function for state change of printer.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function off(type: 'printerStateChange', callback?: (boolean) => void): void;

    /**
     * Register event callback for the state change of print job.
     *
     * @since 10
     * @param jobStateChange Indicates state change of print job.
     * @param callback The callback function for state change of print job.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function on(type: 'jobStateChange', callback: (state: PrintJobState, job: PrintJob) => void): void;

     /**
     * Unregister event callback for the state change of print job.
     *
     * @since 10
     * @param printerStateChange Indicates state change of print job.
     * @param callback The callback function for state change of print job.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function off(type: 'jobStateChange', callback?: (boolean) => void): void;

    /**
     * Register event callback for the information change of print extension.
     *
     * @since 10
     * @param extInfoChange Indicates information change of print extension.
     * @param callback The callback function for information change of print extension.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function on(type: 'extInfoChange', callback: (extensionId: string, info: string) => void): void;

     /**
     * Unregister event callback for the information change of print extension.
     *
     * @since 10
     * @param extInfoChange Indicates information change of print extension.
     * @param callback The callback function for information change of print extension.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function off(type: 'extInfoChange', callback?: (boolean) => void): void;

    /**
     * New printers have been found and notify Print SA.
     *
     * @since 10
     * @param printers Indicates new arrived printer lists.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function addPrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<boolean>): void;

    /**
     * New printers have been found and notify Print SA.
     *
     * @since 10
     * @param printers Indicates new arrived printer lists.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function addPrinters(printers: Array<PrinterInfo>): Promise<boolean>;

    /**
     * Printers have been lost and notify Print SA.
     *
     * @since 10
     *
     * @param printerIds Indicates the lost printer lists.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function removePrinters(printerIds: Array<string>, callback: AsyncCallback<boolean>): void;

    /**
     * Printers have been lost and notify Print SA.
     *
     * @since 10
     *
     * @param printerIds Indicates the lost printer lists.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function removePrinters(printerIds: Array<string>): Promise<boolean>;

    /**
     * Update the information of the specific printers
     *
     * @since 10
     * @param printers Indicates to be updated printer lists.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function updatePrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<boolean>): void;

    /**
     * Update the information of the specific printers
     *
     * @since 10
     * @param printers Indicates to be updated printer lists.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function updatePrinters(printers: Array<PrinterInfo>): Promise<boolean>;

    /**
     * Notify Print SA the state of printer has been changed.
     *
     * @since 10
     * @param printerId Indicates id of the printer.
     * @param state Indicates new state of printer.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function updatePrinterState(printerId: string, state: PrinterState, callback: AsyncCallback<boolean>): void;

    /**
     * Notify Print SA the state of printer has been changed.
     *
     * @since 10
     * @param printerId Indicates id of the printer.
     * @param state Indicates new state of printer.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function updatePrinterState(printerId: string, state: PrinterState): Promise<boolean>;

    /**
     * Notify Print SA the state of print job has been changed.
     *
     * @since 10
     * @param jobId Indicates id of the print job.
     * @param state Indicates new state of print job.
     * @param subState Indicates sub state of print job.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState, callback: AsyncCallback<boolean>): void;

    /**
     * Notify Print SA the state of print job has been changed.
     *
     * @since 10
     * @param jobId Indicates id of the print job.
     * @param state Indicates new state of print job.
     * @param subState Indicates sub state of print job.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState): Promise<boolean>;

    /**
     * Notify Print SA the state of print extension has been changed.
     *
     * @since 10
     * @param info Indicates changed information of print extension.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function updateExtensionInfo(info: string, callback: AsyncCallback<boolean>): void;

    /**
     * Notify Print SA the state of print extension has been changed.
     *
     * @since 10
     * @param info Indicates changed information of print extension.
     * @param callback The callback function for indcating the result of API execution.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function updateExtensionInfo(info: string): Promise<boolean>;

    /**
     * Get all the printJobs in the queue.
     *
     * @since 10
     * @param callback The callback function for handling the printJob list found.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function queryAllPrintJobs(callback: AsyncCallback<boolean>): void;

    /**
     * Get all the printJobs in the queue.
     *
     * @since 10
     * @param callback The callback function for handling the printJob list found.
     * @permission ohos.permission.MANAGE_PRINT_JOB
     * @systemapi Hide this for inner system use.
     */
    function queryAllPrintJobs(): Promise<boolean>
}

export default print;
