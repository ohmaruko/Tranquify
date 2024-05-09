import styles from '../styles/Meditation.module.css';
import Image from 'next/image'
import TopBar from '@/components/TopBar';
import SearchBar from '@/components/SearchBar';
import LinkButton from '@/components/LinkButton';
import CategoryCard from '@/components/CategoryCard';
import MeditationCardMedium from '@/components/MeditationCardMedium';
import Navigation from '@/components/Navigation';
import { meditationData } from '@/data/meditation';
import Link from "next/link";

export default function MeditationMenu() {
    const data = meditationData.meditations

    return(
        <>
            <div className={styles.container}>
                <SearchBar />
                <div className={styles.pageTitleContainer}>
                    <h1 className={styles.pageTitle}>Meditation</h1>
                </div>
                <div className={styles.suggestionsContainer}>
                    <div className={styles.suggestionsTitle}>
                        <p>Suggestions</p>
                        <LinkButton link="./meditationSuggestions" linkText="View More" />
                    </div>
                    <div className={styles.meditationCards}>
                    {
                        data.map((item, index) => {
                            return(
                                <MeditationCardMedium meditation={index} title={item.title} time={item.duration} thumbnail={item.thumbnail} />
                            )
                        })
                    }
                        {/* <MeditationCardMedium meditation="0" title={data[0].title} time={data[0].duration} thumbnail={data[0].thumbnail} />
                        <MeditationCardMedium meditation="1" title={data[1].title} time={data[1].duration} thumbnail={data[1].thumbnail} />
                        <MeditationCardMedium meditation="2" title={data[2].title} time={data[2].duration} thumbnail={data[2].thumbnail} /> */}
                    </div>
                </div>
                <div className={styles.categoryContainer}>
                    <p>Meditation Category</p>
                    <div className={styles.categoryCards}>
                        <CategoryCard category="Mood and Goal" link="/meditationMoodAndGoal" graphic="/images/great-icon.svg" top="30px" left="-20px"/>
                        <CategoryCard category="Time" link="/meditationTime" graphic="/images/terrible-icon.svg"  top="-60px" left="60px"/>
                        <CategoryCard category="Music" link="/meditationMusic" graphic="/images/bad-icon.svg"  top="50px" left="60px"/>
                    </div>
                    <div className={styles.categoryCards}>
                        <div className={styles.favouriteCard}>
                            <Link href="/meditationFavourite" style={{textDecoration: 'none'}}>
                                <h1>Favourite</h1>
                                <div className={styles.mascot}>
                                    <Image src="/images/good-icon.svg" width="120" height="120"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Navigation/>
                </div>
            </div>
        </>
    )
}