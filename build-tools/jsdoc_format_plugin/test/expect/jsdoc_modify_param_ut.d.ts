/**
 * TestParam.
 *
 * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
 * @param aaa
 * @syscap SystemCapability.Account.OsAccount
 * @since 7
 * @name DistributedAccountAbility
 */
interface TestParam {
    /**
     * Queries the distributed information of the current OS account.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
     * @returns The distributed information of the current OS account.
     * @since 7
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
     * @syscap SystemCapability.Account.OsAccount
     * @param { void } callback
     */
    queryOsAccountDistributedInfo(callback: void): void;

    /**
     * Updates the distributed information of the OS account.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param accountInfo Indicates the information of the OS account used for a distributed system.
     * @returns void
     * @since 7
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
     * @syscap SystemCapability.Account.OsAccount
     * @param { AsyncCallback<void> } callback
     * @param
     */
    updateOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;

    /**
     * Updates the distributed information of the OS account.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param accountInfo Indicates the information of the OS account used for a distributed system.
     * @returns void
     * @since 7
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
     * @syscap SystemCapability.Account.OsAccount
     * @param { AsyncCallback<void> } callback
     * @param
     */
    updateOsAccountDistributedInfo(accountInfo: DistributedInfo): Promise<void>;

    /**
     * Sets the distributed information of the OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param accountInfo Indicates the information of the OS account used for a distributed system.
     * @param accountInfo Indicates the information of the OS account used for a distributed system.
     * @param accountInfo Indicates the information of the OS account used for a distributed system.
     * @returns void
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 401 - the parameter check failed.
     * @throws { BusinessError } 12300001 - system service exception.
     * @throws { BusinessError } 12300002 - invalid accountInfo.
     * @throws { BusinessError } 12300003 - the account indicated by accountInfo dose not exist.
     * @since 9
     * @syscap SystemCapability.Account.OsAccount
     */
    setOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;

    /**
     * Sets the distributed information of the OS account.
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param accountInfo Indicates the information of the OS account used for a distributed system.
     * @param accountInfo Indicates the information of the OS account used for a distributed system.
     * @param accountInfo Indicates the information of the OS account used for a distributed system.
     * @returns void
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 401 - the parameter check failed.
     * @throws { BusinessError } 12300001 - system service exception.
     * @throws { BusinessError } 12300002 - invalid accountInfo.
     * @throws { BusinessError } 12300003 - the account indicated by accountInfo dose not exist.
     * @since 9
     * @syscap SystemCapability.Account.OsAccount
     */
    setOsAccountDistributedInfo(accountInfo: DistributedInfo): Promise<void>;
}
