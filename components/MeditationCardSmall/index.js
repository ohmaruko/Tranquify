import styles from './MeditationCardSmall.module.css'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MeditationCardSmall({
    title,
    time,
    meditation,
    thumbnail,
}) {
    const [isSaved, setIsSaved] = useState("./images/unsaved-icon-white.svg");
    function heartClickHandler(e) {
        isSaved === './images/unsaved-icon-white.svg' ? setIsSaved('./images/saved-icon-white.svg') : setIsSaved('./images/unsaved-icon-white.svg');
        // e.stopPropagation();
        e.preventDefault();
    }
    return(
        <Link href={ "./meditationPlayer?media=" + meditation} style={{textDecoration: 'none', color: 'white'}}>
            <div className={styles.cardContainer}>
                <div className={styles.cardInnerContainer}>
                    <div style={{backgroundImage: `url(${thumbnail})`, backgroundSize: "88px 88px", width: '100%', height: '100%'}} 
                        className={styles.thumbnail}>
                        <div className={styles.thumbnailInner}></div>
                    </div>
                    <div className={styles.titleContainer}>
                        <div className={styles.text}>
                            <p>{title}</p>
                            <p>{time}min</p>
                        </div>
                        <div onClick = {(e) => { heartClickHandler(e)}} className={styles.saveIcon}>
                            <Image src={isSaved} alt='heart icon' width={22} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}