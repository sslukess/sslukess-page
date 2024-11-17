import {Theme} from '../ThemeTyping';

const greenTheme: Theme = {

    name: "🍉",
    
    themeTint: 'dark',

    colors: {
        backgroundDark: "#02693b",
        backgroundDarkBanded: "#026f3f",
        accentColorPrimary: "#cacaca",
        accentColorSecondary: "#ff3b4bba",
        accentColorTertiary: "palevioletred",
        accentColorDark: "#013c6e"

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
        colorPrimary: "rgba(255, 255, 255, 0.87)",
        colorSecondary: "black"
    }
};

export {
    greenTheme
};