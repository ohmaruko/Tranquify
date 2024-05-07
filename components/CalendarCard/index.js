import styles from "./CalendarCard.module.css";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function CalendarCard({i, icon, link, iconIndex}) {
    const [currentDate, setCurrentDate] = useState({ day: '', weekday: '' });
    const [mood, setMood] = useState("");

    const terribleArray = ["4", "1", "3", "1"];
    const okArray = ["2", "3", "3", "1"];
    const greatArray = ["0", "5", "5", "0"];

    useEffect(() => {
        const today = new Date();
        const previousDays = new Date(today);
        previousDays.setDate(today.getDate() - i);
        
        const options = { weekday: 'short', day: '2-digit' };
        const formattedDate = previousDays.toLocaleDateString('en-US', options);
        
        const [day, weekday] = formattedDate.split(' ');
        setCurrentDate({ day, weekday });
    }, []);

    useEffect(() => {
        if(iconIndex === 4) {
            setMood(terribleArray);
        } else if(iconIndex === 2) {
            setMood(okArray);
        } else if(iconIndex === 0) {
            setMood(greatArray);
        } 
    }, [iconIndex]);

    console.log("icon:" + icon);

    return (
        <div>
            <Link href={{ pathname: link, query: { mood: mood } }} className={styles.calendarCard}>
                <div className={styles.content}>
                    <div className={styles.calendarDate}>
                        <p className={styles.weekday}>{currentDate.weekday}</p>
                        <p className={styles.day}>{currentDate.day}</p>
                    </div>
                    
                    <div className={styles.moodIcon}>
                        <Image 
                            src={icon}
                            alt="add button"
                            width={45} height={45} 
                            className={styles.addButton}
                        />
                    </div>
                </div>
            </Link>
        </div>
        
    )
}
