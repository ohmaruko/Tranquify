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
            <SearchBar />
            <div className={styles.categoryTitle}>
                <Image src='./images/suggestion.svg' alt='Suggestions' width={24} height={24} />
                <h2>Suggestions For You</h2>
            </div>
            <div className={styles.meditationCardsOuterContainer}>
                <div className={styles.meditationCardsInnerContainer}>
                    {
                        data.map((item, index) => {
                            return(
                                <MeditationCardSmall meditation={index} title={item.title} time={item.duration} thumbnail={item.thumbnail} favourite={item.isSaved}/>
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
