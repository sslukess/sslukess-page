import styles from './previousExperience.module.css'

import { previousJobs } from '../../content/previousJobs';
import { previousEducations } from '../../content/education';

export interface IPreviousExperience {
    title: string;
    organisation: string;
    yearFrom: string;
    yearTo: string;
    description: string;
    location: string;
    type: "Job" | "Education";
}

const PreviousExperience = ({
    title,
    organisation,
    yearFrom,
    yearTo,
    description,
    location,
    type
}: IPreviousExperience) => {

    const bulletStyle = styles[`${type}Bullet`]; 

    return (
        <li className={styles.expBullet + " " + bulletStyle}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <h3 className={styles.organisation}><span className={styles.at}>{" "}@</span> <em>{organisation}</em></h3> 
            </div>
            <em>{yearFrom} - {yearTo}</em><em className={styles.location}> | {location}</em>
            <p>{description}</p>
        </li>
    )
};


export const PreviousExperiences = () => {
    return (
        <ul className={styles.expList}>
            {/* Jobs */}
            {previousJobs.map((job, index) => <PreviousExperience {...job} key={index}/>)}
            
            {/* Education */}
            {previousEducations.map((edu, index) => <PreviousExperience {...edu} key={index}/>)}
        </ul>
    )
};