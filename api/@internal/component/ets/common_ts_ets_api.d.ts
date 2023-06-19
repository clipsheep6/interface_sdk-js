/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * AppStorage singleton is sub-class of see LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 * @since 7
 */
/**
 * AppStorage singleton is sub-class of see LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 * @crossplatform
 * @since 10
 */
declare class AppStorage {

  /**
   * Called when a link is set.
   * @see link
   * 
   * @since 7
   */
  /**
   * Called when a link is set.
   * @crossplatform
   * @since 10
   * @deprecated since 10
   * @useinstead AppStorage#link
   */
  static Link(propName: string): any;

  /**
    * Create and return a two-way sync "(link") to named property
    *
    * Same as @see LocalStorage.link()
    *
    * @param { string } propName name of source property in AppStorage
    * @returns { SubscribedAbstractProperty<T> } instance of SubscribedAbstractProperty<S>
    *           return 'undefined' if named property does not already exist in AppStorage
    * 
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 10
    */
  static link<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * @see setAndLink
   *
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#setAndLink
   */
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * At see link(), but will create and initialize a new source property in AppStorage if missing
   *
   * Same as see LocalStorage.setAndLink()
   *
   * @param { string } propName name of source property in AppStorage
   * @param { T } defaultValue value to be used for initializing if new creating new property in AppStorage
   *        default value must be of type T, must not be 'undefined' or 'null'.
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * @see prop
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#prop
   */
  static Prop(propName: string): any;

  /**
   * Create and return a one-way sync ('prop') to named property
   * 
   * Same as @see LocalStorage.prop()
   *
   * @param { string } propName name of source property in AppStorage
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<S>
   *           return undefined if named property does not already exist in AppStorage.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static prop<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * @see setAndProp
   * 
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#setAndProp
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * At see prop(), will create and initialize a new source property in AppStorage if missing
   *
   * Same as see LocalStorage.setAndProp()
   *
   * @param { string } propName name of source property in AppStorage
   * @param { T } defaultValue value to be used for initializing if new creating new property in AppStorage.
   *        default value must be of type T, must not be undefined or null.
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
   *           return undefined if named property does not already exist in AppStorage.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * @see has
   *
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#has
   */
  static Has(propName: string): boolean;


  /**
   * Checks if AppStorage has a property with given name
   * returns true if property with given name exists
   * same as ES6 Map.prototype.has()
   *
   * Same as see LocalStorage.has()
   *
   * @param { string } propName searched property
   * @returns { boolean } true if property with such name exists in AppStorage
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static has(propName: string): boolean;

  /**
   * @see get
   *
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#get
   */
  static Get<T>(propName: string): T | undefined;

  /**
   * Same as see LocalStorage.get()
   *
   * Obtain the value of property with given name, returns undefined if the property does not exist in AppStorage.
   *
   * @param { string } propName
   * @returns { T | undefined } property value of type T if found or undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static get<T>(propName: string): T | undefined;

  /**
   * @see set
   *
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#set
   */
  static Set<T>(propName: string, newValue: T): boolean;

  /**
   * Set value of given property in AppStorage
   * Method sets nothing and returns false if property with this name does not exist
   * or if newValue is `undefined` or `null`.
   *
   * Same as see LocalStorage.set
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   * @returns { boolean } true on success, i.e. when above conditions are satisfied, otherwise false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static set<T>(propName: string, newValue: T): boolean;

  /**
   * @see setOrCreate
   *
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#setOrCreate
   */
  static SetOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Set value of given property, if it exists, see set() .
   * Add property if no property with given name in AppStorage,. yet, and initialize with given value.
   * Do nothing and return false if newValue is undefined or null
   *
   * see LocalStorage.setOrCreate()
   *
   * @param { string } propName
   * @param { T } newValue must be of type T and must not be undefined or null
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static setOrCreate<T>(propName: string, newValue: T): void;

