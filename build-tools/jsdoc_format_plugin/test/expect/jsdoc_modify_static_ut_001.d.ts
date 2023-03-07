/**
 * TestStatic.
 * static标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 *
 * @namespace TestStatic
 * @static
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @famodelonly
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore.Constants
 */
export namespace TestStatic {
  /**
   * max key length.
   *
   * @constant
   * @static
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @famodelonly
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Constants#MAX_KEY_LENGTH
   */
  const MAX_KEY_LENGTH = 1024;
}
