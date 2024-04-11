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
                    
                    <div className={styles.moodIcon}></div>
                </div>
            </Link>
        </div>
        
    )
}
