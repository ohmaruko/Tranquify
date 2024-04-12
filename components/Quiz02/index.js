import styles from './Quiz02.module.css';
import { useState } from "react";


export default function Quiz02({
    quiz02Score
}) {
    const [stressLevel, setStressLevel] = useState(5);
    quiz02Score(stressLevel);
<<<<<<< HEAD

    return(
        <div className={styles.container}>
=======
    return(
        <div className={styles.container} tabIndex='8'>
>>>>>>> origin/main
            <input
                className={styles.slider}
                aria-valuemin={1}
                type="range"
                min="1"
                max="5"
                step="2"
                value={stressLevel}
                id="slider"
                onChange={(e) => {
                    setStressLevel(e.target.value);
                }}
            />
            <div className={styles.stressLevelLabels}>
                <p>Not Stressed</p>
                <p>Average</p>
                <p>Stressed</p>
            </div>
        </div>
    )
}