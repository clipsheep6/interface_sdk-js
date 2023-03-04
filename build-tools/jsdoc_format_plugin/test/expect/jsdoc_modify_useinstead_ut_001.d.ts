/**
 * TestUseinstead.
 * 非使用了deprecated标签的api使用了@useinstead标签，工具输出告警
 *
 * @namespace TestUseinstead
 * @constant
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore.Constants
 * @example aaaaa
 */
export namespace TestUseinstead {
  /**
   * max batch operation size.
   *
   * @constant
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Constants#MAX_BATCH_SIZE
   */
  const MAX_BATCH_SIZE = 128;
}
