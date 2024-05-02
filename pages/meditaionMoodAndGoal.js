import styles from '../styles/MeditationMoodAndGoal.module.css';
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import MeditationCardSmall from '@/components/MeditationCardSmall';
import { meditationData } from '@/data/meditation';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

export default function MeditationMoodAndGoal() {
    // default menu
    let stressCategoryId = [];
    meditationData && meditationData.meditations.map((item, index)=> {
        if(item.moodType.filter(mood => mood === "stress").length > 0){
            console.log(item.title);
            stressCategoryId.push(index);
        }
    })
    const [dataId, setDataId] = useState(stressCategoryId);

    // filtering function for tab menu
    const menus = ["Growth", "Anger", "Stress", "Sadness", "Sleep"];
    function handleMenu(category) {
        let filteredMeditationId = [];
        meditationData && meditationData.meditations.map((item, index) => {
            if(item.moodType.filter(mood => mood === category.toLowerCase()).length > 0) {
                filteredMeditationId.push(index);
            }
        })
        setDataId(filteredMeditationId);
    }

    // style color for tab button
    const [selectedButton, setSelectedButton] = useState("Stress");
    function changeColor(category) {
        setSelectedButton(category);
    }

    return(
        <>
        <div className={styles.container}>
            <TopBar backButton={true} link="./meditationMenu" />
            <SearchBar />
            <div className={styles.categoryTitle}>
                <h2>Mood and Goals</h2>
            </div>
            <div className={styles.menu}>
                {
                    menus && menus.map((e) => {
                        return (
                            <button 
                                onClick={() => {handleMenu(e); changeColor(e)}}
                                className={styles.tabButton}
                                style = {{ backgroundColor: selectedButton === e ? "var(--normal-green)": "var(--light-gray",}}
                                >{e}
                            </button>
                        )
                    })
                }
            </div>
            <div className={styles.meditationCardsContainer}>
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
            <Navigation />
        </div>
    </>
    )
}
