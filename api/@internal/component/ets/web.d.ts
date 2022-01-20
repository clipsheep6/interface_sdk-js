declare class WebController {
    /**
     * Constructor.
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    constructor();

   /**
    * Means to load a piece of code and execute JS code in the context of the currently displayed page
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
    evaluateJavaScript(jscode: string);

   /**
    * Indicates that a piece of code is loaded
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
    loadDataWithBaseURL(value : {baseUrl: string, data: string, mimeType:string, encoding:string, historyUrl: string});

   /**
    * Load the given URL
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
    loadUrl(url : string);
}

declare interface WebOptions {
   /**
    * Set the address of the web page to be displayed
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
    src: string | Resource;
    controller: WebController;
}

interface WebInterface {
    /**
     * Set Value.
     * @since 8
* @Syscap SystemCapability.ArkUI.Standard
     */
    (value: WebOptions): WebAttribute;
}

declare class WebAttribute extends CommonMethod<WebAttribute> {
   /**
    * Triggered at the end of web page loading
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
    onPageFinish(callback: (event?:{ url: string }) => void): WebAttribute;

   /**
    * Get WebView focus callback event
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
    onRequestFocus(event: () => void): WebAttribute;

   /**
    * Set whether WebView allows JavaScript scripts to execute
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
    javaScriptEnabled(value: boolean): WebAttribute;

   /**
    * Enable or disable local file system access in WebView
    * @since 8
* @Syscap SystemCapability.ArkUI.Standard
    */
    fileAccessEnabled(value: boolean): WebAttribute;
}

declare const Web: WebInterface;
declare const WebInstance: WebAttribute;
