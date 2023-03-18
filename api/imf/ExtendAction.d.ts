/**
 * Enumerates the extend action.
 * @enum { number }
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export enum ExtendAction {
    /**
     * Select all text.
     */
    SELECT_ALL = 0,

    /**
     * Cut selecting text.
     */
    CUT = 3,

    /**
     * Copy selecting text.
     */
    COPY = 4,

    /**
     * Paste from paste board.
     */
    PASTE = 5,
}
