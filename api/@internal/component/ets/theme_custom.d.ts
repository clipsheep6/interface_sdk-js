declare interface CustomTheme {
    colors?: CustomColors
}

declare interface CustomColors {
    brand?: ResourceColor
    brandThin?: ResourceColor
    warning?: ResourceColor
    alert?: ResourceColor
    confirm?: ResourceColor

    fontPrimary?: ResourceColor
    fontSecondary?: ResourceColor
    fontTertiary?: ResourceColor
    fontFourth?: ResourceColor
    fontEmphasize?: ResourceColor

    fontOnPrimary?: ResourceColor
    fontOnSecondary?: ResourceColor
    fontOnTertiary?: ResourceColor
    fontOnFourth?: ResourceColor

    iconPrimary?: ResourceColor
    iconSecondary?: ResourceColor
    iconTertiary?: ResourceColor
    iconFourth?: ResourceColor
    iconEmphasize?: ResourceColor
    iconSubEmphasize?: ResourceColor

    iconOnPrimary?: ResourceColor
    iconOnSecondary?: ResourceColor
    iconOnTertiary?: ResourceColor
    iconOnFourth?: ResourceColor

    backgroundPrimary?: ResourceColor
    backgroundSecondary?: ResourceColor
    backgroundTertiary?: ResourceColor
    backgroundFourth?: ResourceColor
    backgroundEmphasize?: ResourceColor

    compBackgroundPrimary?: ResourceColor
    compBackgroundPrimaryContrary?: ResourceColor
    compBackgroundGray?: ResourceColor
    compBackgroundSecondary?: ResourceColor
    compBackgroundTertiary?: ResourceColor
    compBackgroundEmphasize?: ResourceColor
    compBackgroundNeutral?: ResourceColor
    compEmphasizeSecondary?: ResourceColor
    compEmphasizeTertiary?: ResourceColor
    compDivider?: ResourceColor
    compCommonContrary?: ResourceColor

    interactiveHover?: ResourceColor
    interactivePressed?: ResourceColor
    interactiveFocus?: ResourceColor
    interactiveActive?: ResourceColor
    interactiveSelect?: ResourceColor
    interactiveClick?: ResourceColor
}