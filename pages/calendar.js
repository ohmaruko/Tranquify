import Navigation from '@/components/Navigation';
import { useState } from 'react';
import Calendar from 'react-calendar';
import styles from '@/styles/Calendar.module.css'
import TopBar from '@/components/TopBar';

export default function renderCalendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.container}>
      <TopBar backButton={true}/>

      {/* <h1>Calendar</h1> */}
      <div className={styles.calendarContainer}>
        <Calendar onChange={setDate} value={date} />
      </div>

      <p className={styles.textCenter}>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>


      <Navigation />
    </div>

  )
}

