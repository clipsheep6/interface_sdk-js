/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/// <reference path="../../../component/common.d.ts" />

import { TouchObject, KeyEvent, MouseEvent } from 'SpecialEvent';

/**
 * Defines the console info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the console info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the console info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
/**
 * Defines the console info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @form
 */
export declare class console {
  /**
   * Prints "debug" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Prints "debug" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Prints "debug" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Prints "debug" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  static debug(message: string, ...arguments: any[]): void;

  /**
   * Prints "log" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Prints "log" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Prints "log" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Prints "log" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  static log(message: string, ...arguments: any[]): void;

  /**
   * Prints "info" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Prints "info" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Prints "info" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Prints "info" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  static info(message: string, ...arguments: any[]): void;

  /**
   * Prints "warn" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Prints "warn" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Prints "warn" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Prints "warn" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  static warn(message: string, ...arguments: any[]): void;

  /**
   * Prints "error" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Prints "error" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Prints "error" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Prints "error" logs.
   *
   * @param { string } message - Text to print.
   * @param { any[] } arguments
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  static error(message: string, ...arguments: any[]): void;

  /**
   * Prints a message if value is false or omitted.
   *
   * @param { Object } [value] - The value tested for being truthy.
   * @param { Object[] } arguments - Used as error message to print.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static assert(value?: Object, ...arguments: Object[]): void;

  /**
   * Maintains an internal counter specific to label and print the number of times
   * console.count() has been called with the given label.
   *
   * @param { string } [label] - Counter name. Default: "default".
   * @throws { BusinessError } 401 - The parameter check failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static count(label?: string): void;

  /**
   * Reset the internal counter specific to label.
   *
   * @param { string } [label] - Counter name. Default: "default".
   * @throws { BusinessError } 401 - The parameter check failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static countReset(label?: string): void;

  /**
   * Prints properties of the specified JavaScript object.
   *
   * @param { Object } [dir] - A JavaScript object whose properties should be output.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static dir(dir?: Object): void;

  /**
   * This method calls console.log() passing it the arguments received.
   * This method does not produce any XML formatting.
   *
   * @param { Object[] } arguments - Text to print.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static dirxml(...arguments: Object[]): void;

  /**
   * Creates a new inline group, causing any subsequent console messages to be indented by an additional level.
   *
   * @param { Object[] } arguments - messages to print first.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static group(...arguments: Object[]): void;

  /**
   * Same as console.group()
   *
   * @param { Object[] } arguments - messages to print first.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static groupCollapsed(...arguments: Object[]): void;

  /**
   * Exit current inline group.
   *
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static groupEnd(): void;

  /**
   * Prints tabular data as a table.
   *
   * @param { Object } [tableData] - tabular data.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static table(tableData?: Object): void;

  /**
   * Start a timer.
   *
   * @param { string } [label] - Timer name. Default: "default".
   * @throws { BusinessError } 401 - The parameter check failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static time(label?: string): void;

  /**
   * End a timer and print time duration.
   *
   * @param { string } [label] - Timer name. Default: "default".
   * @throws { BusinessError } 401 - The parameter check failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static timeEnd(label?: string): void;

  /**
   * Print the elapsed time and other data arguments.
   *
   * @param { string } [label] - Timer name. Default: "default".
   * @param { Object[] } arguments - Text to print.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static timeLog(label?: string, ...arguments: Object[]): void;

  /**
   * Prints stack information for the current code location.
   *
   * @param { Object[] } arguments - message to print.
   * @static
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  static trace(...arguments: Object[]): void;
}

/**
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;

/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } [arguments] - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } [arguments] - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;

/**
 * Cancel the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Cancel the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Cancel the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function clearInterval(intervalID?: number): void;

/**
 * Cancel the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Cancel the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Cancel the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function clearTimeout(timeoutID?: number): void;

/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function canIUse(syscap: string): boolean;

/**
 * Obtains all attributes of the component with the specified ID.
 *
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Obtains all attributes of the component with the specified ID.
 *
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Obtains all attributes of the component with the specified ID.
 *
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function getInspectorByKey(id: string): string;

/**
 * Get components tree.
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Get components tree.
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Get components tree.
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function getInspectorTree(): Object;

/**
 * Sends an event to the component with the specified ID.
 *
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Sends an event to the component with the specified ID.
 *
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Sends an event to the component with the specified ID.
 *
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendEventByKey(id: string, action: number, params: string): boolean;

/**
 * Send touch event.
 *
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send touch event.
 *
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Send touch event.
 *
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendTouchEvent(event: TouchObject): boolean;

/**
 * Send key event.
 *
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send key event.
 *
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Send key event.
 *
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendKeyEvent(event: KeyEvent): boolean;

/**
 * Send mouse event.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send mouse event.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Send mouse event.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendMouseEvent(event: MouseEvent): boolean;

 /**
  * Mark moduleNamespace which loaded by dynamic-import is collectable.
  *
  * @param { Object } namespace - moduleNamespace to be marked.
  * @throws { BusinessError } 401 - if type of object is not moduleNameSpace.
  * @syscap SystemCapability.Utils.Lang
  * @systemapi
  * @stagemodelonly
  * @since 10
  */
export declare function markModuleCollectable(namespace: Object): void;

/**
 * ConcatSendableArray is a interface based on ConcatArray. 
 * 
 * @interface ConcatSendableArray
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 12
 */
export interface ConcatSendableArray<T> {
  /**
   * Gets the element number of the ArrayList.This is a number one higher than the highest index in the arraylist.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  readonly length: number;
  /**
   * Adds all the elements of a sendable array into a string, separated by the specified separator string.
   * 
   * @param { string } separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
   * @returns { string } A string with all array elements joined. If sendableArray.length is 0, the empty string is returned.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 12
   */
  join(separator?: string): string;
  /**
   * Returns a copy of a section of a sendable array.
   * @param { number } start The beginning index of the specified portion of the array.
   * @param { number } end The end index of the specified portion of the array. 
   * @returns { SendableArray<T> } A new array containing the extracted elements
   * @syscap SystemCapability.Utils.Lang 
   * @crossplatform
   * @since 12
   */
  slice(start?: number, end?: number): SendableArray<T>;
}

/**
 * SendableArray is a data structure that is implemented based on array. 
 * 
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 12
 */
// @Sendable
export declare class SendableArray<T> {
    /**
     * A constructor used to create a Sendable Array.
     *
     * @param { number } arrayLength - The length of the array
     * @throws { BusinessError } 10200012 - The SendableArray's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - The arrayLength is not between 0 and 2^32 -1
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    constructor(arrayLength?: number);

    /**
     * A constructor used to create a Sendable Array.
     *
     * @param { T[] } items - A Sendable array is initialized with the given sendable elements
     * @throws { BusinessError } 10200012 - The SendableArray's constructor cannot be directly invoked.
     * @throws { BusinessError } 401 - The given elements is not all sendable elements
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    constructor(...items: T[]);

    /**
     * Creates a sendable array from an array-like sendable object.
     * 
     * @param { ArrayLike<T> } arrayLike - An array-like sendable object to convert to a sendable array.
     * @returns { SendableArray<T> } A new SendableArray instance
     * @throws { BusinessError } 401 - The given arrayLike is not a sendable array
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    static from<T>(arrayLike: ArrayLike<T>): SendableArray<T>;

    /**
     * Creates a sendable array from an iterable sendable object.
     * 
     * @param { ArrayLike<T> } arrayLike - An array-like sendable object to convert to a sendable array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @param { Object } [thisArg] - Value of 'this' used to invoke the mapfn.
     * @returns { SendableArray<U> } A new SendableArray instance
     * @throws { BusinessError } 401 - The given arrayLike is not a sendable array
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    static from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: Object): SendableArray<U>;

    /**
     * Gets or sets the length of the sendable array. This is a number one higher than the highest index in the sendable array.
     * 
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    length: number;
    /**
      * Removes the last element from an sendable array and returns it.
      * If the array is empty, undefined is returned and the array is not modified.
      * 
      * @returns { T | undefined } - The removed element from the array; undefined if the array is empty.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @since 12
      */
    pop(): T | undefined;
    /**
      * Appends new elements to the end of a sendable array, and returns the new length of the array.
      * 
      * @param { SendableArray<T> } sendableArray - New sendable elements to add to the sendable array.
      * @returns { number } - The new length property of the object upon which the method was called.
      * @throws { BusinessError } 401 - The given items is not a sendable array
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @since 12
      */
    push(sendableArray: SendableArray<T>): number;
    /**
      * Combines two or more sendable arrays.
      * This method returns a new sendable array without modifying any existing arrays.
      * 
      * @param { ConcatSendableArray<T>[] } items - Additional sendable arrays and/or items to add to the end of the sendable array.
      * @returns { SendableArray<T> } - A new SendableArray instance
      * @throws { BusinessError } 401 - The given items is not a sendable ConcatArray
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @since 12
      */
    concat(...items: ConcatSendableArray<T>[]): SendableArray<T>;
    /**
      * Combines two or more arrays.
      * This method returns a new array without modifying any existing arrays.
      * 
      * @param { (T | ConcatSendableArray<T>)[] } items - Additional arrays and/or items to add to the end of the array.
      * @returns { SendableArray<T> } - A new SendableArray instance
      * @throws { BusinessError } 401 - The given items is not a sendable ConcatArray
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @since 12
      */
    concat(...items: (T | ConcatSendableArray<T>)[]): SendableArray<T>;
    /**
      * Adds all the elements of a sendable array into a string, separated by the specified separator string.
      * 
      * @param { string } separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
      * @returns { string } A string with all array elements joined. If sendableArray.length is 0, the empty string is returned.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @since 12
      */
    join(separator?: string): string;
    /**
     * Removes the first element from a sendable array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     * 
     * @returns { T | undefined } The removed element fromm the array; undefined if the array is empty
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    shift(): T | undefined;
    /**
     * Inserts new elements at the start of an array, and returns the new length of the array.
     *
     * @param { SendableArray<T> } items Elements to insert at the start of the array.
     * @returns { number } The new length property of the object upon which the method was called.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    unshift(sendableArray: SendableArray<T>): number;
    /**
     * Returns a copy of a section of a sendable array.
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * For example, -2 refers to the second to last element of the array.
     *
     * @param { number } start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * @param { number } end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     * @returns { SendableArray<T> } A new array containing the extracted elements
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    slice(start?: number, end?: number): SendableArray<T>;
    /**
     * Sorts an array in place.
     * This method mutates the array and returns a reference to the same array.
     *
     * @param { function } compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    sort(compareFn?: (a: T, b: T) => number): this;
    /**
     * Returns the index of the first occurrence of a value in a sendable array, or -1 if it is not present.
     * 
     * @param { T } searchElement The value to locate in the array.
     * @param { number } fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     * @returns { number } The first index of searchElement in the array; -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Executes a provided function once for each value in the sendableArray object.
     *
     * @param { function } callbackFn - callbackFn
     * callbackFn (required) A function that accepts up to three arguments.
     * The function to be called for each element.
     * @param { Object } [thisArg] - thisArg
     * thisArg (Optional) The value to be used as this value for when callbackFn is called.
     * If thisArg is omitted, undefined is used as the this value.
     * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    forEach(callbackfn: (value: T, index: number, array: SendableArray<T>) => void, thisArg?: Object): void;
    /**
     * Calls a defined callback function on each element of a sendable array, and returns an array that contains the results.
     * 
     * @param { function } callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param { Object } [thisArg] An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     * @returns { SendableArray<U> } A new sendable array with each element being the result of the callback function.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    map<U>(callbackfn: (value: T, index: number, array: SendableArray<T>) => U, thisArg?: Object): SendableArray<U>;
    /**
     * Returns the elements of a sendable array that meet the condition specified in a callback function.
     * 
     * @param { function } predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param { Object } [thisArg] An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     * @returns { SendableArray<S> } A shallow copy of the given containing just the elements that pass the test. If no elements pass the test, an empty array is returned.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    filter<S extends T>(predicate: (value: T, index: number, array: SendableArray<T>) => value is S, thisArg?: Object): SendableArray<S>;
    /**
     * Returns the elements of a sendable array that meet the condition specified in a callback function.
     * 
     * @param { function } predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param { Object } [thisArg] An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     * @returns { SendableArray<T> } A shallow copy of the given containing just the elements that pass the test. If no elements pass the test, an empty array is returned.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    filter(predicate: (value: T, index: number, array: SendableArray<T>) => unknown, thisArg?: Object): SendableArray<T>;
    /**
     * Calls the specified callback function for all the elements in a sendable array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * 
     * @param { function } callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @returns { T } The value that results from running the "reducer" callback function to completion over the entire array.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: SendableArray<T>) => T): T;
    /**
     * Calls the specified callback function for all the elements in a sendable array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * 
     * @param { function } callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param { T } initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     * @returns { T } The value that results from running the "reducer" callback function to completion over the entire array.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: SendableArray<T>) => T, initialValue: T): T;
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * 
     * @param { function } callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     * @returns { U } The value that results from running the "reducer" callback function to completion over the entire array.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
    */
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: SendableArray<T>) => U, initialValue: U): U;
    /**
     * Returns the item located at the specified index.
     *
     * @param { number } index The zero-based index of the desired code unit. A negative index will count back from the last item.
     * @returns { T | undefined } The element in the array matching the given index. Always returns undefined if index < -array.length or index >= array.length without attempting to access the corresponding property.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    at(index: number): T | undefined;
    /**
     * returns an iterator.Each item of the iterator is a Javascript Object
     *
     * @returns { IterableIterator<T> }
     * @throws { BusinessError } 10200011 - The Symbol.iterator method cannot be bound.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * Returns an iterable of key, value pairs for every entry in the array
     * 
     * @returns { IterableIterator<[number, T]> } A new iterable iterator object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    entries(): IterableIterator<[number, T]>;
    /**
     * Returns an iterable of keys in the array
     * 
     * @returns { IterableIterator<number> } A new iterable iterator object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an iterable of values in the array
     * 
     * @returns { IterableIterator<T> } A new iterable iterator object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    values(): IterableIterator<T>;
    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * 
     * @param { function } predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param { Object } [thisArg] If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     * @returns { S | undefined } The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    find<S extends T>(predicate: (this: void, value: T, index: number, obj: SendableArray<T>) => value is S, thisArg?: Object): S | undefined;
    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * 
     * @param { function } predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param { Object } [thisArg] If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     * @returns { T | undefined } The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    find(predicate: (value: T, index: number, obj: SendableArray<T>) => unknown, thisArg?: Object): T | undefined;
    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     *
     * @param { T } searchElement The element to search for.
     * @param { number } fromIndex The position in this array at which to begin searching for searchElement.
     * @returns { boolean } A boolean value which is true if the value searchElement is found within  the array (or the part of the array indicated by the index fromIndex, if specified).
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    includes(searchElement: T, fromIndex?: number): boolean;
    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise.
     *
     * @param { function } predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found,
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
     * @param { Object } [thisArg] If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     * @returns { number } The index of the first element in the array that passes the test. Otherwise, -1;
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    findIndex(predicate: (value: T, index: number, obj: SendableArray<T>) => unknown, thisArg?: Object): number;
    /**
     * Returns the this object after filling the section identified by start and end with value
     * 
     * @param { number } value value to fill array section with
     * @param { number } start index to start filling the array at. If start is negative, it is treated as
     * length+start where length is the length of the array.
     * @param { number } end index to stop filling the array at. If end is negative, it is treated as
     * length+end.
     * @throws { BusinessError } 401 - The type of parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    fill(value: T, start?: number, end?: number): this;
}