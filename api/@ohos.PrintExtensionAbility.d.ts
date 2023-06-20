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

/**
 * class of print extensionAbility.
 *
 * @systemapi Hide this for inner system use.
 * @since 10
 * @syscap SystemCapability.Print.PrintFramework
 * @StageModelOnly
 */
import Want from './@ohos.application.Want';
import print from "./@ohos.print";


export default class PrintExtensionAbility {

    /**
     * Called once to initialize the extensionAbility.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onCreate(want: Want): void;

    /**
     * Called once to start to discover the printers connected with the device.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onStartDiscoverPrinter(): void;

    /**
     * Called once to stop discovering the printer.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onStopDiscoverPrinter(): void;

    /**
     * Called once to connect to the specific printer.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onConnectPrinter(printerId: number): void;

    /**
     * Called once to disconnect the specific printer.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onDisconnectPrinter(printerId: number): void;

    /**
     * Called once to start print job.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onStartPrintJob(jobInfo: print.PrintJob): void;

    /**
     * Called once to remove the print job has been started.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onCancelPrintJob(jobInfo: print.PrintJob): void;

    /**
     * Called once to request the capability of the printer.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onRequestPrinterCapability(printerId: number): print.PrinterCapability;

    /**
     * Called once to request preview and send result to Print SA.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onRequestPreview(jobInfo: print.PrintJob): string;

    /**
     * Called once to finalize the extensionAbility.
     *
     * @systemapi Hide this for inner system use.
     * @since 10
     * @syscap SystemCapability.Print.PrintFramework
     * @StageModelOnly
     */
    onDestroy(): void;
}
