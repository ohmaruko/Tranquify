import styles from './MeditationCardSmall.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MeditationCardSmall({
    title,
    time,
    meditation,
    thumbnail,
    favourite
}) {
    const [heartIcon, setHeartIcon] = useState();
    useEffect(() => {
        setHeartIcon(favourite ? './images/saved-icon-white.svg' : './images/unsaved-icon-white.svg');
    }, [favourite]);
    function heartClickHandler(e) {
        heartIcon === './images/unsaved-icon-white.svg' ? setHeartIcon('./images/saved-icon-white.svg') : setHeartIcon('./images/unsaved-icon-white.svg');
        // e.stopPropagation();
        e.preventDefault();
    }
    return(
        <Link href={ "./meditationPlayer?media=" + meditation + "&isSaved=" + favourite} style={{textDecoration: 'none', color: 'white'}}>
            <div className={styles.cardContainer}>
                <div className={styles.cardInnerContainer}>
                    <div style={{backgroundImage: `url(${thumbnail})`}} 
                        className={styles.thumbnail}>
                        <div className={styles.thumbnailInner}></div>
                    </div>
                    <div className={styles.titleContainer}>
                        <div className={styles.text}>
                            <p>{title}</p>
                            <p>{time}min</p>
                        </div>
                        <div onClick = {(e) => { heartClickHandler(e)}} className={styles.saveIcon}>
                            <Image src={heartIcon} alt='heart icon' width={22} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}