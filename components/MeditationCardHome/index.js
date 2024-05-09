import styles from './MeditationCardHome.module.css'
import Link from 'next/link';
import Image from "next/image";

export default function MeditationCardHome({
    link, title, meditation
}) {
    return(
        <div className={styles.cardContainer}>
            <Link href={ "./meditationPlayer?media=" + meditation} style={{textDecoration: 'none', color: 'black'}}>
                <div className={styles.card}>
                    <div className={styles.graphicContainer}>
                        <Image src={link} width="134" height="127" className={styles.graphic}/>
                    </div>
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    )
}