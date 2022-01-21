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
 * Provides an interface for attribute subscribers.
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface IPropertySubscriber {
  /**
   * Called when the ID of the property subscriber is queried.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  id(): number;

  /**
   * Provides a single attribute change user interface.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
  /**
   * Provides a single attribute change user interface.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  hasChanged(newValue: T): void;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare abstract class SubscribedAbstractProperty<T> {
  /**
   * Setting Subscribers.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  protected subscribers_: Set<number>;

  /**
   * Private user ID.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  private id_;

  /**
   * Private user information.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  private info_?;

  /**
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor(
    /**
     * Subscriber Information.
     * @since 7
* @Syscap SystemCapability.ArkUI.Standard
     */
    subscribeMe?: IPropertySubscriber,
    info?: string,
  );

  /**
   * Called when the subscriber ID is entered.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  id(): number;

  /**
   * Called when a subscriber information description is entered.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  info(): string;

  /**
   * Called when data is obtained.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  abstract get(): T;

  /**
   * Called when data is created.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  abstract set(newValue: T): void;

  /**
   * Called when a two-way synchronization is created.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * Called when a one-way synchronization is created.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * Called when the subscriber is unlinked.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  unlinkSuscriber(subscriberId: number): void;

  /**
   * Called when the notification has changed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  protected notifyHasChanged(newValue: T): void;

  /**
   * Called when the notification property is read.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  protected notifyPropertyRead(): void;

  /**
   * Called when the number of users is queried.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  numberOfSubscrbers(): number;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class SyncedPropertyTwoWay<T>
  extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Sources of synchronization attributes bidirectionally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  private source_;

  /**
   * constructor parameters.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  get(): T;

  /**
   * Called when data is created.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  set(newValue: T): void;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class SyncedPropertyOneWay<T>
  extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Pack value for single-item binding.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  private wrappedValue_;

  /**
   * Sources of synchronization attributes bidirectionally.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  private source_;

  /**
   * Constructor parameters.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  get(): T;

  /**
   * Called when data is created.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  set(newValue: T): void;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class AppStorage {
  /**
   * Called when a link is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Link(propName: string): any;

  /**
   * Called when a hyperlink is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Called when a property is set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Prop(propName: string): any;

  /**
   * Called when dynamic properties are set.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Called when owning or not.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Has(propName: string): boolean;

  /**
   * Called when data is obtained.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Get<T>(propName: string): T | undefined;

  /**
   * Called when setting.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Set<T>(propName: string, newValue: T): boolean;

  /**
   * Called when setting or creating.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static SetOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Called when a deletion is made.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Delete(propName: string): boolean;

  /**
   * Called when a dictionary is sorted.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Keys(): IterableIterator<string>;

  /**
   * Called when a cleanup occurs.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static staticClear(): boolean;

  /**
   * Called when the data can be changed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static IsMutable(propName: string): boolean;

  /**
   * Called when you check how much data is stored.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Size(): number;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class Environment {
  /**
   * Constructor.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor();

  /**
   * Called when a property value is checked.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static EnvProp<S>(key: string, value: S): boolean;

  /**
   * Called when multiple property values are checked.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
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
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Keys(): Array<string>;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum ColorMode {
  /**
   * Bright color.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LIGHT = 0,

  /**
   * Dark.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  DARK,
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare enum LayoutDirection {
  /**
   * Elements are laid out from left to right.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  LTR = 0,

  /**
   * Elements are laid out from right to left.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  RTL,

  /**
   * Elements are laid out from auto.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  Auto
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class PersistentStorage {
  /**
   * Constructor parameters.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * Called when a persistence property is stored.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * Called when a property is deleted.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  static DeleteProp(key: string): void;

  /**
   * Called when multiple persistence properties are stored.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
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
* @Syscap SystemCapability.ArkUI.Standard
   */
  static Keys(): Array<string>;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare class Storage {
  /**
   * Constructor parameters.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor(needCrossThread?: boolean, file?: string);

  /**
   * Called when data is obtained.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  get(key: string): string | undefined;

  /**
   * Called when setting.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  set(key: string, val: any): void;

  /**
   * Called when data is cleared.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  clear(): void;

  /**
   * Called when data is deleted.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  delete(key: string): void;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare abstract class SubscribaleAbstract {
  /**
   * Returns the ownership attribute set by the.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  private owningProperties_: Set<number>;

  /**
   * Constructor.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  constructor();

  /**
   * Called when the notification property has changed.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * Called when adding an already owned property.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted.
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted by ID
   * @since 7
* @Syscap SystemCapability.ArkUI.Standard
   */
  public removeOwningPropertyById(subscriberId: number): void;
}

/**
 * @since 8
* @Syscap SystemCapability.ArkUI.Standard
 */
 declare class ContentStorage {
  /**
   * Called when a link is set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  link(propName: string): any;

  /**
   * Called when a hyperlink is set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Called when a property is set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  prop(propName: string): any;

  /**
   * Called when dynamic properties are set.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Called when owning or not.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  has(propName: string): boolean;

  /**
   * Called when data is obtained.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  get<T>(propName: string): T | undefined;

  /**
   * Called when setting.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  set<T>(propName: string, newValue: T): boolean;

  /**
   * Called when setting or creating.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  setOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Called when a deletion is made.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  delete(propName: string): boolean;

  /**
   * Called when a dictionary is sorted.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  keys(): IterableIterator<string>;

  /**
   * Called when a cleanup occurs.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  clear(): boolean;

  /**
   * Called when the data can be changed.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  isMutable(propName: string): boolean;

  /**
   * Called when you check how much data is stored.
   * @since 8
* @Syscap SystemCapability.ArkUI.Standard
   */
  size(): number;
}

/**
 * @since 7
* @Syscap SystemCapability.ArkUI.Standard
 */
declare const appStorage: AppStorage;
