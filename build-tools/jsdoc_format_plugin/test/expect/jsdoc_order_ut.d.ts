declare class JsDocOrderUtClass<T> {
  /**
   * A constructor used to create a List object.
   *
   * @throws { BusinessError } 10200012 - The List's constructor cannot be directly invoked.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  constructor();
  /**
   * Gets the element number of the List. This is a number one higher than the highest index in the list.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  length: number;
  /**
   * Appends the specified element to the end of this list.
   *
   * @param element to be appended to this list
   * @returns the boolean type, returns true if the addition is successful, and returns false if it fails.
   * @throws { BusinessError } 10200011 - The add method cannot be bound.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  add(element: T): boolean;
  /**
   * Inserts the specified element at the specified position in this list.
   *
   * @param index index at which the specified element is to be inserted
   * @param element element to be inserted
   * @throws { BusinessError } 10200011 - The insert method cannot be bound.
   * @throws { BusinessError } 10200001 - The value of index is out of range.
   * @throws { BusinessError } 401 - The type of parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  insert(element: T, index: number): void;
}
