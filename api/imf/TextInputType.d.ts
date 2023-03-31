/**
 * Enumerates the text input type.
 * @enum { number }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export enum TextInputType {
    /**
     * The text input type is NONE.
     */
    NONE = -1,

    /**
     * The text input type is TEXT.
     */
    TEXT = 0,

    /**
     * The text input type is MULTILINE.
     */
    MULTILINE,

    /**
     * The text input type is NUMBER.
     */
    NUMBER,

    /**
     * The text input type is PHONE.
     */
    PHONE,

    /**
     * The text input type is DATETIME.
     */
    DATETIME,

    /**
     * The text input type is EMAIL_ADDRESS.
     */
    EMAIL_ADDRESS,

    /**
     * The text input type is URL.
     */
    URL,

    /**
     * The text input type is VISIBLE_PASSWORD.
     */
    VISIBLE_PASSWORD,
}
