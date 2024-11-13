import { educations } from '../../content/education';
import styles from './education.module.css';

export interface IEducation {
    title: string;
    educator: string;
    yearFrom: string;
    yearTo: string;
    description: string;
    location: string;
}

const Education = ({
    title,
    educator,
    yearFrom,
    yearTo,
    description,
    location
}: IEducation) => {

    return (
        <li className={styles.eduBullet}>
        <div className={styles.titleWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.educator}><span className={styles.at}>{" "}@</span> <em>{educator}</em></h3> 
        </div>
        <em>{yearFrom} - {yearTo}</em><em className={styles.location}> | {location}</em>
        <p>{description}</p>
    </li>
    )

};

export const Educations = () => {
    return (
        <ul className={styles.eduList}>
            {educations.map((edu, index) => <Education {...edu} key={index}/>)}
        </ul>
    )
};