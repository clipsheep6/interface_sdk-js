/**
 * TestEnum1.
 * 枚举类型api未使用@enum标签，工具补全标签，并输出整改日志
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 6
 */
export enum TestEnum1 {
    /**
     * Permission denied.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 6
     */
    TEST = -3
}

/**
 * TestEnum2.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 6
 * @enum TestEnum2
 */
export enum TestEnum2 {
    /**
     * Permission denied.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 6
     */
    TEST = -3
}