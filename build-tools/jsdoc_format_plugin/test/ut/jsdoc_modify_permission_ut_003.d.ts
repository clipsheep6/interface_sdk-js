/**
 * TestPermission.
 * permission标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 * @interface TestPermission
 * @syscap SystemCapability.Account.OsAccount
 * @since 7
 * @name DistributedAccountAbility
 */
 interface TestPermission {
    /**
     * Queries the distributed information of the current OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
     */
    queryOsAccountDistributedInfo: string;

    /**
     * Updates the distributed information of the OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7
     * @deprecated since 9
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
     */
    updateOsAccountDistributedInfo: string;

    /**   
     * Sets the distributed information of the OS account.
     * @since 9
     * @syscap SystemCapability.Account.OsAccount
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     */
    setOsAccountDistributedInfo: string;
}