import { PropsWithChildren } from "react"
import styles from './nameWrapper.module.css'

interface NameWrapperProps {
    name: string;

}

export function NameWrapper({ name, children }: PropsWithChildren<NameWrapperProps>) {

    return (
        <div className={styles.nameContainer} >
            <p className={styles.name}>
                {name}
            </p>
            {children}
        </div>
    )
};