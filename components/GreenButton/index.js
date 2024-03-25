import styles from "./GreenButton.module.css";
import Link from 'next/link';

export default function GreenButton({greenButtonText, greenButtonLink}) {
    return (
        <div>
            <Link href={greenButtonLink} className={styles.buttonText}>
                <button className={styles.button}>
                    {greenButtonText}
                </button>
            </Link>
        </div>
    )
}