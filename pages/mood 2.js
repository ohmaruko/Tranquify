import styles from '../styles/mood.module.css';
import TopBar from '@/components/TopBar';
import GreenButton from '@/components/GreenButton';
import Quiz01 from '@/components/Quiz01';
import Quiz02 from '@/components/Quiz02';
import Quiz03 from '@/components/Quiz03';
import Quiz04 from '@/components/Quiz04';
import { useState } from 'react';

export default function Mood() {
    const [scoreOne, setScoreOne] = useState(0);
    const [scoreTwo, setScoreTwo] = useState(0);
    const [scoreThree, setScoreThree] = useState(0);
    const [scoreFour, setScoreFour] = useState(0);
    const totalScore = Number(scoreOne) + Number(scoreTwo) + Number(scoreThree) + Number(scoreFour);

    function saveButtonHandler() {
        return (
            totalScore >= 4 && totalScore <= 10 ? "./resultLow?mood=" + scoreOne
                : totalScore >= 11 && totalScore <= 15? "./resultMedium?mood=" + scoreOne
                : "./resultHigh?mood=" + scoreOne
        )
    }

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
                            <Quiz02 quiz02Score={(score) => setScoreTwo(score)}/>
                        </div>
                        <div className={styles.singleQuiz}>
                            <h2>How was your sleep last night?</h2>
                            <Quiz03 quiz03Score={(score) => setScoreThree(score)}/>
                        </div>
                        <div className={styles.singleQuiz}>
                            <h2>Have you meditated today?</h2>
                            <Quiz04 quiz04Score={(score) => setScoreFour(score)}/>
                        </div>
                    </div>
                    <GreenButton 
                        greenButtonText='Save' 
                        greenButtonLink={saveButtonHandler()}
                    />
                </div>
                <div>nav bar component</div>
            </div>
        </>
    )
}