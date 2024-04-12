import styles from "./LinkButton.module.css";
import Link from 'next/link';

export default function LinkButton({link, linkText}) {
    return (
        <div className={styles.linkContainer}>
            <Link href={link} className={styles.link}>
                {linkText}
            </Link>
        </div>
    )
}