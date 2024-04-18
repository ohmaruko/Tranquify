import styles from '../styles/MeditationFavourite.module.css';
import MeditationCardSmall from '@/components/MeditationCardSmall';
import { meditationData } from '@/data/meditation';

export default function MeditationFavourite() {
    const data = meditationData.meditations
    return(
        <>
            <h1 className={styles.a}>Meditation Favourite page</h1>
            <MeditationCardSmall meditation="0" title={data[0].title} time={data[0].duration} thumbnail={data[0].thumbnail} />
            <MeditationCardSmall meditation="0" title={data[1].title} time={data[1].duration} thumbnail={data[1].thumbnail} />
            <MeditationCardSmall meditation="0" title={data[2].title} time={data[2].duration} thumbnail={data[2].thumbnail} />
        </>
    )
}