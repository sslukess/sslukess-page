import { FilledBio } from '../content-section/bio/bio'
import { PButton } from '../button/Button'

import styles from './banner.module.css'

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
                <PButton className={styles.button} action={() => console.log("hello")}>
                    Work Experience
                </PButton>

                <PButton className={styles.button} action={() => console.log("hello")}>
                    Projects
                </PButton>

                <PButton className={styles.button} action={() => console.log("hello")}>
                    Education
                </PButton>

                <PButton className={styles.button} action={() => console.log("hello")}>
                    Skills
                </PButton>
            </div>
        </div>
    );
}