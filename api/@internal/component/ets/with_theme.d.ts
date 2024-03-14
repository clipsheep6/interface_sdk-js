declare interface WithThemeOptions {
    theme?: CustomTheme
    colorMode?: ThemeColorMode
}

interface WithThemeInterface {
    (options: WithThemeOptions): WithThemeAttribute
}

declare class WithThemeAttribute {
}

declare const WithTheme: WithThemeInterface;

declare const WithThemeInstance: WithThemeAttribute;