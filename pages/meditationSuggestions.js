import styles from '../styles/MeditationSuggestions.module.css';
import Image from 'next/image'
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import MeditationCardSmall from '@/components/MeditationCardSmall';
import { meditationData } from '@/data/meditation';
import Navigation from '@/components/Navigation';

export default function MeditationSuggestions() {
    const data = meditationData.meditations;
    return(
        
        <>
        <div className={styles.container}>
            <TopBar backButton={true} link="./meditationMenu" />
            <SearchBar />
            <div className={styles.categoryTitle}>
                <Image src='/Images/suggestion.svg' alt='Suggestions' width={24} height={24} />
                <h2>Suggestions For You</h2>
            </div>
            <div className={styles.meditationCardsContainer}>
                <MeditationCardSmall meditation="0" title={data[0].title} time={data[0].duration} thumbnail={data[0].thumbnail} />
                <MeditationCardSmall meditation="1" title={data[1].title} time={data[1].duration} thumbnail={data[1].thumbnail} />
                <MeditationCardSmall meditation="2" title={data[2].title} time={data[2].duration} thumbnail={data[2].thumbnail} />
                <MeditationCardSmall meditation="0" title={data[0].title} time={data[0].duration} thumbnail={data[0].thumbnail} />
                <MeditationCardSmall meditation="1" title={data[1].title} time={data[1].duration} thumbnail={data[1].thumbnail} />
                <MeditationCardSmall meditation="2" title={data[2].title} time={data[2].duration} thumbnail={data[2].thumbnail} />
            </div>
            <Navigation />
        </div>
    </>
    )
}
