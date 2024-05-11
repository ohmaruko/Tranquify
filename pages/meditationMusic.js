import styles from '../styles/MeditationMusic.module.css';
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
    let natureCategoryId = [];
    meditationData && meditationData.meditations.map((item, index)=> {
        if(item.misicType.filter(music => music === "nature").length > 0){
            console.log(item.title);
            natureCategoryId.push(index);
        }
    })
    const [dataId, setDataId] = useState(natureCategoryId);

    // filtering function for tab menu
    const menus = ["Classic", "Nature", "Sound Healing"];
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
            <div onClick={handleBack}>
                <Image src='/images/back-button.svg' width={21} height={19} className={styles.backButton}/>
            </div>
            <SearchBar />
            <div className={styles.categoryTitle}>
                <h2>Music</h2>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menu}>
                    {
                        menus && menus.map((e) => {
                            return (
                                <button 
                                    onClick={() => {handleMenu(e); changeColor(e)}}
                                    className={styles.tabButton}
                                    style = {{ backgroundColor: selectedButton === e ? "var(--normal-green)": "var(--light-gray", lineHeight: "80%"}}
                                    >{e}
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
