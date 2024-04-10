import styles from './Quiz03.module.css';
import { useState } from "react";


export default function Quiz02({
    quiz03Score
}) {
    const [sleepLevel, setSleepLevel] = useState(5);
    quiz03Score(sleepLevel);

    return(
        <div className={styles.container}>
            <input
                className={styles.slider}
                aria-valuemin={1}
                type="range"
                min="1"
                max="5"
                step="2"
                value={sleepLevel}
                id="slider"
                onChange={(e) => {
                    setSleepLevel(e.target.value);
                }}
            />
            <div className={styles.sleepLevelLabels}>
                <p>Not Stressed</p>
                <p>Average</p>
                <p>Stressed</p>
            </div>
        </div>
    )
}