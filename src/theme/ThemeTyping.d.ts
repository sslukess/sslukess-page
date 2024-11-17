interface Theme {
    name: string;
    themeTint: 'light' | 'dark';
    colors: {
        backgroundDark: string;
        backgroundDarkBanded: string;
        accentColorPrimary: string;
        accentColorSecondary: string;
        accentColorTertiary: string;
        accentColorDark: string
    };
    spacing: {
        standardPadding: string;
        standardMargin: string;
    };
    fonts: {
        googleFontImport: string;
        fontFamily: string;
        lineHeight: number;
        fontWeight: number;
        colorPrimary: string;
        colorSecondary: string;
    };
};

export {Theme};