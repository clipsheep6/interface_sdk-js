/**
 * Enum for QrcodeSate
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare enum QrcodeSate {
  /**
   * Normal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  QRCODE_NORMAL = 0,
  /**
   * Expired type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  QRCODE_EXPIRE = 1,
  /**
   * Loading type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  QRCODE_LOADING = 2
}

/**
 * The class for QrcodeOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
@Observed
export declare class QrcodeOptions {
  /**
   * Sets the edgeLength of qrcode.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  edgeLength: number;
  /**
   * Sets the color of qrcode.
   * @type { ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  color: ResourceColor;
  /**
   * Sets the background color of qrcode.
   * @type { ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  backgroundColor: ResourceColor;
  /**
   * Sets the icon color of qrcode.
   * @type { ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  iconColor: ResourceColor;
  /**
   * Sets the text of qrcode expiried warning.
   * @type { ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  textContent: string;
}

/**
 * Declare Component AnimateQrcode
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
@Component
export declare struct AnimateQrcode {
  /**
   * The options of Qrcode.
   *
   * @type { QrcodeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  @ObjectLink
  options: QrcodeOptions;
  /**
   * The value of Qrcode.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  @Prop
  value: string;
  /**
   * The state of Qrcode.
   *
   * @type { QrcodeSate }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  @Prop
  state: QrcodeSate;
}
