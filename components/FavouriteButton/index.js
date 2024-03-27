
import styles from "./FavouriteButton.module.css";
import Link from 'next/link';

export default function FavouriteButton({link}) {
    return (
        <div>
            <Link href={link} className={styles.favouriteButtonContainer}>
                <button className={styles.favouriteButton}>
                    <div className={styles.favouriteText}>
                        <p className={styles.title}>Favourites</p>
                        <p className={styles.text}>Quick access to your saved favourites</p>
                    </div>
                    <div className={styles.graphic}></div>
                </button>
            </Link>
        </div>
    )
}