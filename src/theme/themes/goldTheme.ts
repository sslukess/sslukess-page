import {Theme} from '../ThemeTyping';

const goldTheme: Theme = {

    colors: {
        backgroundDark: "#ffda85",
        backgroundDarkBanded: "#ffefb2",
        accentColorPrimary: "#dark blue",
        accentColorSecondary: "dark blue",
        accentColorTertiary: "#d0ac6c"

    },

    spacing: {
        standardPadding: "1rem",
        standardMargin: "1rem",
    },  

    fonts: {
        googleFontImport: "@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');",
        fontFamily: "'Roboto Mono', monospace",
        lineHeight: 1.5,
        fontWeight: 400,
        colorLight: "dark blue",
        colorDark: "black"
    }
};

export {
    goldTheme
};