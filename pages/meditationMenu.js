import styles from '../styles/MeditationMenu.module.css';
import Image from 'next/image'
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import LinkButton from '@/components/LinkButton';
import CategoryCard from '@/components/CategoryCard';
import MeditationCardMedium from '@/components/MeditationCardMedium';
import { meditationData } from '@/data/meditation';
import { useState } from 'react';

export default function MeditationMenu() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [media, setMedia] = useState({});

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
                    <LinkButton link="#" linkText="View More" />
                </div>
                <div className={styles.meditationCards}>
                    <div onClick={()=> {
                        setIsDisplayed(true); 
                        setMedia(meditationData.meditations[0]);
                        }}>
                        <MeditationCardMedium title={meditationData.meditations[0].title} time={meditationData.meditations[0].duration} thumbnail={meditationData.meditations[0].thumbnail} />
                    </div>
                    <div onClick={()=> {
                        setIsDisplayed(true); 
                        setMedia(meditationData.meditations[1]);
                        }}>
                        <MeditationCardMedium title={meditationData.meditations[1].title} time={meditationData.meditations[1].duration} thumbnail={meditationData.meditations[1].thumbnail} />
                    </div>
                    <div onClick={()=> {
                        setIsDisplayed(true); 
                        setMedia(meditationData.meditations[2]);
                        }}>
                        <MeditationCardMedium title={meditationData.meditations[2].title} time={meditationData.meditations[2].duration} thumbnail={meditationData.meditations[2].thumbnail} />
                    </div>
                </div>
                {/* Overlay screen */}
                {/* Make a new page for this to make it reusable */}
                <div className={styles.overlay}
                    style={{display: isDisplayed ? "block" : "none"}}>
                        <div className={styles.overlayInnerContainer}>
                            <div onClick={()=>setIsDisplayed(false)} className={styles.closeButton}>
                                <Image src='/images/closeButton.svg' alt='Close Button Icon' width={32} height={32} />
                            </div>
                            <iframe width="319" height="217" src={media.source}
                                frameborder="0" border="0" cellspacing="0" 
                                className={styles.video}>
                            </iframe>   
                            <div className={styles.textContainer}>
                                <div className={styles.title}>
                                    <h2>{media.title}</h2>
                                    <p>{media.duration}min</p>
                                </div>
                                <p>{media.description}</p>
                            </div>
                        </div>
                </div>

                <div className={styles.categoryCards}>
                    <CategoryCard category="Favourite" link="/meditationFavourite"/>
                    <CategoryCard category="Mood and Goal" link="/meditationFavourite"/>
                    <CategoryCard category="Time" link="/meditationFavourite"/>
                    <CategoryCard category="Music" link="/meditationFavourite"/>
                </div>
                <p>nav bar component</p>
            </div>
        </>
    )
}