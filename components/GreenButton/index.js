import styles from "./GreenButton.module.css";
import Link from 'next/link';

export default function GreenButton({greenButtonText, greenButtonLink}) {
    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            window.location.href = greenButtonLink;
        }

    }
    return (
        <div>
            {/* maybe make a prop for tabIndex if we use tab key for other pages too */}
            <Link href={greenButtonLink} className={styles.buttonText} onKeyDown={handleKeyDown} tabIndex='11'>
                <button className={styles.button}>
                    {greenButtonText}
                </button>
            </Link>
        </div>
    )
}