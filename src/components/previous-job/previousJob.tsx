import { previousJobs } from '../../content/previousJobs';
import styles from './previousJob.module.css'

export interface IPreviousJob {
    title: string;
    employer: string;
    yearFrom: string;
    yearTo: string;
    description: string;
    location: string;
}

const PreviousJob = ({
    title,
    employer,
    yearFrom,
    yearTo,
    description,
    location
}: IPreviousJob) => {

    return (
        <li className={styles.jobBullet}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <h3 className={styles.employer}><span className={styles.at}>{" "}@</span> <em>{employer}</em></h3> 
            </div>
            <em>{yearFrom} - {yearTo}</em><em className={styles.location}> | {location}</em>
            <p>{description}</p>
        </li>
    )
};

export const PreviousJobs = () => {
    return (
        <ul className={styles.jobList}>
            {previousJobs.map((job, index) => <PreviousJob {...job} key={index}/>)}
        </ul>
    )
};