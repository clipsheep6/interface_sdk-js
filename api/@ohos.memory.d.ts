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


/**
 * @name memory
 * @since 11
 */
 declare namespace memory {
 
  /**
   * PurgeableMemory object.
   * @since 11
   * @syscap SystemCapability.Commonlibrary.memory
   */
  interface PurgeableMemory {
  
    /**
     * begin read PurgeableMemory.
     * @since 11
     * @syscap SystemCapability.Commonlibrary.memory
     * @return returns true otherwise returns false.
     */
    beginRead() : boolean;

    /**
     * end read PurgeableMemory.
     * @since 11
     * @syscap SystemCapability.Commonlibrary.memory
     */
    endRead(): void;

    /**
     * begin write PurgeableMemory.
     * @since 11
     * @syscap SystemCapability.Commonlibrary.memory
     * @return returns true otherwise returns false.
     */
    beginWrite(): boolean;

    /**
     * end write PurgeableMemory.
     * @since 11
     * @syscap SystemCapability.Commonlibrary.memory
     */
    endWrite(): void;

    /**
     * get PurgeableMemory content.
     * @since 11
     * @syscap SystemCapability.Commonlibrary.memory
     * @return returns ArrayBuffer otherwise returns void.
     * @readonly
     */
    getContent(): Readonly<ArrayBuffer>;

    /**
     * get PurgeableMemory size.
     * @since 11
     * @syscap SystemCapability.Commonlibrary.memory
     * @return returns memory bytes size otherwise returns void.
     */
    getContentSize(): number;

    /**
     * set write PurgeableMemory content callback.
     * @param callback function Used to rebuild memory
     * @param argv Parameters required for callback function reconstruction
     * @since 11
     * @syscap SystemCapability.Commonlibrary.memory
     * @return returns true otherwise returns false.
     */
    modifyContentByBuilder(callback: (dv: DataView, size: number, argv: {}) => boolean, argv: {}): boolean;
    
	/**
     * destroy PurgeableMemory object.
     * @since 11
     * @syscap SystemCapability.Commonlibrary.memory
     */
    destroy(): void;
    	
  }

  /**
  * create PurgeableMemory object.
  * @param size create urgeableMem object memory size
  * @param callback function Used to rebuild memory
  * @param argv Parameters required for callback function reconstruction
  * @since 11
  * @syscap SystemCapability.Commonlibrary.memory
  * @return PurgeableMemory object.
  */
  function createPurgeableMemory(size: number, callback :(dv: DataView, size: number, argv: {}) => boolean, argv: {}): PurgeableMemory;

}
  
export default memory;