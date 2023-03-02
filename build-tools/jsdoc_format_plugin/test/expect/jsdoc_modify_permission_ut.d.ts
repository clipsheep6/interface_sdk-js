/**
 * TestPermission.
 *
 * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
 * @param aaa
 * @syscap SystemCapability.Account.OsAccount
 * @since 7
 * @name DistributedAccountAbility
 */
interface TestPermission {
    /**
     * Queries the distributed information of the current OS account.
     *
     * @returns The distributed information of the current OS account.
     * @since 7
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
     * @syscap SystemCapability.Account.OsAccount
     */
    queryOsAccountDistributedInfo: string;

    /**
     * Updates the distributed information of the OS account.
     *
     * @returns void
     * @since 7
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
     * @syscap SystemCapability.Account.OsAccount
     */
    updateOsAccountDistributedInfo: string;

    /**
     * Sets the distributed information of the OS account.
     *
     * @returns void
     * @since 9
     * @syscap SystemCapability.Account.OsAccount
     */
    setOsAccountDistributedInfo: string;
}
