interface WithThemeInterface {
    (theme: CustomTheme): WithThemeAttribute
}

declare class WithThemeAttribute {
}

declare const WithTheme: WithThemeInterface;

declare const WithThemeInstance: WithThemeAttribute;