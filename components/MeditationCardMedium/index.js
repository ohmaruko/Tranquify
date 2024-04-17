import styles from './MeditationCardMedium.module.css'
import { useState } from 'react';
import Link from 'next/link';

export default function MeditationCardMedium({
    title,
    time,
    meditation,
    thumbnail
}) {
    const [isSaved, setIsSaved] = useState("#00000000");
    function heartClickHandler(e) {
        isSaved === "#00000000" ? setIsSaved("#fff"):setIsSaved("#00000000");
        e.stopPropagation();
        e.preventDefault();
    }
    return(
        <div className={styles.cardContainer}>
            <Link href={ "./meditationPlayer?media=" + meditation} style={{textDecoration: 'none', color: 'black'}}>
                <div>
                    <div style={{backgroundImage: `url(${thumbnail})`, width: '100%', height: '100%'}} 
                        className={styles.thumbnail}
                    >
                        <svg onClick = {(e) => { heartClickHandler(e)}} 
                            className={styles.heart} xmlns="http://www.w3.org/2000/svg" 
                            width="20" height="19" viewBox="0 0 21 20" fill="none"
                            >
                            <path d="M10.3433 18.9999L8.95818 17.6999C7.35022 16.1832 6.02087 14.8749 4.97012 13.7749C3.91937 12.6749 3.08355 11.6874 2.46266 10.8124C1.84176 9.9374 1.40793 9.13324 1.16116 8.3999C0.914399 7.66657 0.791016 6.91657 0.791016 6.1499C0.791016 4.58324 1.29251 3.2749 2.29549 2.2249C3.29848 1.1749 4.54823 0.649902 6.04475 0.649902C6.87261 0.649902 7.66067 0.833236 8.40893 1.1999C9.15718 1.56657 9.80196 2.08324 10.3433 2.7499C10.8845 2.08324 11.5293 1.56657 12.2776 1.1999C13.0258 0.833236 13.8139 0.649902 14.6418 0.649902C16.1383 0.649902 17.388 1.1749 18.391 2.2249C19.394 3.2749 19.8955 4.58324 19.8955 6.1499C19.8955 6.91657 19.7721 7.66657 19.5253 8.3999C19.2786 9.13324 18.8447 9.9374 18.2239 10.8124C17.603 11.6874 16.7671 12.6749 15.7164 13.7749C14.6656 14.8749 13.3363 16.1832 11.7283 17.6999L10.3433 18.9999Z"
                            fill={isSaved} stroke="#fff" strokeWidth="2px"
                            />
                        </svg>
                    </div>
                </div>
                <div className={styles.text}>
                    <p>{title}</p>
                    <p>{time}min</p>
                </div>
            </Link>
        </div>
    )
}