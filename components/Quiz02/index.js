import styles from './Quiz02.module.css';
import { useState } from "react";


export default function Quiz02({
    quiz02Score
}) {
    const [stressLevel, setStressLevel] = useState(5);
    quiz02Score(stressLevel);

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
                value={stressLevel}
                id="slider"
                tabIndex="8"
                onChange={(e) => {
                    setStressLevel(e.target.value);
                }}
                // onKeyDown={handleKeyDown}
            />
            <div className={styles.stressLevelLabels}>
                <p>Not Stressed</p>
                <p>Average</p>
                <p>Stressed</p>
            </div>
        </div>
    )
}