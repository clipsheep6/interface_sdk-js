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
import {AsyncCallback} from './basic';
import {ExtensionAbilityInfo} from './bundle/extensionAbilityInfo';

/**
 * System print
 * @sysCap SystemCapability.Print.print
 * @import import print from '@ohos.app.print';
 * @since 9
 */
declare namespace print {

    interface PrintTask {
        /**
         * Register event callback when the current print task is in process.
         * @since 9
         * @param type blocked Indicates the print task has been blocked.
         *        type success Indicates the print task succeed.
         *        type failed Indicates the print task has completed with failure.
         *        type cancelled Indicates the print task has been cancelled.
         * @param callback The callback function for print task change event
         * @permission {@code ohos.permission.PRINT}
         * @return -
         */
        on(type: 'blocked' | 'success' | 'failed' | 'cancelled', callback: () => void): void;

        /**
         * Unregister event callback when the current print task is in process.
         * @since 9
         * @param type block Indicates the print task has been blocked.
         *        type success Indicates the print task succeed.
         *        type fail Indicates the print task has completed with failure.
         *        type cancel Indicates the print task has been cancelled.
         * @param callback The callback function for print task change event
         * @permission {@code ohos.permission.PRINT}
         * @return -
         */
        off(type: 'blocked' | 'success' | 'failed' | 'cancelled', callback?: () => void): void;
    }

    /**
     * Start new print task for App.
     * @since 9
     * @param files Indicates the filepath list to be printed. Only pdf and picture filetypes are supported.
     * @param callback The callback function for print task.
     * @permission {@code ohos.permission.PRINT}
     * @return -
     */
    function print(files: Array<string>, callback: AsyncCallback<PrintTask>): void;
    function print(files: Array<string>): Promise<PrintTask>;

    interface PrintMargin {
        top: number;  // top margin
        bottom: number;  // bottom margin
        left: number;  // left side margin
        right: number;  // right side margin
    }

    interface PrinterRange {
        startPage: number;  // start page of sequence
        endPage: number;  // end page of sequence
        pages: Array<number>;  // discrete page of sequence
    }

    interface PreviewAttribute {
        previewRange: PrinterRange;  // preview page range
        result: string;        // preview file
    }

    interface PrinterResolution {
        id: number;          // resolution id
        horizontalDpi: number    // horizontal DPI
        verticalDpi: number;    // vertical DPI
    }

    interface PrinterPageSize {
        id: number;    // page size id
        name: string;  // page size name
        width: number;  // unit: milimeter
        height: number;  // unit: milimeter
    }

    interface PrinterCapability {
        /* Printer Capability */
        minMargin: PrintMargin;  // min margin of printer
        pageSize: Array<PrinterPageSize>;    // the page size list supported by the printer
        resolution: Array<PrinterResolution>;  // the resolution list supported by the printer
        colorMode: number;            // color mode
        duplexMode: number;            // duplex mode
    }

    interface PrinterInfo {
        printerId: number;      // printer id
        printerName: string;    // printer name
        printerIcon: number;    // resource id of printer icon
        printerState: PrinterState;  // current printer state
        description: string;    // printer description
        capability: PrinterCapability;  // printer capability
    }

    interface PrintJob {
        files: Array<string>;    // document list to be printed
        jobId: number;          // job id
        printerId: number;      // printer id to take charge of printing
        jobState: PrintJobState;  // current print job state
        copyNumber: number;      // copies of document list
        pageRange: PrinterRange;  // range size to be printed
        isSequential?: boolean;    // sequential print
        pageSize?: PrinterPageSize;  // the selected page size
        isLandscape?: boolean;      // vertical printing
        colorMode?: number;      // color mode
        duplexMode?: number;    // duplex mode
        margin?: PrintMargin;    // current margin setting
        preview?: PreviewAttribute;  // preview setting
    }

    enum PrinterState {
        PRINTER_ADDED = 1,      // new printers arrival
        PRINTER_REMOVED = 2,    // printers lost
        PRINTER_IDLE = 3,       // printer idle
        PRINTER_PRINTING = 4,   // printer is working
        PRINTER_BLOCKED = 5,      // printer has been blocked
        PRINTER_BUSY = 6,      // printer is busy
        PRINTER_FAILED = 7      // printer failure
    }

    enum PrintJobState {
        PRINT_JOB_CREATED = 1,  // initial state of print job
        PRINT_JOB_QUEUED = 2,  // start print job
        PRINT_JOB_PRINTING = 3,  // printing
        PRINT_JOB_BLOCKED = 4,  // print job has been blocked
        PRINT_JOB_SUCCESS = 5,  // print completed
        PRINT_JOB_FAILED = 6,  // print completed
        PRINT_JOB_cancelled = 7  // print job has been cancelled
    }

    interface PrinterExtensionInfo extends ExtensionAbilityInfo {
        extensionId: number;    // extesion id of printer extension
        vendorId: number;      // vendor id of extension
        vendorName: string;      // vendor name
        vendorIcon: number;      // resource id of vendor
        version: string;      // version of current printer extension
    }

