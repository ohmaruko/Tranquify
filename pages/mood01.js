import styles from '../styles/mood01.module.css';
import TopBar from '@/components/TopBar';

export default function Mood01() {

    return(
        <>
            <div className={styles.container}>
                <TopBar backButton={true} link='homePage'/>
                
                <div>nav bar component</div>
            </div>
        </>
    )
}