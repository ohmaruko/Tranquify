import styles from '../styles/MeditationMenu.module.css';
import Image from 'next/image'
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import LinkButton from '@/components/LinkButton';
import CategoryCard from '@/components/CategoryCard';
import MeditationCardMedium from '@/components/MeditationCardMedium';
import Navigation from '@/components/Navigation';
import { meditationData } from '@/data/meditation';

export default function MeditationMenu() {
    const data = meditationData.meditations

    return(
        <>
            <div className={styles.container}>
                <TopBar backButton={false} link="#" />
                <SearchBar />
                <div className={styles.messageContainer}>
                    <Image src='/images/bad-mascot.svg' alt='Bad mood mascot' width={58} height={76} className={styles.badMascot}/>
                    <h1 className={styles.message}>How would you like to improve your day?</h1>
                    <Image src='/images/good-mascot.svg' alt='Good mood mascot' width={58} height={76} />
                </div>
                <div className={styles.suggestions}>
                    <h2>Suggestions</h2>
                    <LinkButton link="./meditationSuggestions" linkText="View More" />
                </div>
                <div className={styles.meditationCards}>
                    <MeditationCardMedium meditation="0" title={data[0].title} time={data[0].duration} thumbnail={data[0].thumbnail} />
                    <MeditationCardMedium meditation="1" title={data[1].title} time={data[1].duration} thumbnail={data[1].thumbnail} />
                    <MeditationCardMedium meditation="2" title={data[2].title} time={data[2].duration} thumbnail={data[2].thumbnail} />
                </div>
                <div className={styles.categoryCards}>
                    <CategoryCard category="Favourite" link="/meditationFavourite"/>
                    <CategoryCard category="Mood and Goal" link="/meditationFavourite"/>
                    <CategoryCard category="Time" link="/meditationFavourite"/>
                    <CategoryCard category="Music" link="/meditationFavourite"/>
                </div>
                
                <div>
                    <Navigation/>
                </div>
            </div>
        </>
    )
}