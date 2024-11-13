import { FilledBio } from '../content-section/bio/bio'
import { PButton } from '../button/Button'

import styles from './banner.module.css'

function scrollToSection(id: string) {

    const target = document.getElementById(id) ?? null;
    const header = document.querySelector('header'); // The class or id of your sticky header

    // if (target) {
    //     target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }

    if (target) {
        const headerOffset = header ? header.offsetHeight : 0; // Get the height of the sticky header
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}


export function Banner() {

    return (
        <div className={styles.bannerContent}>


            {/* Image */}
            <div className={styles.imageWrapper}>
                <img className={styles.image} src="/luke.png" />
            </div>

            {/* Bio */}
            <div className={styles.bioWrapper}>
                <FilledBio />
            </div>

            {/*  Buttons  */}
            <div className={styles.buttonWrapper}>
                <PButton className={styles.button} action={() => scrollToSection("WorkHistory")}>
                    Work History
                </PButton>

                <PButton className={styles.button} action={() => scrollToSection("Projects")}>
                    Projects
                </PButton>

                <PButton className={styles.button} action={() => scrollToSection("Education")}>
                    Education
                </PButton>

                <PButton className={styles.button} action={() => scrollToSection("Skills")}>
                    Skills
                </PButton>
            </div>
        </div>
    );
}