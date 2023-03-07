/**
 * TestDeprecated3.
 * deprecated标签不符合标签顺序定义规则，工具进行调整标签顺序，并输出整改日志
 * @namespace TestDeprecated3
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7
 * @name TestDeprecated3
 * @deprecated since 9
 */
export namespace TestDeprecated3 {
    /**
     * test.
     * @deprecated since 9
     * @param uri Indicates the uri object from which the ID is to be obtained.
     * @returns Returns the ID attached to the end of the path component;
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 6
   */
    /**
     * test.
     * @param uri Indicates the uri object from which the ID is to be obtained.
     * @returns Returns the ID attached to the end of the path component;
     * @deprecated since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 7
     */
    function test(uri: string): number
}