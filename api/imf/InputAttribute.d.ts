import { TextInputType } from './TextInputType'
import { EnterKeyType } from './EnterKeyType'

/**
 * Attribute of Input.
 * @typedef InputAttribute
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface InputAttribute {
    /**
     * Indicates the text input type of the input method.
     * @type { TextInputType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    textInputType: TextInputType;

    /**
     * Indicates the enter key type of the input method.
     * @type { EnterKeyType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    enterKeyType: EnterKeyType;
}
