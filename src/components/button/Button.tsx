import { PropsWithChildren } from "react";

import styles from './button.module.css';

interface IPButtonProps {
    action: () => void;
    className?: string;
};

export function PButton({ action, className, children }: PropsWithChildren<IPButtonProps>){
    
    return(
        <button className={styles.button + " " + className} onClick={(e) => {
            e.preventDefault();
            action() // call action
        }}>
            {children}
        </button>
    )
}