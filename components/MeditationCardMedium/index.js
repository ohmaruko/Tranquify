import styles from './MeditationCardMedium.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MeditationCardMedium({
    title,
    time,
    meditation,
    thumbnail,
    favourite
}) {
    const [heartIcon, setHeartIcon] = useState();
    useEffect(() => {
        setHeartIcon(favourite ? './images/saved-icon-green.svg' : './images/unsaved-icon-green.svg');
    }, [favourite]);
    function heartClickHandler(e) {
        heartIcon === './images/unsaved-icon-green.svg' ? setHeartIcon('./images/saved-icon-green.svg') : setHeartIcon('./images/unsaved-icon-green.svg');
        // e.stopPropagation();
        e.preventDefault();
    }
    return(
        <div className={styles.cardContainer}>
            <Link href={ "./meditationPlayer?media=" + meditation + "&isSaved=" + favourite} style={{textDecoration: 'none', color: 'black'}}>
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
                        <Image src={heartIcon} alt='heart icon' width={22} height={20} />
                    </div>
                </div>
            </Link>
        </div>
    )
}