import {Theme} from '../ThemeTyping';

const blueTheme: Theme = {

    colors: {
        backgroundDark: "#171832",
        backgroundDarkBanded: "#1a1b39",
        accentColorPrimary: "#65c696",
        accentColorSecondary: "purple",
        accentColorTertiary: "#386d9b"

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
        colorLight: "rgba(255, 255, 255, 0.87)",
        colorDark: "black"
    }
};

export {
    blueTheme
};