import styles from '../styles/MeditationFavourite.module.css';
import Image from 'next/image'
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import MeditationCardSmall from '@/components/MeditationCardSmall';
import { meditationData } from '@/data/meditation';
import Navigation from '@/components/Navigation';

export default function MeditationFavourite() {
    let savedContents = [];
    meditationData.meditations.map( item => {
        if(item.isSaved){
            savedContents.push(item);
        }
    })
    return(
        
        <>
        <div className={styles.container}>
            <SearchBar />
            <div className={styles.categoryTitle}>
                <Image src='./images/favorite.svg' alt='Favorite' width={24} height={24} />
                <h2>Favorite</h2>
            </div>
            <div className={styles.meditationCardsOuterContainer}>
                <div className={styles.meditationCardsInnerContainer}>
                {
                    savedContents.map((item, index) => {
                        return(
                            <MeditationCardSmall meditation={index} title={item.title} time={item.duration} thumbnail={item.thumbnail} />
                        )
                    })
                }
                </div>
            </div>
            <Navigation />
        </div>
    </>
    )
}

