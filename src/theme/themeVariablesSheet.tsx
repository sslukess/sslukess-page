import { Theme } from './ThemeTyping';

// this sheet makes the following variables available
function ThemeVariablesSheet( { theme }: { theme: Theme }) {

    const cssToInsert = `
        :root {

        /* Fonts */
        ${theme.fonts.googleFontImport}
        --font-family: ${theme.fonts.fontFamily};
        --line-height: ${theme.fonts.lineHeight};
        --font-weight: ${theme.fonts.fontWeight};
        --color-primary: ${theme.fonts.colorPrimary};
        --color-secondary: ${theme.fonts.colorSecondary};
        
        /* Colors */
        --background-color: ${theme.colors.backgroundDark};
        --background-band-color: ${theme.colors.backgroundDarkBanded};
        --accent-color-primary: ${theme.colors.accentColorPrimary};
        --accent-color-secondary: ${theme.colors.accentColorSecondary};
        --accent-color-tertiary: ${theme.colors.accentColorTertiary};
        --accent-color-dark: ${theme.colors.accentColorDark};


        /* Spacing */
        --stdPadding: ${theme.spacing.standardPadding};
        --stdMargin: ${theme.spacing.standardMargin};
        }
    `;

    return (
    <style>
        {cssToInsert}
    </style>
    );
};

export default ThemeVariablesSheet;