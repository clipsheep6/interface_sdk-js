/**
 * TestType.
 * 非属性（interface成员变量/class成员变量/TypeLiteral属性名/变量定义语句）api使用了@type标签，工具输出告警
 *
 * @namespace TestType
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore.Constants
 */
export namespace TestType {
  /**
   * max key length.
   *
   * @constant
   * @type { number }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Constants#MAX_KEY_LENGTH
   */
  const MAX_KEY_LENGTH = 1024;
}

/**
 * TestType2.
 *
 * @interface
 * @type { inderface }
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 */
interface TestType2 {
  /**
   * aaa.
   *
   * @type { string }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7
   */
  aaa: string;

  /**
   * test.
   *
   * @returns { string }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7
   */
  test(): string;
}