  /**
   * @see delete
   *
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#delete
   */
  static Delete(propName: string): boolean;

  /**
   * Delete property with given name from AppStorage
   * Use with caution:
   * Before deleting a prop from AppStorage all its subscribers need to
   * unsubscribe from the property.
   * This method fails and returns false if given property still has subscribers
   * Another reason for failing is unknown property name.
   *
   * Developer advise:
   * Subscribers to a property in AppStorage are created with see link(), see prop()
   * and also via @StorageLink and @StorageProp state variable decorators.
   * That means as long as their is a @Component instance that uses such decorated variable
   * or a sync relationship with a SubscribedAbstractProperty variable the property can not
   * (and also should not!) be deleted from AppStorage.
   *
   * Same as see LocalStorage.delete()
   *
   * @param { string } propName
   * @returns { boolean } false if method failed
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static delete(propName: string): boolean;

  /**
   * @see keys
   *
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#keys
   */
  static Keys(): IterableIterator<string>;


  /**
   * Provide names of all properties in AppStorage
   * same as ES6 Map.prototype.keys()
   *
   * Same as see LocalStorage.keys()
   *
   * @returns { IterableIterator<string> } return a Map Iterator
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static keys(): IterableIterator<string>;

  /**
   * Called when a cleanup occurs.
   * @since 7
   * @deprecated since 9
   * @useinstead AppStorage.Clear
   */
  static staticClear(): boolean;

  /**
   * @see clear
   *
   * @since 9
   * @deprecated since 10
   * @useinstead AppStorage#clear
   */
  static Clear(): boolean;

  /**
   * Delete all properties from the AppStorage.
   *
   * Precondition is that there are no subscribers, see Delete().
   * @returns { boolean } false and deletes no properties if there is any property
   * that still has subscribers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static clear(): boolean;

  /**
   * Called when the data can be changed.
   * @since 7
   */
  /**
   * @deprecated since 10
   */
  static IsMutable(propName: string): boolean;

  /**
   * @see size
   * @since 7
   * @deprecated since 10
   * @useinstead AppStorage#size
   */
  static Size(): number;

  /**
   * Method returns the number of properties currently in AppStorage
   *
   * @returns { number } Returns the number of properties currently in AppStorage
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static size(): number;
}

/**
 * Defines the subscribed abstract property.
 * @systemapi
 * @since 7
 */
/**
 *   SubscribedAbstractProperty<T> is the return value of
 *   - AppStorage static functions Link(), Prop(), SetAndLink(), and SetAndProp()
 *   - LocalStorage member methods link(), prop(), setAndLink(), and setAndProp()
 *   'T' can be boolean, string, number or custom class.
 *
 * Main functions
 *   see get() reads the linked AppStorage/LocalStorage property value,
 *   see set(newValue) write a new value to the synched AppStorage/LocalStorage property
 *   see aboutToBeDeleted() ends the sync relationship with the AppStorage/LocalStorage property
 *        The app must call this function before the SubscribedAbstractProperty<T> object
 *        goes out of scope.
 * @since 9
 * @form
 */
/**
 *   SubscribedAbstractProperty<T> is the return value of
 *   - AppStorage static functions Link(), Prop(), SetAndLink(), and SetAndProp()
 *   - LocalStorage member methods link(), prop(), setAndLink(), and setAndProp()
 *   'T' can be boolean, string, number or custom class.
 *
 * Main functions
 *   see get() reads the linked AppStorage/LocalStorage property value,
 *   see set(newValue) write a new value to the synched AppStorage/LocalStorage property
 *   see aboutToBeDeleted() ends the sync relationship with the AppStorage/LocalStorage property
 *        The app must call this function before the SubscribedAbstractProperty<T> object
 *        goes out of scope.
 * @crossplatform
 * @since 10
 * @form
 */
declare abstract class SubscribedAbstractProperty<T> {
  /**
   * Setting Subscribers.
   * @systemapi
   * @since 7
   */
  protected subscribers_: Set<number>;

