import styles from '../styles/MeditationMenu.module.css';
import CategoryCard from '@/components/CategoryCard';

export default function meditationMenu() {
    return(
        <>
            <div className={styles.container}>
                <p>top bar component</p>
                <p>search bar component</p>
                <h1 className={styles.message}>How would you like to improve your day?</h1>
                <div className={styles.meditationCards}>
                    <p>Card components</p>
                    <p>Card components</p>
                    <p>Card components</p>
                </div>
                <div className={styles.categoryCards}>
                    <CategoryCard category="Favourite" backgraound="/images/placeholder.png" link="/meditationFavourite"/>
                    <CategoryCard category="Mood and Goal" backgraound="/images/placeholder.png" link="/meditationFavourite"/>
                    <CategoryCard category="Time" backgraound="/images/placeholder.png" link="/meditationFavourite"/>
                    <CategoryCard category="Music" backgraound="/images/placeholder.png" link="/meditationFavourite"/>
                </div>
            </div>
        </>
    )
}