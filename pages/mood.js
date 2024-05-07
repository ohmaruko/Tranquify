import styles from '../styles/mood.module.css';
import TopBar from '@/components/TopBar';
import GreenButton from '@/components/GreenButton';
import Quiz01 from '@/components/Quiz01';
import Quiz02 from '@/components/Quiz02';
import Quiz03 from '@/components/Quiz03';
import Quiz04 from '@/components/Quiz04';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

export default function Mood() {
    const [scoreOne, setScoreOne] = useState(0);
    const [scoreTwo, setScoreTwo] = useState(0);
    const [scoreThree, setScoreThree] = useState(0);
    const [scoreFour, setScoreFour] = useState(0);
    const totalScore = Number(scoreOne) + Number(scoreTwo) + Number(scoreThree) + Number(scoreFour);

    function saveButtonHandler() {
        return (
            scoreOne === 0 || scoreFour === 0 ? ""
                : totalScore >= 4 && totalScore <= 10 ? "./result?mood=" + scoreOne + "&total=" + totalScore
                    : totalScore >= 11 && totalScore <= 15? "./result?mood=" + scoreOne + "&total=" + totalScore
                        : "./result?mood=" + scoreOne + "&total=" + totalScore
        )
    }
    //error message popup and sound
    const [isError, setIsError] = useState(false);
    function errorMessage() {
        if(scoreOne === 0 || scoreFour === 0) {
            new Audio("./audio/error_sound.mp3").play();
            setIsError(true);
        }
    }
    return(
        <>
            <div className={styles.container}>
                <TopBar backButton={true} link='homePage'/>
                <div className={styles.moodContainer}>
                    <div className={styles.date}>April 17, 2024</div>
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
                    <div onClick={() => errorMessage()}>
                        <GreenButton 
                            tabIndex = '11'
                            greenButtonText='Save' 
                            greenButtonLink={saveButtonHandler()}
                        />
                    </div>
                    {/* error message overley */}
                    {
                        isError?
                            <div className={styles.errorMessageContainer} onClick={() => setIsError(false)}>
                                <div className={styles.errorMessage}>
                                    <h2>Incomplete Input</h2>
                                    <p>Please answer all the questions</p>
                                </div>
                            </div>
                            :<></>
                    }
                </div>
                <div>
                    <Navigation />
                </div>
            </div>
        </>
    )
}