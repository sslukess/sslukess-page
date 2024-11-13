import { PropsWithChildren } from "react";

import styles from './button.module.css';

interface IPButtonProps {
    action: () => void;
};

export function PButton({ action, children }: PropsWithChildren<IPButtonProps>){
    
    return(
        <button className={styles.button} onClick={(e) => {
            e.preventDefault();
            action() // call action
        }}>
            {children}
        </button>
    )
}