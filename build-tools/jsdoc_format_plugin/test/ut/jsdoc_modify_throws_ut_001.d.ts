/**
 * TestThrows.
 * throws标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 *
 * @namespace TestThrows
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 */
export namespace TestThrows {
    /**
     * test
     * @thorws xxx
     * @returns { string }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    function test(): string;
    /**
   * test2
   * @returns { string }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @thorws xxx
   * @since 7
   */
    function test2(): string;
}
