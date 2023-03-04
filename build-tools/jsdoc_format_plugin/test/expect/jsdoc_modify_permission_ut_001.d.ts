/**
 * TestPermission.
 * 父节点存在@permission标签，当前节点无@permission标签，工具输出告警
 *
 * @interface TestPermission
 * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
 * @syscap SystemCapability.Account.OsAccount
 * @since 7
 * @name DistributedAccountAbility
 */
interface TestPermission {
  /**
   * Queries the distributed information of the current OS account.
   *
   * @returns The distributed information of the current OS account.
   * @syscap SystemCapability.Account.OsAccount
   * @since 7
   * @deprecated since 9
   * @useinstead distributedAccount.DistributedAccountAbility#getOsAccountDistributedInfo
   */
  queryOsAccountDistributedInfo: string;

  /**
   * Updates the distributed information of the OS account.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 7
   * @deprecated since 9
   * @useinstead distributedAccount.DistributedAccountAbility#setOsAccountDistributedInfo
   */
  updateOsAccountDistributedInfo: string;

  /**
   * Sets the distributed information of the OS account.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 9
   */
  setOsAccountDistributedInfo: string;
}