  /**
   * Private user ID.
   * @systemapi
   * @since 7
   */
  private id_;

  /**
   * Private user information.
   * @systemapi
   * @since 7
   */
  private info_?;

  /**
   * @systemapi
   * @since 7
   */
  constructor(
    /**
     * Subscriber IPropertySubscriber.
     * @systemapi
     * @since 7
     */
    subscribeMe?: IPropertySubscriber,
    /**
     * Subscriber info.
     * @systemapi
     * @since 7
     */
    info?: string,
  );

  /**
   * Called when the subscriber ID is entered.
   * @systemapi
   * @since 7
   */
  id(): number;

  /**
   * Returns the property name,
   * e.g. let link = AppStorage.Link("foo") then link.info() == "foo"
   *
   * @returns { string } the property name if set or undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  info(): string;

  /**
   * Reads value of the sync'ed AppStorage/LocalStorage property.
   * `let link : SubscribedAbstractProperty<string> =AppStorage.Link<string>("foo")`
   * then `link.get()` returns the value of "foo" property in AppStorage.
   * @returns { T } the value of the sync'ed AppStorage/LocalStorage property.
   *
   * @since 9
   * @form
   */
  /**
   * Reads value of the sync'ed AppStorage/LocalStorage property.
   * `let link : SubscribedAbstractProperty<string> =AppStorage.Link<string>("foo")`
   * then `link.get()` returns the value of "foo" property in AppStorage.
   * @returns { T } the value of the sync'ed AppStorage/LocalStorage property.
   *
   * @crossplatform
   * @since 10
   * @form
   */
  abstract get(): T;

  /**
   * Updates the value of value of the sync'ed AppStorage/LocalStorage property.
   * Sets new value, must be of type T, and must not be 'undefined' or 'null'.
   * `let link : SubscribedAbstractProperty<string> =AppStorage.Link<string>("foo")`
   * then `link.set("Hello")` will set the value of "foo" property in AppStorage.
   *
   * @param { T } newValue
   * @since 9
   * @form
   */
  /**
   * Updates the value of value of the sync'ed AppStorage/LocalStorage property.
   * Sets new value, must be of type T, and must not be 'undefined' or 'null'.
   * `let link : SubscribedAbstractProperty<string> =AppStorage.Link<string>("foo")`
   * then `link.set("Hello")` will set the value of "foo" property in AppStorage.
   *
   * @param { T } newValue
   * @crossplatform
   * @since 10
   * @form
   */
  abstract set(newValue: T): void;

  /**
   * Called when a two-way synchronization is created.
   * @systemapi
   * @since 7
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * Called when a one-way synchronization is created.
   * @systemapi
   * @since 7
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * Called when the subscriber is unlinked.
   * @systemapi
   * @since 7
   */
  unlinkSuscriber(subscriberId: number): void;

  /**
   * Called when the notification has changed.
   * @systemapi
   * @since 7
   */
  protected notifyHasChanged(newValue: T): void;

  /**
   * Called when the notification property is read.
   * @systemapi
   * @since 7
   */
  protected notifyPropertyRead(): void;

  /**
   * Called when the number of users is queried.
   * @systemapi
   * @since 7
   */
  numberOfSubscrbers(): number;

  /**
   * An app needs to call this function before the instance of SubscribedAbstractProperty
   * goes out of scope / is subject to garbage collection. Its purpose is to unregister the
   * variable from the two-way/one-way sync relationship that AppStorage/LocalStorage.link()/prop()
   * and related functions create.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  abstract aboutToBeDeleted(): void;
}

/**
 * Provides an interface for attribute subscribers.
 * @systemapi
 * @since 7
 */
interface IPropertySubscriber {
  /**
   * Called when the ID of the property subscriber is queried.
   * @systemapi
   * @since 7
   */
  id(): number;

