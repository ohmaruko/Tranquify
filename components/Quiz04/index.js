import Image from 'next/image';
import styles from './Quiz04.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Quiz04({
    quiz04Score
}) {
    const meditationGrey = ['/images/yes-grey.svg', '/images/no-grey.svg']
    const meditationGreen = ['/images/yes-green.svg', '/images/no-green.svg']
    const labels = ['Yes', 'No']
    const altText = ['Yes Icon', 'No Icon']
    const scores = [5, 1]

    const [indexSelected, setIndexSelected] = useState();

    const [indexRecorded, setIndexRecorded] = useState();

    const router = useRouter();
    const mood = router.query.mood;

    useEffect(() => {
        setIndexRecorded(mood[3])
    }, [mood])

    return(
        <div className={styles.meditationContainer}>
            <div className={styles.meditation}>
                {   
                    meditationGrey.map((icons, index) => {
                        return(
                            <Image 
                                tabIndex={index + 10}
                                key={index}
                                src={mood ? index == indexRecorded? meditationGreen[index]:icons
                                    : index === indexSelected? meditationGreen[index]:icons}
                                alt={altText[index]} 
                                width={55} height={55} 
                                onClick= {() => {
                                    setIndexSelected(index);
                                    quiz04Score(scores[index]);
                                }}
                                onKeyDown={(event) => {
                                    if(event.key === 'Enter'){
                                        setIndexSelected(index);
                                        quiz04Score(scores[index]);
                                    }
                                }}
                            />
                        )
                    }
                    )
                }
            </div>
            <div className={styles.meditation}>
                {
                    labels.map((label) => {
                        return(
                            <div className={styles.singleLabel}>
                                <p>{label}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}