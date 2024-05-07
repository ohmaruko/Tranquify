import Image from "next/image";
import styles from './Quiz01.module.css';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function Quiz01({
    quiz01Score
}) {
    const moodsGrey = ['/images/great-icon-grey.svg', '/images/good-icon-grey.svg', '/images/ok-icon-grey.svg', '/images/bad-icon-grey.svg', '/images/terrible-icon-grey.svg']
    const moodsColour = ['/images/great-icon.svg', '/images/good-icon.svg', '/images/ok-icon.svg', '/images/bad-icon.svg', '/images/terrible-icon.svg']
    const labels = ['Great', 'Good', 'Ok', 'Bad', 'Terrible']
    const altText = ['Great Icon', 'Good Icon', 'Ok Icon', 'Bad Icon', 'Terrible Icon']
    const scores = [5, 4, 3, 2, 1]

    const [indexSelected, setIndexSelected] = useState();
    const [indexRecorded, setIndexRecorded] = useState();

    const router = useRouter();
    const mood = router.query.mood;

    useEffect(() => {
        setIndexRecorded(mood[0])
    }, [mood])

    console.log("mood " + mood)
    console.log("index " + indexRecorded)
  

    return(
        <div className={styles.moodsContainer}>
            <div className={styles.moods}>
                {   
                    moodsGrey.map((icons, index) => {
                        return(
                            <Image 
                                tabIndex={index + 3}
                                key={index}
                                src={mood ? index == indexRecorded? moodsColour[index]:icons
                                    : index === indexSelected? moodsColour[index]:icons}
                                alt={altText[index]} 
                                width={55} height={55} 
                                onClick= {() => {
                                    setIndexSelected(index);
                                    quiz01Score(scores[index]);
                                }}
                                onKeyDown={(event) => {
                                    if(event.key === 'Enter'){
                                        setIndexSelected(index);
                                        quiz01Score(scores[index]);
                                    }
                                }}
                            />
                        )
                    }
                    )
                }
            </div>
            <div className={styles.moods}>
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