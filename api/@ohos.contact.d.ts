/*
 * Copyright (C) 2021-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit ContactsKit
 */

import { AsyncCallback } from './@ohos.base';
import type Context from './application/BaseContext';

/**
 * Contains variety of system contact, provides functions for adding, updating and deleting these system contact
 * and provides methods for querying the information of contact.
 *
 * @namespace contact
 * @syscap SystemCapability.Applications.ContactsData
 * @since 7
 */
declare namespace contact {

  /**
   * Select contact.
   *
   * @param { AsyncCallback<Array<Contact>> } callback - Indicates the callback for getting the result of the call.
   * Returns the contact list which user select; returns empty contact list if user not select.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Applications.Contacts
   * @since 10
   */
  /**
   * Select contact.
   *
   * @param { AsyncCallback<Array<Contact>> } callback - Indicates the callback for getting the result of the call.
   * Returns the contact list which user select; returns empty contact list if user not select.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 11
   */
  function selectContacts(callback: AsyncCallback<Array<Contact>>): void;

  /**
   * Select contact.
   *
   * @returns { Promise<Array<Contact>> } Returns the contact list which user select;
   * returns empty contact list if user not select.
   * @syscap SystemCapability.Applications.Contacts
   * @since 10
   */
  /**
   * Select contact.
   *
   * @returns { Promise<Array<Contact>> } Returns the contact list which user select;
   * returns empty contact list if user not select.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 11
   */
  function selectContacts(): Promise<Array<Contact>>;

