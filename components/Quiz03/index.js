import styles from './Quiz03.module.css';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function Quiz02({
    quiz03Score
}) {
    const [sleepLevel, setSleepLevel] = useState(5);
    const [sleepLevelRecorded, setSleepLevelRecorded] = useState();
    quiz03Score(sleepLevel);

    const router = useRouter();
    const mood = router.query.mood;

    if(mood) {
        useEffect(() => {
            setSleepLevelRecorded(mood[2])
        }, [])
    }
    

    // const handleKeyDown = (event) => {
    //     if(event.target.tabIndex === 3){
    //         if(event.key === "ArrowRight" && stressLevel >= 3){
    //             event.preventDefault();
    //             setStressLevel(parseInt(stressLevel) - 2);
    //         } else if (event.key === "ArrowLeft" && stressLevel <= 3) {
    //             event.preventDefault();
    //             setStressLevel(parseInt(stressLevel) + 2);
    //         }
    //     }
    // }

    return(
        <div className={styles.container}>
            <input
                className={styles.slider}
                aria-valuemin={1}
                type="range"
                min="1"
                max="5"
                step="2"
                value={mood ? sleepLevelRecorded : sleepLevel}
                tabIndex='9'
                id="slider"
                onChange={(e) => {
                    setSleepLevel(e.target.value);
                }}
                // onKeyDown={handleKeyDown}
            />
            <div className={styles.sleepLevelLabels}>
                <p>Great</p>
                <p>Average</p>
                <p>Poor</p>
            </div>
        </div>
    )
}