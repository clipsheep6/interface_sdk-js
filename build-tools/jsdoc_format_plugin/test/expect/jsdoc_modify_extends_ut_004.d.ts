/**
 * TestExtends.
 * extends标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 *
 * @extends TestA
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
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   */
  entities?: Array<string>;
}

/**
 * TestExtends2.
 *
 * @extends TestA
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.Want
 * @name TestExtends2
 */
class TestExtends2 extends TestA {
  /**
   * The description of a entities in a Want.
   *
   * @extends ccc
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   */
  entities?: Array<string>;
}

/**
 * TestA.
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 */
class TestA {}
