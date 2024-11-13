import { IProject } from '../../content/projects';
import styles from './card.module.css';
import { PButton } from '../button/Button'

export interface CardProps extends IProject { };

export const ProjectCard = ({
    title,
    appUrl,
    codeUrl,
    description
}: CardProps) => {

    return (
        <>
            <div className={styles.card} >

                <div className={styles.textWrapper} >
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className={styles.buttonWrapper}>
                    {/* Link to the App */}
                    <PButton action={() => window.open(appUrl, '_blank')}>
                        View
                    </PButton>

                    {/* Link to the code */}
                    <PButton action={() => window.open(codeUrl, '_blank')}>
                        Code
                    </PButton>
                </div>

            </div>
        </>
    )
};