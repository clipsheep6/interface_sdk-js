/*
* Copyright (C) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from "./basic";

 /**
 * The input device management module is configured to obtain an ID and device information of an input device.
 *
 * @since 8
 * @syscap SystemCapability.MultimodalInput.Input.InputDevice
 * @import import inputDevice from '@system.multimodalInput.inputDevice';
 */

declare namespace inputDevice {
    type EventType = 'add' | 'remove' | 'update';

    type SourceType = 'keyboard' | 'dpad' | 'gamepad' | 'touchscreen' | 'mouse' | 'stylus' | 'bluetoothStylus' | 'trackball' |
                      'pointerCaptureMouse' | 'touchpad' | 'rotaryEncoder' | 'joystick';

    type AxisType = 'orientation' | 'pressure' | 'size' | 'toolMajor' | 'toolMinor' | 'touchMajor' | 'touchMinor' | 'x' | 'y';

    /**
     * Defines the monitor for input device events.
     * 
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param type Type of the input device event. The options are add, remove, and update.
     * @param deviceId ID of the input device for the reported input device event.
     */
    interface DeviceMonitor{
        (type: EventType, deviceId: number): void;
    }

    /**
     * Starts monitoring for an input device event.
     * 
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @device phone, tablet, tv, wearable, car
     * @param type Type of the input device event. The options are add, remove, and update.
     * @param monitor Callback for the input device event.
     */
    function on(type: EventType, monitor: DeviceMonitor): void;

    /**
     * Stops monitoring for an input device event.
     * 
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @device phone, tablet, tv, wearable, car
     * @param type Type of the input device event. The options are add, remove, and update.
     * @param monitor Callback for the input device event.
     */
    function off(type: EventType, monitor?: DeviceMonitor): void;

    /**
     * Defines axis information about events that can be reported by an input device.
     * For example, a touchscreen may report information such as x, y, and pressure,
     * which indicate the x-axis coordinate, y-axis coordinate, and pressure, respectively.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param source Input source type of the axis. For example, if a mouse reports an x-axis event, the source of the x-axis is the mouse.
     * @param axis Type of the axis. for example, the x-axis, y-axis, and pressure axis.
     * @param max Maximum value of the data reported on this axis.
     * @param min Minimum value of the data reported on this axis.
     */
    interface AxisRange {
        source: SourceType;
        axis : AxisType;
        max : number;
        min: number;
    }

    /**
     * Defines the information about an input device.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @param name Name of the input device.
     * @param sources Source type supported by the input device. For example, if a keyboard is attached with a touchpad, the device has two input sources: keyboard and touchpad.
     */
    interface InputDeviceData {
        id: number;
        name: string;
        sources : Array<SourceType>;
        axisRanges : Array<AxisRange>;
    }

    /**
     * Obtains the IDs of all input devices.
     *
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @device phone, tablet, tv, wearable, car
     * @param callback callback function, receive reported data
     */
    function getDeviceIds(callback: AsyncCallback<Array<number>>): void;
    function getDeviceIds(): Promise<Array<number>>;

    /**
     * Obtain the information about an input device.
     *
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @device phone, tablet, tv, wearable, car
     * @param deviceId ID of the input device whose information is to be obtained.
     * @param callback callback function, receive reported data
     */
    function getDevice(deviceId: number, callback: AsyncCallback<InputDeviceData>): void;
    function getDevice(deviceId: number): Promise<InputDeviceData>;

    /**
     * Obtain the information about an input device.
     *
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @device phone, tablet, tv, wearable, car
     * @param deviceId ID of the input device whose information is to be obtained.
     */
    function getDeviceSync(deviceId: number): InputDeviceData;

    /**
     * Obtains the IDs of all input devices.
     *
     * @since 8
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @device phone, tablet, tv, wearable, car
     */
     function getDeviceIdsSync(): Array<number>;
}

export default inputDevice;