    /**
     * Get all printer extension installed.
     *
     * @since 9
     * @param callback The callback function for handling the extension list found.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function queryAllPrinterExtensionInfos(callback: AsyncCallback<Array<PrinterExtensionInfo>>): void;
    function queryAllPrinterExtensionInfos(): Promise<Array<PrinterExtensionInfo>>;

    /**
     * Load the specific printer extension and start to discover printer.
     *
     * @since 9
     * @param extensionList Indicates the list of printer extension.
     *        empty list of extensionList Indicates to find printer with all installed extension.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function startDiscoverPrinter(extensionList: Array<number>, callback: AsyncCallback<boolean>): void;
    function startDiscoverPrinter(extensionList: Array<number>): Promise<boolean>;

    /**
     * Stop discovering the printer with specific printer extension.
     *
     * @since 9
     * @param extensionList Indicates the list of printer extension.
     *        empty list of extensionList Indicates to find printer with all installed extension.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
     function stopDiscoverPrinter(callback: AsyncCallback<boolean>): void;
     function stopDiscoverPrinter(): Promise<boolean>;
    
     /**
     * Connect the specific printer.
     *
     * @since 9
     * @param printerId Indicates id of the printer.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
      function connectPrinter(printerId: number, callback: AsyncCallback<boolean>): void;
      function connectPrinter(printerId: number): Promise<boolean>;

     /**
     * Disconnect the specific printer.
     *
     * @since 9
     * @param printerId Indicates id of the printer.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */      
      function disconnectPrinter(printerId: number, callback: AsyncCallback<boolean>): void;
      function disconnectPrinter(printerId: number): Promise<boolean>;

    /**
     * Query capability for the specific printer.
     *
     * @since 9
     * @param printerId Indicates id of the printer.
     * @param callback The callback function for capability from printer.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
     function queryPrinterCapability(printerId: number, callback: AsyncCallback<PrinterCapability>): void;
     function queryPrinterCapability(printerId: number): Promise<PrinterCapability>      

    /**
     * Start print job.
     *
     * @since 9
     * @param jobInfo Indicates the information of print job.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function startPrintJob(jobinfo: PrintJob, callback: AsyncCallback<boolean>): void;
    function startPrintJob(jobinfo: PrintJob): Promise<boolean>;

    /**
     * Cancel the print job has been sent to printer.
     *
     * @since 9
     * @param jobInfo Indicates the information of print job.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function cancelPrintJob(jobinfo: PrintJob, callback: AsyncCallback<boolean>): void;
    function cancelPrintJob(jobinfo: PrintJob): Promise<boolean>;

    /**
     * Request preview of the print job.
     *
     * @since 9
     * @param jobInfo Indicates the information of print job.
     * @param callback The callback function for preview result from printer.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function requestPrintPreview(jobinfo: PrintJob, callback: (result: string) => void): void;
    function requestPrintPreview(jobinfo: PrintJob): Promise<string>;

    /**
     * Register event callback for the state change of printer.
     *
     * @since 9
     * @param printerStateChange Indicates state change of printer.
     * @param callback The callback function for state change of printer.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function on(type: 'printerStateChange', callback: (state: PrinterState, info: PrinterInfo) => void): void;

    /**
     * Unregister event callback for the state change of printer.
     *
     * @since 9
     * @param printerStateChange Indicates state change of printer.
     * @param callback The callback function for state change of printer.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */    
    function off(type: 'printerStateChange', callback: (boolean) => void): void;

    /**
     * Register event callback for the state change of print job.
     *
     * @since 9
     * @param jobStateChange Indicates state change of print job.
     * @param callback The callback function for state change of print job.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function on(type: 'jobStateChange', callback: (state: PrintJobState, job: PrintJob) => void): void;

     /**
     * Unregister event callback for the state change of print job.
     *
     * @since 9
     * @param printerStateChange Indicates state change of print job.
     * @param callback The callback function for state change of print job.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */   
    function off(type: 'jobStateChange', callback: (boolean) => void): void;

    /**
     * New printers have been found and notify Print SA.
     *
     * @since 9
     * @param printers Indicates new arrived printer lists.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function addPrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<boolean>): void;
    function addPrinters(printers: Array<PrinterInfo>): Promise<boolean>;

    /**
     * Printers have been lost and notify Print SA.
     *
     * @since 9
     *
     * @param printers Indicates the lost printer lists.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function removePrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<boolean>): void;
    function removePrinters(printers: Array<PrinterInfo>): Promise<boolean>;

    /**
     * Notify Print SA the state of printer has been changed.
     *
     * @since 9
     * @param printerId Indicates id of the printer.
     * @param state Indicates new printer state.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function updatePrinterState(printerId: number, state: PrinterState, callback: AsyncCallback<boolean>): void;
    function updatePrinterState(printerId: number, state: PrinterState): Promise<boolean>;

    /**
     * Notify Print SA the state of print job has been changed.
     *
     * @since 9
     * @param jobId Indicates id of the print job.
     * @param state Indicates new printer state.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
    function updatePrintJobState(jobId: number, state: PrintJobState, callback: AsyncCallback<boolean>): void;
    function updatePrintJobState(jobId: number, state: PrintJobState): Promise<boolean>;

    /**
     * Open file descriptor of the specific file.
     *
     * @since 9
     * @param uri Indicates file path.
     * @param callback The callback function for indcating the result of API execution.
     * @permission {@code ohos.permission.MANAGE_PRINT_JOB}
     * @systemapi Hide this for inner system use.
     * @return -
     */
     function openFile(uri: string, callback: AsyncCallback<number>): void;
     function openFile(uri: string): Promise<number>;    
}

export default print;