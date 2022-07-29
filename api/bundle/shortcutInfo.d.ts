/**
 * @name  Provides information about a shortcut, including the shortcut ID and label.
 * @since 7
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @permission NA
 *
 */
export interface ShortcutInfo {
    /**
      * @default Indicates the ID of the application to which this shortcut belongs
      * @since 7
      * @syscap SystemCapability.BundleManager.BundleFramework
      */
    readonly id: string;
    /**
      * @default Indicates the name of the bundle containing the shortcut
      * @since 7
      * @syscap SystemCapability.BundleManager.BundleFramework
      */
    readonly bundleName: string;
    /**
      * @default Indicates the host ability of the shortcut
      * @since 7
      * @syscap SystemCapability.BundleManager.BundleFramework
      */
    readonly hostAbility: string;
    /**
      * @default Indicates the icon of the shortcut
      * @since 7
      * @syscap SystemCapability.BundleManager.BundleFramework
      */
    readonly icon: string;
    /**
     * @default Indicate s the icon id of the shortcut
     * @since 8
     * @syscap SystemCapability.BundleManager.BundleFramework
     */
    readonly iconId: number;
    /**
      * @default Indicates the label of the shortcut
      * @since 7
      * @syscap SystemCapability.BundleManager.BundleFramework
      */
    readonly label: string;
    /**
     * @default Indicates the label id of the shortcut
     * @since 8
     * @syscap SystemCapability.BundleManager.BundleFramework
     */
    readonly labelId: number;
    /**
      * @default Indicates the disableMessage of the shortcut
      * @since 7
      * @syscap SystemCapability.BundleManager.BundleFramework
      */
    readonly disableMessage: string;
    /**
      * @default Indicates whether the shortcut is static
      * @since 7
      * @syscap SystemCapability.BundleManager.BundleFramework
      */
    readonly isStatic?: boolean;
    /**
      * @default Indicates whether the shortcut is homeshortcut
      * @since 7
      * @syscap SystemCapability.BundleManager.BundleFramework
      */
    readonly isHomeShortcut?: boolean;
    /**
      * @default Indicates whether the shortcut is enabled
      * @since 7
      * @syscap SystemCapability.BundleManager.BundleFramework
      */
    readonly isEnabled?: boolean;
    /**
     * @default Indicates the moduleName of the shortcut
     * @since 9
     * @syscap SystemCapability.BundleManager.BundleFramework
     */
    readonly moduleName?: string;
}
