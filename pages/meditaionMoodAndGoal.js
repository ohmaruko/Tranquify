import styles from '../styles/MeditationMoodAndGoal.module.css';
import Image from 'next/image'
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import MeditationCardSmall from '@/components/MeditationCardSmall';
import { meditationData } from '@/data/meditation';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

export default function MeditationMoodAndGoal() {
    const [data, setData] = useState(meditationData);
    const selectedData = data.meditations;
    const menus = ["Growth", "Anger", "Stress", "Sadness", "Sleep"];
    // function handleMenu(e) {
    //     let filteredMeditation = {meditations:[]};
    //     meditationData &&meditationData.meditations.map((item, index) => {
    //         if(item.moodType.filter === "Anger") {
    //             filteredMeditation.meditations.push(item[index]);
    //         }
    //     })
    //     console.log("filtered" + filteredMeditation);
    //     // setData(filteredMeditation);
    // }
    return(
        
        <>
        <div className={styles.container}>
            <TopBar backButton={true} link="./meditationMenu" />
            <SearchBar />
            <div className={styles.categoryTitle}>
                <h2>Mood and Goals</h2>
            </div>
            <div className={styles.menu}>
                {/* {
                    menus && menus.map((e) => {
                        return (
                            <div onClick={handleMenu(e)}>{e}</div>
                        )
                    })
                } */}
            </div>
            <div className={styles.meditationCardsContainer}>
                <MeditationCardSmall meditation="0" title={selectedData[0].title} time={selectedData[0].duration} thumbnail={selectedData[0].thumbnail} />
                <MeditationCardSmall meditation="1" title={selectedData[1].title} time={selectedData[1].duration} thumbnail={selectedData[1].thumbnail} />
                <MeditationCardSmall meditation="2" title={selectedData[2].title} time={selectedData[2].duration} thumbnail={selectedData[2].thumbnail} />
            </div>
            <Navigation />
        </div>
    </>
    )
}
