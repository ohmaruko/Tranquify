import styles from '../styles/MeditationMusic.module.css';
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import MeditationCardSmall from '@/components/MeditationCardSmall';
import { meditationData } from '@/data/meditation';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

export default function MeditationMoodAndGoal() {
    // default menu
    let natureCategoryId = [];
    meditationData && meditationData.meditations.map((item, index)=> {
        if(item.misicType.filter(music => music === "nature").length > 0){
            console.log(item.title);
            natureCategoryId.push(index);
        }
    })
    const [dataId, setDataId] = useState(natureCategoryId);

    // filtering function for tab menu
    const menus = ["Classic", "Nature", "Mantra"];
    function handleMenu(category) {
        let filteredMeditationId = [];
        meditationData && meditationData.meditations.map((item, index) => {
            if(item.misicType.filter(music => music === category.toLowerCase()).length > 0) {
                filteredMeditationId.push(index);
            }
        })
        setDataId(filteredMeditationId);
    }

    // style color for tab button
    const [selectedButton, setSelectedButton] = useState("Nature");
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
