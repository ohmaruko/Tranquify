
import styles from "./FavouriteButton.module.css";
import Link from 'next/link';
import Image from "next/image";

export default function FavouriteButton({link}) {
    return (
        <div>
            <Link href={link} className={styles.favouriteButtonContainer}>
                <button className={styles.favouriteButton}>
                    <div className={styles.favouriteText}>
                        <p className={styles.title}>Favourites</p>
                        <p className={styles.text}>Quick access to your favourite meditation content</p>
                    </div>
                    <div>
                        <Image src="/images/thumbnails/anxietyaway.png" width="135" height="135" className={styles.graphic}/>
                    </div>
                </button>
            </Link>
        </div>
    )
}