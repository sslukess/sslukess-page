import { PropsWithChildren } from "react";
import style from './contentSection.module.css'

interface HeadingSectionProps {
    heading?: string;
    decoration?: string;
    banner?: boolean;
}

export function ContentSection({
    heading, 
    decoration,
    banner,
    children,
}: PropsWithChildren<HeadingSectionProps>) {

    return (
        <section className={style.contentSection + " " + (banner ? style.banner : "")}>
            <h2>{heading}</h2>
            <em>{decoration}</em>
            {children}
        </section>
    )
};
