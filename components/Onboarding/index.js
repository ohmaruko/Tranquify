import RightArrowButton from "../RightArrowButton";
import LeftArrowButton from "../LeftArrowButton";
import LinkButton from "../LinkButton";
import styles from "./Onboarding.module.css";
import { useState } from 'react';
import videoLoop from '/images/videos/1_tracker.mp4';

export default function Onboarding() {
    const title = ["Mood Tracker","Mood Calendar","Meditation","Welcome!"];
    const text = [
        "Easily log your emotions throughout the day, gaining insights into your mental well-being and empowering yourself to better understand your mood patterns.",
        "Visualize your emotional journey over time with our intuitive mood calendar, allowing you to track progress, identify triggers, and celebrate moments of positivity along your mental health journey.",
        "Discover inner peace and mindfulness through guided meditation sessions tailored to your needs, helping you cultivate a sense of calm and clarity in your daily life.",
        "You're all set to embark on your journey towards better well-being."
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [display, setDisplay] = useState({visibility: "hidden"});
    const [link, setLink] = useState("");

    const handleRightArrowButton = () => {
        setCurrentIndex((index) => (index + 1));
        if(currentIndex >= 2){
            setLink("/homePage");
        } else {
            setLink("");
        }
        if(currentIndex > -2){
            setDisplay({visibility: "visible"});
        }
        console.log(currentIndex);
    }

    const handleLeftArrowButton = () => {
        setCurrentIndex((index) => (index - 1));
        if(currentIndex <= 1){
            setDisplay({visibility: "hidden"});
        } else {
            setDisplay({visibility: "visible"});
        }
        if(currentIndex < 2) {
            setLink("");
        }
        console.log(currentIndex);
    }

    return (
        <div className={styles.content}>
            <div className={styles.text}>
                <div className={styles.graphic}>
                <Video
                    src={videoLoop}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                ></Video>
                </div>
                <h1 className={styles.onboardingTitle}>{title[currentIndex]}</h1>
                <p className={styles.onboardingText}>
                    {text[currentIndex]}
                </p>
            </div>

            <div className={styles.navigation}>
                <LeftArrowButton 
                    onClick = {()=> {handleLeftArrowButton()}}
                    displayStyle = {display}
                />
                <div className={styles.dotContainer}>
                    <div className={`${styles.dot} ${currentIndex === 0 ? styles.dotActive : "" }`}></div>
                    <div className={`${styles.dot} ${currentIndex === 1 ? styles.dotActive : "" }`}></div>
                    <div className={`${styles.dot} ${currentIndex === 2 ? styles.dotActive : "" }`}></div>
                    <div className={`${styles.dot} ${currentIndex === 3 ? styles.dotActive : "" }`}></div>
                </div>
                <RightArrowButton 
                    rightArrowButtonLink={link} 
                    onClick = {()=> {handleRightArrowButton()}}
                />
            </div>
            <LinkButton link="/homePage" linkText="Skip"/>
        </div>
    )
}
