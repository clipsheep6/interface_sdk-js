/**
 * TestParam.
 * 非带有参数的函数类型api使用了@param标签，工具输出告警
 *
 * @interface TestParam
 * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
 * @param TestParam
 * @syscap SystemCapability.Account.OsAccount
 * @since 7
 * @name DistributedAccountAbility
 */
interface TestParam {
  /**
   * Queries the distributed information of the current OS account.
   *
   * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
   * @param { void } callback
   * @returns The distributed information of the current OS account.
   * @syscap SystemCapability.Account.OsAccount
   * @since 7
   * @deprecated since 9
   * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
   */
  queryOsAccountDistributedInfo(callback: void): void;
}
