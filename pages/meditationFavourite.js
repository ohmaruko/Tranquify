import styles from '../styles/MeditationFavourite.module.css';
import Image from 'next/image'
import SearchBar from '@/components/SearchBar';
import MeditationCardSmall from '@/components/MeditationCardSmall';
import { meditationData } from '@/data/meditation';
import Navigation from '@/components/Navigation';
import { useRouter } from 'next/router';

export default function MeditationFavourite() {
     // back button
     const router = useRouter();
     const handleBack = () => {
         router.back();
     };

    let savedContents = [];
    meditationData.meditations.map( item => {
        if(item.isSaved){
            savedContents.push(item);
        }
    })
    return(
        
        <>
        <div className={styles.container}>
            <div onClick={handleBack}>
                <Image src='/images/back-button.svg' width={21} height={19} className={styles.backButton}/>
            </div>
            <SearchBar />
            <div className={styles.categoryTitle}>
                <Image src='./images/favorite.svg' alt='Favorite' width={24} height={24} />
                <h2>Favourite</h2>
            </div>
            <div className={styles.meditationCardsOuterContainer}>
                <div className={styles.meditationCardsInnerContainer}>
                {
                    savedContents.map((item, index) => {
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

