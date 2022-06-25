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
 * Defines the AppStorage interface.
 * @since 7
 */
declare class AppStorage {
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
 * Defines the subscribed abstract property.
 * @since 7
 * @systemapi
 */
declare abstract class SubscribedAbstractProperty<T> {
  /**
   * Setting Subscribers.
   * @since 7
   * @systemapi
   */
  protected subscribers_: Set<number>;

  /**
   * Private user ID.
   * @since 7
   * @systemapi
   */
  private id_;

  /**
   * Private user information.
   * @since 7
   * @systemapi
   */
  private info_?;

  /**
   * @since 7
   * @systemapi
   */
  constructor(
      /**
       * Subscriber IPropertySubscriber.
       * @since 7
       * @systemapi
       */
      subscribeMe?: IPropertySubscriber,
      /**
       * Subscriber info.
       * @since 7
       * @systemapi
       */
      info?: string,
  );

  /**
   * Called when the subscriber ID is entered.
   * @since 7
   * @systemapi
   */
  id(): number;

  /**
   * Called when a subscriber information description is entered.
   * @since 7
   * @systemapi
   */
  info(): string;

  /**
   * Called when data is obtained.
   * @since 7
   * @systemapi
   */
  abstract get(): T;

  /**
   * Called when data is created.
   * @since 7
   * @systemapi
   */
  abstract set(newValue: T): void;

  /**
   * Called when a two-way synchronization is created.
   * @since 7
   * @systemapi
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * Called when a one-way synchronization is created.
   * @since 7
   * @systemapi
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * Called when the subscriber is unlinked.
   * @since 7
   * @systemapi
   */
  unlinkSuscriber(subscriberId: number): void;

  /**
   * Called when the notification has changed.
   * @since 7
   * @systemapi
   */
  protected notifyHasChanged(newValue: T): void;

  /**
   * Called when the notification property is read.
   * @since 7
   * @systemapi
   */
  protected notifyPropertyRead(): void;

  /**
   * Called when the number of users is queried.
   * @since 7
   * @systemapi
   */
  numberOfSubscrbers(): number;
}

/**
 * Defines the basic async callback.
 * @since 6
 */
declare interface AsyncCallback<T> {
  /**
   * Defines the callback data.
   * @since 6
   */
  (err: BusinessError, data: T): void;
}

/**
 * Defines the error interface.
 * @since 6
 */
declare interface BusinessError extends Error {
  /**
   * Defines the basic error code.
   * @since 6
   */
  code: number;
}

/**
 * Describes area information in an image.
 * @since 7
 * @syscap SystemCapability.Multimedia.Image.Core
 */
interface PositionArea {
  /**
   * Image data that will be read or written.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  pixels: ArrayBuffer;

  /**
   * Offset for data reading.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  offset: number;

  /**
   * Number of bytes to read.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  stride: number;

  /**
   * Region to read.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  region: Region;
}

/**
 * Describes region information.
 * @since 8
 * @syscap SystemCapability.Multimedia.Image.Core
 */
interface Region {
  /**
   * Image size.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  size: Size;

  /**
   * x-coordinate at the upper left corner of the image.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  x: number;

  /**
   * y-coordinate at the upper left corner of the image.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  y: number;
}

/**
 * Describes the size of an image.
 * @since 6
 * @syscap SystemCapability.Multimedia.Image.Core
 */
interface Size {
  /**
   * Height
   * @since 6
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  height: number;

  /**
   * Width
   * @since 6
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  width: number;
}

/**
 * Describes image information.
 * @since 6
 * @syscap SystemCapability.Multimedia.Image.Core
 */
interface ImageInfo {
  /**
   * Indicates image dimensions specified by a {@link Size} interface.
   * @since 6
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  size: Size;
}

/**
 * PixelMap instance.
 * @since 7
 * @syscap SystemCapability.Multimedia.Image.Core
 */
declare interface PixelMap {
  /**
   * Whether the image pixel map can be edited.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   */
  readonly isEditable: boolean;