  /**
   * Select contact with option.
   *
   * @param { ContactSelectionOptions } options - Indicates the Single-select or multiple-select.
   * @param { AsyncCallback<Array<Contact>> } callback - Indicates the callback for getting the result of the call.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Applications.Contacts
   * @since 10
   */
  /**
   * Select contact with option.
   *
   * @param { ContactSelectionOptions } options - Indicates the Single-select or multiple-select.
   * @param { AsyncCallback<Array<Contact>> } callback - Indicates the callback for getting the result of the call.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 11
   */
  function selectContacts(options: ContactSelectionOptions, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * Select contact with option.
   *
   * @param { ContactSelectionOptions } options - Indicates the Single-select or multiple-select.
   * @returns { Promise<Array<Contact>> } Returns the contact list which user select;
   * returns empty contact list if user not select.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Applications.Contacts
   * @since 10
   */
  /**
   * Select contact with option.
   *
   * @param { ContactSelectionOptions } options - Indicates the Single-select or multiple-select.
   * @returns { Promise<Array<Contact>> } Returns the contact list which user select;
   * returns empty contact list if user not select.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 11
   */
  function selectContacts(options: ContactSelectionOptions): Promise<Array<Contact>>;

  /**
   * ContactSelectionOptions Object
   *
   * @interface ContactSelectionOptions
   * @syscap SystemCapability.Applications.Contacts
   * @since 10
   */
  /**
   * ContactSelectionOptions Object
   *
   * @interface ContactSelectionOptions
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 11
   */
  interface ContactSelectionOptions {
    /**
     * Indicates the Single-select or multiple-select.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Applications.Contacts
     * @since 10
     */
    /**
     * Indicates the Single-select or multiple-select.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 11
     */
    isMultiSelect?: boolean;
  }

  /**
   * Provides methods for contact information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  /**
   * Provides methods for contact information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice
   * @since 11
   */
  class Contact {
    /**
     * Indicates the contact invalid ID.
     *
     * @readonly
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the contact invalid ID.
     *
     * @readonly
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    static readonly INVALID_CONTACT_ID: -1

    /**
     * Indicates the contact ID.
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the contact ID.
     *
     * @type { ?number }
     * @readonly
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    readonly id?: number

    /**
     * Indicates the query key that identifies the contact.
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the query key that identifies the contact.
     *
     * @type { ?string }
     * @readonly
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    readonly key?: string

    /**
     * Indicates the contact attributes.
     *
     * @type { ?ContactAttributes }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the contact attributes.
     *
     * @type { ?ContactAttributes }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    contactAttributes?: ContactAttributes

    /**
     * Indicates list of contact email addresses.
     *
     * @type { ?Email[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates list of contact email addresses.
     *
     * @type { ?Email[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    emails?: Email[]

    /**
     * Indicates an event (special date) of the contact.
     *
     * @type { ?Event[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates an event (special date) of the contact.
     *
     * @type { ?Event[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    events?: Event[]

    /**
     * Indicates a group of the contact.
     *
     * @type { ?Group[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates a group of the contact.
     *
     * @type { ?Group[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    groups?: Group[]

    /**
     * Indicates an IM address of the contact.
     *
     * @type { ?ImAddress[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates an IM address of the contact.
     *
     * @type { ?ImAddress[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    imAddresses?: ImAddress[]

    /**
     * Indicates a phone number of the contact.
     *
     * @type { ?PhoneNumber[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates a phone number of the contact.
     *
     * @type { ?PhoneNumber[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    phoneNumbers?: PhoneNumber[]

    /**
     * Indicates the contact portrait.
     *
     * @type { ?Portrait }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the contact portrait.
     *
     * @type { ?Portrait }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    portrait?: Portrait

    /**
     * Indicates a postal address of the contact.
     *
     * @type { ?PostalAddress[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates a postal address of the contact.
     *
     * @type { ?PostalAddress[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    postalAddresses?: PostalAddress[]

    /**
     * Indicates a relation of the contact.
     *
     * @type { ?Relation[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates a relation of the contact.
     *
     * @type { ?Relation[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    relations?: Relation[]

    /**
     * Indicates a Session Initiation Protocol (SIP) address of the contact.
     *
     * @type { ?SipAddress[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates a Session Initiation Protocol (SIP) address of the contact.
     *
     * @type { ?SipAddress[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    sipAddresses?: SipAddress[]

    /**
     * Indicates a website of the contact.
     *
     * @type { ?Website[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates a website of the contact.
     *
     * @type { ?Website[] }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    websites?: Website[]

    /**
     * Indicates the contact name.
     *
     * @type { ?Name }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the contact name.
     *
     * @type { ?Name }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    name?: Name

    /**
     * Indicates the contact nickname.
     *
     * @type { ?NickName }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the contact nickname.
     *
     * @type { ?NickName }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    nickName?: NickName

    /**
     * Indicates the contact note.
     *
     * @type { ?Note }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the contact note.
     *
     * @type { ?Note }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    note?: Note

    /**
     * Indicates organization information about the contact.
     *
     * @type { ?Organization }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates organization information about the contact.
     *
     * @type { ?Organization }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    organization?: Organization
  }

  /**
   * Provides methods for contact attributes information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class ContactAttributes {
  }

  /**
   * Provides methods for email information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Email {
  }

  /**
   * Provides methods for event information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Event {
  }

  /**
   * Provides methods for group information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Group {
  }

  /**
   * Provides methods for ImAddress information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class ImAddress {
  }

  /**
   * Provides methods for name information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Name {
    /**
     * Indicates the full name of the contact.
     *
     * @type { string }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the full name of the contact.
     *
     * @type { string }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    fullName: string
  }

  /**
   * Provides methods for nick name information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class NickName {
  }

  /**
   * Provides methods for note information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Note {
  }

  /**
   * Provides methods for organization information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Organization {
  }

  /**
   * Provides methods for phone number information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class PhoneNumber {
    /**
     * Indicates the phone number of the contact.
     *
     * @type { string }
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    /**
     * Indicates the phone number of the contact.
     *
     * @type { string }
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 11
     */
    phoneNumber: string
  }

  /**
   * Provides methods for portrait information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Portrait {
  }

  /**
   * Provides methods for postal address information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class PostalAddress {
  }

  /**
   * Provides methods for relation information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Relation {
  }

  /**
   * Provides methods for sip address information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class SipAddress {
  }

  /**
   * Provides methods for website information
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Website {
  }
}

export default contact;