  /**
   * Provides a single attribute change user interface.
   * @systemapi
   * @since 7
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * Defines the state value.
 * @systemapi
 * @since 7
 */
declare class SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Sources of synchronization attributes bidirectionally.
   * @systemapi
   * @since 7
   */
  private source_;

  /**
   * constructor parameters.
   * @systemapi
   * @since 7
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @systemapi
   * @since 7
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @systemapi
   * @since 7
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @systemapi
   * @since 7
   */
  get(): T;

  /**
   * Called when data is created.
   * @systemapi
   * @since 7
   */
  set(newValue: T): void;
}

/**
* Defines the prop state value.
* @systemapi
* @since 7
*/
declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Pack value for single-item binding.
   * @systemapi
   * @since 7
   */
  private wrappedValue_;

  /**
   * Sources of synchronization attributes bidirectionally.
   * @systemapi
   * @since 7
   */
  private source_;

  /**
   * Constructor parameters.
   * @systemapi
   * @since 7
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when processing information about to be deleted.
   * @systemapi
   * @since 7
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Information Changed.
   * @systemapi
   * @since 7
   */
  hasChanged(newValue: T): void;

  /**
   * Called when data is obtained.
   * @systemapi
   * @since 7
   */
  get(): T;

  /**
   * Called when data is created.
   * @systemapi
   * @since 7
   */
  set(newValue: T): void;
}

/**
 * Defines the subscriber.
 * @systemapi
 * @since 7
 */
interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
  /**
   * Provides a single attribute change user interface.
   * @systemapi
   * @since 7
   */
  hasChanged(newValue: T): void;
}

/**
 * Defines the Subscribale base class.
 * @systemapi
 * @since 7
 */
declare abstract class SubscribaleAbstract {
  /**
   * Returns the ownership attribute set by the.
   * @systemapi
   * @since 7
   */
  private owningProperties_: Set<number>;

  /**
   * Constructor.
   * @systemapi
   * @since 7
   */
  constructor();

  /**
   * Called when the notification property has changed.
   * @systemapi
   * @since 7
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * Called when adding an already owned property.
   * @systemapi
   * @since 7
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted.
   * @systemapi
   * @since 7
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * Called when an already owned property is deleted by ID
   * @systemapi
   * @since 7
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
   * @systemapi
   * @since 7
   */
  constructor();

  /**
   * @see envProp
   *
   * @since 7
   * @deprecated since 10
   * @useinstead Environment#envProp
   */
  static EnvProp<S>(key: string, value: S): boolean;

