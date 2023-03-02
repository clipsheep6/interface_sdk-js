/**
 * TestType.
 *
 * @namespace TestType
 * @type
 * @syscap SystemCapability.DistributedDataManager.KVStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore.Constants
 * @constant
 */
export namespace TestType {
    /**
     * max key length.
     *
     * @type aaa
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
     * @type
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    aaa: string;

    /**
     * test.
     *
     * @type
     * @returns { void }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    test(): void;
}

export class TestReadonly3 {
    /**
     * aaa.
     *
     * @type
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    aaa: string;

    /**
     * test.
     *
     * @type
     * @returns { void }
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    test(): void;
}

type TestReadonly4 = {
    /**
     * aaa.
     *
     * @type
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     */
    aaa: string;
};
