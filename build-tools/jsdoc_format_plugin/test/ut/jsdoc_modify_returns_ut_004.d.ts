/**
 * TestReturns.
 * returns标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 * @namespace TestReturns
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @FAModelOnly
 * @since 6
 * @name TestReturns
 */
 declare namespace TestReturns {
    /**
     * Obtain the want sent from the source ability.
     * @returns { string } - string
     * @param parameter Indicates the ability to start.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 6
     */
    function test1(): string;
    /**
   * Obtain the want sent from the source ability.
   * @param parameter Indicates the ability to start.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   * @returns { string } - string
   */
    function test2(): string;
}