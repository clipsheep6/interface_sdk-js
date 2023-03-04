/**
 * TestSystemapi.
 * systemapi标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 *
 * @namespace TestSystemapi
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @systemapi
 * @since 7
 */
export namespace TestSystemapi {
  /**
   * max key length.
   *
   * @constant
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @systemapi
   * @since 7
   */
  const MAX_KEY_LENGTH = 1024;
}
