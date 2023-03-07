/**
 * TestReadonly.
 * 非属性（interface成员变量/class成员变量/TypeLiteral属性名/变量定义语句）api使用了@readonly标签，工具输出告警
 * @namespace TestReadonly
 * @constant
 * @readonly
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore.Constants
 */
namespace TestReadonly {
   /**
     * max key length.
     * @constant
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Constants#MAX_KEY_LENGTH
     */
    const MAX_KEY_LENGTH = 1024;
}

/**
 * TestReadonly2.
 * @interface TestReadonly2
 * @readonly
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 */
interface TestReadonly2 {
    /**
     * aaa.
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
   */
    aaa: string;
}