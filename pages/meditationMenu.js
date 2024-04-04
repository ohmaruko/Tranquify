import styles from '../styles/MeditationMenu.module.css';
import SearchBar from '@/components/SearchBar';
import LinkButton from '@/components/LinkButton';
import CategoryCard from '@/components/CategoryCard';
import MeditationCardMedium from '@/components/MeditationCardMedium';
import { meditationData } from '@/data/meditation';
import { useState } from 'react';

export default function MeditationMenu() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [media, setMedia] = useState();
    const [mediaTitle, setMediaTitle] = useState();

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
                    <div onClick={()=> {
                        setIsDisplayed(true); 
                        setMedia(meditationData.meditations[0].source);
                        setMediaTitle(meditationData.meditations[0].title)
                        }}>
                        <MeditationCardMedium title={meditationData.meditations[0].title} time={meditationData.meditations[0].duration + "min"} thumbnail={meditationData.meditations[0].thumbnail} />
                    </div>
                    <div onClick={()=> {
                        setIsDisplayed(true); 
                        setMedia(meditationData.meditations[1].source);
                        setMediaTitle(meditationData.meditations[1].title)
                        }}>
                        <MeditationCardMedium title={meditationData.meditations[1].title} time={meditationData.meditations[1].duration + "min"} thumbnail={meditationData.meditations[1].thumbnail} />
                    </div>
                    <div onClick={()=> {
                        setIsDisplayed(true); 
                        setMedia(meditationData.meditations[2].source);
                        setMediaTitle(meditationData.meditations[2].title)
                        }}>
                        <MeditationCardMedium title={meditationData.meditations[2].title} time={meditationData.meditations[2].duration + "min"} thumbnail={meditationData.meditations[2].thumbnail} />
                    </div>
                </div>
                {/* Overlay screen */}
                <div className={styles.overlay}
                    style={{display: isDisplayed ? "block" : "none"}}>
                        <div className={styles.overlayInnerContainer}>
                            <div className={styles.video}>
                                {/* change here depends on source (now youtube)*/}
                                <iframe width="420" height="345" src={media}
                                frameborder="0" border="0" cellspacing="0">
                                </iframe>
                            </div>
                            <div><h1>{mediaTitle}</h1></div>
                            <div onClick={()=>setIsDisplayed(false)} className={styles.closeButton}>close</div>
                        </div>
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