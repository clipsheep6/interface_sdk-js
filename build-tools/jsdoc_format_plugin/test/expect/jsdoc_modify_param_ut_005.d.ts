/**
 * TestParam.
 * 标签数大于参数个数，属于param标签错误，工具输出告警
 *
 * @interface TestParam
 * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
 * @syscap SystemCapability.Account.OsAccount
 * @since 7
 * @name DistributedAccountAbility
 */
interface TestParam {
  /**
   * Updates the distributed information of the OS account.
   *
   * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
   * @param { DistributedInfo } accountInfo Indicates the information of the OS account used for a distributed system.
   * @param { AsyncCallback<void> } callback Indicates the information of the OS account used for a distributed system.
   * @param { void } test Indicates the information of the OS account used for a distributed system.
   * @returns void
   * @syscap SystemCapability.Account.OsAccount
   * @since 7
   * @deprecated since 9
   * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
   */
  updateOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;
}
