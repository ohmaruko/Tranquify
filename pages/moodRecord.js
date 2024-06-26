import styles from '../styles/moodRecord.module.css';
import Quiz01 from '@/components/Quiz01';
import Quiz02 from '@/components/Quiz02';
import Quiz03 from '@/components/Quiz03';
import Quiz04 from '@/components/Quiz04';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'

export default function Mood() {
    const [scoreOne, setScoreOne] = useState(0);
    const [scoreTwo, setScoreTwo] = useState(0);
    const [scoreThree, setScoreThree] = useState(0);
    const [scoreFour, setScoreFour] = useState(0);
    const totalScore = Number(scoreOne) + Number(scoreTwo) + Number(scoreThree) + Number(scoreFour);

    const router = useRouter();
    const mood = router.query.mood;

    const handleBack = () => {
        router.back();
    };
    
    function saveButtonHandler() {
        return (
            scoreOne === 0 || scoreFour === 0 ? ""
                : totalScore >= 4 && totalScore <= 10 ? "./result?mood=" + scoreOne + "&total=" + totalScore
                    : totalScore >= 11 && totalScore <= 15? "./result?mood=" + scoreOne + "&total=" + totalScore
                        : "./result?mood=" + scoreOne + "&total=" + totalScore
        )
    }
    

    return(
        <>
            <div className={styles.container}>
                <div onClick={handleBack}>
                    <Image src='/images/back-button.svg' width={21} height={19} className={styles.closeButton}/>
                </div>
                <div className={styles.moodContainer}>
                    <div className={styles.recordTitle}>Your Record</div>
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
                </div>
                <div>
                    <Navigation />
                </div>
            </div>
        </>
    )
}