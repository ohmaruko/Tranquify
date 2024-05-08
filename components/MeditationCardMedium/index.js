import styles from './MeditationCardMedium.module.css'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MeditationCardMedium({
    title,
    time,
    meditation,
    thumbnail
}) {
    const [isSaved, setIsSaved] = useState("./images/unsaved-icon-green.svg");
    function heartClickHandler(e) {
        isSaved === './images/unsaved-icon-green.svg' ? setIsSaved('./images/saved-icon-green.svg') : setIsSaved('./images/unsaved-icon-green.svg');
        // e.stopPropagation();
        e.preventDefault();
    }
    return(
        <div className={styles.cardContainer}>
            <Link href={ "./meditationPlayer?media=" + meditation} style={{textDecoration: 'none', color: 'black'}}>
                <div>
                    <div style={{backgroundImage: `url(${thumbnail})`}} className={styles.thumbnail}>
                    </div>
                </div>
                <div className={styles.titleContainer}>
                    <div className={styles.text}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.time}>{time}min</p>
                    </div>
                    <div onClick = {(e) => { heartClickHandler(e)}} className={styles.saveIcon}>
                        <Image src={isSaved} alt='heart icon' width={22} height={20} />
                    </div>
                </div>
            </Link>
        </div>
    )
}