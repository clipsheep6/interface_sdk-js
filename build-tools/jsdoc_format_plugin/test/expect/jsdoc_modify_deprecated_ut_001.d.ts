/**
 * TestDeprecated1.
 * 父节点最新一段JSDoc存在@deprecated标签，当前节点无@deprecated标签，工具补全标签（仅整改当前api最新的一段jsDoc），并输出整改日志
 *
 * @namespace TestDeprecated1
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.app.ability.dataUriUtils.d.ts
 * @name TestDeprecated1
 */
/**
 * TestDeprecated1
 *
 * @namespace TestDeprecated1
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7
 */
export namespace TestDeprecated1 {
  /**
   * test.
   *
   * @param uri Indicates the uri object from which the ID is to be obtained.
   * @returns Returns the ID attached to the end of the path component;
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 6
   */
  /**
   * test.
   *
   * @param uri Indicates the uri object from which the ID is to be obtained.
   * @returns Returns the ID attached to the end of the path component;
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   */
  function test(uri: string): number;
}

/**
 * TestDeprecated2
 *
 * @namespace TestDeprecated2
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7
 */
/**
 * TestDeprecated2.
 *
 * @namespace TestDeprecated2
 * @permission N/A
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.app.ability.dataUriUtils.d.ts
 * @name TestDeprecated2
 */
export namespace TestDeprecated2 {
  /**
   * test.
   *
   * @param uri Indicates the uri object from which the ID is to be obtained.
   * @returns Returns the ID attached to the end of the path component;
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 6
   */
  /**
   * test.
   *
   * @param uri Indicates the uri object from which the ID is to be obtained.
   * @returns Returns the ID attached to the end of the path component;
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7
   * @deprecated since 9
   */
  function test(uri: string): number;
}