  /**
   * Called when a property value is checked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static envProp<S>(key: string, value: S): boolean;

  /**
   * @see envProps
   * 
   * @since 7
   * @deprecated since 10
   * @useinstead Environment#envProps
   */
  static EnvProps(
    props: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Called when multiple property values are checked.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static envProps(
    props: {
      key: string;
      defaultValue: S;
    }[],
  ): void;

  /**
   * @see keys
   * 
   * @since 7
   * @deprecated since 10
   * @useinstead Environment#keys
   */
  static Keys(): Array<string>;

  /**
   * Set the key value.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static keys(): Array<string>;
}

/**
 * Defines the PersistentStorage interface.
 * @since 7
 */
/**
 * Defines the PersistentStorage interface.
 * @crossplatform
 * @since 10
 */
declare class PersistentStorage {
  /**
   * Constructor parameters.
   * @systemapi
   * @since 7
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * @see persistProp
   * 
   * @since 7
   * @deprecated since 10
   * @useinstead PersistentStorage#persistProp
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * Add property 'key' to AppStorage properties whose current value will be
   * persistent.
   * If AppStorage does not include this property it will be added and initializes
   * with given value
   *
   * @param key property name
   * @param defaultValue If AppStorage does not include this property it will be initialized with this value
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static persistProp<T>(key: string, defaultValue: T): void;

  /**
   * @see deleteProp
   * 
   * @since 7
   * @deprecated since 10
   * @useinstead PersistentStorage#deleteProp
   */
  static DeleteProp(key: string): void;

  /**
   * Reverse of @see persistProp
   * @param key no longer persist the property named key
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static deleteProp(key: string): void;

  /**
   * @see persistProps
   * 
   * @param properties
   * @since 7
   * @deprecated since 10
   * @useinstead PersistentStorage#PersistProps
   */
  static PersistProps(
    properties: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Persist given AppStorage properties with given names.
   * If a property does not exist in AppStorage, add it and initialize it with given value
   * works as @see persistProp for multiple properties.
   * 
   * @param properties
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static persistProps(
    properties: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * @see keys
   *
   * @since 7
   * @deprecated since 10
   * @useinstead PersistentStorage#keys
   */
  static Keys(): Array<string>;

  /**
   * Inform persisted AppStorage property names
   * @returns array of AppStorage keys
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static keys(): Array<string>;
}

/**
 * Used for ide.
 * @since 7
 * @systemapi
 */
declare const appStorage: AppStorage;

/**
 *
 * LocalStorage
 *
 * Class implements a Map of ObservableObjectBase UI state variables.
 * Instances can be created to manage UI state within a limited "local"
 * access, and life cycle as defined by the app.
 * AppStorage singleton is sub-class of LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 *
 * @since 9
 * @form
 */
/**
 *
 * LocalStorage
 *
 * Class implements a Map of ObservableObjectBase UI state variables.
 * Instances can be created to manage UI state within a limited "local"
 * access, and life cycle as defined by the app.
 * AppStorage singleton is sub-class of LocalStorage for
 * UI state of app-wide access and same life cycle as the app.
 *
 * @crossplatform
 * @since 10
 * @form
 */
declare class LocalStorage {
  /**
   * Construct new instance of LocalStorage
   * initialize with all properties and their values that Object.keys(params) returns
   * Property values must not be undefined.
   * @param initializingProperties Object containing keys and values. see set() for valid values
   *
   * @since 9
   * @form
   */
  /**
   * Construct new instance of LocalStorage
   * initialize with all properties and their values that Object.keys(params) returns
   * Property values must not be undefined.
   * @param initializingProperties Object containing keys and values. see set() for valid values
   *
   * @crossplatform
   * @since 10
   * @form
   */
  constructor(initializingProperties?: Object);

  /**
   * @see getShared
   * @StageModelOnly
   * @since 9
   * @deprecated since 10
   * @useinstead LocalStorage#getShared
   * @form
   */
  static GetShared(): LocalStorage;

  /**
   * Get current LocalStorage shared from stage.
   * @StageModelOnly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  static getShared(): LocalStorage;

  /**
   * Check if LocalStorage has a property with given name
   * return true if property with given name exists
   * same as ES6 Map.prototype.has()
   * @param propName searched property
   * @returns true if property with such name exists in LocalStorage
   *
   * @since 9
   * @form
   */
  /**
   * Check if LocalStorage has a property with given name
   * return true if property with given name exists
   * same as ES6 Map.prototype.has()
   * @param propName searched property
   * @returns true if property with such name exists in LocalStorage
   *
   * @crossplatform
   * @since 10
   * @form
   */
  has(propName: string): boolean;

  /**
   * Provide names of all properties in LocalStorage
   * same as ES6 Map.prototype.keys()
   * @returns return a Map Iterator
   *
   * @since 9
   * @form
   */
  /**
   * Provide names of all properties in LocalStorage
   * same as ES6 Map.prototype.keys()
   * @returns return a Map Iterator
   *
   * @crossplatform
   * @since 10
   * @form
   */
  keys(): IterableIterator<string>;

  /**
   * Returns number of properties in LocalStorage
   * same as Map.prototype.size()
   * @returns return number of properties
   *
   * @since 9
   * @form
   */
  /**
   * Returns number of properties in LocalStorage
   * same as Map.prototype.size()
   * @returns return number of properties
   *
   * @crossplatform
   * @since 10
   * @form
   */
  size(): number;

  /**
   * Returns value of given property
   * return undefined if no property with this name
   * @param propName
   * @returns property value if found or undefined
   *
   * @since 9
   * @form
   */
  /**
   * Returns value of given property
   * return undefined if no property with this name
   * @param propName
   * @returns property value if found or undefined
   *
   * @crossplatform
   * @since 10
   * @form
   */
  get<T>(propName: string): T | undefined;

  /**
   * Set value of given property in LocalStorage
   * Method sets nothing and returns false if property with this name does not exist
   * or if newValue is `undefined` or `null` (`undefined`, `null` value are not allowed for state variables).
   * @param propName
   * @param newValue must be of type T and must not be undefined or null
   * @returns true on success, i.e. when above conditions are satisfied, otherwise false
   *
   * @since 9
   * @form
   */
  /**
   * Set value of given property in LocalStorage
   * Method sets nothing and returns false if property with this name does not exist
   * or if newValue is `undefined` or `null` (`undefined`, `null` value are not allowed for state variables).
   * @param propName
   * @param newValue must be of type T and must not be undefined or null
   * @returns true on success, i.e. when above conditions are satisfied, otherwise false
   *
   * @crossplatform
   * @since 10
   * @form
   */
  set<T>(propName: string, newValue: T): boolean;

  /**
   * Set value of given property, if it exists, see set() .
   * Add property if no property with given name and initialize with given value.
   * Do nothing and return false if newValue is undefined or null
   * (undefined, null value is not allowed for state variables)
   * @param propName
   * @param newValue must be of type T and must not be undefined or null
   * @returns true on success, i.e. when above conditions are satisfied, otherwise false
   *
   * @since 9
   * @form
   */
  /**
   * Set value of given property, if it exists, see set() .
   * Add property if no property with given name and initialize with given value.
   * Do nothing and return false if newValue is undefined or null
   * (undefined, null value is not allowed for state variables)
   * @param propName
   * @param newValue must be of type T and must not be undefined or null
   * @returns true on success, i.e. when above conditions are satisfied, otherwise false
   *
   * @crossplatform
   * @since 10
   * @form
   */
  setOrCreate<T>(propName: string, newValue: T): boolean;

  /**
   * Create and return a two-way sync "(link") to named property
   * @param propName name of source property in LocalStorage
   * @returns  instance of  SubscribedAbstractProperty<T>
   *           return undefined if named property does not already exist in LocalStorage
   *           Apps can use SDK functions of base class SubscribedPropertyAbstract<T>
   *
   * @since 9
   * @form
   */
  /**
   * Create and return a two-way sync "(link") to named property
   * @param propName name of source property in LocalStorage
   * @returns  instance of  SubscribedAbstractProperty<T>
   *           return undefined if named property does not already exist in LocalStorage
   *           Apps can use SDK functions of base class SubscribedPropertyAbstract<T>
   *
   * @crossplatform
   * @since 10
   * @form
   */
  link<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * Like see link(), but will create and initialize a new source property in LocalStorage if missing
   * @param propName name of source property in LocalStorage
   * @param defaultValue value to be used for initializing if new creating new property in LocalStorage
   *        default value must be of type T, must not be undefined or null.
   * @returns  instance of  SubscribedAbstractProperty<T>
   *          Apps can use SDK functions of base class SubscribedAbstractProperty<T>
   *
   * @since 9
   * @form
   */
  /**
   * Like see link(), but will create and initialize a new source property in LocalStorage if missing
   * @param propName name of source property in LocalStorage
   * @param defaultValue value to be used for initializing if new creating new property in LocalStorage
   *        default value must be of type T, must not be undefined or null.
   * @returns  instance of  SubscribedAbstractProperty<T>
   *          Apps can use SDK functions of base class SubscribedAbstractProperty<T>
   *
   * @crossplatform
   * @since 10
   * @form
   */
  setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Create and return a one-way sync ('prop') to named property
   * @param { string } propName name of source property in LocalStorage
   * @returns { SubscribedAbstractProperty<S> } instance of SubscribedAbstractProperty<S>
   *           return undefined if named property does not already exist in LocalStorage
   *           Apps can use SDK functions of base class SubscribedAbstractProperty<S>
   *
   * @deprecated since 10
   * @since 9
   * @form
   */
  prop<S>(propName: string): SubscribedAbstractProperty<S>;

  /**
   * Create and return a one-way sync ('prop') to named property
   * @param { string } propName name of source property in LocalStorage
   * @returns { SubscribedAbstractProperty<T> } instance of SubscribedAbstractProperty<T>
   *           return undefined if named property does not already exist in LocalStorage
   *           Apps can use SDK functions of base class SubscribedAbstractProperty<T>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  prop<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * Like see prop(), will create and initialize a new source property in LocalStorage if missing
   * @param { string } propName name of source property in LocalStorage
   * @param { S } defaultValue value to be used for initializing if new creating new property in LocalStorage. 
   *         Default value must be of type T, must not be undefined or null.
   * @returns { SubscribedAbstractProperty<S> } instance of  SubscribedAbstractProperty<S>
   *           Apps can use SDK functions of base class SubscribedAbstractProperty<S>
   *
   * @deprecated since 10
   * @since 9
   * @form
   */
  setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Like see prop(), will create and initialize a new source property in LocalStorage if missing
   * @param { string } propName name of source property in LocalStorage
   * @param { T } defaultValue value to be used for initializing if new creating new property in LocalStorage. 
   *         Default value must be of type T, must not be undefined or null.
   * @returns { SubscribedAbstractProperty<T> } instance of  SubscribedAbstractProperty<T>
   *           Apps can use SDK functions of base class SubscribedAbstractProperty<T>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Delete property from StorageBase
   * Use with caution:
   * Before deleting a prop from LocalStorage all its subscribers need to
   * unsubscribe from the property.
   * This method fails and returns false if given property still has subscribers
   * Another reason for failing is unknown property.
   *
   * Developer advise:
   * Subscribers are created with see link(), see prop()
   * and also via @LocalStorageLink and @LocalStorageProp state variable decorators.
   * That means as long as their is a @Component instance that uses such decorated variable
   * or a sync relationship with a SubscribedAbstractProperty variable the property can nit
   * (and also should not!) be deleted from LocalStorage.
   *
   * @param propName
   * @returns false if method failed
   *
   * @since 9
   * @form
  */
  /**
   * Delete property from StorageBase
   * Use with caution:
   * Before deleting a prop from LocalStorage all its subscribers need to
   * unsubscribe from the property.
   * This method fails and returns false if given property still has subscribers
   * Another reason for failing is unknown property.
   *
   * Developer advise:
   * Subscribers are created with see link(), see prop()
   * and also via @LocalStorageLink and @LocalStorageProp state variable decorators.
   * That means as long as their is a @Component instance that uses such decorated variable
   * or a sync relationship with a SubscribedAbstractProperty variable the property can nit
   * (and also should not!) be deleted from LocalStorage.
   *
   * @param propName
   * @returns false if method failed
   *
   * @crossplatform
   * @since 10
   * @form
  */
  delete(propName: string): boolean;

  /**
   * Delete all properties from the LocalStorage instance
   * Precondition is that there are no subscribers.
   * method returns false and deletes no properties if there is any property
   * that still has subscribers
   *
   * @since 9
   * @form
   */
  /**
   * Delete all properties from the LocalStorage instance
   * Precondition is that there are no subscribers.
   * method returns false and deletes no properties if there is any property
   * that still has subscribers
   *
   * @crossplatform
   * @since 10
   * @form
   */
  clear(): boolean;
}

declare module "StateManagement" {
  module "StateManagement" {
    // @ts-ignore
    export { LocalStorage };
  }
}
