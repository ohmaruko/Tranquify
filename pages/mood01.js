import styles from '../styles/mood01.module.css';
import TopBar from '@/components/TopBar';
import GreenButton from '@/components/GreenButton';
import Quiz01 from '@/components/Quiz01';
import Quiz02 from '@/components/Quiz02';
import Quiz03 from '@/components/Quiz03';
import Quiz04 from '@/components/Quiz04';
import { useState } from 'react';

export default function Mood01() {
    const [scoreOne, setScoreOne] = useState(0);
    const totalScore = scoreOne;
    // ??? have to click on button twice to store score
    console.log(scoreOne);
    return(
        <>
            <div className={styles.container}>
                <TopBar backButton={true} link='homePage'/>
                <div className={styles.moodContainer}>
                    <div className={styles.date}>April 3, 2024</div>
                    <div className={styles.quizContainer}>
                        <div className={styles.singleQuiz}>
                            <h2>How was your day?</h2>
                            <Quiz01 quiz01Score={(score) => setScoreOne(score)}/>
                        </div>
                        <div className={styles.singleQuiz}>
                            <h2>How stressed did you feel?</h2>
                            <Quiz02 />
                        </div>
                        <div className={styles.singleQuiz}>
                            <h2>How was your sleep last night?</h2>
                            <Quiz03 />
                        </div>
                        <div className={styles.singleQuiz}>
                            <h2>Have you meditated today?</h2>
                            <Quiz04 />
                        </div>
                    </div>
                    <GreenButton greenButtonText='Save' greenButtonLink='#'/>
                </div>
                <div>nav bar component</div>
            </div>
        </>
    )
}