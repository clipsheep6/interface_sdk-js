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
     * @typedef
     */
    testA: boolean;
}

/**
 * TestInterfaceB.
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @since 8
 * @interface TestInterfaceB
 * @typedef TestInterfaceB
 */
interface TestInterfaceB {
}

/**
 * TestInterfaceC.
 * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
 * @typedef TestInterfaceC
 * @since 8
 */
interface TestInterfaceC {
}