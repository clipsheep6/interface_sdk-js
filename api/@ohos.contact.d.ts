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

import { AsyncCallback } from './@ohos.base';

/**
 * Contains variety of system contact, provides functions for adding, updating and deleting these system contact
 * and provides methods for querying the information of contact.
 *
 * @namespace contact
 * @since 7
 * @syscap SystemCapability.Applications.ContactsData
 */
declare namespace contact {
  /**
   * Creates a contact.
   *
   * @param { Contact } contact - Indicates the contact information.
   * @param { AsyncCallback<number> } callback - Indicates the callback for getting the result of the call.
   * @permission ohos.permission.WRITE_CONTACTS
   * Returns the contact ID (which can be obtained by {@link Contact#getId()}) if the creation is successful;
   * returns {@link Contact#INVALID_CONTACT_ID} if the creation fails.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function addContact(contact: Contact, callback: AsyncCallback<number>): void;

  /**
   * Creates a contact.
   *
   * @param { Contact } contact - Indicates the contact information.
   * @permission ohos.permission.WRITE_CONTACTS
   * @returns { Promise<number> } Returns the result of the call.
   * Returns the contact ID (which can be obtained by {@link Contact#getId()}) if the creation is successful;
   * returns {@link Contact#INVALID_CONTACT_ID} if the creation fails.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function addContact(contact: Contact): Promise<number>;

  /**
   * Select contact.
   *
   * @param { AsyncCallback<Array<Contact>> } callback - Indicates the callback for getting the result of the call.
   * Returns the contact list which user select; returns empty contact list if user not select.
   * @since 7
   * @syscap SystemCapability.Applications.Contacts
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function selectContact(callback: AsyncCallback<Array<Contact>>): void;

  /**
   * Select contact.
   *
   * @returns { Promise<Array<Contact>> } Returns the contact list which user select;
   * returns empty contact list if user not select.
   * @since 7
   * @syscap SystemCapability.Applications.Contacts
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function selectContact(): Promise<Array<Contact>>;

  /**
   * Deletes a specified contact.
   *
   * @param { string } key - Indicates the unique query key of a contact to delete.
   * @param { AsyncCallback<boolean> } callback - Indicates the callback for getting the result of the call.
   * Returns {@code true} if the contact is deleted; returns {@code false} otherwise.
   * @permission ohos.permission.WRITE_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function deleteContact(key: string, callback: AsyncCallback<boolean>): void;

  /**
   * Deletes a specified contact.
   *
   * @param { string } key - Indicates the unique query key of a contact to delete.
   * @returns { Promise<boolean> } Returns the result of the call.
   * Returns {@code true} if the contact is deleted; returns {@code false} otherwise.
   * @permission ohos.permission.WRITE_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function deleteContact(key: string): Promise<boolean>;

  /**
   * Queries a specified contact of specified attributes.
   *
   * @param { string } key - Indicates the unique query key of a contact.
   * @param { AsyncCallback<Contact> } callback - Indicates the callback for getting the result of the call.
   * Returns the specified contact.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContact(key: string, callback: AsyncCallback<Contact>): void;
  
  /**
   * Queries a specified contact of specified attributes.
   *
   * @param { string } key - Indicates the unique query key of a contact.
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { AsyncCallback<Contact> } callback - Indicates the callback for getting the result of the call.
   * Returns the specified contact.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContact(key: string, holder: Holder, callback: AsyncCallback<Contact>): void;
  
  /**
   * Queries a specified contact of specified attributes.
   *
   * @param { string } key - Indicates the unique query key of a contact.
   * @param { ContactAttributes } attrs - Indicates the contact attributes.
   * If this parameter is null, all attributes are used for matching.
   * @param { AsyncCallback<Contact> } callback - Indicates the callback for getting the result of the call.
   * Returns the specified contact.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContact(key: string, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;
  
  /**
   * Queries a specified contact of specified attributes.
   *
   * @param { string } key - Indicates the unique query key of a contact.
   * @param { Holder } holder - Indicates the contact holder.
   * @param { ContactAttributes } attrs - Indicates the contact attributes.
   * If this parameter is null, all attributes are used for matching.
   * @param { AsyncCallback<Contact> } callback - Indicates the callback for getting the result of the call.
   * Returns the specified contact.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContact(key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;
  
  /**
   * Queries a specified contact of specified attributes.
   *
   * @param { string } key - Indicates the unique query key of a contact.
   * @param { Holder } holder - Indicates the contact holder.
   * @param { ContactAttributes } attrs - Indicates the contact attributes.
   * If this parameter is null, all attributes are used for matching.
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<Contact> } Returns the specified contact.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContact(key: string, holder?: Holder, attrs?: ContactAttributes): Promise<Contact>;

  /**
   * Queries contacts with query conditions.
   *
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContacts.
   * Returns the {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContacts(callback: AsyncCallback<Array<Contact>>): void;
  
  /**
   * Queries contacts with query conditions.
   *
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContacts.
   * Returns the {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContacts(holder: Holder, callback: AsyncCallback<Array<Contact>>): void;
    
  /**
   * Queries contacts with query conditions.
   *
   * @param { ContactAttributes } attrs - Indicates the contact attributes.
   * If this parameter is null, all attributes are used for matching.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContacts.
   * Returns the {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContacts(attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
    
  /**
   * Queries contacts with query conditions.
   *
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { ContactAttributes } attrs - Indicates the contact attributes.
   * If this parameter is null, all attributes are used for matching.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContacts.
   * Returns the {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContacts(holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
    
  /**
   * Queries contacts with query conditions.
   *
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { ContactAttributes } attrs - Indicates the contact attributes.
   * If this parameter is null, all attributes are used for matching.
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<Array<Contact>> } Returns the {@code Contact} list object.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContacts(holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * Queries contacts by a specified email address.
   *
   * @param { string } email - Indicates the email address.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContactsByEmail.
   * Returns a {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByEmail(email: string, callback: AsyncCallback<Array<Contact>>): void;
  
  /**
   * Queries contacts by a specified email address and contact holder.
   *
   * @param { string } email - Indicates the email address.
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContactsByEmail.
   * Returns a {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByEmail(email: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void;
  
  /**
   * Queries contacts by a specified email address and contact attributes.
   *
   * @param { string } email - Indicates the email address.
   * @param { ContactAttributes } attrs - Indicates the contact attributes.
   * If this parameter is null, all attributes are used for matching.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContactsByEmail.
   * Returns a {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByEmail(email: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  
  /**
   * Queries contacts by a specified email address, contact holder, and contact attributes.
   *
   * @param { string } email - Indicates the email address.
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { ContactAttributes } attrs - Indicates the contact attributes.
   * If this parameter is null, all attributes are used for matching.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContactsByEmail.
   * Returns a {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByEmail(email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  
  /**
   * Queries contacts by a specified email address, contact holder, and contact attributes.
   *
   * @param { string } email - Indicates the email address.
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { ContactAttributes } attrs - Indicates the contact attributes.
   * If this parameter is null, all attributes are used for matching.
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<Array<Contact>> } Returns a {@code Contact} list object.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByEmail(email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * Queries contacts by a phone number.
   *
   * @param { string } phoneNumber - Indicates the phone number.
   * Only full match is supported, and wildcards are not supported.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContactsByPhoneNumber.
   * Returns the {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByPhoneNumber(phoneNumber: string, callback: AsyncCallback<Array<Contact>>): void;
  
  /**
   * Queries contacts by a phone number and contact holder.
   *
   * @param { string } phoneNumber - Indicates the phone number.
   * Only full match is supported, and wildcards are not supported.
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContactsByPhoneNumber.
   * Returns the {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void;
  
  /**
   * Queries contacts by a phone number and contact attribute.
   *
   * @param { string } phoneNumber - Indicates the phone number.
   * Only full match is supported, and wildcards are not supported.
   * @param { ContactAttributes } attrs - Indicates the contact attribute.
   * If this parameter is null, all attributes will be used for matching.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContactsByPhoneNumber.
   * Returns the {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByPhoneNumber(phoneNumber: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  
  /**
   * Queries contacts by a phone number, contact holder and contact attribute.
   *
   * @param { string } phoneNumber - Indicates the phone number.
   * Only full match is supported, and wildcards are not supported.
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { ContactAttributes } attrs - Indicates the contact attribute.
   * If this parameter is null, all attributes will be used for matching.
   * @param { AsyncCallback<Array<Contact>> } callback - The callback of queryContactsByPhoneNumber.
   * Returns the {@code Contact} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;
  
  /**
   * Queries contacts by a phone number, contact holder and contact attribute.
   *
   * @param { string } phoneNumber - Indicates the phone number.
   * Only full match is supported, and wildcards are not supported.
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { ContactAttributes } attrs - Indicates the contact attribute.
   * If this parameter is null, all attributes will be used for matching.
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<Array<Contact>> } Returns the {@code Contact} list object.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryContactsByPhoneNumber(phoneNumber: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * Queries contact groups.
   *
   * @param { AsyncCallback<Array<Group>> } callback - The callback of queryGroups.
   * Returns the contact group list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryGroups(callback: AsyncCallback<Array<Group>>): void;

  /**
   * Queries contact groups by contact holder.
   *
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { AsyncCallback<Array<Group>> } callback - The callback of queryGroups.
   * Returns the contact group list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryGroups(holder: Holder, callback: AsyncCallback<Array<Group>>): void;
  
  /**
   * Queries contact groups by contact holder.
   *
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<Array<Group>> } Returns the contact group list object.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryGroups(holder?: Holder): Promise<Array<Group>>;

  /**
   * Queries contact holders.
   *
   * @param { AsyncCallback<Array<Holder>> } callback - The callback of queryHolders.
   * Returns the {@code Holder} list object.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryHolders(callback: AsyncCallback<Array<Holder>>): void;

  /**
   * Queries contact holders.
   *
   * @permission ohos.permission.READ_CONTACTS
   * @returns { AsyncCallback<Array<Holder>> } Returns the {@code Holder} list object.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryHolders(): Promise<Array<Holder>>;

  /**
   * Obtains the query key of a contact based on a specified ID.
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { number } id - Indicates the contact ID.
   * @param { AsyncCallback<string> } callback - The callback of queryKey.
   * Returns the query key of the contact.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryKey(id: number, callback: AsyncCallback<string>): void;
  
  /**
   * Obtains the query key of a contact based on a specified ID and holder.
   *
   * @param { number } id - Indicates the contact ID.
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @param { AsyncCallback<string> } callback - The callback of queryKey.
   * Returns the query key of the contact.
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryKey(id: number, holder: Holder, callback: AsyncCallback<string>): void;
  
  /**
   * Obtains the query key of a contact based on a specified ID and holder.
   *
   * @param { number } id - Indicates the contact ID.
   * @param { Holder } holder - Indicates the contact holder.
   * If this parameter is null, the default holder is used for matching.
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<string> } Returns the query key of the contact.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryKey(id: number, holder?: Holder): Promise<string>;

  /**
   * Queries information about "my card".
   *
   * @param { AsyncCallback<Contact> } callback - The callback of queryMyCard.
   * Returns information about "my card".
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryMyCard(callback: AsyncCallback<Contact>): void;
  
  /**
   * Queries information about "my card".
   *
   * @param { ContactAttributes } attrs - Indicates the contact attribute.
   * If this parameter is null, all attributes are used for matching.
   * @param { AsyncCallback<Contact> } callback - The callback of queryMyCard.
   * Returns information about "my card".
   * @permission ohos.permission.READ_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryMyCard(attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;
  
  /**
   * Queries information about "my card".
   *
   * @param { ContactAttributes } attrs - Indicates the contact attribute.
   * If this parameter is null, all attributes are used for matching.
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<Contact> } Returns information about "my card".
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function queryMyCard(attrs?: ContactAttributes): Promise<Contact>;

  /**
   * Updates specified attributes of a contact.
   *
   * @param { Contact } contact - Indicates the contact whose information is to update.
   * @param { AsyncCallback<boolean> } callback - The callback of updateContact.
   * Returns {@code true} if the update is successful; returns {@code false} otherwise.
   * @permission ohos.permission.WRITE_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function updateContact(contact: Contact, callback: AsyncCallback<boolean>): void;
  
  /**
   * Updates specified attributes of a contact.
   *
   * @param { Contact } contact - Indicates the contact whose information is to update.
   * @param { ContactAttributes } attrs - Indicates the contact attribute.
   * If this parameter is null, all attributes are used for matching.
   * @param { AsyncCallback<boolean> } callback - The callback of updateContact.
   * Returns {@code true} if the update is successful; returns {@code false} otherwise.
   * @permission ohos.permission.WRITE_CONTACTS
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function updateContact(contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<boolean>): void;
  
  /**
   * Updates specified attributes of a contact.
   *
   * @param { Contact } contact - Indicates the contact whose information is to update.
   * @param { ContactAttributes } attrs - Indicates the contact attribute.
   * If this parameter is null, all attributes are used for matching.
   * @permission ohos.permission.WRITE_CONTACTS
   * @returns { Promise<boolean> } Returns {@code true} if the update is successful; returns {@code false} otherwise.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function updateContact(contact: Contact, attrs?: ContactAttributes): Promise<boolean>;

  /**
   * Checks whether the contact ID is in the local phone book.
   *
   * @param { number } id - Indicates the contact ID.
   * @param { AsyncCallback<boolean> } callback - The callback of isLocalContact.
   * @permission ohos.permission.READ_CONTACTS
   * Returns {@code true} if the contact ID is in the local phone book; returns {@code false} otherwise.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function isLocalContact(id: number, callback: AsyncCallback<boolean>): void;
  
  /**
   * Checks whether the contact ID is in the local phone book.
   * 
   * @param { number } id - Indicates the contact ID.
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<boolean> } Returns {@code true} if the contact ID is in the local phone book;
   * returns {@code false} otherwise.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function isLocalContact(id: number): Promise<boolean>;

  /**
   * Checks whether the contact ID is of "my card".
   * 
   * @param { number } id - Indicates the contact ID.
   * @param { AsyncCallback<boolean> } callback - The callback of isMyCard.
   * @permission ohos.permission.READ_CONTACTS
   * Returns {@code true} if the contact ID is of "my card"; returns {@code false} otherwise.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function isMyCard(id: number, callback: AsyncCallback<boolean>): void;
  
  /**
   * Checks whether the contact ID is of "my card".
   *
   * @param { number } id - Indicates the contact ID.
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<boolean> } Returns {@code true} if the contact ID is of "my card";
   * returns {@code false} otherwise.
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   */
  function isMyCard(id: number): Promise<boolean>;

