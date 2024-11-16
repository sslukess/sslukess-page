interface Theme {
    colors: {
        backgroundDark: string;
        backgroundDarkBanded: string;
        accentColorPrimary: string;
        accentColorSecondary: string;
        accentColorTertiary: string;
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
        colorLight: string;
        colorDark: string;
    };
};

export {Theme};