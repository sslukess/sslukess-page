import {Theme} from '../ThemeTyping';

const goldTheme: Theme = {

    name: "⭐️",

    themeTint: 'light',

    colors: {
        backgroundDark: "#ffda85",
        backgroundDarkBanded: "#ffefb2",
        accentColorPrimary: "#ef8b52",
        accentColorSecondary: "#ffda86",
        accentColorTertiary: "#ffefb2",
        accentColorDark: "#694a11"

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
        colorPrimary: "dark blue",
        colorSecondary: "dark blue"
    }
};

export {
    goldTheme
};