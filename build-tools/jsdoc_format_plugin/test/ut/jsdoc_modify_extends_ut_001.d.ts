/**
 * TestExtends.
 * 使用extends关键字的class类型api未使用@extends标签，工具补全标签，并输出整改日志
 *
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.Want
 * @name TestExtends
 */
class TestExtends extends TestA {
    /**
     * The description of a entities in a Want.
     * @default -
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 8
     */
    entities?: Array<string>;
}

/**
 * TestA.
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.Want
 * @name TestA
 */
class TestA {

}
