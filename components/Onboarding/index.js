import RightArrowButton from "../RightArrowButton";
import LeftArrowButton from "../LeftArrowButton";
import LinkButton from "../LinkButton";
import styles from "./Onboarding.module.css";
import { useState } from 'react';
import lottie from "lottie-web";
import { useRef, useEffect } from "react";

export default function Onboarding() {
    const moodTrackerRef = useRef(null);
    const moodCalendarRef = useRef(null);
    const meditationRef = useRef(null);
    const welcomeRef = useRef(null);

    const refs = [moodTrackerRef, moodCalendarRef, meditationRef, welcomeRef];
    const path = ['/animations/moodtracker.json', '/animations/moodcalendar.json', '/animations/meditation.json', '/animations/welcome.json']

    const title = ["Mood Tracker","Mood Calendar","Meditation","Welcome!"];
    const text = [
        "Easily log your emotions throughout the day, gaining insights into your mental well-being and empowering yourself to better understand your mood patterns.",
        "Visualize your emotional journey over time with our intuitive mood calendar, allowing you to track progress, identify triggers, and celebrate moments of positivity along your mental health journey.",
        "Discover inner peace and mindfulness through guided meditation sessions tailored to your needs, helping you cultivate a sense of calm and clarity in your daily life.",
        "You're all set to embark on your journey towards better well-being."
    ];

    const video = [
        "/images/videos/1_tracker.mp4",
        "/images/videos/2_calendar.mp4",
        "/images/videos/3_meditation.mp4",
        "/images/videos/4_welcome.mp4"
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

    useEffect(() => {
        if (refs[currentIndex]?.current) {
            const anim = lottie.loadAnimation({
                container: refs[currentIndex].current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: path[currentIndex]
            });
    
            return () => {
                anim.destroy();
            };
        }
    }, [currentIndex, refs]);

    return (
        <div className={styles.content}>
            <div className={styles.text}>
                <div className={styles.graphic}>
                    <div ref={refs[currentIndex]} />
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
