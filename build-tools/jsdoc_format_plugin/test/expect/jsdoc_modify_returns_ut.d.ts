/**
 * A Feature Ability represents an ability with a UI and is designed to interact with users.
 *
 * @namespace TestReturns
 * @permission N/A
 * @returns { number }
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @FAModelOnly
 * @since 6
 * @name featureAbility
 */
declare namespace TestReturns {
    /**
     * Obtain the want sent from the source ability.
     *
     * @param parameter Indicates the ability to start.
     * @returns -
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
     * @returns { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @FAModelOnly
     * @since 6
     */
    function test3(): string;
}
