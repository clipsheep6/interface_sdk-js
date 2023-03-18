/**
 * Information of Cursor.
 * @typedef CursorInfo
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface CursorInfo {
    /**
     * Indicates the left point of the cursor info and must be absolute coordinate of the physical screen.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    left: number;

    /**
     * Indicates the top point of the cursor info and must be absolute coordinate of the physical screen.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    top: number;

    /**
     * Indicates the width point of the cursor info.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    width: number;

    /**
     * Indicates the height point of the cursor info.
     * @type { number }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    height: number;
}
