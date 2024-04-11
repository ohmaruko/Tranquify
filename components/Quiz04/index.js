import Image from 'next/image';
import styles from './Quiz04.module.css';
import { useState } from 'react';

export default function Quiz04({
    quiz04Score
}) {
    const meditationGrey = ['/images/yes-grey.svg', '/images/no-grey.svg']
    const meditationGreen = ['/images/yes-green.svg', '/images/no-green.svg']
    const labels = ['Yes', 'No']
    const altText = ['Yes Icon', 'No Icon']
    const scores = [5, 1]

    const [indexSelected, setIndexSelected] = useState();
    return(
        <div className={styles.meditationContainer}>
            <div className={styles.meditation}>
                {   
                    meditationGrey.map((icons, index) => {
                        return(
                            <Image 
                                key={index}
                                src={index === indexSelected? meditationGreen[index]:icons}
                                alt={altText[index]} 
                                width={55} height={55} 
                                onClick= {() => {
                                    setIndexSelected(index);
                                    quiz04Score(scores[index]);
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