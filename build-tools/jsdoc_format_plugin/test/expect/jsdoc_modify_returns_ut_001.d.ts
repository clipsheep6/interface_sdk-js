/**
 * TestReturns.
 * 返回类型不为void的函数类型api未使用@returns标签，工具补全标签，并输出整改日志
 *
 * @namespace TestReturns
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
   * @returns { string }
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
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  function test3(): void;
}
