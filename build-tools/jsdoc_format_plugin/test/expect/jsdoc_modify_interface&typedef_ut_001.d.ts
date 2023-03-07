/**
 * TestInterfaceA.
 * interface类型api未使用interface/typedef标签，工具输出告警
 *
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
 * @interface TestInterfaceC
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @since 8
 */
interface TestInterfaceC {}
