/**
 * TestInterfaceA.
 * interface/typedef标签不符合标签顺序定义规则，工具调整标签顺序，并输出整改日志
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