  /**
   * Reads image pixel map data and writes the data to an ArrayBuffer. This method uses
   * a promise to return the result.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param dst A buffer to which the image pixel map data will be written.
   * @return A Promise instance used to return the operation result. If the operation fails, an error message is returned.
   */
  readPixelsToBuffer(dst: ArrayBuffer): Promise<void>;

  /**
   * Reads image pixel map data and writes the data to an ArrayBuffer. This method uses
   * a callback to return the result.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param dst A buffer to which the image pixel map data will be written.
   * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
   */
  readPixelsToBuffer(dst: ArrayBuffer, callback: AsyncCallback<void>): void;

  /**
   * Reads image pixel map data in an area. This method uses a promise to return the data read.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param area Area from which the image pixel map data will be read.
   * @return A Promise instance used to return the operation result. If the operation fails, an error message is returned.
   */
  readPixels(area: PositionArea): Promise<void>;

  /**
   * Reads image pixel map data in an area. This method uses a callback to return the data read.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param area Area from which the image pixel map data will be read.
   * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
   */
  readPixels(area: PositionArea, callback: AsyncCallback<void>): void;

  /**
   * Writes image pixel map data to the specified area. This method uses a promise to return
   * the operation result.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param area Area to which the image pixel map data will be written.
   * @return A Promise instance used to return the operation result. If the operation fails, an error message is returned.
   */
  writePixels(area: PositionArea): Promise<void>;

  /**
   * Writes image pixel map data to the specified area. This method uses a callback to return
   * the operation result.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param area Area to which the image pixel map data will be written.
   * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
   */
  writePixels(area: PositionArea, callback: AsyncCallback<void>): void;

  /**
   * Reads image data in an ArrayBuffer and writes the data to a PixelMap object. This method
   * uses a promise to return the result.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param src A buffer from which the image data will be read.
   * @return A Promise instance used to return the operation result. If the operation fails, an error message is returned.
   */
  writeBufferToPixels(src: ArrayBuffer): Promise<void>;

  /**
   * Reads image data in an ArrayBuffer and writes the data to a PixelMap object. This method
   * uses a callback to return the result.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param src A buffer from which the image data will be read.
   * @param callback Callback used to return the operation result. If the operation fails, an error message is returned.
   */
  writeBufferToPixels(src: ArrayBuffer, callback: AsyncCallback<void>): void;

  /**
   * Obtains pixel map information about this image. This method uses a promise to return the information.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @return A Promise instance used to return the image pixel map information. If the operation fails, an error message is returned.
   */
  getImageInfo(): Promise<ImageInfo>;

  /**
   * Obtains pixel map information about this image. This method uses a callback to return the information.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param callback Callback used to return the image pixel map information. If the operation fails, an error message is returned.
   */
  getImageInfo(callback: AsyncCallback<ImageInfo>): void;

  /**
   * Obtains the number of bytes in each line of the image pixel map.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @return Number of bytes in each line.
   */
  getBytesNumberPerRow(): number;

  /**
   * Obtains the total number of bytes of the image pixel map.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @return Total number of bytes.
   */
  getPixelBytesNumber(): number;

  /**
   * Releases this PixelMap object. This method uses a callback to return the result.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @param callback Callback invoked for instance release. If the operation fails, an error message is returned.
   */
  release(callback: AsyncCallback<void>): void;

  /**
   * Releases this PixelMap object. This method uses a promise to return the result.
   * @since 7
   * @syscap SystemCapability.Multimedia.Image.Core
   * @return A Promise instance used to return the instance release result. If the operation fails, an error message is returned.
   */
  release(): Promise<void>;
}

/**
 * Defines the data type of the interface restriction.
 * @since 7
 */
declare interface Resource {
  /**
   * Set id.
   * @since 7
   */
  readonly id: number;

  /**
   * Set type.
   * @since 7
   */
  readonly type: number;