  /**
   * Provides methods for contact information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Contact {
    /**
     * Indicates the contact ID.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     * @type { number }
     */
    static readonly INVALID_CONTACT_ID: -1

    /**
     * Indicates the contact ID.
     * 
     * @readonly
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?number }
     */
    readonly id?: number

    /**
     * Indicates the query key that identifies the contact.
     * 
     * @readonly
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    readonly key?: string

    /**
     * Indicates the contact attributes.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?ContactAttributes }
     */
    contactAttributes?: ContactAttributes

    /**
     * Indicates an email address of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?Email[] }
     */
    emails?: Email[]

    /**
     * Indicates an event (special date) of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?Event[] }
     */
    events?: Event[]

    /**
     * Indicates a group of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?Group[] }
     */
    groups?: Group[]

    /**
     * Indicates an IM address of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?ImAddress[] }
     */
    imAddresses?: ImAddress[]

    /**
     * Indicates a phone number of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?PhoneNumber[] }
     */
    phoneNumbers?: PhoneNumber[]

    /**
     * Indicates the contact portrait.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?Portrait }
     */
    portrait?: Portrait

    /**
     * Indicates a postal address of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?PostalAddress[] }
     */
    postalAddresses?: PostalAddress[]

    /**
     * Indicates a relation of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?Relation[] }
     */
    relations?: Relation[]

