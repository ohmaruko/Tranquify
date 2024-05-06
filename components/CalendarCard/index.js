import styles from "./CalendarCard.module.css";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CalendarCard({i}) {
    const [currentDate, setCurrentDate] = useState({ day: '', weekday: '' });

    useEffect(() => {
        const today = new Date();
        const previousDays = new Date(today);
        previousDays.setDate(today.getDate() - i);
        
        const options = { weekday: 'short', day: '2-digit' };
        const formattedDate = previousDays.toLocaleDateString('en-US', options);
        
        const [day, weekday] = formattedDate.split(' ');
        setCurrentDate({ day, weekday });
    }, []);

    return (
        <div>
            <Link href="/mood" className={styles.calendarCard}>
                <div className={styles.content}>
                    <div className={styles.calendarDate}>
                        <p className={styles.weekday}>{currentDate.weekday}</p>
                        <p className={styles.day}>{currentDate.day}</p>
                    </div>
                    
                    <div className={styles.moodIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle className={styles.addIcon} cx="20" cy="20" r="20"/>
                            <path d="M13 20H27" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            <path d="M20 13L20 27" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
            </Link>
        </div>
        
    )
}
