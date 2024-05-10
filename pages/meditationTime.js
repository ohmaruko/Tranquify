import styles from '../styles/MeditationTime.module.css';
import SearchBar from '@/components/SearchBar';
import MeditationCardSmall from '@/components/MeditationCardSmall';
import { meditationData } from '@/data/meditation';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
  
export default function MeditationMoodAndGoal() {
     // back button
     const router = useRouter();
     const handleBack = () => {
         router.back();
     };
    // default menu
    let defaultDurationId = [];
    meditationData && meditationData.meditations.map((item, index)=> {
        if(item.duration === 10){
            console.log(item.title);
            defaultDurationId.push(index);
        }
    })
    const [dataId, setDataId] = useState(defaultDurationId);

    // filtering function for tab menu
    const menus = [3, 5, 10, 15, 20 + "+"];
    function handleMenu(category) {
        let filteredMeditationId = [];
        meditationData && meditationData.meditations.map((item, index) => {
            if(item.duration === category) {
                filteredMeditationId.push(index);
            }
        })
        setDataId(filteredMeditationId);
    }

    // style color for tab button
    const [selectedButton, setSelectedButton] = useState(10);
    function changeColor(category) {
        setSelectedButton(category);
    }

    return(
        <>
        <div className={styles.container}>
            <div onClick={handleBack}>
                <Image src='/images/back-button.svg' width={21} height={19} className={styles.backButton}/>
            </div>
            <SearchBar />
            <div className={styles.categoryTitle}>
                <h2>Time</h2>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menu}>
                    {
                        menus && menus.map((e) => {
                            return (
                                <button 
                                    onClick={() => {handleMenu(e); changeColor(e)}}
                                    className={styles.tabButton}
                                    style = {{ backgroundColor: selectedButton === e ? "var(--normal-green)": "var(--light-gray",}}
                                    >{e}min
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.meditationCardsOuterContainer}>
                <div className={styles.meditationCardsInnerContainer}>
                    {
                        dataId.map( id => {
                            let meditationContent = meditationData.meditations[id];
                            console.log(meditationContent.title);
                            return(
                                <MeditationCardSmall meditation={id} title={meditationContent.title} time={meditationContent.duration} thumbnail={meditationContent.thumbnail} />
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
