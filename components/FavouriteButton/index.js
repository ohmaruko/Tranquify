
import styles from "./FavouriteButton.module.css";
import Link from 'next/link';
import Image from "next/image";

export default function FavouriteButton({link}) {
    return (
        <div>
            <Link href={link} className={styles.favouriteButton}>
                <div className={styles.favouriteText}>
                    <p className={styles.title}>Favourites</p>
                    <p className={styles.text}>Quick access to your favourite meditation content</p>                    </div>
                    <div className={styles.mascot}>
                        <Image src="/images/good-icon.svg" width="180" height="180" className={styles.graphic}/>
                    </div>
            </Link>
        </div>
    )
}