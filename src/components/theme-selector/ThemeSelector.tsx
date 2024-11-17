import { PropsWithChildren } from 'react';
import { PButton } from "../button/Button"
import styles from './ThemeSelector.module.css'
import { Theme } from '../../theme/ThemeTyping'

// types
interface ThemeSelectorButtonProps {
    selectAction: () => void;
    selected: boolean;
}

// types 
interface ThemeSelectorProps {
    themes: Theme[];
    selectedTheme: Theme;
    setTheme: (theme: Theme) => void;
}

function ThemeSelectorButton({
    children,
    selectAction,
    selected
}: PropsWithChildren<ThemeSelectorButtonProps>) {

    return (
        <PButton action={selectAction} className={styles.themeButton + " " + (selected ? "selected" : "")}>
            {children}
        </PButton>
    )
};


function ThemeSelector({
    themes,
    selectedTheme,
    setTheme
}: ThemeSelectorProps) {


    return (
        <>
            {themes.map((theme, index) => {

                const selected = theme.name === selectedTheme.name;

                return (
                    <ThemeSelectorButton selectAction={() => setTheme(theme)} selected={selected} key={index}>
                        {theme.name}
                    </ThemeSelectorButton>
                );
            })}
        </>
    );
};

export default ThemeSelector;