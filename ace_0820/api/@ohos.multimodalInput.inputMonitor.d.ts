 /**
 * Global Input Event Listener
 * System API, available only to system processes
 * @since 7
 * @sysCap System Capabilities
 * @devices phone, tablet, tv, wearable, car
 * @import import inputMonitor from '@ohos.multimodalInput.inputMonitor';
 * @permission ohos.permission.INPUT_MONITORING
 * @systemApi
 */
declare namespace inputMonitor {
    /**
     * Callback function of the touch input event. If true is returned, the touch input is consumed by the monitor (the system performs the closing action).
     * @sysCap System Capabilities
     * @systemapi
     */
    interface TouchEventReceiver {
        (touchEvent:TouchEvent): Boolean;
    }

     /**
     * Listening for touch input events
     * @sysCap System Capabilities
     * @systemapi
     */
    function on(type:"touch", receiver:TouchEventReceiver):void;

    /**
     * Cancels listening for touch input events
     * @sysCap System Capabilities
     * @systemapi
     */
    function off(type:"touch", receiver:TouchEventReceiver):void;
}

export default inputMonitor;
