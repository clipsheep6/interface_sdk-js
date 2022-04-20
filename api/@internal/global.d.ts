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

/**
 * Defines the console info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
export declare class console {
  /**
   * Prints "debug" logs.
   * @param message Text to print.
   * @since 7
   */
  static debug(message: string, ...arguments: any[]): void;

  /**
   * Prints "log" logs.
   * @param message Text to print.
   * @since 7
   */
  static log(message: string, ...arguments: any[]): void;

  /**
   * Prints "info" logs.
   * @param message Text to print.
   * @since 7
   */
  static info(message: string, ...arguments: any[]): void;

  /**
   * Prints "warn" logs.
   * @param message Text to print.
   * @since 7
   */
  static warn(message: string, ...arguments: any[]): void;

  /**
   * Prints "error" logs.
   * @param message Text to print.
   * @since 7
   */
  static error(message: string, ...arguments: any[]): void;
}

/**
 * Sets the interval for repeatedly calling a function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @since 7
 */
export declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;

/**
 * Sets a timer after which a function will be executed.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the delay (in milliseconds) after which the function will be called. If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @since 7
 */
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;

/**
 * Cancels the interval set by " setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param intervalID Indicates the timer ID returned by "setInterval()".
 * @since 7
 */
export declare function clearInterval(intervalID?: number): void;

/**
 * Cancels the timer set by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @param timeoutID Indicates the timer ID returned by "setTimeout()".
 * @since 7
 */
export declare function clearTimeout(timeoutID?: number): void;

/**
 * Defining syscap function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
export declare function canIUse(syscap: string): boolean;

/**
 * Defines the AppStorage interface.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
export declare class AppStorage {
  /**
   * Called when a link is set.
   * @since 7
   */
  static Link(propName: string): any;

  /**
   * Called when a hyperlink is set.
   * @since 7
   */
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Called when a property is set.
   * @since 7
   */
  static Prop(propName: string): any;

  /**
   * Called when dynamic properties are set.
   * @since 7
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Called when owning or not.
   * @since 7
   */
  static Has(propName: string): boolean;

  /**
   * Called when data is obtained.
   * @since 7
   */
  static Get<T>(propName: string): T | undefined;

  /**
   * Called when setting.
   * @since 7
   */
  static Set<T>(propName: string, newValue: T): boolean;

  /**
   * Called when setting or creating.
   * @since 7
   */
  static SetOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Called when a deletion is made.
   * @since 7
   */
  static Delete(propName: string): boolean;

  /**
   * Called when a dictionary is sorted.
   * @since 7
   */
  static Keys(): IterableIterator<string>;

  /**
   * Called when a cleanup occurs.
   * @since 7
   */
  static staticClear(): boolean;

  /**
   * Called when the data can be changed.
   * @since 7
   */
  static IsMutable(propName: string): boolean;

  /**
   * Called when you check how much data is stored.
   * @since 7
   */
  static Size(): number;
}

/**
 * Used for ide.
 * @since 7
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @hide
 */
export declare const appStorage: AppStorage;
