import { EnterKeyType } from './EnterKeyType'

/**
 * FunctionKey of Input.
 * @typedef FunctionKey
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 10
 */
export interface FunctionKey {
    /**
     * Indicates the enter key type of the input method.
     * @type { EnterKeyType }
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    enterKeyType: EnterKeyType;
}
