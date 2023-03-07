/**
 * TestParam.
 * param标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 * @interface TestParam
 * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
 * @syscap SystemCapability.Account.OsAccount
 * @since 7
 * @name DistributedAccountAbility
 */
interface TestParam {
    /**
     * Queries the distributed information of the current OS account.
     * @param { void } callback
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
     * @returns The distributed information of the current OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 7
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
     */
    queryOsAccountDistributedInfo(callback: void): void;

    /**
     * Updates the distributed information of the OS account.
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns void
     * @syscap SystemCapability.Account.OsAccount
     * @since 7
     * @deprecated since 9
     * @param { AsyncCallback<void> } callback Indicates the information of the OS account used for a distributed system.
     * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
     * @param { DistributedInfo } accountInfo Indicates the information of the OS account used for a distributed system.
     *
     */
    updateOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;
    }