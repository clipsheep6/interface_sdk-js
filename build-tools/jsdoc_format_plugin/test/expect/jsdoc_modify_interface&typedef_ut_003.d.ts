/**
 * TestInterfaceA.
 * interface/typedef标签值不符合规则，工具输出告警
 *
 * @interface TestInterface
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @since 8
 */
interface TestInterfaceA {
  /**
   * testA
   *
   * @typedef
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   */
  testA: boolean;
}

/**
 * TestInterfaceB.
 *
 * @typedef TestInterfaceB
 * @interface TestInterfaceB
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @since 8
 */
interface TestInterfaceB {}

/**
 * TestInterfaceC.
 *
 * @typedef TestInterface
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @since 8
 */
interface TestInterfaceC {}
