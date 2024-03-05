declare interface CustomTheme {
    shapes?: CustomShapes
    colors?: CustomColors
    typography?: CustomTypography
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

declare interface CustomCornerRadius {
    none?: Length
    level1?: Length
    level2?: Length
    level3?: Length
    level4?: Length
    level5?: Length
    level6?: Length
    level7?: Length
    level8?: Length
    level9?: Length
    level10?: Length
    level11?: Length
    level12?: Length
    level16?: Length
}

declare interface CustomPaddings {
    level0?: Length
    level1?: Length
    level2?: Length
    level3?: Length
    level4?: Length
    level5?: Length
    level6?: Length
    level7?: Length
    level8?: Length
    level9?: Length
    level10?: Length
    level11?: Length
    level12?: Length
    level16?: Length
    level24?: Length
    level32?: Length
    level36?: Length
}

declare interface CustomBorders {
    none?: Length
    xs?: Length
    s?: Length
    m?: Length
    l?: Length
    xl?: Length
}

declare interface CustomOutlines {
    none?: Dimension
    xs?: Dimension
    s?: Dimension
    m?: Dimension
    l?: Dimension
    xl?: Dimension
}

declare interface CustomShapes {
    cornerRadius?: CustomCornerRadius
    paddings?: CustomPaddings
    borders?: CustomBorders
    outlines?: CustomOutlines
}

declare interface CustomTypographyStyle {
    weight?: FontWeight | number | string
    size?: Length
}

declare interface CustomTypography {
    // Display
    display_L?: CustomTypographyStyle
    display_M?: CustomTypographyStyle
    display_S?: CustomTypographyStyle

    // Title
    title_L?: CustomTypographyStyle
    title_M?: CustomTypographyStyle
    title_S?: CustomTypographyStyle

    // Subtitle
    subtitle_L?: CustomTypographyStyle
    subtitle_M?: CustomTypographyStyle
    subtitle_S?: CustomTypographyStyle

    // Body
    body_L?: CustomTypographyStyle
    body_M?: CustomTypographyStyle
    body_S?: CustomTypographyStyle

    // Caption
    caption_L?: CustomTypographyStyle
    caption_M?: CustomTypographyStyle
    caption_S?: CustomTypographyStyle
}