/**
 * TestStagemodeonly.
 * stagemodeonly标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 *
 * @namespace TestStagemodeonly
 * @constant
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @stagemodelonly
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore.Constants
 */
export namespace TestStagemodeonly {
  /**
   * max key length.
   *
   * @constant
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Constants#MAX_KEY_LENGTH
   */
  const MAX_KEY_LENGTH = 1024;
}