  /**
   * Set params.
   * @since 7
   */
  readonly params?: any[];

  /**
   * Set bundleName.
   * @since 9
   */
  readonly bundleName: string;

  /**
   * Set moduleName.
   * @since 9
   */
  readonly moduleName: string;
}

/**
 * Provides an interface for attribute subscribers.
 * @since 7
 * @systemapi
 */
interface IPropertySubscriber {
  /**
   * Called when the ID of the property subscriber is queried.
   * @since 7
   * @systemapi
   */
  id(): number;

  /**
   * Provides a single attribute change user interface.
   * @since 7
   * @systemapi
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * Defines the state value.
 * @since 7
 * @systemapi
 */
declare class SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Sources of synchronization attributes bidirectionally.
   * @since 7
   * @systemapi
   */
  private source_;

  /**
   * constructor parameters.
   * @since 7
   * @systemapi
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @since 7
   * @systemapi
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @since 7
   * @systemapi
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @since 7
   * @systemapi
   */
  get(): T;

  /**
   * Called when data is created.
   * @since 7
   * @systemapi
   */
  set(newValue: T): void;
}

/**
* Defines the prop state value.
* @since 7
* @systemapi
*/
declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Pack value for single-item binding.
   * @since 7
   * @systemapi
   */
  private wrappedValue_;

  /**
   * Sources of synchronization attributes bidirectionally.
   * @since 7
   * @systemapi
   */
  private source_;

  /**
   * Constructor parameters.
   * @since 7
   * @systemapi
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @since 7
   * @systemapi
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @since 7
   * @systemapi
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @since 7
   * @systemapi
   */
  get(): T;

  /**
   * Called when data is created.
   * @since 7
   * @systemapi
   */
  set(newValue: T): void;
}

/**
 * Defines the subscriber.
 * @since 7
 * @systemapi
 */
interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
  /**
   * Provides a single attribute change user interface.
   * @since 7
   * @systemapi
   */
  hasChanged(newValue: T): void;
}

/**
 * Defines the Subscribale base class.
 * @since 7
 * @systemapi
 * @hide
 */
declare abstract class SubscribaleAbstract {
  /**
   * Returns the ownership attribute set by the.
   * @since 7
   * @systemapi
   * @hide
   */
  private owningProperties_: Set<number>;

  /**
   * Constructor.
   * @since 7
   * @systemapi
   * @hide
   */
  constructor();

  /**
   * Called when the notification property has changed.
   * @since 7
   * @systemapi
   * @hide
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * Called when adding an already owned property.
   * @since 7
   * @systemapi
   * @hide
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted.
   * @since 7
   * @systemapi
   * @hide
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted by ID
   * @since 7
   * @systemapi
   * @hide
   */
  public removeOwningPropertyById(subscriberId: number): void;
}

/**
 * Defines the Environment interface.
 * @since 7
 */
declare class Environment {
  /**
   * Constructor.
   * @since 7
   * @systemapi
   * @hide
   */
  constructor();

  /**
   * Called when a property value is checked.
   * @since 7
   */
  static EnvProp<S>(key: string, value: S): boolean;

  /**
   * Called when multiple property values are checked.
   * @since 7
   */
  static EnvProps(
    props: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Set the key value.
   * @since 7
   */
  static Keys(): Array<string>;
}

/**
 * Defines the PersistentStorage interface.
 * @since 7
 */
declare class PersistentStorage {
  /**
   * Constructor parameters.
   * @since 7
   * @systemapi
   * @hide
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * Called when a persistence property is stored.
   * @since 7
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * Called when a property is deleted.
   * @since 7
   */
  static DeleteProp(key: string): void;

  /**
   * Called when multiple persistence properties are stored.
   * @since 7
   */
  static PersistProps(
    properties: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Set the key value.
   * @since 7
   */
  static Keys(): Array<string>;
}

/**
 * Used for ide.
 * @since 7
 * @systemapi
 * @hide
 */
declare const appStorage: AppStorage;