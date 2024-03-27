import styles from '../styles/MeditationMenu.module.css';
import CategoryCard from '@/components/CategoryCard';
import MeditationCardMedium from '@/components/MeditationCardMedium';
import LinkButton from '@/components/LinkButton';
import SearchBar from '@/components/SearchBar';

export default function meditationMenu() {
    return(
        <>
            <div className={styles.container}>
                <p>top bar component</p>
                <SearchBar />
                <h1 className={styles.message}>How would you like to improve your day?</h1>
                <div className={styles.subheading}>
                    <h1>Suggestions</h1>
                    <LinkButton link="#" linkText="View More" />
                </div>
                <div className={styles.meditationCards}>
                    <MeditationCardMedium title="Anxiety Away" time="10 min" source="#" thumbnail="/images/placeholder.png" />
                    <MeditationCardMedium title="Anxiety Away" time="10 min" source="#" thumbnail="/images/placeholder.png" />
                    <MeditationCardMedium title="Anxiety Away" time="10 min" source="#" thumbnail="/images/placeholder.png" />
                </div>
                <div className={styles.categoryCards}>
                    <CategoryCard category="Favourite" backgraound="/images/placeholder.png" link="/meditationFavourite"/>
                    <CategoryCard category="Mood and Goal" backgraound="/images/placeholder.png" link="/meditationFavourite"/>
                    <CategoryCard category="Time" backgraound="/images/placeholder.png" link="/meditationFavourite"/>
                    <CategoryCard category="Music" backgraound="/images/placeholder.png" link="/meditationFavourite"/>
                </div>
                <p>nav bar component</p>
            </div>
        </>
    )
}