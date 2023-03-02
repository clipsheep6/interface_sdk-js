/**
 * @syscap SystemCapability.DistributedDataManager.Preferences.Core
 * @FAModelOnly
 * @crossplatform
 * @since 3
 * @deprecated since 6
 */
export interface TestCrossplatform {
    /**
     * Content index.
     * the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @FAModelOnly
     * @since 3
     * @deprecated since 6
     */
    key: string;

    /**
     * Default value returned when the key does not exist.
     * If this parameter is not specified, an empty string is returned.
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @FAModelOnly
     * @since 3
     * @deprecated since 6
     */
    default?: string;

    /**
     * Called when the stored content is read successfully.
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @FAModelOnly
     * @since 3
     * @deprecated since 6
     */
    success?: (data: any) => void;

    /**
     * Called when the stored content fails to be read.
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @FAModelOnly
     * @since 3
     * @deprecated since 6
     */
    fail?: (data: string, code: number) => void;

    /**
     * Called when the execution is completed.
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @FAModelOnly
     * @since 3
     * @deprecated since 6
     */
    complete?: () => void;
}
