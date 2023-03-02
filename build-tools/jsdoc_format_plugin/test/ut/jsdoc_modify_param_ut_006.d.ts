/**
 * TestParam.
 * 标签数小于参数个数，属于param标签缺失，工具补全标签，并输出整改日志
 * @interface TestParam
 * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
 * @syscap SystemCapability.Account.OsAccount
 * @since 7
 * @name DistributedAccountAbility
 */
interface TestParam {
    /**
     * Queries the distributed information of the current OS account.
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
     * @param { void } callback
     * @returns The distributed information of the current OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
     */
    queryOsAccountDistributedInfo(callback: void): void;

    /**
     * Updates the distributed information of the OS account.
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DistributedInfo } accountInfo Indicates the information of the OS account used for a distributed system.
     * @returns void
     * @syscap SystemCapability.Account.OsAccount
     * @since 7
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
     */
    updateOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;

    /**
     * Sets the distributed information of the OS account.
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param { AsyncCallback<void> } callback
     * @returns void
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 401 - the parameter check failed.
     * @throws { BusinessError } 12300001 - system service exception.
     * @throws { BusinessError } 12300002 - invalid accountInfo.
     * @throws { BusinessError } 12300003 - the account indicated by accountInfo dose not exist.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9
     */
    setOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;
}