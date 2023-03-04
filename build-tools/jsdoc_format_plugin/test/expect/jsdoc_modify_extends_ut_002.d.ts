/**
 * TestExtends.
 * 非使用extends关键字的class类型api使用了@extends标签，工具输出告警
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
 * @extends Test
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
 * Want is the basic communication component of the system.
 *
 * @extends XXX
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.Want
 * @name Want
 */
class TestA {}
