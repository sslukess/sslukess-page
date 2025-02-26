import { FilledBio } from '../content-section/bio/bio'
import { PButton } from '../button/Button'
import ThemeSelector from '../theme-selector/ThemeSelector'
import { email, phoneNumber } from '../../content/contact'
import styles from './banner.module.css'
import { Theme } from '../../theme/ThemeTyping';

// types 
interface BannerProps {
    themes: Theme[];
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

function scrollToSection(id: string) {

    const target = document.getElementById(id) ?? null;
    const header = document.querySelector('header'); // The class or id of your sticky header

    if (target) {
        const headerOffset = header ? header.offsetHeight : 0; // Get the height of the sticky header
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

export function Banner({ theme, setTheme, themes }: BannerProps) {

    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.bannerContent}>
                {/* Image */}
                {/* <div className={styles.imageWrapper}>
                    <img className={styles.image} src="/luke.png" />
                </div> */}

                {/* Name */}
                <h2>Luke Sampson Searle</h2>

                {/* Bio */}
                <div className={styles.bioWrapper}>
                    <FilledBio />
                </div>

                {/*  Buttons  */}
                <div className={styles.buttonWrapper}>

                    <PButton className={styles.button} action={() => scrollToSection("Projects")}>
                        Projects
                    </PButton>

                    <PButton className={styles.button} action={() => scrollToSection("Experience")}>
                        Experience
                    </PButton>

                    <PButton className={styles.button} action={() => scrollToSection("Skills")}>
                        Skills
                    </PButton>
                </div>

                {/* Contact */}
                <span>e: {email}</span>
                <span>ph: {phoneNumber}</span>

            </div>

            {/* Select Theme */}
            <div className={styles.themeSelector}>
                <ThemeSelector selectedTheme={theme} setTheme={setTheme} themes={themes} />
            </div>
        </div>
    );
}