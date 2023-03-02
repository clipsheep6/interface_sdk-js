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
     * @typedef
     */
    testA: boolean;
}

/**
 * TestInterfaceB.
 * @interface TestInterfaceB
 * @typedef TestInterfaceB
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @since 8
 */
interface TestInterfaceB {
}

/**
 * TestInterfaceC.
 * @interface TestInterfaceC
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @since 8
 */
interface TestInterfaceC {
}