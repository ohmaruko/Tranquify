import styles from '../styles/MeditationFavourite.module.css';
import Image from 'next/image'
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import MeditationCardSmall from '@/components/MeditationCardSmall';
import { meditationData } from '@/data/meditation';
import Navigation from '@/components/Navigation';

export default function MeditationFavourite() {
    const data = meditationData.meditations;
    return(
        
        <>
        <div className={styles.container}>
            <TopBar backButton={true} link="./meditationMenu" />
            <SearchBar />
            <div className={styles.categoryTitle}>
                <Image src='/Images/favorite.svg' alt='Favorite' width={24} height={24} />
                <h2>Favorite</h2>
            </div>
            <div className={styles.meditationCardsContainer}>
                <MeditationCardSmall meditation="0" title={data[0].title} time={data[0].duration} thumbnail={data[0].thumbnail} />
                <MeditationCardSmall meditation="1" title={data[1].title} time={data[1].duration} thumbnail={data[1].thumbnail} />
                <MeditationCardSmall meditation="2" title={data[2].title} time={data[2].duration} thumbnail={data[2].thumbnail} />
            </div>
            <Navigation />
        </div>
    </>
    )
}

