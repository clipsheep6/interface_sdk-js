/**
 * TestParam.
 * param标签值不符合规则，工具输出告警
 *
 * @interface TestParam
 * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
 * @syscap SystemCapability.Account.OsAccount
 * @since 7
 * @name DistributedAccountAbility
 */
interface TestParam {
  /**
   * Queries the distributed information of the current OS account.
   *
   * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
   * @param xxxxxxxxxxxxx
   * @returns The distributed information of the current OS account.
   * @syscap SystemCapability.Account.OsAccount
   * @since 7
   * @deprecated since 9
   * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
   */
  queryOsAccountDistributedInfo(callback: void): void;
}
