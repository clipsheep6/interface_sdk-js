declare interface Theme {
    colors: Colors
    shapes: Shapes
    typography: Typography
}

declare interface Colors {
    brand: ResourceColor
    brandThin: ResourceColor
    warning: ResourceColor
    alert: ResourceColor
    confirm: ResourceColor

    fontPrimary: ResourceColor
    fontSecondary: ResourceColor
    fontTertiary: ResourceColor
    fontFourth: ResourceColor
    fontEmphasize: ResourceColor

    fontOnPrimary: ResourceColor
    fontOnSecondary: ResourceColor
    fontOnTertiary: ResourceColor
    fontOnFourth: ResourceColor

    iconPrimary: ResourceColor
    iconSecondary: ResourceColor
    iconTertiary: ResourceColor
    iconFourth: ResourceColor
    iconEmphasize: ResourceColor
    iconSubEmphasize: ResourceColor

    iconOnPrimary: ResourceColor
    iconOnSecondary: ResourceColor
    iconOnTertiary: ResourceColor
    iconOnFourth: ResourceColor

    backgroundPrimary: ResourceColor
    backgroundSecondary: ResourceColor
    backgroundTertiary: ResourceColor
    backgroundFourth: ResourceColor
    backgroundEmphasize: ResourceColor

    compBackgroundPrimary: ResourceColor
    compBackgroundPrimaryContrary: ResourceColor
    compBackgroundGray: ResourceColor
    compBackgroundSecondary: ResourceColor
    compBackgroundTertiary: ResourceColor
    compBackgroundEmphasize: ResourceColor
    compBackgroundNeutral: ResourceColor
    compEmphasizeSecondary: ResourceColor
    compEmphasizeTertiary: ResourceColor
    compDivider: ResourceColor
    compCommonContrary: ResourceColor

    interactiveHover: ResourceColor
    interactivePressed: ResourceColor
    interactiveFocus: ResourceColor
    interactiveActive: ResourceColor
    interactiveSelect: ResourceColor
    interactiveClick: ResourceColor
}

declare interface CornerRadius {
    none: Length
    level1: Length
    level2: Length
    level3: Length
    level4: Length
    level5: Length
    level6: Length
    level7: Length
    level8: Length
    level9: Length
    level10: Length
    level11: Length
    level12: Length
    level16: Length
}

declare interface Paddings {
    level0: Length
    level1: Length
    level2: Length
    level3: Length
    level4: Length
    level5: Length
    level6: Length
    level7: Length
    level8: Length
    level9: Length
    level10: Length
    level11: Length
    level12: Length
    level16: Length
    level24: Length
    level32: Length
    level36: Length
}

declare interface Borders {
    none: Length
    xs: Length
    s: Length
    m: Length
    l: Length
    xl: Length
}

declare interface Outlines {
    none: Dimension
    xs: Dimension
    s: Dimension
    m: Dimension
    l: Dimension
    xl: Dimension
}

declare interface Shapes {
    cornerRadius: CornerRadius
    paddings: Paddings
    borders: Borders
    outlines: Outlines
}

declare interface TypographyStyle {
    weight: FontWeight | number | string
    size: Length
}

declare interface Typography {
    // Display
    display_L: TypographyStyle
    display_M: TypographyStyle
    display_S: TypographyStyle

    // Title
    title_L: TypographyStyle
    title_M: TypographyStyle
    title_S: TypographyStyle

    // Subtitle
    subtitle_L: TypographyStyle
    subtitle_M: TypographyStyle
    subtitle_S: TypographyStyle

    // Body
    body_L: TypographyStyle
    body_M: TypographyStyle
    body_S: TypographyStyle

    // Caption
    caption_L: TypographyStyle
    caption_M: TypographyStyle
    caption_S: TypographyStyle
}