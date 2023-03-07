/**
 * TestUseinstead.
 * useinstead标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 *
 * @namespace TestUseinstead
 * @constant
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore.Constants
 */
export namespace TestUseinstead {
    /**
   * max batch operation size.
   * @useinstead ohos.data.distributedKVStore.Constants#MAX_BATCH_SIZE
   * @constant
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7
   * @deprecated since 9
   * */
    const MAX_BATCH_SIZE = 128;
}
