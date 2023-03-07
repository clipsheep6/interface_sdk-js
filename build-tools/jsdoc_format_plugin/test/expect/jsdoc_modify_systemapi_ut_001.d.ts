/**
 * TestSystemapi.
 * 父节点存在@systemapi标签，当前节点无@systemapi标签，工具补全标签，并输出整改日志
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
