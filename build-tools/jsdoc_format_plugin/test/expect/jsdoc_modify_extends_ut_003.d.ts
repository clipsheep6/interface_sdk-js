/**
 * TestExtends.
 * extends标签值不符合规则，工具输出告警
 *
 * @extends Test
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
 * Want is the basic communication component of the system.
 *
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.Want
 * @name Want
 */
class TestA {}
