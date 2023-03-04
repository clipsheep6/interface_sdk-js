/**
 * TestReadonly.
 * readonly标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 *
 * @namespace TestReadonly
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore.Constants
 */
namespace TestReadonly {
  /**
   * aaa.
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7
   * @readonly
   */
  aaa: string;
}
