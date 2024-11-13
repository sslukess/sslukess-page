import styles from './topBar.module.css'
import { NameWrapper } from './nameWrapper/nameWrapper';

// Types 
type TopLinkData = {
    display: string;
    url: string;
};

// Links 
const githubLink: TopLinkData = {
    display: "GitHub",
    url: "https://github.com/sslukess"
};

const linkedInLink: TopLinkData = {
    display: "LinkedIn",
    url: "https://www.linkedin.com/in/luke-sampson-searle-3823ab130/"
};

const npmLink: TopLinkData = {
    display: "NPM", 
    url: "https://www.npmjs.com/~sslukess"
}

const linkArray = [ linkedInLink, githubLink, npmLink];


interface TopLinkProps { 
    link: TopLinkData;
    className?: string;
}

// Note that these are external links, so just an <a> is used. 
const TopLink = ({ link, className }: TopLinkProps) => (
    <a className={`${styles.topLink} ${className}`} href={link.url} target="_blank" >
        {'' + link.display + ''}
    </a>
)

export const TopBar = () => {

    return (
        <header className={styles.topBar}>
            <NameWrapper name="LUKE SAMPSON SEARLE" />
            <nav className={styles.topLinks}>
                {linkArray.map((link, index) => <TopLink link={link} key={index}/>)}
            </nav>
        </header>
    );
};