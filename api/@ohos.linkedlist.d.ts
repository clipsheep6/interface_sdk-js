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
declare namespace linkedlist {
  class LinkedList<T> {
    /**
     * Gets the element number of the LinkedList. This is a number one higher than the highest index in the linkedlist.
     * @since 8
     */
    
    length: number;
    /**
     * Appends the specified element to the end of this linkedlist.
     * @param element to be appended to this linkedlist
     * @returns the boolean type, returns true if the addition is successful, and returns false if it fails.
     * @since 8
     */
    add(element: T): boolean;
    /**
     * Inserts the specified element at the specified position in this linkedlist.
     * @param index index at which the specified element is to be inserted
     * @param element element to be inserted
     * @throws If index is greater than or equal to length, or less than 0, an exception is thrown and cannot be inserted
     * @since 8
     */
    insert(element: T, index: number): void;
    /**
     * Returns the element at the specified position in this linkedlist,
     * or returns undefined if this linkedlist is empty
     * @param index specified position
     * @return the T type
     * @since 8
     */
    get(index: number): T;
    /**
     * Inserts the specified element at the beginning of this LinkedList.
     * @param element the element to add
     * @since 8
     */
    addFirst(element: T): void;
    /**
     * Retrieves and removes the head (first element) of this linkedlist.
     * @return the head of this list
     * @throws NoSuchElementException if this linkedlist is empty
     * @since 8
     */
    removeFirst(): T;
    /**
     * Removes and returns the last element from this linkedlist.
     * @return the head of this list
     * @throws NoSuchElementException if this linkedlist is empty
     * @since 8
     *
     */
    removeLast(): T;
    /**
     * Check if linkedlist contains the specified element
     * @param element element to be contained
     * @return the boolean type,if vector contains the specified element,return true,else return false
     * @since 8
     */
    has(element: T): boolean;
    /**
     * Returns the index of the first occurrence of the specified element
     * in this linkedlist, or -1 if this linkedlist does not contain the element.
     * @param element element to be contained
     * @return the number type ,returns the lowest index such that or -1 if there is no such index.
     */
    getIndexOf(element: T): number;
    /**
     * Find the corresponding element according to the index,
     * @param index the index in the linkedlist
     * @return the T type ,returns undefined if linkedlist is empty,If the index is
     * out of bounds (greater than or equal to length or less than 0), throw an exception
     * @since 8
     */
    removeByIndex(index: number): T;
    /**
     * Removes the first occurrence of the specified element from this linkedlist,
     * if it is present.  If the linkedlist does not contain the element, it is
     * unchanged.  More formally, removes the element with the lowest index
     * @param element element to remove
     * @return the boolean type ,If there is no such element, return false
     * @since 8
     */
    remove(element: T): boolean;
    /**
     * Removes the first occurrence of the specified element from this linkedlist,
     * if it is present.  If the linkedlist does not contain the element, it is
     * unchanged.  More formally, removes the element with the lowest index
     * @param element element to remove
     * @return the boolean type ,If there is no such element, return false
     * @since 8
     */
    removeFirstFound(element: T): boolean;
    /**
     * Removes the last occurrence of the specified element from this linkedlist,
     * if it is present.  If the linkedlist does not contain the element, it is
     * unchanged.  More formally, removes the element with the lowest index
     * @param element element to remove
     * @return the boolean type ,If there is no such element, return false
     * @since 8
     */
    removeLastFound(element: T): boolean;
    /**
     * Returns in the index of the last occurrence of the specified element in this linkedlist ,
     * or -1 if the linkedlist does not contain the element.
     * @param element element to find
     * @return the number type
     * @since 8
     */
    getLastIndexOf(element: T): number;
    /**
     * Returns the first element (the item at index 0) of this linkedlist.
     * or returns undefined if linkedlist is empty
     * @return the T type ,returns undefined if vector is empty
     * @since 8
     */
    getFirst(): T;
    /**
     * Returns the Last element (the item at index length-1) of this linkedlist.
     * or returns undefined if linkedlist is empty
     * @return the T type ,returns undefined if vector is empty
     * @since 8
     */
    getLast(): T;
    /**
     * Replaces the element at the specified position in this Vector with the specified element
     * @param element replaced element
     * @param index index to find
     * @since 8
     */
    set(index: number, element: T): void;
    /**
     * Replaces each element of this linkedlist with the result of applying the operator to that element.
     * @param callbackfn (required) A function that accepts up to four arguments.The function to be called for each element in the linkedlist,Returns the result of an operation
     * @param Value (required) current element
     * @param Index (Optional) The index value of the current element.
     * @param linkedlist (Optional) The linkedlist object to which the current element belongs.
     * @param thisArg (Optional) The value passed to the function generally uses the "this" value.
     * If this parameter is empty, "undefined" will be passed to the "this" value
     * @since 8
     */
    forEach(callbackfn: (value: T, index?: number, linkedlist?: ArrayList<T>) => void,
    thisArg?: Object): void;
    /**
     * Sorts this linkedlist according to the order induced by the specified comparator,without comparator this parameter, it will default to ASCII sorting
     * @param comparator (Optional) A function that accepts up to two arguments.Specifies the sort order. Must be a function,return number type,
     * If it returns firstValue minus secondValue, it returns an linkedlist sorted in ascending order;
     * If it returns secondValue minus firstValue, it returns an linkedlist sorted in descending order;
     * @param firstValue (Optional) previous element
     * @param secondValue (Optional) next elements
     * If this parameter is empty, it will default to ASCII sorting
     * @since 8
     */
    sort(comparator?: (firstValue: T, secondValue: T) => number): void;
    /**
     * Removes all of the elements from this linkedlist.The linkedlist will
     * be empty after this call returns.length becomes 0
     * @since 8
     */
    clear(): void;
    /**
     * Returns a shallow copy of this instance. (The elements themselves are not copied.)
     * @return this linkedlist instance
     * @since 8
     */
    clone(): LinkedList<T>;
    /**
     * convert linkedlist to array
     * @return the Array type
     * @since 8
     */
    convertToArray(): Array<T>;
    /**
     * returns an ES6 iterator.Each item of the iterator is a Javascript Object
     * @since 8
     */
    [Symbol.iterator](): IterableIterator<T>;
  }
}
