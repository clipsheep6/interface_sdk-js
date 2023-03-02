/**
 * KVStore constants
 *
 * @namespace TestReadonly
 * @readonly
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore.Constants
 * @constant
 */
namespace TestReadonly {
    /**
     * max key length.
     *
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Constants#MAX_KEY_LENGTH
     * @constant
     */
    const MAX_KEY_LENGTH = 1024;
}

interface TestReadonly2 {
    /**
     * aaa.
     *
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    aaa: string;

    /**
     * test.
     *
     * @returns { void }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    test(): void;
}

class TestReadonly3 {
    /**
     * aaa.
     *
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    aaa: string;

    /**
     * test.
     *
     * @returns { void }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    test(): void;
}

type TestReadonly4 = {
    /**
     * aaa.
     *
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    aaa: string;
};
