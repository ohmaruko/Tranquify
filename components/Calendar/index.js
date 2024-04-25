import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import styles from './Calendar.module.css'; 

export default function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        className={styles.customCalendar}
        onChange={setDate}
        value={date}
      />
     
    </div>
  );
}
