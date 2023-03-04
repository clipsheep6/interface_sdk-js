/**
 * TestInterfaceA.
 * 非interface类型api使用了interface/@typedef标签，工具输出告警
 *
 * @interface TestInterfaceA
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @since 8
 */
interface TestInterfaceA {
  /**
   * testA
   *
   * @typedef
   * @interface testA
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
 * @typedef TestInterfaceC
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @since 8
 */
interface TestInterfaceC {}
