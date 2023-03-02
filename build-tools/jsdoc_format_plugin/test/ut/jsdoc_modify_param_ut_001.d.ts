/**
 * TestParam.
 * 带有参数的函数类型api未使用@param标签，工具补全标签，并输出整改日志
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
     * @returns void
     * @syscap SystemCapability.Account.OsAccount
     * @since 7
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
     */
    updateOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;
  }