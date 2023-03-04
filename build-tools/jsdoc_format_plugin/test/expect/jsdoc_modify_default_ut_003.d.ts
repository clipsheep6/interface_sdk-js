/**
 * TestDefaultClass3.
 * default标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
 *
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @name TestDefaultClass3
 */
export default class TestDefaultClass3 {
  /**
   * The description of a entities in a Want.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   */
  entities?: Array<string>;
}