    /**
     * Indicates a Session Initiation Protocol (SIP) address of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?SipAddress[] }
     */
    sipAddresses?: SipAddress[]

    /**
     * Indicates a website of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?Website[] }
     */
    websites?: Website[]

    /**
     * Indicates the contact name.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?Name }
     */
    name?: Name

    /**
     * Indicates the contact nickname.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?NickName }
     */
    nickName?: NickName

    /**
     * Indicates the contact note.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?Note }
     */
    note?: Note

    /**
     * Indicates organization information about the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?Organization }
     */
    organization?: Organization
  }

  /**
   * Provides methods for contact attributes information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class ContactAttributes {
    /**
     * Indicates the contact attributes.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { Attribute[] }
     */
    attributes: Attribute[]
  }

  /**
   * Provides methods for attribute information
   * 
   * @enum { number }
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  enum Attribute {
    /**
     * Indicates the contact event.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_CONTACT_EVENT,

    /**
     * Indicates the email address.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_EMAIL,

    /**
     * Indicates the contact group.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_GROUP_MEMBERSHIP,

    /**
     * Indicates the instant messaging (IM) address.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_IM,

    /**
     * Indicates the name.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_NAME,

    /**
     * Indicates the nickname.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_NICKNAME,

    /**
     * Indicates the note.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_NOTE,

    /**
     * Indicates the organization.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_ORGANIZATION,

    /**
     * Indicates the phone number.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_PHONE,

    /**
     * Indicates the portrait.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_PORTRAIT,

    /**
     * Indicates the postal address.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_POSTAL_ADDRESS,

    /**
     * Indicates the relation.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_RELATION,

    /**
     * Indicates the Session Initiation Protocol (SIP) address.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_SIP_ADDRESS,

    /**
     * Indicates the website.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     */
    ATTR_WEBSITE
  }

  /**
   * Provides methods for email information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Email {
    /**
     * Indicates a custom label.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates a home email.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly EMAIL_HOME: 1

    /**
     * Indicates a work email.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly EMAIL_WORK: 2

    /**
     * Indicates an email of the OTHER type.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly EMAIL_OTHER: 3

    /**
     * Indicates an invalid label ID.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the email address.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    email: string

    /**
     * Indicates the label name of an attribute.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    labelName?: string

    /**
     * Indicates the displayed email name.
     * 
     * @type { ?string }
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    displayName?: string

    /**
     * Indicates the label id.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?number }
     */
    labelId?: number
  }

  /**
   * Provides methods for event information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Event {
    /**
     * Indicates a custom label.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates an anniversary event.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly EVENT_ANNIVERSARY: 1

    /**
     * Indicates an event of the OTHER type.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly EVENT_OTHER: 2

    /**
     * Indicates an birthday event.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly EVENT_BIRTHDAY: 3

    /**
     * Indicates an invalid label ID.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the event date.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    eventDate: string

    /**
     * Indicates the label name of an attribute.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    labelName?: string

    /**
     * Indicates the label id.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?number }
     */
    labelId?: number
  }

  /**
   * Provides methods for group information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Group {
    /**
     * Indicates the contact group ID.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?number }
     */
    groupId?: number

    /**
     * Indicates the contact group title.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    title: string
  }

  /**
   * Provides methods for holder information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Holder {
    /**
     * Indicates the bundle name of a contact holder.
     * 
     * @readonly
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    readonly bundleName: string

    /**
     * Indicates the displayed name of a contact holder.
     * 
     * @readonly
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    readonly displayName?: string

    /**
     * Indicates the holder ID.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?number }
     */
    holderId?: number
  }

  /**
   * Provides methods for ImAddress information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class ImAddress {
    /**
     * Indicates a custom label.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly CUSTOM_LABEL: -1

    /**
     * Indicates an AIM instant message.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly IM_AIM: 0

    /**
     * Indicates a Windows Live instant message.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly IM_MSN: 1

    /**
     * Indicates a Yahoo instant message.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly IM_YAHOO: 2

    /**
     * Indicates a Skype instant message.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly IM_SKYPE: 3

    /**
     * Indicates a QQ instant message.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly IM_QQ: 4

    /**
     * Indicates an ICQ instant message.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly IM_ICQ: 6

    /**
     * Indicates a Jabber instant message.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly IM_JABBER: 7

    /**
     * Indicates an invalid label ID.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly INVALID_LABEL_ID: -2

    /**
     * Indicates the IM address.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    imAddress: string

    /**
     * Indicates the label name of an attribute.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    labelName?: string

    /**
     * Indicates the label id.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?number }
     */
    labelId?: number
  }

  /**
   * Provides methods for name information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Name {
    /**
     * Indicates the family name of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    familyName?: string

    /**
     * Indicates the phonetic family name of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    familyNamePhonetic?: string

    /**
     * Indicates the full name of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    fullName: string

    /**
     * Indicates the given name of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    givenName?: string

    /**
     * Indicates the phonetic given name of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    givenNamePhonetic?: string

    /**
     * Indicates the middle name of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    middleName?: string

    /**
     * Indicates the phonetic middle name of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    middleNamePhonetic?: string

    /**
     * Indicates the prefix of the contact name.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    namePrefix?: string

    /**
     * Indicates the suffix of this contact name.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    nameSuffix?: string
  }

  /**
   * Provides methods for nick name information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class NickName {
    /**
     * Indicates the nickname of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    nickName: string
  }

  /**
   * Provides methods for note information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Note {
    /**
     * Indicates the note content.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    noteContent: string
  }

  /**
   * Provides methods for organization information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Organization {
    /**
     * Indicates the name of the organization to which the contact belongs.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    name: string

    /**
     * Indicates the title of the organization.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    title?: string
  }

  /**
   * Provides methods for phone number information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class PhoneNumber {
    /**
     * Indicates a custom label.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates a home number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_HOME: 1

    /**
     * Indicates a mobile phone number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_MOBILE: 2

    /**
     * Indicates a work number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_WORK: 3

    /**
     * Indicates a work fax number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_FAX_WORK: 4

    /**
     * Indicates a home fax number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_FAX_HOME: 5

    /**
     * Indicates a pager number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_PAGER: 6

    /**
     * Indicates a number of the OTHER type.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_OTHER: 7

    /**
     * Indicates a callback number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_CALLBACK: 8

    /**
     * Indicates a car number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_CAR: 9

    /**
     * Indicates a company director number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_COMPANY_MAIN: 10

    /**
     * Indicates an Integrated Services Digital Network (ISDN) number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_ISDN: 11

    /**
     * Indicates a main number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_MAIN: 12

    /**
     * Indicates a number of the OTHER_FAX type.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_OTHER_FAX: 13

    /**
     * Indicates a radio number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_RADIO: 14

    /**
     * Indicates a telex number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_TELEX: 15

    /**
     * Indicates a teletypewriter (TTY) or test-driven development (TDD) number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_TTY_TDD: 16

    /**
     * Indicates a work mobile phone number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_WORK_MOBILE: 17

    /**
     * Indicates a work pager number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_WORK_PAGER: 18

    /**
     * Indicates an assistant number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_ASSISTANT: 19

    /**
     * Indicates an MMS number.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly NUM_MMS: 20

    /**
     * Indicates an invalid label ID.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the label name of an attribute.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    labelName?: string

    /**
     * Indicates the phone number of the contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    phoneNumber: string

    /**
     * Indicates the label id.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { number }
     */
    labelId?: number
  }

  /**
   * Provides methods for portrait information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Portrait {
    /**
     * Indicates the uri of the contact portrait.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    uri: string
  }

  /**
   * Provides methods for postal address information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class PostalAddress {
    /**
     * Indicates a custom label.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates a home address.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly ADDR_HOME: 1

    /**
     * Indicates a work address.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly ADDR_WORK: 2

    /**
     * Indicates an address of the OTHER type.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly ADDR_OTHER: 3

    /**
     * Indicates an invalid label ID.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the city where this contact is located.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    city?: string

    /**
     * Indicates the country/region where this contact is located.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    country?: string

    /**
     * Indicates the label name of an attribute.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    labelName?: string

    /**
     * Indicates the neighborhood where this contact is located.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    neighborhood?: string

    /**
     * Indicates the post box of this contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    pobox?: string

    /**
     * Indicates the postal address of this contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    postalAddress: string

    /**
     * Indicates the postal code of this contact.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    postcode?: string

    /**
     * Indicates the area where this contact is located.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    region?: string

    /**
     * Indicates the street where this contact is located.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    street?: string

    /**
     * Indicates the label id.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?number }
     */
    labelId?: number
  }

  /**
   * Provides methods for relation information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Relation {
    /**
     * Indicates a custom label.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates an assistant.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_ASSISTANT: 1

    /**
     * Indicates a brother.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_BROTHER: 2

    /**
     * Indicates a child.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_CHILD: 3

    /**
     * Indicates a domestic partner.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_DOMESTIC_PARTNER: 4

    /**
     * Indicates a father.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_FATHER: 5

    /**
     * Indicates a friend.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_FRIEND: 6

    /**
     * Indicates a manager.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_MANAGER: 7

    /**
     * Indicates a mother.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_MOTHER: 8

    /**
     * Indicates a parent.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_PARENT: 9

    /**
     * Indicates a partner.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_PARTNER: 10

    /**
     * Indicates a referrer.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_REFERRED_BY: 11

    /**
     * Indicates a relative.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_RELATIVE: 12

    /**
     * Indicates a sister.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_SISTER: 13

    /**
     * Indicates a spouse.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly RELATION_SPOUSE: 14

    /**
     * Indicates an invalid label ID.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the label name of an attribute.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    labelName?: string

    /**
     * Indicates the relation name.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    relationName: string

    /**
     * Indicates the label id.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { number }
     */
    labelId?: number
  }

  /**
   * Provides methods for sip address information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class SipAddress {
    /**
     * Indicates a custom label.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly CUSTOM_LABEL: 0

    /**
     * Indicates a home SIP address.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly SIP_HOME: 1

    /**
     * Indicates a work SIP address.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly SIP_WORK: 2

    /**
     * Indicates an SIP address of the OTHER type.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly SIP_OTHER: 3

    /**
     * Indicates an invalid label ID.
     * 
     * @readonly
     * @since 7
     * @static
     * @syscap SystemCapability.Applications.ContactsData
     */
    static readonly INVALID_LABEL_ID: -1

    /**
     * Indicates the label name of an attribute.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?string }
     */
    labelName?: string

    /**
     * Indicates the SIP address.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    sipAddress: string

    /**
     * Indicates the label id.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { ?number }
     */
    labelId?: number
  }

  /**
   * Provides methods for website information
   * 
   * @since 7
   * @syscap SystemCapability.Applications.ContactsData
   */
  class Website {
    /**
     * Indicates the website.
     * 
     * @since 7
     * @syscap SystemCapability.Applications.ContactsData
     * @type { string }
     */
    website: string
  }
}

export default contact;