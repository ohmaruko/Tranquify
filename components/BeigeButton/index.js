import styles from "./BeigeButton.module.css";
import Link from 'next/link';

export default function BeigeButton({beigeButtonText, beigeButtonLink}) {
    return (
        <div>
            <Link href={beigeButtonLink} className={styles.buttonText}>
                <button className={styles.button}>
                    {beigeButtonText}
                </button>
            </Link>
        </div>
    )
}