/**
 * TestReturns.
 * 非返回类型不为void的函数类型api使用了@returns标签，工具输出告警
 *
 * @namespace TestReturns
 * @returns { string } - string
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @FAModelOnly
 * @since 6
 * @name TestReturns
 */
declare namespace TestReturns {
  /**
   * Obtain the want sent from the source ability.
   *
   * @param parameter Indicates the ability to start.
   * @returns { string } - string
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  function test1(): string;
  /**
   * Obtain the want sent from the source ability.
   *
   * @param parameter Indicates the ability to start.
   * @returns { string } - string
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  function test2(): string;
  /**
   * Obtain the want sent from the source ability.
   *
   * @param parameter Indicates the ability to start.
   * @returns { void }
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  function test3(): void;
}
